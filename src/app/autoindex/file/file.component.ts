import { Component, Input } from "@angular/core";
import { Helper } from '../../utils/helper'

@Component({
  selector: 'file',
  templateUrl: './file.component.html'
})
export class FileComponent {
  @Input()
  path: string = ''
  @Input()
  name: string = ''
  @Input()
  mtime: string = ''
  @Input()
  size: number = 0
  @Input()
  icon: string = ''
  conf: typeof conf = conf
  get link() {
    return this.conf.address + (this.path !== '/' ? this.path : '')
  }
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
