import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { AuthService } from 'src/auth/auth.service';
import { LoginDto } from './dto/login-user.dto';
import { Expose } from 'src/classes';
export declare class UserService {
    private readonly response;
    private readonly userRepository;
    private readonly jwtService;
    constructor(response: Expose, userRepository: Repository<User>, jwtService: AuthService);
    create(createUserDto: CreateUserDto): Promise<import("../interfaces").Response>;
    updateAccessToken(userId: number, accessToken: string): Promise<User>;
    logIn(loginDto: LoginDto): Promise<import("../interfaces").Response>;
    findAll(): string;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
