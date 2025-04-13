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
exports.ProjectUserController = void 0;
const common_1 = require("@nestjs/common");
const project_user_service_1 = require("./project_user.service");
const create_project_user_dto_1 = require("./dto/create-project_user.dto");
const update_project_user_dto_1 = require("./dto/update-project_user.dto");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const project_entity_1 = require("../project/entities/project.entity");
let ProjectUserController = class ProjectUserController {
    constructor(projectUserService) {
        this.projectUserService = projectUserService;
    }
    create(createProjectUserDto) {
        return this.projectUserService.create(createProjectUserDto);
    }
    findAll(project_id) {
        if (!project_id) {
            return { message: 'Project ID is required' };
        }
        return this.projectUserService.findAll(project_id);
    }
    findOne(id) {
        return this.projectUserService.findOne(+id);
    }
    update(id, updateProjectUserDto) {
        return this.projectUserService.update(+id, updateProjectUserDto);
    }
    remove(id) {
        return this.projectUserService.remove(+id);
    }
};
exports.ProjectUserController = ProjectUserController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_user_dto_1.CreateProjectUserDto]),
    __metadata("design:returntype", void 0)
], ProjectUserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('project_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [project_entity_1.Project]),
    __metadata("design:returntype", void 0)
], ProjectUserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectUserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_project_user_dto_1.UpdateProjectUserDto]),
    __metadata("design:returntype", void 0)
], ProjectUserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectUserController.prototype, "remove", null);
exports.ProjectUserController = ProjectUserController = __decorate([
    (0, common_1.Controller)('project-user'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [project_user_service_1.ProjectUserService])
], ProjectUserController);
//# sourceMappingURL=project_user.controller.js.map