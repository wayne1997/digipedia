import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public loginForm: FormGroup;
  constructor( private _navCtl: NavController) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }else{
      console.log('Form is invalid');
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  async goToRegister(){
    await this._navCtl.navigateForward('/register');
  }
}
