import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario.model';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(
    private navCtrl: NavController,
    private loginUsuario: LoginService,
    private router: Router,
    // private userModel: Usuario,
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

  // login(){
  //   const res = this.loginUsuario.login(this.email, this.password);
  //   // RouterLink('/menu');
  //   console.log(this.email, this.password);
    
  //   return res;
  // }
  login() {
    this.loginUsuario.login(this.email, this.password)
      .subscribe(
        (usuario: Usuario) => {
          console.log('Inicio de sesión exitoso:', usuario);
          // Aquí puedes redirigir al usuario a la página deseada, por ejemplo:
          // this.router.navigate(['/menu']);
          this.router.navigate(['/menu'], { state: { usuario: usuario } });
        },
        (error) => {
          console.error('Error en el inicio de sesión:', error);

          alert("Usuario incorrecto")
          // Puedes manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario.
        }
      );
  }
  

}
