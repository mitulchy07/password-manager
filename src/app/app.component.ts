import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {PasswordAddEditComponent} from './password-add-edit/password-add-edit.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'password-manager';

  constructor(private _dialog: MatDialog) {}

  passwordAddEditModal(){
    this._dialog.open(PasswordAddEditComponent)
  }
  
}
