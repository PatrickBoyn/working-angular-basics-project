import { Component, OnInit } from '@angular/core';

@Component({
  // Turned this into an attribute
  // Without the brackets, it's a tag.
  // selector: '[app-servers]'
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';

  constructor() {
    // Won't work if disabled is hard coded.
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() { }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
