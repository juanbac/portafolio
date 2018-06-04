
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmNavigationComponent } from './am-navigation.component';

describe('AmNavigationComponent', () => {
  let component: AmNavigationComponent;
  let fixture: ComponentFixture<AmNavigationComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AmNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
