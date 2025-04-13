import { Priority } from '../entities/task.entity';
import { Department } from 'src/departments/entities/department.entity';
import { Story } from 'src/story/entities/story.entity';
export declare class CreateTaskDto {
    department_id: Department;
    userStory_id: Story;
    story_point?: number;
    working_hours?: number;
    priority: Priority;
    description: string;
    title: string;
    comment?: string;
}
