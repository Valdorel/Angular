import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {

  /* Per usare la string interpolation bisogna prima definire
      le variabili nel file component.ts, poi è possibile usare la string interpolation
      all'interno del component.html
  * */

  serverId = 10;
  serverStatus = 'offline';

  prova() {
    return 'server';
  }

  getServerStatus() {
    return this.serverStatus;
  }

}
