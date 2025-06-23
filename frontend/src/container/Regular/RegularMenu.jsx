import React, { useState, useEffect } from 'react';
import './RegularMenu.css';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('pk_test_your_publishable_key_here'); // Replace with your Stripe Publishable Key

const RegularMenu = () => {
  // -----------------------------
  // State Management
  // -----------------------------
  // Global selections for menu items
  const [selectedItems, setSelectedItems] = useState([]); // Tracks all selected items including custom meals
  const [totalPrice, setTotalPrice] = useState(0);

  // Build Your Own Meal (BYO) states
  const [selectedBase, setSelectedBase] = useState('');
  const [selectedFavourites, setSelectedFavourites] = useState([]);
  const [selectedSauce, setSelectedSauce] = useState('');
  const [selectedExtras, setSelectedExtras] = useState([]);

  // State to manage expanded categories
  const [expandedCategories, setExpandedCategories] = useState({});

  // -----------------------------
  // Menu Data
  // -----------------------------
  const menuData = [
    {
      id: 'family-meals',
      name: 'Family Meals',
      items: [
        { name: 'Chicken Sandwich, Loaded Fries, Corn Dog & Drinks', price: 19.99, ingredients: '2 chicken sandwiches, 1 loaded fries, 2 corn dogs, 2 drinks' },
        { name: 'Chicken & Loaded Fries Sharing Bucket', price: 23.99, ingredients: '6 chicken wings or drumsticks, 2 loaded fries, 2 plain rice, 2 drinks' },
        { name: 'Chicken & Noodles Sharing Meal', price: 31.99, ingredients: '6 chicken wings or drumsticks, 2 noodles, 2 corn dogs, 2 drinks' },
        { name: 'Chicken & Noodle Bucket Feast', price: 40.99, ingredients: '6 chicken tenders, 3 noodles, 3 plain rice, 3 corn dogs, 3 drinks, 2 flavoured sauces' },
      ],
    },
    {
      id: 'individual-meals',
      name: 'Individual Meals',
      items: [
        { name: 'Chicken Sandwich & Crispy Chicken Combo Meal', price: 12.99, ingredients: '1 Chicken sandwich, 2 chicken wings, 1 OG chips, 1 drink' },
        { name: 'Noodle & Loaded Fries Combo Meal', price: 10.49, ingredients: '1 noodle, 1 classic Loaded fries, drink' },
        { name: 'Trio Crunch', price: 12.99, ingredients: '1 Masala Chips, 1 Corn Dogs & 1 Drumsticks with drink' },
      ],
    },
    {
      id: 'chips',
      name: 'Chips',
      items: [
        { name: 'OG Chips', price: 2.95, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
        { name: 'Plain Chips & Drinks', price: 3.99, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
        { name: 'Chips & Cheese', price: 3.95, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
        { name: 'Chips & Cheese & Drinks', price: 4.99, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
        { name: 'Masala Chips', price: 2.99, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
        { name: 'Masala Chips & Drinks', price: 3.99, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
      ],
    },
    {
      id: 'loaded-fries',
      name: 'Loaded Fries',
      items: [
        { name: 'Classic Loaded Fries', price: 3.49, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
        { name: 'Gravy Chicken Loaded Fries', price: 5.99, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
        { name: 'Sriracha Loaded Fries & Drinks', price: 6.49, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
      ],
    },
    {
      id: 'wing-and-tender-deals',
      name: 'Wing & Tender Deals',
      items: [
        { name: '6 Crispy Wings/Tender', price: 8.49, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
        { name: '8 Crispy Wings/Tender', price: 11.99, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
        { name: '10 Crispy Wings/Tender', price: 13.99, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
      ],
    },
    {
      id: 'chicken-blaze-deals',
      name: 'Chicken Blaze Deals',
      items: [
        { name: '3:3 Chicken Blaze Deal', price: 13.79, ingredients: '3 Chicken Wings & 3 Chicken Tenders with sauce of choice, 1 OG chips & drink' },
        { name: '5:5 Chicken Blaze Deal', price: 17.79, ingredients: '5 Chicken Wings & 5 Chicken Tenders with sauce of choice, 1 Masala chips & drink' },
      ],
    },
    {
      id: 'glaze-bucket',
      name: 'Glaze Bucket',
      items: [
        { name: '5 Ps Glaze Bucket', price: 7.49, ingredients: 'Glaze options- sweet chilly, BBQ, Honey lemon' },
        { name: '10 Ps Glaze Bucket', price: 13.99, ingredients: 'Glaze options- sweet chilly, BBQ, Honey lemon' },
        { name: '12 Ps Glaze Bucket', price: 17.49, ingredients: 'Glaze options- sweet chilly, BBQ, Honey lemon' },
      ],
    },
    {
      id: 'burgers',
      name: 'Burgers',
      items: [
        { name: 'Classic Burger', price: 7.99, ingredients: 'A chicken fillet infused with spices, lettuce, tomato, and garlic mayo in a toasted bun' },
        { name: 'Deluxe Burger', price: 8.99, ingredients: 'Spicy / flavour blast choice is yours' },
        { name: 'Honey BBQ Burger', price: 12.99, ingredients: 'Smoky chicken patty stacked with onion rings, American cheese and BBQ sauce' },
        { name: 'Buffalo Blast', price: 13.99, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
        { name: 'Nashila Burger', price: 14.79, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
      ],
    },
    {
      id: 'rice',
      name: 'Rice',
      items: [
        { name: 'Jasmine/Whole-grain Rice', price: 5.45, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
        { name: 'Katsu Rice Bowl', price: 10.99, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
      ],
    },
    {
      id: 'corn-dog',
      name: 'Corn Dog',
      items: [
        { name: 'Regular Corn Dog', price: 4.50, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
        { name: 'Corn Dog Meal', price: 8.49, ingredients: 'Choose any 1 from original/Half & Half/Potato/Potato & Mozzarella Corn Dog with 1 Loaded fries, 1 drink' },
      ],
    },
    {
      id: 'drinks',
      name: 'Drinks',
      items: [
        { name: 'Soft Drinks', price: 1.70, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
        { name: 'Matcha', price: 2.45, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
        { name: 'Lemonade', price: 2.45, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
        { name: 'Milkshake', price: 2.45, ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients' },
      ],
    },
    {
      id: 'flavour-board',
      name: 'Flavour Board',
      items: [
        { name: 'Blue Blast (Blue Cheese)', price: 0.40, ingredients: '206 Kcal' },
        { name: 'Buff-Up (Buffalo)', price: 0.40, ingredients: '111 Kcal' },
        { name: 'Heat Ranch (Cayenne Ranch)', price: 0.40, ingredients: '195 Kcal' },
        { name: 'Flava Garlic (Garlic Cheese)', price: 0.40, ingredients: '246 Kcal' },
        { name: 'Garlic Kick (Garlic Mayo)', price: 0.40, ingredients: '244 Kcal' },
        { name: 'BBQ Honey Dip (Honey BBQ)', price: 0.40, ingredients: '80 Kcal' },
        { name: 'Gold Mustard (Honey Mustard)', price: 0.40, ingredients: '174 Kcal' },
        { name: 'Chill Ranch (House Ranch)', price: 0.40, ingredients: '184 Kcal' },
        { name: 'K-BBQ Splash (Korean BBQ)', price: 0.40, ingredients: '115 Kcal' },
        { name: 'Mango Blaze (Mango Habanero)', price: 0.40, ingredients: '70 Kcal' },
        { name: 'House Hit (Slim Sauce)', price: 0.40, ingredients: '194 Kcal' },
        { name: 'BBQ Burner (Spicy BBQ)', price: 0.40, ingredients: '85 Kcal' },
        { name: 'Sweet Shot (Sweet Chilli)', price: 0.40, ingredients: '69 Kcal' },
      ],
    },
  ];


  // Build Your Own Meal Data
  const baseOptions = {
    Noodles: ['Egg Noodles', 'Whole Wheat Noodles', 'Rice Noodles', 'Udon Noodles'],
    Grain: ['Jasmine Rice', 'Whole-Grain Rice'],
    'Vegetable Stir-Fry': [
      'Broccoli',
      'Carrot',
      'Mushroom Onion',
      'Pak Choi',
      'Leek and Cabbage',
      'Soya Edamame Beans',
    ],
  };

  const favouritesOptions = [
    { name: 'Chicken Breast', price: 2.80 },
    { name: 'Chicken Katsu', price: 2.95 },
    { name: 'Calamari Katsu', price: 2.95 },
    { name: 'Beef', price: 2.95 },
    { name: 'Roast Duck', price: 2.95 },
    { name: 'Mixed Seafood', price: 6.50 },
    { name: 'Prawn', price: 2.95 },
    { name: 'Broccoli', price: 0.80 },
    { name: 'Button Mushroom', price: 0.80 },
    { name: 'Tofu', price: 0.80 },
    { name: 'Pak Choi', price: 0.80 },
    { name: 'Cashew Nut', price: 1.50 },
    { name: 'Mixed Peppers', price: 1.50 },
    { name: 'Mixed Onions', price: 1.50 },
    { name: 'Baby Corn', price: 1.50 },
    { name: 'Red Onion', price: 1.50 },
    { name: 'Pineapple', price: 1.50 },
    { name: 'Soya Edamame Beans', price: 1.50 },
  ];

  const sauceOptions = [
    'Teriyaki',
    'Sweet & Sour',
    'Yellow Curry & Coconut',
    'Dark Soya & Ginger',
    'Asian Spice Sauce',
    'Hot Asia',
    'Garlic & Black Pepper',
    'Peanut Sauce',
    'Soya Sauce',
    'Sweet Chili',
  ];

  const extraToppings = [
    'Fresh Coriander',
    'Fried Garlic',
    'Fried Onion',
    'Peanut',
    'Sesame Seeds',
  ];

  // -----------------------------
  // Helper Functions
  // -----------------------------
  // Calculate total price of selected items
  const calculateTotalPrice = (items) => items.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);

  // Add item to selected items list
  const addItemToSelected = (item) => {
    setSelectedItems((prev) => {
      const newArr = [...prev, item];
      setTotalPrice(calculateTotalPrice(newArr));
      return newArr;
    });
  };

  // Remove item from selected items list
  const removeItemFromSelected = (itemName) => {
    setSelectedItems((prev) => {
      const filtered = prev.filter((i) => i.name !== itemName);
      setTotalPrice(calculateTotalPrice(filtered));
      return filtered;
    });
  };

  // Handle item selection/deselection for cards
  const handleSelectItem = (item) => {
    const found = selectedItems.find((i) => i.name === item.name);
    if (found) removeItemFromSelected(item.name);
    else addItemToSelected(item);
  };

  // Check if BYO meal is ready to add
  const isMealReady = selectedBase && selectedFavourites.length > 0 && selectedSauce;
  const handleAddMeal = () => {
    if (!isMealReady) return;
    const basePrice = 5.45;
    const favouritesPrice = favouritesOptions.reduce((acc, fav) => {
      return selectedFavourites.includes(fav.name) ? acc + fav.price : acc;
    }, 0);
    const extrasPrice = selectedExtras.length * 0.6;
    const totalPrice = basePrice + favouritesPrice + extrasPrice;

    const meal = { name: 'Build Your Own Meal', price: totalPrice };
    addItemToSelected(meal);

    // Reset BYO states
    setSelectedBase('');
    setSelectedFavourites([]);
    setSelectedSauce('');
    setSelectedExtras([]);
  };

  // Toggle category expansion
  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // -----------------------------
  // Stripe Checkout
  // -----------------------------
  const createCheckoutSession = async (items) => {
    try {
      const response = await axios.post('http://localhost:8000/create-checkout-session', { items });
      const { url } = response.data;
      window.location.href = url;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('There was an issue processing your payment. Please try again.');
    }
  };

  const handleAddToCart = () => {
    const cartItems = selectedItems.map((item) => ({
      name: item.name,
      price: item.price,
      quantity: 1,
    }));
    createCheckoutSession(cartItems);
  };

  // -----------------------------
  // Render
  // -----------------------------
  return (
    <div className="menu-container">
      <h1 className="menu-title">Menu</h1>

      {menuData.map((category) => {
        const isExpanded = expandedCategories[category.id] || false;
        const visibleItems = window.innerWidth <= 768
          ? (isExpanded ? category.items : category.items.slice(0, 4)) // Show 4 items by default on mobile
          : category.items; // Show all items on desktop

        return (
          <div key={category.id} className="menu-section" id={category.id}>
            <h2 className="menu-section-title">{category.name}</h2>
            <div className="menu-items">
              {visibleItems.map((item, index) => (
                <div className="menu-card" key={index}>
                  <img
                    src="https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-fast-foods-item-png-image_10303953.png"
                    alt={item.name}
                    loading="lazy"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
                  />
                  <div className="card-content">
                    <h3 className="card-title">{item.name}</h3>
                    <p className="card-price">£{item.price.toFixed(2)}</p>
                    <p className="card-ingredients">{item.ingredients}</p>
                    <button className="card-button" onClick={() => handleSelectItem(item)}>
                      {selectedItems.some((i) => i.name === item.name) ? 'Remove' : 'Select'}
                    </button>
                  </div>
                </div>
              ))}
              {/* Show "See More" only on mobile if more than 4 items */}
              {window.innerWidth <= 768 && category.items.length > 4 && (
                <button
                  className="expand-button"
                  onClick={() => toggleCategory(category.id)}
                >
                  {isExpanded ? 'See Less' : 'See More'}
                </button>
              )}
            </div>
          </div>
        );
      })}

      {/* Build Your Own Meal Section */}
      <div id="meal-deal" className="menu-section-2">
        <h2 className="menu-section-title">Build Your Own Meal (1+2+3)</h2>
        <div className="menu-build-your-own">
          {/* Step 1: Choose Base */}
          <div className="menu-subsection">
            <h3 className="step-title">1. Choose Your Base (with Fresh Veg & Egg) - £5.45</h3>
            <div className="base-options">
              {Object.entries(baseOptions).map(([group, opts]) => (
                <div key={group} className="base-group">
                  <p className="base-group-title">{group}</p>
                  {opts.map((option) => (
                    <label key={option} className="base-option">
                      <input
                        type="radio"
                        name="base"
                        value={option}
                        checked={selectedBase === option}
                        onChange={(e) => setSelectedBase(e.target.value)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Choose Favourites */}
          <div className="menu-subsection">
            <h3 className="step-title">2. Choose Your Favourites</h3>
            <div className="favourites-options">
              {favouritesOptions.map((fav) => (
                <label key={fav.name} className="favourite-option">
                  <input
                    type="checkbox"
                    value={fav.name}
                    checked={selectedFavourites.includes(fav.name)}
                    onChange={() => {
                      if (selectedFavourites.includes(fav.name)) {
                        setSelectedFavourites(selectedFavourites.filter((item) => item !== fav.name));
                      } else {
                        setSelectedFavourites([...selectedFavourites, fav.name]);
                      }
                    }}
                  />
                  {fav.name} - £{fav.price.toFixed(2)}
                </label>
              ))}
            </div>
          </div>

          {/* Step 3: Choose Sauce */}
          <div className="menu-subsection">
            <h3 className="step-title">3. Choose Your Sauce (Free)</h3>
            <div className="sauce-options">
              {sauceOptions.map((sauce) => (
                <label key={sauce} className="sauce-option">
                  <input
                    type="radio"
                    name="sauce"
                    value={sauce}
                    checked={selectedSauce === sauce}
                    onChange={(e) => setSelectedSauce(e.target.value)}
                  />
                  {sauce}
                </label>
              ))}
            </div>
          </div>

          {/* Extra Toppings */}
          <div className="menu-subsection">
            <h3 className="step-title">Extra Toppings - £0.60 Each</h3>
            <div className="extras-options">
              {extraToppings.map((extra) => (
                <label key={extra} className="extra-option">
                  <input
                    type="checkbox"
                    value={extra}
                    checked={selectedExtras.includes(extra)}
                    onChange={() => {
                      if (selectedExtras.includes(extra)) {
                        setSelectedExtras(selectedExtras.filter((item) => item !== extra));
                      } else {
                        setSelectedExtras([...selectedExtras, extra]);
                      }
                    }}
                  />
                  {extra}
                </label>
              ))}
            </div>
          </div>

          {/* Add Meal Button */}
          <button className="add-meal-button" onClick={handleAddMeal} disabled={!isMealReady}>
            Add Meal to Selection
          </button>
        </div>
      </div>

      {/* Selected Items Display */}
      {selectedItems.length > 0 && (
        <div className="selected-items">
          <h2 className="selected-items-title">Selected Items</h2>
          <ul className="menu-items-list">
            {selectedItems.map((item, index) => (
              <li key={index} className="selected-item">
                <span className="item-name">{item.name}</span>
                <span className="item-price">£{item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="total-price">
            <strong>Total: </strong>£{totalPrice}
          </div>
        </div>
      )}

      {/* Tagline */}
      <p className="menu-tagline">Quick bites, big delights</p>

      {/* Add to Cart Button */}
      {selectedItems.length > 0 && (
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Checkout Now
        </button>
      )}

      {/* -----------------------------
       * Chatbot Section (Commented out)
       * -----------------------------
       * This section handles the interactive chatbot UI, allowing users to navigate
       * menu options, build custom meals, and complete orders. It is currently
       * disabled but preserved for future use.
       */}
      {/* {!isMinimized ? (
        <div className="chatbot-window">
          <div className="chatbot-messages">
            {chatMessages.map((msg, index) => (
              <div className="chatbot-message" key={index}>
                <p style={{ whiteSpace: 'pre-line' }}>{msg.text}</p>
                <div className="chatbot-buttons">
                  {msg.buttons &&
                    msg.buttons.map((btn, i) => (
                      <button key={i} onClick={() => unifiedHandleChatButtonClick(btn.value)}>
                        {btn.label}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="chatbot-footer">
            <button
              className="chatbot-reset"
              onClick={resetChat}
              style={{ marginRight: '10px' }}
            >
              Reset
            </button>
            <button
              className="chatbot-close"
              onClick={() => setIsMinimized(true)}
            >
              Minimize Chat
            </button>
          </div>
        </div>
      ) : (
        <div className="chatbot-minimized-bar" onClick={() => setIsMinimized(false)}>
          <p>Chat minimized — click to open</p>
        </div>
      )} */}
    </div>
  );

  // -----------------------------
  // Chatbot Logic (Commented out)
  // -----------------------------
  // // Chat categories for navigation
  // const chatCategories = [
  //   { key: 'buildYourOwn', label: 'Build Your Own Meal' },
  //   { key: 'familyMeals', label: 'Family Meals' },
  //   { key: 'individualMeals', label: 'Individual Meals' },
  //   { key: 'chips', label: 'Chips' },
  //   { key: 'loadedFries', label: 'Loaded Fries' },
  //   { key: 'wingAndTenderDeals', label: 'Wing & Tender Deals' },
  //   { key: 'chickenBlazeDeals', label: 'Chicken Blaze Deals' },
  //   { key: 'glazeBucket', label: 'Glaze Bucket' },
  //   { key: 'burgers', label: 'Burgers' },
  //   { key: 'rice', label: 'Rice' },
  //   { key: 'cornDog', label: 'Corn Dog' },
  //   { key: 'drinks', label: 'Drinks' },
  //   { key: 'flavourBoard', label: 'Flavour Board' },
  // ];

  // // Initialize chatbot on mount
  // useEffect(() => {
  //   startConversation();
  // }, []);

  // // Reset chatbot conversation
  // const resetChat = () => {
  //   const initialMessage = {
  //     text: "Welcome! Please choose one of the following options:",
  //     buttons: chatCategories.map((cat) => ({ label: cat.label, value: cat.key })),
  //   };
  //   setChatMessages([initialMessage]);
  //   setShowSummary(false);
  //   setInBYOFlow(false);
  //   setByoStep(0);
  //   setTempBase('');
  //   setTempFavourites([]);
  //   setTempSauce('');
  //   setTempExtras([]);
  //   setSelectedBase('');
  //   setSelectedFavourites([]);
  //   setSelectedSauce('');
  //   setSelectedExtras([]);
  // };

  // // Start chatbot conversation
  // const startConversation = () => {
  //   const initialMessage = {
  //     text: "Welcome! Please choose one of the following options:",
  //     buttons: chatCategories.map((cat) => ({ label: cat.label, value: cat.key })),
  //   };
  //   setChatMessages([initialMessage]);
  //   setShowSummary(false);
  //   setSelectedBase('');
  //   setSelectedFavourites([]);
  //   setSelectedSauce('');
  //   setSelectedExtras([]);
  // };

  // // Handle chat button clicks
  // const handleChatButtonClick = (value) => {
  //   if (value === 'finish') {
  //     handleFinishOrder();
  //     return;
  //   }
  //   if (inBYOFlow && byoStep > 0) {
  //     handleBYOFlow(value);
  //     return;
  //   }
  //   const category = chatCategories.find((c) => c.key === value);
  //   if (category) {
  //     if (category.key === 'buildYourOwn') {
  //       setInBYOFlow(true);
  //       setByoStep(1);
  //       showBYOStep(1);
  //     } else {
  //       showCategoryItems(category.key);
  //     }
  //   } else {
  //     const lastMsg = chatMessages[chatMessages.length - 1];
  //     if (lastMsg && lastMsg.categoryKey) {
  //       const item = menuData[lastMsg.categoryKey].find((i) => i.name === value);
  //       if (item) {
  //         addItemToSelected(item);
  //         const newMsg = {
  //           text: `Added ${item.name}. You can pick more items or click "Finish Order".`,
  //           buttons: lastMsg.buttons,
  //         };
  //         setChatMessages([...chatMessages, newMsg]);
  //       }
  //     }
  //   }
  // };

  // // Display category items in chatbot
  // const showCategoryItems = (categoryKey) => {
  //   const items = menuData[categoryKey];
  //   const itemButtons = items.map((i) => ({
  //     label: `${i.name} (£${i.price.toFixed(2)})`,
  //     value: i.name,
  //   }));
  //   itemButtons.push({ label: 'Finish Order', value: 'finish' });
  //   const newMsg = {
  //     text: `Items in ${categoryKey}. Select any item(s). Each click adds an item. Click "Finish Order" when done.`,
  //     buttons: itemButtons,
  //     categoryKey,
  //   };
  //   setChatMessages([...chatMessages, newMsg]);
  // };

  // // Display BYO steps in chatbot
  // const showBYOStep = (step) => {
  //   let newMsg;
  //   switch (step) {
  //     case 1:
  //       const baseButtons = [];
  //       Object.entries(baseOptions).forEach(([group, opts]) => {
  //         opts.forEach((o) => baseButtons.push({ label: o, value: o }));
  //       });
  //       baseButtons.push({ label: 'Finish Order', value: 'finish' });
  //       newMsg = { text: "Choose Your Base (£5.45). (One selection only)", buttons: baseButtons };
  //       break;
  //     case 2:
  //       const favButtons = favouritesOptions.map((f) => ({
  //         label: `${f.name} (£${f.price.toFixed(2)})`,
  //         value: f.name,
  //       }));
  //       favButtons.push({ label: 'Done Favorites', value: 'doneFav' });
  //       favButtons.push({ label: 'Finish Order', value: 'finish' });
  //       newMsg = { text: "Choose Your Favorites (You can pick multiple, then click 'Done Favorites').", buttons: favButtons };
  //       break;
  //     case 3:
  //       const sauceButtons = sauceOptions.map((s) => ({ label: s, value: s }));
  //       sauceButtons.push({ label: 'Finish Order', value: 'finish' });
  //       newMsg = { text: "Choose Your Sauce (Free). (One selection only)", buttons: sauceButtons };
  //       break;
  //     case 4:
  //       const extrasButtons = extraToppings.map((e) => ({ label: `${e} (£0.60)`, value: e }));
  //       extrasButtons.push({ label: 'Add Meal', value: 'addMeal' });
  //       extrasButtons.push({ label: 'Finish Order', value: 'finish' });
  //       newMsg = { text: "Choose Extra Toppings (multiple). Then click 'Add Meal' to confirm.", buttons: extrasButtons };
  //       break;
  //     default:
  //       return;
  //   }
  //   setChatMessages((prev) => [...prev, newMsg]);
  // };

  // // Handle BYO flow steps
  // const handleBYOFlow = (value) => {
  //   if (value === 'finish') {
  //     handleFinishOrder();
  //     return;
  //   }
  //   switch (byoStep) {
  //     case 1:
  //       setTempBase(value);
  //       setByoStep(2);
  //       setChatMessages((prev) => [...prev, { text: `You chose base: ${value}`, buttons: [] }]);
  //       showBYOStep(2);
  //       break;
  //     case 2:
  //       if (value === 'doneFav') {
  //         setByoStep(3);
  //         setChatMessages((prev) => [
  //           ...prev,
  //           { text: `Favorites chosen: ${tempFavourites.join(', ')}`, buttons: [] },
  //         ]);
  //         showBYOStep(3);
  //       } else {
  //         setTempFavourites((prev) => (prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]));
  //       }
  //       break;
  //     case 3:
  //       setTempSauce(value);
  //       setByoStep(4);
  //       setChatMessages((prev) => [...prev, { text: `Sauce chosen: ${value}`, buttons: [] }]);
  //       showBYOStep(4);
  //       break;
  //     case 4:
  //       if (value === 'addMeal') {
  //         finalizeChatMeal();
  //       } else {
  //         setTempExtras((prev) => (prev.includes(value) ? prev.filter((e) => e !== value) : [...prev, value]));
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // // Finalize BYO meal from chatbot
  // const finalizeChatMeal = () => {
  //   const basePrice = 5.45;
  //   let favouritesCost = 0;
  //   tempFavourites.forEach((favName) => {
  //     const found = favouritesOptions.find((f) => f.name === favName);
  //     if (found) favouritesCost += found.price;
  //   });
  //   const extrasCost = tempExtras.length * 0.6;
  //   const total = basePrice + favouritesCost + extrasCost;

  //   const meal = { name: 'Build Your Own Meal', price: total };
  //   addItemToSelected(meal);
  //   setTempBase('');
  //   setTempFavourites([]);
  //   setTempSauce('');
  //   setTempExtras([]);
  //   setByoStep(0);
  //   setInBYOFlow(false);

  //   const doneMsg = {
  //     text: `Build Your Own Meal added! Subtotal: £${total.toFixed(2)}`,
  //     buttons: [{ label: 'Finish Order', value: 'finish' }],
  //   };
  //   setChatMessages((prev) => [...prev, doneMsg]);
  // };

  // // Handle order completion
  // const handleFinishOrder = () => {
  //   setShowSummary(true);
  //   const summaryMsg = {
  //     text:
  //       `Here is your order summary:\n\n` +
  //       selectedItems.map((i) => `- ${i.name} (£${i.price.toFixed(2)})`).join('\n') +
  //       `\n\nTotal: £${calculateTotalPrice(selectedItems)}`,
  //     buttons: [{ label: 'Checkout with Stripe', value: 'checkout' }],
  //   };
  //   setChatMessages((prev) => [...prev, summaryMsg]);
  // };

  // // Handle checkout effect
  // useEffect(() => {
  //   if (!showSummary) return;
  //   const lastMsg = chatMessages[chatMessages.length - 1];
  //   if (!lastMsg || !lastMsg.buttons) return;
  //   const checkoutBtn = lastMsg.buttons.find((b) => b.value === 'checkout');
  //   if (!checkoutBtn) return;

  //   const checkoutHandler = () => {
  //     const cartItems = selectedItems.map((item) => ({
  //       name: item.name,
  //       price: item.price,
  //       quantity: 1,
  //     }));
  //     createCheckoutSession(cartItems);
  //   };
  //   lastMsg.buttons.forEach((btn) => {
  //     if (btn.value === 'checkout') btn.onClick = checkoutHandler;
  //   });
  // }, [showSummary, chatMessages, selectedItems]);

  // // Unified chat button click handler
  // const originalHandleChatButtonClick = handleChatButtonClick;
  // const unifiedHandleChatButtonClick = (value) => {
  //   if (value === 'checkout') {
  //     const cartItems = selectedItems.map((item) => ({
  //       name: item.name,
  //       price: item.price,
  //       quantity: 1,
  //     }));
  //     createCheckoutSession(cartItems);
  //     return;
  //   }
  //   originalHandleChatButtonClick(value);
  // };
};

export default RegularMenu;