import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { ImportExcelComponent } from './import-excel/import-excel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './pages/table/table.component';

@NgModule({
  declarations: [AppComponent, ImportExcelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // Vex
    VexModule,
    CustomLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
