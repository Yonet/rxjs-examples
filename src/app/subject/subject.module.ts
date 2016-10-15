import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectComponent } from './subject.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ SubjectComponent ],
  declarations: [ SubjectComponent ]
})
export class SubjectModule { }
