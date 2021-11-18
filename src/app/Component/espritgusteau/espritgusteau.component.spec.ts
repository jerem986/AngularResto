import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspritgusteauComponent } from './espritgusteau.component';

describe('EspritgusteauComponent', () => {
  let component: EspritgusteauComponent;
  let fixture: ComponentFixture<EspritgusteauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspritgusteauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspritgusteauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
