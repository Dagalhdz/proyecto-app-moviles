import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoAutosPage } from './info-autos.page';

describe('InfoAutosPage', () => {
  let component: InfoAutosPage;
  let fixture: ComponentFixture<InfoAutosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAutosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoAutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
