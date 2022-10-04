import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "Nessun server è stato creato";
  serverName = 'TestServer';


  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Il server è stato creato! Si chiama "+this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

}
