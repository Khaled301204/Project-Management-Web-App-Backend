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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBugsController = void 0;
const common_1 = require("@nestjs/common");
const user_bugs_service_1 = require("./user_bugs.service");
const create_user_bug_dto_1 = require("./dto/create-user_bug.dto");
const update_user_bug_dto_1 = require("./dto/update-user_bug.dto");
let UserBugsController = class UserBugsController {
    constructor(userBugsService) {
        this.userBugsService = userBugsService;
    }
    create(createUserBugDto) {
        return this.userBugsService.create(createUserBugDto);
    }
    findAll() {
        return this.userBugsService.findAll();
    }
    findOne(id) {
        return this.userBugsService.findOne(+id);
    }
    update(id, updateUserBugDto) {
        return this.userBugsService.update(+id, updateUserBugDto);
    }
    remove(id) {
        return this.userBugsService.remove(+id);
    }
};
exports.UserBugsController = UserBugsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_bug_dto_1.CreateUserBugDto]),
    __metadata("design:returntype", void 0)
], UserBugsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserBugsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserBugsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_bug_dto_1.UpdateUserBugDto]),
    __metadata("design:returntype", void 0)
], UserBugsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserBugsController.prototype, "remove", null);
exports.UserBugsController = UserBugsController = __decorate([
    (0, common_1.Controller)('user-bugs'),
    __metadata("design:paramtypes", [user_bugs_service_1.UserBugsService])
], UserBugsController);
//# sourceMappingURL=user_bugs.controller.js.map