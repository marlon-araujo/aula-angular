/**
 * Serviço responsável por executar operações matemáticas
 * 
 * @author Marlon de Araújo<marlon_mat@hotmail.com>
 * @since 2022-07-01
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /** definindo constants para operações de cálculo */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Método que cálcula operação matematica dado dois números
   * Suporta as 4 principais operações
   * 
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação a ser executada 
   * @returns  number Resultado da operação
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
          return num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
          return num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
          return num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
          return num1 * num2;
        break;
    
      default:
          return 0;
        break;
    }
  }
}
