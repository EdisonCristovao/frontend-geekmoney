
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-grid-pessoa',
  templateUrl: './grid-pessoa.component.html',
  styleUrls: ['./grid-pessoa.component.css']
})
export class GridPessoaComponent implements OnInit {
  
  @Input()
  pessoas: any[];

  @Output()
  removePessoa = new EventEmitter;

  
  constructor() { }

  ngOnInit() {
  }

  remove(id: number) {
    this.removePessoa.emit(id)
  }
}
