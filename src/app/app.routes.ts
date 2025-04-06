import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HeaderComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    {path: '**', component: NotFoundComponent} // Redirect to home for any unknown routes
    //{ path: '**', redirectTo: '' } // Redirect to home for any unknown routes
];
