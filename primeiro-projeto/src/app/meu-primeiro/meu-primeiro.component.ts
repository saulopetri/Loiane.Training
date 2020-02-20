import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  OnDestroy,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  Input,
  Output,
  SimpleChanges,
  EventEmitter
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-meu-primeiro',
  templateUrl: './meu-primeiro.component.html',
  styleUrls: ['./meu-primeiro.component.css']
})
export class MeuPrimeiroComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() valor: number = 0;

  @Output() valorChange = new EventEmitter();

  constructor() {

    this.log('construtor');

  }

  private log(texto: string) {
    console.log(texto + ' valor:' + this.valor);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.log('ngOnchanges: Antes do ngOnInit e quando valor property-binding é atualizado');
  }
  ngOnInit() {
    this.log('ngOnInit: Quando o Component é inicializado');
  }

  ngDoCheck(): void {
    this.log('ngDoCheck: A cada ciclo de verificação de mudanças');
  }

  ngAfterContentInit(): void {

    this.log('ngAfterContentInit: depois de inserir conteúdo externo na view');
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked: a cada verificação de conteúdo inserido');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit:');
  }
  ngAfterViewChecked(): void {

    this.log('ngAfterViewChecked: a cada verificação de conteúdo/conteúdo filho');
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy: Antes de ser destruído');
  }

  soma() {
    this.valor++;
    this.valorChange.emit(this.valor);
  }

}
