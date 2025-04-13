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
exports.ProjectUserService = void 0;
const common_1 = require("@nestjs/common");
const project_user_entity_1 = require("./entities/project_user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const classes_1 = require("../classes");
let ProjectUserService = class ProjectUserService {
    constructor(projectUserRepository, expose) {
        this.projectUserRepository = projectUserRepository;
        this.expose = expose;
    }
    async create(createProjectUserDto) {
        try {
            const newProjectUser = await this.projectUserRepository.save(createProjectUserDto);
            return this.expose.success(classes_1.SuccessStatusCodesEnum.Created, 'Project user created successfully', newProjectUser, true);
        }
        catch (error) {
            return this.expose.error(error, classes_1.ErrorStatusCodesEnum.BadRequest);
        }
    }
    async findAll(project_id) {
        try {
            const projectUsers = await this.projectUserRepository.find({
                where: { project_id, deletedAt: null },
            });
            return this.expose.success(classes_1.SuccessStatusCodesEnum.Ok, 'Project users fetched successfully', projectUsers, true);
        }
        catch (error) {
            return this.expose.error(error, classes_1.ErrorStatusCodesEnum.InternalServerError);
        }
    }
    async findOne(id) {
        try {
            const projectUser = await this.projectUserRepository.findOne({ where: { id } });
            if (!projectUser) {
                return this.expose.error('Project user not found', classes_1.ErrorStatusCodesEnum.NotFound);
            }
            return this.expose.success(classes_1.SuccessStatusCodesEnum.Ok, 'Project user found', projectUser, true);
        }
        catch (error) {
            return this.expose.error(error, classes_1.ErrorStatusCodesEnum.InternalServerError);
        }
    }
    async update(id, updateProjectUserDto) {
        try {
            const projectUser = await this.projectUserRepository.findOne({ where: { id } });
            if (!projectUser) {
                return this.expose.error('Project user not found', classes_1.ErrorStatusCodesEnum.NotFound);
            }
            Object.assign(projectUser, updateProjectUserDto);
            const updated = await this.projectUserRepository.save(projectUser);
            return this.expose.success(classes_1.SuccessStatusCodesEnum.Ok, 'Project user updated successfully', updated, true);
        }
        catch (error) {
            return this.expose.error(error, classes_1.ErrorStatusCodesEnum.InternalServerError);
        }
    }
    async remove(id) {
        try {
            const projectUser = await this.projectUserRepository.softDelete(id);
            if (projectUser.affected === 0) {
                return this.expose.error('Project user not found', classes_1.ErrorStatusCodesEnum.NotFound);
            }
            return this.expose.success(classes_1.SuccessStatusCodesEnum.Ok, 'Project user deleted successfully', null, true);
        }
        catch (error) {
            return this.expose.error(error, classes_1.ErrorStatusCodesEnum.InternalServerError);
        }
    }
};
exports.ProjectUserService = ProjectUserService;
exports.ProjectUserService = ProjectUserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_user_entity_1.ProjectUser)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        classes_1.Expose])
], ProjectUserService);
//# sourceMappingURL=project_user.service.js.map