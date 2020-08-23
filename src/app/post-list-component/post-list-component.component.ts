import { Component, Input, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() posts: any[];

  constructor() { 

    
  }

  ngOnInit() {
  }

}
