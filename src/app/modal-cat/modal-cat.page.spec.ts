import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCatPage } from './modal-cat.page';

describe('ModalCatPage', () => {
  let component: ModalCatPage;
  let fixture: ComponentFixture<ModalCatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
