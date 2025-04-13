import { CreateUserTaskDto } from './create-user-task.dto';
declare const UpdateUserTaskDto_base: import("@nestjs/common").Type<Partial<CreateUserTaskDto>>;
export declare class UpdateUserTaskDto extends UpdateUserTaskDto_base {
    user_id?: number;
    task_id?: number;
    project_task_status_id?: number;
    start_date?: number;
    end_date?: number;
    actual_working_time?: number;
}
export {};
