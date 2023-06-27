


// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MenuService {
//   private menus = [
//     { id: 1, name: 'Menu 1', price: 10 },
//     { id: 2, name: 'Menu 2', price: 15 },
//     { id: 3, name: 'Menu 3', price: 12.5 }
//   ];

//   getMenus() {
//     return this.menus;
//   }

//   addMenu(menu: any) {
//     // Generate a unique ID for the new menu
//     const newMenuId = this.generateUniqueId();
//     const newMenu = { id: newMenuId, name: menu.name, price: menu.price };
//     this.menus.push(newMenu);
//   }

//   editMenu(menu: any) {
//     const index = this.menus.findIndex(m => m.id === menu.id);
//     if (index !== -1) {
//       this.menus[index].name = menu.name;
//       this.menus[index].price = menu.price;
//     }
//   }

//   deleteMenu(menuId: number) {
//     const index = this.menus.findIndex(m => m.id === menuId);
//     if (index !== -1) {
//       this.menus.splice(index, 1);
//     }
//   }

//   private generateUniqueId(): number {
//     // Generate a unique ID for the new menu
//     // You can use a library or custom logic to generate unique IDs
//     // For simplicity, we'll use a random number between 1 and 1000
//     return Math.floor(Math.random() * 1000) + 1;
//   }
// }



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menus = [
    { id: 1, name: 'Menu 1', price: 10, image: 'menu1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: 'Menu 2', price: 15, image: 'menu2.jpg', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    { id: 3, name: 'Menu 3', price: 12.5, image: 'menu3.jpg', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' }
  ];

  getMenus() {
    return this.menus;
  }

  addMenu(menu: any) {
    // Generate a unique ID for the new menu
    const newMenuId = this.generateUniqueId();
    const newMenu = { id: newMenuId, name: menu.name, price: menu.price, image: menu.image, description: menu.description };
    this.menus.push(newMenu);
  }

  editMenu(menu: any) {
    const index = this.menus.findIndex(m => m.id === menu.id);
    if (index !== -1) {
      this.menus[index].name = menu.name;
      this.menus[index].price = menu.price;
      this.menus[index].image = menu.image;
      this.menus[index].description = menu.description;
    }
  }

  deleteMenu(menuId: number) {
    const index = this.menus.findIndex(m => m.id === menuId);
    if (index !== -1) {
      this.menus.splice(index, 1);
    }
  }

  private generateUniqueId(): number {
    // Generate a unique ID for the new menu
    // You can use a library or custom logic to generate unique IDs
    // For simplicity, we'll use a random number between 1 and 1000
    return Math.floor(Math.random() * 1000) + 1;
  }
}
