import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import 'hammerjs';


// Material 2 
import { MdCoreModule } from '@angular2-material/core'
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdRadioModule } from '@angular2-material/radio';
import { MdCheckboxModule } from '@angular2-material/checkbox'
import { MdTooltipModule } from '@angular2-material/tooltip';
import { MdSliderModule } from '@angular2-material/slider';

import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';

import { AppComponent } from './app.component';
import { CoderComponentComponent } from './coder-component/coder-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CoderComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCoreModule.forRoot(),
    MdButtonModule.forRoot(),
    MdCardModule.forRoot(),
    MdRadioModule.forRoot(),
    MdCheckboxModule.forRoot(),
    MdTooltipModule.forRoot(),
    MdSliderModule.forRoot(),
    NgbModule.forRoot(),
    MdIconModule.forRoot()
  ],
  providers: [
    MdIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 constructor(mdIconRegistry: MdIconRegistry) {
   mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
 }
}
