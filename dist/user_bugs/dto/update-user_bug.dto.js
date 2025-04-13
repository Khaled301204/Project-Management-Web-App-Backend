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
exports.UpdateUserBugDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_user_bug_dto_1 = require("./create-user_bug.dto");
const class_validator_1 = require("class-validator");
class UpdateUserBugDto extends (0, swagger_1.PartialType)(create_user_bug_dto_1.CreateUserBugDto) {
}
exports.UpdateUserBugDto = UpdateUserBugDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'User Task ID', required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateUserBugDto.prototype, "userTask_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Project Task Status ID', required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateUserBugDto.prototype, "project_task_status_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3, description: 'Story points of the bug' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateUserBugDto.prototype, "story_point", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5, description: 'Estimated working hours' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateUserBugDto.prototype, "working_hours", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'Bug priority level' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateUserBugDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Login Button Issue', description: 'Title of the bug' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserBugDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'This bug happens randomly', description: 'Additional comments' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserBugDto.prototype, "comment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'The login button is not responsive on mobile devices', description: 'Detailed bug description' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserBugDto.prototype, "description", void 0);
//# sourceMappingURL=update-user_bug.dto.js.map