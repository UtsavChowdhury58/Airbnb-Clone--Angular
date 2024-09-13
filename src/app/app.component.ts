import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import { fontAwesomeIcons } from './shared/font-awesome-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ToastModule,ButtonModule,FontAwesomeModule],
  providers:[MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  faIconsLibrary: FaIconLibrary=Inject(FaIconLibrary);
  ngOnInit(): void {
    this.initFontAwesome();
  }
  private initFontAwesome() {
    
    this.faIconsLibrary.addIcons(...fontAwesomeIcons);
  }
  title = 'airbnb-clone-front';
}
