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
exports.ProjectDepartmentsController = void 0;
const common_1 = require("@nestjs/common");
const project_departments_service_1 = require("./project_departments.service");
const create_project_department_dto_1 = require("./dto/create-project_department.dto");
const update_project_department_dto_1 = require("./dto/update-project_department.dto");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const roles_decorator_1 = require("../auth/decorator/roles.decorator");
let ProjectDepartmentsController = class ProjectDepartmentsController {
    constructor(projectDepartmentsService) {
        this.projectDepartmentsService = projectDepartmentsService;
    }
    create(createProjectDepartmentDto) {
        return this.projectDepartmentsService.create(createProjectDepartmentDto);
    }
    findAll() {
        return this.projectDepartmentsService.findAll();
    }
    findOne(id) {
        return this.projectDepartmentsService.findOne(+id);
    }
    update(id, updateProjectDepartmentDto) {
        return this.projectDepartmentsService.update(+id, updateProjectDepartmentDto);
    }
    remove(id) {
        return this.projectDepartmentsService.remove(+id);
    }
};
exports.ProjectDepartmentsController = ProjectDepartmentsController;
__decorate([
    (0, roles_decorator_1.Role)('manager'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_department_dto_1.CreateProjectDepartmentDto]),
    __metadata("design:returntype", void 0)
], ProjectDepartmentsController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Role)('user'),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProjectDepartmentsController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.Role)('user'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectDepartmentsController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.Role)('manager'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_project_department_dto_1.UpdateProjectDepartmentDto]),
    __metadata("design:returntype", void 0)
], ProjectDepartmentsController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Role)('manager'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectDepartmentsController.prototype, "remove", null);
exports.ProjectDepartmentsController = ProjectDepartmentsController = __decorate([
    (0, common_1.Controller)('project-departments'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [project_departments_service_1.ProjectDepartmentsService])
], ProjectDepartmentsController);
//# sourceMappingURL=project_departments.controller.js.map