import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { ProjectUser } from 'src/project_user/entities/project_user.entity';
import { Expose } from 'src/classes';
export declare class ProjectService {
    private readonly response;
    private readonly projectRepository;
    private readonly projectUserRepository;
    constructor(response: Expose, projectRepository: Repository<Project>, projectUserRepository: Repository<ProjectUser>);
    create(createProjectDto: CreateProjectDto): Promise<import("../interfaces").Response>;
    findAll(): Promise<import("../interfaces").Response>;
    findOne(id: number, request: any): Promise<import("../interfaces").Response>;
    update(id: number, updateProjectDto: UpdateProjectDto): Promise<import("../interfaces").Response>;
    remove(id: number): Promise<import("../interfaces").Response>;
}
