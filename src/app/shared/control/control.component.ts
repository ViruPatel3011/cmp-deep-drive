import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,

  // This host property will apply class to all the component place where we use <app-control/>
  host: {
    class: 'control', // Alternate approach of  @HostBinding()
    // Angular teams recommend this approach instead of @HostListener()
    '(click)': 'onClick()', // Alternate approach of  @HostListener()
  },
})
export class ControlComponent {
  // This feature just exists for backward compatibility reasons: You should use host:{} instead of this approach
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Click');
  // }
  label = input.required<string>();

  private el = inject(ElementRef);

  onClick() {
    console.log('Click');
    console.log(this.el);
  }
}
