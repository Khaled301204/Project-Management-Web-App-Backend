import { CreateProjectUserDto } from './dto/create-project_user.dto';
import { UpdateProjectUserDto } from './dto/update-project_user.dto';
import { ProjectUser } from './entities/project_user.entity';
import { Repository } from 'typeorm';
import { Project } from 'src/project/entities/project.entity';
import { Expose } from 'src/classes';
export declare class ProjectUserService {
    private readonly projectUserRepository;
    private readonly expose;
    constructor(projectUserRepository: Repository<ProjectUser>, expose: Expose);
    create(createProjectUserDto: CreateProjectUserDto): Promise<import("../interfaces").Response>;
    findAll(project_id: Project): Promise<import("../interfaces").Response>;
    findOne(id: number): Promise<import("../interfaces").Response>;
    update(id: number, updateProjectUserDto: UpdateProjectUserDto): Promise<import("../interfaces").Response>;
    remove(id: number): Promise<import("../interfaces").Response>;
}
