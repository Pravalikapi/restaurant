// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-restaurant-list',
//   templateUrl: './restaurant-list.component.html',
//   styleUrls: ['./restaurant-list.component.css']
// })
// export class RestaurantListComponent {
//   restaurants = [
//     { name: 'Restaurant 1' },
//     { name: 'Restaurant 2' },
//     { name: 'Restaurant 3' }
//   ];

//   editRestaurant(restaurant: any) {
//     // Logic to edit restaurant
//   }

//   deleteRestaurant(restaurant: any) {
//     // Logic to delete restaurant
//   }
// }



// import { Component } from '@angular/core';
// import { RestaurantService } from '../restaurant.service';

// @Component({
//   selector: 'app-restaurant',
//   templateUrl: './restaurant.component.html',
//   styleUrls: ['./restaurant.component.css']
// })
// export class RestaurantComponent {
//   restaurants: any[] = [];

//   constructor(private restaurantService: RestaurantService) {
//     this.loadRestaurants();
//   }

//   loadRestaurants() {
//     this.restaurants = this.restaurantService.getRestaurants();
//   }

//   createRestaurant() {
//     // Logic to create a new restaurant
//     // For example, you can navigate to a form to add restaurant details
//     // You can use a service or router parameters to pass the new restaurant data
//     // Example: this.router.navigate(['/restaurant', 'create']);
//   }

//   editRestaurant(restaurant: any) {
//     // Logic to edit restaurant
//     // For example, you can navigate to a form to edit the restaurant
//     // You can pass the restaurant data to the form using a service or router parameters
//     // Example: this.router.navigate(['/restaurant', restaurant.id, 'edit']);
//   }

//   deleteRestaurant(restaurant: any) {
//     // Logic to delete restaurant
//     this.restaurantService.deleteRestaurant(restaurant.id);
//     this.loadRestaurants(); // Refresh the restaurant list after deletion
//   }
// }





// import { Component } from '@angular/core';
// import { RestaurantService } from '../restaurant.service';

// @Component({
//   selector: 'app-restaurant',
//   templateUrl: './restaurant.component.html',
//   styleUrls: ['./restaurant.component.css']
// })
// export class RestaurantComponent {
//   restaurants: any[] = [];
//   showAddRestaurantDialog = false;
//   newRestaurant: any = {};

//   constructor(private restaurantService: RestaurantService) {
//     this.loadRestaurants();
//   }

//   loadRestaurants() {
//     this.restaurants = this.restaurantService.getRestaurants();
//   }

//   openAddRestaurantDialog() {
//     this.showAddRestaurantDialog = true;
//     this.newRestaurant = {};
//   }

//   closeAddRestaurantDialog() {
//     this.showAddRestaurantDialog = false;
//   }

//   addRestaurant() {
//     if (this.newRestaurant.name && this.newRestaurant.address) {
//       this.restaurantService.addRestaurant(this.newRestaurant);
//       this.loadRestaurants(); // Refresh the restaurant list after adding the new restaurant
//       this.closeAddRestaurantDialog();
//     }
//   }

//   editRestaurant(restaurant: any) {
//     // Logic to edit restaurant
//     // For example, you can navigate to a form to edit the restaurant
//     // You can pass the restaurant data to the form using a service or router parameters
//     // Example: this.router.navigate(['/restaurant', restaurant.id, 'edit']);

//     // Assuming you have a form where the user edits the restaurant details
//     const updatedRestaurant = {
//       id: restaurant.id,
//       name: 'Updated Restaurant', // Replace with the actual form values
//       address: 'Updated Address'
//     };

//     this.restaurantService.editRestaurant(updatedRestaurant);
//     this.loadRestaurants(); // Refresh the restaurant list after editing the restaurant
//   }

//   deleteRestaurant(restaurant: any) {
//     // Logic to delete restaurant
//     this.restaurantService.deleteRestaurant(restaurant.id);
//     this.loadRestaurants(); // Refresh the restaurant list after deletion
//   }
// }




import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
  restaurants: any[] = [];
  showAddRestaurantDialog = false;
  newRestaurant: any = {};
  editingRestaurantId: number | null = null;
  editingRestaurant: any = {};

  constructor(private restaurantService: RestaurantService) {
    this.loadRestaurants();
  }

  loadRestaurants() {
    this.restaurants = this.restaurantService.getRestaurants();
  }

  openAddRestaurantDialog() {
    this.showAddRestaurantDialog = true;
    this.newRestaurant = {};
  }

  closeAddRestaurantDialog() {
    this.showAddRestaurantDialog = false;
  }

  addRestaurant() {
    if (this.newRestaurant.name && this.newRestaurant.address) {
      this.restaurantService.addRestaurant(this.newRestaurant);
      this.loadRestaurants();
      this.closeAddRestaurantDialog();
    }
  }

  editRestaurant(restaurant: any) {
    this.editingRestaurantId = restaurant.id;
    this.editingRestaurant = { ...restaurant };
  }

  saveRestaurant() {
    if (this.editingRestaurant.name && this.editingRestaurant.address) {
      this.restaurantService.editRestaurant(this.editingRestaurant);
      this.loadRestaurants();
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.editingRestaurantId = null;
    this.editingRestaurant = {};
  }

  deleteRestaurant(restaurant: any) {
    this.restaurantService.deleteRestaurant(restaurant.id);
    this.loadRestaurants();
  }
}
