import {
  AfterViewInit,
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})

// You must use this implements for interface to protect your application againt unwanted typos
export class ServerStatusComponent implements OnInit, AfterViewInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  // Type of interval should be the type of value returned by setInterval
  // private interval?: ReturnType<typeof setInterval>;

  private destroyRef = inject(DestroyRef);
  constructor() {
    // Angular now setup the subscription
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
    const interval = setInterval(() => {
      const random = Math.random();

      if (random < 0.5) {
        this.currentStatus.set('online');
      } else if (random < 0 / 9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    // console.log('AFTER VIEW INIT');
  }

  // ngOnDestroy() {
  //   console.log('NG-DESTROY');
  //   clearTimeout(this.interval);
  // }
}
