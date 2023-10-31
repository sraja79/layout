import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concate',
  pure:true

})
export class ConcatePipe implements PipeTransform {

  transform(value: string, text:string): string {
    console.log('test--->'+text);
    return value+'  ' +text;
  }

}



@Pipe({
  name: 'filters'
  

})

export class FilterPipe implements PipeTransform {

  transform(value: any, field:any,fieldvalue:any): any {
      if(value && value.length>0)
      {
        alert("test");
        return value.filter((x:any)=>x[field]==fieldvalue);
        
      }
      else
      {
        return [];
      }
  }

}