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
exports.UserTasksService = void 0;
const common_1 = require("@nestjs/common");
const expose_1 = require("../classes/expose");
let UserTasksService = class UserTasksService {
    constructor(response) {
        this.response = response;
    }
    create(createUserTaskDto) {
        try {
            return 'This action adds a new userTask';
        }
        catch (error) {
            return this.response.error(error, expose_1.ErrorStatusCodesEnum.BadRequest);
        }
    }
    findAll() {
        try {
            return `This action returns all userTasks`;
        }
        catch (error) {
            return this.response.error(error, expose_1.ErrorStatusCodesEnum.BadRequest);
        }
    }
    findOne(id) {
        try {
            return `This action returns a #${id} userTask`;
        }
        catch (error) {
            return this.response.error(error, expose_1.ErrorStatusCodesEnum.BadRequest);
        }
    }
    update(id, updateUserTaskDto) {
        try {
            return `This action updates a #${id} userTask`;
        }
        catch (error) {
            return this.response.error(error, expose_1.ErrorStatusCodesEnum.BadRequest);
        }
    }
    remove(id) {
        try {
            return `This action removes a #${id} userTask`;
        }
        catch (error) {
            return this.response.error(error, expose_1.ErrorStatusCodesEnum.BadRequest);
        }
    }
};
exports.UserTasksService = UserTasksService;
exports.UserTasksService = UserTasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [expose_1.Expose])
], UserTasksService);
//# sourceMappingURL=user-tasks.service.js.map