"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBugsService = void 0;
const common_1 = require("@nestjs/common");
let UserBugsService = class UserBugsService {
    create(createUserBugDto) {
        return 'This action adds a new userBug';
    }
    findAll() {
        return `This action returns all userBugs`;
    }
    findOne(id) {
        return `This action returns a #${id} userBug`;
    }
    update(id, updateUserBugDto) {
        return `This action updates a #${id} userBug`;
    }
    remove(id) {
        return `This action removes a #${id} userBug`;
    }
};
exports.UserBugsService = UserBugsService;
exports.UserBugsService = UserBugsService = __decorate([
    (0, common_1.Injectable)()
], UserBugsService);
//# sourceMappingURL=user_bugs.service.js.map