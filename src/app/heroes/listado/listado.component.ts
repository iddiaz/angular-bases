import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroeBorrado: string = '';

  constructor() { 
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('onInit')
  }

  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Superman'];

  borrarHeroe(){

    const [heroeBorrado] = this.heroes.splice(0,1);
    console.log('borrando...', heroeBorrado);
    this.heroeBorrado = heroeBorrado;
   
  }

}
