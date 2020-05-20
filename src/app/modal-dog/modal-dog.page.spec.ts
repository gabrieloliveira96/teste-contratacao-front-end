import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalDogPage } from './modal-dog.page';

describe('ModalDogPage', () => {
  let component: ModalDogPage;
  let fixture: ComponentFixture<ModalDogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
