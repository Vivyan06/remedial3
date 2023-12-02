import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarModalPage } from './modificar-modal.page';

describe('ModificarModalPage', () => {
  let component: ModificarModalPage;
  let fixture: ComponentFixture<ModificarModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModificarModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
