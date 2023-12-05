import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../models';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.scss']
})
export class CoursesDialogComponent {
  
  idControl = new FormControl();
  nameControl = new FormControl();
  lengthControl = new FormControl();
  teacherNameControl = new FormControl();

courseForm = new FormGroup ({

    id: this.idControl,
    name: this.nameControl,
    length: this.lengthControl,
    teacherName: this.teacherNameControl,

  });

  constructor(private matDialogRef: MatDialogRef<CoursesDialogComponent> , @Inject(MAT_DIALOG_DATA) private course?: Course) { 

    
  if (this.course) {
    this.courseForm.patchValue(this.course);
  }


  }

  onSubmit(): void {
    if (this.courseForm.invalid) {
      return this.courseForm.markAllAsTouched();
    }else {
      this.matDialogRef.close(this.courseForm.value);
    }
  };


}
