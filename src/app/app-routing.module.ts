import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './views/about/about.component';
import {IndexComponent} from './views/index/index.component';
import {GbookComponent} from './views/gbook/gbook.component';
import {InfoComponent} from './views/info/info.component';
import {ListComponent} from './views/list/list.component';
import {ShareComponent} from './views/share/share.component';

const routes: Routes = [
    {path: 'index', component: IndexComponent},
    {path: 'about', component: AboutComponent},
    {path: 'gbook', component: GbookComponent},
    {path: 'info', component: InfoComponent},
    {path: 'list', component: ListComponent},
    {path: 'share', component: ShareComponent},
    {path: '', component: IndexComponent}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
