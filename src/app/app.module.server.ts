import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { FormsModule } from '@angular/forms';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
