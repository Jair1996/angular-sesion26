import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUserPageComponent } from './detail-user-page.component';

describe('DetailUserPageComponent', () => {
  let component: DetailUserPageComponent;
  let fixture: ComponentFixture<DetailUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailUserPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
