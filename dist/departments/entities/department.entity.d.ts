import { ProjectDepartment } from 'src/project_departments/entities/project_department.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { User } from 'src/user/entities/user.entity';
export declare class Department {
    id: number;
    department: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    user: User[];
    task: Task[];
    project_department: ProjectDepartment[];
}
