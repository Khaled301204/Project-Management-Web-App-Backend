import { ProjectUserService } from './project_user.service';
import { CreateProjectUserDto } from './dto/create-project_user.dto';
import { UpdateProjectUserDto } from './dto/update-project_user.dto';
import { Project } from 'src/project/entities/project.entity';
export declare class ProjectUserController {
    private readonly projectUserService;
    constructor(projectUserService: ProjectUserService);
    create(createProjectUserDto: CreateProjectUserDto): Promise<import("../interfaces").Response>;
    findAll(project_id: Project): Promise<import("../interfaces").Response> | {
        message: string;
    };
    findOne(id: string): Promise<import("../interfaces").Response>;
    update(id: string, updateProjectUserDto: UpdateProjectUserDto): Promise<import("../interfaces").Response>;
    remove(id: string): Promise<import("../interfaces").Response>;
}
