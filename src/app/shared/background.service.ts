import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private postDetailHeaderInfo = new BehaviorSubject<any>({});
  postDetailHeaderInfo$ = this.postDetailHeaderInfo.asObservable();

  // Method to update the shared object
  updatePostDetailHeaderInfo(data: any) {
    this.postDetailHeaderInfo.next(data);
  }

  constructor() { }
}
