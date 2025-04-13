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
exports.CreateTaskDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const task_entity_1 = require("../entities/task.entity");
const department_entity_1 = require("../../departments/entities/department.entity");
const story_entity_1 = require("../../story/entities/story.entity");
class CreateTaskDto {
}
exports.CreateTaskDto = CreateTaskDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ example: 1, description: 'department_id' }),
    __metadata("design:type", department_entity_1.Department)
], CreateTaskDto.prototype, "department_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ example: 1, description: 'userStory_id' }),
    __metadata("design:type", story_entity_1.Story)
], CreateTaskDto.prototype, "userStory_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ example: 3, description: 'story_point' }),
    __metadata("design:type", Number)
], CreateTaskDto.prototype, "story_point", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ example: 2, description: 'working_hours' }),
    __metadata("design:type", Number)
], CreateTaskDto.prototype, "working_hours", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(task_entity_1.Priority),
    (0, swagger_1.ApiProperty)({
        enum: task_entity_1.Priority,
        example: task_entity_1.Priority.low,
        description: 'priority',
    }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "priority", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)({ example: 'description data', description: 'description' }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)({ example: 'task 1', description: 'title' }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)({ example: 'comment 1', description: 'comment' }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "comment", void 0);
//# sourceMappingURL=create-task.dto.js.map