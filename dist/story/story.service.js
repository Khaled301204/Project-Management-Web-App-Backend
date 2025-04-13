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
exports.StoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const story_entity_1 = require("./entities/story.entity");
let StoryService = class StoryService {
    constructor(storyRepository) {
        this.storyRepository = storyRepository;
    }
    async create(createStoryDto, user) {
        if (user.role !== 'manager') {
            throw new common_1.UnauthorizedException('Only managers can create stories.');
        }
        try {
            const story = this.storyRepository.create(createStoryDto);
            return await this.storyRepository.save(story);
        }
        catch (error) {
            console.error('Error creating story:', error);
            throw new common_1.InternalServerErrorException('Failed to create story');
        }
    }
    async findAll() {
        try {
            return await this.storyRepository.find();
        }
        catch (error) {
            console.error('Error fetching stories:', error);
            throw new common_1.InternalServerErrorException('Failed to retrieve stories');
        }
    }
    async findOne(id) {
        try {
            const story = await this.storyRepository.findOne({ where: { id } });
            if (!story) {
                throw new common_1.NotFoundException(`Story with ID ${id} not found`);
            }
            return story;
        }
        catch (error) {
            console.error(`Error fetching story with ID ${id}:`, error);
            throw new common_1.InternalServerErrorException('Failed to retrieve story');
        }
    }
    async update(id, updateStoryDto, user) {
        if (user.role !== 'manager') {
            throw new common_1.UnauthorizedException('Only managers can update stories.');
        }
        try {
            const story = await this.storyRepository.preload({
                id,
                ...updateStoryDto,
            });
            if (!story) {
                throw new common_1.NotFoundException(`Story with ID ${id} not found`);
            }
            return await this.storyRepository.save(story);
        }
        catch (error) {
            console.error(`Error updating story with ID ${id}:`, error);
            throw new common_1.InternalServerErrorException('Failed to update story');
        }
    }
    async delete(id, user) {
        if (user.role !== 'manager') {
            throw new common_1.UnauthorizedException('Only managers can delete stories.');
        }
        try {
            const result = await this.storyRepository.delete(id);
            if (result.affected === 0) {
                throw new common_1.NotFoundException(`Story with ID ${id} not found`);
            }
        }
        catch (error) {
            console.error(`Error deleting story with ID ${id}:`, error);
            throw new common_1.InternalServerErrorException('Failed to delete story');
        }
    }
};
exports.StoryService = StoryService;
exports.StoryService = StoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(story_entity_1.Story)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StoryService);
//# sourceMappingURL=story.service.js.map