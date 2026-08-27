import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { favoritosServices } from '../../../core/services/favoritos.service';
@Component({
  selector: 'app-favoritos',
  imports: [CommonModule, FormsModule],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {}
