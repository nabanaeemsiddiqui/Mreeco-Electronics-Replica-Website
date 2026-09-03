/* Shared storefront behaviours. Product search and cart data will be added in later stages. */
const placeholderProductImage = 'images/products/product-placeholder.svg';
const placeholderCollectionImage = 'images/collections/collection-placeholder.svg';

// This shared data is intentionally kept front-end only for reuse in later pages.
let products = [
  { id: 'arduino-uno-kit', 
    name: 'Arduino Uno Price In Pakistan Arduino Kit With USB Cable',
    price: 'Rs 1,450.00',
    image: 'images/products/Arduino_uno_cable_with_kit_1.png', 
    images: [
      'images/products/Arduino_uno_cable_with_kit_1.png',
      'images/products/Arduino_uno_cable_with_kit_2.png'
    ], 
    category: 'Arduino', 
    available: true },
    
  { id: 'arduino-nano-v3', 
    name: 'Arduino Nano V3', 
    price: 'Rs 650.00', 
    image: 'images/products/Arduino_Nano_V3_1.png', 
    images: [
      'images/products/Arduino_Nano_V3_1.png',
      'images/products/Arduino_Nano_V3_2.png'
    ],
    category: 'Arduino', 
    available: true },

  { id: 'arduino-uno-r3-smd', 
    name: 'Arduino Uno R3 SMD Board Kit Without USB Cable', 
    price: 'Rs 850.00', 
    image: 'images/products/Arduino_Uno_R3_SMD_Board_Kit_Without_USB_Cable_1.png', 
    images: [
      'images/products/Arduino_Uno_R3_SMD_Board_Kit_Without_USB_Cable_1.png',
      'images/products/Arduino_Uno_R3_SMD_Board_Kit_Without_USB_Cable_2.png',
      'images/products/Arduino_Uno_R3_SMD_Board_Kit_Without_USB_Cable_3.png',
      'images/products/Arduino_Uno_R3_SMD_Board_Kit_Without_USB_Cable_4.png'
    ],
    category: 'Arduino', 
    available: true },

  { id: 'arduino-mega-2560-r3', 
    name: 'Arduino Mega 2560 R3 In Pakistan', 
    price: 'Rs 3,700.00', 
    image: 'images/products/Arduino_Mega_2560_R3_In_Pakistan_1.png', 
    images: [
      'images/products/Arduino_Mega_2560_R3_In_Pakistan_1.png',
      'images/products/Arduino_Mega_2560_R3_In_Pakistan_2.png',
      'images/products/Arduino_Mega_2560_R3_In_Pakistan_3.png'
    ],
    category: 'Arduino', 
    available: true },

  { id: 'micro-usb-arduino-uno', 
    name: 'Micro Usb Arduino Uno R3', 
    price: 'Rs 1,550.00', 
    image: 'images/products/micro-usb-arduino-uno_r3_1.png', 
    images: [
      'images/products/micro-usb-arduino-uno_r3_1.png',
      'images/products/micro-usb-arduino-uno_r3_2.png'
    ],
    category: 'Arduino', 
    available: false },

  { id: 'arduino-pro-mini', 
    name: 'Arduino Pro Mini 3.3V 8Mhz ATMEGA328P in Pakistan', 
    price: 'Rs 1,200.00', 
    image: 'images/products/arduino-pro-mini-1.png', 
    images: [
      'images/products/arduino-pro-mini-1.png',
      'images/products/arduino-pro-mini-2.png',
      'images/products/arduino-pro-mini-3.png',
      'images/products/arduino-pro-mini-4.png'
    ],
    category: 'Arduino', 
    available: false },

  { id: 'arduino-pro-micro', 
    name: 'Arduino Pro Micro 5v 16m Atmega32u Rubber Ducky Rubberducky', 
    price: 'Rs 1,250.00', 
    image: 'images/products/arduino-pro-micro-1.png', 
    images: [
      'images/products/arduino-pro-micro-1.png',
      'images/products/arduino-pro-micro-2.png',
      'images/products/arduino-pro-micro-3.png'
    ],
    category: 'Arduino', 
    available: true },

  { id: 'arduino-leonardo-r3', 
    name: 'Arduino Leonardo R3 Board – ATmega32u4 Microcontroller, 20 I/O Pins, USB, 16MHz', 
    price: 'Rs 1,550.00', 
    image: 'images/products/arduino-leonardo-r3-1.png', 
    images: [
      'images/products/arduino-leonardo-r3-1.png',
      'images/products/arduino-leonardo-r3-2.png',
      'images/products/arduino-leonardo-r3-3.png'
    ],
    category: 'Arduino', 
    available: true },

  { id: 'mega-2560-pro-mini', 
    name: 'Mega 2560 Pro Mini Embed Ch340g Atmega 2560-16a With Male Pin Headers In Pakistan', 
    price: 'Rs 2,950.00', 
    image: 'images/products/mega-2560-pro-mini-1.png', 
    images: [
      'images/products/mega-2560-pro-mini-1.png',
      'images/products/mega-2560-pro-mini-2.png'
    ], 
    category: 'Arduino', 
    available: true },

  { id: 'ch340-arduino-mega', 
    name: 'Ch340 Arduino Mega 2560 With Cable In Pakistan', 
    price: 'Rs 3,500.00', 
    image: 'images/products/ch340-arduino-mega-1.png', 
    images: [
      'images/products/ch340-arduino-mega-1.png',
      'images/products/ch340-arduino-mega-2.png',
      'images/products/ch340-arduino-mega-3.png',
      'images/products/ch340-arduino-mega-4.png',
      'images/products/ch340-arduino-mega-5.png'
    ],
    category: 'Arduino', 
    available: true },

  { id: 'usb-cable-arduino', 
    name: 'Usb Cable For Arduino Uno Arduino Mega', 
    price: 'Rs 120.00', 
    image: 'images/products/usb-cable-arduino-1.png', 
    images: [
      'images/products/usb-cable-arduino-1.png'
    ],
    category: 'Arduino', 
    available: true },

  { id: 't-call-esp32', 
    name: 'T-Call V1.3 ESP32 SIM800L GSM Module', 
    price: 'Rs 5,000.00', 
    image: 'images/products/t-call-esp32-1.png', 
    images: [
      'images/products/t-call-esp32-1.png',
      'images/products/t-call-esp32-2.png',
      'images/products/t-call-esp32-3.png',
      'images/products/t-call-esp32-4.png',
      'images/products/t-call-esp32-5.png',
      'images/products/t-call-esp32-6.png'
    ],
    category: 'Arduino', 
    available: true },

  { id: 'night-vision-pi-camera', 
    name: 'Night Vision 5mp Camera Module For Raspberry Pi With 2 Ir Leds', 
    price: 'Rs 3,900.00', 
    image: 'images/products/night-vision-pi-camera-1.png',
    images: [
      'images/products/night-vision-pi-camera-1.png',
      'images/products/night-vision-pi-camera-2.png',
      'images/products/night-vision-pi-camera-3.png',
    ],
    category: 'Raspberry Pi', 
    available: true },

  { id: 'raspberry-pi-zero-2w', 
    name: 'Raspberry Pi Zero 2 W In Pakistan', 
    price: 'Rs 10,000.00', 
    image: 'images/products/raspberry-pi-zero-2w-1.png',
    images: [
      'images/products/raspberry-pi-zero-2w-1.png',
      'images/products/raspberry-pi-zero-2w-2.png'
    ],
    category: 'Raspberry Pi', 
    available: false },

  { id: 'raspberry-pi-pico', 
    name: 'Raspberry Pi Pico Rp2040 Cheap Price In Pakistan', 
    price: 'Rs 1,200.00', 
    image: 'images/products/raspberry-pi-pico-1.png',
    images: [
      'images/products/raspberry-pi-pico-1.png',
      'images/products/raspberry-pi-pico-2.png',
      'images/products/raspberry-pi-pico-3.png',
      'images/products/raspberry-pi-pico-4.png',
      'images/products/raspberry-pi-pico-5.png',
      'images/products/raspberry-pi-pico-6.png'
    ],
    category: 'Raspberry Pi', 
    available: false },

  { id: 'orange-pi-zero-h2', 
    name: '512mb Orange Pi Zero H2 Development Board', 
    price: 'Rs 4,000.00', 
    image: 'images/products/orange-pi-zero-h2-1.png',
    images: [
      'images/products/orange-pi-zero-h2-1.png',
      'images/products/orange-pi-zero-h2-2.png',
      'images/products/orange-pi-zero-h2-3.png'
    ],
    category: 'Raspberry Pi', 
    available: false },

  { id: 'raspberry-pi-pico-w', 
    name: 'Raspberry Pi Pico W', 
    price: 'Rs 2,700.00', 
    image: 'images/products/raspberry-pi-pico-w-1.png',
    images: [
      'images/products/raspberry-pi-pico-w-1.png',
      'images/products/raspberry-pi-pico-w-2.png'
    ],
    category: 'Raspberry Pi', 
    available: false },

  { id: 'sandisk-micro-sd', 
    name: 'Class 10 Sandisk 32gb Ultra Micro Sd Card For Raspberry Pi', 
    price: 'Rs 1,450.00', 
    image: 'images/products/sandisk-micro-sd-1.png',
    images: [
      'images/products/sandisk-micro-sd-1.png',
      'images/products/sandisk-micro-sd-2.png',
      'images/products/sandisk-micro-sd-3.png'
    ],
    category: 'Raspberry Pi', 
    available: true },

  { id: 'raspberry-pi-active-cooler', 
    name: 'Raspberry Pi 5 Active Cooler with Aluminum Heatsink in Pakistan', 
    price: 'Rs 2,000.00',
    image: 'images/products/raspberry-pi-active-cooler-1.png',
    images: [
      'images/products/raspberry-pi-active-cooler-1.png',
      'images/products/raspberry-pi-active-cooler-2.png',
      'images/products/raspberry-pi-active-cooler-3.png'
    ],
    category: 'Raspberry Pi', 
    available: true },
  
  { id: 'raspberry-pi-camera-v13', 
    name: '5mp Raspberry Pi Camera Module V1.3 In Pakistan', 
    price: 'Rs 1,500.00', 
    image: 'images/products/raspberry-pi-camera-v13-1.png',
    images: [
      'images/products/raspberry-pi-camera-v13-1.png',
      'images/products/raspberry-pi-camera-v13-2.png'
    ],
    category: 'Raspberry Pi', 
    available: true },

  { id: 'micro-hdmi-adapter', 
    name: 'Hdmi Female To Micro Hdmi Male Converter Adapter For Raspberry Pi 4', 
    price: 'Rs 250.00', 
    image: 'images/products/micro-hdmi-adapter-1.png',
    images: [
      'images/products/micro-hdmi-adapter-1.png',
      'images/products/micro-hdmi-adapter-2.png',
      'images/products/micro-hdmi-adapter-3.png'
    ],
    category: 'Raspberry Pi', 
    available: true },

  { id: 'hdmi-cable', 
    name: 'HDMI to HDMI Cable High-Quality HDMI Cable Male to Male Type A To Type A', 
    price: 'Rs 220.00', 
    image: 'images/products/hdmi-cable-1.png',
    images: [
      'images/products/hdmi-cable-1.png'
    ],
    category: 'Raspberry Pi', 
    available: true },

  { id: 'hc-sr04-ultrasonic', 
    name: 'HC-SR04 Ultrasonic Distance Sensor Module', 
    price: 'Rs 180.00', 
    image: placeholderProductImage, 
    category: 'Sensors & Modules', 
    available: true },

  { id: 'dht11-sensor', 
    name: 'DHT11 Temperature and Humidity Sensor Module', 
    price: 'Rs 150.00', 
    image: placeholderProductImage, 
    category: 'Sensors & Modules', 
    available: true },

  { id: 'relay-module-5v', 
    name: '5V Single Channel Relay Module', 
    price: 'Rs 220.00', 
    image: placeholderProductImage, 
    category: 'Sensors & Modules', 
    available: false },

  { id: 'soldering-iron-60w', 
    name: '60W Adjustable Temperature Soldering Iron', 
    price: 'Rs 1,350.00', 
    image: placeholderProductImage, 
    category: 'Accessories & Tools', 
    available: true },

  { id: 'jumper-wire-kit', 
    name: 'Male to Male Jumper Wire Kit', 
    price: 'Rs 250.00', 
    image: placeholderProductImage, 
    category: 'Accessories & Tools', 
    available: true },

  { id: 'breadboard-830', 
    name: '830 Point Solderless Breadboard', 
    price: 'Rs 320.00', 
    image: placeholderProductImage, 
    category: 'Accessories & Tools', 
    available: true },

  { id: 'resistor-kit-1-4w', 
    name: '1/4W Resistor Assortment Kit', 
    price: 'Rs 480.00', 
    image: placeholderProductImage, 
    category: 'Capacitor, Resistor, Inductor', 
    available: true },

  { id: 'ceramic-capacitor-kit', 
    name: 'Ceramic Capacitor Assortment Kit', 
    price: 'Rs 450.00', 
    image: placeholderProductImage, 
    category: 'Capacitor, Resistor, Inductor', 
    available: true },

  { id: 'electrolytic-capacitor-kit',
    name: 'Electrolytic Capacitor Assortment Kit', 
    price: 'Rs 650.00', 
    image: 'placeholderProductImage', 
    category: 'Capacitor, Resistor, Inductor', 
    available: false },

  { id: 'lcd-1602-blue', 
   name: '16x2 LCD Display Module Blue Backlight', 
   price: 'Rs 350.00', 
   image: 'placeholderProductImage', 
   category: 'Displays', 
   available: true },

  { id: 'oled-096-i2c', 
    name: '0.96 Inch OLED I2C Display Module', 
    price: 'Rs 550.00', 
    image: placeholderProductImage, 
    category: 'Displays', 
    available: true },

  { id: 'tft-24-display', 
    name: '2.4 Inch TFT LCD Touch Display Module', 
    price: 'Rs 1,450.00', 
    image: placeholderProductImage, 
    category: 'Displays', 
    available: false }
];

const collectionSeeds = [
  ['3D Printer', '637725203489487956_0original.webp'],
  ['7 Segment Display', '637720870246377900_0original.webp'],
  ['AC Motor', '637739867456037710_0original.webp'],
  ['Accessories & Tools', '637744995064760699_0original.webp'],
  ['Analog Meters', '637735307942629822_0original.webp'],
  ['Arduino', '638352941673995465_0original.webp'],
  ['Arduino Components', '637719060810608136_0original.webp'],
  ['Audio', '637719133478719708_0original.webp'],
  ['Audio Players', '637738891342533393_0original.webp'],
  ['Automation'],
  ['Batteries & Inverters', '86ab9074-de76-4816-a43a-d7af67386304.webp'],
  ['Battery & Cells', '637725251553531622_0original.webp'],
  ['Battery Charger & Supply', '637738868047470992_0original.webp'],
  ['Best Selling Products', '637719062517462748_0original.webp'],
  ['Bluetooth & WIFI', '637719056476325909_0original.webp'],
  ['Box & Panels'],
  ['Bulb & Lights'],
  ['Buttons, Switches & Headers', '637719067337707228_0original.webp'],
  ['Camera'],
  ['Camera Accessories', '637738877184303589_0original.webp'],
  ['Capacitor, Resistor, Inductor', '637720954032049322_0original.webp'],
  ['Car & Bike Electronics'],
  ['Car Electronics'],
  ['Chargers', '637739747598533828_0original.webp'],
  ['Clamp Meters', '637266974352005092_0original.webp'],
  ['CNC', '637739813685242528_0original.webp'],
  ['Commercial & Industrial'],
  ['Components'],
  ['Computer & Tablets'],
  ['Consumer Electronics', 'mini-router-ups-borad-40w-v2-6-battery-charger-board-11-1v_1_f75562cb-5a68-4b90-a175-ae9f020bc83b.webp'],
  ['Current Transformer', '637740575002786477_0original.webp'],
  ['DC Motor', '637739845587292890_0original.webp'],
  ['Development Boards', '554f4e0c-0471-4757-86e4-d22dbb360ce9.webp'],
  ['Displays', '637719060156412928_0original.webp'],
  ['DIY Robot Kits', '637745007403838528_0original.webp'],
  ['Earphones & Headphones', '637738826569975580_0original.webp'],
  ['Energy Meters', '637769902542729523_0original.webp'],
  ['ESP & IoT Boards', '637719054651092664_0original.webp'],
  ['GSM & GPS', '637720922124346490_0original.webp'],
  ['Hardware Tools', '637720871289664331_0original.webp'],
  ['Hi-Low Voltage Protectors', '637739794421440702_0original.webp'],
  ['Home Appliances'],
  ['Home page'],
  ['Industrial Components'],
  ['Industrial Displays', '637744912030477197_0original.webp'],
  ['Industrial Motors'],
  ['Industrial Robotics'],
  ['Instruments & Tools', 'fnirsi_dpos350p_4-in-1_350mhz_1gsps_tablet_oscilloscope_signal_generator_spectrum_analyzer_frequency_response_analyzer_multifunction_devices_eu.webp'],
  ['Junction Box', '637740540657843300_0original.webp'],
  ['Lab Equipments', 'fnirsi_dpos350p_4-in-1_350mhz_1gsps_tablet_oscilloscope_signal_generator_spectrum_analyzer_frequency_response_analyzer_multifunction_devices_eu.webp'],
  ['Laptop & Computer Accessories'],
  ['Laptop Charger & Computer Supply', '637738838843517586_0original.webp'],
  ['LCD Display', '637719060156412928_0original.webp'],
  ['LED Bulbs', '637738892767314886_0original.webp'],
  ['LED Display', '637744995426361381_0original.webp'],
  ['LEDs & IR', '637719089344884280_0original.webp'],
  ['Light', '637738874119708304_0original.webp'],
  ['Lights', '637719057641502315_0original.webp'],
  ['Measuring Tools', '637738723072478355_0original.webp'],
  ['Media Accessories'],
  ['Meters', '637725284463556813_0original.webp'],
  ['Microcontroller', '637745016783465012_0original.webp'],
  ['Mobile & Accessories', '637739744681486983_0original.webp'],
  ['Mobile Phone Accessories', '637739744681486983_0original.webp'],
  ['Motor Drivers', '637739808997784421_0original.webp'],
  ['Multimeters', '637266977077224930_0original.webp'],
  ['Networking'],
  ['Newest Products'],
  ['Oscilloscope', 'fnirsi-swm-10-portable-intelligent-color-screen-spot-welding-machinesoldering-assemblyfnirsifnirsi-2432172.webp'],
  ['Other Boards', '637719125412720732_0original.webp'],
  ['Other Components', '637719053824023095_0original.webp'],
  ['Other Lights', '637738830558783727_0original.webp'],
  ['Other Meters', '637725284463556813_0original.webp'],
  ['Other Modules', '637719130689593130_0original.webp'],
  ['Others', '637738077289385254_0original.webp'],
  ['PLC & Modules', '637740549193631519_0original.webp'],
  ['Power Supply', '637739856503241246_0original.webp'],
  ['Power Tools', 'fnirsi-swm-10-portable-intelligent-color-screen-spot-welding-machinesoldering-assemblyfnirsifnirsi-2432172.webp'],
  ['Product Box', '637739830608680494_0original.webp'],
  ['Programmers', '637738798186298850_0original.webp'],
  ['Protection Circuits'],
  ['Relays', '638363707051682885_0original.webp'],
  ['Relays & Connector', '637725270657274612_0original.webp'],
  ['RF Modules', '637719108145256409_0original.webp'],
  ['Robot Components', '637720906631150372_0original.webp'],
  ['Robot DIY Components', '637745046269891431_0original.webp'],
  ['Robotics'],
  ['Router', '637738861587531505_0original.webp'],
  ['Semiconductor Components & ICs', 'PIC16F883-Microcontroller-28-Pin-8-Bit-MCU-Best-Price-in-Pakistan.webp'],
  ['Semiconductor ICs', '637720956539554025_0original.webp'],
  ['Sensors', '637719059802644672_0original.webp'],
  ['Sensors & Actuators', '637740528811827062_0original.webp'],
  ['Servo Motor', '637739804882379033_0original.webp'],
  ['Signal Generator', '637729902617514555_0original.webp'],
  ['Soldering Tools', '637720871289664331_0original.webp'],
  ['Sound Systems'],
  ['Stepper Motor', '637739801777121423_0original.webp'],
  ['STM & Microchip', '554f4e0c-0471-4757-86e4-d22dbb360ce9.webp'],
  ['Temperature & Others', '638310999792842577_0original.webp'],
  ['Texas Instruments', '637744915476424294_0original.webp'],
  ['Tools', '637720871289664331_0original.webp'],
  ['Toy Motors', '637739785600219691_0original.webp'],
  ['Transformers', 'Transformer.webp'],
  ['Transistor', '637744130132978813_0original.webp'],
  ['UPS', '637739830168995345_0original.webp'],
  ['USB & Memory Cards', '637738847119720958_0original.webp'],
  ['Video Cameras', '637738882662346915_0original.webp'],
  ['Voltage Regulators', 'mini-router-ups-borad-40w-v2-6-battery-charger-board-11-1v_1_f75562cb-5a68-4b90-a175-ae9f020bc83b.webp'],
  ['Voltage transformer', '637739870141121288_0original.webp'],
  ['Wire, Cable & Sleeves', '637719062517462748_0original.webp']
];

const collectionImageBase = 'https://mreeco.com/cdn/shop/files/';
const collections = collectionSeeds.map(([name, image]) => ({
  name,
  image: image ? `${collectionImageBase}${image}` : placeholderCollectionImage
}));

products.forEach((product) => {
  product.description = `${product.name} is a reliable electronics component for prototyping, projects and repairs.`;
  product.priceValue = Number(product.price.replace(/[^0-9.]/g, ''));
});

window.mreecoProducts = products;

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('/api/products/');
    if (response.ok) {
      products = (await response.json()).products;
      products.forEach((product) => {
        product.description = `${product.name} is a reliable electronics component for prototyping, projects and repairs.`;
        product.priceValue = Number(product.price.replace(/[^0-9.]/g, ''));
      });
      window.mreecoProducts = products;
    }
  } catch (error) {
    // Keep the embedded catalog available when previewing the HTML directly.
  }

  const body = document.body;
  const searchOverlay = document.querySelector('[data-search-overlay]');
  const miniCart = document.querySelector('[data-mini-cart]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const searchInput = document.querySelector('[data-search-input]');
  const departmentToggle = document.querySelector('[data-department-toggle]');
  const departmentMenu = document.querySelector('[data-department-menu]');
  const cartStorageKey = 'mreeco-cart';
  const readCart = () => {
    try {
      const storedCart = JSON.parse(localStorage.getItem(cartStorageKey) || '[]');
      return Array.isArray(storedCart) ? storedCart : [];
    } catch (error) {
      return [];
    }
  };
  const saveCart = (cart) => localStorage.setItem(cartStorageKey, JSON.stringify(cart));
  const orderStorageKey = 'mreeco-orders';
  const readOrders = () => {
    try {
      const storedOrders = JSON.parse(localStorage.getItem(orderStorageKey) || '[]');
      return Array.isArray(storedOrders) ? storedOrders : [];
    } catch (error) {
      return [];
    }
  };
  const cartQuantity = (cart) => cart.reduce((total, item) => total + item.quantity, 0);
  const updateCartCount = () => {
    const quantity = cartQuantity(readCart());
    document.querySelectorAll('.cart-count').forEach((element) => {
      element.textContent = String(quantity);
      element.setAttribute('aria-label', `${quantity} items`);
    });
    document.querySelectorAll('[data-cart-open]').forEach((button) => button.setAttribute('aria-label', `Open cart, ${quantity} items`));
  };
  const addToCart = (product, quantity = 1) => {
    if (!product || !product.available) return false;
    const cart = readCart();
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) existingItem.quantity += quantity;
    else cart.push({ id: product.id, quantity });
    saveCart(cart);
    updateCartCount();
    return true;
  };
  const showCartToast = (message) => {
    document.querySelector('.cart-toast')?.remove();
    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.setAttribute('role', 'status');
    toast.textContent = message;
    document.body.append(toast);
    window.setTimeout(() => toast.remove(), 2600);
  };
  const renderCartPage = () => {
    const cartPage = document.querySelector('[data-cart-page]') || (document.title.startsWith('Cart') ? document.querySelector('.detail-page .site-container') : null);
    if (!cartPage) return;
    const cart = readCart();
    const items = cart.map((item) => ({ ...item, product: products.find((product) => product.id === item.id) })).filter((item) => item.product);
    if (!items.length) {
      cartPage.innerHTML = '<div class="empty-catalog"><h1>Your cart</h1><p>Your cart is empty.</p><a class="button button--dark" href="products.html">Shop products</a></div>';
      return;
    }
    const total = items.reduce((sum, item) => sum + item.product.priceValue * item.quantity, 0);
    cartPage.innerHTML = `<section class="cart-page__content"><h1>Your cart</h1><div class="cart-page__items">${items.map((item) => `<article class="cart-page__item"><img src="${item.product.image}" alt="${item.product.name}"><div><h2>${item.product.name}</h2><p>${item.quantity} × ${item.product.price}</p></div><strong>Rs ${(item.product.priceValue * item.quantity).toLocaleString('en-PK', { minimumFractionDigits: 2 })}</strong></article>`).join('')}</div><div class="cart-page__summary"><strong>Total: Rs ${total.toLocaleString('en-PK', { minimumFractionDigits: 2 })}</strong><a class="button button--dark" href="checkout.html">Proceed to checkout</a></div></section>`;
  };
  const renderCheckoutPage = () => {
    const checkoutPage = document.querySelector('[data-checkout-page]') || (document.title.startsWith('Checkout') ? document.querySelector('.detail-page .site-container') : null);
    if (!checkoutPage) return;
    const cart = readCart();
    const items = cart.map((item) => ({ ...item, product: products.find((product) => product.id === item.id) })).filter((item) => item.product);
    if (!items.length) {
      checkoutPage.innerHTML = '<div class="empty-catalog"><h1>Your cart is empty</h1><p>Add a product before checking out.</p><a class="button button--dark" href="products.html">Shop products</a></div>';
      return;
    }
    const total = items.reduce((sum, item) => sum + item.product.priceValue * item.quantity, 0);
    checkoutPage.innerHTML = `<section class="cart-page__content"><h1>Checkout</h1><div class="cart-page__items">${items.map((item) => `<p>${item.quantity} × ${item.product.name} <strong>Rs ${(item.product.priceValue * item.quantity).toLocaleString('en-PK', { minimumFractionDigits: 2 })}</strong></p>`).join('')}</div><p><strong>Total: Rs ${total.toLocaleString('en-PK', { minimumFractionDigits: 2 })}</strong></p><form class="checkout-form"><input required name="name" placeholder="Full name" aria-label="Full name"><input required name="email" type="email" placeholder="Email address" aria-label="Email address"><input required name="address" placeholder="Delivery address" aria-label="Delivery address"><label class="checkout-form__label" for="payment-method">Payment method</label><select id="payment-method" name="payment" required><option value="">Select payment method</option><option>Cash on delivery</option><option>Bank transfer</option><option>Card payment</option></select><div class="checkout-form__card" data-card-fields hidden><input name="card" inputmode="numeric" pattern="[0-9 ]{12,19}" placeholder="Card number" aria-label="Card number"><input name="expiry" placeholder="MM/YY" aria-label="Card expiry"><input name="cvc" inputmode="numeric" pattern="[0-9]{3,4}" placeholder="CVC" aria-label="Card security code"></div><button class="button button--dark" type="submit">Place order</button><p class="form-message" data-checkout-message></p></form></section>`;
    const form = checkoutPage.querySelector('form');
    const paymentMethod = form.querySelector('[name="payment"]');
    const cardFields = form.querySelector('[data-card-fields]');
    paymentMethod.addEventListener('change', () => { cardFields.hidden = paymentMethod.value !== 'Card payment'; cardFields.querySelectorAll('input').forEach((input) => { input.required = paymentMethod.value === 'Card payment'; }); });
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const order = { id: `MRE-${Date.now().toString().slice(-8)}`, date: new Date().toISOString(), payment: paymentMethod.value, total, items: items.map((item) => ({ id: item.product.id, name: item.product.name, quantity: item.quantity, total: item.product.priceValue * item.quantity })) };
      localStorage.setItem(orderStorageKey, JSON.stringify([order, ...readOrders()]));
      saveCart([]);
      updateCartCount();
      checkoutPage.querySelector('[data-checkout-message]').innerHTML = `Order ${order.id} placed successfully. <a href="order-history.html">View order history</a>`;
      form.reset();
      cardFields.hidden = true;
    });
  };
  const renderOrderHistory = () => {
    const historyPage = document.querySelector('[data-order-history]');
    if (!historyPage) return;
    const orders = readOrders();
    historyPage.innerHTML = orders.length ? `<section class="cart-page__content"><h1>Order history</h1><div class="order-history">${orders.map((order) => `<article class="order-history__item"><div><h2>Order ${order.id}</h2><p>${new Date(order.date).toLocaleString()} · ${order.payment}</p></div><strong>Rs ${order.total.toLocaleString('en-PK', { minimumFractionDigits: 2 })}</strong><ul>${order.items.map((item) => `<li>${item.quantity} × ${item.name}</li>`).join('')}</ul></article>`).join('')}</div></section>` : '<div class="empty-catalog"><h1>No orders yet</h1><p>Your completed orders will appear here.</p><a class="button button--dark" href="products.html">Shop products</a></div>';
  };

  const productCard = (product) => {
    const availability = product.available ? 'In stock' : 'Sold out';
    const action = product.available
      ? '<button class="button button--dark" type="button" data-stage-two-action="add">Add to cart</button>'
      : '<button class="button product-card__sold-out" type="button" disabled>Sold out</button>';
    return `<article class="product-card" data-product-id="${product.id}">
      <a class="product-card__image" href="product-details.html?id=${encodeURIComponent(product.id)}" aria-label="View ${product.name}">
        <img src="${product.image}" alt="Placeholder for ${product.name}">
        ${product.available ? '' : '<span class="product-card__status">Sold out</span>'}
      </a>
      <div class="product-card__body">
        <a class="product-card__title" href="product-details.html?id=${encodeURIComponent(product.id)}">${product.name}</a>
        <p class="product-card__price">${product.price}</p>
        <p class="product-card__availability${product.available ? '' : ' product-card__availability--sold-out'}">${availability}</p>
        <div class="product-card__actions">${action}<button class="product-card__quick-view" type="button" data-stage-two-action="quick-view" aria-label="Quick view ${product.name}">Quick view</button></div>
      </div>
    </article>`;
  };

  window.mreecoProductCard = productCard;

  document.querySelectorAll('[data-product-grid]').forEach((grid) => {
    const category = grid.dataset.productGrid;
    grid.innerHTML = products.filter((product) => product.category === category).map(productCard).join('');
  });

  const collectionGrid = document.querySelector('[data-collection-grid]');
  if (collectionGrid) {
    const featuredCollections = [
      ['Arduino', collections.find((collection) => collection.name === 'Arduino')?.image],
      ['Raspberry Pi', 'images/products/night-vision-pi-camera-1.png'],
      ['Sensors & Modules', 'images/products/t-call-esp32-1.png'],
      ['Accessories & Tools', collections.find((collection) => collection.name === 'Accessories & Tools')?.image],
      ['Capacitor, Resistor, Inductor', collections.find((collection) => collection.name === 'Capacitor, Resistor, Inductor')?.image],
      ['Displays', collections.find((collection) => collection.name === 'Displays')?.image]
    ].map(([name, image]) => ({ name, image }));
    collectionGrid.innerHTML = featuredCollections.map((collection) => `<a class="collection-card" href="products.html?category=${encodeURIComponent(collection.name)}">
      <span class="collection-card__visual"><img src="${collection.image}" alt="${collection.name} collection placeholder"></span>
      <span class="collection-card__name">${collection.name}</span>
    </a>`).join('');
  }

  const allCollectionsGrid = document.querySelector('[data-all-collections]');
  if (allCollectionsGrid) {
    const pagination = document.querySelector('[data-collections-pagination]');
    const pageSize = Math.ceil(collections.length / 3);
    const requestedPage = Number(new URLSearchParams(window.location.search).get('page')) || 1;
    const currentPage = Math.min(3, Math.max(1, requestedPage));
    const pageCollections = collections.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    allCollectionsGrid.innerHTML = pageCollections.map((collection) => `<a class="all-collection-card" href="products.html?category=${encodeURIComponent(collection.name)}">
      <span class="all-collection-card__image"><img src="${collection.image}" alt="${collection.name}"></span>
      <span class="all-collection-card__name">${collection.name}</span>
    </a>`).join('');
    if (pagination) {
      pagination.innerHTML = Array.from({ length: 3 }, (_, index) => {
        const page = index + 1;
        return `<a href="collections.html?page=${page}"${page === currentPage ? ' class="is-current" aria-current="page"' : ''}>${page}</a>`;
      }).join('');
    }
  }

  const setPanel = (panel, open) => {
    if (!panel) return;
    panel.classList.toggle('is-open', open);
    panel.setAttribute('aria-hidden', String(!open));
    body.classList.toggle('is-locked', Boolean(document.querySelector('.search-overlay.is-open, .mini-cart.is-open, .mobile-menu.is-open')));
  };

  document.querySelectorAll('[data-search-open]').forEach((button) => {
    button.addEventListener('click', () => {
      setPanel(searchOverlay, true);
      window.setTimeout(() => searchInput?.focus(), 100);
    });
  });
  document.querySelectorAll('[data-search-close]').forEach((button) => button.addEventListener('click', () => setPanel(searchOverlay, false)));
  document.querySelector('[data-search-clear]')?.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.focus();
    document.querySelector('[data-search-message]').textContent = 'Search field cleared.';
  });
  document.querySelector('[data-search-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query) window.location.href = `products.html?search=${encodeURIComponent(query)}`;
    else searchInput.focus();
  });

  document.querySelectorAll('[data-cart-open]').forEach((button) => button.addEventListener('click', () => setPanel(miniCart, true)));
  document.querySelectorAll('[data-cart-close]').forEach((button) => button.addEventListener('click', () => setPanel(miniCart, false)));
  document.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-stage-two-action="add"]');
    if (addButton) {
      const productId = addButton.closest('[data-product-id]')?.dataset.productId || quickView?.dataset.productId;
      const product = products.find((item) => item.id === productId);
      if (addToCart(product)) showCartToast(`${product.name} added to cart`);
      if (miniCart) setPanel(miniCart, true);
    }
  });
  document.querySelector('[data-menu-toggle]')?.addEventListener('click', () => setPanel(mobileMenu, true));
  document.querySelectorAll('[data-menu-close]').forEach((button) => button.addEventListener('click', () => setPanel(mobileMenu, false)));

  departmentToggle?.addEventListener('click', () => {
    const isOpen = departmentMenu.classList.toggle('is-open');
    departmentToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (departmentMenu && departmentToggle && !event.target.closest('.department-menu')) {
      departmentMenu.classList.remove('is-open');
      departmentToggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    setPanel(searchOverlay, false);
    setPanel(miniCart, false);
    setPanel(mobileMenu, false);
  });

  document.querySelector('[data-newsletter-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.querySelector('[data-newsletter-message]');
    message.textContent = 'Thanks — newsletter signup will be connected later.';
    event.currentTarget.reset();
  });

  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
  updateCartCount();
  renderCartPage();
  renderCheckoutPage();
  renderOrderHistory();

  const catalogGrid = document.querySelector('[data-catalog-grid]');
  if (catalogGrid) {
    const searchField = document.querySelector('[data-product-search]');
    const sortSelect = document.querySelector('[data-product-sort]');
    const count = document.querySelector('[data-product-count]');
    const total = document.querySelector('[data-product-total]');
    const noResults = document.querySelector('[data-no-products]');
    const catalogTitle = document.querySelector('[data-catalog-title]');
    const catalogBreadcrumb = document.querySelector('[data-catalog-breadcrumb]');
    const categoryContent = document.querySelector('[data-category-content]');
    const categorySelect = document.querySelector('[data-header-category]');
    const inStock = document.querySelector('[data-availability-filter="in"]');
    const outStock = document.querySelector('[data-availability-filter="out"]');
    const priceMin = document.querySelector('[data-price-min]');
    const priceMax = document.querySelector('[data-price-max]');
    let activeCategory = new URLSearchParams(window.location.search).get('category') || 'All';
    let searchTerm = new URLSearchParams(window.location.search).get('search') || '';
    if (!collections.some((item) => item.name === activeCategory)) activeCategory = 'All';
    searchField.value = searchTerm;
    categorySelect.value = activeCategory;
    document.querySelector('[data-in-stock-count]').textContent = `(${products.filter((product) => product.available).length})`;
    document.querySelector('[data-out-stock-count]').textContent = `(${products.filter((product) => !product.available).length})`;
    total.textContent = `${products.length} products`;

    const arduinoCategoryContent = `
      <a href="#arduino-overview" class="catalog-category-content__title">What is Arduino</a>
      <div id="arduino-overview">
        <p>Arduino is an open-source platform of electronics based on easy-to-use hardware and software. Arduino boards are able to read inputs. The Twitter message, A light on a sensor, or a finger on a button - and turn it into an output - trigger the motor, turn on the LEDs, publish online. Buy Arduino Board Products Online at a Cheap Price in Pakistan. Arduino boards like Arduino Uno R3, Arduino Nano, Arduino Mega, Arduino Pro Mini 3V, and 5V at the lowest price in all of Pakistan.</p>
        <p><a href="#microcontrollers">Microcontrollers</a> are integrated circuits that are essentially little computers. They can run small, simple software programs. They are low powered enough that they can be powered by a battery for quite a long time, but they are sufficiently quick to deal with information a lot quicker than any human being can think. Arduino is an organization in Italy that designs and sells circuit boards that make microcontrollers simple to utilize. They call these circuit boards Arduinos, and there are many kinds of Arduinos. For example, you have got simple Arduino boards like the Arduino Uno, which is cheap and good enough for most projects. You could utilize an Arduino Uno to control motors, lighting, cameras, or even build a simple robot. And then you have more fancy Arduinos with more powerful processors which have Wi-Fi, Ethernet and more. The company Arduino open sources all of their hardware designs, which means that you do not just have to buy from them, there are countless 3rd party companies that make their own variants of the Arduino hardware designs. They can not call them Arduinos, however practically they are exactly the same thing. There are also these things called Arduino 'shields', which are basically circuit boards that plug into your main Arduino circuit board, and let you accomplish more stuff. Mostly used query for arduino is arduino price in Pakistan.</p>
        <p id="microcontrollers">There is also the Arduino software development environment, and this is the thing that makes Arduino useful for beginners. Historically, if you needed to program microcontrollers, you did have to type out a lot of binary and memorize a lot of hard to remember registers and instructions. Arduino made software that works on Windows, Mac, and Linux, which makes uploading your code as simple as connecting a USB cable and clicking a button. They made a programming language that allows you configure all of the Arduino hardware products in the same way. Arduino programming is one of the easiest programming experiences you will ever have. Arduino UNOs use a series of microcontrollers called ATMEGA AVRs. The Uno has a built-in voltage regulator, reset button, TX and RX serial pins, and digital pins 2 to 13 for inputs and outputs. You can download the Arduino software from arduino.cc.</p>
        <p>Explore Mreeco.com and get the latest Arduino boards, Arduino UNO ethernet shields, Arduino Atmega328p, Arduino Leonardo, Arduino Lilypad, Arduino Due, Arduino Micro, Arduino Pro Micro, and other electronic components at affordable prices across Pakistan with cash on delivery and fast courier service.</p>
      </div>
      <h2>Why Arduino</h2>
      <ul><li>It can be programmed in C++ language.</li><li>It can deliver more current at 3.3V supply.</li><li>If the processor is damaged, it can be easily replaced.</li><li>The speed of communication with the computer is high.</li><li>It comes equipped with the ATmega328 microcontroller.</li><li>The Arduino Uno uses a USB chip that makes software installation easier.</li></ul>
      <h2>Why Kids Should Learn Arduino</h2>
      <ul><li>Arduino is an open-source platform for electronics prototyping.</li><li>It is flexible and easy to use.</li><li>Kids can quickly create interactive items for school projects.</li><li>This increases thinking and analytical skills.</li></ul>
      <h2>Features of Arduino</h2>
      <ul><li>It can be connected through the USB slot.</li><li>Arduino Uno has 32 KB of memory, 1 KB of EEPROM, and 2 KB of SRAM.</li><li>Arduino clock speed is 16 MHz.</li><li>The USB connector allows Arduino Uno to run directly with a PC.</li></ul>
    `;

    const collectionDescriptions = {
      Arduino: arduinoCategoryContent,
      'Raspberry Pi': `
        <a href="https://mreeco.com/" class="catalog-category-content__title">What is Raspberry Pi</a>
        <p><a href="https://www.mreeco.com/arduino-boards/raspberry-pi">Raspberry Pi</a> is a low-cost, small size computer like a pocket computer that plugs into a computer monitor or Television, and it uses a standard mouse and keyboard. It is a capable little device that enables people of all ages to search for computing and learn how to program in languages like Python and Scratch. Mostly used query for raspberry pi is <a href="https://www.mreeco.com/arduino-boards/raspberry-pi">raspberry pi price in Pakistan</a>.</p>
        <p id="raspberry-overview">Raspberry pi is the most popular single board computer on the market. It's a computer but on a single board at its core it is a complete computer with all the stuff typical computers have but with a very small footprint and like computers it needs an operating system which is usually a modified Linux version depending on the use case. You can control the PI either with its graphical user interface or via command line as well as over the network from another PC. So you do not need a display and keyboard permanently attached to the PI. It also has its own tiny storage space that it boots from. A micro SD card is all it needs for its operating system. It does have one feature that sets it apart from normal computers and which makes it very versatile. Its GPIO ports are physical pins on the board itself that are programmable. They can either send voltage to whatever is connected or even receive data through electrical impulses. A practical use would be checking sensor data or controlling a relay that starts or stops a motor. If you have never touched a Raspberry Pi before there are many free instructions online. Many of them are even useful to get a general impression of what is possible. You can use the PI as a basis for a smart mirror that shows you things like the weather forecast which appointments you have the news headlines feed from your surveillance cameras. If you are into smart homes you can host the server for that on your PI so all the information coming from the sensors will be stored there. All the actuators will be controlled via the PI and of course your single board computer will do all the little if-then-else magic for you. Or what about a small simple robot that can play xylophone other than that you can do some Network related stuff like said your own Rooter access point or an AZ or media center that contains all of your photos. You can build your own webcam or even night-vision cam that stores its data on the nares. There are plenty of use cases for an almost credit card size computer but it not for obviously heavy graphic work like video editing is a little too heavy on the performance side for a device like this. In general big operating systems with performance intensive software can also be problematic. If your requirement is a very low energy footprint like sending data from a sensor while running on a battery for a longer period of time the PI is not the best option. In this case a small Arduino or ESP board would probably fulfill this need way better. As a learning platform with an arguably low entry barrier the Raspberry Pi has dominated the market for computer education for years. It is a very good first touch point for many students that want to get coding and developing the pi is also great for prototyping new products and it is found its way into the houses of many tech geeks around the globe. Buy raspberry pi products online at the best price in Pakistan. raspberry pi like raspberry pi4 1GB, raspberry pi 4 4GB, raspberry pi 3 b+ 1GB, raspberry pi 4 2 GB, raspberry pi 3 1GB at lowest price in all over Pakistan</p>
        <p>Explore Mreeco.com, Get 2020 latest raspberry pi 2 512MB, raspberry pi 1, raspberry pi SD card, raspberry pi camera, raspberry pi zero, raspberry pi zero w, raspberry pi casing, raspberry pi A+, raspberry pi charger, raspberry pi LCD, raspberry pi HDMI Cable, raspberry pi heatsink, raspberry pi GPIO Extension board other electronic components at the lowest price in all over Pakistan with a fast courier, cash on delivery and Pakistan Post service across Pakistan. Buy at Mreeco.com which is among the top 5 bestselling websites in Pakistan for electronic accessories. Either you are a student doing raspberry or an Arduino project or you are an engineer working on IoT or industrial projects, Mreeco gives you full support providing your required <a href="https://www.mreeco.com/components">electronic components</a> and equipment at the best prices.</p>
        <h2>Why Engineers Choose Raspberry Pi?</h2>
        <p>Let's first try to understand why many engineers want to use raspberry pi to develop their products. There are various benefits of raspberry pi:</p>
        <ul><li>Low-Cost Price</li><li>Many interfaces (Ethernet, multiple USB, HDMI, onboard Wi-Fi and Bluetooth, many GPIOs, USB powered, etc.)</li><li>Raspberry Pi Python, Supports Linux (Making Ease of building applications)</li><li>Examples readily available with community support</li><li>It will cost a lot of money and effort to make such an embedded board</li></ul>
        <p>When you are making a hobby or a personal project, all the above points are good. But, if you are making industrial or commercial products, you have to think about many other important parameters before choosing any board ready to use.</p>
      `,
      'Sensors & Modules': `
        <h2>Arduino Sensors and Modules</h2>
        <p>Electronic devices detect and react to inputs from the physical surroundings. The input can be light, heat, motion, moisture, pressure, or another environmental condition. Sensors convert physical parameters such as temperature, speed, humidity, blood pressure, or distance into signals that can be measured electrically.</p>
        <p>Visit Mreeco.com to find sensor boards, gyroscopes, transducers, proximity sensors, IMU sensors, accelerometers, ultrasonic sensors, Hall-effect sensors, IR sensors, PIR sensors, LiDAR sensors, pressure transducers, LM35 sensors, magnetometers, oxygen sensors, humidity sensors, soil-moisture sensors, water-level sensors, vibration sensors, load cells, touch sensors, gas sensors, and more.</p>
      `,
      'Accessories & Tools': `
        <h2>Accessories &amp; Tools</h2>
        <p>Visit Mreeco.com and buy Accessories &amp; Tools products online at affordable prices in Pakistan. We serve Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Multan, Quetta, Faisalabad, and cities across Pakistan.</p>
        <p>Find the latest electronic accessories and tools with cash on delivery, fast courier, and Pakistan Post service. Whether you are a student preparing an Arduino or Raspberry Pi project or an engineer working on an IoT or industrial solution, we support your electronic components and accessory needs.</p>
      `,
      '3D Printer': `
        <h2>3D Printer</h2>
        <p>Explore 3D printers, printing materials, replacement parts, tools, and accessories for prototyping, product design, education, and creative projects. Find reliable 3D-printing equipment and components at affordable prices across Pakistan.</p>
        <p>Choose the parts and supplies you need for your next project, with delivery support for students, makers, engineers, and businesses.</p>
      `
    };

    const renderCatalog = () => {
      const sort = sortSelect.value;
      const min = Number(priceMin.value) || 0;
      const max = Number(priceMax.value) || Infinity;
      const shown = products.filter((product) => (activeCategory === 'All' || product.category === activeCategory) && product.name.toLowerCase().includes(searchTerm.toLowerCase()) && (!inStock.checked && !outStock.checked || inStock.checked && product.available || outStock.checked && !product.available) && product.priceValue >= min && product.priceValue <= max);
      shown.sort((a, b) => {
        if (sort === 'price-asc') return a.priceValue - b.priceValue;
        if (sort === 'price-desc') return b.priceValue - a.priceValue;
        if (sort === 'name-asc') return a.name.localeCompare(b.name);
        if (sort === 'name-desc') return b.name.localeCompare(a.name);
        return products.indexOf(a) - products.indexOf(b);
      });
      catalogTitle.textContent = activeCategory === 'All' ? 'All products' : activeCategory;
      catalogBreadcrumb.textContent = activeCategory === 'All' ? 'All products' : activeCategory;
      total.textContent = `${shown.length} products`;
      const description = collectionDescriptions[activeCategory];
      categoryContent.hidden = !description || Boolean(searchTerm);
      categoryContent.innerHTML = description && !searchTerm ? description : '';
      catalogGrid.innerHTML = shown.map(productCard).join('');
      count.textContent = shown.length ? `Showing 1 - ${shown.length} of ${shown.length} products` : 'Showing 0 products';
      noResults.hidden = shown.length !== 0;
    };

    document.querySelectorAll('[data-category-filter]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.categoryFilter === activeCategory);
      button.addEventListener('click', () => {
        activeCategory = button.dataset.categoryFilter;
        document.querySelectorAll('[data-category-filter]').forEach((item) => item.classList.toggle('is-active', item === button));
        const url = new URL(window.location.href);
        activeCategory === 'All' ? url.searchParams.delete('category') : url.searchParams.set('category', activeCategory);
        window.history.replaceState({}, '', url);
        renderCatalog();
      });
    });
    searchField.addEventListener('input', () => { searchTerm = searchField.value.trim(); renderCatalog(); });
    categorySelect.addEventListener('change', () => { activeCategory = categorySelect.value; renderCatalog(); });
    [inStock, outStock].forEach((input) => input.addEventListener('change', renderCatalog));
    document.querySelector('[data-price-apply]').addEventListener('click', renderCatalog);
    document.querySelector('.catalog-header-search')?.addEventListener('submit', (event) => event.preventDefault());
    sortSelect.addEventListener('change', renderCatalog);
    renderCatalog();
  }

  const quickView = document.querySelector('[data-quick-view]');
  const closeQuickView = () => setPanel(quickView, false);
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-stage-two-action="quick-view"]');
    if (!trigger || !quickView) return;
    const product = products.find((item) => item.id === trigger.closest('[data-product-id]').dataset.productId);
    if (!product) return;
    quickView.querySelector('[data-quick-image]').src = product.image;
    quickView.querySelector('[data-quick-image]').alt = `Placeholder for ${product.name}`;
    quickView.querySelector('[data-quick-name]').textContent = product.name;
    quickView.querySelector('[data-quick-price]').textContent = product.price;
    quickView.querySelector('[data-quick-availability]').textContent = product.available ? 'In stock' : 'Sold out';
    quickView.querySelector('[data-quick-description]').textContent = product.description;
    const action = quickView.querySelector('[data-quick-action]');
    action.disabled = !product.available;
    action.textContent = product.available ? 'Add to cart' : 'Sold out';
    quickView.dataset.productId = product.id;
    setPanel(quickView, true);
  });
  document.querySelectorAll('[data-quick-close]').forEach((button) => button.addEventListener('click', closeQuickView));

  const detail = document.querySelector('[data-product-detail]');
  if (detail) {
    const product = products.find((item) => item.id === new URLSearchParams(window.location.search).get('id'));
    if (!product) {
      detail.innerHTML = '<div class="empty-catalog"><h1>Product not found</h1><p>The requested product is not available.</p><a class="button button--dark" href="products.html">Browse products</a></div>';
    } else {
      const productImages = product.images || [product.image];
      detail.innerHTML = `
        <div class="product-render">
          <div class="product-render__media">
            <div class="product-render__thumbs">
              ${productImages.map((image, index) => `
                <button class="product-render__thumb${index === 0 ? ' is-active' : ''}" type="button" data-product-image="${image}" aria-label="View ${product.name} image ${index + 1}">
                  <img src="${image}" alt="${product.name} view ${index + 1}">
                </button>
              `).join('')}
            </div>
            <div class="product-render__main-image">
              <img src="${productImages[0]}" alt="${product.name}" data-product-main-image>
            </div>
          </div>

          <div class="product-render__info">
            <div class="product-render__meta">
              <span>SKU: ${product.id}</span>
              <div class="product-render__share" aria-label="Share product">
                <button type="button" aria-label="Share on Facebook">f</button>
                <button type="button" aria-label="Share on X">x</button>
                <button type="button" aria-label="Share on Pinterest">P</button>
                <button type="button" aria-label="Share via email">✉</button>
              </div>
            </div>

            <h1>${product.name}</h1>

            <div class="product-render__price-row">
              <span class="product-render__label">Price:</span>
              <span class="product-render__price">${product.price}</span>
            </div>

            <div class="product-render__stock-row">
              <span class="product-render__label">Stock:</span>
              <span class="product-render__stock${product.available ? '' : ' is-out'}">${product.available ? 'In stock' : 'Sold out'}</span>
            </div>

            <div class="product-render__qty-row">
              <span class="product-render__label">Quantity:</span>
              <div class="product-render__qty-box" aria-label="Quantity selector">
                <button type="button" data-qty-action="decrease" aria-label="Decrease quantity">−</button>
                <input type="text" value="1" inputmode="numeric" aria-label="Product quantity" data-product-quantity>
                <button type="button" data-qty-action="increase" aria-label="Increase quantity">+</button>
              </div>
            </div>

            <div class="product-render__actions">
              <button class="button button--primary" type="button" data-detail-action="add" ${product.available ? '' : 'disabled'}>${product.available ? 'Add to cart' : 'Sold out'}</button>
              <button class="button button--secondary" type="button" data-detail-action="buy" ${product.available ? '' : 'disabled'}>Buy now</button>
            </div>

            <div class="product-render__pickup">
              <span class="check">✓</span>
              <span>Pickup available at MREECO Electronics</span>
            </div>

            <a class="product-render__link" href="products.html">View store information</a>

          </div>
        </div>
        <div class="product-render__description">
          <div class="product-render__description-header">
            <h2>Description</h2>
          </div>
          <div class="product-render__description-body">
            ${product.id === 'arduino-uno-kit' ? `
              <p>There are three ways to power Arduino Uno: Arduino Uno, USB cable, or an external power supply.</p>
              <h3>Characteristics of Arduino Uno R3</h3>
              <ul>
                <li>Microcontroller ATmega328 DIP</li>
                <li>Operating voltage: 5V</li>
                <li>Input voltage: 7-12V recommended</li>
                <li>Digital I/O pins: 14</li>
                <li>Analog input pins: 6</li>
                <li>Flash memory: 32KB</li>
              </ul>
              <h3>Arduino Uno R3 pins</h3>
              <p>The pins on Arduino Uno serve as digital input/output pins. The board includes an integrated LED connected to digital pin 13.</p>
            ` : `<p>${product.description}</p>`}
          </div>
        </div>
      `;

      const quantityField = detail.querySelector('[data-product-quantity]');
      const mainImage = detail.querySelector('[data-product-main-image]');
      detail.querySelectorAll('[data-product-image]').forEach((thumbnail) => {
        thumbnail.addEventListener('click', () => {
          mainImage.src = thumbnail.dataset.productImage;
          detail.querySelectorAll('[data-product-image]').forEach((item) => item.classList.remove('is-active'));
          thumbnail.classList.add('is-active');
        });
      });
      detail.querySelectorAll('[data-qty-action]').forEach((button) => {
        button.addEventListener('click', () => {
          const delta = button.dataset.qtyAction === 'increase' ? 1 : -1;
          const value = Math.max(1, Number(quantityField.value || '1') + delta);
          quantityField.value = String(value);
        });
      });
      detail.querySelector('[data-detail-action="add"]')?.addEventListener('click', () => {
        if (addToCart(product, Math.max(1, Number(quantityField.value) || 1))) showCartToast(`${product.name} added to cart`);
      });
      detail.querySelector('[data-detail-action="buy"]')?.addEventListener('click', () => {
        addToCart(product, Math.max(1, Number(quantityField.value) || 1));
        window.location.href = 'checkout.html';
      });
    }
  }
});
