import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
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
export class ControlComponent implements AfterContentInit {
  // This feature just exists for backward compatibility reasons: You should use host:{} instead of this approach
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Click');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    // Anything change anywhere in any component in angular application, this will be logged in console
    afterRender(() => {
      console.log('After render');
    });

    // after the next change anywhere in the angular application
    afterNextRender(() => {
      console.log('After nextRender');
    });
  }

  // For ngOnInit() we can't get value in both case: ContentChild and ViewChild. In function we can get value.
  ngAfterContentInit() {}

  onClick() {
    console.log('Click');
    console.log(this.el);
    console.log(this.control());
  }
}
