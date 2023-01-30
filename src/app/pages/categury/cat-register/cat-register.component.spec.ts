import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatRegisterComponent } from './cat-register.component';

describe('CatRegisterComponent', () => {
  let component: CatRegisterComponent;
  let fixture: ComponentFixture<CatRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
