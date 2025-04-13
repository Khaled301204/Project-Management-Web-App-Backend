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
exports.UpdateStoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_story_dto_1 = require("./create-story.dto");
const class_validator_1 = require("class-validator");
const task_entity_1 = require("../../tasks/entities/task.entity");
class UpdateStoryDto extends (0, swagger_1.PartialType)(create_story_dto_1.CreateStoryDto) {
}
exports.UpdateStoryDto = UpdateStoryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: "title ex", description: "title" }),
    __metadata("design:type", String)
], UpdateStoryDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: " user story description ", description: "description" }),
    __metadata("design:type", String)
], UpdateStoryDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: " user story  points  ", description: "  story_point" }),
    __metadata("design:type", Number)
], UpdateStoryDto.prototype, "story_point", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(task_entity_1.Priority),
    (0, swagger_1.ApiProperty)({
        enum: task_entity_1.Priority,
        example: task_entity_1.Priority.low,
        description: 'priority',
    }),
    __metadata("design:type", String)
], UpdateStoryDto.prototype, "priority", void 0);
//# sourceMappingURL=update-story.dto.js.map