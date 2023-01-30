import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodRegisterComponent } from './good-register.component';

describe('GoodRegisterComponent', () => {
  let component: GoodRegisterComponent;
  let fixture: ComponentFixture<GoodRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
