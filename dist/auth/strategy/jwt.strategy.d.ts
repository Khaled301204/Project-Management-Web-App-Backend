import { UserService } from "src/user/user.service";
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate(request: Request, validationPayload: {
        id: number;
    }): Promise<{
        role: import("../../user/entities/user.entity").UserRole;
        id: number;
        department_id: import("../../departments/entities/department.entity").Department;
        username: string;
        password: string;
        email: string;
        gender: import("../../user/entities/user.entity").UserGender;
        birth_date: Date;
        is_active: boolean;
        profile: string;
        rate: number;
        accessToken: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date;
        projectUsers: import("../../project_user/entities/project_user.entity").ProjectUser[];
        userTasks: import("../../user-tasks/entities/user-task.entity").UserTask[];
        userRate: import("../../rate/entities/rate.entity").Rate[];
        usersRatedByUser: import("../../rate/entities/rate.entity").Rate[];
        messageSend: import("../../message/entities/message.entity").Message[];
        messageReceived: import("../../message/entities/message.entity").Message[];
        project: import("../../project/entities/project.entity").Project;
    }>;
    private extractJwtToken;
}
export {};
