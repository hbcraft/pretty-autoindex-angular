import { Component, Input } from "@angular/core";
import { Helper } from "src/app/utils/helper";

@Component({
  selector: 'directory',
  templateUrl: './directory.component.html'
})
export class DirectoryComponent {
  @Input()
  path: string = ''
  @Input()
  name: string = ''
  @Input()
  mtime: string = ''
  @Input()
  icon: string = ''
  conf: typeof conf = conf
  get visibilityOptions() {
    return this.conf.visibilityOptions
  }
  get keys() {
    return Object.keys(this.visibilityOptions) as ['size', 'date']
  }
  showPropertyWrapper(...args: Parameters<typeof Helper['showProperty']>) {
    return Helper.showProperty(...args);
  }
}
