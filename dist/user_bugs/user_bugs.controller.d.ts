import { UserBugsService } from './user_bugs.service';
import { CreateUserBugDto } from './dto/create-user_bug.dto';
import { UpdateUserBugDto } from './dto/update-user_bug.dto';
export declare class UserBugsController {
    private readonly userBugsService;
    constructor(userBugsService: UserBugsService);
    create(createUserBugDto: CreateUserBugDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserBugDto: UpdateUserBugDto): string;
    remove(id: string): string;
}
