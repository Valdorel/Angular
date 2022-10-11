import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  /* Per usare la string interpolation bisogna prima definire
      le variabili nel file component.ts, poi è possibile usare la string interpolation
      all'interno del component.html
  * */

  serverId = 10;
  serverStatus = 'offline';


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  prova() {
    return 'server';
  }

  getServerStatus() {
    return this.serverStatus;
  }

}
