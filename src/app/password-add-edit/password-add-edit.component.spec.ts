import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordAddEditComponent } from './password-add-edit.component';

describe('PasswordAddEditComponent', () => {
  let component: PasswordAddEditComponent;
  let fixture: ComponentFixture<PasswordAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
