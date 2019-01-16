import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full"
  },
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "home",
        children: [
          {
            path: "",
            loadChildren: "./home/home.module#HomePageModule"
          }
        ]
      },
      {
        path: "transport",
        children: [
          {
            path: "",
            loadChildren: "./transport/transport.module#TransportPageModule"
          }
        ]
      },
      {
        path: "notifications",
        children: [
          {
            path: "",
            loadChildren:
              "./notifications/notifications.module#NotificationsPageModule"
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule {}
