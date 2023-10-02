import { Component } from '@angular/core';
import { DialogBComponent } from './dialog-b/dialog-b.component';
import  {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dialog';
}
