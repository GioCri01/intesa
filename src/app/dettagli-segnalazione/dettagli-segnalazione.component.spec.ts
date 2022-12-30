import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliSegnalazioneComponent } from './dettagli-segnalazione.component';

describe('DettagliSegnalazioneComponent', () => {
  let component: DettagliSegnalazioneComponent;
  let fixture: ComponentFixture<DettagliSegnalazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliSegnalazioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettagliSegnalazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
