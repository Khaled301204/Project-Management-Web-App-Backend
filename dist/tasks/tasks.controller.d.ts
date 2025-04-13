import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto): Promise<import("../interfaces").Response>;
    findAll(): Promise<import("../interfaces").Response>;
    findOne(id: string): Promise<import("../interfaces").Response>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<import("../interfaces").Response>;
    remove(id: string): Promise<import("../interfaces").Response>;
}
