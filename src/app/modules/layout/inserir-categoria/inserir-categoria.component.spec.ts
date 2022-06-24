import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirCategoriaComponent } from './inserir-categoria.component';

describe('InserirCategoriaComponent', () => {
  let component: InserirCategoriaComponent;
  let fixture: ComponentFixture<InserirCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
