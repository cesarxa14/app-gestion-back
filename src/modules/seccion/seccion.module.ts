import { Module } from "@nestjs/common";
import SeccionController from "./seccion.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Seccion } from "./seccion.entity";
import SeccionService from "./seccion.service";


@Module({
    imports: [TypeOrmModule.forFeature([Seccion])],
    controllers: [SeccionController],
    providers: [SeccionService]
})

export default class SeccionModule{}