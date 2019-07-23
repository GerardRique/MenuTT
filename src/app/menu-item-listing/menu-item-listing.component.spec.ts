import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemListingComponent } from './menu-item-listing.component';

describe('MenuItemListingComponent', () => {
  let component: MenuItemListingComponent;
  let fixture: ComponentFixture<MenuItemListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
