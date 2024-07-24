import { Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameComponent } from './game/game.component';
import { NameDialogComponent } from './name-dialog/name-dialog.component';


export const routes: Routes = [
    {path: '', component: StartScreenComponent},
    {path: 'game', component: GameComponent},
    {path: 'name-dialog', component: NameDialogComponent},
    ];
