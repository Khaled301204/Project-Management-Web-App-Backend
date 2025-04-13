import { Project } from 'src/project/entities/project.entity';
import { User } from 'src/user/entities/user.entity';
export declare class ProjectUser {
    id: number;
    project_id: Project;
    user_id: User;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
