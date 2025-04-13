"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUserModule = void 0;
const classes_1 = require("../classes");
const common_1 = require("@nestjs/common");
const project_user_service_1 = require("./project_user.service");
const project_user_controller_1 = require("./project_user.controller");
const typeorm_1 = require("@nestjs/typeorm");
const project_user_entity_1 = require("./entities/project_user.entity");
let ProjectUserModule = class ProjectUserModule {
};
exports.ProjectUserModule = ProjectUserModule;
exports.ProjectUserModule = ProjectUserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([project_user_entity_1.ProjectUser])],
        exports: [project_user_service_1.ProjectUserService],
        controllers: [project_user_controller_1.ProjectUserController],
        providers: [project_user_service_1.ProjectUserService, classes_1.Expose],
    })
], ProjectUserModule);
//# sourceMappingURL=project_user.module.js.map