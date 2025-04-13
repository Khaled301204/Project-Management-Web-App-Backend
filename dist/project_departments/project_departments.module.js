"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectDepartmentsModule = void 0;
const common_1 = require("@nestjs/common");
const project_departments_service_1 = require("./project_departments.service");
const project_departments_controller_1 = require("./project_departments.controller");
const typeorm_1 = require("@nestjs/typeorm");
const project_department_entity_1 = require("./entities/project_department.entity");
const classes_1 = require("../classes");
let ProjectDepartmentsModule = class ProjectDepartmentsModule {
};
exports.ProjectDepartmentsModule = ProjectDepartmentsModule;
exports.ProjectDepartmentsModule = ProjectDepartmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([project_department_entity_1.ProjectDepartment])],
        exports: [project_departments_service_1.ProjectDepartmentsService],
        controllers: [project_departments_controller_1.ProjectDepartmentsController],
        providers: [project_departments_service_1.ProjectDepartmentsService, classes_1.Expose],
    })
], ProjectDepartmentsModule);
//# sourceMappingURL=project_departments.module.js.map