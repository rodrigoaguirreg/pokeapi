import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPokeComponent } from './modal-poke.component';

describe('ModalPokeComponent', () => {
  let component: ModalPokeComponent;
  let fixture: ComponentFixture<ModalPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
