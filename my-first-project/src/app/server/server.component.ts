import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {

  serverId = 10;
  serverStatus = 'offline';

  prova() {
    return 'server';
  }

  getServerStatus() {
    return this.serverStatus;
  }

}
