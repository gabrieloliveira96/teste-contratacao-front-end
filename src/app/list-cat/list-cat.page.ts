import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service'
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalCatPage } from '../modal-cat/modal-cat.page';

@Component({
  selector: 'app-list-cat',
  templateUrl: './list-cat.page.html',
  styleUrls: ['./list-cat.page.scss'],
})
export class ListCatPage implements OnInit {
  public cats: any
  public cat: any
  public i: any
  constructor(
    public service: CatService,
    private router: Router,
    private modalCtrl: ModalController) { }
  ngOnInit() {

    this.getAllListCat();
  }

  getAllListCat() {

    this.service.list()
      .then(
        data => {
          this.cats = data;
        })
        .catch(error => {
          console.log(error);
        })
  }

  async  openModal(i) {
    this.i = i;
    this.cat = this.cats[this.i]
    
    const modal = await this.modalCtrl.create({
      component: ModalCatPage,
      componentProps:{
        nome: this.cat.nome,
        sobrenome: this.cat.sobrenome,
        telefone: this.cat.telefone,
        seguidores: this.cat.seguidores,
        projetos: this.cat.projetos,
        seguidos: this.cat.seguidos,
        cidade: this.cat.cidade,
        estado: this.cat.estado,
        photo: this.cat.photo,
        bio: this.cat.bio
      }
    });
    return await modal.present();
  }
}
