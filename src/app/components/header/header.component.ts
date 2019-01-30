import {Component} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor() {

    }

    navShow = false;
    /**
     * 移动设备模式下，显示导航栏
     * @param e 当前事件
     */
    showNav(e) {
        this.navShow = !this.navShow;
    }

    link() {
        this.navShow = false;
    }
}
