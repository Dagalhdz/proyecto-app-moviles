import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CambioAutoPage } from './cambio-auto.page';

describe('CambioAutoPage', () => {
  let component: CambioAutoPage;
  let fixture: ComponentFixture<CambioAutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioAutoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CambioAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
