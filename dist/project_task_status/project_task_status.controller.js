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
exports.ProjectTaskStatusController = void 0;
const common_1 = require("@nestjs/common");
const project_task_status_service_1 = require("./project_task_status.service");
const create_project_task_status_dto_1 = require("./dto/create-project_task_status.dto");
const update_project_task_status_dto_1 = require("./dto/update-project_task_status.dto");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const roles_decorator_1 = require("../auth/decorator/roles.decorator");
let ProjectTaskStatusController = class ProjectTaskStatusController {
    constructor(projectTaskStatusService) {
        this.projectTaskStatusService = projectTaskStatusService;
    }
    create(createProjectTaskStatusDto) {
        return this.projectTaskStatusService.create(createProjectTaskStatusDto);
    }
    findAll() {
        return this.projectTaskStatusService.findAll();
    }
    findOne(id) {
        return this.projectTaskStatusService.findOne(+id);
    }
    update(id, updateProjectTaskStatusDto) {
        return this.projectTaskStatusService.update(+id, updateProjectTaskStatusDto);
    }
    remove(id) {
        return this.projectTaskStatusService.remove(+id);
    }
};
exports.ProjectTaskStatusController = ProjectTaskStatusController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Role)('manager'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_task_status_dto_1.CreateProjectTaskStatusDto]),
    __metadata("design:returntype", void 0)
], ProjectTaskStatusController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProjectTaskStatusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectTaskStatusController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Role)('manager'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_project_task_status_dto_1.UpdateProjectTaskStatusDto]),
    __metadata("design:returntype", void 0)
], ProjectTaskStatusController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Role)('manager'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectTaskStatusController.prototype, "remove", null);
exports.ProjectTaskStatusController = ProjectTaskStatusController = __decorate([
    (0, common_1.Controller)('project-task-status'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [project_task_status_service_1.ProjectTaskStatusService])
], ProjectTaskStatusController);
//# sourceMappingURL=project_task_status.controller.js.map