import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar-menu",
  templateUrl: "./sidebar-menu.component.html",
  styleUrls: ["./sidebar-menu.component.scss"]
})
export class SidebarMenuComponent implements OnInit {
  appMenuItems: any;
  constructor() {
    this.appMenuItems = [
      { title: "Home", icon: "home", router: "/pages/tabs/home" },
      {
        title: "Chat",
        icon: "chatboxes",
        router: "/pages/chat"
      },
      {
        title: "Notificaciones",
        icon: "list-box",
        router: "/pages/notifications"
      },
      {
        title: "Certificados",
        icon: "podium",
        router: "/pages/tabs/account"
      },
      {
        title: "Historial de pago",
        icon: "card",
        router: "/pages/tabs/home"
      }
    ];
  }

  ngOnInit() {}

  go(url) {}
}
