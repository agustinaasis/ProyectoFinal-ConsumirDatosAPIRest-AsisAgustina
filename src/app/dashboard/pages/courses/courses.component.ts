import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { Observable, of } from 'rxjs';
import { Course } from './models';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable<Course[]>

  constructor (
    private coursesService: CoursesService,
    private matDialog: MatDialog
    ){
    this.courses$ = this.coursesService.getCourses();
  }


  addCourse(): void {
    this.matDialog.open(CoursesDialogComponent).afterClosed().subscribe({
      next: (result) => {
        if (result) {
        this.courses$ = this.coursesService.createCourse ({
            id: result.id,
            name: result.name,
            length: result.length,
            teacherName: result.teacherName
          })
        }
      }
    });
  }

  onEditCourse(course: Course ): void {
    this.matDialog
    .open(CoursesDialogComponent, {data: course,})
    .afterClosed()
    .subscribe({
      next: (v) => {
        if (!!v) {
          this.courses$ = this.coursesService.updateCourse(course.id, v);
          }
        },
      })
  }

  onDeleteCourse (courseId : number) : void {
    if (confirm ( ' ¿Está seguro de eliminar este curso? ')){
      this.courses$ = this.coursesService.deleteCourse(courseId);
    }
  }
}
