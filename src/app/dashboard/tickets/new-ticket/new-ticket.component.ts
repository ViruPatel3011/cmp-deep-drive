import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  ViewChild,
  viewChild,
  ViewChildren,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // ViewChild decorator is a decorator that can be used to select elements in the template of this component
  // and make them available here in the component class

  // We can't pass `css selector` in ViewChild
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>; // In this case can't hold form element in ngOnInit
  // @ViewChildren(ButtonComponent) buttons

  // here form is works as signal property and shoule be executed using ()
  // viewChilde() is available only for Angular 17.3 or newer
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); // In this case we can hold form element in ngOnInit
  // @Output() add=new EventEmitter<{ title: string; text: string }>()
  add = output<{ title: string; text: string }>();

  ngOnInit() {
    console.log('AFTER Ng INIT ');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT ');
    console.log(this.form().nativeElement);
  }

  onSubmit(titleElement: string, textElement: string) {
    console.dir(titleElement);
    console.dir(textElement);
    this.add.emit({ title: titleElement, text: textElement });
    this.form().nativeElement.reset();
  }
}
