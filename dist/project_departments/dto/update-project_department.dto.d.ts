import { CreateProjectDepartmentDto } from './create-project_department.dto';
import { Department } from 'src/departments/entities/department.entity';
import { Project } from 'src/project/entities/project.entity';
declare const UpdateProjectDepartmentDto_base: import("@nestjs/common").Type<Partial<CreateProjectDepartmentDto>>;
export declare class UpdateProjectDepartmentDto extends UpdateProjectDepartmentDto_base {
    department_id: Department;
    project_id: Project;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
export {};
