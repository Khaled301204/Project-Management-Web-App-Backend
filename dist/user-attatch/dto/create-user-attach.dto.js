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
exports.CreateUserAttachDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../../user/entities/user.entity");
class CreateUserAttachDto {
}
exports.CreateUserAttachDto = CreateUserAttachDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 1, description: "Attachment ID" }),
    __metadata("design:type", Number)
], CreateUserAttachDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", user_entity_1.User)
], CreateUserAttachDto.prototype, "user_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: "cv.pdf", description: "File name" }),
    __metadata("design:type", String)
], CreateUserAttachDto.prototype, "file_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: "/uploads/user123/cv.pdf", description: "File path" }),
    __metadata("design:type", String)
], CreateUserAttachDto.prototype, "file_path", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 204800, description: "File size in bytes" }),
    __metadata("design:type", Number)
], CreateUserAttachDto.prototype, "file_size", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: "application/pdf", description: "MIME type of the file" }),
    __metadata("design:type", String)
], CreateUserAttachDto.prototype, "mime_type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: "/uploads/birth-cert.pdf", required: false }),
    __metadata("design:type", String)
], CreateUserAttachDto.prototype, "birth_certificate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: "/uploads/military-cert.pdf", required: false }),
    __metadata("design:type", String)
], CreateUserAttachDto.prototype, "military_certificate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 29876543210987, required: false }),
    __metadata("design:type", Number)
], CreateUserAttachDto.prototype, "national_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: "DE89370400440532013000", required: false }),
    __metadata("design:type", Number)
], CreateUserAttachDto.prototype, "bank_account", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(500),
    (0, swagger_1.ApiProperty)({ example: "123 Street Name, City, Country", required: false }),
    __metadata("design:type", String)
], CreateUserAttachDto.prototype, "address", void 0);
//# sourceMappingURL=create-user-attach.dto.js.map