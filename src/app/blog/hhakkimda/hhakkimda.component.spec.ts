import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HhakkimdaComponent } from './hhakkimda.component';

describe('HhakkimdaComponent', () => {
  let component: HhakkimdaComponent;
  let fixture: ComponentFixture<HhakkimdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HhakkimdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HhakkimdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
