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
exports.CreateUserTaskDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserTaskDto {
}
exports.CreateUserTaskDto = CreateUserTaskDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'User ID' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateUserTaskDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'Task ID' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateUserTaskDto.prototype, "task_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Project Task Status ID' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateUserTaskDto.prototype, "project_task_status_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1709836800, description: 'Start date (timestamp)' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateUserTaskDto.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1709923200, description: 'End date (timestamp)' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateUserTaskDto.prototype, "end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 8, description: 'Actual working time in hours' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateUserTaskDto.prototype, "actual_working_time", void 0);
//# sourceMappingURL=create-user-task.dto.js.map