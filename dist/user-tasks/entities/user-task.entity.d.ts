import { ProjectTaskStatus } from 'src/project_task_status/entities/project_task_status.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { User } from 'src/user/entities/user.entity';
import { UserBug } from 'src/user_bugs/entities/user_bug.entity';
export declare class UserTask {
    id: number;
    user_id: User;
    task_id: Task;
    project_task_status_id: ProjectTaskStatus;
    start_date: number;
    end_date: number;
    actual_working_time: number;
    userBugs: UserBug[];
}
