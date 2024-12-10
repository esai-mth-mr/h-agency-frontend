import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private postDetailHeaderInfo = new BehaviorSubject<any>({});
  postDetailHeaderInfo$ = this.postDetailHeaderInfo.asObservable();


  private arrowDirection = new BehaviorSubject<string>('');
  arrowDirection$ = this.arrowDirection.asObservable();

  updateArrowDirection(direction: string) {
    this.arrowDirection.next(direction);
  } 
  // Method to update the shared object
  updatePostDetailHeaderInfo(data: any) {
    this.postDetailHeaderInfo.next(data);
  }

  constructor() { }
}
