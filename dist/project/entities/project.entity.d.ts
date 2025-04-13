import { Message } from 'src/message/entities/message.entity';
import { ProjectDepartment } from 'src/project_departments/entities/project_department.entity';
import { ProjectTaskStatus } from 'src/project_task_status/entities/project_task_status.entity';
import { ProjectUser } from 'src/project_user/entities/project_user.entity';
export declare class Project {
    id: number;
    name: string;
    start_date: Date;
    end_date: Date;
    client_id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    projectUsers: ProjectUser[];
    projectTaskStatus: ProjectTaskStatus[];
    project_department: ProjectDepartment[];
    message: Message[];
}
