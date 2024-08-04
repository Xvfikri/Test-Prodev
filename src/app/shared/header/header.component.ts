import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Tambahkan properti untuk mengontrol visibilitas sidebar
  isSidebarHidden = false;

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
    // Anda mungkin juga ingin mengirim event atau melakukan aksi lain di sini
    console.log('Sidebar toggled:', this.isSidebarHidden);
  }
}
