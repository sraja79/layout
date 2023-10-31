import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BindingsComponent } from './bindings/bindings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { InputOutputSessionComponent } from './input-output-session/input-output-session.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipeEgComponent } from './pipe-eg/pipe-eg.component';
import { ConcatePipe } from './concate.pipe';
import { FilterPipe } from './concate.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { IsTrueDirective } from './directives/is-true.directive';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { HttpClientModule } from '@angular/common/http';
import { BgcolorDirective } from './shopping-card/bgcolor.directive';
import { FilterProdPipe } from './shopping-card/filter-prod.pipe';
import { RoutingSampleComponent } from './routing-sample/routing-sample.component';
import { CourseComponent } from './course/course.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    InterpolationComponent,
    BindingsComponent,
    DirectivesComponent,
    InputOutputSessionComponent,
    ParentComponent,
    ChildComponent,
    PipeEgComponent,
    ConcatePipe,
    FilterPipe,
    HighlightDirective,
    IsTrueDirective,
    SignUpComponent,
    ReactiveComponent,
    ShoppingCardComponent,
    BgcolorDirective,
    FilterProdPipe,
    RoutingSampleComponent,
    CourseComponent,
    CoursedetailsComponent,
    LazyloadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
