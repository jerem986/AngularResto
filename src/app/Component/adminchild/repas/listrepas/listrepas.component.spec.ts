import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrepasComponent } from './listrepas.component';

describe('ListrepasComponent', () => {
  let component: ListrepasComponent;
  let fixture: ComponentFixture<ListrepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrepasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
