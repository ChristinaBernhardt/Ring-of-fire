import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatSlideToggleModule, MatIconModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pickCardAnimation = false;
  currentCard?: string = '';
  game?: Game;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (this.game) {
      if (!this.pickCardAnimation) {
        const card = this.game.stack.pop();
        if (card) {
          this.currentCard = card;
          console.log(this.currentCard);
          this.pickCardAnimation = true;
          console.log('New card: ' + this.currentCard);
          console.log('Game is ', this.game);

          setTimeout(() => {
            this.pickCardAnimation = false;
            // Double check if `game` and `currentCard` are still defined
            if (this.game && this.currentCard) {
              this.game.playedCards.push(this.currentCard);
            } else {
              console.error('Game object or current card is undefined');
            }
          }, 1000);
        } else {
          console.error('No card to take');
        }
      }
    } else {
      console.error('Game object is undefined');
    }
  }

  
}






