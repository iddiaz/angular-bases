import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

   private _personajes: Personaje[] = [
      {
        nombre: 'Goku',
        poder: 15000
      },
      {
        nombre: 'vegeta',
        poder: 15000
      }
   ];

   get personajes(): Personaje[] {
      return [...this._personajes]; // spread para romper la referencia del objeto js
   }



   constructor() {}

   agregarPersonaje( personaje: Personaje ){
      this._personajes.push( personaje );

   }



}