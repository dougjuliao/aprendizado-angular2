import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuCompCriadoCliComponent } from './meu-comp-criado-cli.component';

describe('MeuCompCriadoCliComponent', () => {
  let component: MeuCompCriadoCliComponent;
  let fixture: ComponentFixture<MeuCompCriadoCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuCompCriadoCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuCompCriadoCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
