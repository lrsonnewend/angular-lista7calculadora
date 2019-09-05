import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LogComponent } from './log/log.component';
import { ServicoService } from './servicos/servico.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LogComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ServicoService]
})
export class AppModule { }
