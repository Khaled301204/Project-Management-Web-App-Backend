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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const task_entity_1 = require("./entities/task.entity");
const console_1 = require("console");
const typeorm_2 = require("@nestjs/typeorm");
const classes_1 = require("../classes");
let TasksService = class TasksService {
    constructor(Response, tasksRepository) {
        this.Response = Response;
        this.tasksRepository = tasksRepository;
    }
    async create(createTaskDto) {
        try {
            const newTask = await this.tasksRepository.save(createTaskDto);
            return this.Response.success(classes_1.SuccessStatusCodesEnum.Ok, 'Task created successfully', newTask);
        }
        catch (error) {
            console.log(error);
            return this.Response.error(error, classes_1.ErrorStatusCodesEnum.BadRequest);
        }
    }
    async findAll() {
        try {
            const tasks = await this.tasksRepository.find();
            return this.Response.success(classes_1.SuccessStatusCodesEnum.Ok, 'All Tasks fetched successfully', tasks);
        }
        catch (error) {
            console.log(error);
            return this.Response.error(error, classes_1.ErrorStatusCodesEnum.NotFound);
        }
    }
    async findOne(id) {
        try {
            const task = await this.tasksRepository.findOne({ where: { id } });
            if (!task) {
                throw new console_1.error('task not found ');
            }
            return this.Response.success(classes_1.SuccessStatusCodesEnum.Ok, `Task fetched successfully by ${id}`, task);
        }
        catch (error) {
            console.log(error);
            return this.Response.error(error, classes_1.ErrorStatusCodesEnum.NotFound);
        }
    }
    async update(id, updateTaskDto) {
        try {
            const task = await this.tasksRepository.findOne({ where: { id } });
            if (!task) {
                throw new console_1.error('task not found ');
            }
            const updatedTask = await this.tasksRepository.update(id, updateTaskDto);
            return this.Response.success(classes_1.SuccessStatusCodesEnum.Ok, `Task updated successfully by ${id}`, updatedTask);
        }
        catch (error) {
            console.log(error);
            return this.Response.error(error, classes_1.ErrorStatusCodesEnum.NotFound);
        }
    }
    async remove(id) {
        try {
            const task = await this.tasksRepository.findOne({ where: { id } });
            if (!task) {
                throw new console_1.error('task not found ');
            }
            const deletedTask = this.tasksRepository.softDelete(id);
            return this.Response.success(classes_1.SuccessStatusCodesEnum.Ok, `Task deleted successfully by ${id}`, deletedTask);
        }
        catch (error) {
            console.log(error);
            return this.Response.error(error, classes_1.ErrorStatusCodesEnum.BadRequest);
        }
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [classes_1.Expose,
        typeorm_1.Repository])
], TasksService);
//# sourceMappingURL=tasks.service.js.map