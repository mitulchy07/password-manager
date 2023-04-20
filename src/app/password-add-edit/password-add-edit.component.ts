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
      let encryptedPassword = btoa(this.passwordForm.value.password);

      let myData = {
        category: this.passwordForm.value.category,
        app: this.passwordForm.value.app,
        userName: this.passwordForm.value.userName,
        encryptedPassword: encryptedPassword,
      }

      console.log(myData)
      console.log(atob(myData.encryptedPassword))






      // console.log(this.passwordForm.value)
      // let encryptedPassword = btoa(this.passwordForm.value.password);
      // console.log(encryptedPassword)
      // let decriptedPassword = atob(encryptedPassword);
      // console.log(decriptedPassword);
      
    }
  }
  
}
