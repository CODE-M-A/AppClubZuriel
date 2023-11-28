import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoUsuarioConquiatadorPage } from './nuevo-usuario-conquiatador.page';

describe('NuevoUsuarioConquiatadorPage', () => {
  let component: NuevoUsuarioConquiatadorPage;
  let fixture: ComponentFixture<NuevoUsuarioConquiatadorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoUsuarioConquiatadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
