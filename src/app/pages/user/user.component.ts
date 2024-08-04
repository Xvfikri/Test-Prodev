import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service'; // Pastikan jalur import benar
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [CommonModule]
})
export class UserComponent implements OnInit {
  user: any; // Untuk menyimpan detail pengguna
  error: string = ''; // Untuk menyimpan pesan kesalahan

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Ambil ID dari parameter URL
    if (id) {
      this.userService.getUserById(+id).subscribe(
        (data: any) => {
          this.user = data; // Simpan detail pengguna
        },
        (error: any) => {
          this.error = 'Terjadi kesalahan saat memuat data pengguna.'; // Tangani kesalahan
        }
      );
    }
  }
}
