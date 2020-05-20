import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service'
import { ModalController } from '@ionic/angular';
import { ModalDogPage } from '../modal-dog/modal-dog.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-dog',
  templateUrl: './list-dog.page.html',
  styleUrls: ['./list-dog.page.scss'],
})
export class ListDogPage implements OnInit {
  public dogs: any
  public dog: any
  public i: any


  constructor(
    public service: DogService,
    private router: Router,
    private modalCtrl: ModalController) { }
  ngOnInit() {

    this.getAllListDog();
  }

  getAllListDog() {

    this.service.list()
      .then(
        data => {
          this.dogs = data;
        },
        error => {
          console.log(error);
        });
  }
  async  openModal(i) {
    this.i = i;
    this.dog = this.dogs[this.i]
    
    const modal = await this.modalCtrl.create({
      component: ModalDogPage,
      componentProps:{
        nome: this.dog.nome,
        sobrenome: this.dog.sobrenome,
        email: this.dog.email,
        seguidores: this.dog.seguidores,
        projetos: this.dog.projetos,
        seguidos: this.dog.seguidos,
        cidade: this.dog.cidade,
        estado: this.dog.estado,
        photo: this.dog.photo,
        bio: this.dog.bio
      }
    });
    return await modal.present();

  }
}
