import { Component, OnInit } from '@angular/core';
import { ListadoComponent } from '../listado/listado.component';
import { error } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Turisteando';
  ListadoComponent: any[] = [];

  constructor(protected listadocomponent: ListadoComponent ) {
    console.log('entro a listado');
  }

  ngOnInit() {
     this.listadocomponent.getUser().subscribe(
        (data) => {
          this.listadocomponent = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
