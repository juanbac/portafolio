
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmGridUserComponent } from './am-grid-user.component';

describe('AmGridUserComponent', () => {
  let component: AmGridUserComponent;
  let fixture: ComponentFixture<AmGridUserComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AmGridUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmGridUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
