import { CreateUserBugDto } from './dto/create-user_bug.dto';
import { UpdateUserBugDto } from './dto/update-user_bug.dto';
export declare class UserBugsService {
    create(createUserBugDto: CreateUserBugDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserBugDto: UpdateUserBugDto): string;
    remove(id: number): string;
}
