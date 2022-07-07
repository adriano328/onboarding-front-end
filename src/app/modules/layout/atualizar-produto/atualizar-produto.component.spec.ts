import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarProdutoComponent } from './atualizar-produto.component';

describe('AtualizarProdutoComponent', () => {
  let component: AtualizarProdutoComponent;
  let fixture: ComponentFixture<AtualizarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
