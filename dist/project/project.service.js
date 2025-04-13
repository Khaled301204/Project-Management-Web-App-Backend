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
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const project_entity_1 = require("./entities/project.entity");
const project_user_entity_1 = require("../project_user/entities/project_user.entity");
const classes_1 = require("../classes");
let ProjectService = class ProjectService {
    constructor(response, projectRepository, projectUserRepository) {
        this.response = response;
        this.projectRepository = projectRepository;
        this.projectUserRepository = projectUserRepository;
    }
    async create(createProjectDto) {
        try {
            const newProject = await this.projectRepository.save({ ...createProjectDto, });
            return this.response.success(classes_1.SuccessStatusCodesEnum.Ok, "Created Successfully", newProject);
        }
        catch (error) {
            return this.response.error(error, classes_1.ErrorStatusCodesEnum.BadRequest);
        }
    }
    async findAll() {
        try {
            const projects = await this.projectRepository.find();
            if (!projects) {
                return this.response.error(`No Projects found`, classes_1.ErrorStatusCodesEnum.NotFound);
            }
            else {
                return this.response.success(classes_1.SuccessStatusCodesEnum.Ok, "Created Successfully", projects);
            }
        }
        catch (error) {
            return this.response.error(error, classes_1.ErrorStatusCodesEnum.BadRequest);
        }
    }
    async findOne(id, request) {
        try {
            const project = await this.projectRepository.findOne({ where: { id } });
            const isMember = await this.projectUserRepository.findOne({ where: { project_id: { id }, user_id: { id: request.user.id } }, });
            if (!project) {
                return this.response.error(`Project with Id ${id} not found`, classes_1.ErrorStatusCodesEnum.NotFound);
            }
            else {
                if (!isMember) {
                    return this.response.error(`Resource not authorized`, classes_1.ErrorStatusCodesEnum.NotAcceptable);
                }
                else {
                    return this.response.success(classes_1.SuccessStatusCodesEnum.Ok, `success`, project);
                }
            }
        }
        catch (error) {
            return this.response.error(error, classes_1.ErrorStatusCodesEnum.BadRequest);
        }
    }
    async update(id, updateProjectDto) {
        try {
            const projectToUpdate = await this.projectRepository.findOne({ where: { id } });
            if (!projectToUpdate) {
                return this.response.error(`Project with Id ${id} not found`, classes_1.ErrorStatusCodesEnum.NotFound);
            }
            else {
                const updatedProject = await this.projectRepository.update(id, updateProjectDto);
                return this.response.success(classes_1.SuccessStatusCodesEnum.Ok, `Project with id ${id} updated successfully`, updatedProject);
            }
        }
        catch (error) {
            return this.response.error(error, classes_1.ErrorStatusCodesEnum.BadRequest);
        }
    }
    async remove(id) {
        try {
            const projectToDelete = await this.projectRepository.findOne({ where: { id } });
            if (!projectToDelete) {
                return this.response.error(`Project with Id ${id} not found`, classes_1.ErrorStatusCodesEnum.NotFound);
            }
            else {
                await this.projectRepository.delete(id);
                return this.response.success(classes_1.SuccessStatusCodesEnum.Ok, `Project with Id ${id} deleted successfully`);
            }
        }
        catch (error) {
            return this.response.error(error, classes_1.ErrorStatusCodesEnum.BadRequest);
        }
    }
};
exports.ProjectService = ProjectService;
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(project_entity_1.Project)),
    __param(2, (0, typeorm_1.InjectRepository)(project_user_entity_1.ProjectUser)),
    __metadata("design:paramtypes", [classes_1.Expose,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProjectService);
//# sourceMappingURL=project.service.js.map