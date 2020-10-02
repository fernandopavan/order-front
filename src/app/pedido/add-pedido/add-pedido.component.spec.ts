import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPedidoComponent } from './add-pedido.component';

describe('AddPedidoComponent', () => {
  let component: AddPedidoComponent;
  let fixture: ComponentFixture<AddPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
