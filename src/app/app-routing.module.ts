import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 100]
}
const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: HomeComponent,
      children: [
        { path: 'about', component: AboutComponent},
        { path: 'projects', component: ProjectsComponent},
        { path: 'resume', component: ResumeComponent},
        { path: 'contact', component: ContactComponent}
      ]},
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
