import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  serverId = 10;
  serverStatus = 'offline';

  getColor() {
    return this.serverStatus === 'online' ? 'limegreen' : 'salmon';
  }
}
