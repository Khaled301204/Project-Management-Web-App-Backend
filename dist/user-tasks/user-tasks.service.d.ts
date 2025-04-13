import { CreateUserTaskDto } from './dto/create-user-task.dto';
import { UpdateUserTaskDto } from './dto/update-user-task.dto';
import { Expose } from '../classes/expose';
export declare class UserTasksService {
    private readonly response;
    constructor(response: Expose);
    create(createUserTaskDto: CreateUserTaskDto): import("../interfaces").Response | "This action adds a new userTask";
    findAll(): import("../interfaces").Response | "This action returns all userTasks";
    findOne(id: number): string | import("../interfaces").Response;
    update(id: number, updateUserTaskDto: UpdateUserTaskDto): string | import("../interfaces").Response;
    remove(id: number): string | import("../interfaces").Response;
}
