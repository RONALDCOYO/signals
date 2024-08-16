import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ejemplo2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-ejemplo2.component.html',
  styleUrl: './signal-ejemplo2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalEjemplo2Component {
  count = signal (0);

  constructor() {
    effect( () => {console.log (this.count())} )
    setInterval( () => this.count.set (this.count() + 1) , 1000);
  }
}
