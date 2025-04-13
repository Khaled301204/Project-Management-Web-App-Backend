import { CreateProjectTaskStatusDto } from './dto/create-project_task_status.dto';
import { UpdateProjectTaskStatusDto } from './dto/update-project_task_status.dto';
import { ProjectTaskStatus } from './entities/project_task_status.entity';
import { Repository } from 'typeorm';
export declare class ProjectTaskStatusService {
    private readonly projectTaskStatusRepository;
    constructor(projectTaskStatusRepository: Repository<ProjectTaskStatus>);
    create(dto: CreateProjectTaskStatusDto): Promise<CreateProjectTaskStatusDto & ProjectTaskStatus>;
    findAll(): Promise<ProjectTaskStatus[]>;
    findOne(id: number): Promise<ProjectTaskStatus | {
        message: string;
    }>;
    update(id: number, updateProjectTaskStatusDto: UpdateProjectTaskStatusDto): Promise<ProjectTaskStatus>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
