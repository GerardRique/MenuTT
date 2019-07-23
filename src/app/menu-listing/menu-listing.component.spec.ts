import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListingComponent } from './menu-listing.component';

describe('MenuListingComponent', () => {
  let component: MenuListingComponent;
  let fixture: ComponentFixture<MenuListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
