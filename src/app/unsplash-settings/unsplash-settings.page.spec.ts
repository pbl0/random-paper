import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnsplashSettingsPage } from './unsplash-settings.page';

describe('UnsplashSettingsPage', () => {
  let component: UnsplashSettingsPage;
  let fixture: ComponentFixture<UnsplashSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsplashSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnsplashSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
