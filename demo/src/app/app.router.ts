import {Routes} from '@angular/router';

import {Basic} from './components/examples/basic.component';
import {LoadOptions} from './components/examples/load-options.component';

export const appRoutes: Routes = [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
}, {
    path: 'home',
    component: Basic
}, {
    path: 'examples/getting-started',
    component: Basic
}, {
    path: 'examples/load-options',
    component: LoadOptions
}];
