import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConquistadoresPage } from './conquistadores.page';

describe('ConquistadoresPage', () => {
  let component: ConquistadoresPage;
  let fixture: ComponentFixture<ConquistadoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConquistadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
