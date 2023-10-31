import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIsTrue]'//<div *appIsTrue="true"> Male </div>
})
export class IsTrueDirective {

  @Input('appIsTrue') appIsTrue1!:boolean;
  constructor( private tempref:TemplateRef<any>,private vcref:ViewContainerRef) { 

  }
  ngOnChanges()
  {
      if(this.appIsTrue1)
      {
        this.vcref.createEmbeddedView(this.tempref);
      }
      else{
          this.vcref.clear();
      }
  }

}
