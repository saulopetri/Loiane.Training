import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit, OnChanges {

  @Input() valor: string = '';
  @Input() maxlength: number = 0;
  @Output() valorChange = new EventEmitter();

  private valuelength: number = 0;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChange');
    this.valuelength = this.valor.length;
  }

  onChange(event): void {

    const novovalor: string = event.target.value;
    if (this.maxlength === 0) {
      this.valor = novovalor;
    } else {
      if (novovalor.length <= this.maxlength) {
        this.valor = novovalor;
      } else {
        event.preventDefault();
        event.stopPropagation();
        this.valor = novovalor.substr(0, this.maxlength);
        event.target.value = this.valor;
      }
    }

    this.valuelength = this.valor.length;
    this.valorChange.emit(this.valor);
  }
}
