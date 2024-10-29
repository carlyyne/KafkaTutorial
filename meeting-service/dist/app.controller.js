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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let AppController = class AppController {
    constructor(client) {
        this.client = client;
    }
    async reserveRoom(body) {
        const message = `ROOM_RESERVED: Room ${body.roomId} reserved`;
        this.client.emit('room-availability', message);
        return { message: 'Room reserved successfully' };
    }
    async cancelReservation(body) {
        const message = `ROOM_CANCELED: Reservation for Room ${body.roomId} canceled`;
        this.client.emit('room-availability', message);
        return { message: 'Reservation canceled successfully' };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)('reserve'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "reserveRoom", null);
__decorate([
    (0, common_1.Post)('cancel'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "cancelReservation", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('meetings'),
    __param(0, (0, common_1.Inject)('MEETING-SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientKafka])
], AppController);
//# sourceMappingURL=app.controller.js.map