import { Component, signal } from '@angular/core';

import{Card} from './card/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [Card,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
