import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatDividerModule, MatIconModule],
  templateUrl: './producto.html',
  styleUrls: ['./producto.css']
})
export class CardComponent {
  mensaje = '';

  agregar(nombre: string) {
    this.mensaje = `✅ ${nombre} agregado al carrito`;
    setTimeout(() => this.mensaje = '', 2000);
  }
}
