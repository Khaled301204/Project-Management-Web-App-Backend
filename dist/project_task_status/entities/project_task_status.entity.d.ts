import { Project } from './../../project/entities/project.entity';
export declare class ProjectTaskStatus {
    id: number;
    project_id: Project;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
