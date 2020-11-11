import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() getLists: Array<any>;
  @Input() public addTask: () => void;
  @Output() length1: EventEmitter<number> = new EventEmitter<number>();
  name: string
  hide = false
  changeI: number;
  // taskLists = this.getList;
  constructor() { }

  ngOnInit(): void {
  }


  check(b: boolean, i: number): void {
    console.log(window.location.hostname);
    
    if (b) {
      this.getLists[i].status = false;
      this.getLists[i].process = 'In PROGRESS'


    }
    else {
      this.getLists[i].status = true;
      this.getLists[i].process = 'Done'

      console.log('dsfdsf');
    }
  }
  del(index: number): void {
    this.getLists.splice(index, 1)
  }
  edit(index: number) {
    this.name = this.getLists[index].name
    this.hide = true
    this.changeI = index;
  }
  save(): void {
    this.getLists[this.changeI].name = this.name
    this.name = '';
    this.hide = false
  }
}
