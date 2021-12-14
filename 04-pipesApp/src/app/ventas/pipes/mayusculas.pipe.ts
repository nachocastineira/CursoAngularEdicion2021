import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform( valor: string, enMayusculas: boolean = true): string {

        //Forma en varias lineas
        // if(enMayusculas)
        //     return valor.toUpperCase();
        // else
        //     return valor.toLocaleLowerCase();

        //Forma linea unica
        return (enMayusculas) ? valor.toUpperCase() : valor.toLocaleLowerCase();
    }

}