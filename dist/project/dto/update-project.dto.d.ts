import { CreateProjectDto } from './create-project.dto';
declare const UpdateProjectDto_base: import("@nestjs/common").Type<Partial<CreateProjectDto>>;
export declare class UpdateProjectDto extends UpdateProjectDto_base {
    name: string;
    start_date: Date;
    end_date: Date;
    client_id: number;
}
export {};
