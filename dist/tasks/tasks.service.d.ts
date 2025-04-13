import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { Expose } from 'src/classes';
export declare class TasksService {
    private readonly Response;
    private readonly tasksRepository;
    constructor(Response: Expose, tasksRepository: Repository<Task>);
    create(createTaskDto: CreateTaskDto): Promise<import("../interfaces").Response>;
    findAll(): Promise<import("../interfaces").Response>;
    findOne(id: number): Promise<import("../interfaces").Response>;
    update(id: number, updateTaskDto: UpdateTaskDto): Promise<import("../interfaces").Response>;
    remove(id: number): Promise<import("../interfaces").Response>;
}
