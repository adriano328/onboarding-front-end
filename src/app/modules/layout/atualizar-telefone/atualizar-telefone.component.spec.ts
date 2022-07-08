import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarTelefoneComponent } from './atualizar-telefone.component';

describe('AtualizarTelefoneComponent', () => {
  let component: AtualizarTelefoneComponent;
  let fixture: ComponentFixture<AtualizarTelefoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarTelefoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
