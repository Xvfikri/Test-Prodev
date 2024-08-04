import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { TableComponent } from './pages/table/table.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';

export const appConfig = {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent,
        children: [
          { path: '', redirectTo: 'user', pathMatch: 'full' },
          { path: 'user', component: UserComponent },
          { path: 'table', component: TableComponent },
        ]
      },
    ]),
    importProvidersFrom(
      CommonModule,
      MatIconModule,
      HeaderComponent,
      SidebarComponent,
      FooterComponent
    ),
    provideHttpClient()
  ]
}
