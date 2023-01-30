import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodListComponent } from './good-list.component';

describe('GoodListComponent', () => {
  let component: GoodListComponent;
  let fixture: ComponentFixture<GoodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
