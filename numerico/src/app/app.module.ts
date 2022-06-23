import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableRotationComponent } from './table-rotation/table-rotation.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ButtonSubmitComponent } from './button-submit/button-submit.component';
import { LoaderSpinnerComponent } from './loader-spinner/loader-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
          declarations: [
                    AppComponent,
                    TableRotationComponent,
                    FormGroupComponent,
                    ButtonSubmitComponent,
                    LoaderSpinnerComponent,
          ],
          imports: [
                    BrowserModule,
                    BrowserAnimationsModule,
                    MatSliderModule,
                    MatTableModule,
                    MatInputModule,
                    MatButtonModule,
                    MatProgressSpinnerModule,
          ],
          providers: [],
          bootstrap: [AppComponent]
})
export class AppModule { }
