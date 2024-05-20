import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemShowcaseComponent } from './product-item-showcase.component';

describe('ProductItemShowcaseComponent', () => {
  let component: ProductItemShowcaseComponent;
  let fixture: ComponentFixture<ProductItemShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemShowcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductItemShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
