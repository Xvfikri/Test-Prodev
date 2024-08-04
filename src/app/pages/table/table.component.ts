import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  imports: [CommonModule, HttpClientModule]
})
export class TableComponent implements OnInit {
  users: any[] = [];
  error: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data: any[]) => {
        this.users = data;
      },
      (error: any) => {
        this.error = 'Terjadi kesalahan saat memuat data pengguna.';
      }
    );
  }
}
