"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./controllers/app.controller");
const app_service_1 = require("./services/app.service");
const user_service_1 = require("./services/user.service");
const database_module_js_1 = require("./database/database.module.js");
const user_controller_1 = require("./controllers/user.controller");
const user_repository_1 = require("./repositories/user.repository");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_js_1.DatabaseModule,
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.default]),
        ],
        controllers: [app_controller_1.AppController, user_controller_1.UserController],
        providers: [app_service_1.AppService, user_service_1.UserService, user_repository_1.UserRepository],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map