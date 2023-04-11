import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
M1: number = 0;
convert: any;
TaxaCambio: any;
indx1: any;
indx2: any;

  Conv(){

    if (this.indx1 == "Dolar") {
      
      if (this.indx2 == "Dolar"){
        alert("Não pode ser a mesma moeda!");
      } 
      
      if (this.indx2 == "Euro") 
      {
        
       this.convert = this.M1 * this.TaxaCambio

      }

      if (this.indx2 == "Real") 
      {
        
       this.convert = this.M1 * this.TaxaCambio

      }

    }


    //---------------------------------------

    if (this.indx1 == "Euro") {
      
      if (this.indx2 == "Euro"){
        alert("Não pode ser a mesma moeda!");
      } 
      
      if (this.indx2 == "Dolar") 
      {
        
       this.convert = this.M1 * this.TaxaCambio;

      }

      if (this.indx2 == "Real") 
      {
        
       this.convert = this.M1 * this.TaxaCambio;

      }

    }
    
    //----------------------------------------------
  
    
    if (this.indx1 == "Real") {
      
      if (this.indx2 == "Real"){
        alert("Não pode ser a mesma moeda!");
      } 
      
      if (this.indx2 == "Dolar") 
      {
        
       this.convert = this.M1 * this.TaxaCambio;

      }

      if (this.indx2 == "Euro") 
      {
        
       this.convert = this.M1 * this.TaxaCambio;

      }

    }

  }

}
