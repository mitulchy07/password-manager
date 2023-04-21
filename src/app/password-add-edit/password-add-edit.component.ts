import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PasswordsService } from '../data/passwords.service';
// import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-password-add-edit',
  templateUrl: './password-add-edit.component.html',
  styleUrls: ['./password-add-edit.component.scss'],
})
export class PasswordAddEditComponent {
  passwordForm: FormGroup;

  constructor(
    private _pf: FormBuilder,
    private _passwordData: PasswordsService,
    private _dialogRef: MatDialogRef<PasswordAddEditComponent>
  ) {
    this.passwordForm = this._pf.group({
      category: '',
      app: '',
      userName: '',
      password: '',
    });
  }


  onFormSubmit() {
    if (this.passwordForm.valid) {
      let encryptedPassword = btoa(this.passwordForm.value.password);
      let myData = {
        category: this.passwordForm.value.category,
        app: this.passwordForm.value.app,
        userName: this.passwordForm.value.userName,
        encryptedPassword: encryptedPassword,
      };

      this._passwordData.addingData(myData).subscribe({
        next: (val: any) => {
          alert('Password Added Successfully.');
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        },
      });

      // console.log(myData)
      // console.log(atob(myData.encryptedPassword))
    }
  }
}
