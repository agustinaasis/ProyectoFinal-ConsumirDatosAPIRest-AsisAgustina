import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { FullnamePipe } from './pipes/fullname.pipe';
import { FormErrorsPipe } from './pipes/form-errors.pipe';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [
    FullnamePipe,
    FormErrorsPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FullnamePipe,
    MatTableModule,
    FormErrorsPipe,
    MatCardModule,
    MatSelectModule,

  ]
})
export class SharedModule { }
