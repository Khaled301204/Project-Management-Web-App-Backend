import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    create(createProjectDto: CreateProjectDto): Promise<import("../interfaces").Response>;
    findAll(): Promise<import("../interfaces").Response>;
    findOne(id: string, request: any): Promise<import("../interfaces").Response>;
    update(id: string, updateProjectDto: UpdateProjectDto): Promise<import("../interfaces").Response>;
    remove(id: string): Promise<import("../interfaces").Response>;
}
