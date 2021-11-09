import { Component, Input } from "@angular/core";

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html'
})
export class LoadingComponent {
  @Input()
  loading: boolean = false;
  @Input()
  failed: boolean = false;
}
