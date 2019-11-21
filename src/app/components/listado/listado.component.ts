import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class ListadoComponent {

  title = 'Turisteando';
  ListadoComponent: any[] = [];

  constructor(protected http: HttpClient, listadocomponent: ListadoComponent) {
    console.log('entro a listado');
   }

  getUser() {
    return this.http.get('https://randomuser.me/api/?results=25');
   }

}
