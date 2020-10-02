import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProdutoComponent } from './list-produto.component';

describe('ListProdutoComponent', () => {
  let component: ListProdutoComponent;
  let fixture: ComponentFixture<ListProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
