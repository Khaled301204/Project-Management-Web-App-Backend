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
exports.UserTask = void 0;
const project_task_status_entity_1 = require("../../project_task_status/entities/project_task_status.entity");
const task_entity_1 = require("../../tasks/entities/task.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const user_bug_entity_1 = require("../../user_bugs/entities/user_bug.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
let UserTask = class UserTask {
};
exports.UserTask = UserTask;
__decorate([
    (0, typeorm_2.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserTask.prototype, "id", void 0);
__decorate([
    (0, typeorm_2.OneToMany)(() => user_entity_1.User, user => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], UserTask.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_2.ManyToOne)(() => task_entity_1.Task, task => task.id),
    (0, typeorm_1.JoinColumn)({ name: 'task_id' }),
    __metadata("design:type", task_entity_1.Task)
], UserTask.prototype, "task_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => project_task_status_entity_1.ProjectTaskStatus, projectTaskStatus => projectTaskStatus.id),
    (0, typeorm_1.JoinColumn)({ name: 'project_task_status_id' }),
    __metadata("design:type", project_task_status_entity_1.ProjectTaskStatus)
], UserTask.prototype, "project_task_status_id", void 0);
__decorate([
    (0, typeorm_2.Column)(),
    __metadata("design:type", Number)
], UserTask.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_2.Column)(),
    __metadata("design:type", Number)
], UserTask.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_2.Column)(),
    __metadata("design:type", Number)
], UserTask.prototype, "actual_working_time", void 0);
__decorate([
    (0, typeorm_2.OneToMany)(() => user_bug_entity_1.UserBug, userBug => userBug.userTask_id),
    __metadata("design:type", Array)
], UserTask.prototype, "userBugs", void 0);
exports.UserTask = UserTask = __decorate([
    (0, typeorm_2.Entity)('user_tasks')
], UserTask);
//# sourceMappingURL=user-task.entity.js.map