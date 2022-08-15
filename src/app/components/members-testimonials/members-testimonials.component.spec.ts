import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersTestimonialsComponent } from './members-testimonials.component';

describe('MembersTestimonialsComponent', () => {
  let component: MembersTestimonialsComponent;
  let fixture: ComponentFixture<MembersTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersTestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
