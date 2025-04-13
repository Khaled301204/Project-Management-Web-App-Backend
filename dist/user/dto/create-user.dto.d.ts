import { UserGender } from "../entities/user.entity";
import { Department } from "src/departments/entities/department.entity";
export declare class CreateUserDto {
    department_id: Department;
    username: string;
    email: string;
    password: string;
    gender: UserGender;
    birth_date: Date;
    profile: string;
    rate: number;
}
