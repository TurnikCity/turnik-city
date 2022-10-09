import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppCommonModule, PlaygroundModule } from './index';

@NgModule({
  declarations: [],
  imports: [
    /// angular
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    /// app
    AppCommonModule,
    PlaygroundModule,
  ],
  exports: [],
  providers: [],
})
export class DomainModule {}
