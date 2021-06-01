import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OndeFicaComponent } from './onde-fica.component';

describe('OndeFicaComponent', () => {
  let component: OndeFicaComponent;
  let fixture: ComponentFixture<OndeFicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OndeFicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OndeFicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
