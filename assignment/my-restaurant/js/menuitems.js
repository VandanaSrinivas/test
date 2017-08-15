(function () {
'use strict;'

angular.module('RestaurantApp')
.service('MenuitemsService', MenuitemsService)
.controller('itemsController', itemsController);

function itemsController(MenuitemsService) {
  var itemsctrl = this;

  itemsctrl.getItemsForCategory()
}



function MenuitemsService() {
  var service=this;

  service.getCategories= function () {
    // console.log(breakfast);
    // console.log(categories);
    // console.log("inside getCategories");
    return categories;
  }

service.getItemsForCategory = function (name) {
  console.log(name[0]);

// if (name == 'breakfast') {
//   return breakfast;
// }


  switch(name[0]){
    case 'breakfast':
          return breakfast;
          break;
    case 'snacks':
          return snacks;
          break;
    case 'sides':
          return sides;
          break;
    case 'biryani':
          return biryani;
          break;
    case 'combo':
          return combo;
          break;
    case 'dessert':
          return dessert;

  }
}
  }


var categories = [{name:"breakfast",
"id": "cat1"},
  {name:"snacks",
  "id": "cat2"},
  {name:"sides",
  "id": "cat3"},
  {name: "biryani",
  "id": "cat4"},
  {name: "combo",
  "id": "cat5"},
  {name: "dessert",
  "id": "cat6"}];



  var biryani = [{"id":401,
  "short_name":"D1",
  "name":"Vegetable Dum Biryani",
  "description":"Aromatic extra long Basmati rice coupled with flavors of spices delicately combined with rice and vegetables,and slow cooked in a closed vessel ",
  "price":"$7.99"
  },
  {"id":402,
  "short_name":"D2",
  "name":"Paneer Dum Biryani",
  "description":"Aromatic extra long Basmati rice coupled with flavors of spices delicately combined with rice and paneer, and slow cooked in a closed vessel ",
  "price":"$8.99"
  },
  {"id":403,
  "short_name":"D3",
  "name":"Egg Biryani",
  "description":"Aromatic extra long Basmati rice coupled with flavors of spices delicately combined with rice and eggs,and slow cooked in a closed vessel ",
  "price":"$8.99"
  },
  {"id":404,
  "short_name":"D4",
  "name":"Chicken Dum Biryani",
  "description":"Aromatic extra long Basmati rice coupled with flavors of spices delicately combined with rice and chicken, and slow cooked in a closed vessel ",
  "price":"$9.99"
  },
  {"id":405,
  "short_name":"D5",
  "name":"Boneless Chicken Dum Biryani",
  "description":"Aromatic extra long Basmati rice coupled with flavors of spices delicately combined with rice and boneless chicken, and slow cooked in a closed vessel ",
  "price":"$9.99"
  },
  {"id":406,
  "short_name":"D6",
  "name":"Chettinad Chicken Biryani",
  "description":"Tasty flavorful Basmati rice with perfectly cooked chicken pieces and house special chettinad masala ",
  "price":"$9.99"
  },
  {"id":407,
  "short_name":"D7",
  "name":"Goat Dum Biryani",
  "description":"Aromatic extra long Basmati rice coupled with flavors of spices delicately combined with rice and goat meat, and slow cooked in a closed vessel  ",
  "price":"$11.99"
  },
  {"id":408,
  "short_name":"D8",
  "name":"Kheema Biryani",
  "description":"Flavorful Basmati rice perfectly cooked with minced goat meat and special masala ",
  "price":"$11.99"
  },
  {"id":409,
  "short_name":"D9",
  "name":"Shrimp Biryani",
  "description":"Tasty flavorful Basmati rice perfectly cooked with shrimp and special masala  ",
  "price":"$11.99"
  }];

  var dessert = [
    {"id":601,
    "short_name":"F1",
    "name":"Rasmalai",
    "description":"Flat round discs of Indian cottage cheese poached in milk & garnished with pistachios, served cold ",
    "price":"$4.50"
    },
    {"id":602,
    "short_name":"F2",
    "name":"Gajar Ka Halwa",
    "description":"Grated carrots cooked in milk as it is then reduced to halwa sprinkled with nuts",
    "price":"$4.50"
    },
    {"id":603,
    "short_name":"F3",
    "name":"Kheer",
    "description":"Fragrant rice with milk and dry nuts",
    "price":"$4.00"
    },
    {"id":604,
    "short_name":"F4",
    "name":"Gulab Jamun",
    "description":"Golden fried dumpling of milk pastry soaked in sugar syrup & served hot	",
    "price":"$4.50"
    },
    {"id":605,
    "short_name":"F5",
    "name":"Mango Kulfi",
    "description":"Traditional Indian ice cream	",
    "price":"$3.50"
    }
  ];

  var breakfast = [
    {"id":101,
    "short_name":"A1",
    "name":"Idli",
    "description":"Steamed rice and lentil patties.",
    "price":"$4.99"
    },
    {"id":102,
    "short_name":"A2",
    "name":"Sambar Idli",
    "description":"Steamed rice and lentil patties soaked in sambar",
    "price":"$5.50"
    },
    {"id":103,
    "short_name":"A3",
    "name":"Medhu Vada",
    "description":"Fried lentil donuts",
    "price":"$4.99"
    },
    {"id":104,
    "short_name":"A4",
    "name":"Sambar Vada",
    "description":"Fried lentil donuts dipped in sambar",
    "price":"$5.50"
    },
    {"id":105,
    "short_name":"A5",
    "name":"Aloo Bonda",
    "description":"Lentil dumpling with onion and potato.",
    "price":"$5.50"
    },
    {"id":106,
    "short_name":"A6",
    "name":"Masala Dosa",
    "description":"Crepe filled with potatoes, onions",
    "price":"$7.50"
    },
    {"id":107,
    "short_name":"A7",
    "name":"Paper Dosa",
    "description":"Thin rice crepe rolled and crispy",
    "price":"$7.50"
    },
    {"id":108,
    "short_name":"A8",
    "name":"Paper Masala Dosa",
    "description":"Thin rice crepe filled with potatoes and onions",
    "price":"$8.00"
    },
    {"id":109,
    "short_name":"A9",
    "name":"Mysore Masala Dosa",
    "description":"Thin rice crepe with layer of hot chutney filled with potato and onion",
    "price":"$8.00"
    },
    {"id":110,
    "short_name":"A10",
    "name":"Rava Dosa",
    "description":"Wheat and lentil crepe with no onion, no masala",
    "price":"$7.50"
    },
    {"id":111,
    "short_name":"A11",
    "name":"Onion Rava Dosa",
    "description":"Wheat and lentil crepe with onion.",
    "price":"$8.00"
    },
    {"id":112,
    "short_name":"A12",
    "name":"Onion Rava Masala Dosa",
    "description":"Wheat and lentil crepe with onion grilled with potatoes",
    "price":"$8.50"
    },
    {"id":113,
    "short_name":"A13",
    "name":"Cheese Dosa",
    "description":"Pizza dosai thin rice crepe filled with blended cheese, onions, tomatoes and chilies",
    "price":"$8.50"
    },
    {"id":114,
    "short_name":"A14",
    "name":"Plain Uthappam",
    "description":"Indian style pancake",
    "price":"$7.50"
    },
    {"id":115,
    "short_name":"A15",
    "name":"Onion and Peas Uthappam",
    "description":"Indian style pancake onion and peas toppings",
    "price":"$8.00"
    },
    {"id":116,
    "short_name":"A16",
    "name":"Vegetable Uthappam",
    "description":"Indian style pancake tomato, peas, carrots and onion toppings",
    "price":"$8.00"
    },
    {"id":117,
    "short_name":"A17",
    "name":"Pesarattu Upma",
    "description":"Thin crepe filled with upma",
    "price":"$9.99"
    },
    {"id":118,
    "short_name":"A18",
    "name":"Channa Batura",
    "description":"Large puffy wheat bread served with chick peas",
    "price":"$10.99"
    },
    {"id":119,
    "short_name":"A19",
    "name":"Special Upma",
    "description":"Cream of wheat with fresh vegetables garnished with nuts.",
    "price":"$7.99"
    }
  ];
  var snacks = [
    {"id":201,
    "short_name":"B1",
    "name":"Cut Mirchi",
    "description":"Mirchi Bajji, cut into small pieces and dual fried",
    "price":"$5.99"
    },
    {"id":202,
    "short_name":"B2",
    "name":"Chilli Paneer",
    "description":"Paneer marinated with spices, deep fried and cooked on low heat in exceptional sauce.",
    "price":"$7.99"
    },
    {"id":203,
    "short_name":"B3",
    "name":"Paneer Tikka",
    "description":"Chunks of Indian cottage cheese marinated in spices and grilled in a tandoor",
    "price":"$7.99"
    },
    {"id":204,
    "short_name":"B4",
    "name":"Paneer Manchurian",
    "description":"Indo Chinese snack of pan fried paneer cubes coated with a spicy, and tangy sauce.",
    "price":"$7.99"
    },
    {"id":205,
    "short_name":"B5",
    "name":"Gobi Manchurian",
    "description":"Traditional Chinese food made Indian way with Fried Cauliflower, Soy sauce and spices.",
    "price":"$7.99"
    },
    {"id":206,
    "short_name":"B6",
    "name":"Veg Manchurian",
    "description":"Mixed vegetable steamed formed into dumplings deep fried and cooked in tangy sauce",
    "price":"$7.99"
    },
    {"id":207,
    "short_name":"B7",
    "name":"Gobi 65",
    "description":"Blanched cauliflower florets nicely coated with a spiced batter and deep fried twice to give that zest and crunchiness",
    "price":"$7.99"
    },
    {"id":208,
    "short_name":"B8",
    "name":"Veg Samosa",
    "description":"Savory pastry fried in ghee or oil, containing spiced vegetables",
    "price":"$7.99"
    },
    {"id":209,
    "short_name":"B9",
    "name":"Chicken 65",
    "description":"Unique Chicken dish made with ginger, cayenne pepper and lime",
    "price":"$9.99"
    },
    {"id":210,
    "short_name":"B10",
    "name":"Chicken Tikka Dry",
    "description":"Boneless chicken pieces marinated in spices and yogurt baked using skewers in a clay oven",
    "price":"$9.99"
    },
    {"id":211,
    "short_name":"B11",
    "name":"Chicken Manchurian",
    "description":"A traditional Chinese appetizer cooked the Indian way with aromatic spices and flavor.",
    "price":"$9.99"
    },
    {"id":212,
    "short_name":"B12",
    "name":"Spicy Pepper Chicken",
    "description":"Chicken marinated and fried in fresh ground pepper and south indian spices",
    "price":"$9.99"
    },
    {"id":213,
    "short_name":"B13",
    "name":"Chilli Chicken",
    "description":"Indo-Chinese spicy chicken marinated with spices, deep fried and cooked on low heat in exceptional sauce",
    "price":"$9.99"
    },
    {"id":214,
    "short_name":"B14",
    "name":"Tandoori Chicken",
    "description":"Delicious chicken legs marinated with Indain spices and cooked on a slow flame tandoor. Famously known as Murgh Tangdi",
    "price":"$9.99"
    },
    {"id":215,
    "short_name":"B15",
    "name":"Malai Kebab",
    "description":"Cubes of boneless chicken marinated in a flavorful melange of herbs, spices and yogurt, and then cooked by roasting",
    "price":"$9.99"
    },
    {"id":216,
    "short_name":"B16",
    "name":"Hariyai Kebab",
    "description":"Punjabi style chicken kabab made with combination of mint and coriander",
    "price":"$9.99"
    },
    {"id":217,
    "short_name":"B17",
    "name":"Apollo Fish ",
    "description":"Delicious Boneless fish with curry leaves for a mouth watering flavor",
    "price":"$9.99"
    },
    {"id":218,
    "short_name":"B18",
    "name":"Shrimp Fry",
    "description":"Shrimp fried with a touch of house special spices",
    "price":"$7.99"
    },
    {"id":219,
    "short_name":"B19",
    "name":"Chicken Lollipop",
    "description":"Frenched chicken winglets cooked in red-tinged marinade of garlic, chilli and soya.",
    "price":"$7.99"
    }
  ];

  var sides = [
    {"id":301,
    "short_name":"C1",
    "name":"Paneer Tikka Masala",
    "description":"Cottage cheese chunks cooked in a rich and creamy Indian masala base",
    "price":"$9.99"
    },
    {"id":302,
    "short_name":"C2",
    "name":"Saag Paneer",
    "description":"A classic Indian dish of cooked spinach studded with cubes of fried paneer cheese",
    "price":"$9.99"
    },
    {"id":303,
    "short_name":"C3",
    "name":"Bagara Baigan",
    "description":"Eggplants cooked with coconut, groundnut and sesame paste.",
    "price":"$8.99"
    },
    {"id":304,
    "short_name":"C4",
    "name":"Malai Kofta",
    "description":"Fresh Kofta balls cooked in rich onion and cashewnuts sauce.",
    "price":"$9.99"
    },
    {"id":305,
    "short_name":"C5",
    "name":"Kadai Veg",
    "description":"Assorted seasonal fresh vegetables cooked in a rich spicy gravy.",
    "price":"$8.99"
    },
    {"id":306,
    "short_name":"C6",
    "name":"Kadai Paneer",
    "description":"Cottage cheese cooked with tomatoes-onions-bell peppers- and a blend of Indian spices",
    "price":"$9.99"
    },
    {"id":307,
    "short_name":"C7",
    "name":"Matar Paneer",
    "description":"Green peas and cottage cheese are cooked in a creamy tomato based curry.",
    "price":"$9.99"
    },
    {"id":308,
    "short_name":"C8",
    "name":"Mixed Vegetable Korma",
    "description":"Seasonal fresh vegetables cooked in a rich creamy gravy",
    "price":"$9.99"
    },
    {"id":309,
    "short_name":"C9",
    "name":"Aloo Gobi",
    "description":"A delicious main dish made with potatoes, cauliflower, and a great blend of spices",
    "price":"$9.99"
    },
    {"id":310,
    "short_name":"C10",
    "name":"Chicken Saag",
    "description":"Chicken cooked with onions and spinach base to produce a creamy and delicious dish",
    "price":"$10.99"
    },
    {"id":311,
    "short_name":"C11",
    "name":"Dum Chicken",
    "description":"Chicken cooked slowly and infused with traditional Indian spices",
    "price":"$10.99"
    },
    {"id":312,
    "short_name":"C12",
    "name":"Chicken Curry",
    "description":"Hyderabadi Style Chicken curry in house special spice mix",
    "price":"$10.99"
    },
    {"id":313,
    "short_name":"C13",
    "name":"Butter Chicken",
    "description":"Bone-out chicken cooked in rich tomato sauce, sweetened and topped with cream and butter",
    "price":"$10.99"
    },
    {"id":314,
    "short_name":"C14",
    "name":"Chicken Tikka Masala",
    "description":"Chicken tikka masala is a dish of roasted chunks of chicken tikka in a spicy sauce.",
    "price":"$10.99"
    },
    {"id":315,
    "short_name":"C15",
    "name":"Egg Curry",
    "description":"Boiled Eggs cooked in onion and tomato sauce with traditional Indian curry",
    "price":"$10.99"
    },
    {"id":316,
    "short_name":"C16",
    "name":"Natu kodi fry",
    "description":"Special chicken fry made with house special spices",
    "price":"$10.99"
    },
    {"id":317,
    "short_name":"C17",
    "name":"Goat Masala",
    "description":"Pieces of goat cooked to perfection in a masala sauce",
    "price":"$12.99"
    },
    {"id":318,
    "short_name":"C18",
    "name":"Kadai Chicken",
    "description":"Chicken delite cooked in a rich spicy gravy",
    "price":"$10.99"
    },
    {"id":319,
    "short_name":"C19",
    "name":"Gongura Goat Curry",
    "description":"Andhra special dish made from goat meat cooked in sorrel leaves and spices to give a nice and tangy flavor that hits the sweet spot.",
    "price":"$12.99"
    },
    {"id":320,
    "short_name":"C20",
    "name":"Andhra Chicken Curry",
    "description":"A unique twist to chicken curry cooked in Andhra spices, chilli, and a touch of coconut milk",
    "price":"$11.99"
    },
    {"id":321,
    "short_name":"C21",
    "name":"Fish Curry",
    "description":"Hyderabadi Style Fish curry in house special spice mix",
    "price":"$10.99"
    },
    {"id":322,
    "short_name":"C22",
    "name":"Shrimp Curry",
    "description":"Hyderabadi Style Shrimp curry in house special spice mix",
    "price":"$10.99"
    },
  ];
  var combo = [
    {"id":501,
    "short_name":"E1",
    "name":"Veg Combo",
    "description":"Bagara rice/Veg Biryani, White Rice, Naan/Pulka, 4 curries, a starter and a dessert",
    "price":"$10.99"
    },
    {"id":502,
    "short_name":"E2",
    "name":"Chicken Combo",
    "description":"Chicken Biryani, White Rice, Naan/Pulka, 2 veg curries, 2 chicken curries/starters and a dessert",
    "price":"$12.99"
    },
    {"id":503,
    "short_name":"E3",
    "name":"Goat Combo",
    "description":"Goat Biryani, White Rice, Naan/Pulka, 2 veg curries, 2 chicken/goat curries/starters and a dessert",
    "price":"$13.99"
    },
    {"id":504,
    "short_name":"E4",
    "name":"Special Chicken Biryani Combo",
    "description":"Chicken Biryani with chicken pakoda and a choice of drink",
    "price":"$12.99"
    },
    {"id":505,
    "short_name":"E5",
    "name":"Special Goat Biryani Combo",
    "description":"Goat Biryani with chicken pakoda and a choice of drink",
    "price":"$13.99"
    },
    {"id":505,
    "short_name":"E5",
    "name":"Special Shrimp Biryani Combo",
    "description":"Shrimp Biryani with chicken pakoda and a choice of drink",
    "price":"$13.99"
    }
  ];

})();
