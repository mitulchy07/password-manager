import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { PasswordsService } from '../data/passwords.service';
// import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-password-add-edit',
  templateUrl: './password-add-edit.component.html',
  styleUrls: ['./password-add-edit.component.scss'],
})
export class PasswordAddEditComponent implements OnInit {
  passwordForm: FormGroup;

  constructor(
    private _pf: FormBuilder,
    private _passwordData: PasswordsService,
    private _coreService: CoreService,
    private _dialogRef: MatDialogRef<PasswordAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.passwordForm = this._pf.group({
      category: '',
      app: '',
      userName: '',
      password: '',
    });
  }

  ngOnInit(): void {
    this.passwordForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.passwordForm.valid) {
      if (this.data) {
        let encryptedPassword = btoa(this.passwordForm.value.password);
        let myData = {
          category: this.passwordForm.value.category,
          app: this.passwordForm.value.app,
          userName: this.passwordForm.value.userName,
          encryptedPassword: encryptedPassword,
        };

        this._passwordData.updatingData(this.data.id, myData).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Password has been successfully updated.', 'Done');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      } else {
        let encryptedPassword = btoa(this.passwordForm.value.password);
        let myData = {
          category: this.passwordForm.value.category,
          app: this.passwordForm.value.app,
          userName: this.passwordForm.value.userName,
          encryptedPassword: encryptedPassword,
        };

        this._passwordData.addingData(myData).subscribe({
          next: (val: any) => {
            // alert('Password Added Successfully.');
            this._coreService.openSnackBar('Password Added Successfully.', 'Done');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }

      // console.log(myData)
      // console.log(atob(myData.encryptedPassword))
    }
  }
}
