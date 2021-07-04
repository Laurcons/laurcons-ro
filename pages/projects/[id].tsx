import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { Mysql } from "../../lib/database";
import { ParseDbProject, Project, ProjectVersion, SerializableProjectVersion } from "../../lib/dbtypes";
import { SerializableProject, ParseDbProjectVersion } from './../../lib/dbtypes';
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import classnames from 'classnames';
import css from "../../styles/ProjectId.module.scss";

export const getServerSideProps: GetServerSideProps = (context) => {
	return new Promise<SerializableProject | null>((resolve, reject) => {
		Mysql.query("SELECT * FROM projects WHERE Id=?;", [context.params?.id], function(err, results: any[], fields) {
			if (err) reject(err);
            if (results.length > 0) {
                resolve(ParseDbProject(results[0]));
            } else {
                resolve(null);
            }
		});
	}).then(project => {
        if (!project) {
            return {
                notFound: true
            };
        } else {
            return new Promise((resolve, reject) => {
                Mysql.query("SELECT * FROM project_versions WHERE ProjectId=? ORDER BY ReleaseDate DESC;", [context.params?.id], function(err, results: any[]) {
                    if (err) reject(err);
                    resolve({
                        props: {
                            dbProject: project,
                            dbVersions: results.map(ParseDbProjectVersion)
                        }
                    })
                });
            });
        }
    });
};

export default function ProjectId(props: {dbProject: SerializableProject, dbVersions: SerializableProjectVersion[] }) {
    const project = Project(props.dbProject);
    return <>
        <div className="bg-light border border-primary rounded p-3 mb-3">
            <div className="row">
                <div className="col">
                    <h1>{project.title}</h1>
                    <div className="border-bottom border-primary mb-3">
                        <ReactMarkdown>
                            {project.shortDescMarkdown}
                        </ReactMarkdown>
                    </div>
                    <small className="text-muted">
                        <p>
                            Published: {project.creationDateStr} |
                            Updated: {project.updateDateStr}
                        </p>
                        {project.meta()["old-site-link"] &&
                            <p className="text-muted">
                                This project's information was ported from my old site.{" "}
                                <a href={project.meta()["old-site-link"]} target="_blank">Old Site Entry</a>
                            </p>
                        }
                    </small>
                </div>
                <div className="col-md-3">
                    { project.cardImageUrl &&
                        <img className="img-thumbnail rounded" src={project.cardImageUrl} />
                    }
                </div>
            </div>
        </div>
        <div className={classnames("card mb-3 ms-md-3 float-md-end", css.versionsCard)}>
            <div className="card-header">
                Versions and Downloads
            </div>
            <ul className="list-group list-group-flush">
                { props.dbVersions.map(ver => {
                    const version = ProjectVersion(ver);
                    // parse any other field
                    function parseField(name: string, field: string) {
                        if (field === null)
                            return null;
                        const parts = field.split('|');
                        return <>
                            <a href={parts[0]} target="_blank">{name}</a>
                            { parts.length > 1 &&
                            parts.slice(1).map((f, index) => <>
                                {" "}(
                                    <a href={f}>Mirror {index+1}</a>
                                )
                            </>)
                            }
                        </>;
                    }
                    // parse the OtherLinks field
                    const others: JSX.Element[] = (
                        version.otherLinks ?
                        version.otherLinks.split('|').map(linkPair => {
                            const sep = linkPair.split(':');
                            const tuple = [sep[0], sep.slice(1).join(':')];
                            return <>
                                <a href={tuple[1]} target="_blank">{tuple[0]}</a>
                            </>;
                        }) :
                        []
                    );
                    return <>
                        <ul key={version.id} className="list-group-item">
                            {version.versionNumber}:{" "}
                            {[
                                parseField("Play", version.playUrl),
                                parseField("Installer", version.installerUrl),
                                parseField("ZIP", version.ZIPUrl),
                                parseField("Changelog", version.changelogUrl),
                                ...others
                            ].filter(e => e !== null)
                            .reduce((acc, x) => acc === null ? x : <>{acc} / {x}</>)}
                            {version.releaseDateStr && <>
                                {" "}
                                ({version.releaseDateStr})
                            </>}
                        </ul>
                    </>;
                })
                }
            </ul>
        </div>
        <div>
            <ReactMarkdown>
                {project.longDescMarkdown}
            </ReactMarkdown>
        </div>
    </>;
}