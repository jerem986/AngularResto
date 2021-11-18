import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudujourComponent } from './menudujour.component';

describe('MenudujourComponent', () => {
  let component: MenudujourComponent;
  let fixture: ComponentFixture<MenudujourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenudujourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudujourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
