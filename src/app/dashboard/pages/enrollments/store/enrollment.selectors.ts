import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEnrollment from './enrollment.reducer';
import { state } from '@angular/animations';


export const selectEnrollmentState = createFeatureSelector <fromEnrollment.State> (
  fromEnrollment.enrollmentFeatureKey
);



export const selectEnrollments = createSelector(
  selectEnrollmentState,
  (state) => state.enrollments);


  export const selectCourseOptions = createSelector (
    selectEnrollmentState,
    (state) => state.courseOptions
  );
  export const selectStudentsOptions = createSelector (
    selectEnrollmentState,
    (state) => state.studentOptions
  );
