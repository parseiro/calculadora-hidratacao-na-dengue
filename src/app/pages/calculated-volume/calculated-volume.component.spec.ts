import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatedVolumeComponent } from './calculated-volume.component';

describe('CalculatedVolumeComponent', () => {
  let component: CalculatedVolumeComponent;
  let fixture: ComponentFixture<CalculatedVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatedVolumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatedVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
