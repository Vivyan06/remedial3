import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarModalPage } from './eliminar-modal.page';

describe('EliminarModalPage', () => {
  let component: EliminarModalPage;
  let fixture: ComponentFixture<EliminarModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EliminarModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
