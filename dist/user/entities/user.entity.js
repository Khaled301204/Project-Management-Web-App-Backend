"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserRole = exports.UserGender = void 0;
const department_entity_1 = require("../../departments/entities/department.entity");
const message_entity_1 = require("../../message/entities/message.entity");
const project_entity_1 = require("../../project/entities/project.entity");
const project_user_entity_1 = require("../../project_user/entities/project_user.entity");
const rate_entity_1 = require("../../rate/entities/rate.entity");
const user_task_entity_1 = require("../../user-tasks/entities/user-task.entity");
const typeorm_1 = require("typeorm");
var UserGender;
(function (UserGender) {
    UserGender["Male"] = "male";
    UserGender["Female"] = "female";
})(UserGender || (exports.UserGender = UserGender = {}));
var UserRole;
(function (UserRole) {
    UserRole["Manager"] = "manager";
    UserRole["Developer"] = "developer";
    UserRole["Tester"] = "tester";
    UserRole["Designer"] = "designer";
})(UserRole || (exports.UserRole = UserRole = {}));
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => department_entity_1.Department, department => department.id),
    (0, typeorm_1.JoinColumn)({ name: "department_id" }),
    __metadata("design:type", department_entity_1.Department)
], User.prototype, "department_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: UserGender, default: UserGender.Male }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], User.prototype, "birth_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], User.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User.prototype, "rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "accessToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: UserRole, default: UserRole.Developer }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => project_user_entity_1.ProjectUser, projectUser => projectUser.user_id),
    __metadata("design:type", Array)
], User.prototype, "projectUsers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_task_entity_1.UserTask, userTask => userTask.user_id),
    __metadata("design:type", Array)
], User.prototype, "userTasks", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rate_entity_1.Rate, rate => rate.user_id),
    __metadata("design:type", Array)
], User.prototype, "userRate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rate_entity_1.Rate, rate => rate.rated_by_id),
    __metadata("design:type", Array)
], User.prototype, "usersRatedByUser", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => message_entity_1.Message, message => message.sender_id),
    __metadata("design:type", Array)
], User.prototype, "messageSend", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => message_entity_1.Message, message => message.receiver_id),
    __metadata("design:type", Array)
], User.prototype, "messageReceived", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => project_entity_1.Project, project => project.client_id),
    __metadata("design:type", project_entity_1.Project)
], User.prototype, "project", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.entity.js.map