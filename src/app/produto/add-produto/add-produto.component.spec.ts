import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProdutoComponent } from './add-produto.component';

describe('AddProdutoComponent', () => {
  let component: AddProdutoComponent;
  let fixture: ComponentFixture<AddProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
