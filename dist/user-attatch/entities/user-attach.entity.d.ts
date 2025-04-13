import { User } from "src/user/entities/user.entity";
export declare class UserAttach {
    id: number;
    user_id: User;
    file_path: string;
    birth_certificate: string;
    military_certificate: string;
    national_id: number;
    bank_account: number;
    address: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
