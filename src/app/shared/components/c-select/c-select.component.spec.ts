import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSelectComponent } from './c-select.component';

describe('CSelectComponent', () => {
  let component: CSelectComponent;
  let fixture: ComponentFixture<CSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
