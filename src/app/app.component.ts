import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogAppli2';
  
  postes =[
    {
      title: 'Mon premier post',  
      contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'+
                'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',  
      loveIts: 0,   
      created_at: new Date()
    }, 
    {
      title: 'Mon deuxième post',  
      contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'+
                'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      loveIts: 0,   
      created_at: new Date()
    }, 
    {
      title: 'encore un post',  
      contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'+
                'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      loveIts: 0,   
      created_at: new Date()
    }
  ]
}
