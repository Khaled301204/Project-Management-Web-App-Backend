import { Project } from 'src/project/entities/project.entity';
import { User } from 'src/user/entities/user.entity';
export declare class UpdateProjectUserDto {
    project_id: Project;
    user_id?: User;
}
