import { Course } from "./models";

@Injectable({
    providedIn: 'root'  
  })
  
  export class CoursesService {
  
    constructor() { 
  
 
    private courses: Course[] = [
        
      {
        id: 1,
        name: 'Juan',
        lastName: 'Perez',
        email: 'juan@mail.com',
      },
      {
        id: 2,
        name: 'Marta',
        lastName: 'Rodriguez',
        email: 'marta@mail.com',
      },
      {
        id: 3,
        name: 'Mercedes',
        lastName: 'Suarez',
        email: 'mercedes@mail.com',
      },
    ];
  
  
  
  private sendNotification$ = new Subject <string>();
  
  private users$ = new BehaviorSubject <User[]> ([]);
  
  
    loadUsers(): void {
      this.users$.next(this.users)
    }
  
  
    getUsers(): Subject<User[]>{
        return this.users$
      }
  
    }