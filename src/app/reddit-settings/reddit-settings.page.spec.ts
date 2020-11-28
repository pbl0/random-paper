import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedditSettingsPage } from './reddit-settings.page';

describe('RedditSettingsPage', () => {
  let component: RedditSettingsPage;
  let fixture: ComponentFixture<RedditSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedditSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
