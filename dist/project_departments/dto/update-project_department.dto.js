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
exports.UpdateProjectDepartmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_project_department_dto_1 = require("./create-project_department.dto");
const class_validator_1 = require("class-validator");
const department_entity_1 = require("../../departments/entities/department.entity");
const project_entity_1 = require("../../project/entities/project.entity");
const class_transformer_1 = require("class-transformer");
class UpdateProjectDepartmentDto extends (0, swagger_1.PartialType)(create_project_department_dto_1.CreateProjectDepartmentDto) {
}
exports.UpdateProjectDepartmentDto = UpdateProjectDepartmentDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 1, description: 'department_id' }),
    __metadata("design:type", department_entity_1.Department)
], UpdateProjectDepartmentDto.prototype, "department_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ example: 1, description: 'project_id' }),
    __metadata("design:type", project_entity_1.Project)
], UpdateProjectDepartmentDto.prototype, "project_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], UpdateProjectDepartmentDto.prototype, "created_at", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], UpdateProjectDepartmentDto.prototype, "updated_at", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], UpdateProjectDepartmentDto.prototype, "deleted_at", void 0);
//# sourceMappingURL=update-project_department.dto.js.map