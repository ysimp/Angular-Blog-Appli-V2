import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title: string;
  @Input() contenu: string;
  @Input() loveIts: number;
  @Input() created_at: Date;


  constructor() { }

  ngOnInit() {
  }

  love(){
    this.loveIts=this.loveIts +1;
    console.log(this.loveIts)
  }

  dontLove(){
    this.loveIts=this.loveIts - 1;
    console.log(this.loveIts)
  }

  getColor(){
    if(this.loveIts > 0){
      return 'green'
    }
    else if(this.loveIts < 0){
      return 'red'
    }
    else{
      return ''
    }
    
  }

}
