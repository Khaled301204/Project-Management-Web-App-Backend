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
exports.ProjectTaskStatus = void 0;
const project_entity_1 = require("./../../project/entities/project.entity");
const typeorm_1 = require("typeorm");
let ProjectTaskStatus = class ProjectTaskStatus {
};
exports.ProjectTaskStatus = ProjectTaskStatus;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProjectTaskStatus.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_entity_1.Project, project => project.id),
    (0, typeorm_1.JoinColumn)({ name: "project_id" }),
    __metadata("design:type", project_entity_1.Project)
], ProjectTaskStatus.prototype, "project_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProjectTaskStatus.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProjectTaskStatus.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ProjectTaskStatus.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], ProjectTaskStatus.prototype, "deletedAt", void 0);
exports.ProjectTaskStatus = ProjectTaskStatus = __decorate([
    (0, typeorm_1.Entity)()
], ProjectTaskStatus);
//# sourceMappingURL=project_task_status.entity.js.map