import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs'

export type FileType = 'file' | 'directory'

export interface Info {
  name: string
  mtime: string
  type: FileType
}

export interface FileInfo extends Info {
  size: number
  type: 'file'
}

export interface DirectoryInfo extends Info {
  type: 'directory'
}

export type FilesInfo = Array<FileInfo | DirectoryInfo>

@Component({
  templateUrl: './autoindex.component.html'
})
export class AutoindexComponent implements OnInit {
  conf: typeof conf = conf
  files: FilesInfo | null = null
  failed: boolean = false
  loading: boolean = false
  get path() {
    return this.router.url
  }
  get pathArray() {
    return this.path
      .split('/')
      .filter((v) => v !== '')
      .map((v) => decodeURIComponent(v))
  }
  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchFileInfo()
    // 在路由结束时刷新文件信息
    this.router.events
      .pipe(filter((v) => v instanceof NavigationEnd))
      .subscribe(() => {
        this.fetchFileInfo()
      })
  }
  fetchFileInfo() {
    this.failed = false
    this.loading = true
    // const address = this.conf.address + this.path
    const address =
      (this.conf.useCurrentAddress
        ? location.origin + this.conf.suffix
        : this.conf.address) + this.path
    this.http
      .get<FilesInfo>(address, {
        observe: 'response'
      })
      .subscribe({
        next: (v) => {
          if (v.status !== 200) {
            this.failed = true
          } else {
            this.files = v.body
          }
          this.loading = false
        },
        error: (err) => {
          console.error(err)
          this.failed = true
          this.loading = false
        }
      })
  }
}
