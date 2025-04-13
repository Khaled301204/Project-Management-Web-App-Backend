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
exports.UserBug = void 0;
const typeorm_1 = require("typeorm");
const user_task_entity_1 = require("../../user-tasks/entities/user-task.entity");
const project_task_status_entity_1 = require("../../project_task_status/entities/project_task_status.entity");
let UserBug = class UserBug {
};
exports.UserBug = UserBug;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserBug.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_task_entity_1.UserTask, (userTask) => userTask.id),
    (0, typeorm_1.JoinColumn)({ name: "userTask_id" }),
    __metadata("design:type", user_task_entity_1.UserTask)
], UserBug.prototype, "userTask_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => project_task_status_entity_1.ProjectTaskStatus, projectTaskStatus => projectTaskStatus.id),
    (0, typeorm_1.JoinColumn)({ name: 'project_task_status_id' }),
    __metadata("design:type", project_task_status_entity_1.ProjectTaskStatus)
], UserBug.prototype, "project_task_status_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserBug.prototype, "story_point", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserBug.prototype, "working_hours", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserBug.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserBug.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserBug.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'longtext' }),
    __metadata("design:type", String)
], UserBug.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserBug.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], UserBug.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], UserBug.prototype, "deletedAt", void 0);
exports.UserBug = UserBug = __decorate([
    (0, typeorm_1.Entity)('user_bugs')
], UserBug);
//# sourceMappingURL=user_bug.entity.js.map