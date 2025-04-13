import { UserTask } from 'src/user-tasks/entities/user-task.entity';
import { ProjectTaskStatus } from 'src/project_task_status/entities/project_task_status.entity';
export declare class UserBug {
    id: number;
    userTask_id: UserTask;
    project_task_status_id: ProjectTaskStatus;
    story_point: number;
    working_hours: number;
    priority: number;
    title: string;
    comment: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
