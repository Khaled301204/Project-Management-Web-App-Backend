"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const project_task_status_entity_1 = require("./project_task_status/entities/project_task_status.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const user_entity_1 = require("./user/entities/user.entity");
const rate_module_1 = require("./rate/rate.module");
const rate_entity_1 = require("./rate/entities/rate.entity");
const user_bugs_module_1 = require("./user_bugs/user_bugs.module");
const user_bug_entity_1 = require("./user_bugs/entities/user_bug.entity");
const project_task_status_module_1 = require("./project_task_status/project_task_status.module");
const story_module_1 = require("./story/story.module");
const story_entity_1 = require("./story/entities/story.entity");
const project_module_1 = require("./project/project.module");
const project_user_module_1 = require("./project_user/project_user.module");
const project_user_entity_1 = require("./project_user/entities/project_user.entity");
const departments_module_1 = require("./departments/departments.module");
const department_entity_1 = require("./departments/entities/department.entity");
const tasks_module_1 = require("./tasks/tasks.module");
const task_entity_1 = require("./tasks/entities/task.entity");
const project_entity_1 = require("./project/entities/project.entity");
const project_departments_module_1 = require("./project_departments/project_departments.module");
const user_tasks_module_1 = require("./user-tasks/user-tasks.module");
const project_department_entity_1 = require("./project_departments/entities/project_department.entity");
const user_attach_entity_1 = require("./user-attatch/entities/user-attach.entity");
const user_task_entity_1 = require("./user-tasks/entities/user-task.entity");
const chat_gateway_1 = require("./chat/chat.gateway");
const message_module_1 = require("./message/message.module");
const dotenv = require("dotenv");
const message_entity_1 = require("./message/entities/message.entity");
dotenv.config();
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: [
                    department_entity_1.Department,
                    project_entity_1.Project,
                    project_department_entity_1.ProjectDepartment,
                    project_task_status_entity_1.ProjectTaskStatus,
                    project_user_entity_1.ProjectUser,
                    rate_entity_1.Rate,
                    story_entity_1.Story,
                    task_entity_1.Task,
                    user_entity_1.User,
                    user_bug_entity_1.UserBug,
                    user_attach_entity_1.UserAttach,
                    user_task_entity_1.UserTask,
                    message_entity_1.Message
                ],
                synchronize: true,
            }),
            departments_module_1.DepartmentsModule,
            project_module_1.ProjectModule,
            project_departments_module_1.ProjectDepartmentsModule,
            project_task_status_module_1.ProjectTaskStatusModule,
            project_user_module_1.ProjectUserModule,
            rate_module_1.RateModule,
            story_module_1.StoryModule,
            tasks_module_1.TasksModule,
            user_module_1.UserModule,
            user_bugs_module_1.UserBugsModule,
            user_attach_entity_1.UserAttach,
            user_tasks_module_1.UserTasksModule,
            message_module_1.MessageModule,
            typeorm_1.TypeOrmModule.forFeature([message_entity_1.Message])
        ],
        providers: [chat_gateway_1.ChatGateway],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map