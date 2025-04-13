"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAttachModule = void 0;
const common_1 = require("@nestjs/common");
const user_attach_service_1 = require("./user-attach.service");
const user_attach_controller_1 = require("./user-attach.controller");
let UserAttachModule = class UserAttachModule {
};
exports.UserAttachModule = UserAttachModule;
exports.UserAttachModule = UserAttachModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_attach_controller_1.UserAttachController],
        providers: [user_attach_service_1.UserAttachService],
    })
], UserAttachModule);
//# sourceMappingURL=user-attach.module.js.map