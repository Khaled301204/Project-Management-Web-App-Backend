import { ProjectDepartmentsService } from './project_departments.service';
import { CreateProjectDepartmentDto } from './dto/create-project_department.dto';
import { UpdateProjectDepartmentDto } from './dto/update-project_department.dto';
export declare class ProjectDepartmentsController {
    private readonly projectDepartmentsService;
    constructor(projectDepartmentsService: ProjectDepartmentsService);
    create(createProjectDepartmentDto: CreateProjectDepartmentDto): Promise<import("../interfaces").Response>;
    findAll(): Promise<import("../interfaces").Response>;
    findOne(id: string): Promise<import("../interfaces").Response>;
    update(id: string, updateProjectDepartmentDto: UpdateProjectDepartmentDto): Promise<import("../interfaces").Response>;
    remove(id: string): Promise<import("../interfaces").Response>;
}
