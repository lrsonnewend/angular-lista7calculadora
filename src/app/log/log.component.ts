import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servicos/servico.service';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent
  implements OnInit {
  constructor(
    private servico: ServicoService) { }
  ngOnInit() {
    this.servico.reset();
  }
}