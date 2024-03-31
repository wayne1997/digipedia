import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../services/alert.service';
import { emailRegExp, passwordRegExp } from '@core/variables/regular-exp.variables';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  registerForm: FormGroup;

  constructor(
    private readonly _navCtl: NavController,
    private readonly _fb: FormBuilder,
    private readonly _userService: UserService,
    private readonly _alertService: AlertService) {
    this.registerForm = this._fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(emailRegExp)]],
      password: ['', [Validators.required, Validators.pattern(passwordRegExp)]],
    });
   }

   async register(){
    try{
     if(this.registerForm.invalid){
       console.log(this.registerForm.value)
       throw new Error('Formulario inválido');
     }
     await this._userService.register(this.registerForm.value);
     this._navCtl.navigateBack('/login');
     this._alertService.showMessageAlert('Usuario Creado', 'Revise su correo electrónico');
     this.registerForm.reset();
    }catch(error: any){
     if(error.message){
       this._alertService.showMessageAlert('¡Ocurrió algo!', error.message);
     }
     this.registerForm.reset();
    }
   }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  goToLogin(){
    this._navCtl.navigateBack('/login');
  }

}
