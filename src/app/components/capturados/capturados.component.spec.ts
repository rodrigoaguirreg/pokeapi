import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturadosComponent } from './capturados.component';

describe('CapturadosComponent', () => {
  let component: CapturadosComponent;
  let fixture: ComponentFixture<CapturadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapturadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
