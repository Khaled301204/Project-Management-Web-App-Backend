import { UserTasksService } from './user-tasks.service';
import { CreateUserTaskDto } from './dto/create-user-task.dto';
import { UpdateUserTaskDto } from './dto/update-user-task.dto';
export declare class UserTasksController {
    private readonly userTasksService;
    constructor(userTasksService: UserTasksService);
    create(createUserTaskDto: CreateUserTaskDto): import("../interfaces").Response | "This action adds a new userTask";
    findAll(): import("../interfaces").Response | "This action returns all userTasks";
    findOne(id: string): string | import("../interfaces").Response;
    update(id: string, updateUserTaskDto: UpdateUserTaskDto): string | import("../interfaces").Response;
    remove(id: string): string | import("../interfaces").Response;
}
