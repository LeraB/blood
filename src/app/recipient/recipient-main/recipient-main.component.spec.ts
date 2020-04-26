import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientMainComponent } from './recipient-main.component';

describe('RecipientMainComponent', () => {
  let component: RecipientMainComponent;
  let fixture: ComponentFixture<RecipientMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
