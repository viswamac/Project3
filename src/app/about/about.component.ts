import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-about',
  imports: [HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  data: any;
  aboutContent: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAboutData().subscribe(response => {
      this.data = response;
      this.aboutContent = this.data;
      
    });
  }
}
