import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

    public selectedIndex = 0;
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Outbox',
            url: '/home/Outbox',
            icon: 'paper-plane'
        },
        {
            title: 'Favorites',
            url: '/home/Favorites',
            icon: 'heart'
        },
        {
            title: 'Archived',
            url: '/home/Archived',
            icon: 'archive'
        },
        {
            title: 'Trash',
            url: '/folder/Trash',
            icon: 'trash'
        },
        {
            title: 'Spam',
            url: '/home/Spam',
            icon: 'warning'
        }
    ];
    public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }

    ngOnInit() {
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
    }

}
