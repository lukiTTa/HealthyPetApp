import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticoAddComponent } from './diagnostico-add.component';

describe('DiagnosticoAddComponent', () => {
  let component: DiagnosticoAddComponent;
  let fixture: ComponentFixture<DiagnosticoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
