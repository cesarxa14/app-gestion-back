import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Seccion } from "./seccion.entity";
import { CreateSeccionDto } from "./dtos/create-seccion.dto";


@Injectable()
export default class SeccionService {

    constructor(
        @InjectRepository(Seccion) private readonly seccionRepository: Repository<Seccion>,
    ){
        
    }
    async getSecciones(){
        try {
            return this.seccionRepository.find();
        } catch(err) {
            console.log('err', err)
            throw err;
        }
    }

    async createSeccion(createSeccionDto: CreateSeccionDto): Promise<Seccion>{
        try {
            const nuevaSeccion = this.seccionRepository.create(createSeccionDto);
            return this.seccionRepository.save(nuevaSeccion);
        } catch(err) {
            console.log('err', err)
            throw err;
        }
    }

    createSeccionDto: CreateSeccionDto
}