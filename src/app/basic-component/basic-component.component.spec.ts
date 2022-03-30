import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponentComponent } from './basic-component.component';

describe('BasicComponentComponent', () => {
  let component: BasicComponentComponent;
  let fixture: ComponentFixture<BasicComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia alternar entre on/off', () => {
    expect(component.isOn).toBeFalsy();
    component.clicked();
    expect(component.isOn).toBeTruthy();
    component.clicked();
    expect(component.isOn).toBeFalsy();
  });


  it('Deberia contener el texto apagada/prendida', () => {
    expect(component.message).toMatch(/apagada/i);
    component.clicked();
    expect(component.message).toMatch(/prendida/i)
  });

});
