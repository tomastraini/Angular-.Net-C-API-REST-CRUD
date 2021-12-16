import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABMClientesComponent } from './abmclientes.component';

describe('ABMClientesComponent', () => {
  let component: ABMClientesComponent;
  let fixture: ComponentFixture<ABMClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABMClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ABMClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
