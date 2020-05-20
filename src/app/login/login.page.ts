import { Component, OnInit, Query } from '@angular/core';
import { LoginService } from '../../services/login.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  usuario: any;
  navigate: any;
  key: any
  loginForm: FormGroup;
  error_return: any;
  error_messages = {
    'email':
      [
        { type: 'required', message: 'Digite um email' },
        { type: 'minlength', message: 'Email muito pequeno' },
        { type: 'pattern' , message:  'Digite um email valido'},
      ],
    'password':
      [
        { type: 'required', message: 'Digite uma senha' },
        { type: 'minlength', message: 'Senha muito curta'}
      ], 
   
  }

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public loginService: LoginService) {

    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ]))
    });
  }

  ngOnInit() {
  }

  onClickLoginHandler() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    let user = {
      email,
      password,
    }

    this.loginService.login(user)
      .then(data => {
        console.log(data)
        this.usuario = data;
        this.router.navigate(['/home', ""], {
          queryParams: {
            nome: this.usuario.nome,
            email: this.usuario.email,
            sobrenome: this.usuario.sobrenome,
            cidade: this.usuario.cidade,
            estado: this.usuario.estado,
            photo: this.usuario.photo,
           
          }
        })
      })
      .catch(err => {
        console.log(err)
        this.error_return = err.error.message
      })
    }
}
