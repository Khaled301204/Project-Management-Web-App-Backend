import { CreateProjectDepartmentDto } from './dto/create-project_department.dto';
import { UpdateProjectDepartmentDto } from './dto/update-project_department.dto';
import { ProjectDepartment } from './entities/project_department.entity';
import { Repository } from 'typeorm';
import { Expose } from 'src/classes';
export declare class ProjectDepartmentsService {
    private readonly response;
    private readonly projectDepartmentRepository;
    constructor(response: Expose, projectDepartmentRepository: Repository<ProjectDepartment>);
    create(createProjectDepartmentDto: CreateProjectDepartmentDto): Promise<import("../interfaces").Response>;
    findAll(): Promise<import("../interfaces").Response>;
    findOne(id: number): Promise<import("../interfaces").Response>;
    update(id: number, updateProjectDepartmentDto: UpdateProjectDepartmentDto): Promise<import("../interfaces").Response>;
    remove(id: number): Promise<import("../interfaces").Response>;
}
