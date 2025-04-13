import { Priority } from 'src/tasks/entities/task.entity';
export declare class CreateStoryDto {
    title: string;
    description: string;
    story_point: number;
    priority: Priority;
}
