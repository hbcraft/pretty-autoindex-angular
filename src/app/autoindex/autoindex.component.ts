import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

export interface Info {
  name: string;
  mtime: string;
  type: 'file' | 'directory';
}

export interface FileInfo extends Info {
  size: number;
  type: 'file';
}

export interface DirectoryInfo extends Info {
  type: 'directory';
}

export type FilesInfo = Array<FileInfo|DirectoryInfo>;

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
    return this.path.split('/').filter(v=>v!=='')
  }
  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchFileInfo()
  }
  fetchFileInfo() {
    this.failed = false;
    this.loading = true;
    const address = this.conf.address + this.path;
    this.http.get<FilesInfo>(address, {
      observe: 'response'
    }).subscribe((v)=>{
      if (v.status !== 200) {
        this.failed = true;
      } else {
        this.files = v.body
      }
      this.loading = false;
    })
  }
}
