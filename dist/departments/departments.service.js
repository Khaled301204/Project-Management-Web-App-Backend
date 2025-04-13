"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const department_entity_1 = require("./entities/department.entity");
const typeorm_2 = require("typeorm");
const classes_1 = require("../classes");
let DepartmentsService = class DepartmentsService {
    constructor(departmentsRepository, expose) {
        this.departmentsRepository = departmentsRepository;
        this.expose = expose;
    }
    async create(createDepartmentDto, user) {
        if (user.role !== 'manager')
            return this.expose.error('Only manager can perform this action.', classes_1.ErrorStatusCodesEnum.Forbidden);
        try {
            const newDepartment = await this.departmentsRepository.save({
                ...createDepartmentDto,
            });
            return this.expose.success(classes_1.SuccessStatusCodesEnum.Created, 'Department created successfully', newDepartment, true);
        }
        catch (error) {
            return this.expose.error(error, classes_1.ErrorStatusCodesEnum.BadRequest);
        }
    }
    async findAll() {
        try {
            const departments = await this.departmentsRepository.find();
            return this.expose.success(classes_1.SuccessStatusCodesEnum.Ok, 'Departments fetched successfully', departments, true);
        }
        catch (error) {
            return this.expose.error(error, classes_1.ErrorStatusCodesEnum.InternalServerError);
        }
    }
    async findOne(id) {
        try {
            const department = await this.departmentsRepository.findOne({
                where: { id },
            });
            if (!department) {
                return this.expose.error('Deparment not found', classes_1.ErrorStatusCodesEnum.NotFound);
            }
            return this.expose.success(classes_1.SuccessStatusCodesEnum.Ok, 'Department found', department, true);
        }
        catch (error) {
            return this.expose.error(error, classes_1.ErrorStatusCodesEnum.InternalServerError);
        }
    }
    async update(id, updateDepartmentDto, user) {
        if (user.role !== 'manager')
            return this.expose.error('Only manager can update departments.', classes_1.ErrorStatusCodesEnum.Forbidden);
        try {
            const department = await this.departmentsRepository.findOne({
                where: { id },
            });
            if (!department) {
                return this.expose.error('Deparment not found', classes_1.ErrorStatusCodesEnum.NotFound);
            }
            Object.assign(department, updateDepartmentDto);
            const updated = await this.departmentsRepository.save(department);
            return this.expose.success(classes_1.SuccessStatusCodesEnum.Ok, 'Department updated successfully', updated, true);
        }
        catch (error) {
            return this.expose.error(error, classes_1.ErrorStatusCodesEnum.InternalServerError);
        }
    }
    async remove(id, user) {
        if (user.role !== 'manager')
            return this.expose.error('Only manager can delete departments.', classes_1.ErrorStatusCodesEnum.Forbidden);
        try {
            const department = await this.departmentsRepository.softDelete(id);
            if (department.affected === 0) {
                return this.expose.error('Deparment not found', classes_1.ErrorStatusCodesEnum.NotFound);
            }
            return this.expose.success(classes_1.SuccessStatusCodesEnum.Ok, 'Department deleted successfully', null, true);
        }
        catch (error) {
            return this.expose.error(error, classes_1.ErrorStatusCodesEnum.InternalServerError);
        }
    }
};
exports.DepartmentsService = DepartmentsService;
exports.DepartmentsService = DepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(department_entity_1.Department)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        classes_1.Expose])
], DepartmentsService);
//# sourceMappingURL=departments.service.js.map