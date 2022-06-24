import {
  Component,
  HostListener,
  Input,
  ViewEncapsulation,
} from '@angular/core'
import { Router } from '@angular/router'
import { Helper } from 'src/app/utils/helper'
import { FileType } from '../autoindex.component'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ItemComponent {
  @Input() type!: FileType
  @Input() name!: string
  @Input() path!: string
  @Input() mtime?: string
  @Input() size?: number
  constructor(private _router: Router) {}
  get icon() {
    return this.type === 'file' ? 'file-text' : 'file-directory'
  }
  conf: typeof conf = conf
  get visibilityOptions() {
    return this.conf.visibilityOptions
  }
  get keys() {
    return Object.keys(this.visibilityOptions) as ['size', 'date']
  }
  showPropertyWrapper(...args: Parameters<typeof Helper['showProperty']>) {
    return Helper.showProperty(...args)
  }
  @HostListener('click')
  onHostClick() {
    if (this.type === 'file') {
      window.open(`${this.conf.address}${this.path}`, '_blank')
    } else {
      this._router.navigateByUrl(this.path)
    }
  }
}
