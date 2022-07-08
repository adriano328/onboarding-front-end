import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarEnderecoComponent } from './atualizar-endereco.component';

describe('AtualizarEnderecoComponent', () => {
  let component: AtualizarEnderecoComponent;
  let fixture: ComponentFixture<AtualizarEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarEnderecoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
