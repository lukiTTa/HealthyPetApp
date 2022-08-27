import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticoDetailsComponent } from './diagnostico-details.component';

describe('DiagnosticoDetailsComponent', () => {
  let component: DiagnosticoDetailsComponent;
  let fixture: ComponentFixture<DiagnosticoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
