"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModule = void 0;
const common_1 = require("@nestjs/common");
const project_service_1 = require("./project.service");
const project_controller_1 = require("./project.controller");
const typeorm_1 = require("@nestjs/typeorm");
const project_entity_1 = require("./entities/project.entity");
const auth_module_1 = require("../auth/auth.module");
const user_module_1 = require("../user/user.module");
const project_user_entity_1 = require("../project_user/entities/project_user.entity");
const classes_1 = require("../classes");
let ProjectModule = class ProjectModule {
};
exports.ProjectModule = ProjectModule;
exports.ProjectModule = ProjectModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([project_entity_1.Project, project_user_entity_1.ProjectUser]), auth_module_1.AuthModule, user_module_1.UserModule],
        exports: [project_service_1.ProjectService],
        controllers: [project_controller_1.ProjectController],
        providers: [project_service_1.ProjectService, classes_1.Expose],
    })
], ProjectModule);
//# sourceMappingURL=project.module.js.map