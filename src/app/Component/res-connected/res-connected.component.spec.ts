import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResConnectedComponent } from './res-connected.component';

describe('ResConnectedComponent', () => {
  let component: ResConnectedComponent;
  let fixture: ComponentFixture<ResConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResConnectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
