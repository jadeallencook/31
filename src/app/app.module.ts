import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { GameComponent } from './pages/game/game.component';
import { CardComponent } from './components/card/card.component';
import { PlayerHandComponent } from './components/player-hand/player-hand.component';
import { DiscardPileComponent } from './components/discard-pile/discard-pile.component';
import { DrawPileComponent } from './components/draw-pile/draw-pile.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GameComponent,
    CardComponent,
    PlayerHandComponent,
    DiscardPileComponent,
    DrawPileComponent,
    ToolbarComponent,
    InstructionsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
