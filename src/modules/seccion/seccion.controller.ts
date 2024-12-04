import { Body, Controller, Get, Post } from "@nestjs/common";
import SeccionService from "./seccion.service";
import { Seccion } from "./seccion.entity";
import { CreateSeccionDto } from "./dtos/create-seccion.dto";


@Controller('secciones')
export default class SeccionController {
    constructor(private readonly seccionService: SeccionService){}

    @Get()
    async getSeccion(): Promise<Seccion[]>{
        return await this.seccionService.getSecciones();
    }

    @Post()
    async createSeccion(@Body() createSeccionDto: CreateSeccionDto): Promise<Seccion> {
      
        return await this.seccionService.createSeccion(createSeccionDto);
    }


}