import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SelectComponent } from './extends-elements/select/select.component';
import { InputComponent } from './extends-elements/input/input.component';
import { ButtonComponent } from './extends-elements/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SlideMenuComponent,
    HeaderComponent,
    FooterComponent,
    SelectComponent,
    InputComponent,
    ButtonComponent
  ],
  declarations: [
    SlideMenuComponent,
    HeaderComponent,
    FooterComponent,
    SelectComponent,
    InputComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
