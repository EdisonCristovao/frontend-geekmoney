import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-grid-pessoa',
  templateUrl: './grid-pessoa.component.html',
  styleUrls: ['./grid-pessoa.component.css']
})
export class GridPessoaComponent implements OnInit {
  
  @Input()
  pessoas: any[];
  
  constructor() { }

  ngOnInit() {
  }

}
