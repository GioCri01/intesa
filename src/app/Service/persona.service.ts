import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Persona } from '../Model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  getPersona():Observable<Persona>{
    return this.http.get<Persona>("http://localhost:8080/getAllPersona")
  }

  find(id: string){
    return this.http.get<Persona>("http://localhost:8080/getPersona/"+id+"")
  }
}

