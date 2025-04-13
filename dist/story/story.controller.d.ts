import { StoryService } from './story.service';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
export declare class StoryController {
    private readonly storyService;
    constructor(storyService: StoryService);
    create(createStoryDto: CreateStoryDto, req: any): Promise<import("./entities/story.entity").Story>;
    findALL(): Promise<import("./entities/story.entity").Story[]>;
    findOne(id: string): Promise<import("./entities/story.entity").Story>;
    update(id: string, updateStoryDto: UpdateStoryDto, req: any): Promise<import("./entities/story.entity").Story>;
    remove(id: string, req: any): Promise<void>;
}
