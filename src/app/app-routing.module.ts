import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProjectsComponent} from './components/projects.component';
import {ErrorComponent} from './components/error.component';
import {AboutComponent} from './components/about.component';
import {ContactComponent} from './components/contact.component';
import {PlayComponent} from './projects/play.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/projects',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: PlayComponent // used in <router-outlet>
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: '**',
        component: ErrorComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes) // forRoot: +router service, forChild: no router service
    ],
    exports: [
        RouterModule // components in the companion module have access to RouterLink, RouterOutlet etc...
    ]
})
export class AppRoutingModule {
}
