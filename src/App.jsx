import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Droplets,
  Sparkles,
  Wind,
  Gift,
  Calendar,
  FileText,
  Info,
  ShoppingBag,
  Phone,
  Instagram,
  MapPin,
  Menu,
  X,
  DollarSign,
  Award,
  Users,
  Wallet,
  Building2,
  Star,
  Crown,
  Mail,
  ChevronDown
} from 'lucide-react';

import Slideshow from './features/washwala/components/Slideshow';
import { navItems, pickupTimeSlots, promoCodes, servicePincodes } from './features/washwala/constants/appConfig';

// ========== MAIN APP COMPONENT ==========
function App() {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [serviceDirection, setServiceDirection] = useState(0);

  // Sidebar dropdown toggles (existing)
  const [showMensWear, setShowMensWear] = useState(false);
  const [showWomensWear, setShowWomensWear] = useState(false);
  const [showBlankets, setShowBlankets] = useState(false);
  const [showLaundryWashFold, setShowLaundryWashFold] = useState(false);
  const [showLaundrySteamIron, setShowLaundrySteamIron] = useState(false);
  const [showNormalWash, setShowNormalWash] = useState(false);
  const [showPremiumWash, setShowPremiumWash] = useState(false);
  const [showShoeTypes, setShowShoeTypes] = useState(false);

  // NEW: Modal dropdown toggles (separate from sidebar)
  const [showModalDryMens, setShowModalDryMens] = useState(false);
  const [showModalDryWomens, setShowModalDryWomens] = useState(false);
  const [showModalBedding, setShowModalBedding] = useState(false);
  const [showModalShoeNormal, setShowModalShoeNormal] = useState(false);
  const [showModalShoePremium, setShowModalShoePremium] = useState(false);
  const [showModalShoeTypes, setShowModalShoeTypes] = useState(false);

  // Quantity states for sidebar services (main) - we keep Premium Wash only, others will be handled via dropdowns
  const [premiumWashQty, setPremiumWashQty] = useState(0);
  // We still keep dryWashQty, laundryQty, shoeQty for backward compatibility? The user wants to remove them.
  // We'll set them to 0 and not use them. But to avoid errors, we'll keep them but not display.
  const [dryWashQty, setDryWashQty] = useState(0);
  const [laundryQty, setLaundryQty] = useState(0);
  const [shoeQty, setShoeQty] = useState(0);

  // Dry Wash - Men's Wear (existing)
  const [shirtTshirtQty, setShirtTshirtQty] = useState(0);
  const [formalJeansQty, setFormalJeansQty] = useState(0);
  const [coatQty, setCoatQty] = useState(0);
  const [suit2PieceQty, setSuit2PieceQty] = useState(0);
  const [suit3PieceQty, setSuit3PieceQty] = useState(0);
  const [jacketQty, setJacketQty] = useState(0);

  // Dry Wash - Women's Wear (new)
  const [kurtaQty, setKurtaQty] = useState(0);
  const [salwarQty, setSalwarQty] = useState(0);
  const [sareeQty, setSareeQty] = useState(0);
  const [dressQty, setDressQty] = useState(0);
  const [westernQty, setWesternQty] = useState(0);

  // Dry Wash - Blankets (new)
  const [bigBlanketsQty, setBigBlanketsQty] = useState(0);
  const [smallBlanketsQty, setSmallBlanketsQty] = useState(0);
  const [bedsheetsQty, setBedsheetsQty] = useState(0);
  const [carpetsQty, setCarpetsQty] = useState(0);
  const [curtainsQty, setCurtainsQty] = useState(0);

  // Laundry dropdowns (new)
  const [laundryWashFoldQty, setLaundryWashFoldQty] = useState(0);
  const [laundrySteamIronQty, setLaundrySteamIronQty] = useState(0);

  // Shoe Cleaning dropdowns (new)
  const [normalWashQty, setNormalWashQty] = useState(0);
  const [premiumShoeWashQty, setPremiumShoeWashQty] = useState(0);
  const [sportsShoeSingleQty, setSportsShoeSingleQty] = useState(0);
  const [sportsShoePairQty, setSportsShoePairQty] = useState(0);
  const [formalShoeSingleQty, setFormalShoeSingleQty] = useState(0);
  const [formalShoePairQty, setFormalShoePairQty] = useState(0);
  const [casualShoeSingleQty, setCasualShoeSingleQty] = useState(0);
  const [casualShoePairQty, setCasualShoePairQty] = useState(0);
  const [leatherShoeSingleQty, setLeatherShoeSingleQty] = useState(0);
  const [leatherShoePairQty, setLeatherShoePairQty] = useState(0);
  const [bootsQty, setBootsQty] = useState(0);

  // Quantity states for main grid services (unchanged)
  const [washFoldQty, setWashFoldQty] = useState(0);
  const [steamPressQty, setSteamPressQty] = useState(0);
  const [beddingQty, setBeddingQty] = useState(0);
  const [dryCleaningQty, setDryCleaningQty] = useState(0);
  const [shoeCleaningQty, setShoeCleaningQty] = useState(0);

  // Wash and Steam Iron in checkout modal (kept separate)
  const [washSteamIronQty, setWashSteamIronQty] = useState(0);

  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [customerForm, setCustomerForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    pincode: '',
    city: ''
  });
  const [orderConfirmationOpen, setOrderConfirmationOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [attachedPhotos, setAttachedPhotos] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [pincodeValid, setPincodeValid] = useState(null);
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  const [scrollY, setScrollY] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showPoweredBy = scrollY < 100 && !leftSidebarOpen && !rightSidebarOpen && !cartModalOpen && !checkoutModalOpen && !orderConfirmationOpen;

  // Total cart items - include all new quantities
  const totalCartItems = 
    // Premium Wash (main)
    premiumWashQty +
    // Dry Wash - Men's Wear
    shirtTshirtQty + formalJeansQty + coatQty + suit2PieceQty + suit3PieceQty + jacketQty +
    // Dry Wash - Women's Wear
    kurtaQty + salwarQty + sareeQty + dressQty + westernQty +
    // Dry Wash - Blankets
    bigBlanketsQty + smallBlanketsQty + bedsheetsQty + carpetsQty + curtainsQty +
    // Laundry dropdowns
    laundryWashFoldQty + laundrySteamIronQty +
    // Shoe Cleaning dropdowns
    normalWashQty + premiumShoeWashQty +
    sportsShoeSingleQty + sportsShoePairQty +
    formalShoeSingleQty + formalShoePairQty +
    casualShoeSingleQty + casualShoePairQty +
    leatherShoeSingleQty + leatherShoePairQty +
    bootsQty +
    // Main grid services
    washFoldQty + steamPressQty + beddingQty + dryCleaningQty + shoeCleaningQty +
    // Wash and Steam Iron (checkout modal)
    washSteamIronQty;

  // Main grid services (unchanged)
  const services = [
    {
      name: 'Wash & Fold',
      icon: Droplets,
      price: '₹49',
      description: 'Professional washing and folding service',
      popular: true,
      unit: 'per kg',
      qty: washFoldQty,
      setQty: setWashFoldQty
    },
    {
      name: 'Steam Press',
      icon: Wind,
      price: '₹79',
      description: 'Crisp and wrinkle-free pressing clothes',
      popular: false,
      unit: 'per kg',
      qty: steamPressQty,
      setQty: setSteamPressQty
    },
    {
      name: 'Bedding',
      icon: ShoppingBag,
      price: '₹129',
      description: 'Deep cleaning for bed sheets and covers',
      popular: false,
      unit: 'per item',
      qty: beddingQty,
      setQty: setBeddingQty
    },
    {
      name: 'Dry Cleaning',
      icon: Sparkles,
      price: 'Starts from ₹39',
      description: 'Premium dry cleaning for delicate fabrics',
      popular: true,
      unit: 'per kg',
      qty: dryCleaningQty,
      setQty: setDryCleaningQty
    },
    {
      name: 'Shoe Cleaning',
      icon: Wind,
      price: '₹125',
      description: 'Professional cleaning for shoes and sneakers',
      popular: true,
      unit: 'per pair',
      qty: shoeCleaningQty,
      setQty: setShoeCleaningQty
    }
  ];

  const calculatePrice = () => {
    let total = 0;
    // Premium Wash
    total += premiumWashQty * 199;
    // Dry Wash - Men's Wear
    total += shirtTshirtQty * 39;
    total += formalJeansQty * 44;
    total += coatQty * 149;
    total += suit2PieceQty * 249;
    total += suit3PieceQty * 299;
    total += jacketQty * 99;
    // Dry Wash - Women's Wear
    total += kurtaQty * 75;
    total += salwarQty * 75;
    total += sareeQty * 159;
    total += dressQty * 110;
    total += westernQty * 99;
    // Dry Wash - Blankets
    total += bigBlanketsQty * 225;
    total += smallBlanketsQty * 199;
    total += bedsheetsQty * 129;
    total += carpetsQty * 24;      // per sq ft, treat as per item
    total += curtainsQty * 120;    // per pair
    // Laundry dropdowns
    total += laundryWashFoldQty * 49;
    total += laundrySteamIronQty * 79;
    // Shoe Cleaning dropdowns
    total += normalWashQty * 125;
    total += premiumShoeWashQty * 210;
    total += sportsShoeSingleQty * 149;
    total += sportsShoePairQty * 210;
    total += formalShoeSingleQty * 149;
    total += formalShoePairQty * 210;
    total += casualShoeSingleQty * 149;
    total += casualShoePairQty * 210;
    total += leatherShoeSingleQty * 249;
    total += leatherShoePairQty * 349;
    total += bootsQty * 299;
    // Main grid services
    total += washFoldQty * 49;
    total += steamPressQty * 79;
    total += beddingQty * 129;
    total += dryCleaningQty * 39;
    total += shoeCleaningQty * 125;
    // Wash and Steam Iron (checkout modal)
    total += washSteamIronQty * 79;
    return total;
  };

  const subtotal = calculatePrice();
  const discountAmount = discount;
  const finalTotal = Math.max(0, subtotal - discountAmount + deliveryCharge);

  const validatePincode = (pincode) => {
    if (servicePincodes.includes(pincode)) {
      setPincodeValid(true);
      setDeliveryCharge(0);
      return true;
    } else if (pincode.startsWith('570')) {
      setPincodeValid(true);
      setDeliveryCharge(50);
      return true;
    } else {
      setPincodeValid(false);
      setDeliveryCharge(0);
      return false;
    }
  };

  const applyPromoCode = () => {
    const code = promoCode.toUpperCase();
    if (promoCodes[code]) {
      setDiscount(promoCodes[code].discount);
      alert(`Promo code applied! You saved ₹${promoCodes[code].discount}`);
    } else {
      alert('Invalid promo code');
      setDiscount(0);
    }
  };

  const generateOrderId = () => `MW${Date.now()}${Math.floor(Math.random() * 1000)}`;

  const getMinPickupDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const handleCheckout = async () => {
    // Validate form
    if (!customerForm.name || !customerForm.phone || !customerForm.email || !customerForm.address) {
      alert('Please fill all required fields!');
      return;
    }
    if (!pickupDate || !pickupTime) {
      alert('Please select pickup date and time!');
      return;
    }
    if (customerForm.pincode && pincodeValid === false) {
      alert('Sorry, we do not service this area yet. Please contact us for details.');
      return;
    }

    const orderId = generateOrderId();
    const orderItems = [];
    const itemDetails = [];

    // Premium Wash
    if (premiumWashQty > 0) {
      orderItems.push(`Premium Wash x${premiumWashQty} - ₹${premiumWashQty * 199}`);
      itemDetails.push({ name: 'Premium Wash', qty: premiumWashQty, price: 199, total: premiumWashQty * 199 });
    }

    // Dry Wash - Men's Wear
    if (shirtTshirtQty > 0) {
      orderItems.push(`Shirt/Tshirt x${shirtTshirtQty} - ₹${shirtTshirtQty * 39}`);
      itemDetails.push({ name: 'Shirt/Tshirt', qty: shirtTshirtQty, price: 39, total: shirtTshirtQty * 39 });
    }
    if (formalJeansQty > 0) {
      orderItems.push(`Formal/Jeans x${formalJeansQty} - ₹${formalJeansQty * 44}`);
      itemDetails.push({ name: 'Formal/Jeans', qty: formalJeansQty, price: 44, total: formalJeansQty * 44 });
    }
    if (coatQty > 0) {
      orderItems.push(`Coat x${coatQty} - ₹${coatQty * 149}`);
      itemDetails.push({ name: 'Coat', qty: coatQty, price: 149, total: coatQty * 149 });
    }
    if (suit2PieceQty > 0) {
      orderItems.push(`Suit (2 piece) x${suit2PieceQty} - ₹${suit2PieceQty * 249}`);
      itemDetails.push({ name: 'Suit (2 piece)', qty: suit2PieceQty, price: 249, total: suit2PieceQty * 249 });
    }
    if (suit3PieceQty > 0) {
      orderItems.push(`Suit (3 piece) x${suit3PieceQty} - ₹${suit3PieceQty * 299}`);
      itemDetails.push({ name: 'Suit (3 piece)', qty: suit3PieceQty, price: 299, total: suit3PieceQty * 299 });
    }
    if (jacketQty > 0) {
      orderItems.push(`Jacket x${jacketQty} - ₹${jacketQty * 99}`);
      itemDetails.push({ name: 'Jacket', qty: jacketQty, price: 99, total: jacketQty * 99 });
    }

    // Dry Wash - Women's Wear
    if (kurtaQty > 0) {
      orderItems.push(`Kurta x${kurtaQty} - ₹${kurtaQty * 75}`);
      itemDetails.push({ name: 'Kurta', qty: kurtaQty, price: 75, total: kurtaQty * 75 });
    }
    if (salwarQty > 0) {
      orderItems.push(`Salwar x${salwarQty} - ₹${salwarQty * 75}`);
      itemDetails.push({ name: 'Salwar', qty: salwarQty, price: 75, total: salwarQty * 75 });
    }
    if (sareeQty > 0) {
      orderItems.push(`Saree x${sareeQty} - ₹${sareeQty * 159}`);
      itemDetails.push({ name: 'Saree', qty: sareeQty, price: 159, total: sareeQty * 159 });
    }
    if (dressQty > 0) {
      orderItems.push(`Dress x${dressQty} - ₹${dressQty * 110}`);
      itemDetails.push({ name: 'Dress', qty: dressQty, price: 110, total: dressQty * 110 });
    }
    if (westernQty > 0) {
      orderItems.push(`Western x${westernQty} - ₹${westernQty * 99}`);
      itemDetails.push({ name: 'Western', qty: westernQty, price: 99, total: westernQty * 99 });
    }

    // Dry Wash - Blankets
    if (bigBlanketsQty > 0) {
      orderItems.push(`Big Blankets x${bigBlanketsQty} - ₹${bigBlanketsQty * 225}`);
      itemDetails.push({ name: 'Big Blankets', qty: bigBlanketsQty, price: 225, total: bigBlanketsQty * 225 });
    }
    if (smallBlanketsQty > 0) {
      orderItems.push(`Small Blankets x${smallBlanketsQty} - ₹${smallBlanketsQty * 199}`);
      itemDetails.push({ name: 'Small Blankets', qty: smallBlanketsQty, price: 199, total: smallBlanketsQty * 199 });
    }
    if (bedsheetsQty > 0) {
      orderItems.push(`Bedsheets x${bedsheetsQty} - ₹${bedsheetsQty * 129}`);
      itemDetails.push({ name: 'Bedsheets', qty: bedsheetsQty, price: 129, total: bedsheetsQty * 129 });
    }
    if (carpetsQty > 0) {
      orderItems.push(`Carpets x${carpetsQty} - ₹${carpetsQty * 24}`);
      itemDetails.push({ name: 'Carpets', qty: carpetsQty, price: 24, total: carpetsQty * 24 });
    }
    if (curtainsQty > 0) {
      orderItems.push(`Curtains x${curtainsQty} - ₹${curtainsQty * 120}`);
      itemDetails.push({ name: 'Curtains', qty: curtainsQty, price: 120, total: curtainsQty * 120 });
    }

    // Laundry dropdowns
    if (laundryWashFoldQty > 0) {
      orderItems.push(`Laundry Wash & Fold x${laundryWashFoldQty} - ₹${laundryWashFoldQty * 49}`);
      itemDetails.push({ name: 'Laundry Wash & Fold', qty: laundryWashFoldQty, price: 49, total: laundryWashFoldQty * 49 });
    }
    if (laundrySteamIronQty > 0) {
      orderItems.push(`Laundry Wash & Steam Iron x${laundrySteamIronQty} - ₹${laundrySteamIronQty * 79}`);
      itemDetails.push({ name: 'Laundry Wash & Steam Iron', qty: laundrySteamIronQty, price: 79, total: laundrySteamIronQty * 79 });
    }

    // Shoe Cleaning dropdowns
    if (normalWashQty > 0) {
      orderItems.push(`Normal Wash x${normalWashQty} - ₹${normalWashQty * 125}`);
      itemDetails.push({ name: 'Normal Wash', qty: normalWashQty, price: 125, total: normalWashQty * 125 });
    }
    if (premiumShoeWashQty > 0) {
      orderItems.push(`Premium Wash x${premiumShoeWashQty} - ₹${premiumShoeWashQty * 210}`);
      itemDetails.push({ name: 'Premium Wash', qty: premiumShoeWashQty, price: 210, total: premiumShoeWashQty * 210 });
    }
    if (sportsShoeSingleQty > 0) {
      orderItems.push(`Sports Shoes (Single) x${sportsShoeSingleQty} - ₹${sportsShoeSingleQty * 149}`);
      itemDetails.push({ name: 'Sports Shoes (Single)', qty: sportsShoeSingleQty, price: 149, total: sportsShoeSingleQty * 149 });
    }
    if (sportsShoePairQty > 0) {
      orderItems.push(`Sports Shoes (Pair) x${sportsShoePairQty} - ₹${sportsShoePairQty * 210}`);
      itemDetails.push({ name: 'Sports Shoes (Pair)', qty: sportsShoePairQty, price: 210, total: sportsShoePairQty * 210 });
    }
    if (formalShoeSingleQty > 0) {
      orderItems.push(`Formal Shoes (Single) x${formalShoeSingleQty} - ₹${formalShoeSingleQty * 149}`);
      itemDetails.push({ name: 'Formal Shoes (Single)', qty: formalShoeSingleQty, price: 149, total: formalShoeSingleQty * 149 });
    }
    if (formalShoePairQty > 0) {
      orderItems.push(`Formal Shoes (Pair) x${formalShoePairQty} - ₹${formalShoePairQty * 210}`);
      itemDetails.push({ name: 'Formal Shoes (Pair)', qty: formalShoePairQty, price: 210, total: formalShoePairQty * 210 });
    }
    if (casualShoeSingleQty > 0) {
      orderItems.push(`Casual Shoes (Single) x${casualShoeSingleQty} - ₹${casualShoeSingleQty * 149}`);
      itemDetails.push({ name: 'Casual Shoes (Single)', qty: casualShoeSingleQty, price: 149, total: casualShoeSingleQty * 149 });
    }
    if (casualShoePairQty > 0) {
      orderItems.push(`Casual Shoes (Pair) x${casualShoePairQty} - ₹${casualShoePairQty * 210}`);
      itemDetails.push({ name: 'Casual Shoes (Pair)', qty: casualShoePairQty, price: 210, total: casualShoePairQty * 210 });
    }
    if (leatherShoeSingleQty > 0) {
      orderItems.push(`Leather Shoes (Single) x${leatherShoeSingleQty} - ₹${leatherShoeSingleQty * 249}`);
      itemDetails.push({ name: 'Leather Shoes (Single)', qty: leatherShoeSingleQty, price: 249, total: leatherShoeSingleQty * 249 });
    }
    if (leatherShoePairQty > 0) {
      orderItems.push(`Leather Shoes (Pair) x${leatherShoePairQty} - ₹${leatherShoePairQty * 349}`);
      itemDetails.push({ name: 'Leather Shoes (Pair)', qty: leatherShoePairQty, price: 349, total: leatherShoePairQty * 349 });
    }
    if (bootsQty > 0) {
      orderItems.push(`Boots x${bootsQty} - ₹${bootsQty * 299}`);
      itemDetails.push({ name: 'Boots', qty: bootsQty, price: 299, total: bootsQty * 299 });
    }

    // Main grid services
    if (washFoldQty > 0) {
      orderItems.push(`Wash & Fold x${washFoldQty} - ₹${washFoldQty * 49}`);
      itemDetails.push({ name: 'Wash & Fold', qty: washFoldQty, price: 49, total: washFoldQty * 49 });
    }
    if (steamPressQty > 0) {
      orderItems.push(`Steam Press x${steamPressQty} - ₹${steamPressQty * 79}`);
      itemDetails.push({ name: 'Steam Press', qty: steamPressQty, price: 79, total: steamPressQty * 79 });
    }
    if (beddingQty > 0) {
      orderItems.push(`Bedding x${beddingQty} - ₹${beddingQty * 129}`);
      itemDetails.push({ name: 'Bedding', qty: beddingQty, price: 129, total: beddingQty * 129 });
    }
    if (dryCleaningQty > 0) {
      orderItems.push(`Dry Cleaning x${dryCleaningQty} - ₹${dryCleaningQty * 39}`);
      itemDetails.push({ name: 'Dry Cleaning', qty: dryCleaningQty, price: 39, total: dryCleaningQty * 39 });
    }
    if (shoeCleaningQty > 0) {
      orderItems.push(`Shoe Cleaning x${shoeCleaningQty} - ₹${shoeCleaningQty * 125}`);
      itemDetails.push({ name: 'Shoe Cleaning', qty: shoeCleaningQty, price: 125, total: shoeCleaningQty * 125 });
    }

    // Wash and Steam Iron (checkout modal)
    if (washSteamIronQty > 0) {
      orderItems.push(`Wash and Steam Iron x${washSteamIronQty} - ₹${washSteamIronQty * 79}`);
      itemDetails.push({ name: 'Wash and Steam Iron', qty: washSteamIronQty, price: 79, total: washSteamIronQty * 79 });
    }

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const orderMessage = `
  NEW ORDER FROM MR.WASHWALA

Order ID: ${orderId}
Order Time: ${timestamp}

  Customer Details:
Name: ${customerForm.name}
Phone: ${customerForm.phone}
Email: ${customerForm.email}
Address: ${customerForm.address}
${customerForm.city ? `City: ${customerForm.city}` : ''}

  Schedule:
Pickup Date: ${pickupDate}
Pickup Time: ${pickupTime}
${deliveryDate ? `Delivery Date: ${deliveryDate}` : ''}

  Order Details:
${orderItems.join('\n')}

Total Items: ${totalCartItems}
${subtotal > 0 ? `Subtotal: ₹${subtotal}` : ''}
${discount > 0 ? `Discount: -₹${discount}` : ''}
${deliveryCharge > 0 ? `Delivery Charge: ₹${deliveryCharge}` : ''}
${subtotal > 0 ? `Total Amount: ₹${finalTotal}` : 'Price: To be quoted'}

${promoCode ? `Promo Code Used: ${promoCode}` : ''}
    `;

    try {
      const formData = new FormData();
      formData.append('_subject', 'New Order - Mr.WashWala');
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');
      formData.append('Customer Name', customerForm.name);
      formData.append('Phone', customerForm.phone);
      formData.append('Email', customerForm.email);
      formData.append('Address', customerForm.address);
      formData.append('City', customerForm.city || 'N/A');
      formData.append('Pincode', customerForm.pincode || 'N/A');
      formData.append('Order Items', orderItems.join(', '));
      formData.append('Total Items', totalCartItems);
      formData.append('Order Time', timestamp);
      formData.append('Order ID', orderId);
      formData.append('Pickup Date', pickupDate);
      formData.append('Pickup Time', pickupTime);
      formData.append('Delivery Date', deliveryDate || 'TBD');
      formData.append('Special Instructions', specialInstructions || 'None');
      formData.append('Promo Code', promoCode || 'None');
      formData.append('Subtotal', subtotal > 0 ? `₹${subtotal}` : 'Quote based');
      formData.append('Discount', discount > 0 ? `₹${discount}` : '₹0');
      formData.append('Delivery Charge', deliveryCharge > 0 ? `₹${deliveryCharge}` : 'Free');
      formData.append('Final Total', subtotal > 0 ? `₹${finalTotal}` : 'Quote based');
      formData.append('Message', orderMessage);

      const response = await fetch('https://formsubmit.co/mrwashwala@gmail.com', { method: 'POST', body: formData });

      if (response.ok) {
        const orderConfirmation = {
          orderId,
          timestamp,
          customer: customerForm,
          items: itemDetails,
          schedule: { pickupDate, pickupTime, deliveryDate },
          pricing: { subtotal, discount, deliveryCharge, total: finalTotal },
          specialInstructions,
          promoCode
        };
        setConfirmedOrder(orderConfirmation);
        setCheckoutModalOpen(false);
        setOrderConfirmationOpen(true);
        setCustomerForm({ name: '', phone: '', email: '', address: '', pincode: '', city: '' });
        // Reset all quantities
        setPremiumWashQty(0);
        setShirtTshirtQty(0); setFormalJeansQty(0); setCoatQty(0); setSuit2PieceQty(0); setSuit3PieceQty(0); setJacketQty(0);
        setKurtaQty(0); setSalwarQty(0); setSareeQty(0); setDressQty(0); setWesternQty(0);
        setBigBlanketsQty(0); setSmallBlanketsQty(0); setBedsheetsQty(0); setCarpetsQty(0); setCurtainsQty(0);
        setLaundryWashFoldQty(0); setLaundrySteamIronQty(0);
        setNormalWashQty(0); setPremiumShoeWashQty(0);
        setSportsShoeSingleQty(0); setSportsShoePairQty(0);
        setFormalShoeSingleQty(0); setFormalShoePairQty(0);
        setCasualShoeSingleQty(0); setCasualShoePairQty(0);
        setLeatherShoeSingleQty(0); setLeatherShoePairQty(0);
        setBootsQty(0);
        setWashFoldQty(0); setSteamPressQty(0); setBeddingQty(0); setDryCleaningQty(0); setShoeCleaningQty(0);
        setWashSteamIronQty(0);
        setPickupDate(''); setPickupTime(''); setDeliveryDate(''); setSpecialInstructions('');
        setAttachedPhotos([]); setPromoCode(''); setDiscount(0); setPincodeValid(null); setDeliveryCharge(0);
      } else {
        throw new Error('Failed to submit order');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('There was an error submitting your order. Please try again or contact us directly.');
    }
  };

  const printReceipt = () => window.print();

  // Helper to render quantity controls for sidebar (only for Premium Wash now)
  const renderQuantityControl = (itemName) => {
    if (selectedService !== itemName) return null;
    switch(itemName) {
      case 'Premium Wash':
        return (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center justify-between mt-2 text-white px-1"
          >
            <span className="text-sm">kg (₹199):</span>
            <div className="flex items-center gap-3">
              <button onClick={(e) => { e.stopPropagation(); setPremiumWashQty(Math.max(0, premiumWashQty - 1)); }} className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-lg font-bold transition-colors">–</button>
              <span className="w-6 text-center font-medium">{premiumWashQty}</span>
              <button onClick={(e) => { e.stopPropagation(); setPremiumWashQty(premiumWashQty + 1); }} className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-lg font-bold transition-colors">+</button>
            </div>
          </motion.div>
        );
      default: return null;
    }
  };

  // Simple services for the checkout modal (removed Steam Press, Dry Cleaning, Bedding, Shoe Cleaning)
  const simpleServicesForModal = [
    { name: 'Wash & Fold', icon: Droplets, price: '₹49/kg', description: 'Professional washing and folding', unit: 'kg', qty: washFoldQty, setQty: setWashFoldQty, color: 'from-blue-500 to-cyan-500' },
    { name: 'Wash and Steam Iron', icon: Wind, price: '₹79/kg', description: 'Wash followed by steam iron', unit: 'kg', qty: washSteamIronQty, setQty: setWashSteamIronQty, color: 'from-indigo-500 to-blue-500' }
  ];

  // Franchise options (unchanged)
  const franchiseOptions = [
    {
      title: 'Investment Terms',
      icon: DollarSign,
      items: ['Minimum Investment: ₹5 Lakhs', 'ROI: 18-24 months', 'Revenue Share: 70-30 Model']
    },
    {
      title: 'Franchise Models',
      icon: Building2,
      items: ['Express Kiosk: ₹5-8 Lakhs', 'Standard Outlet: ₹12-15 Lakhs', 'Premium Center: ₹20-25 Lakhs']
    },
    {
      title: 'Support Included',
      icon: Award,
      items: ['Complete Training', 'Marketing Support', '24/7 Technical Assistance']
    },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Menu Button - Left Sidebar */}
      {!leftSidebarOpen && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
          className="fixed top-6 left-6 z-50 p-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl shadow-lg"
          animate={{
            boxShadow: leftSidebarOpen
              ? "0 0 30px rgba(6, 182, 212, 0.6)"
              : ["0 10px 15px -3px rgba(0, 0, 0, 0.1)", "0 0 25px rgba(6, 182, 212, 0.3)", "0 10px 15px -3px rgba(0, 0, 0, 0.1)"]
          }}
          transition={{
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <motion.div animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
            <Menu size={24} />
          </motion.div>
        </motion.button>
      )}

      {/* Overlay for sidebars */}
      <AnimatePresence>
        {(leftSidebarOpen || rightSidebarOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { setLeftSidebarOpen(false); setRightSidebarOpen(false); }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-30"
          />
        )}
      </AnimatePresence>

      {/* Left Sidebar - Navigation (unchanged, already updated in previous version) */}
      <AnimatePresence>
        {leftSidebarOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-screen w-80 sm:w-96 glass-dark p-6 overflow-y-auto z-40 shadow-2xl"
          >
            {/* Logo with Close Button */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">Mr.<span className="text-cyan-400">WashWala</span></h1>
                  <p className="text-blue-200 text-sm">Premium Laundry Services</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setLeftSidebarOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="text-white" size={24} />
                </motion.button>
              </div>
            </div>

            {/* Navigation Items with dropdowns (already updated) */}
            <div className="space-y-4 mb-12">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div 
                    onClick={() => setSelectedService(selectedService === item.name ? null : item.name)}
                    className={`bg-gradient-to-r ${item.color} p-[2px] rounded-xl cursor-pointer group`}
                  >
                    <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-xl flex items-center gap-3 group-hover:bg-slate-900/60 transition-all">
                      <item.icon className="text-white" size={24} />
                      <span className="text-white font-medium flex-1">{item.name}</span>
                      {item.badge && (
                        <span className="text-xs bg-yellow-500 text-slate-900 px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                          <Crown size={12} />
                          {item.badge}
                        </span>
                      )}
                      <ChevronRight className="text-white/60" size={20} />
                    </div>
                  </div>

                  {/* Quantity control only for Premium Wash */}
                  {item.name === 'Premium Wash' && renderQuantityControl(item.name)}

                  {/* Dry Wash dropdowns (existing) */}
                  {item.name === 'Dry Wash' && (
                    <div className="mt-2 ml-4 space-y-2">
                      {/* Men's Wear */}
                      <div>
                        <button
                          onClick={() => setShowMensWear(!showMensWear)}
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          <ChevronDown size={16} className={`transform transition-transform ${showMensWear ? 'rotate-180' : ''}`} />
                          Men's Wear
                        </button>
                        <AnimatePresence>
                          {showMensWear && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 space-y-3 pl-4"
                            >
                              {/* Shirt/Tshirt */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Shirt/Tshirt</p>
                                    <p className="text-emerald-400 text-xs">₹39</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setShirtTshirtQty(Math.max(0, shirtTshirtQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{shirtTshirtQty}</span>
                                    <button onClick={() => setShirtTshirtQty(shirtTshirtQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Formal/Jeans */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Formal/Jeans</p>
                                    <p className="text-emerald-400 text-xs">₹44</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setFormalJeansQty(Math.max(0, formalJeansQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{formalJeansQty}</span>
                                    <button onClick={() => setFormalJeansQty(formalJeansQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Coat */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Coat</p>
                                    <p className="text-emerald-400 text-xs">₹149</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setCoatQty(Math.max(0, coatQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{coatQty}</span>
                                    <button onClick={() => setCoatQty(coatQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Suit (2 piece) */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Suit (2 piece)</p>
                                    <p className="text-emerald-400 text-xs">₹249</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setSuit2PieceQty(Math.max(0, suit2PieceQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{suit2PieceQty}</span>
                                    <button onClick={() => setSuit2PieceQty(suit2PieceQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Suit (3 piece) */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Suit (3 piece)</p>
                                    <p className="text-emerald-400 text-xs">₹299</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setSuit3PieceQty(Math.max(0, suit3PieceQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{suit3PieceQty}</span>
                                    <button onClick={() => setSuit3PieceQty(suit3PieceQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Jacket */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Jacket</p>
                                    <p className="text-emerald-400 text-xs">₹99</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setJacketQty(Math.max(0, jacketQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{jacketQty}</span>
                                    <button onClick={() => setJacketQty(jacketQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Women's Wear */}
                      <div>
                        <button
                          onClick={() => setShowWomensWear(!showWomensWear)}
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          <ChevronDown size={16} className={`transform transition-transform ${showWomensWear ? 'rotate-180' : ''}`} />
                          Women's Wear
                        </button>
                        <AnimatePresence>
                          {showWomensWear && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 space-y-3 pl-4"
                            >
                              {/* Kurta */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Kurta</p>
                                    <p className="text-emerald-400 text-xs">₹75</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setKurtaQty(Math.max(0, kurtaQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{kurtaQty}</span>
                                    <button onClick={() => setKurtaQty(kurtaQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Salwar */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Salwar</p>
                                    <p className="text-emerald-400 text-xs">₹75</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setSalwarQty(Math.max(0, salwarQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{salwarQty}</span>
                                    <button onClick={() => setSalwarQty(salwarQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Saree */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Saree</p>
                                    <p className="text-emerald-400 text-xs">₹159</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setSareeQty(Math.max(0, sareeQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{sareeQty}</span>
                                    <button onClick={() => setSareeQty(sareeQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Dress */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Dress</p>
                                    <p className="text-emerald-400 text-xs">₹110</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setDressQty(Math.max(0, dressQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{dressQty}</span>
                                    <button onClick={() => setDressQty(dressQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Western */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Western</p>
                                    <p className="text-emerald-400 text-xs">₹99</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setWesternQty(Math.max(0, westernQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{westernQty}</span>
                                    <button onClick={() => setWesternQty(westernQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Blankets */}
                      <div>
                        <button
                          onClick={() => setShowBlankets(!showBlankets)}
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          <ChevronDown size={16} className={`transform transition-transform ${showBlankets ? 'rotate-180' : ''}`} />
                          Blankets
                        </button>
                        <AnimatePresence>
                          {showBlankets && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 space-y-3 pl-4"
                            >
                              {/* Big Blankets */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Big Blankets</p>
                                    <p className="text-emerald-400 text-xs">₹225</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setBigBlanketsQty(Math.max(0, bigBlanketsQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{bigBlanketsQty}</span>
                                    <button onClick={() => setBigBlanketsQty(bigBlanketsQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Small Blankets */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Small Blankets</p>
                                    <p className="text-emerald-400 text-xs">₹199</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setSmallBlanketsQty(Math.max(0, smallBlanketsQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{smallBlanketsQty}</span>
                                    <button onClick={() => setSmallBlanketsQty(smallBlanketsQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Bedsheets */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Bedsheets</p>
                                    <p className="text-emerald-400 text-xs">₹129</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setBedsheetsQty(Math.max(0, bedsheetsQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{bedsheetsQty}</span>
                                    <button onClick={() => setBedsheetsQty(bedsheetsQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Carpets */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Carpets (per Sq Ft)</p>
                                    <p className="text-emerald-400 text-xs">₹24</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setCarpetsQty(Math.max(0, carpetsQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{carpetsQty}</span>
                                    <button onClick={() => setCarpetsQty(carpetsQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Curtains */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Curtains (per pair)</p>
                                    <p className="text-emerald-400 text-xs">₹120</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setCurtainsQty(Math.max(0, curtainsQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{curtainsQty}</span>
                                    <button onClick={() => setCurtainsQty(curtainsQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  )}

                  {/* Laundry dropdowns (unchanged) */}
                  {item.name === 'Laundry' && (
                    <div className="mt-2 ml-4 space-y-2">
                      {/* Wash and Fold */}
                      <div>
                        <button
                          onClick={() => setShowLaundryWashFold(!showLaundryWashFold)}
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          <ChevronDown size={16} className={`transform transition-transform ${showLaundryWashFold ? 'rotate-180' : ''}`} />
                          Wash and Fold
                        </button>
                        <AnimatePresence>
                          {showLaundryWashFold && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 pl-4"
                            >
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Wash and Fold</p>
                                    <p className="text-emerald-400 text-xs">₹49/kg</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setLaundryWashFoldQty(Math.max(0, laundryWashFoldQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{laundryWashFoldQty}</span>
                                    <button onClick={() => setLaundryWashFoldQty(laundryWashFoldQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      {/* Wash and Steam Iron */}
                      <div>
                        <button
                          onClick={() => setShowLaundrySteamIron(!showLaundrySteamIron)}
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          <ChevronDown size={16} className={`transform transition-transform ${showLaundrySteamIron ? 'rotate-180' : ''}`} />
                          Wash and Steam Iron
                        </button>
                        <AnimatePresence>
                          {showLaundrySteamIron && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 pl-4"
                            >
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Wash and Steam Iron</p>
                                    <p className="text-emerald-400 text-xs">₹79/kg</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setLaundrySteamIronQty(Math.max(0, laundrySteamIronQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{laundrySteamIronQty}</span>
                                    <button onClick={() => setLaundrySteamIronQty(laundrySteamIronQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  )}

                  {/* Shoe Cleaning dropdowns (unchanged) */}
                  {item.name === 'Shoe Cleaning' && (
                    <div className="mt-2 ml-4 space-y-2">
                      {/* Normal Wash */}
                      <div>
                        <button
                          onClick={() => setShowNormalWash(!showNormalWash)}
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          <ChevronDown size={16} className={`transform transition-transform ${showNormalWash ? 'rotate-180' : ''}`} />
                          Normal Wash 
                        </button>
                        <AnimatePresence>
                          {showNormalWash && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 pl-4"
                            >
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Normal Wash</p>
                                    <p className="text-emerald-400 text-xs">₹125/pair</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setNormalWashQty(Math.max(0, normalWashQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{normalWashQty}</span>
                                    <button onClick={() => setNormalWashQty(normalWashQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      {/* Premium Wash */}
                      <div>
                        <button
                          onClick={() => setShowPremiumWash(!showPremiumWash)}
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          <ChevronDown size={16} className={`transform transition-transform ${showPremiumWash ? 'rotate-180' : ''}`} />
                          Premium Wash 
                        </button>
                        <AnimatePresence>
                          {showPremiumWash && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 pl-4"
                            >
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Premium Wash</p>
                                    <p className="text-emerald-400 text-xs">₹210/pair</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setPremiumShoeWashQty(Math.max(0, premiumShoeWashQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{premiumShoeWashQty}</span>
                                    <button onClick={() => setPremiumShoeWashQty(premiumShoeWashQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      {/* Types */}
                      <div>
                        <button
                          onClick={() => setShowShoeTypes(!showShoeTypes)}
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          <ChevronDown size={16} className={`transform transition-transform ${showShoeTypes ? 'rotate-180' : ''}`} />
                          Types
                        </button>
                        <AnimatePresence>
                          {showShoeTypes && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 space-y-3 pl-4"
                            >
                              {/* Sports Shoes Single */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Sports Shoes (Single)</p>
                                    <p className="text-emerald-400 text-xs">₹149</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setSportsShoeSingleQty(Math.max(0, sportsShoeSingleQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{sportsShoeSingleQty}</span>
                                    <button onClick={() => setSportsShoeSingleQty(sportsShoeSingleQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Sports Shoes Pair */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Sports Shoes (Pair)</p>
                                    <p className="text-emerald-400 text-xs">₹210</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setSportsShoePairQty(Math.max(0, sportsShoePairQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{sportsShoePairQty}</span>
                                    <button onClick={() => setSportsShoePairQty(sportsShoePairQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Formal Shoes Single */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Formal Shoes (Single)</p>
                                    <p className="text-emerald-400 text-xs">₹149</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setFormalShoeSingleQty(Math.max(0, formalShoeSingleQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{formalShoeSingleQty}</span>
                                    <button onClick={() => setFormalShoeSingleQty(formalShoeSingleQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Formal Shoes Pair */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Formal Shoes (Pair)</p>
                                    <p className="text-emerald-400 text-xs">₹210</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setFormalShoePairQty(Math.max(0, formalShoePairQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{formalShoePairQty}</span>
                                    <button onClick={() => setFormalShoePairQty(formalShoePairQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Casual Shoes Single */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Casual Shoes (Single)</p>
                                    <p className="text-emerald-400 text-xs">₹149</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setCasualShoeSingleQty(Math.max(0, casualShoeSingleQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{casualShoeSingleQty}</span>
                                    <button onClick={() => setCasualShoeSingleQty(casualShoeSingleQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Casual Shoes Pair */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Casual Shoes (Pair)</p>
                                    <p className="text-emerald-400 text-xs">₹210</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setCasualShoePairQty(Math.max(0, casualShoePairQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{casualShoePairQty}</span>
                                    <button onClick={() => setCasualShoePairQty(casualShoePairQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Leather Shoes Single */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Leather Shoes (Single)</p>
                                    <p className="text-emerald-400 text-xs">₹249</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setLeatherShoeSingleQty(Math.max(0, leatherShoeSingleQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{leatherShoeSingleQty}</span>
                                    <button onClick={() => setLeatherShoeSingleQty(leatherShoeSingleQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Leather Shoes Pair */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Leather Shoes (Pair)</p>
                                    <p className="text-emerald-400 text-xs">₹349</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setLeatherShoePairQty(Math.max(0, leatherShoePairQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{leatherShoePairQty}</span>
                                    <button onClick={() => setLeatherShoePairQty(leatherShoePairQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Boots */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Boots</p>
                                    <p className="text-emerald-400 text-xs">₹299</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setBootsQty(Math.max(0, bootsQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{bootsQty}</span>
                                    <button onClick={() => setBootsQty(bootsQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Proceed to Checkout Button */}
            <AnimatePresence>
              {(premiumWashQty +
                shirtTshirtQty + formalJeansQty + coatQty + suit2PieceQty + suit3PieceQty + jacketQty +
                kurtaQty + salwarQty + sareeQty + dressQty + westernQty +
                bigBlanketsQty + smallBlanketsQty + bedsheetsQty + carpetsQty + curtainsQty +
                laundryWashFoldQty + laundrySteamIronQty +
                normalWashQty + premiumShoeWashQty +
                sportsShoeSingleQty + sportsShoePairQty +
                formalShoeSingleQty + formalShoePairQty +
                casualShoeSingleQty + casualShoePairQty +
                leatherShoeSingleQty + leatherShoePairQty +
                bootsQty) > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                  className="mb-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => { setCheckoutModalOpen(true); setLeftSidebarOpen(false); }}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-between group"
                    animate={{
                      boxShadow: [
                        "0 10px 20px rgba(16, 185, 129, 0.3)",
                        "0 15px 30px rgba(16, 185, 129, 0.5)",
                        "0 10px 20px rgba(16, 185, 129, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="flex items-center gap-2">
                      <ShoppingBag size={24} />
                      Proceed to Checkout
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        {premiumWashQty +
                          shirtTshirtQty + formalJeansQty + coatQty + suit2PieceQty + suit3PieceQty + jacketQty +
                          kurtaQty + salwarQty + sareeQty + dressQty + westernQty +
                          bigBlanketsQty + smallBlanketsQty + bedsheetsQty + carpetsQty + curtainsQty +
                          laundryWashFoldQty + laundrySteamIronQty +
                          normalWashQty + premiumShoeWashQty +
                          sportsShoeSingleQty + sportsShoePairQty +
                          formalShoeSingleQty + formalShoePairQty +
                          casualShoeSingleQty + casualShoePairQty +
                          leatherShoeSingleQty + leatherShoePairQty +
                          bootsQty} items
                      </span>
                      <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </div>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Contact Section */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <a href="tel:+918088980347" className="flex items-center gap-2 text-blue-200 hover:text-cyan-400 transition-colors">
                    <Phone size={18} className="flex-shrink-0" />
                    <span className="text-sm whitespace-nowrap">+91 80889 80347</span>
                  </a>
                  <a href="tel:+917019436720" className="flex items-center gap-2 text-blue-200 hover:text-cyan-400 transition-colors">
                    <Phone size={18} className="flex-shrink-0" />
                    <span className="text-sm whitespace-nowrap">+91 70194 36720</span>
                  </a>
                </div>
                <a href="mailto:mrwashwala@gmail.com" className="flex items-center gap-3 text-blue-200 hover:text-cyan-400 transition-colors cursor-pointer">
                  <Mail size={18} />
                  <span>mrwashwala@gmail.com</span>
                </a>
                <a href="https://www.instagram.com/mr.washwala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-200 hover:text-cyan-400 transition-colors cursor-pointer pt-1">
                  <Instagram size={20} />
                  <span>@mr.washwala</span>
                </a>
                <div className="flex items-start gap-3 text-blue-200">
                  <MapPin size={20} className="mt-1 flex-shrink-0" />
                  <span>12, Vani Vilas Layout, Stage 2, Vijayanagar, Mysuru, Karnataka 570017</span>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content Area (unchanged) */}
      <main className="flex-1 relative min-h-screen">
        {/* Powered By Logo - Top Right */}
        <AnimatePresence>
          {showPoweredBy && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-4 right-4 z-30 flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-slate-200"
            >
              <span className="text-[10px] font-medium text-slate-600">Powered by</span>
              <img src={`${import.meta.env.BASE_URL}images/C LOGO.png`} alt="Powered by" className="h-10 sm:h-12 w-auto" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Cart Button */}
        <AnimatePresence>
          {totalCartItems > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 100 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed bottom-24 right-6 z-20"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCartModalOpen(true)}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white pl-5 pr-4 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 group backdrop-blur-sm border border-white/20 relative"
                animate={{
                  boxShadow: [
                    "0 10px 25px rgba(16, 185, 129, 0.4)",
                    "0 15px 35px rgba(16, 185, 129, 0.6)",
                    "0 10px 25px rgba(16, 185, 129, 0.4)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div whileHover={{ rotate: 15 }} transition={{ duration: 0.3 }} className="relative">
                  <ShoppingBag size={24} />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {totalCartItems}
                  </motion.div>
                </motion.div>
                <div className="text-left">
                  <div className="text-sm font-bold">View Cart</div>
                  <div className="text-[11px] opacity-90">{totalCartItems} item{totalCartItems > 1 ? 's' : ''}</div>
                </div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Franchise CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
          className="fixed bottom-6 right-6 z-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setRightSidebarOpen(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3.5 rounded-2xl professional-shadow-lg flex items-center gap-3 group backdrop-blur-sm border border-white/20"
          >
            <motion.div whileHover={{ rotate: 15 }} transition={{ duration: 0.3 }}>
              <Wallet size={22} />
            </motion.div>
            <div className="text-left">
              <div className="text-xs font-semibold">Become a Partner</div>
              <div className="text-[11px] opacity-90">Investment from ₹5L</div>
            </div>
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Animated Background Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0], opacity: [0.03, 0.06, 0.03] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.1], rotate: [45, 0, 45], opacity: [0.03, 0.06, 0.03] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl"
            />
          </div>

          {/* Hero Section */}
          <div className="mb-12 sm:mb-16 text-center relative z-10">
            <div className="flex flex-col items-center justify-center gap-1 mb-6">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                <img src={`${import.meta.env.BASE_URL}images/left-photo.jpg`} alt="Mr. WashWala Logo" className="w-full h-full object-contain" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                Mr.<span className="text-cyan-400">WashWala</span>
              </h1>
            </div>
            <div className="inline-block mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 text-blue-700 px-5 py-2.5 rounded-full text-sm font-medium professional-shadow">
                <span className="flex items-center gap-2">
                  <Award size={18} />
                  India's Most Trusted Laundry Service
                </span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Experience Premium</span>
              <br />
              <span className="text-slate-800">Laundry Care</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Professional laundry services at your doorstep. Quality guaranteed, convenience delivered with care.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => setCheckoutModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-xl font-semibold professional-shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                <Phone size={20} />
                Book Now
              </button>
              <button
                onClick={() => setLeftSidebarOpen(true)}
                className="bg-white text-slate-700 px-10 py-4 rounded-xl font-semibold professional-shadow hover:shadow-lg transition-all border border-slate-200"
              >
                View Services
              </button>
            </div>
          </div>

          {/* Slideshow Component */}
          <Slideshow onBookNow={() => setCheckoutModalOpen(true)} />

          {/* Services Grid (unchanged) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-bold mb-2 gradient-text"
              >
                Our Services
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-600 text-sm max-w-2xl mx-auto"
              >
                Professional laundry solutions for your needs
              </motion.p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ y: 30, opacity: 0, scale: 0.9 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative group"
                >
                  {service.popular && (
                    <motion.div
                      initial={{ scale: 0, rotate: -12 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3 + index * 0.05, type: "spring" }}
                      className="absolute -top-2 -right-2 z-10"
                    >
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-0.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-0.5 animate-pulse">
                        <Star size={9} fill="white" />
                      </div>
                    </motion.div>
                  )}
                  <div className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all border border-slate-100 h-full">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 w-10 h-10 rounded-lg flex items-center justify-center mb-2 shadow-sm">
                      <service.icon className="text-blue-600" size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 mb-1">{service.name}</h3>
                    <p className="text-slate-600 text-xs mb-2 line-clamp-1">{service.description}</p>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-xs text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-full">{service.unit}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => { service.setQty(service.qty + 1); }}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-1.5 rounded-lg font-semibold hover:shadow-lg transition-all text-xs"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16"
          >
            {[
              { label: 'Happy Customers', value: '15k+', icon: Users, color: 'from-blue-500 to-cyan-500' },
              { label: 'Orders Delivered', value: '15k+', icon: Award, color: 'from-purple-500 to-pink-500' },
              { label: 'Cities Covered', value: '2', icon: MapPin, color: 'from-green-500 to-emerald-500' },
              { label: 'Satisfaction Rate', value: '94%', icon: Star, color: 'from-yellow-500 to-orange-500' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
                whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all border border-slate-100 group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`mx-auto mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                >
                  <stat.icon className="text-white" size={32} />
                </motion.div>
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text"
              >
                Contact Us
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-600 text-lg max-w-2xl mx-auto"
              >
                Get in touch with us for any queries or assistance
              </motion.p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                    <Phone className="text-blue-600" size={24} />
                    <span>Call Us</span>
                  </h3>
                  <div className="space-y-2">
                    <a href="tel:+918088980347" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                      <Phone size={18} className="text-slate-400" />
                      <span>+91 80889 80347</span>
                    </a>
                    <a href="tel:+917019436720" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                      <Phone size={18} className="text-slate-400" />
                      <span>+91 70194 36720</span>
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                    <Mail className="text-blue-600" size={24} />
                    <span>Email & Social</span>
                  </h3>
                  <div className="space-y-2">
                    <a href="mailto:mrwashwala@gmail.com" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                      <Mail size={18} className="text-slate-400" />
                      <span>mrwashwala@gmail.com</span>
                    </a>
                    <a href="https://www.instagram.com/mr.washwala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-pink-600 transition-colors">
                      <Instagram size={18} className="text-slate-400" />
                      <span>@mr.washwala</span>
                    </a>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                    <MapPin className="text-blue-600" size={24} />
                    <span>Visit Us</span>
                  </h3>
                  <p className="flex items-start gap-3 text-slate-600">
                    <MapPin size={18} className="text-slate-400 mt-1 flex-shrink-0" />
                    <span>12, Vani Vilas Layout, Stage 2, Vijayanagar, Mysuru, Karnataka 570017</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Right Sidebar - Franchise (unchanged) */}
      <AnimatePresence>
        {rightSidebarOpen && (
          <motion.aside
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-80 sm:w-96 glass-dark p-6 overflow-y-auto z-40 shadow-2xl"
          >
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Wallet className="text-cyan-400" size={32} />
                  <h2 className="text-2xl font-bold text-white">Partnership</h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setRightSidebarOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="text-white" size={24} />
                </motion.button>
              </div>
              <p className="text-blue-200 text-sm">Join India's fastest-growing laundry franchise</p>
            </div>

            <div className="space-y-6">
              {franchiseOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg">
                      <option.icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-white font-semibold">{option.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {option.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-blue-200 text-sm">
                        <ChevronRight size={16} className="mt-0.5 flex-shrink-0 text-cyan-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              <motion.a
                href="https://services.connect2future.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all inline-block text-center"
              >
                Start Your Franchise Journey
              </motion.a>

              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="text-yellow-400" size={20} />
                  <span className="text-yellow-400 font-semibold text-sm">Limited Offer</span>
                </div>
                <p className="text-white text-sm">First 10 franchises get 20% discount on setup costs!</p>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Floating Social Buttons */}
      {!leftSidebarOpen && !rightSidebarOpen && (
        <div className="fixed bottom-6 left-6 flex flex-col gap-3 z-50">
          <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring' }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/918088980347?text=Hello%20Mr.%20Washwala!%20I%20have%20a%20query."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white p-4 rounded-full professional-shadow hover:shadow-lg transition-all flex items-center justify-center"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </motion.a>

          <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, type: 'spring' }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/mr.washwala"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full professional-shadow hover:shadow-lg transition-all flex items-center justify-center"
            aria-label="Follow us on Instagram"
          >
            <Instagram size={28} />
          </motion.a>
        </div>
      )}

      {/* Cart Modal (unchanged) – but will now include all new items because they are in global state */}
      <AnimatePresence>
        {cartModalOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setCartModalOpen(false)} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, x: 100 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                exit={{ scale: 0.9, opacity: 0, x: 100 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="w-full max-w-md my-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="max-h-[85vh] overflow-y-auto">
                  {/* Header */}
                  <div className="sticky top-0 bg-gradient-to-r from-green-500 to-emerald-500 p-6 z-10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                          <ShoppingBag size={28} />
                          Shopping Cart
                        </h2>
                        <p className="text-white/80 text-sm">{totalCartItems} item{totalCartItems > 1 ? 's' : ''} in cart</p>
                      </div>
                      <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={() => setCartModalOpen(false)} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                        <X className="text-white" size={24} />
                      </motion.button>
                    </div>
                  </div>

                  {/* Cart Items */}
                  <div className="p-6 space-y-4">
                    {totalCartItems === 0 ? (
                      <div className="text-center py-12">
                        <div className="text-6xl mb-4">🛒</div>
                        <p className="text-slate-400 text-lg font-medium">Your cart is empty</p>
                        <p className="text-slate-500 text-sm mt-2">Add some items to get started!</p>
                      </div>
                    ) : (
                      <>
                        {/* Premium Wash */}
                        {premiumWashQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Sparkles className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Premium Wash</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹199 per kg</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setPremiumWashQty(Math.max(0, premiumWashQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{premiumWashQty}</span>
                                <button onClick={() => setPremiumWashQty(premiumWashQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{premiumWashQty * 199}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Dry Wash - Men's Wear */}
                        {shirtTshirtQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Shirt/Tshirt</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹39 each</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setShirtTshirtQty(Math.max(0, shirtTshirtQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{shirtTshirtQty}</span>
                                <button onClick={() => setShirtTshirtQty(shirtTshirtQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{shirtTshirtQty * 39}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {formalJeansQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Formal/Jeans</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹44 each</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setFormalJeansQty(Math.max(0, formalJeansQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{formalJeansQty}</span>
                                <button onClick={() => setFormalJeansQty(formalJeansQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{formalJeansQty * 44}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {coatQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Coat</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹149 each</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setCoatQty(Math.max(0, coatQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{coatQty}</span>
                                <button onClick={() => setCoatQty(coatQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{coatQty * 149}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {suit2PieceQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Suit (2 piece)</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹249</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setSuit2PieceQty(Math.max(0, suit2PieceQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{suit2PieceQty}</span>
                                <button onClick={() => setSuit2PieceQty(suit2PieceQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{suit2PieceQty * 249}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {suit3PieceQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Suit (3 piece)</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹299</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setSuit3PieceQty(Math.max(0, suit3PieceQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{suit3PieceQty}</span>
                                <button onClick={() => setSuit3PieceQty(suit3PieceQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{suit3PieceQty * 299}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {jacketQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-indigo-500 to-blue-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Jacket</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹99 each</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setJacketQty(Math.max(0, jacketQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{jacketQty}</span>
                                <button onClick={() => setJacketQty(jacketQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{jacketQty * 99}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Women's Wear */}
                        {kurtaQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Kurta</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹75</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setKurtaQty(Math.max(0, kurtaQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{kurtaQty}</span>
                                <button onClick={() => setKurtaQty(kurtaQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{kurtaQty * 75}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {salwarQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Salwar</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹75</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setSalwarQty(Math.max(0, salwarQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{salwarQty}</span>
                                <button onClick={() => setSalwarQty(salwarQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{salwarQty * 75}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {sareeQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Saree</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹159</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setSareeQty(Math.max(0, sareeQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{sareeQty}</span>
                                <button onClick={() => setSareeQty(sareeQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{sareeQty * 159}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {dressQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Dress</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹110</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setDressQty(Math.max(0, dressQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{dressQty}</span>
                                <button onClick={() => setDressQty(dressQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{dressQty * 110}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {westernQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-orange-500 to-red-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Western</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹99</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setWesternQty(Math.max(0, westernQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{westernQty}</span>
                                <button onClick={() => setWesternQty(westernQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{westernQty * 99}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Blankets */}
                        {bigBlanketsQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-blue-700 to-blue-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Big Blankets</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹225</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setBigBlanketsQty(Math.max(0, bigBlanketsQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{bigBlanketsQty}</span>
                                <button onClick={() => setBigBlanketsQty(bigBlanketsQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{bigBlanketsQty * 225}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {smallBlanketsQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-cyan-600 to-cyan-400 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Small Blankets</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹199</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setSmallBlanketsQty(Math.max(0, smallBlanketsQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{smallBlanketsQty}</span>
                                <button onClick={() => setSmallBlanketsQty(smallBlanketsQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{smallBlanketsQty * 199}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {bedsheetsQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-teal-600 to-teal-400 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Bedsheets</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹129</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setBedsheetsQty(Math.max(0, bedsheetsQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{bedsheetsQty}</span>
                                <button onClick={() => setBedsheetsQty(bedsheetsQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{bedsheetsQty * 129}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {carpetsQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-amber-600 to-amber-400 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Carpets (per Sq Ft)</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹24</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setCarpetsQty(Math.max(0, carpetsQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{carpetsQty}</span>
                                <button onClick={() => setCarpetsQty(carpetsQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{carpetsQty * 24}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {curtainsQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-indigo-600 to-indigo-400 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Curtains (per pair)</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹120</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setCurtainsQty(Math.max(0, curtainsQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{curtainsQty}</span>
                                <button onClick={() => setCurtainsQty(curtainsQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{curtainsQty * 120}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Laundry dropdowns */}
                        {laundryWashFoldQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-blue-400 to-cyan-400 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Droplets className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Laundry Wash & Fold</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹49/kg</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setLaundryWashFoldQty(Math.max(0, laundryWashFoldQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{laundryWashFoldQty}</span>
                                <button onClick={() => setLaundryWashFoldQty(laundryWashFoldQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{laundryWashFoldQty * 49}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {laundrySteamIronQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-purple-400 to-pink-400 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Laundry Wash & Steam Iron</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹79/kg</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setLaundrySteamIronQty(Math.max(0, laundrySteamIronQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{laundrySteamIronQty}</span>
                                <button onClick={() => setLaundrySteamIronQty(laundrySteamIronQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{laundrySteamIronQty * 79}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Shoe Cleaning dropdowns */}
                        {normalWashQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <ShoppingBag className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Normal Wash</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹125/pair</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setNormalWashQty(Math.max(0, normalWashQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{normalWashQty}</span>
                                <button onClick={() => setNormalWashQty(normalWashQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{normalWashQty * 125}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {premiumShoeWashQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Sparkles className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Premium Wash</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹210/pair</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setPremiumShoeWashQty(Math.max(0, premiumShoeWashQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{premiumShoeWashQty}</span>
                                <button onClick={() => setPremiumShoeWashQty(premiumShoeWashQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{premiumShoeWashQty * 210}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {/* Types items */}
                        {sportsShoeSingleQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Sports Shoes (Single)</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹149</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setSportsShoeSingleQty(Math.max(0, sportsShoeSingleQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{sportsShoeSingleQty}</span>
                                <button onClick={() => setSportsShoeSingleQty(sportsShoeSingleQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{sportsShoeSingleQty * 149}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {sportsShoePairQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Sports Shoes (Pair)</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹210</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setSportsShoePairQty(Math.max(0, sportsShoePairQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{sportsShoePairQty}</span>
                                <button onClick={() => setSportsShoePairQty(sportsShoePairQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{sportsShoePairQty * 210}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {formalShoeSingleQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Formal Shoes (Single)</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹149</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setFormalShoeSingleQty(Math.max(0, formalShoeSingleQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{formalShoeSingleQty}</span>
                                <button onClick={() => setFormalShoeSingleQty(formalShoeSingleQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{formalShoeSingleQty * 149}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {formalShoePairQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-purple-600 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Formal Shoes (Pair)</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹210</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setFormalShoePairQty(Math.max(0, formalShoePairQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{formalShoePairQty}</span>
                                <button onClick={() => setFormalShoePairQty(formalShoePairQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{formalShoePairQty * 210}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {casualShoeSingleQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-green-600 to-emerald-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Casual Shoes (Single)</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹149</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setCasualShoeSingleQty(Math.max(0, casualShoeSingleQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{casualShoeSingleQty}</span>
                                <button onClick={() => setCasualShoeSingleQty(casualShoeSingleQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{casualShoeSingleQty * 149}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {casualShoePairQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-teal-600 to-cyan-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Casual Shoes (Pair)</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹210</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setCasualShoePairQty(Math.max(0, casualShoePairQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{casualShoePairQty}</span>
                                <button onClick={() => setCasualShoePairQty(casualShoePairQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{casualShoePairQty * 210}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {leatherShoeSingleQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-amber-600 to-orange-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Leather Shoes (Single)</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹249</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setLeatherShoeSingleQty(Math.max(0, leatherShoeSingleQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{leatherShoeSingleQty}</span>
                                <button onClick={() => setLeatherShoeSingleQty(leatherShoeSingleQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{leatherShoeSingleQty * 249}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {leatherShoePairQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-red-600 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Leather Shoes (Pair)</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹349</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setLeatherShoePairQty(Math.max(0, leatherShoePairQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{leatherShoePairQty}</span>
                                <button onClick={() => setLeatherShoePairQty(leatherShoePairQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{leatherShoePairQty * 349}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {bootsQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-gray-600 to-gray-400 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Boots</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹299</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setBootsQty(Math.max(0, bootsQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{bootsQty}</span>
                                <button onClick={() => setBootsQty(bootsQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{bootsQty * 299}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Main grid items (unchanged) */}
                        {washFoldQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Droplets className="text-blue-600" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Wash & Fold</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹49 per kg</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setWashFoldQty(Math.max(0, washFoldQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{washFoldQty}</span>
                                <button onClick={() => setWashFoldQty(washFoldQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{washFoldQty * 49}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {steamPressQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-blue-600" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Steam Press</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹79 per kg</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setSteamPressQty(Math.max(0, steamPressQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{steamPressQty}</span>
                                <button onClick={() => setSteamPressQty(steamPressQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{steamPressQty * 79}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {beddingQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <ShoppingBag className="text-blue-600" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Bedding</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹129 per item</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setBeddingQty(Math.max(0, beddingQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{beddingQty}</span>
                                <button onClick={() => setBeddingQty(beddingQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{beddingQty * 129}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {dryCleaningQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Sparkles className="text-blue-600" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Dry Cleaning</h3>
                                  <p className="text-emerald-400 text-xs font-medium">Starting at ₹39 per kg</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setDryCleaningQty(Math.max(0, dryCleaningQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{dryCleaningQty}</span>
                                <button onClick={() => setDryCleaningQty(dryCleaningQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{dryCleaningQty * 39}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {shoeCleaningQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-green-600" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Shoe Cleaning</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹125 per pair</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setShoeCleaningQty(Math.max(0, shoeCleaningQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{shoeCleaningQty}</span>
                                <button onClick={() => setShoeCleaningQty(shoeCleaningQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{shoeCleaningQty * 125}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Wash and Steam Iron (checkout modal) */}
                        {washSteamIronQty > 0 && (
                          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-indigo-500 to-blue-500 w-10 h-10 rounded-lg flex items-center justify-center">
                                  <Wind className="text-white" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">Wash and Steam Iron</h3>
                                  <p className="text-emerald-400 text-xs font-medium">₹79 per kg</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <button onClick={() => setWashSteamIronQty(Math.max(0, washSteamIronQty - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">−</button>
                                <span className="text-white font-bold w-6 text-center">{washSteamIronQty}</span>
                                <button onClick={() => setWashSteamIronQty(washSteamIronQty + 1)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors">+</button>
                                <span className="text-white font-bold ml-2">₹{washSteamIronQty * 79}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Footer Actions */}
                  {totalCartItems > 0 && (
                    <div className="sticky bottom-0 bg-slate-900 p-6 border-t border-white/10 space-y-4">
                      {subtotal > 0 && (
                        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 space-y-2">
                          <div className="flex justify-between text-slate-300 text-sm">
                            <span>Subtotal</span>
                            <span className="font-semibold">₹{subtotal}</span>
                          </div>
                          {discount > 0 && (
                            <div className="flex justify-between text-green-400 text-sm">
                              <span>Discount</span>
                              <span className="font-semibold">-₹{discount}</span>
                            </div>
                          )}
                          {deliveryCharge > 0 && (
                            <div className="flex justify-between text-slate-300 text-sm">
                              <span>Delivery Charge</span>
                              <span className="font-semibold">₹{deliveryCharge}</span>
                            </div>
                          )}
                          <div className="pt-2 border-t border-white/10 flex justify-between text-white font-bold">
                            <span>Total</span>
                            <span className="text-lg">₹{finalTotal}</span>
                          </div>
                        </div>
                      )}
                      {subtotal === 0 && (
                        <div className="bg-blue-500/10 border border-blue-500/30 p-3 rounded-xl">
                          <p className="text-blue-300 text-sm text-center">💡 Price will be calculated based on your items</p>
                        </div>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => { setCartModalOpen(false); setCheckoutModalOpen(true); }}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                      >
                        Proceed to Checkout →
                      </motion.button>
                      <button
                        onClick={() => {
                          if (confirm('Are you sure you want to clear your cart?')) {
                            // Reset all quantities
                            setPremiumWashQty(0);
                            setShirtTshirtQty(0); setFormalJeansQty(0); setCoatQty(0); setSuit2PieceQty(0); setSuit3PieceQty(0); setJacketQty(0);
                            setKurtaQty(0); setSalwarQty(0); setSareeQty(0); setDressQty(0); setWesternQty(0);
                            setBigBlanketsQty(0); setSmallBlanketsQty(0); setBedsheetsQty(0); setCarpetsQty(0); setCurtainsQty(0);
                            setLaundryWashFoldQty(0); setLaundrySteamIronQty(0);
                            setNormalWashQty(0); setPremiumShoeWashQty(0);
                            setSportsShoeSingleQty(0); setSportsShoePairQty(0);
                            setFormalShoeSingleQty(0); setFormalShoePairQty(0);
                            setCasualShoeSingleQty(0); setCasualShoePairQty(0);
                            setLeatherShoeSingleQty(0); setLeatherShoePairQty(0);
                            setBootsQty(0);
                            setWashFoldQty(0); setSteamPressQty(0); setBeddingQty(0); setDryCleaningQty(0); setShoeCleaningQty(0);
                            setWashSteamIronQty(0);
                          }
                        }}
                        className="w-full bg-red-500/20 border border-red-500/30 text-red-400 py-3 rounded-xl font-semibold hover:bg-red-500/30 transition-all text-sm"
                      >
                        Clear Cart
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Checkout Modal (updated with new sections) */}
      <AnimatePresence>
        {checkoutModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCheckoutModalOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="w-full max-w-4xl my-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                        Book Your Service
                      </h2>
                      <p className="text-slate-400 text-xs sm:text-sm">Select services and complete your details</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setCheckoutModalOpen(false)}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                    >
                      <X className="text-white" size={24} />
                    </motion.button>
                  </div>

                  {/* Simple Services (Wash & Fold, Wash and Steam Iron) */}
                  <div className="mb-8">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <ShoppingBag size={18} className="text-cyan-400 flex-shrink-0" />
                      Quick Services
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {simpleServicesForModal.map((service, index) => (
                        <motion.div
                          key={service.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.03 }}
                          className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                        >
                          <div className="flex items-start gap-3">
                            <div className={`bg-gradient-to-br ${service.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                              <service.icon className="text-white" size={24} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="text-white font-semibold text-sm sm:text-base truncate">{service.name}</h4>
                                <span className="text-emerald-400 text-xs font-medium whitespace-nowrap ml-2">{service.price}</span>
                              </div>
                              <p className="text-slate-400 text-xs mb-2 line-clamp-1">{service.description}</p>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-slate-400 text-xs">Qty ({service.unit})</span>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => service.setQty(Math.max(0, service.qty - 1))}
                                    className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors"
                                  >
                                    −
                                  </button>
                                  <span className="text-white font-bold w-6 text-center text-sm">{service.qty}</span>
                                  <button
                                    onClick={() => service.setQty(service.qty + 1)}
                                    className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-colors"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              {service.qty > 0 && (
                                <div className="mt-2 text-right text-xs">
                                  <span className="text-cyan-400">Subtotal: </span>
                                  <span className="text-white font-semibold">
                                    ₹{service.qty * (parseInt(service.price.match(/\d+/)?.[0] || '0'))}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Dry Cleaning Section (Men's Wear & Women's Wear) */}
                  <div className="mb-8">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <Sparkles size={18} className="text-cyan-400 flex-shrink-0" />
                      Dry Cleaning
                    </h3>
                    <div className="space-y-4">
                      {/* Men's Wear */}
                      <div>
                        <button
                          onClick={() => setShowModalDryMens(!showModalDryMens)}
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          <ChevronDown size={16} className={`transform transition-transform ${showModalDryMens ? 'rotate-180' : ''}`} />
                          Men's Wear
                        </button>
                        <AnimatePresence>
                          {showModalDryMens && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 space-y-3 pl-4"
                            >
                              {/* Shirt/Tshirt */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Shirt/Tshirt</p>
                                    <p className="text-emerald-400 text-xs">₹39</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setShirtTshirtQty(Math.max(0, shirtTshirtQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{shirtTshirtQty}</span>
                                    <button onClick={() => setShirtTshirtQty(shirtTshirtQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Formal/Jeans */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Formal/Jeans</p>
                                    <p className="text-emerald-400 text-xs">₹44</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setFormalJeansQty(Math.max(0, formalJeansQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{formalJeansQty}</span>
                                    <button onClick={() => setFormalJeansQty(formalJeansQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Coat */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Coat</p>
                                    <p className="text-emerald-400 text-xs">₹149</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setCoatQty(Math.max(0, coatQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{coatQty}</span>
                                    <button onClick={() => setCoatQty(coatQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Suit (2 piece) */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Suit (2 piece)</p>
                                    <p className="text-emerald-400 text-xs">₹249</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setSuit2PieceQty(Math.max(0, suit2PieceQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{suit2PieceQty}</span>
                                    <button onClick={() => setSuit2PieceQty(suit2PieceQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Suit (3 piece) */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Suit (3 piece)</p>
                                    <p className="text-emerald-400 text-xs">₹299</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setSuit3PieceQty(Math.max(0, suit3PieceQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{suit3PieceQty}</span>
                                    <button onClick={() => setSuit3PieceQty(suit3PieceQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Jacket */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Jacket</p>
                                    <p className="text-emerald-400 text-xs">₹99</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setJacketQty(Math.max(0, jacketQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{jacketQty}</span>
                                    <button onClick={() => setJacketQty(jacketQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Women's Wear */}
                      <div>
                        <button
                          onClick={() => setShowModalDryWomens(!showModalDryWomens)}
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          <ChevronDown size={16} className={`transform transition-transform ${showModalDryWomens ? 'rotate-180' : ''}`} />
                          Women's Wear
                        </button>
                        <AnimatePresence>
                          {showModalDryWomens && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 space-y-3 pl-4"
                            >
                              {/* Kurta */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Kurta</p>
                                    <p className="text-emerald-400 text-xs">₹75</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setKurtaQty(Math.max(0, kurtaQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{kurtaQty}</span>
                                    <button onClick={() => setKurtaQty(kurtaQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Salwar */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Salwar</p>
                                    <p className="text-emerald-400 text-xs">₹75</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setSalwarQty(Math.max(0, salwarQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{salwarQty}</span>
                                    <button onClick={() => setSalwarQty(salwarQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Saree */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Saree</p>
                                    <p className="text-emerald-400 text-xs">₹159</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setSareeQty(Math.max(0, sareeQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{sareeQty}</span>
                                    <button onClick={() => setSareeQty(sareeQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Dress */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Dress</p>
                                    <p className="text-emerald-400 text-xs">₹110</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setDressQty(Math.max(0, dressQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{dressQty}</span>
                                    <button onClick={() => setDressQty(dressQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Western */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Western</p>
                                    <p className="text-emerald-400 text-xs">₹99</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setWesternQty(Math.max(0, westernQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{westernQty}</span>
                                    <button onClick={() => setWesternQty(westernQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Bedding Section (Blankets & Linens) */}
                  <div className="mb-8">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <ShoppingBag size={18} className="text-cyan-400 flex-shrink-0" />
                      Bedding & Linens
                    </h3>
                    <div>
                      <button
                        onClick={() => setShowModalBedding(!showModalBedding)}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      >
                        <ChevronDown size={16} className={`transform transition-transform ${showModalBedding ? 'rotate-180' : ''}`} />
                        Blankets & Linens
                      </button>
                      <AnimatePresence>
                        {showModalBedding && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 space-y-3 pl-4"
                          >
                            {/* Big Blankets */}
                            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-white text-sm font-medium">Big Blankets</p>
                                  <p className="text-emerald-400 text-xs">₹225</p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button onClick={() => setBigBlanketsQty(Math.max(0, bigBlanketsQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                  <span className="text-white font-bold w-5 text-center text-sm">{bigBlanketsQty}</span>
                                  <button onClick={() => setBigBlanketsQty(bigBlanketsQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                </div>
                              </div>
                            </div>
                            {/* Small Blankets */}
                            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-white text-sm font-medium">Small Blankets</p>
                                  <p className="text-emerald-400 text-xs">₹199</p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button onClick={() => setSmallBlanketsQty(Math.max(0, smallBlanketsQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                  <span className="text-white font-bold w-5 text-center text-sm">{smallBlanketsQty}</span>
                                  <button onClick={() => setSmallBlanketsQty(smallBlanketsQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                </div>
                              </div>
                            </div>
                            {/* Bedsheets */}
                            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-white text-sm font-medium">Bedsheets</p>
                                  <p className="text-emerald-400 text-xs">₹129</p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button onClick={() => setBedsheetsQty(Math.max(0, bedsheetsQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                  <span className="text-white font-bold w-5 text-center text-sm">{bedsheetsQty}</span>
                                  <button onClick={() => setBedsheetsQty(bedsheetsQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                </div>
                              </div>
                            </div>
                            {/* Carpets */}
                            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-white text-sm font-medium">Carpets (per Sq Ft)</p>
                                  <p className="text-emerald-400 text-xs">₹24</p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button onClick={() => setCarpetsQty(Math.max(0, carpetsQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                  <span className="text-white font-bold w-5 text-center text-sm">{carpetsQty}</span>
                                  <button onClick={() => setCarpetsQty(carpetsQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                </div>
                              </div>
                            </div>
                            {/* Curtains */}
                            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-white text-sm font-medium">Curtains (per pair)</p>
                                  <p className="text-emerald-400 text-xs">₹120</p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button onClick={() => setCurtainsQty(Math.max(0, curtainsQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                  <span className="text-white font-bold w-5 text-center text-sm">{curtainsQty}</span>
                                  <button onClick={() => setCurtainsQty(curtainsQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Shoe Cleaning Section */}
                  <div className="mb-8">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <ShoppingBag size={18} className="text-cyan-400 flex-shrink-0" />
                      Shoe Cleaning
                    </h3>
                    <div className="space-y-4">
                      {/* Normal Wash */}
                      <div>
                        <button
                          onClick={() => setShowModalShoeNormal(!showModalShoeNormal)}
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          <ChevronDown size={16} className={`transform transition-transform ${showModalShoeNormal ? 'rotate-180' : ''}`} />
                          Normal Wash
                        </button>
                        <AnimatePresence>
                          {showModalShoeNormal && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 pl-4"
                            >
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Normal Wash</p>
                                    <p className="text-emerald-400 text-xs">₹125/pair</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setNormalWashQty(Math.max(0, normalWashQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{normalWashQty}</span>
                                    <button onClick={() => setNormalWashQty(normalWashQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Premium Wash */}
                      <div>
                        <button
                          onClick={() => setShowModalShoePremium(!showModalShoePremium)}
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          <ChevronDown size={16} className={`transform transition-transform ${showModalShoePremium ? 'rotate-180' : ''}`} />
                          Premium Wash 
                        </button>
                        <AnimatePresence>
                          {showModalShoePremium && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 pl-4"
                            >
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Premium Wash</p>
                                    <p className="text-emerald-400 text-xs">₹210/pair</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setPremiumShoeWashQty(Math.max(0, premiumShoeWashQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{premiumShoeWashQty}</span>
                                    <button onClick={() => setPremiumShoeWashQty(premiumShoeWashQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Types */}
                      <div>
                        <button
                          onClick={() => setShowModalShoeTypes(!showModalShoeTypes)}
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          <ChevronDown size={16} className={`transform transition-transform ${showModalShoeTypes ? 'rotate-180' : ''}`} />
                          Types
                        </button>
                        <AnimatePresence>
                          {showModalShoeTypes && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 space-y-3 pl-4"
                            >
                              {/* Sports Shoes Single */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Sports Shoes (Single)</p>
                                    <p className="text-emerald-400 text-xs">₹149</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setSportsShoeSingleQty(Math.max(0, sportsShoeSingleQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{sportsShoeSingleQty}</span>
                                    <button onClick={() => setSportsShoeSingleQty(sportsShoeSingleQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Sports Shoes Pair */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Sports Shoes (Pair)</p>
                                    <p className="text-emerald-400 text-xs">₹210</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setSportsShoePairQty(Math.max(0, sportsShoePairQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{sportsShoePairQty}</span>
                                    <button onClick={() => setSportsShoePairQty(sportsShoePairQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Formal Shoes Single */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Formal Shoes (Single)</p>
                                    <p className="text-emerald-400 text-xs">₹149</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setFormalShoeSingleQty(Math.max(0, formalShoeSingleQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{formalShoeSingleQty}</span>
                                    <button onClick={() => setFormalShoeSingleQty(formalShoeSingleQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Formal Shoes Pair */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Formal Shoes (Pair)</p>
                                    <p className="text-emerald-400 text-xs">₹210</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setFormalShoePairQty(Math.max(0, formalShoePairQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{formalShoePairQty}</span>
                                    <button onClick={() => setFormalShoePairQty(formalShoePairQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Casual Shoes Single */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Casual Shoes (Single)</p>
                                    <p className="text-emerald-400 text-xs">₹149</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setCasualShoeSingleQty(Math.max(0, casualShoeSingleQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{casualShoeSingleQty}</span>
                                    <button onClick={() => setCasualShoeSingleQty(casualShoeSingleQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Casual Shoes Pair */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Casual Shoes (Pair)</p>
                                    <p className="text-emerald-400 text-xs">₹210</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setCasualShoePairQty(Math.max(0, casualShoePairQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{casualShoePairQty}</span>
                                    <button onClick={() => setCasualShoePairQty(casualShoePairQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Leather Shoes Single */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Leather Shoes (Single)</p>
                                    <p className="text-emerald-400 text-xs">₹249</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setLeatherShoeSingleQty(Math.max(0, leatherShoeSingleQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{leatherShoeSingleQty}</span>
                                    <button onClick={() => setLeatherShoeSingleQty(leatherShoeSingleQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Leather Shoes Pair */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Leather Shoes (Pair)</p>
                                    <p className="text-emerald-400 text-xs">₹349</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setLeatherShoePairQty(Math.max(0, leatherShoePairQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{leatherShoePairQty}</span>
                                    <button onClick={() => setLeatherShoePairQty(leatherShoePairQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                              {/* Boots */}
                              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-sm font-medium">Boots</p>
                                    <p className="text-emerald-400 text-xs">₹299</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => setBootsQty(Math.max(0, bootsQty - 1))} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">−</button>
                                    <span className="text-white font-bold w-5 text-center text-sm">{bootsQty}</span>
                                    <button onClick={() => setBootsQty(bootsQty + 1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold">+</button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Customer Form (unchanged) */}
                  <div className="space-y-3 sm:space-y-4 mb-6">
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
                      <Users size={18} className="text-cyan-400 flex-shrink-0" />
                      Customer Information
                    </h3>

                    {/* Name */}
                    <div>
                      <label className="block text-slate-300 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={customerForm.name}
                        onChange={(e) => setCustomerForm({...customerForm, name: e.target.value})}
                        placeholder="Enter your full name"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-slate-300 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        value={customerForm.phone}
                        onChange={(e) => setCustomerForm({...customerForm, phone: e.target.value})}
                        placeholder="Enter your phone number"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-slate-300 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={customerForm.email}
                        onChange={(e) => setCustomerForm({...customerForm, email: e.target.value})}
                        placeholder="Enter your email"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-slate-300 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Pickup Address <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        value={customerForm.address}
                        onChange={(e) => setCustomerForm({...customerForm, address: e.target.value})}
                        placeholder="Enter complete pickup address"
                        rows="3"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
                        required
                      />
                    </div>

                    {/* City and Pincode */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-slate-300 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          value={customerForm.city}
                          onChange={(e) => setCustomerForm({...customerForm, city: e.target.value})}
                          placeholder="City"
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                          Pincode <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={customerForm.pincode}
                          onChange={(e) => {
                            const pincode = e.target.value;
                            setCustomerForm({...customerForm, pincode});
                            if (pincode.length === 6) {
                              validatePincode(pincode);
                            } else {
                              setPincodeValid(null);
                            }
                          }}
                          placeholder="Pincode"
                          className={`w-full bg-white/10 border ${
                            pincodeValid === true ? 'border-green-500' :
                            pincodeValid === false ? 'border-red-500' :
                            'border-white/20'
                          } rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all`}
                          maxLength={6}
                        />
                        {pincodeValid === true && (
                          <p className="text-green-400 text-xs mt-1 inline-flex items-center gap-1">
                            <Check size={12} />
                            We deliver to this area!
                          </p>
                        )}
                        {pincodeValid === false && (
                          <p className="text-red-400 text-xs mt-1 inline-flex items-center gap-1">
                            <X size={12} />
                            Service not available in this area
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Pickup Date and Time */}
                    <div>
                      <h3 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <Calendar size={16} />
                        Schedule Pickup
                      </h3>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-slate-300 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                            Pickup Date <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="date"
                            value={pickupDate}
                            onChange={(e) => setPickupDate(e.target.value)}
                            min={getMinPickupDate()}
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-slate-300 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                            Pickup Time <span className="text-red-400">*</span>
                          </label>
                          <select
                            value={pickupTime}
                            onChange={(e) => setPickupTime(e.target.value)}
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                            required
                          >
                            <option value="" className="bg-slate-800">Select time</option>
                            {pickupTimeSlots.map((slot) => (
                              <option key={slot} value={slot} className="bg-slate-800">{slot}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Promo Code */}
                    <div>
                      <label className="block text-slate-300 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        <span className="inline-flex items-center gap-2">
                          <Gift size={15} />
                          Promo Code
                        </span>
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                          placeholder="Enter promo code"
                          className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                        />
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={applyPromoCode}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all"
                        >
                          Apply
                        </motion.button>
                      </div>
                      <div className="mt-2 text-xs text-slate-400">
                        <p>Available codes: FIRST10, WASH20, SAVE50</p>
                      </div>
                    </div>

                    {/* Price Summary */}
                    {subtotal > 0 && (
                      <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-4 rounded-xl space-y-2">
                        <h3 className="text-green-400 font-semibold mb-2 inline-flex items-center gap-2">
                          <DollarSign size={17} />
                          Price Summary
                        </h3>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between text-slate-300">
                            <span>Subtotal</span>
                            <span>₹{subtotal}</span>
                          </div>
                          {discount > 0 && (
                            <div className="flex justify-between text-green-400">
                              <span>Discount</span>
                              <span>-₹{discount}</span>
                            </div>
                          )}
                          {deliveryCharge > 0 && (
                            <div className="flex justify-between text-slate-300">
                              <span>Delivery Charge</span>
                              <span>₹{deliveryCharge}</span>
                            </div>
                          )}
                          <div className="pt-2 border-t border-green-500/30 flex justify-between text-white font-bold text-base">
                            <span>Total Amount</span>
                            <span>₹{finalTotal}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setCheckoutModalOpen(false)}
                      className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleCheckout}
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base shadow-lg transition-all"
                    >
                      Confirm Order
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Order Confirmation Modal (unchanged) */}
      <AnimatePresence>
        {orderConfirmationOpen && confirmedOrder && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="w-full max-w-2xl my-auto bg-white rounded-2xl shadow-2xl overflow-hidden print:shadow-none"
              >
                <div className="max-h-[85vh] overflow-y-auto">
                  {/* Success Header */}
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-center print:bg-green-600">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }} className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <motion.div initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
                        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    </motion.div>
                    <h2 className="text-3xl font-bold text-white mb-2">Order Confirmed!</h2>
                    <p className="text-white/90 text-lg">Thank you for choosing Mr.WashWala</p>
                  </div>

                  {/* Order Details */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Order ID and Time */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border-2 border-blue-200">
                      <div className="text-center">
                        <p className="text-slate-600 text-sm mb-1">Order ID</p>
                        <p className="text-2xl font-bold text-blue-600">{confirmedOrder.orderId}</p>
                        <p className="text-slate-500 text-xs mt-2">{confirmedOrder.timestamp}</p>
                      </div>
                    </div>

                    {/* Customer Details */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <Users size={20} className="text-blue-600" />
                        Customer Information
                      </h3>
                      <div className="bg-slate-50 p-4 rounded-xl space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-600">Name:</span><span className="font-semibold text-slate-800">{confirmedOrder.customer.name}</span></div>
                        <div className="flex justify-between"><span className="text-slate-600">Phone:</span><span className="font-semibold text-slate-800">{confirmedOrder.customer.phone}</span></div>
                        <div className="flex justify-between"><span className="text-slate-600">Email:</span><span className="font-semibold text-slate-800">{confirmedOrder.customer.email}</span></div>
                        <div className="flex justify-between items-start"><span className="text-slate-600">Address:</span><span className="font-semibold text-slate-800 text-right max-w-xs">{confirmedOrder.customer.address}</span></div>
                      </div>
                    </div>

                    {/* Schedule */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <Calendar size={20} className="text-blue-600" />
                        Pickup & Delivery Schedule
                      </h3>
                      <div className="bg-slate-50 p-4 rounded-xl space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-600">Pickup Date:</span><span className="font-semibold text-slate-800">{confirmedOrder.schedule.pickupDate}</span></div>
                        <div className="flex justify-between"><span className="text-slate-600">Pickup Time:</span><span className="font-semibold text-slate-800">{confirmedOrder.schedule.pickupTime}</span></div>
                        {confirmedOrder.schedule.deliveryDate && (
                          <div className="flex justify-between"><span className="text-slate-600">Delivery Date:</span><span className="font-semibold text-slate-800">{confirmedOrder.schedule.deliveryDate}</span></div>
                        )}
                      </div>
                    </div>

                    {/* Order Items */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <ShoppingBag size={20} className="text-blue-600" />
                        Order Items
                      </h3>
                      <div className="bg-slate-50 p-4 rounded-xl space-y-2">
                        {confirmedOrder.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center text-sm py-2 border-b border-slate-200 last:border-0">
                            <div><span className="font-semibold text-slate-800">{item.name}</span><span className="text-slate-600 ml-2">x{item.qty}</span></div>
                            <span className="font-bold text-slate-800">{item.total ? `₹${item.total}` : item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price Summary */}
                    {confirmedOrder.pricing.subtotal > 0 && (
                      <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                          <DollarSign size={20} className="text-blue-600" />
                          Payment Summary
                        </h3>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border-2 border-green-200 space-y-2 text-sm">
                          <div className="flex justify-between"><span className="text-slate-600">Subtotal:</span><span className="font-semibold text-slate-800">₹{confirmedOrder.pricing.subtotal}</span></div>
                          {confirmedOrder.pricing.discount > 0 && (
                            <div className="flex justify-between text-green-600"><span>Discount:</span><span className="font-semibold">-₹{confirmedOrder.pricing.discount}</span></div>
                          )}
                          {confirmedOrder.pricing.deliveryCharge > 0 && (
                            <div className="flex justify-between"><span className="text-slate-600">Delivery:</span><span className="font-semibold text-slate-800">₹{confirmedOrder.pricing.deliveryCharge}</span></div>
                          )}
                          <div className="pt-2 border-t-2 border-green-300 flex justify-between">
                            <span className="font-bold text-slate-800 text-base">Total Amount:</span>
                            <span className="font-bold text-green-600 text-xl">₹{confirmedOrder.pricing.total}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Special Instructions */}
                    {confirmedOrder.specialInstructions && (
                      <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                          <FileText size={20} className="text-blue-600" />
                          Special Instructions
                        </h3>
                        <div className="bg-slate-50 p-4 rounded-xl"><p className="text-slate-700 text-sm">{confirmedOrder.specialInstructions}</p></div>
                      </div>
                    )}

                    {/* Next Steps */}
                    <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-xl">
                      <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                        <Info size={18} />
                        What's Next?
                      </h3>
                      <ul className="text-sm text-blue-700 space-y-1 ml-4">
                        <li>• You'll receive a confirmation via email/SMS</li>
                        <li>• Our team will arrive at the scheduled pickup time</li>
                        <li>• We'll contact you before delivery</li>
                        <li>• For queries: <a href="tel:+918088980347" className="font-semibold underline">+91 80889 80347</a></li>
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-3 print:hidden">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={printReceipt} className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all">🖨️ Print Receipt</motion.button>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setOrderConfirmationOpen(false)} className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl font-semibold transition-all">Close</motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;