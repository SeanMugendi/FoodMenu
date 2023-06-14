let menu = {
    drinks: [
      "Water", "Tea", "Sweet Tea", "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees: [
      "Hamburger w/ Fries",
      "Grilled Cheese w/ Tater Tots", "Grilled Chicken w/ Veggies",
      "Chicken Fried Steak w/ Mashed Potatoes",
      "Fried Shrimp w/ Coleslaw", "Veggie Plate"
    ],
    desserts: [
      "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
  };
  
  var categorySelect = document.getElementById("categorySelect");
  var menuList = document.getElementById("menuList");
  
  categorySelect.addEventListener("change", function() {
    var selectedCategory = categorySelect.value;
    var menuItems = menu[selectedCategory];
  
    menuList.innerHTML = "";
  
    if (menuItems) {
      for (var i = 0; i < menuItems.length; i++) {
        var option = document.createElement("option");
        option.text = menuItems[i];
        menuList.appendChild(option);
      }
    }
  });
  