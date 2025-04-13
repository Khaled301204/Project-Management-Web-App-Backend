"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectTaskStatusModule = void 0;
const common_1 = require("@nestjs/common");
const project_task_status_service_1 = require("./project_task_status.service");
const project_task_status_controller_1 = require("./project_task_status.controller");
const project_task_status_entity_1 = require("./entities/project_task_status.entity");
const typeorm_1 = require("@nestjs/typeorm");
const project_entity_1 = require("../project/entities/project.entity");
let ProjectTaskStatusModule = class ProjectTaskStatusModule {
};
exports.ProjectTaskStatusModule = ProjectTaskStatusModule;
exports.ProjectTaskStatusModule = ProjectTaskStatusModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([project_task_status_entity_1.ProjectTaskStatus, project_entity_1.Project])],
        exports: [project_task_status_service_1.ProjectTaskStatusService],
        controllers: [project_task_status_controller_1.ProjectTaskStatusController],
        providers: [project_task_status_service_1.ProjectTaskStatusService],
    })
], ProjectTaskStatusModule);
//# sourceMappingURL=project_task_status.module.js.map