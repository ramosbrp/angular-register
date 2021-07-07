import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../shared/models/usuario';


const url = 'http://localhost:3000/usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) { }

  gravar(usuario: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(url, usuario)
  }

}
