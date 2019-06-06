import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjudaPage } from './ajuda.page';

describe('AjudaPage', () => {
  let component: AjudaPage;
  let fixture: ComponentFixture<AjudaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjudaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
