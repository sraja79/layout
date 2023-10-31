import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BindingsComponent } from './bindings/bindings.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputOutputSessionComponent } from './input-output-session/input-output-session.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipeEgComponent } from './pipe-eg/pipe-eg.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { RoutingSampleComponent } from './routing-sample/routing-sample.component';
import { CourseComponent } from './course/course.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';
import { AdminModule } from './lazyloading/admin/admin.module';
import { UserModule } from './lazyloading/user/user.module';





const routes: Routes = [
{path:'' ,component:BindingsComponent},
 {path:'Interpolation',component:InterpolationComponent},
 {path:'Bindings',component:BindingsComponent},
 {path:'Directives',component:DirectivesComponent},
 {path:'Input Output and Session',component:InputOutputSessionComponent},
 {path:'Parent',component:ParentComponent},
 {path:'Child',component:ChildComponent},
 {path:'pipe',component:PipeEgComponent},
 //{path:'pipe',redirectTo:'Bindings',pathMatch:'full'},
 {path:'User Registration',component:SignUpComponent},
 {path:'course',component:CourseComponent},
 {path:'coursedetails/:id',component:CoursedetailsComponent},
 {path:'lazyloading',component:LazyloadingComponent,
    children:[
    {
        path:'admin',loadChildren:()=>import('./lazyloading/admin/admin.module')
                            .then(mod=>AdminModule)
      
    },
    {
      path:'user',loadChildren:()=>import('./lazyloading/user/user.module')
                          .then(mod=>UserModule)
    
  }

 ]},
 
 

 {path:'ReactiveComponent',component:ReactiveComponent},
 {path:'Shopping Card',component:ShoppingCardComponent},
  {path:'Routing',component: RoutingSampleComponent,
  
  children:[
  {path:'Bindings',component:BindingsComponent}

 ]
},
 //{path:'**',component:ShoppingCardComponent},


 
 
 
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
