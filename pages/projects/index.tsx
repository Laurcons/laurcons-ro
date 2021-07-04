import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Mysql } from "../../lib/database";
import { ParseDbProject, SerializableProject } from "../../lib/dbtypes";
import Head from "next/head";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = (context) => {
	return new Promise<any[]>((resolve, reject) => {
		Mysql.query("SELECT * FROM projects ORDER BY UpdateDate DESC;", [context.params?.id], function(err, results: any[], fields) {
			if (err) reject(err);
            resolve(results);
		});
	}).then(projects => {
        return Promise.all(projects.map(project => new Promise<{project: any, versionCount: number}>((resolve, reject) => {
            Mysql.query("SELECT COUNT(*) FROM project_versions WHERE ProjectId=?;", [project.Id], function(err, results: any[]) {
                if (err) reject(err);
                resolve({
                    project: ParseDbProject(project),
                    versionCount: results[0]["COUNT(*)"]
                });
            });
        })));
    }).then(results => {
        return {
            props: {
                dbProjects: results
            }
        };
    });
};

export default function ProjectsPage(props: { dbProjects: { project: SerializableProject, versionCount: number }[] }) {
    return <>
        <Head>
            <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js" defer></script>
        </Head>
        <div className="row" data-masonry='{"percentPositions": true}'>
            {props.dbProjects.map(projectWithMeta => {
                const project = projectWithMeta.project;
                return <>
                    <div className="col-md-4" key={project.id}>
                        <div className="card mb-3">
                            { project.cardImageUrl &&
                                <img src={project.cardImageUrl} className="card-img-top" />
                            }
                            <div className="card-body">
                                <h4>{project.title}</h4>
                                <div>
                                    <ReactMarkdown>
                                        {project.shortDescMarkdown}
                                    </ReactMarkdown>
                                </div>
                                <Link href={`/projects/${project.id}`}>
                                    <a className="btn btn-primary float-end">
                                        View project
                                    </a>
                                </Link>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    Versions: {projectWithMeta.versionCount}
                                </li>
                            </ul>
                            <div className="card-footer">
                                <small className="text-muted">
                                    Published: {project.creationDateStr} |
                                    Updated: {project.updateDateStr}
                                </small>
                            </div>
                        </div>
                    </div>
                </>;
            })}
        </div>
    </>;
}