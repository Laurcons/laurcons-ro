
import { DateTime } from "luxon";

export interface SerializableProject {
    id: number;
    title: string;
    shortDescMarkdown: string;
    longDescMarkdown: string;
    cardImageUrl?: string;
    creationDateStr: string;
    updateDateStr: string;
    metaJson: string;
};
export function Project(project: SerializableProject) {
    return {
        ...project,
        meta: function() {
            return JSON.parse(this.metaJson);
        },
        get creationDate(): DateTime {
            return DateTime.fromISO(this.creationDateStr);
        },
        get updateDate(): DateTime {
            return DateTime.fromISO(this.updateDateStr);
        }
    };
}
export type ProjectData = ReturnType<typeof Project>;

export function ParseDbProject(dbProject: any): SerializableProject {
    return {
        id: dbProject.Id,
        title: dbProject.Title,
        shortDescMarkdown: dbProject.ShortDescMarkdown,
        longDescMarkdown: dbProject.LongDescMarkdown,
        cardImageUrl: dbProject.CardImageUrl,
        creationDateStr: dbProject.CreationDate,
        updateDateStr: dbProject.UpdateDate,
        metaJson: dbProject.MetaJson
    };
}

export interface SerializableProjectVersion {
    id: string;
    projectId: string;
    versionNumber: string;
    changelogUrl: string;
    playUrl: string;
    installerUrl: string;
    ZIPUrl: string;
    otherLinks: string;
    releaseDateStr: string;
}

export function ProjectVersion(version: SerializableProjectVersion) {
    return {
        ...version,
        get releaseDate(): DateTime {
            return DateTime.fromISO(this.releaseDateStr);
        }
    };
}

export function ParseDbProjectVersion(dbVersion: any): SerializableProjectVersion {
    return {
        id: dbVersion.Id,
        projectId: dbVersion.ProjectId,
        versionNumber: dbVersion.VersionNumber,
        changelogUrl: dbVersion.ChangelogUrl,
        playUrl: dbVersion.PlayUrl,
        installerUrl: dbVersion.InstallerUrl,
        ZIPUrl: dbVersion.ZIPUrl,
        otherLinks: dbVersion.OtherLinks,
        releaseDateStr: dbVersion.ReleaseDate
    };
}