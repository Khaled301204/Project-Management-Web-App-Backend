import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
import { Repository } from 'typeorm';
import { Expose } from 'src/classes';
export declare class DepartmentsService {
    private readonly departmentsRepository;
    private readonly expose;
    constructor(departmentsRepository: Repository<Department>, expose: Expose);
    create(createDepartmentDto: CreateDepartmentDto, user: any): Promise<import("../interfaces").Response>;
    findAll(): Promise<import("../interfaces").Response>;
    findOne(id: number): Promise<import("../interfaces").Response>;
    update(id: number, updateDepartmentDto: UpdateDepartmentDto, user: any): Promise<import("../interfaces").Response>;
    remove(id: number, user: any): Promise<import("../interfaces").Response>;
}
