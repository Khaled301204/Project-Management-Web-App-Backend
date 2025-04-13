import { User } from "src/user/entities/user.entity";
export declare class Rate {
    id: number;
    user_id: User;
    rated_by_id: User;
    rate: number;
    month: Date;
    year: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
