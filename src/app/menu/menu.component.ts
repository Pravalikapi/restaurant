



// import { FormsModule } from '@angular/forms'; 

// import { Component } from '@angular/core';
// import { MenuService } from '../menu.service';

// @Component({
//   selector: 'app-menu-list',
//   templateUrl: './menu.component.html',
//   styleUrls: ['./menu.component.css']
// })
// export class MenuComponent {
//   menus: { id: number; name: string; price: number; }[] = [];
//   showAddMenuDialog = false;
//   newMenu: any = {};
//   editingMenuId: number | null = null;
//   editingMenu: any = {};

//   constructor(private menuService: MenuService) {
//     this.loadMenus();
//   }

//   loadMenus() {
//     this.menus = this.menuService.getMenus();
//   }

//   openAddMenuDialog() {
//     this.showAddMenuDialog = true;
//     this.newMenu = {};
//   }

//   closeAddMenuDialog() {
//     this.showAddMenuDialog = false;
//   }

//   addMenu() {
//     if (this.newMenu.name && this.newMenu.price) {
//       this.menuService.addMenu(this.newMenu);
//       this.loadMenus();
//       this.closeAddMenuDialog();
//     }
//   }

//   editMenu(menu: any) {
//     this.editingMenuId = menu.id;
//     this.editingMenu = { ...menu };
//   }

//   saveMenu() {
//     if (this.editingMenu.name && this.editingMenu.price) {
//       this.menuService.editMenu(this.editingMenu);
//       this.loadMenus();
//       this.cancelEdit();
//     }
//   }

//   cancelEdit() {
//     this.editingMenuId = null;
//     this.editingMenu = {};
//   }

//   deleteMenu(menu: any) {
//     this.menuService.deleteMenu(menu.id);
//     this.loadMenus();
//   }
// }

import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus: { id: number; name: string; price: number; image: string; description: string; }[] = [];
  showAddMenuDialog = false;
  newMenu: any = {};
  editingMenuId: number | null = null;
  editingMenu: any = {};

  constructor(private menuService: MenuService) {
    this.loadMenus();
  }

  loadMenus() {
    this.menus = this.menuService.getMenus();
  }

  openAddMenuDialog() {
    this.showAddMenuDialog = true;
    this.newMenu = {};
  }

  closeAddMenuDialog() {
    this.showAddMenuDialog = false;
  }

  addMenu() {
    if (this.newMenu.name && this.newMenu.price && this.newMenu.image && this.newMenu.description) {
      this.menuService.addMenu(this.newMenu);
      this.loadMenus();
      this.closeAddMenuDialog();
    }
  }

  editMenu(menu: any) {
    this.editingMenuId = menu.id;
    this.editingMenu = { ...menu };
  }

  saveMenu() {
    if (this.editingMenu.name && this.editingMenu.price && this.editingMenu.image && this.editingMenu.description) {
      this.menuService.editMenu(this.editingMenu);
      this.loadMenus();
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.editingMenuId = null;
    this.editingMenu = {};
  }

  deleteMenu(menu: any) {
    this.menuService.deleteMenu(menu.id);
    this.loadMenus();
  }
}
