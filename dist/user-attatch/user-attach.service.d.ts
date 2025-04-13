import { Repository } from 'typeorm';
import { UserAttach } from './entities/user-attach.entity';
import { CreateUserAttachDto } from './dto/create-user-attach.dto';
import { UpdateUserAttachDto } from './dto/update-user-attach.dto';
export declare class UserAttachService {
    private readonly userAttachRepository;
    constructor(userAttachRepository: Repository<UserAttach>);
    create(createUserAttachDto: CreateUserAttachDto): Promise<UserAttach>;
    findAll(): Promise<UserAttach[]>;
    findOne(id: number): Promise<UserAttach>;
    update(id: number, updateUserAttachDto: UpdateUserAttachDto): Promise<string>;
    delete(id: number): Promise<void>;
}
