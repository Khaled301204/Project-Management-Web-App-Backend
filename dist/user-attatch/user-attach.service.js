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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAttachService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_attach_entity_1 = require("./entities/user-attach.entity");
let UserAttachService = class UserAttachService {
    constructor(userAttachRepository) {
        this.userAttachRepository = userAttachRepository;
    }
    async create(createUserAttachDto) {
        try {
            const attachment = this.userAttachRepository.create(createUserAttachDto);
            return await this.userAttachRepository.save(attachment);
        }
        catch (error) {
            console.error('Error adding attachment:', error);
            throw new common_1.InternalServerErrorException('Failed to add attachment');
        }
    }
    async findAll() {
        try {
            return await this.userAttachRepository.find();
        }
        catch (error) {
            console.error('Error fetching attachments:', error);
            throw new common_1.InternalServerErrorException('Failed to retrieve attachments');
        }
    }
    async findOne(id) {
        try {
            const attachment = await this.userAttachRepository.findOne({
                where: { id }
            });
            if (!attachment) {
                throw new common_1.NotFoundException(`Attachment with ID ${id} not found`);
            }
            return attachment;
        }
        catch (error) {
            console.error(`Error fetching attachment with ID ${id}:`, error);
            throw new common_1.InternalServerErrorException('Failed to retrieve attachment');
        }
    }
    async update(id, updateUserAttachDto) {
        try {
            return "hahahhahahahahahhahahahha";
        }
        catch (error) {
            console.error(`Error updating attachment with ID ${id}:`, error);
            throw new common_1.InternalServerErrorException('Failed to update attachment');
        }
    }
    async delete(id) {
        try {
            const result = await this.userAttachRepository.delete(id);
            if (result.affected === 0) {
                throw new common_1.NotFoundException(`Attachment with ID ${id} not found`);
            }
        }
        catch (error) {
            console.error(`Error deleting attachment with ID ${id}:`, error);
            throw new common_1.InternalServerErrorException('Failed to delete attachment');
        }
    }
};
exports.UserAttachService = UserAttachService;
exports.UserAttachService = UserAttachService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_attach_entity_1.UserAttach)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserAttachService);
//# sourceMappingURL=user-attach.service.js.map