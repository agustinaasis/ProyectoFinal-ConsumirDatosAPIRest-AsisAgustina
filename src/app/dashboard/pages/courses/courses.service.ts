import { Injectable } from '@angular/core'
import { Course } from './models';
import { Observable, of, Subject, concatMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';

@Injectable ({ providedIn: 'root'})

export class CoursesService {

    constructor (private httpClient: HttpClient) { 

    this.sendNotification$.subscribe({
    next: (message) => alert(message)
    })
}

getCourses() : Observable <Course[]> {
    return this.httpClient.get<Course[]>(`${environment.baseUrl}/courses`);
}

createCourse ( payload: Course ) : Observable <Course[]> {
    return this.httpClient
    .post<Course>(`${environment.baseUrl}/courses`, payload)
    .pipe(concatMap(() => this.getCourses() ));
}

updateCourse ( courseId: number, payload: Course ) : Observable <Course[]> {
    return this.httpClient
    .put<Course>(`${environment.baseUrl}/courses/${courseId}`, payload)
    .pipe(concatMap(() => this.getCourses()));
}

deleteCourse ( id: number ) : Observable <Course[]> {
    return this.httpClient.delete<Object>(`${environment.baseUrl}/courses/${id}`)
    .pipe(concatMap(() => this.getCourses()));
}

// courses: Course[] = [
// ];

// getCourses$(): Observable <Course[]> {

//     return of (this.courses);
// }
// createCourse$( payload: Course): Observable <Course [] > {
//     this.courses.push(payload);
//     console.log(this.courses);
//     return of ([ ...this.courses ]);
// }
// editCourses$ (id: number, payload: Course) : Observable < Course []>{
//     this.courses.push(payload);
//     return of (this.courses.map((c) => c.id === id ? { ...c, ...payload } : c))
// }


private sendNotification$ = new Subject <string>();

}