import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';


@NgModule({
    imports: [
        RouterModule.forChild([
                {
                    path: '',
                    component: CoursesComponent
                },
                {
                    path: 'courses',
                    component: CoursesComponent,
                },
        ]),
    ],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class CourseRoutingModule { }
