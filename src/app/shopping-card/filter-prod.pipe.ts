import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Sort'
})
export class FilterProdPipe implements PipeTransform {

  transform(value: any, fieldName:any,sorttype:any): any {
    if(value!=null && value.length>0)
    {
     
      value.sort((a:string,b:string)=>{
        if(sorttype=='asc')
        {
          if(a[fieldName]<b[fieldName])
            return -1 ;
            else
            return 1;
            
        }
      
        else 
        {
        if (a[fieldName] > b[fieldName]) 
          return 1 ;
        else
        return -1;
       }
       

      });

    }
  }

}

