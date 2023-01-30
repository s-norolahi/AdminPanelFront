import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatListComponent } from './cat-list.component';

describe('CatListComponent', () => {
  let component: CatListComponent;
  let fixture: ComponentFixture<CatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
