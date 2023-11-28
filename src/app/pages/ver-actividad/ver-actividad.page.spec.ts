import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerActividadPage } from './ver-actividad.page';

describe('VerActividadPage', () => {
  let component: VerActividadPage;
  let fixture: ComponentFixture<VerActividadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerActividadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
