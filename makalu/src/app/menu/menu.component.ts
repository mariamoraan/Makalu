import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }


  

  public selected_category:number = 0;

  public categories = [
    {
      'id':0,
      'name':'Vegetariano',
      'selected':true,
    },
    {
      'id':1,
      'name':'Carnes y Pescados',
      'selected':false,
    },
    {
      'id':2,
      'name':'Pastas',
      'selected':false,
    },
    {
      'id':3,
      'name':'Arroces',
      'selected':false,
    },
    {
      'id':4,
      'name':'Postres',
      'selected':false,
    },
  ]

  public dishes = [
    {
      'img':'../../assets/burger.jpg',
      'name':'Hamburguesa Titanic',
      'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum purus quis pretium vehicula.',
      'category':1
    },
    {
      'img':'../../assets/tarte.jpg',
      'name':'Kitch de calabacín y cebolla caramelizada',
      'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum purus quis pretium vehicula.',
      'category':0
    },
    {
      'img':'../../assets/brochets.jpg',
      'name':'Pincho de Verduras',
      'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum purus quis pretium vehicula.',
      'category':0
    },
    {
      'img':'../../assets/salmon.jpg',
      'name':'Salmón con patatas',
      'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum purus quis pretium vehicula.',
      'category':1
    },
    {
      'img':'../../assets/paella.jpg',
      'name':'Paella Valenciana',
      'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum purus quis pretium vehicula.',
      'category':3
    },
    {
      'img':'../../assets/rice.jpg',
      'name':'Arroz al Horno',
      'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum purus quis pretium vehicula.',
      'category':3
    },

  ]

  select_category(id:number){
    this.selected_category = id;
  }

  ngOnInit(): void {
  }

}
