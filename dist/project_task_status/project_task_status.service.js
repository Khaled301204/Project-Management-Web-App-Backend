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
exports.ProjectTaskStatusService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const project_task_status_entity_1 = require("./entities/project_task_status.entity");
const typeorm_2 = require("typeorm");
let ProjectTaskStatusService = class ProjectTaskStatusService {
    constructor(projectTaskStatusRepository) {
        this.projectTaskStatusRepository = projectTaskStatusRepository;
    }
    async create(dto) {
        try {
            return await this.projectTaskStatusRepository.save(dto);
        }
        catch (error) {
            console.log(error);
        }
    }
    async findAll() {
        return await this.projectTaskStatusRepository.find();
    }
    async findOne(id) {
        try {
            const taskStatus = await this.projectTaskStatusRepository.findOne({
                where: { id },
                relations: ['project'],
            });
            if (!taskStatus) {
                console.log(`Project task status with ID ${id} not found`);
                return { message: `Project task status not found` };
            }
            return taskStatus;
        }
        catch (error) {
            console.log('Error finding project task status:', error);
            throw error;
        }
    }
    async update(id, updateProjectTaskStatusDto) {
        try {
            const projectTask = await this.projectTaskStatusRepository.findOne({
                where: { id }
            });
            if (!projectTask) {
                console.log('This Project Task Status ID is not found');
                return null;
            }
            Object.assign(projectTask, updateProjectTaskStatusDto);
            return await this.projectTaskStatusRepository.save(projectTask);
        }
        catch (error) {
            console.log('Error updating project task status:', error);
            throw error;
        }
    }
    async remove(id) {
        try {
            const projectTask = await this.projectTaskStatusRepository.findOne({ where: { id } });
            if (!projectTask) {
                console.log(`Project Task Status with ID ${id} not found`);
                return null;
            }
            await this.projectTaskStatusRepository.softDelete(id);
            console.log(`Project Task Status with ID ${id} has been deleted`);
            return { message: `Project Task Status with ID ${id} successfully deleted` };
        }
        catch (error) {
            console.log('Error deleting project task status:', error);
            throw error;
        }
    }
};
exports.ProjectTaskStatusService = ProjectTaskStatusService;
exports.ProjectTaskStatusService = ProjectTaskStatusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_task_status_entity_1.ProjectTaskStatus)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProjectTaskStatusService);
//# sourceMappingURL=project_task_status.service.js.map