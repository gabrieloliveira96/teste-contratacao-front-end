import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCatPage } from './list-cat.page';

describe('ListCatPage', () => {
  let component: ListCatPage;
  let fixture: ComponentFixture<ListCatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
