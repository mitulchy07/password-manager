import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PasswordAddEditComponent } from './password-add-edit/password-add-edit.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PasswordsService } from './data/passwords.service';
import { CoreService } from './core/core.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // [x: string]: any;
  // decodedPassword!: string;



  displayedColumns: string[] = [
    'id',
    'userName',
    'encryptedPassword',
    'category',
    'app',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _passwordService: PasswordsService,
    private _coreService: CoreService,
  ) {}
  ngOnInit(): void {
    this.gettingData();
  }

  passwordAddEditModal() {
   const dialogRef =  this._dialog.open(PasswordAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.gettingData();
        }
      }
    })
  }

  gettingData() {
    this._passwordService.gettingData().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(res)
        this.dataSource.data = res.map((row: any) => {
          row.decodedPassword = atob(row.encryptedPassword);
          return row;
        });
      },
      error: console.log,
    });
  }

  


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  deleteData(id: number){
    this._passwordService.deleteData(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Password Deleted!!!', 'Done');

        this.gettingData();
      },
      error: console.log,
    })
  }

  passwordUpdateModal(data: any) {
    // this.dataSource.data = data((row: any) => {
    //   row.decodedPassword = atob(row.encryptedPassword);
    //   return row;
    // });
    const dialogRef =  this._dialog.open(PasswordAddEditComponent, {
      data: {
        'category': data.category,
        'app': data.app,
        'userName': data.userName,
        'password': atob(data.encryptedPassword),
        'id': data.id,
      }
    });  
    console.log(data)
       
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.gettingData();
        }
      }
    })
   }

}
