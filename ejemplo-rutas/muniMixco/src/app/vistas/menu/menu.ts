import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, MatIconModule ],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class Menu {

}
