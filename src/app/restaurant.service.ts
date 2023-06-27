// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RestaurantService {
//   private restaurants = [
//     { id: 1, name: 'Restaurant 1' },
//     { id: 2, name: 'Restaurant 2' },
//     { id: 3, name: 'Restaurant 3' }
//   ];

//   getRestaurants() {
//     return this.restaurants;
//   }

//   addRestaurant(restaurant: any) {
//     // Generate a unique ID for the new restaurant
//     const newRestaurantId = this.generateUniqueId();
//     const newRestaurant = { id: newRestaurantId, name: restaurant.name };
//     this.restaurants.push(newRestaurant);
//   }

//   editRestaurant(restaurant: any) {
//     const index = this.restaurants.findIndex(r => r.id === restaurant.id);
//     if (index !== -1) {
//       this.restaurants[index].name = restaurant.name;
//     }
//   }

//   deleteRestaurant(restaurantId: number) {
//     const index = this.restaurants.findIndex(r => r.id === restaurantId);
//     if (index !== -1) {
//       this.restaurants.splice(index, 1);
//     }
//   }

//   private generateUniqueId(): number {
//     // Generate a unique ID for the new restaurant
//     // You can use a library or custom logic to generate unique IDs
//     // For simplicity, we'll use a random number between 1 and 1000
//     return Math.floor(Math.random() * 1000) + 1;
//   }
// }





import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurants = [
    { id: 1, name: 'Restaurant 1', address: 'Address 1' },
    { id: 2, name: 'Restaurant 2', address: 'Address 2' },
    { id: 3, name: 'Restaurant 3', address: 'Address 3' }
  ];

  getRestaurants() {
    return this.restaurants;
  }

  addRestaurant(restaurant: any) {
    const newRestaurant = {
      id: this.generateUniqueId(),
      name: restaurant.name,
      address: restaurant.address
    };
    this.restaurants.push(newRestaurant);
  }

  editRestaurant(restaurant: any) {
    const index = this.restaurants.findIndex(r => r.id === restaurant.id);
    if (index !== -1) {
      this.restaurants[index].name = restaurant.name;
      this.restaurants[index].address = restaurant.address;
    }
  }

  deleteRestaurant(restaurantId: number) {
    const index = this.restaurants.findIndex(r => r.id === restaurantId);
    if (index !== -1) {
      this.restaurants.splice(index, 1);
    }
  }

  private generateUniqueId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }
}
