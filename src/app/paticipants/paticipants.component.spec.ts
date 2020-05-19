import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaticipantsComponent } from './paticipants.component';

describe('PaticipantsComponent', () => {
  let component: PaticipantsComponent;
  let fixture: ComponentFixture<PaticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
