import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsPagesPage } from './tabs-pages.page';

describe('TabsPagesPage', () => {
  let component: TabsPagesPage;
  let fixture: ComponentFixture<TabsPagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsPagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsPagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
