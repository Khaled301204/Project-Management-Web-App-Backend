import { Department } from "src/departments/entities/department.entity";
import { Message } from "src/message/entities/message.entity";
import { Project } from "src/project/entities/project.entity";
import { ProjectUser } from "src/project_user/entities/project_user.entity";
import { Rate } from "src/rate/entities/rate.entity";
import { UserTask } from "src/user-tasks/entities/user-task.entity";
export declare enum UserGender {
    Male = "male",
    Female = "female"
}
export declare enum UserRole {
    Manager = "manager",
    Developer = "developer",
    Tester = "tester",
    Designer = "designer"
}
export declare class User {
    id: number;
    department_id: Department;
    username: string;
    password: string;
    email: string;
    gender: UserGender;
    birth_date: Date;
    is_active: boolean;
    profile: string;
    rate: number;
    accessToken: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    projectUsers: ProjectUser[];
    userTasks: UserTask[];
    userRate: Rate[];
    usersRatedByUser: Rate[];
    messageSend: Message[];
    messageReceived: Message[];
    project: Project;
}
