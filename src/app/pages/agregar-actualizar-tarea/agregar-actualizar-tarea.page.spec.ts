import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarActualizarTareaPage } from './agregar-actualizar-tarea.page';

describe('AgregarActualizarTareaPage', () => {
  let component: AgregarActualizarTareaPage;
  let fixture: ComponentFixture<AgregarActualizarTareaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarActualizarTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
