const products = {
    pizza: { small: 10, medium: 15, large: 20 },
    pasta: 20,
    salad: 15
};

const tip = 0;
let taxOnFood = 0.10; //10%

const deliveryfee = {
    Manhattan: 5,
    Brooklyn: 6,
    Bronx: 6,
    Queens: 4,
    Staten_Island: 10
};

// Offers
const deliveryDayDiscount = {
    weekdays: 2,
    thursday: 3
};

const couponCode = {
    "30-OFF": 0.3,
    "HALF-OFF-PIZZA": 0.5,
    "FREEDELIVERY": 0
};

const isSeniorDiscount = 2;
const isStudentDiscount = 1;

const order = (product, quantity = 1) => {
    let price = 0;

    if (product === "pizza") {
        if (quantity.size === "large") {
            price += products.pizza.large * quantity.amount;
        } else if (quantity.size === "medium") {
            price += products.pizza.medium * quantity.amount;
        } else {
            price += products.pizza.small * quantity.amount;
        }
    } else if (product === "pasta") {
        price += products.pasta * quantity.amount;
    } else if (product === "salad") {
        price += products.salad * quantity.amount;
    }

    return price;
};

const afterTax = (price) => {
    return price + price * taxOnFood;
};

const afterDelivery = (taxablePrice, place, day) => {
    let deliveryCharge = deliveryfee[place];

    if (day === "thursday") {
        deliveryCharge -= deliveryDayDiscount.thursday;
    } else if (day !== "saturday" && day !== "sunday") {
        deliveryCharge -= deliveryDayDiscount.weekdays;
    }

    return taxablePrice + deliveryCharge;
};

const applyCoupon = (price, coupon) => {
    if (coupon === "FREEDELIVERY") {
        return price;
    } else if (couponCode[coupon]) {
        return price - price * couponCode[coupon];
    }
    return price;
};

const finalPrice = (product, quantity, tip = 0, place, day, coupon, student = false, senior = false) => {
    let price = order(product, quantity);

    const taxablePrice = afterTax(price);

    const afterDeliveryCharges = afterDelivery(taxablePrice, place, day);

    let afterCouponPrice = applyCoupon(afterDeliveryCharges, coupon);

    if (student) {
        afterCouponPrice -= isStudentDiscount;
    } 
    if (senior) {
        afterCouponPrice -= isSeniorDiscount;
    }

    // Adding tip (either fixed amount or percentage)
    let finalPrice = afterCouponPrice + tip;

    return finalPrice.toFixed(2);
};

// Test case: Calculates the correct price for 4 small pizzas in Brooklyn
// for a 35 year old on Wednesday with a 10% tip. Expected: $52

console.log("$",finalPrice("pizza", { size: "small", amount: 4 }, 5.2, "Brooklyn", "Wednesday", "", false, false));
