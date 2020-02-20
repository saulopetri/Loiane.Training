import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor: number = 5;
  ativo: boolean = true;

  soma() {
    this.valor++;
  }
  setCiclo(ativo: boolean) {
    this.ativo = ativo;
  }
  onMudouValor(novoValor){
    this.valor = novoValor;
  }
}
