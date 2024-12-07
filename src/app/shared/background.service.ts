import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private headerBackgroundUrl = new BehaviorSubject<string>('');
  headerBackgroundUrl$ = this.headerBackgroundUrl.asObservable();

  // Method to update the background image URL
  setBackground(url: string): void {
    this.headerBackgroundUrl.next(url);
  }

  constructor() { }
}
