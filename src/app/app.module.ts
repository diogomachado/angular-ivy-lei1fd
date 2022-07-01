import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableCustomComponent } from './components/table/table.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TableCustomComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
