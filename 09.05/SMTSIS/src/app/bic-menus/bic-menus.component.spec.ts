import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicMenusComponent } from './bic-menus.component';

describe('BicMenusComponent', () => {
  let component: BicMenusComponent;
  let fixture: ComponentFixture<BicMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
