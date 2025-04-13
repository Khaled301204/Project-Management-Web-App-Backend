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
exports.Task = exports.Priority = void 0;
const department_entity_1 = require("../../departments/entities/department.entity");
const story_entity_1 = require("../../story/entities/story.entity");
const user_task_entity_1 = require("../../user-tasks/entities/user-task.entity");
const typeorm_1 = require("typeorm");
var Priority;
(function (Priority) {
    Priority["low"] = "low";
    Priority["medium"] = "medium";
    Priority["high"] = "high";
})(Priority || (exports.Priority = Priority = {}));
let Task = class Task {
};
exports.Task = Task;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => department_entity_1.Department, (department) => department.id),
    (0, typeorm_1.JoinColumn)({ name: 'department_id' }),
    __metadata("design:type", department_entity_1.Department)
], Task.prototype, "department_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => story_entity_1.Story, (userStory) => userStory.id),
    (0, typeorm_1.JoinColumn)({ name: 'userStory_id' }),
    __metadata("design:type", story_entity_1.Story)
], Task.prototype, "userStory_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_task_entity_1.UserTask, (userTask) => userTask.task_id),
    __metadata("design:type", Array)
], Task.prototype, "userTask", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], Task.prototype, "story_point", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', default: 2 }),
    __metadata("design:type", Number)
], Task.prototype, "working_hours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: Priority, default: Priority.low }),
    __metadata("design:type", String)
], Task.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Task.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', precision: 6 }),
    __metadata("design:type", Date)
], Task.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Task.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Task.prototype, "deleted_at", void 0);
exports.Task = Task = __decorate([
    (0, typeorm_1.Entity)()
], Task);
//# sourceMappingURL=task.entity.js.map