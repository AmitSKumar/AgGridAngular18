import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertableComponent } from './offertable.component';

describe('OffertableComponent', () => {
  let component: OffertableComponent;
  let fixture: ComponentFixture<OffertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffertableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
