import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirProdutoComponent } from './inserir-produto.component';

describe('InserirProdutoComponent', () => {
  let component: InserirProdutoComponent;
  let fixture: ComponentFixture<InserirProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
