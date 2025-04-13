import { Repository } from 'typeorm';
import { Story } from './entities/story.entity';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
export declare class StoryService {
    private readonly storyRepository;
    constructor(storyRepository: Repository<Story>);
    create(createStoryDto: CreateStoryDto, user: any): Promise<Story>;
    findAll(): Promise<Story[]>;
    findOne(id: number): Promise<Story>;
    update(id: number, updateStoryDto: UpdateStoryDto, user: any): Promise<Story>;
    delete(id: number, user: any): Promise<void>;
}
