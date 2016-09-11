import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {TraceComponent} from './trace/trace.component';
import {AboutComponent} from './about/about.component';
import {DependenciesComponent} from './dependencies/dependencies.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'trace/:traceId', component: TraceComponent },
    { path: 'dependencies', component: DependenciesComponent },
    { path: 'about', component: AboutComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
