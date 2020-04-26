import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsMainComponent } from './donors-main.component';

describe('DonorsMainComponent', () => {
  let component: DonorsMainComponent;
  let fixture: ComponentFixture<DonorsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
