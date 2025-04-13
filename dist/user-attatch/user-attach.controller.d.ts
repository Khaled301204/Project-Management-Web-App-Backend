import { UserAttachService } from './user-attach.service';
import { CreateUserAttachDto } from './dto/create-user-attach.dto';
import { UpdateUserAttachDto } from './dto/update-user-attach.dto';
export declare class UserAttachController {
    private readonly userAttachService;
    constructor(userAttachService: UserAttachService);
    create(dto: CreateUserAttachDto, req: any): Promise<import("./entities/user-attach.entity").UserAttach>;
    findAll(): Promise<import("./entities/user-attach.entity").UserAttach[]>;
    findOne(id: string): Promise<import("./entities/user-attach.entity").UserAttach>;
    update(id: string, dto: UpdateUserAttachDto, req: any): Promise<string>;
    delete(id: string, req: any): Promise<void>;
}
