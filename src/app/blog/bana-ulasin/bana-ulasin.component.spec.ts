import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanaUlasinComponent } from './bana-ulasin.component';

describe('BanaUlasinComponent', () => {
  let component: BanaUlasinComponent;
  let fixture: ComponentFixture<BanaUlasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanaUlasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanaUlasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
