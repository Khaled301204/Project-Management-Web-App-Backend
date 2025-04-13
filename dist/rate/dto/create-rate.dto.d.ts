import { User } from "src/user/entities/user.entity";
export declare class CreateRateDto {
    rate: number;
    month: Date;
    year: Date;
    user_id: User;
    rated_by_user_id: User;
}
