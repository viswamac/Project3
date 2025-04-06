import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ApiService } from '../services/api.service';
import { response } from 'express';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-projects',
  imports: [HeaderComponent,MatCardModule, MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
projectData : any;
  constructor(private apiService : ApiService) {}

  ngOnInit(){
    this.projectData = this.apiService.getProjectData().subscribe(response => {
      this.projectData = response;
    })
  }
}
