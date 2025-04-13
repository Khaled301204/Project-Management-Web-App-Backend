import { CreateProjectTaskStatusDto } from './create-project_task_status.dto';
import { Project } from 'src/project/entities/project.entity';
declare const UpdateProjectTaskStatusDto_base: import("@nestjs/common").Type<Partial<CreateProjectTaskStatusDto>>;
export declare class UpdateProjectTaskStatusDto extends UpdateProjectTaskStatusDto_base {
    project_id: Project;
    status: string;
}
export {};
