import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarEmailComponent } from './atualizar-email.component';

describe('AtualizarEmailComponent', () => {
  let component: AtualizarEmailComponent;
  let fixture: ComponentFixture<AtualizarEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
