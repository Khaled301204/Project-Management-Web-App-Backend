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
exports.ProjectDepartment = void 0;
const department_entity_1 = require("../../departments/entities/department.entity");
const project_entity_1 = require("../../project/entities/project.entity");
const typeorm_1 = require("typeorm");
let ProjectDepartment = class ProjectDepartment {
};
exports.ProjectDepartment = ProjectDepartment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProjectDepartment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => department_entity_1.Department, (department) => department.id),
    (0, typeorm_1.JoinColumn)({ name: 'department_id', referencedColumnName: 'id' }),
    __metadata("design:type", department_entity_1.Department)
], ProjectDepartment.prototype, "department_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_entity_1.Project, (project) => project.id),
    (0, typeorm_1.JoinColumn)({ name: 'project_id', referencedColumnName: 'id' }),
    __metadata("design:type", project_entity_1.Project)
], ProjectDepartment.prototype, "project_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', precision: 6 }),
    __metadata("design:type", Date)
], ProjectDepartment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], ProjectDepartment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], ProjectDepartment.prototype, "deleted_at", void 0);
exports.ProjectDepartment = ProjectDepartment = __decorate([
    (0, typeorm_1.Entity)()
], ProjectDepartment);
//# sourceMappingURL=project_department.entity.js.map