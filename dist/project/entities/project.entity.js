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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const message_entity_1 = require("../../message/entities/message.entity");
const project_department_entity_1 = require("../../project_departments/entities/project_department.entity");
const project_task_status_entity_1 = require("../../project_task_status/entities/project_task_status.entity");
const project_user_entity_1 = require("../../project_user/entities/project_user.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let Project = class Project {
};
exports.Project = Project;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Project.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Project.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Project.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Project.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, user => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'client_id' }),
    __metadata("design:type", Number)
], Project.prototype, "client_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Project.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Project.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Project.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => project_user_entity_1.ProjectUser, (projectUser) => projectUser.project_id),
    __metadata("design:type", Array)
], Project.prototype, "projectUsers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => project_task_status_entity_1.ProjectTaskStatus, (projectTaskStatus) => projectTaskStatus.project_id),
    __metadata("design:type", Array)
], Project.prototype, "projectTaskStatus", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => project_department_entity_1.ProjectDepartment, (project_department) => project_department.project_id),
    __metadata("design:type", Array)
], Project.prototype, "project_department", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => message_entity_1.Message, (message) => message.project_id),
    __metadata("design:type", Array)
], Project.prototype, "message", void 0);
exports.Project = Project = __decorate([
    (0, typeorm_1.Entity)()
], Project);
//# sourceMappingURL=project.entity.js.map