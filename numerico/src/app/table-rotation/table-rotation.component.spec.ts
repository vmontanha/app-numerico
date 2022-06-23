import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRotationComponent } from './table-rotation.component';

describe('TableRotationComponent', () => {
  let component: TableRotationComponent;
  let fixture: ComponentFixture<TableRotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
