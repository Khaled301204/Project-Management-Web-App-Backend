import { ProjectTaskStatusService } from './project_task_status.service';
import { CreateProjectTaskStatusDto } from './dto/create-project_task_status.dto';
import { UpdateProjectTaskStatusDto } from './dto/update-project_task_status.dto';
export declare class ProjectTaskStatusController {
    private readonly projectTaskStatusService;
    constructor(projectTaskStatusService: ProjectTaskStatusService);
    create(createProjectTaskStatusDto: CreateProjectTaskStatusDto): Promise<CreateProjectTaskStatusDto & import("./entities/project_task_status.entity").ProjectTaskStatus>;
    findAll(): Promise<import("./entities/project_task_status.entity").ProjectTaskStatus[]>;
    findOne(id: string): Promise<import("./entities/project_task_status.entity").ProjectTaskStatus | {
        message: string;
    }>;
    update(id: string, updateProjectTaskStatusDto: UpdateProjectTaskStatusDto): Promise<import("./entities/project_task_status.entity").ProjectTaskStatus>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
