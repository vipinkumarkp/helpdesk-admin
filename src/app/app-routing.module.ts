import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './Cat_and_SubCategory/category/category.component';
import { SubCategoryComponent } from './Cat_and_SubCategory/sub-category/sub-category.component';
import { AssetComponent } from './assets/asset/asset.component';
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
import { OnHoldComponent } from './on-hold/on-hold.component';
import { DepartmentComponent } from './department/department.component';
import { BrandComponent } from './brand/brand.component';
import { TechniciansComponent } from './technicians/technicians.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent
  },
  {
  path:'category',component:CategoryComponent
  },
  {
  path:'subcategory',component:SubCategoryComponent
  },
  {
  path:'asset',component:AssetComponent
  },
  {
  path:'ticket',component:TicketComponent
  },
  {
  path:'Unassigned',component:UnAssignedComponent
  },
  {
  path:'open',component:OpenTicketComponent
  },
  {
  path:'recent',component:RecentlyAddedComponent
  },
  {
  path:'overdue',component:OverdueComponent
  },
  {
    path:'users',component:UsersComponent
  },
  {
    path:'faq',component:FaqComponent
  },
  {
    path:'knowledgebase',component:KnowledgebaseComponent
  },
  {
    path:'ticket',component:TicketComponent
  },
  {
    path:'un-assigned',component:UnAssignedComponent
  },
  {
    path:'open_ticket',component:OpenTicketComponent
  },
  {
    path:'recently_added',component:RecentlyAddedComponent
  },
  {
    path:'over_due',component:OverdueComponent
  },
  {
    path:'on_hold',component:OnHoldComponent
  },
  {
    path:'department',component:DepartmentComponent
  },
  {
    path:'brand', component:BrandComponent
  },
  {
    path:'tech',component:TechniciansComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
