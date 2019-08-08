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
  constructor() {}

  ngOnInit() {}
}
