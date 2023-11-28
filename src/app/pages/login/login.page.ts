import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private loginUsuario: LoginService,
    private userService : UsuarioService
  ) { }

  ngOnInit() {
  console.log(this.userService.listaUsuario());
  }

  redireccionarAUniversidad() {
    window.open('https://www.uab.edu.bo/', '_blank');
  }

  redireccionarAFacebook() {
    window.open('fb://page/SoyUAB', '_system', 'location=yes');
    window.open('https://www.facebook.com/SoyUAB', '_blank');
  }

  redireccionarAInstagram() {
    window.open('instagram://user?username=soy.uab', '_system', 'location=yes');
    window.open('https://www.instagram.com/soy.uab/', '_blank');
  }

  login(email:string, contrasenia:string){
    const res = this.loginUsuario.login(email, contrasenia);
    // RouterLink('/menu');
    return res;
  }

}
