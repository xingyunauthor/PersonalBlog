import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IndexComponent} from './views/index/index.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AboutComponent} from './views/about/about.component';
import {GbookComponent} from './views/gbook/gbook.component';
import {InfoComponent} from './views/info/info.component';
import {ListComponent} from './views/list/list.component';
import {ShareComponent} from './views/share/share.component';

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        HeaderComponent,
        FooterComponent,
        AboutComponent,
        GbookComponent,
        InfoComponent,
        ListComponent,
        ShareComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
