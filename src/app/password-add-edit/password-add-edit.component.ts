import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@Component({
  selector: 'app-password-add-edit',
  templateUrl: './password-add-edit.component.html',
  styleUrls: ['./password-add-edit.component.scss']
})
export class PasswordAddEditComponent {
  passwordForm: FormGroup;


  constructor(private _pf:FormBuilder){
    this.passwordForm = this._pf.group({
      category: '',
      app: '',
      userName: '',
      password: '',
    })
  }

  

  onFormSubmit(){
    if(this.passwordForm.valid){
      console.log(this.passwordForm.value)
      let encryptedPassword = btoa(this.passwordForm.value.password);
      console.log(encryptedPassword)
      let decriptedPassword = atob(encryptedPassword);
      console.log(decriptedPassword);
      
    }
  }
  
}
