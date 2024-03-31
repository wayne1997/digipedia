import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../services/alert.service';
import { StorageService } from '../../services/storage.service';
import { emailRegExp, passwordRegExp } from '@core/variables/regular-exp.variables';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public loginForm: FormGroup;
  constructor(
    private readonly _navCtl: NavController,
    private readonly _userService: UserService,
    private readonly _alertService: AlertService,
    private readonly _storageService: StorageService,
    ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(emailRegExp)]),
      password: new FormControl('', [Validators.required, Validators.pattern(passwordRegExp)]),
    });
  }

  async login(){
    try{
      if(this.loginForm.invalid){
        throw new Error('Formulario inválido');
      }
      const user  = await this._userService.login(this.loginForm.value);
      if(user){
        const userData = {
          displayName: user.displayName,
        };
        this._storageService.saveItem('displayName' , JSON.stringify(userData));
        this._navCtl.navigateForward('/home');
      }
      this.loginForm.reset();
    }catch(error: any){
      this.loginForm.reset();
      if(error.message){
        this._alertService.showMessageAlert('¡Ocurrió algo!', error.message);
      }
    }
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  async goToRegister(){
    await this._navCtl.navigateForward('/register');
  }
}
