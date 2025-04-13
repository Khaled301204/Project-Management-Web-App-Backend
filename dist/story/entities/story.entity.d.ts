import { Priority, Task } from 'src/tasks/entities/task.entity';
export declare class Story {
    id: number;
    title: string;
    description: string;
    story_point: number;
    priority: Priority;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    tasks: Task[];
}
