// Food Delivery Application

// Your mission, should you choose to accept it, is to create a price calculator for a food delivery app. The restaurant sells pizza, pasta and salads. Pizzas come in small, medium and large sizes for $10, $15 and $20 respectively. Pasta costs $20 and salads are $15.

// * Users can select to tip a certain dollar amount or a percentage of total before tax.

// * Tax on food is 10%. Tax is charged on the total before gratuity and delivery fee.

// * Delivery fee depends on the Borough of the delivery address - the fee for Manhattan is $5, Brooklyn and The Bronx $6, Queens $4, Staten Island $10.

// * Deliveries on Weekdays are $2 off regular delivery price.
// * Deliveries on Thursday at $3 off regular delivery price.

// * Users can apply promo codes. There are three promo codes:
//   - 30-OFF: 30% off the order total
//   - HALF-OFF-PIZZA: 50% off on all pizzas
//   - FREEDELIVERY: Free delivery

// * Deliveries for Seniors are $2 off regular price (Seniors are people older than 65).
// * Deliveries for Students are $1 off regular price (Students have a student id).

// * Deliveries for large orders (8 items) are free.
// * Deliveries for large orders (more than $100) are free.

// Scenarios:

// 1. Calculates the correct price for 4 small pizzas in Brooklyn for a 35 year old on Wednesday with a 10% tip. $52.

// 2. Calculates the correct price for 2 small and 2 medium pizzas and 1 large pizza in Manhattan for a 35 year old on Wednesday with a 10% tip. $87

// 3. Calculates the correct price for 4 medium pizzas in Brooklyn for a 35 year old on Wednesday with a $15 tip. $85

// 4. Calculates the correct price for 2 medium and 2 large pizzas in Brooklyn for a 54 year old on Wednesday with the FREEDELIVERY promo code with no tip. $77

// 5. Calculate the price for 3 medium pizzas and a pasta for a 35 year old on Wednesday in Brooklyn with a $20 tip with the HALF-OFF-PIZZA promo code. $70.75

// 6. Calculate the price for 3 medium pizzas for a 75 year old student in Brooklyn on Thursday with a $20 tip. $69.5

// 7. Calculates the correct price for 3 med pizzas, 2 pastas for a 80 year old in Staten Island with 20% tip on Thursday and using the promo code 30-OFF. $82.35

// 8. Calculates the correct price for 6 large pizzas on Thursday for a 75 year old in Brooklyn with 15% tip. $150