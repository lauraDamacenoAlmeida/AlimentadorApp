import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TodosService } from '../service/servise';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {   
  todo: any;
  nome: string = "";
  porte: string = "";
  raca: string = "";
  peso: number;
  periodo: number;
  constructor(public navCtrl: NavController, public TodosService: TodosService) { }


  // async ionViewDidLoad() {
  //   await this.getAll();
  // }
  async post() {
    console.log("Armazenando");
    let armazenar = {
      completed: true,
      nome: this.nome,
      porte: this.porte,
      raca: this.raca,
      peso: this.peso,
      periodo: this.periodo
    }

    await this.TodosService.post(armazenar).subscribe((res) => {
      console.log(res);
     });
}}
