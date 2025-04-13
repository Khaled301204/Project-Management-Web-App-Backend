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
exports.UpdateProjectTaskStatusDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_project_task_status_dto_1 = require("./create-project_task_status.dto");
const class_validator_1 = require("class-validator");
const project_entity_1 = require("../../project/entities/project.entity");
class UpdateProjectTaskStatusDto extends (0, swagger_1.PartialType)(create_project_task_status_dto_1.CreateProjectTaskStatusDto) {
}
exports.UpdateProjectTaskStatusDto = UpdateProjectTaskStatusDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 1, description: "ID of the project" }),
    __metadata("design:type", project_entity_1.Project)
], UpdateProjectTaskStatusDto.prototype, "project_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: "Pending", description: "Status of the project task" }),
    __metadata("design:type", String)
], UpdateProjectTaskStatusDto.prototype, "status", void 0);
//# sourceMappingURL=update-project_task_status.dto.js.map