import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { Rate } from './entities/rate.entity';
import { Repository } from 'typeorm';
import { Expose } from 'src/classes';
export declare class RateService {
    private readonly userRepository;
    response: Expose;
    constructor(userRepository: Repository<Rate>);
    create(createRateDto: CreateRateDto): Promise<import("../interfaces").Response>;
    findAll(): Promise<import("../interfaces").Response>;
    findOne(): Promise<import("../interfaces").Response>;
    update(id: number, updateRateDto: UpdateRateDto): Promise<import("../interfaces").Response>;
    remove(id: number): Promise<import("../interfaces").Response>;
}
