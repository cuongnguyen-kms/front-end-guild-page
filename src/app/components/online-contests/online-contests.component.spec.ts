import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineContestsComponent } from './online-contests.component';

describe('OnlineContestsComponent', () => {
  let component: OnlineContestsComponent;
  let fixture: ComponentFixture<OnlineContestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineContestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineContestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
