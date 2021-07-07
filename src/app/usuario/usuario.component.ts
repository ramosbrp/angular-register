import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/models/usuario';
import { UsuarioService } from '../core/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private service: UsuarioService) { }
  usuario: Usuario ={
    nome: '',
    fone: '',
    uf: ''
  }

  ngOnInit(): void {
  }

  gravar(usuario: Usuario){
    alert(JSON.stringify(usuario, null, 4))
    this.service.gravar(usuario).subscribe(()=>{
      alert('Sucess!')
    },
    ()=>{
      alert('Error')
    }
    )
  }

}
