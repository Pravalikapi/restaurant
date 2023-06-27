// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent {
//   restaurants = [
//     {
//       name: 'Restaurant 1',
//       menus: [
//         { name: 'Menu 1' },
//         { name: 'Menu 2' },
//         { name: 'Menu 3' }
//       ]
//     },
//     {
//       name: 'Restaurant 2',
//       menus: [
//         { name: 'Menu 4' },
//         { name: 'Menu 5' },
//         { name: 'Menu 6' }
//       ]
//     },
//     {
//       name: 'Restaurant 3',
//       menus: [
//         { name: 'Menu 7' },
//         { name: 'Menu 8' },
//         { name: 'Menu 9' }
//       ]
//     }
//   ];
//   selectedRestaurant: any;
//   orderPlaced = false;

//   selectRestaurant(restaurant: any) {
//     this.selectedRestaurant = restaurant;
//   }

//   placeOrder() {
//     // Place order logic
//     // Assuming an order placement service is available
//     // You can implement the logic as per your requirements
//     this.orderPlaced = true;


//   }
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  restaurants = [
    {
      name: 'Restaurant 1',
      menus: [
        { name: 'Menu 1' },
        { name: 'Menu 2' },
        { name: 'Menu 3' }
      ]
    },
    {
      name: 'Restaurant 2',
      menus: [
        { name: 'Menu 4' },
        { name: 'Menu 5' },
        { name: 'Menu 6' }
      ]
    },
    {
      name: 'Restaurant 3',
      menus: [
        { name: 'Menu 7' },
        { name: 'Menu 8' },
        { name: 'Menu 9' }
      ]
    }
  ];
  selectedRestaurant: any;
  selectedMenu: any;
  orderPlaced = false;

  selectRestaurant(restaurant: any) {
    this.selectedRestaurant = restaurant;
    this.selectedMenu = null; // Reset selected menu when a new restaurant is selected
  }

  selectMenu(menu: any) {
    this.selectedMenu = menu;
  }

  placeOrder() {
    // Place order logic
    // Assuming an order placement service is available
    // You can implement the logic as per your requirements
    console.log("Placing order for menu:", this.selectedMenu);
    this.orderPlaced = true;
  }
}
