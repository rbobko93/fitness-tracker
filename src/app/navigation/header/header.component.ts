import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }
}
