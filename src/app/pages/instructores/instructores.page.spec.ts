import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstructoresPage } from './instructores.page';

describe('InstructoresPage', () => {
  let component: InstructoresPage;
  let fixture: ComponentFixture<InstructoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InstructoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
