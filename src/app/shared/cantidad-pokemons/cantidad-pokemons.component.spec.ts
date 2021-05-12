import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadPokemonsComponent } from './cantidad-pokemons.component';

describe('CantidadPokemonsComponent', () => {
  let component: CantidadPokemonsComponent;
  let fixture: ComponentFixture<CantidadPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantidadPokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
