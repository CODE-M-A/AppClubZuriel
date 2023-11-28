import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuReportesActividadesPage } from './menu-reportes-actividades.page';

describe('MenuReportesActividadesPage', () => {
  let component: MenuReportesActividadesPage;
  let fixture: ComponentFixture<MenuReportesActividadesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuReportesActividadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
