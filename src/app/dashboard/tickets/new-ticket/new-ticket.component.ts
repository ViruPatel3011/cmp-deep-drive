import {
  Component,
  ElementRef,
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
export class NewTicketComponent {
  // ViewChild decorator is a decorator that can be used to select elements in the template of this component
  // and make them available here in the component class

  // We can't pass `css selector` in ViewChild
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // @ViewChildren(ButtonComponent) buttons

  // here form is works as signal property and shoule be executed using ()
  // viewChilde() is available only for Angular 17.3 or newer
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(titleElement: String, textElement: String) {
    const enteredTitle = titleElement;
    const enteredText = textElement;
    console.dir(enteredTitle);
    console.dir(enteredText);
    this.form().nativeElement.reset();
  }
}
