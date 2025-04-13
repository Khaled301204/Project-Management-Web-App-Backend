import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
export declare class DepartmentsController {
    private readonly departmentsService;
    constructor(departmentsService: DepartmentsService);
    create(createDepartmentDto: CreateDepartmentDto, req: any): Promise<import("../interfaces").Response>;
    findAll(): Promise<import("../interfaces").Response>;
    findOne(id: string): Promise<import("../interfaces").Response>;
    update(id: string, updateDepartmentDto: UpdateDepartmentDto, req: any): Promise<import("../interfaces").Response>;
    remove(id: string, req: any): Promise<import("../interfaces").Response>;
}
