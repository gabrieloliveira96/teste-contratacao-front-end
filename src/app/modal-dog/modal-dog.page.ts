import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-dog',
  templateUrl: './modal-dog.page.html',
  styleUrls: ['./modal-dog.page.scss'],
})
export class ModalDogPage implements OnInit {
  @Input() nome: string;
  @Input() sobrenome: string;
  @Input() email: string;
  @Input() seguidores: string;
  @Input() projetos: string;
  @Input() seguidos: string;
  @Input() cidade: string;
  @Input() estado: string;
  @Input() photo: string;
  @Input() bio: string;
  constructor(
    private modalCtrl: ModalController,
    private router: Router) { }

  ngOnInit() { }

  async closeModal() {
    this.modalCtrl.dismiss();
    this.router.navigate(["/list-dog"])
  }

}
