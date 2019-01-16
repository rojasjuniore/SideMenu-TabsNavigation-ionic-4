import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

import { SidebarMenuComponent } from "./sidebar-menu/sidebar-menu.component";

@NgModule({
  declarations: [SidebarMenuComponent],
  imports: [BrowserModule, CommonModule, FormsModule, IonicModule],
  exports: [SidebarMenuComponent]
})
export class SharedModule {}
