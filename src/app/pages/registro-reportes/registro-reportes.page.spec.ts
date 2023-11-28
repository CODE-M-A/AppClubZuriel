import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroReportesPage } from './registro-reportes.page';

describe('RegistroReportesPage', () => {
  let component: RegistroReportesPage;
  let fixture: ComponentFixture<RegistroReportesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroReportesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
