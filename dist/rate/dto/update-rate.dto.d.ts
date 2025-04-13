import { CreateRateDto } from './create-rate.dto';
import { User } from 'src/user/entities/user.entity';
declare const UpdateRateDto_base: import("@nestjs/common").Type<Partial<CreateRateDto>>;
export declare class UpdateRateDto extends UpdateRateDto_base {
    rate: number;
    month: Date;
    year: Date;
    user_id: User;
    rated_by_user_id: User;
}
export {};
