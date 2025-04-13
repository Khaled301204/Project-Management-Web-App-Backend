import { CreateStoryDto } from './create-story.dto';
import { Priority } from 'src/tasks/entities/task.entity';
declare const UpdateStoryDto_base: import("@nestjs/common").Type<Partial<CreateStoryDto>>;
export declare class UpdateStoryDto extends UpdateStoryDto_base {
    title: string;
    description: string;
    story_point: number;
    priority: Priority;
}
export {};
