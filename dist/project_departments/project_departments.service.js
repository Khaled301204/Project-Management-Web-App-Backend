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
exports.ProjectDepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const project_department_entity_1 = require("./entities/project_department.entity");
const typeorm_2 = require("typeorm");
const classes_1 = require("../classes");
let ProjectDepartmentsService = class ProjectDepartmentsService {
    constructor(response, projectDepartmentRepository) {
        this.response = response;
        this.projectDepartmentRepository = projectDepartmentRepository;
    }
    async create(createProjectDepartmentDto) {
        try {
            const projectDepartment = this.projectDepartmentRepository.create(createProjectDepartmentDto);
            const savedProjectDepartment = await this.projectDepartmentRepository.save(projectDepartment);
            return this.response.success(classes_1.SuccessStatusCodesEnum.Ok, 'Project Department created successfully', savedProjectDepartment);
        }
        catch (error) {
            return this.response.error(error, classes_1.ErrorStatusCodesEnum.BadRequest);
        }
    }
    async findAll() {
        try {
            const projectDepartments = await this.projectDepartmentRepository.find();
            return this.response.success(classes_1.SuccessStatusCodesEnum.Ok, 'All Project Departments fetched successfully', projectDepartments);
        }
        catch (error) {
            return this.response.error(error, classes_1.ErrorStatusCodesEnum.NotFound);
        }
    }
    async findOne(id) {
        try {
            const projectDepartment = await this.projectDepartmentRepository.findOne({
                where: { id },
            });
            if (!projectDepartment) {
                throw new Error('projectDepartment not found ');
            }
            return this.response.success(classes_1.SuccessStatusCodesEnum.Ok, 'Project Department fetched successfully', projectDepartment);
        }
        catch (error) {
            return this.response.error(error, classes_1.ErrorStatusCodesEnum.NotFound);
        }
    }
    async update(id, updateProjectDepartmentDto) {
        try {
            const projectDepartment = await this.projectDepartmentRepository.findOne({
                where: { id },
            });
            if (!projectDepartment) {
                throw new Error('projectDepartment not found ');
            }
            const updatedProjectDepartment = await this.projectDepartmentRepository.update(id, updateProjectDepartmentDto);
            return this.response.success(classes_1.SuccessStatusCodesEnum.Ok, 'Project Department updated successfully', updatedProjectDepartment);
        }
        catch (error) {
            return this.response.error(error, classes_1.ErrorStatusCodesEnum.NotFound);
        }
    }
    async remove(id) {
        try {
            const projectDepartment = await this.projectDepartmentRepository.findOne({
                where: { id },
            });
            if (!projectDepartment) {
                throw new Error('projectDepartment not found ');
            }
            const deletedProjectDepartment = await this.projectDepartmentRepository.softDelete(id);
            return this.response.success(classes_1.SuccessStatusCodesEnum.Ok, 'Project Department removed successfully', deletedProjectDepartment);
        }
        catch (error) {
            return this.response.error(error, classes_1.ErrorStatusCodesEnum.BadRequest);
        }
    }
};
exports.ProjectDepartmentsService = ProjectDepartmentsService;
exports.ProjectDepartmentsService = ProjectDepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(project_department_entity_1.ProjectDepartment)),
    __metadata("design:paramtypes", [classes_1.Expose,
        typeorm_2.Repository])
], ProjectDepartmentsService);
//# sourceMappingURL=project_departments.service.js.map