import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListDogPage } from './list-dog.page';

describe('ListDogPage', () => {
  let component: ListDogPage;
  let fixture: ComponentFixture<ListDogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListDogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
