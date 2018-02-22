import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-lancamento',
  templateUrl: './grid-lancamento.component.html',
  styleUrls: ['./grid-lancamento.component.css']
})
export class GridLancamentoComponent implements OnInit {
  
  @Input()
  lancamentos: any[];
  
  constructor() { }

  ngOnInit() {
  }
  
}
