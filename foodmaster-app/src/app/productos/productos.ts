import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {CommonModule} from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule,MatIconModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {
  productos = [
    {
      nombre: 'Pizza ',
      descripcion: 'Italiana con tomate y albahaca.',
      precio: '120',
      imagen: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg'
    },
    {
      nombre: 'Hamburguesa Doble',
      descripcion: 'Con queso cheddar.',
      precio: '40',
      imagen: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg'
    },
    {
      nombre: 'Sushi Variado',
      descripcion: 'Bandeja con sushi.',
      precio: '150',
      imagen: 'https://st2.depositphotos.com/1000604/7802/i/450/depositphotos_78027540-stock-photo-sushi-rolls.jpg'
    },
    {
      nombre: 'Tacos al Pastor',
      descripcion: 'Tortillas con carne al pastor y piña.',
      precio: '35',
      imagen: 'https://thestayathomechef.com/wp-content/uploads/2024/04/Classic-Tacos-Al-Pastor-H1-1200x720.jpg'
    },
    {
      nombre: 'Ensalada César',
      descripcion: 'Lechuga, pollo y aderezo césar.',
      precio: '75',
      imagen: 'https://newmansown.com/wp-content/uploads/2022/03/Caesar-salad-with-croutons.jpg'
    },
    {
      nombre: 'Helado de Vainilla',
      descripcion: 'Postre frío sabor vainilla.',
      precio: '30',
      imagen: 'https://www.gourmet.cl/wp-content/uploads/2016/09/Helado_Vainilla-web.jpg'
    },
    {
      nombre: 'Café Latte',
      descripcion: 'Café con leche espumada.',
      precio: '52',
      imagen: 'https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dw42dcae51/images/recipe-Images/cafe-latte1-recipe_resized.jpg?sw=1200&sh=1200&sm=fit'
    },
    {
      nombre: 'Brownie de Chocolate',
      descripcion: 'Bizcocho húmedo de chocolate.',
      precio: '30',
      imagen: 'https://perucomidas.com/wp-content/uploads/2024/04/brownie-peru-comidas.png'
    },
    {
      nombre: 'Croissant',
      descripcion: 'Pan hojaldrado francés.',
      precio: '35',
      imagen: 'https://delishglobe.com/wp-content/uploads/2024/11/Croissants-article-1536x1124.png'
    },
    {
      nombre: 'Wrap de Pollo',
      descripcion: 'Tortilla rellena de pollo y verduras.',
      precio: '40',
      imagen: 'https://www.panchovilla.cl/wp-content/uploads/2022/07/Wraps-de-pollo-fresco.jpg'
    },
    {
      nombre: 'Jugo Natural',
      descripcion: 'Zumo de frutas frescas.',
      precio: '25',
      imagen: 'https://tofuu.getjusto.com/orioneat-local/resized2/4xoxbkEcsy5fbAp35-300-x.webp'
    },
    {
      nombre: 'Pasta Alfredo',
      descripcion: 'Fettuccine con salsa cremosa.',
      precio: '80',
      imagen: 'https://images.aws.nestle.recipes/resized/cc72869fabfc2bdfa036fd1fe0e2bad8_creamy_alfredo_pasta_long_left_1200_628.jpg'
    }
  ];
  mensaje = '';

agregar(nombre: string) {
  this.mensaje = ` ${nombre} agregado al carrito`;
  setTimeout(() => this.mensaje = '', 2000);
}
}
