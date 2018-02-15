import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'conversor'
})
export class ConversorPipe implements PipeTransform{
    
    transform(value:string, por:string){
        let value_one = parseInt(value);
        let value_two = parseInt(por);
        let total = value_one * value_two;
        let result = "Resultado de multiplicación: " + total;
        return result;
    }
}