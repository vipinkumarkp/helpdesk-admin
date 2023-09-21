import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { AssetComponent } from './assets/asset/asset.component';
import { CategoryComponent } from './Cat_and_SubCategory/category/category.component';
import { SubCategoryComponent } from './Cat_and_SubCategory/sub-category/sub-category.component';
import { TicketComponent } from './tickets/ticket/ticket.component';
import { UnAssignedComponent } from './tickets/un-assigned/un-assigned.component';
import { OpenTicketComponent } from './tickets/open-ticket/open-ticket.component';
import { RecentlyAddedComponent } from './tickets/recently-added/recently-added.component';
import { OverdueComponent } from './tickets/overdue/overdue.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { FaqComponent } from './faq/faq.component';
import { KnowledgebaseComponent } from './knowledgebase/knowledgebase.component';
import { RecentlyUpdatedComponent } from './recently-updated/recently-updated.component';
import { OverDueComponent } from './over-due/over-due.component';
import { OnHoldComponent } from './on-hold/on-hold.component';
import { DepartmentComponent } from './department/department.component';
import { BrandComponent } from './brand/brand.component';
import { TechniciansComponent } from './technicians/technicians.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    AssetComponent,
    CategoryComponent,
    SubCategoryComponent,
    TicketComponent,
    UnAssignedComponent,
    OpenTicketComponent,
    RecentlyAddedComponent,
    OverdueComponent,
    DashboardComponent,
    UsersComponent,
    FaqComponent,
    KnowledgebaseComponent,
    RecentlyUpdatedComponent,
    OverDueComponent,
    OnHoldComponent,
    DepartmentComponent,
    BrandComponent,
    TechniciansComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    NgbModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
