import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';
import { Enrollment } from '../models';
import { state } from '@angular/animations';
import { Course } from '../../courses/models';
import { User } from '../../users/models';

export const enrollmentFeatureKey = 'enrollment';

export interface State {

  isLoading: boolean;
  isLoadingDialogOptions: boolean;
  courseOptions: Course[];
  studentOptions: User[];
  enrollments: Enrollment[];
  error: unknown;
}

export const initialState: State = {
  isLoading: false,
  isLoadingDialogOptions: false,
  courseOptions: [] ,
  studentOptions: [] ,
  enrollments: [],
  error: null
};

export const reducer = createReducer(
  initialState,
  on(EnrollmentActions.loadEnrollments, state => ({ ...state, isLoading: true })),

  on(EnrollmentActions.loadEnrollmentsSuccess, (state, { data }) => ({ ...state, isLoading: false, enrollments: data })),
  
  on(EnrollmentActions.loadEnrollmentsFailure, (state, { error }) => ({ ...state, isLoading: false, error })),

// TIPOS DE DATOS PARA SELECTOR EN DIÁLOGO DE INSCRIPCIONES //

  on(EnrollmentActions.loadEnrollmentDialogOptions, (state) => {
    return {
      ...state,
      isLoadingDialogOptions: true,
    }
  } ),


  on(EnrollmentActions.loadEnrollmentDialogOptionsSuccess, (state, action) => ({ ...state,
    courseOptions: action.courses,
    studentOptions: action.students,
    isLoadingDialogOptions: false
  
  })),

  on(EnrollmentActions.loadEnrollmentDialogOptionsFailure, (state, action) => ({ ...state,
    error: action.error,
    isLoadingDialogOptions: false
  
  }))

);


export const enrollmentFeature = createFeature({
  name: enrollmentFeatureKey,
  reducer,
});

