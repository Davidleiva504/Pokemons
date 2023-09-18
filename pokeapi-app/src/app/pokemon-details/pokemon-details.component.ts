import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {
  pokemonId!: number; // Usando el operador '!' para indicar que será definitivamente asignada
  pokemon: any;

  constructor(private pokemonService: PokemonService) { }

  getPokemonDetails() {
    this.pokemonService.getPokemon(this.pokemonId).subscribe((data: any) => {
      this.pokemon = data;
    });
  }
}
