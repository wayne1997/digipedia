import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  registerForm: FormGroup;

  constructor(private navCtl: NavController, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
    });
   }

  register(){
    console.log('Registro');
  }

  goToLogin(){
    this.navCtl.navigateBack('/login');
  }

}
