import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 100000
  }

  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }


  constructor( 
    private dbzService: DbzService 
    ){ }

  agregarNuevoPersonaje( item: Personaje ){
    console.log('Main Page component', item );
    this.personajes.push( item );
  }

  cambiarNombre(event: any){
    console.log(event)

  }

}