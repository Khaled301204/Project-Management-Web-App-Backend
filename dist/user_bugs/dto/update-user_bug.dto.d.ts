import { CreateUserBugDto } from './create-user_bug.dto';
declare const UpdateUserBugDto_base: import("@nestjs/common").Type<Partial<CreateUserBugDto>>;
export declare class UpdateUserBugDto extends UpdateUserBugDto_base {
    userTask_id?: number;
    project_task_status_id?: number;
    story_point?: number;
    working_hours?: number;
    priority?: number;
    title?: string;
    comment?: string;
    description?: string;
}
export {};
