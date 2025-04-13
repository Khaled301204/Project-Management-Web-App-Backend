import { User } from "src/user/entities/user.entity";
export declare class CreateUserAttachDto {
    id: number;
    user_id: User;
    file_name: string;
    file_path: string;
    file_size: number;
    mime_type: string;
    birth_certificate?: string;
    military_certificate?: string;
    national_id?: number;
    bank_account?: number;
    address?: string;
}
