import { RateService } from './rate.service';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
export declare class RateController {
    private readonly rateService;
    constructor(rateService: RateService);
    create(createRateDto: CreateRateDto): Promise<import("../interfaces").Response>;
    findAll(): Promise<import("../interfaces").Response>;
    findOne(): Promise<import("../interfaces").Response>;
    update(id: string, updateRateDto: UpdateRateDto): Promise<import("../interfaces").Response>;
    remove(id: string): Promise<import("../interfaces").Response>;
}
