"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBugsModule = void 0;
const common_1 = require("@nestjs/common");
const user_bugs_service_1 = require("./user_bugs.service");
const user_bugs_controller_1 = require("./user_bugs.controller");
let UserBugsModule = class UserBugsModule {
};
exports.UserBugsModule = UserBugsModule;
exports.UserBugsModule = UserBugsModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_bugs_controller_1.UserBugsController],
        providers: [user_bugs_service_1.UserBugsService],
    })
], UserBugsModule);
//# sourceMappingURL=user_bugs.module.js.map