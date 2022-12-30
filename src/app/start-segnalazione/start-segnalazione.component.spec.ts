import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSegnalazioneComponent } from './start-segnalazione.component';

describe('StartSegnalazioneComponent', () => {
  let component: StartSegnalazioneComponent;
  let fixture: ComponentFixture<StartSegnalazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSegnalazioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartSegnalazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
