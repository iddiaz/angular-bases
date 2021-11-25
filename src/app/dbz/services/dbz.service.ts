import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

   personajes: Personaje[] = [
      {
        nombre: 'Goku',
        poder: 15000
      },
      {
        nombre: 'vegeta',
        poder: 15000
      }
    ];

   constructor() {
      console.log('servicio inicializado');
   }



}