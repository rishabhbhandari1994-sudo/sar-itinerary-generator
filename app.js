/* ==========================================
   SAR OUTDOORS - APPLICATION LOGIC
   ========================================== */

// --- Recreated SVG Logo of SAR Outdoors ---
const LOGO_SVG = `
<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" class="sar-logo-svg" style="width:100%; height:100%;">
  <defs>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2a75e6" />
      <stop offset="50%" stop-color="#1fc3a3" />
      <stop offset="100%" stop-color="#7ee439" />
    </linearGradient>
  </defs>
  <!-- Outer Compass Circle -->
  <circle cx="250" cy="250" r="230" fill="url(#logoGrad)" stroke="#ffffff" stroke-width="4" />
  
  <!-- Compass Ticks -->
  <line x1="250" y1="20" x2="250" y2="40" stroke="#ffffff" stroke-width="4" stroke-linecap="round" />
  <line x1="250" y1="460" x2="250" y2="480" stroke="#ffffff" stroke-width="4" stroke-linecap="round" />
  <line x1="20" y1="250" x2="40" y2="250" stroke="#ffffff" stroke-width="4" stroke-linecap="round" />
  <line x1="460" y1="250" x2="480" y2="250" stroke="#ffffff" stroke-width="4" stroke-linecap="round" />
  
  <!-- S and R Letters -->
  <text x="145" y="295" font-family="'Outfit', 'Montserrat', sans-serif" font-weight="900" font-size="145" fill="#ffffff" text-anchor="middle">S</text>
  <text x="355" y="295" font-family="'Outfit', 'Montserrat', sans-serif" font-weight="900" font-size="145" fill="#ffffff" text-anchor="middle">R</text>
  
  <!-- Stylized Mountain 'A' -->
  <!-- Outer leg outline of A -->
  <path d="M 205 300 L 250 142 L 295 300 L 268 300 L 250 236 L 232 300 Z" fill="#ffffff" />
  
  <!-- Shadow Mountain Peaks Inside the crossbar/triangle area -->
  <!-- Main Peak -->
  <path d="M 250 215 L 278 300 L 222 300 Z" fill="#ffffff" stroke="#1fc3a3" stroke-width="3" />
  <path d="M 250 215 L 250 300 L 278 300 Z" fill="#0f766e" opacity="0.3" /> <!-- Ridge shadow -->

  <!-- Left Secondary Peak -->
  <path d="M 235 240 L 252 300 L 218 300 Z" fill="#ffffff" stroke="#1fc3a3" stroke-width="2" />
  <path d="M 235 240 L 235 300 L 252 300 Z" fill="#0f766e" opacity="0.2" />

  <!-- Divider Line -->
  <line x1="110" y1="330" x2="390" y2="330" stroke="#ffffff" stroke-width="3.5" />
  
  <!-- OUTDOORS Text -->
  <text x="250" y="380" font-family="'Outfit', 'Montserrat', sans-serif" font-weight="500" font-size="30" fill="#ffffff" text-anchor="middle" letter-spacing="14">OUTDOORS</text>
</svg>
`;

const BASE64_LOGO_SVG = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(LOGO_SVG.trim())));

// --- Application State ---
let state = {
  tripTitle: "",
  tripSubtitle: "",
  destination: "",
  duration: "",
  startDate: "",
  numberOfPeople: "",
  price: "",
  customerName: "",
  tripType: "private",
  priceQuad: "",
  priceTriple: "",
  priceDouble: "",
  coverImage: "",
  logoUrl: "",
  contactEmail: "",
  contactPhone: "",
  contactWebsite: "",
  policies: "",
  itineraryDays: [],
  inclusions: [],
  exclusions: [],
  fontFamily: "modern",
  titleWeight: "900",
  titleStyle: "normal",
  taglineStyle: "bold-normal",
  titleCase: "uppercase"
};

// --- Initial Demo Data ---
const DEMO_STATE = {
  tripTitle: "LADAKH EXPEDITION 2026",
  tripSubtitle: "The Land of High Passes & Ancient Monasteries",
  destination: "Leh Ladakh, India",
  duration: "6 Days / 5 Nights",
  startDate: "July 12, 2026",
  numberOfPeople: "Min 6 - Max 12 Pax",
  price: "₹28,500",
  customerName: "Aditya & Friends",
  tripType: "group",
  priceQuad: "₹24,999",
  priceTriple: "₹26,500",
  priceDouble: "₹28,500",
  coverImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
  logoUrl: "",
  contactEmail: "bookings@saroutdoors.com",
  contactPhone: "+91 98123 45678",
  contactWebsite: "www.saroutdoors.com",
  fontFamily: "modern",
  titleWeight: "900",
  titleStyle: "normal",
  taglineStyle: "bold-normal",
  titleCase: "uppercase",
  policies: `• Booking: 50% advance payment required to confirm the slot. Balance payment is due 15 days before the trip departure.
• Cancellation Policy: Free cancellation up to 30 days before departure. 50% refund within 15-30 days. No refund within 14 days.
• Acclimatization: Day 1 is strictly for rest and body acclimatization. Do not indulge in any heavy physical activities.
• Health & Safety: Carry your own personal medicines, sunscreen, sunglasses, and warm layers. The terrain gets cold and windy.
• Environment: We follow a strict 'Leave No Trace' policy. Do not litter. Respect local culture.`,
  itineraryDays: [
    {
      title: "Arrival in Leh & Acclimatization",
      highlights: "Airport Pickup, Hotel check-in, Resting, Light evening walk around Leh Market",
      description: "Upon landing at Leh Airport, our representative will pick you up and transfer you to the hotel. Spend the day resting to acclimate to the high altitude (11,500 ft). In the evening, take a slow stroll in Leh Market, visit Shanti Stupa, and enjoy a local Ladakhi dinner.",
      accommodation: "Grand Himalaya Hotel (Leh)",
      meals: { breakfast: false, lunch: true, dinner: true },
      image: "https://images.unsplash.com/photo-1614092248232-a5c60e5153fb?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Leh Local Sightseeing & Confluence",
      highlights: "Hall of Fame, Magnetic Hill, Confluence of Indus & Zanskar, Pathar Sahib Gurudwara",
      description: "After breakfast, start your local sightseeing tour. Visit the Hall of Fame war museum, experience the optical illusion at Magnetic Hill, visit the sacred Pathar Sahib Gurudwara, and capture the beautiful confluence of the Indus and Zanskar rivers at Sangam.",
      accommodation: "Grand Himalaya Hotel (Leh)",
      meals: { breakfast: true, lunch: true, dinner: true },
      image: "https://images.unsplash.com/photo-1614092248464-9dfc5fb6ccdf?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Leh to Nubra Valley via Khardung La",
      highlights: "Khardung La Pass (17,582 ft), Diskit Monastery, Sand Dunes, Double Humped Camel Ride",
      description: "Embark on an exciting drive to Nubra Valley via the famous Khardung La Pass, once known as the highest motorable road in the world. Descend into Nubra and visit the giant Maitreya Buddha at Diskit Monastery. In the evening, enjoy the white sand dunes at Hunder with a double-humped Bactrian camel ride.",
      accommodation: "Eco Resort Deluxe Tents (Nubra)",
      meals: { breakfast: true, lunch: false, dinner: true },
      image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Nubra Valley to Pangong Tso Lake",
      highlights: "Shyok River Route, High Altitude Lake, Sunset Photography, Star Gazing",
      description: "Drive to the magnificent Pangong Tso Lake via the scenic Shyok River route. The lake, situated at 13,940 ft, changes colors from azure blue to deep green throughout the day. Witness the majestic sunset over the lake and spend the night in cozy camps under a star-lit sky.",
      accommodation: "Pangong Woods Retreat (Camps)",
      meals: { breakfast: true, lunch: true, dinner: true },
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Pangong Tso to Leh via Chang La",
      highlights: "Sunrise at Lake, Chang La Pass (17,590 ft), Hemis Monastery, Souvenir Shopping",
      description: "Wake up early to catch a breathtaking sunrise over Pangong Lake. After breakfast, drive back to Leh crossing the high altitude Chang La Pass. En route, stop by the historical Hemis Monastery. Return to Leh by evening for some last-minute souvenir shopping.",
      accommodation: "Grand Himalaya Hotel (Leh)",
      meals: { breakfast: true, lunch: true, dinner: true },
      image: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fcd1?auto=format&fit=crop&w=400&q=80"
    }
  ],
  inclusions: [
    "All airport transfers and local transportation in a private SUV (Innova/Gypsy)",
    "Deluxe hotel accommodations on double-sharing basis as specified",
    "Meals as indicated in the itinerary (Breakfast, Lunch, Dinner details)",
    "Inner Line Permits (ILP) and all environmental fees",
    "Experienced local guide & emergency oxygen cylinders in vehicles",
    "All applicable sightseeing entry tickets"
  ],
  exclusions: [
    "Airfare to and from Leh",
    "Double-humped camel ride or river rafting charges",
    "Personal expenses like mineral water, snacks, laundry, tips",
    "Travel insurance (highly recommended)",
    "Cost escalations due to natural landslides, road blocks, or flight delays"
  ]
};

// --- DOM References ---
const appLogoContainer = document.getElementById('app-logo-container');
const btnLoadDemo = document.getElementById('btn-load-demo');
const btnClearAll = document.getElementById('btn-clear-all');
const btnAddDay = document.getElementById('btn-add-day');
const btnAddInclusion = document.getElementById('btn-add-inclusion');
const btnAddExclusion = document.getElementById('btn-add-exclusion');
const btnDownloadPdf = document.getElementById('btn-download-pdf');
const coverStyleSelect = document.getElementById('cover-style-select');
const pdfDocument = document.getElementById('pdf-document');

// Input fields
const inputTitle = document.getElementById('trip-title');
const inputSubtitle = document.getElementById('trip-subtitle');
const inputDestination = document.getElementById('trip-destination');
const inputDuration = document.getElementById('trip-duration');
const inputDate = document.getElementById('trip-date');
const inputPeople = document.getElementById('trip-people');
const inputType = document.getElementById('trip-type');
const inputCustomerName = document.getElementById('customer-name');
const inputPrice = document.getElementById('trip-price');
const inputPriceQuad = document.getElementById('price-quad');
const inputPriceTriple = document.getElementById('price-triple');
const inputPriceDouble = document.getElementById('price-double');
const inputBanner = document.getElementById('trip-banner');
const inputLogo = document.getElementById('trip-logo');
const inputEmail = document.getElementById('contact-email');
const inputPhone = document.getElementById('contact-phone');
const inputWebsite = document.getElementById('contact-website');
const inputPolicies = document.getElementById('trip-policies');

// Containers for editor rows
const daysContainer = document.getElementById('days-container');
const inclusionsContainer = document.getElementById('inclusions-container');
const exclusionsContainer = document.getElementById('exclusions-container');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  // Inject Logos
  if (appLogoContainer) appLogoContainer.innerHTML = LOGO_SVG;
  
  // Setup theme changes
  coverStyleSelect.addEventListener('change', (e) => {
    pdfDocument.className = `pdf-document-root theme-${e.target.value}`;
  });

  // Setup typography changes
  const inputFontPreset = document.getElementById('font-preset');
  const inputTitleWeight = document.getElementById('title-weight');
  const inputTitleStyle = document.getElementById('title-style');
  const inputTaglineStyle = document.getElementById('tagline-style');
  const inputTitleCase = document.getElementById('title-case');

  const typoBindings = [
    { input: inputFontPreset, stateKey: 'fontFamily' },
    { input: inputTitleWeight, stateKey: 'titleWeight' },
    { input: inputTitleStyle, stateKey: 'titleStyle' },
    { input: inputTaglineStyle, stateKey: 'taglineStyle' },
    { input: inputTitleCase, stateKey: 'titleCase' }
  ];

  typoBindings.forEach(binding => {
    if (binding.input) {
      binding.input.addEventListener('change', (e) => {
        state[binding.stateKey] = e.target.value;
        applyTypographySettings();
      });
    }
  });

  // Setup main field listeners
  const textBindings = [
    { input: inputTitle, stateKey: 'tripTitle', previewId: 'preview-trip-title', isUpper: true },
    { input: inputSubtitle, stateKey: 'tripSubtitle', previewId: 'preview-trip-subtitle' },
    { input: inputDestination, stateKey: 'destination', previewId: 'preview-destination' },
    { input: inputDuration, stateKey: 'duration', previewId: 'preview-duration' },
    { input: inputDate, stateKey: 'startDate', previewId: '' }, // Handled in preview refresh
    { input: inputPeople, stateKey: 'numberOfPeople', previewId: 'preview-people' },
    { input: inputPrice, stateKey: 'price', previewId: '' }, // Handled by updatePricingPreview
    { input: inputPriceQuad, stateKey: 'priceQuad', previewId: '' }, // Handled by updatePricingPreview
    { input: inputPriceTriple, stateKey: 'priceTriple', previewId: '' }, // Handled by updatePricingPreview
    { input: inputPriceDouble, stateKey: 'priceDouble', previewId: '' }, // Handled by updatePricingPreview
    { input: inputCustomerName, stateKey: 'customerName', previewId: '' }, // Handled by updateCustomerNamePreview
    { input: inputBanner, stateKey: 'coverImage', previewId: '' }, // Handled in image refresh
    { input: inputLogo, stateKey: 'logoUrl', previewId: '' }, // Handled in logo refresh
    { input: inputEmail, stateKey: 'contactEmail', previewId: '' },
    { input: inputPhone, stateKey: 'contactPhone', previewId: '' },
    { input: inputWebsite, stateKey: 'contactWebsite', previewId: '' },
    { input: inputPolicies, stateKey: 'policies', previewId: 'preview-policies-text' }
  ];

  textBindings.forEach(binding => {
    binding.input.addEventListener('input', (e) => {
      let val = e.target.value;
      if (binding.isUpper) val = val.toUpperCase();
      state[binding.stateKey] = val;
      
      // Update basic fields in preview immediately
      if (binding.previewId) {
        const previewEl = document.getElementById(binding.previewId);
        if (previewEl) {
          if (binding.stateKey === 'policies') {
            previewEl.textContent = val;
          } else {
            previewEl.innerText = val || "[Enter Value]";
          }
        }
      }
      
      // Special updates
      if (binding.stateKey === 'coverImage') {
        updateCoverImage(val);
      }
      if (binding.stateKey === 'logoUrl') {
        updateLogoRendering(val);
      }
      if (['price', 'priceQuad', 'priceTriple', 'priceDouble'].includes(binding.stateKey)) {
        updatePricingPreview();
      }
      if (binding.stateKey === 'customerName') {
        updateCustomerNamePreview();
      }
      if (binding.stateKey === 'contactEmail' || binding.stateKey === 'contactPhone' || binding.stateKey === 'contactWebsite') {
        updateContactFooter();
      }
    });
  });

  // Trip Type Change listener
  if (inputType) {
    inputType.addEventListener('change', (e) => {
      state.tripType = e.target.value;
      updatePricingPreview();
    });
  }

  // AI Itinerary Assistant Modal Logic
  const modal = document.getElementById('ai-assistant-modal');
  const btnOpenAi = document.getElementById('btn-open-ai');
  const btnCloseAi = document.getElementById('btn-close-ai');
  
  const tabDirect = document.getElementById('tab-ai-direct');
  const tabImport = document.getElementById('tab-ai-import');
  const paneDirect = document.getElementById('pane-ai-direct');
  const paneImport = document.getElementById('pane-ai-import');
  
  const aiProvider = document.getElementById('ai-provider');
  const aiKey = document.getElementById('ai-key');
  const btnToggleKey = document.getElementById('btn-toggle-key');
  const iconToggleKey = document.getElementById('icon-toggle-key');
  const lnkGetKey = document.getElementById('lnk-get-key');
  
  const btnGenerateAi = document.getElementById('btn-generate-ai');
  const btnImportAi = document.getElementById('btn-import-ai');
  
  // Toggle Modal
  btnOpenAi.addEventListener('click', () => {
    modal.classList.add('active');
    // Pre-populate key from storage
    const provider = aiProvider.value;
    aiKey.value = localStorage.getItem(`sar_ai_key_${provider}`) || "";
  });
  
  btnCloseAi.addEventListener('click', () => {
    modal.classList.remove('active');
  });
  
  // Close modal when clicking outside the card
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
  
  // Tab Switching
  tabDirect.addEventListener('click', () => {
    tabDirect.classList.add('active');
    tabImport.classList.remove('active');
    paneDirect.classList.add('active');
    paneImport.classList.remove('active');
  });
  
  tabImport.addEventListener('click', () => {
    tabImport.classList.add('active');
    tabDirect.classList.remove('active');
    paneImport.classList.add('active');
    paneDirect.classList.remove('active');
  });
  
  // Toggle Key Visibility
  btnToggleKey.addEventListener('click', () => {
    if (aiKey.type === 'password') {
      aiKey.type = 'text';
      iconToggleKey.setAttribute('data-lucide', 'eye-off');
    } else {
      aiKey.type = 'password';
      iconToggleKey.setAttribute('data-lucide', 'eye');
    }
    lucide.createIcons();
  });
  
  // Key Input Persistence
  aiKey.addEventListener('input', (e) => {
    const provider = aiProvider.value;
    localStorage.setItem(`sar_ai_key_${provider}`, e.target.value);
  });
  
  // Provider Switching
  aiProvider.addEventListener('change', (e) => {
    const provider = e.target.value;
    aiKey.value = localStorage.getItem(`sar_ai_key_${provider}`) || "";
    
    if (provider === 'gemini') {
      lnkGetKey.href = "https://aistudio.google.com/";
      lnkGetKey.innerHTML = 'Get Free Gemini Key <i data-lucide="external-link" style="width:10px; height:10px; display:inline-block; vertical-align:middle; margin-left:2px;"></i>';
    } else {
      lnkGetKey.href = "https://platform.openai.com/api-keys";
      lnkGetKey.innerHTML = 'Get OpenAI Key <i data-lucide="external-link" style="width:10px; height:10px; display:inline-block; vertical-align:middle; margin-left:2px;"></i>';
    }
    lucide.createIcons();
  });
  
  // Generate Button Click
  btnGenerateAi.addEventListener('click', generateItineraryWithAI);
  
  // Import Button Click
  btnImportAi.addEventListener('click', importPastedItinerary);

  // Event Listeners for Adding Elements
  btnLoadDemo.addEventListener('click', loadDemoData);
  btnClearAll.addEventListener('click', clearAllData);
  btnAddDay.addEventListener('click', addNewDayField);
  btnAddInclusion.addEventListener('click', () => addNewBulletField('inclusions', ''));
  btnAddExclusion.addEventListener('click', () => addNewBulletField('exclusions', ''));
  btnDownloadPdf.addEventListener('click', exportToPDF);
  // Device uploads for Cover Banner Photo
  const fileBanner = document.getElementById('trip-banner-file');
  if (fileBanner) {
    fileBanner.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          state.coverImage = event.target.result;
          inputBanner.value = `(Uploaded: ${file.name})`;
          updateCoverImage(state.coverImage);
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Device uploads for Brand Logo
  const fileLogo = document.getElementById('trip-logo-file');
  if (fileLogo) {
    fileLogo.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          state.logoUrl = event.target.result;
          inputLogo.value = `(Uploaded: ${file.name})`;
          updateLogoRendering(state.logoUrl);
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Mobile tab switching
  const tabBtnEdit = document.getElementById("tab-btn-edit");
  const tabBtnPreview = document.getElementById("tab-btn-preview");
  const appContainerElement = document.querySelector(".app-container");

  if (tabBtnEdit && tabBtnPreview && appContainerElement) {
    tabBtnEdit.addEventListener("click", () => {
      appContainerElement.classList.remove("show-preview");
      tabBtnEdit.classList.add("active");
      tabBtnPreview.classList.remove("active");
    });

    tabBtnPreview.addEventListener("click", () => {
      appContainerElement.classList.add("show-preview");
      tabBtnPreview.classList.add("active");
      tabBtnEdit.classList.remove("active");
    });
  }

  // Load Demo Data on start to give an amazing starting experience!
  loadDemoData();
  
  // Refresh Lucide Icons
  lucide.createIcons();
});

// --- Cover Image Helper ---
function updateCoverImage(url) {
  const coverDiv = document.getElementById('preview-cover-banner');
  if (!coverDiv) return;
  
  const fallbackGrad = "linear-gradient(135deg, rgba(11,17,30,0.85) 0%, rgba(31,195,163,0.3) 100%)";
  const defaultImg = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80";
  
  const imageUrl = url || defaultImg;
  coverDiv.style.backgroundImage = `${fallbackGrad}, url('${imageUrl}')`;
}

// --- Footer Info Helper ---
function updateContactFooter() {
  const coverContact = document.getElementById('preview-cover-contact');
  const detailsContact = document.getElementById('preview-footer-contact-details');
  
  const email = state.contactEmail || "info@saroutdoors.com";
  const phone = state.contactPhone || "";
  const website = state.contactWebsite || "www.saroutdoors.com";
  
  if (coverContact) {
    coverContact.innerText = `${email} ${phone ? '| ' + phone : ''} | ${website}`;
  }
  if (detailsContact) {
    detailsContact.innerText = `Contact: ${email} ${phone ? '| ' + phone : ''} | ${website}`;
  }
}

// --- Dynamic Days Editor ---
function renderDaysEditor() {
  daysContainer.innerHTML = "";
  state.itineraryDays.forEach((day, index) => {
    createDayEditorBlock(day, index);
  });
}

function createDayEditorBlock(day, index) {
  const card = document.createElement('div');
  card.className = "day-block-card";
  card.dataset.index = index;

  card.innerHTML = `
    <div class="day-block-header">
      <span class="day-block-title-text">Day ${index + 1}: Details</span>
      <button class="day-block-delete" type="button" onclick="deleteDayField(${index})">
        <i data-lucide="trash-2"></i>
      </button>
    </div>
    <div class="form-group">
      <label>Day Title</label>
      <input type="text" class="day-title-input" value="${day.title}" placeholder="e.g., Journey to Leh">
    </div>
    <div class="form-group">
      <label>Day Highlights (Comma-separated)</label>
      <input type="text" class="day-highlights-input" value="${day.highlights}" placeholder="e.g., Scenic drive, High altitude pass, Campfire">
    </div>
    <div class="form-group">
      <label>Detailed Description</label>
      <textarea class="day-description-input" rows="3" placeholder="Describe the day's activities...">${day.description}</textarea>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Accommodation</label>
        <input type="text" class="day-accommodation-input" value="${day.accommodation}" placeholder="e.g., Luxury Tents">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Meals Included</label>
        <div class="meal-options">
          <label class="meal-checkbox">
            <input type="checkbox" class="meal-b-input" ${day.meals.breakfast ? 'checked' : ''}> B
          </label>
          <label class="meal-checkbox">
            <input type="checkbox" class="meal-l-input" ${day.meals.lunch ? 'checked' : ''}> L
          </label>
          <label class="meal-checkbox">
            <input type="checkbox" class="meal-d-input" ${day.meals.dinner ? 'checked' : ''}> D
          </label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label>Day Image (Optional)</label>
      <div class="day-image-inputs" style="display: flex; gap: 8px;">
        <input type="text" class="day-image-url-input" value="${day.image && !day.image.startsWith('data:') ? day.image : ''}" placeholder="Paste URL or upload" style="flex: 1;">
        <label class="btn btn-secondary" style="padding: 10px 12px; margin-top: 0; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 4px; white-space: nowrap;">
          <i data-lucide="upload" style="width: 14px; height: 14px;"></i>
          <span>Upload</span>
          <input type="file" class="day-image-file-input" accept="image/*" style="display: none;">
        </label>
        <button type="button" class="btn btn-secondary btn-ai-gen-day-image" style="padding: 10px 12px; display: flex; align-items: center; justify-content: center; gap: 4px; white-space: nowrap;">
          <i data-lucide="wand-2" style="width: 14px; height: 14px; color: #a855f7;"></i>
          <span>AI Gen</span>
        </button>
      </div>
      <div class="day-image-preview-container" style="display: ${day.image ? 'flex' : 'none'}; align-items: center; gap: 10px; margin-top: 8px;">
        <img class="day-image-preview-img" src="${day.image || ''}">
        <span class="day-image-filename-txt" style="font-size: 0.75rem; color: var(--text-app-muted); flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          ${day.image ? (day.image.startsWith('data:') ? 'Local Image Attached' : 'URL Image Attached') : ''}
        </span>
        <button type="button" class="btn btn-sm btn-outline btn-clear-day-image">Remove</button>
      </div>
    </div>
  `;

  daysContainer.appendChild(card);
  
  // Attach Event Listeners to Day Inputs to dynamically sync preview
  const inputs = {
    title: card.querySelector('.day-title-input'),
    highlights: card.querySelector('.day-highlights-input'),
    description: card.querySelector('.day-description-input'),
    accommodation: card.querySelector('.day-accommodation-input'),
    b: card.querySelector('.meal-b-input'),
    l: card.querySelector('.meal-l-input'),
    d: card.querySelector('.meal-d-input')
  };

  const imgUrlInput = card.querySelector('.day-image-url-input');
  const imgFileInput = card.querySelector('.day-image-file-input');
  const imgAiBtn = card.querySelector('.btn-ai-gen-day-image');
  const imgClearBtn = card.querySelector('.btn-clear-day-image');
  const imgPreviewContainer = card.querySelector('.day-image-preview-container');
  const imgPreviewImg = card.querySelector('.day-image-preview-img');
  const imgFilenameTxt = card.querySelector('.day-image-filename-txt');

  const updateState = () => {
    state.itineraryDays[index].title = inputs.title.value;
    state.itineraryDays[index].highlights = inputs.highlights.value;
    state.itineraryDays[index].description = inputs.description.value;
    state.itineraryDays[index].accommodation = inputs.accommodation.value;
    state.itineraryDays[index].meals.breakfast = inputs.b.checked;
    state.itineraryDays[index].meals.lunch = inputs.l.checked;
    state.itineraryDays[index].meals.dinner = inputs.d.checked;
    renderItineraryPreview();
  };

  Object.values(inputs).forEach(input => {
    input.addEventListener('input', updateState);
    if (input.type === 'checkbox') {
      input.addEventListener('change', updateState);
    }
  });

  // URL input listener
  imgUrlInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    state.itineraryDays[index].image = val;
    if (val) {
      imgPreviewImg.src = val;
      imgPreviewContainer.style.display = 'flex';
      imgFilenameTxt.innerText = 'URL Image Attached';
    } else {
      imgPreviewContainer.style.display = 'none';
    }
    renderItineraryPreview();
  });

  // File Upload listener
  imgFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Str = event.target.result;
        state.itineraryDays[index].image = base64Str;
        imgUrlInput.value = `(Uploaded: ${file.name})`;
        imgPreviewImg.src = base64Str;
        imgPreviewContainer.style.display = 'flex';
        imgFilenameTxt.innerText = 'Local Image Attached';
        renderItineraryPreview();
      };
      reader.readAsDataURL(file);
    }
  });

  // Remove/Clear image listener
  imgClearBtn.addEventListener('click', () => {
    state.itineraryDays[index].image = "";
    imgUrlInput.value = "";
    imgPreviewContainer.style.display = 'none';
    renderItineraryPreview();
  });

  // AI Gen image click listener
  imgAiBtn.addEventListener('click', () => {
    generateDayImage(index, card);
  });

  lucide.createIcons();
}

function extractSearchKeywords(dayTitle, dayHighlights, destination) {
  // If we have a very specific title, let's extract nouns/locations
  // Remove common words like "Arrival", "Departure", "Day", "in", "to", "via", "and", "of", "with", "for", "at"
  const stopwords = new Set([
    'day', 'arrival', 'departure', 'journey', 'travel', 'trip', 'expedition', 'tour', 'sightseeing',
    'in', 'to', 'via', 'and', 'of', 'with', 'for', 'at', 'on', 'the', 'a', 'an', 'our', 'us', 'we',
    'rest', 'acclimatization', 'pickup', 'drop', 'transfer', 'hotel', 'camp', 'stay', 'accommodation',
    'morning', 'evening', 'afternoon', 'night', 'dinner', 'breakfast', 'lunch', 'meals', 'local',
    'visit', 'visiting', 'explore', 'exploring', 'drive', 'driving', 'road', 'pass', 'lake', 'mountain',
    'trek', 'trekking', 'hike', 'hiking', 'view', 'scenic', 'beauty', 'beautiful', 'scenery', 'leisure',
    'free', 'time', 'day-long', 'full', 'half', 'pax', 'people', 'group', 'check-in', 'checkout'
  ]);

  // Try to find specific place names in title
  let words = (dayTitle + " " + dayHighlights)
    .replace(/[^a-zA-Z0-9\s]/g, ' ') // remove special chars
    .split(/\s+/)
    .map(w => w.trim())
    .filter(w => w.length > 2);

  // Filter out stop words (case insensitive)
  let filtered = words.filter(w => !stopwords.has(w.toLowerCase()));

  // Keep unique words
  let uniqueWords = [...new Set(filtered)];

  // If we have specific words, take the first 2-3
  if (uniqueWords.length > 0) {
    return uniqueWords.slice(0, 3).join(',');
  }

  // Fallback to destination or generic travel
  if (destination && destination.trim() !== "") {
    // extract first 2 words of destination
    let destWords = destination.replace(/[^a-zA-Z0-9\s]/g, ' ').split(/\s+/).map(w => w.trim()).filter(w => w.length > 2 && !stopwords.has(w.toLowerCase()));
    if (destWords.length > 0) {
      return destWords.slice(0, 2).join(',');
    }
  }

  return "landscape,travel";
}

const CURATED_UNSPLASH_PHOTOS = {
  himalayas: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
  mountains: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
  lake: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  camping: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
  temple: "https://images.unsplash.com/photo-1602616191244-e22e5d95d36e?auto=format&fit=crop&w=800&q=80",
  desert: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&w=800&q=80",
  trekking: "https://images.unsplash.com/photo-1486916856992-e4db22c8df33?auto=format&fit=crop&w=800&q=80",
  roadtrip: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
};

function getCuratedUnsplashUrl(keywords) {
  const kwLower = (keywords || "").toLowerCase();
  if (kwLower.includes("temple") || kwLower.includes("kedarnath") || kwLower.includes("badrinath") || kwLower.includes("church") || kwLower.includes("monastery") || kwLower.includes("shrine") || kwLower.includes("diskit")) {
    return CURATED_UNSPLASH_PHOTOS.temple;
  }
  if (kwLower.includes("lake") || kwLower.includes("pangong") || kwLower.includes("tsomgo") || kwLower.includes("water") || kwLower.includes("river") || kwLower.includes("confluence") || kwLower.includes("sangam")) {
    return CURATED_UNSPLASH_PHOTOS.lake;
  }
  if (kwLower.includes("camp") || kwLower.includes("camping") || kwLower.includes("tent") || kwLower.includes("star") || kwLower.includes("campfire")) {
    return CURATED_UNSPLASH_PHOTOS.camping;
  }
  if (kwLower.includes("desert") || kwLower.includes("dune") || kwLower.includes("dunes") || kwLower.includes("camel") || kwLower.includes("hunder") || kwLower.includes("safari")) {
    return CURATED_UNSPLASH_PHOTOS.desert;
  }
  if (kwLower.includes("trek") || kwLower.includes("trekking") || kwLower.includes("hike") || kwLower.includes("hiking") || kwLower.includes("climb")) {
    return CURATED_UNSPLASH_PHOTOS.trekking;
  }
  if (kwLower.includes("drive") || kwLower.includes("road") || kwLower.includes("car") || kwLower.includes("highway") || kwLower.includes("jeep") || kwLower.includes("suv")) {
    return CURATED_UNSPLASH_PHOTOS.roadtrip;
  }
  if (kwLower.includes("leh") || kwLower.includes("ladakh") || kwLower.includes("khardung") || kwLower.includes("pass") || kwLower.includes("mountain") || kwLower.includes("himalaya")) {
    return CURATED_UNSPLASH_PHOTOS.himalayas;
  }
  return CURATED_UNSPLASH_PHOTOS.mountains;
}

function convertImageUrlToBase64(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const maxDim = 800;
        let w = img.width;
        let h = img.height;
        if (w > maxDim || h > maxDim) {
          if (w > h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, w, h);
        const dataURL = canvas.toDataURL("image/jpeg", 0.85);
        resolve(dataURL);
      } catch (err) {
        reject(err);
      }
    };
    img.onerror = () => {
      reject(new Error("Failed to load image for base64 conversion"));
    };
    img.src = url + (url.includes('?') ? '&' : '?') + 't=' + new Date().getTime();
  });
}

function generateSvgPlaceholder(title) {
  const cleanTitle = title || "Scenic Destination";
  const gradients = [
    { start: '#1e293b', end: '#0f172a', text: '#1fc3a3' },
    { start: '#0c4a6e', end: '#082f49', text: '#38bdf8' },
    { start: '#134e4a', end: '#115e59', text: '#2dd4bf' },
    { start: '#311042', end: '#1e1b4b', text: '#c084fc' }
  ];
  
  let hash = 0;
  for (let i = 0; i < cleanTitle.length; i++) {
    hash = cleanTitle.charCodeAt(i) + ((hash << 5) - hash);
  }
  const grad = gradients[Math.abs(hash) % gradients.length];
  
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${grad.start}" />
      <stop offset="100%" stop-color="${grad.end}" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad)"/>
  <g opacity="0.2">
    <circle cx="120" cy="80" r="1.5" fill="#ffffff"/>
    <circle cx="280" cy="140" r="1" fill="#ffffff"/>
    <circle cx="410" cy="60" r="2" fill="#ffffff"/>
    <circle cx="580" cy="190" r="1.5" fill="#ffffff"/>
    <circle cx="720" cy="110" r="1" fill="#ffffff"/>
    <circle cx="190" cy="220" r="2" fill="#ffffff"/>
    <circle cx="340" cy="250" r="1" fill="#ffffff"/>
    <circle cx="660" cy="240" r="1.5" fill="#ffffff"/>
  </g>
  <g opacity="0.05" stroke="#ffffff" stroke-width="1">
    <line x1="0" y1="150" x2="800" y2="150"/>
    <line x1="0" y1="300" x2="800" y2="300"/>
    <line x1="0" y1="450" x2="800" y2="450"/>
    <line x1="200" y1="0" x2="200" y2="600"/>
    <line x1="400" y1="0" x2="400" y2="600"/>
    <line x1="600" y1="0" x2="600" y2="600"/>
  </g>
  <circle cx="650" cy="150" r="50" fill="#fef08a" opacity="0.6"/>
  <circle cx="650" cy="150" r="65" fill="#fef08a" opacity="0.1"/>
  <path d="M 0 600 L 250 280 L 500 600 Z" fill="#1e293b" opacity="0.4"/>
  <path d="M 320 600 L 580 320 L 800 600 Z" fill="#1e293b" opacity="0.3"/>
  <path d="M -50 600 L 150 380 L 380 600 Z" fill="#0f172a" opacity="0.75"/>
  <path d="M 250 600 L 500 350 L 750 600 Z" fill="#0f172a" opacity="0.75"/>
  <path d="M 150 380 L 170 410 L 130 410 Z" fill="#ffffff" opacity="0.9"/>
  <path d="M 500 350 L 515 375 L 485 375 Z" fill="#ffffff" opacity="0.9"/>
  <path d="M 60 600 L 75 530 L 90 600 Z" fill="#020617"/>
  <path d="M 80 600 L 90 550 L 100 600 Z" fill="#020617"/>
  <path d="M 710 600 L 725 520 L 740 600 Z" fill="#020617"/>
  <rect x="120" y="460" width="560" height="100" rx="16" fill="#090d16" opacity="0.8" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.15"/>
  <text x="50%" y="498" font-family="'Outfit', 'Inter', sans-serif" font-weight="800" font-size="22" fill="#ffffff" text-anchor="middle" letter-spacing="1">${cleanTitle.toUpperCase()}</text>
  <text x="50%" y="534" font-family="'Outfit', 'Inter', sans-serif" font-weight="600" font-size="12" fill="${grad.text}" text-anchor="middle" letter-spacing="4">SAR OUTDOORS ADVENTURE</text>
</svg>
`;
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg.trim())));
}

async function generateDayImage(index, card) {
  const day = state.itineraryDays[index];
  const imgAiBtn = card.querySelector('.btn-ai-gen-day-image');
  const imgUrlInput = card.querySelector('.day-image-url-input');
  const imgPreviewContainer = card.querySelector('.day-image-preview-container');
  const imgPreviewImg = card.querySelector('.day-image-preview-img');
  const imgFilenameTxt = card.querySelector('.day-image-filename-txt');

  const originalContent = imgAiBtn.innerHTML;
  imgAiBtn.innerHTML = `<i style="animation: spin 1.5s linear infinite;" data-lucide="loader"></i><span>Gen...</span>`;
  imgAiBtn.disabled = true;
  lucide.createIcons();

  try {
    const provider = document.getElementById('ai-provider')?.value || 'gemini';
    const apiKey = localStorage.getItem(`sar_ai_key_${provider}`) || "";
    
    let base64Str = "";
    let generatedPromptText = "";

    if (apiKey && apiKey.trim() !== "") {
      const promptText = `Based on the following travel details, write a single concise photographic image description/prompt (maximum 25 words) for generating a scenic travel image of this specific day's location/activities. Focus ONLY on landscapes, landmarks, vibes, and visual elements. If the day's activities or location (e.g., visiting Kedarnath) differ from the overall trip destination (e.g., Ladakh), prioritize the day's specific location and landmarks. Do not include instructions, introductions, or generic words. Keep it as a raw, descriptive scene prompt.
Details:
Destination: ${state.destination}
Day Title: ${day.title}
Highlights: ${day.highlights}
Description: ${day.description}`;

      let optimizedPrompt = `${state.destination || "Ladakh"}, ${day.title || ""}, ${day.highlights || ""}`;
      
      try {
        if (provider === 'gemini') {
          const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
          const response = await fetch(geminiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: promptText }] }],
              generationConfig: {
                maxOutputTokens: 50,
                temperature: 0.7
              }
            })
          });
          if (response.ok) {
            const data = await response.json();
            const aiPrompt = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (aiPrompt && aiPrompt.trim() !== "") {
              optimizedPrompt = aiPrompt.trim();
            }
          } else {
            console.warn(`Prompt optimization failed: ${response.status} ${response.statusText}`);
          }
        } else if (provider === 'openai') {
          const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
              model: "gpt-4o-mini",
              messages: [
                { role: "system", content: "You are a professional image prompting assistant. Respond with ONLY the image description prompt, nothing else." },
                { role: "user", content: promptText }
              ],
              max_tokens: 50
            })
          });
          if (response.ok) {
            const data = await response.json();
            const aiPrompt = data.choices?.[0]?.message?.content;
            if (aiPrompt && aiPrompt.trim() !== "") {
              optimizedPrompt = aiPrompt.trim();
            }
          } else {
            console.warn(`Prompt optimization failed: ${response.status} ${response.statusText}`);
          }
        }
      } catch (err) {
        console.warn("Failed to optimize prompt with AI, using fallback prompt formula.", err);
      }

      generatedPromptText = optimizedPrompt;

      try {
        if (provider === 'gemini') {
          console.log(`Generating image via Gemini Imagen 3.0 API with prompt: "${optimizedPrompt}"`);
          const imagenUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`;
          const imageResponse = await fetch(imagenUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              instances: [
                {
                  prompt: optimizedPrompt
                }
              ],
              parameters: {
                aspectRatio: "4:3",
                outputMimeType: "image/jpeg",
                numberOfImages: 1
              }
            })
          });

          if (!imageResponse.ok) {
            const errBody = await imageResponse.json().catch(() => ({}));
            throw new Error(errBody.error?.message || `HTTP ${imageResponse.status} ${imageResponse.statusText}`);
          }

          const imageData = await imageResponse.json();
          const b64Data = imageData.predictions?.[0]?.bytesBase64Encoded;
          if (!b64Data) {
            throw new Error("No image data bytes returned in Gemini response.");
          }

          base64Str = `data:image/jpeg;base64,${b64Data}`;
          console.log("Successfully generated image via Gemini Imagen API!");

        } else if (provider === 'openai') {
          console.log(`Generating image via OpenAI DALL-E API with prompt: "${optimizedPrompt}"`);
          const dallEUrl = 'https://api.openai.com/v1/images/generations';
          const imageResponse = await fetch(dallEUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
              model: "dall-e-2",
              prompt: optimizedPrompt,
              n: 1,
              size: "512x512",
              response_format: "b64_json"
            })
          });

          if (!imageResponse.ok) {
            const errBody = await imageResponse.json().catch(() => ({}));
            throw new Error(errBody.error?.message || `HTTP ${imageResponse.status} ${imageResponse.statusText}`);
          }

          const imageData = await imageResponse.json();
          const b64Data = imageData.data?.[0]?.b64_json;
          if (!b64Data) {
            throw new Error("No image data b64_json returned in OpenAI response.");
          }

          base64Str = `data:image/png;base64,${b64Data}`;
          console.log("Successfully generated image via OpenAI DALL-E API!");
        }
      } catch (imageErr) {
        console.error("Direct API key-based image generation failed, falling back to Pollinations/Lorem Flickr...", imageErr);
      }
    }

    if (!base64Str) {
      const cleanKeywords = extractSearchKeywords(day.title, day.highlights, state.destination);
      const simplifiedPrompt = cleanKeywords.replace(/,/g, ' ');
      
      const rawPrompt = generatedPromptText || `scenic travel photograph of ${simplifiedPrompt}`;
      console.log(`Using fallback image generator with prompt/keywords: "${rawPrompt}"`);

      try {
        const cleanPrompt = encodeURIComponent(rawPrompt + ", professional travel photography, scenic, highly detailed");
        const seed = Math.floor(Math.random() * 1000000);
        const imageUrl = `https://image.pollinations.ai/prompt/${cleanPrompt}?width=800&height=600&nologo=true&seed=${seed}`;
        const proxyUrl = `/proxy?url=${encodeURIComponent(imageUrl)}`;

        console.log("Attempting fallback image from Pollinations via proxy...");
        let imgResponse = await fetch(proxyUrl);
        if (!imgResponse.ok) {
          console.warn(`Proxy failed (HTTP ${imgResponse.status}), attempting direct client-side fetch from Pollinations...`);
          imgResponse = await fetch(imageUrl);
        }
        if (!imgResponse.ok) {
          throw new Error(`Pollinations AI returned HTTP ${imgResponse.status}`);
        }
        const blob = await imgResponse.blob();
        
        base64Str = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => reject(new Error("Failed to convert image blob to base64"));
          reader.readAsDataURL(blob);
        });
        console.log("Successfully fetched fallback image from Pollinations AI!");
      } catch (pollinationsErr) {
        console.warn("Pollinations AI fetch failed entirely, attempting curated Unsplash fallback...", pollinationsErr);
        
        try {
          const unsplashUrl = getCuratedUnsplashUrl(cleanKeywords);
          console.log(`Attempting fallback image from curated Unsplash CORS DB: ${unsplashUrl}`);
          base64Str = await convertImageUrlToBase64(unsplashUrl);
          console.log("Successfully converted Unsplash image to base64!");
        } catch (unsplashErr) {
          console.warn("Curated Unsplash load failed, falling back to local SVG dynamic placeholder...", unsplashErr);
          base64Str = generateSvgPlaceholder(day.title);
          console.log("Successfully generated local SVG placeholder!");
        }
      }
    }

    state.itineraryDays[index].image = base64Str;
    
    if (apiKey && apiKey.trim() !== "" && generatedPromptText) {
      imgUrlInput.value = `(AI Generated: ${generatedPromptText.substring(0, 20)}...)`;
      imgFilenameTxt.innerText = 'AI Image Attached';
    } else {
      imgUrlInput.value = `(Travel Photo: ${day.title || "Adventure"})`;
      imgFilenameTxt.innerText = 'Scenic Photo Attached';
    }
    
    imgPreviewImg.src = base64Str;
    imgPreviewContainer.style.display = 'flex';
    renderItineraryPreview();

  } catch (error) {
    console.error("All image generation and fallback attempts failed, using backup SVG placeholder:", error);
    const base64Str = generateSvgPlaceholder(day.title);
    state.itineraryDays[index].image = base64Str;
    imgUrlInput.value = `(Scenic Placeholder: ${day.title || "Adventure"})`;
    imgFilenameTxt.innerText = 'Scenic Photo Attached';
    imgPreviewImg.src = base64Str;
    imgPreviewContainer.style.display = 'flex';
    renderItineraryPreview();
  } finally {
    imgAiBtn.innerHTML = originalContent;
    imgAiBtn.disabled = false;
    lucide.createIcons();
  }
}

function addNewDayField() {
  const newDay = {
    title: `New Day ${state.itineraryDays.length + 1}`,
    highlights: "",
    description: "",
    accommodation: "",
    meals: { breakfast: true, lunch: true, dinner: true },
    image: ""
  };
  state.itineraryDays.push(newDay);
  createDayEditorBlock(newDay, state.itineraryDays.length - 1);
  renderItineraryPreview();
}

// Window scope deletion helper
window.deleteDayField = function(index) {
  state.itineraryDays.splice(index, 1);
  renderDaysEditor();
  renderItineraryPreview();
};

// --- Inclusions & Exclusions List Editor ---
function renderBulletListEditor(type) {
  const container = type === 'inclusions' ? inclusionsContainer : exclusionsContainer;
  container.innerHTML = "";
  
  state[type].forEach((item, index) => {
    createBulletEditorRow(type, item, index);
  });
}

function createBulletEditorRow(type, val, index) {
  const container = type === 'inclusions' ? inclusionsContainer : exclusionsContainer;
  const row = document.createElement('div');
  row.className = "bullet-editor-row";
  row.dataset.index = index;

  row.innerHTML = `
    <input type="text" class="bullet-input" value="${val}" placeholder="e.g., Professional guide services">
    <button class="btn-delete-item" type="button" onclick="deleteBulletField('${type}', ${index})">
      <i data-lucide="x"></i>
    </button>
  `;

  container.appendChild(row);

  const input = row.querySelector('.bullet-input');
  input.addEventListener('input', (e) => {
    state[type][index] = e.target.value;
    renderBulletPreview(type);
  });

  lucide.createIcons();
}

function addNewBulletField(type, val) {
  state[type].push(val);
  createBulletEditorRow(type, val, state[type].length - 1);
  renderBulletPreview(type);
}

window.deleteBulletField = function(type, index) {
  state[type].splice(index, 1);
  renderBulletListEditor(type);
  renderBulletPreview(type);
};

// --- Dynamic Preview Rendering (A4 Fitting) ---

function renderBulletPreview(type) {
  const listEl = document.getElementById(type === 'inclusions' ? 'preview-inclusions-list' : 'preview-exclusions-list');
  if (!listEl) return;
  
  listEl.innerHTML = "";
  state[type].forEach(item => {
    if (item.trim() !== "") {
      const li = document.createElement('li');
      li.innerText = item;
      listEl.appendChild(li);
    }
  });
}

function renderItineraryPreview() {
  // We need to render days. To handle PDF pages gracefully on screen and in download, 
  // we dynamically split days. A single itinerary page fits exactly 3 days.
  // We will dynamically clear all existing itinerary pages and create Itinerary Page 1, Page 2, etc.
  
  // Let's identify the cover page and details page to insert our dynamic pages between them.
  const pdfCover = document.getElementById('pdf-cover-page');
  const pdfDetails = document.getElementById('pdf-details-page');
  
  // Remove any existing dynamic itinerary pages
  const existingPages = document.querySelectorAll('.dynamic-itinerary-page');
  existingPages.forEach(page => page.remove());

  const days = state.itineraryDays;
  if (days.length === 0) {
    // Show empty state inside a single page
    const page = createItineraryPageHTML(1, []);
    pdfDocument.insertBefore(page, pdfDetails);
    return;
  }

  // Split days: 3 days per page
  const daysPerPage = 3;
  const pageCount = Math.ceil(days.length / daysPerPage);

  for (let i = 0; i < pageCount; i++) {
    const pageDays = days.slice(i * daysPerPage, (i * 1) * daysPerPage + daysPerPage);
    const pageNum = i + 2; // Cover is page 1, so itinerary starts at page 2
    const pageNode = createItineraryPageHTML(pageNum, pageDays);
    pdfDocument.insertBefore(pageNode, pdfDetails);
  }

  // Update last page details (Page numbers)
  const totalPages = pageCount + 2; // Cover (1) + Itinerary Pages + Details Page (1)
  const lastPageNumEl = document.getElementById('preview-last-page-num');
  if (lastPageNumEl) {
    lastPageNumEl.innerText = `Page ${totalPages}`;
  }

  // Inject small header logo into all pages
  const headerLogos = document.querySelectorAll('.header-logo-mini');
  const targetLogoUrl = (state.logoUrl && state.logoUrl.trim() !== "") ? state.logoUrl : BASE64_LOGO_SVG;
  headerLogos.forEach(logoContainer => {
    logoContainer.innerHTML = `<img src="${targetLogoUrl}" class="custom-logo-img" alt="Logo">`;
  });

  lucide.createIcons();
}

function createItineraryPageHTML(pageNum, days) {
  const page = document.createElement('div');
  page.className = "pdf-page pdf-page-content dynamic-itinerary-page";
  page.id = `pdf-itinerary-page-${pageNum - 1}`;

  let timelineHTML = "";
  if (days.length === 0) {
    timelineHTML = `<div class="section-helper">No itinerary days added yet. Click 'Add Another Day' in the planner.</div>`;
  } else {
    days.forEach((day, index) => {
      // Calculate exact day sequence index in overall list
      const overallIndex = state.itineraryDays.indexOf(day) + 1;
      
      // Parse Highlights
      let highlightChips = "";
      if (day.highlights && day.highlights.trim() !== "") {
        const chips = day.highlights.split(',');
        chips.forEach(chip => {
          if (chip.trim() !== "") {
            highlightChips += `<span class="highlight-tag">${chip.trim()}</span>`;
          }
        });
      }

      // Meals Indicators
      const bClass = day.meals.breakfast ? 'active' : '';
      const lClass = day.meals.lunch ? 'active' : '';
      const dClass = day.meals.dinner ? 'active' : '';

      const hasImage = day.image && day.image.trim() !== "";
      
      let timelineContentHTML = `
        <div class="timeline-day-header">
          <h3 class="timeline-day-title">Day ${overallIndex}: ${day.title || 'Expedition Activities'}</h3>
          <span class="timeline-day-details-badge">Day Plan</span>
        </div>
        
        ${highlightChips ? `<div class="timeline-day-highlights">${highlightChips}</div>` : ''}
        
        <p class="timeline-day-description">${day.description || 'Day activities details will go here.'}</p>
        
        <div class="timeline-day-meta">
          <div class="meta-block">
            <i data-lucide="hotel"></i>
            <span>${day.accommodation || 'Camping / Hotel'}</span>
          </div>
          <div class="meta-block">
            <span style="font-weight:600; font-size:0.75rem; margin-right:4px;">Meals:</span>
            <div class="meal-badge-group">
              <span class="meal-mini-badge ${bClass}">B</span>
              <span class="meal-mini-badge ${lClass}">L</span>
              <span class="meal-mini-badge ${dClass}">D</span>
            </div>
          </div>
        </div>
      `;

      if (hasImage) {
        timelineHTML += `
          <div class="timeline-item">
            <div class="timeline-badge">${overallIndex}</div>
            <div class="timeline-content has-image">
              <div class="timeline-text-side">
                ${timelineContentHTML}
              </div>
              <div class="timeline-image-side">
                <img src="${day.image}" class="timeline-day-image" alt="Day ${overallIndex} Image">
              </div>
            </div>
          </div>
        `;
      } else {
        timelineHTML += `
          <div class="timeline-item">
            <div class="timeline-badge">${overallIndex}</div>
            <div class="timeline-content">
              ${timelineContentHTML}
            </div>
          </div>
        `;
      }
    });
  }

  page.innerHTML = `
    <div class="page-header">
      <div class="header-logo-mini"></div>
      <div class="header-page-title">Daily Expedition Plan</div>
    </div>
    
    <div class="page-body">
      <h2 class="page-section-heading">Detailed Itinerary</h2>
      <div class="timeline-container">
        ${timelineHTML}
      </div>
    </div>

    <div class="page-footer">
      <div class="footer-line"></div>
      <div class="footer-flex">
        <span class="footer-brand">SAR Outdoors &bull; Adventure Travel</span>
        <span class="footer-page-num">Page ${pageNum}</span>
      </div>
    </div>
  `;

  return page;
}

// --- Load / Clear State Actions ---

function applyTypographySettings() {
  const doc = document.getElementById('pdf-document');
  if (!doc) return;
  
  let titleFont = "'Outfit'";
  let bodyFont = "'Inter'";
  
  const preset = state.fontFamily || 'modern';
  if (preset === 'classic') {
    titleFont = "'Montserrat'";
    bodyFont = "'Roboto'";
  } else if (preset === 'elegant') {
    titleFont = "'Playfair Display'";
    bodyFont = "'Lora'";
  } else if (preset === 'soft') {
    titleFont = "'Poppins'";
    bodyFont = "'Open Sans'";
  }
  
  const titleWeight = state.titleWeight || '900';
  const titleStyle = state.titleStyle || 'normal';
  
  let tagWeight = '800';
  let tagStyle = 'normal';
  const taglineStyle = state.taglineStyle || 'bold-normal';
  if (taglineStyle === 'bold-italic') {
    tagWeight = '800';
    tagStyle = 'italic';
  } else if (taglineStyle === 'medium-normal') {
    tagWeight = '500';
    tagStyle = 'normal';
  } else if (taglineStyle === 'medium-italic') {
    tagWeight = '500';
    tagStyle = 'italic';
  }
  
  const titleCase = state.titleCase || 'uppercase';

  // Update/create the dynamic stylesheet block in <head> for reliable pdf export
  let styleTag = document.getElementById('dynamic-typography-styles');
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'dynamic-typography-styles';
    document.head.appendChild(styleTag);
  }
  
  styleTag.innerHTML = `
    .pdf-document-root {
      --title-font: ${titleFont} !important;
      --body-font: ${bodyFont} !important;
      --title-weight: ${titleWeight} !important;
      --title-style: ${titleStyle} !important;
      --tagline-weight: ${tagWeight} !important;
      --tagline-style: ${tagStyle} !important;
      --title-case: ${titleCase} !important;
    }
  `;

  // Set them inline on the DOM element too for screen rendering
  doc.style.setProperty('--title-font', titleFont);
  doc.style.setProperty('--body-font', bodyFont);
  doc.style.setProperty('--title-weight', titleWeight);
  doc.style.setProperty('--title-style', titleStyle);
  doc.style.setProperty('--tagline-weight', tagWeight);
  doc.style.setProperty('--tagline-style', tagStyle);
  doc.style.setProperty('--title-case', titleCase);
}

function loadDemoData() {
  state = JSON.parse(JSON.stringify(DEMO_STATE));
  
  // Fill inputs
  inputTitle.value = state.tripTitle;
  inputSubtitle.value = state.tripSubtitle;
  inputDestination.value = state.destination;
  inputDuration.value = state.duration;
  inputDate.value = state.startDate;
  inputPeople.value = state.numberOfPeople;
  inputPrice.value = state.price;
  inputType.value = state.tripType || "private";
  inputCustomerName.value = state.customerName || "";
  inputPriceQuad.value = state.priceQuad || "";
  inputPriceTriple.value = state.priceTriple || "";
  inputPriceDouble.value = state.priceDouble || "";
  inputBanner.value = state.coverImage;
  inputLogo.value = state.logoUrl;
  inputEmail.value = state.contactEmail;
  inputPhone.value = state.contactPhone;
  inputWebsite.value = state.contactWebsite;
  inputPolicies.value = state.policies;

  // Typography inputs
  document.getElementById('font-preset').value = state.fontFamily || "modern";
  document.getElementById('title-weight').value = state.titleWeight || "900";
  document.getElementById('title-style').value = state.titleStyle || "normal";
  document.getElementById('tagline-style').value = state.taglineStyle || "bold-normal";
  document.getElementById('title-case').value = state.titleCase || "uppercase";
  
  applyTypographySettings();

  // Update Cover Logo, Image, and Contact Info
  updateLogoRendering(state.logoUrl);
  updateCoverImage(state.coverImage);
  updateContactFooter();

  // Populate preview text blocks
  document.getElementById('preview-trip-title').innerText = state.tripTitle;
  document.getElementById('preview-trip-subtitle').innerText = state.tripSubtitle;
  document.getElementById('preview-destination').innerText = state.destination;
  document.getElementById('preview-duration').innerText = state.duration;
  document.getElementById('preview-people').innerText = state.numberOfPeople;
  document.getElementById('preview-policies-text').textContent = state.policies;

  updatePricingPreview();
  updateCustomerNamePreview();

  // Render Editors and Sub-Previews
  renderDaysEditor();
  renderBulletListEditor('inclusions');
  renderBulletListEditor('exclusions');
  
  renderItineraryPreview();
  renderBulletPreview('inclusions');
  renderBulletPreview('exclusions');

  lucide.createIcons();
}

function clearAllData() {
  state = {
    tripTitle: "",
    tripSubtitle: "",
    destination: "",
    duration: "",
    startDate: "",
    numberOfPeople: "",
    price: "",
    customerName: "",
    tripType: "private",
    priceQuad: "",
    priceTriple: "",
    priceDouble: "",
    coverImage: "",
    logoUrl: "",
    contactEmail: "",
    contactPhone: "",
    contactWebsite: "",
    policies: "",
    itineraryDays: [],
    inclusions: [],
    exclusions: [],
    fontFamily: "modern",
    titleWeight: "900",
    titleStyle: "normal",
    taglineStyle: "bold-normal",
    titleCase: "uppercase"
  };

  // Clear inputs
  const inputs = [
    inputTitle, inputSubtitle, inputDestination, inputDuration, inputDate,
    inputPeople, inputPrice, inputCustomerName, inputPriceQuad, inputPriceTriple, inputPriceDouble, inputBanner, inputLogo, inputEmail, inputPhone, inputWebsite, inputPolicies
  ];
  inputs.forEach(input => {
    input.value = "";
  });
  inputType.value = "private";

  // Typography inputs reset
  document.getElementById('font-preset').value = "modern";
  document.getElementById('title-weight').value = "900";
  document.getElementById('title-style').value = "normal";
  document.getElementById('tagline-style').value = "bold-normal";
  document.getElementById('title-case').value = "uppercase";
  
  applyTypographySettings();

  // Update previews
  updateCoverImage("");
  updateLogoRendering("");
  updateContactFooter();
  
  document.getElementById('preview-trip-title').innerText = "[ENTER TRIP TITLE]";
  document.getElementById('preview-trip-subtitle').innerText = "[Trip Tagline]";
  document.getElementById('preview-destination').innerText = "[Destination]";
  document.getElementById('preview-duration').innerText = "[Duration]";
  document.getElementById('preview-people').innerText = "[Pax Count]";
  document.getElementById('preview-policies-text').textContent = "";

  updatePricingPreview();
  updateCustomerNamePreview();

  renderDaysEditor();
  renderBulletListEditor('inclusions');
  renderBulletListEditor('exclusions');
  
  renderItineraryPreview();
  renderBulletPreview('inclusions');
  renderBulletPreview('exclusions');

  lucide.createIcons();
}

// --- PDF Compilation using html2pdf.js ---
function exportToPDF() {
  const downloadBtn = document.getElementById('btn-download-pdf');
  const originalText = downloadBtn.innerHTML;
  
  // UI status update
  downloadBtn.innerHTML = `<i class="animate-spin" data-lucide="loader"></i> Compiling PDF...`;
  lucide.createIcons();
  downloadBtn.disabled = true;

  // Select element to print
  const element = document.getElementById('pdf-document');
  const filename = `${state.tripTitle.trim().replace(/\s+/g, '_') || 'SAR_Outdoors'}_Itinerary.pdf`;

  // Apply class to temporarily remove margins/shadows for clean PDF capture
  element.classList.add('pdf-exporting');

  // HTML2PDF Configurations
  const opt = {
    margin:       0,
    filename:     filename,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { 
      scale: 2.2, // Increase resolution
      useCORS: true, // Allow cross-origin images (like Unsplash)
      letterRendering: true,
      scrollX: 0,
      scrollY: 0
    },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak:    { mode: 'specify', before: '.pdf-page + .pdf-page' } // Break before each subsequent page
  };

  // Compile PDF only after all fonts are fully loaded by the browser
  document.fonts.ready.then(() => {
    html2pdf().from(element).set(opt).save()
      .then(() => {
        element.classList.remove('pdf-exporting');
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
        lucide.createIcons();
      })
      .catch(err => {
        element.classList.remove('pdf-exporting');
        console.error("PDF Export failed:", err);
        alert("Failed to export PDF. Check connection and image URLs.");
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
        lucide.createIcons();
      });
  }).catch(err => {
    element.classList.remove('pdf-exporting');
    console.error("Font loading verification failed:", err);
    // Fallback compilation immediately if font loading API fails
    html2pdf().from(element).set(opt).save()
      .then(() => {
        element.classList.remove('pdf-exporting');
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
        lucide.createIcons();
      })
      .catch(pdfErr => {
        console.error("PDF Export failed on fallback:", pdfErr);
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
        lucide.createIcons();
      });
  });
}

// --- Custom Logo Rendering Helper ---
function updateLogoRendering(url) {
  const logoWrapper = document.querySelector('.logo-preview-svg-wrapper');
  const targetLogoUrl = (url && url.trim() !== "") ? url : BASE64_LOGO_SVG;

  if (logoWrapper) {
    logoWrapper.innerHTML = `<img src="${targetLogoUrl}" class="custom-logo-img" alt="Logo">`;
  }
  
  // Also update mini headers
  const headerLogos = document.querySelectorAll('.header-logo-mini');
  headerLogos.forEach(logoContainer => {
    logoContainer.innerHTML = `<img src="${targetLogoUrl}" class="custom-logo-img" alt="Logo">`;
  });
}

// --- AI Generation Integrations ---
async function generateItineraryWithAI() {
  const provider = document.getElementById('ai-provider').value;
  const apiKey = document.getElementById('ai-key').value.trim();
  const destination = document.getElementById('ai-destination').value.trim();
  const duration = parseInt(document.getElementById('ai-duration').value) || 5;
  const vibe = document.getElementById('ai-vibe').value;
  const instructions = document.getElementById('ai-instructions').value.trim();
  const loader = document.getElementById('ai-modal-loader');
  const modal = document.getElementById('ai-assistant-modal');

  if (!destination) {
    alert("Please enter a destination (e.g. Manali, Ladakh).");
    return;
  }
  if (!apiKey) {
    alert("Please enter your API Key first.");
    return;
  }

  loader.style.display = 'flex';

  try {
    let daysResult = [];
    
    if (provider === 'gemini') {
      const prompt = `Create a premium day-by-day travel itinerary for a trip to "${destination}" for exactly ${duration} days.
Style / Vibe: ${vibe}.
Additional Guidelines: ${instructions || "None"}.

Respond ONLY with a JSON object that adheres strictly to the responseSchema provided. Do not include markdown codeblocks or extra text. Make sure each day has a descriptive title, 3-5 comma-separated highlights, a detailed description (1-3 sentences), a realistic accommodation name (matching the vibe), and meals (breakfast, lunch, dinner as booleans).`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
              type: "OBJECT",
              properties: {
                days: {
                  type: "ARRAY",
                  items: {
                    type: "OBJECT",
                    properties: {
                      title: { type: "STRING" },
                      highlights: { type: "STRING" },
                      description: { type: "STRING" },
                      accommodation: { type: "STRING" },
                      meals: {
                        type: "OBJECT",
                        properties: {
                          breakfast: { type: "BOOLEAN" },
                          lunch: { type: "BOOLEAN" },
                          dinner: { type: "BOOLEAN" }
                        },
                        required: ["breakfast", "lunch", "dinner"]
                      }
                    },
                    required: ["title", "highlights", "description", "accommodation", "meals"]
                  }
                }
              },
              required: ["days"]
            }
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `HTTP ${response.status}`);
      }

      const data = await response.json();
      const textResult = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!textResult) throw new Error("Empty response from Gemini API.");
      
      const parsedData = JSON.parse(textResult);
      daysResult = parsedData.days || [];

    } else if (provider === 'openai') {
      const systemPrompt = `You are a professional travel itinerary assistant. You must respond ONLY with a JSON object matching this schema:
{
  "days": [
    {
      "title": "Short title",
      "highlights": "comma, separated, highlights",
      "description": "1-3 descriptive sentences",
      "accommodation": "Stay details",
      "meals": { "breakfast": true, "lunch": false, "dinner": true }
    }
  ]
}
Do not write any text other than the JSON object itself. Ensure all days are covered.`;

      const userPrompt = `Generate a detailed day-by-day travel itinerary for "${destination}" for exactly ${duration} days.
Vibe/Style: ${vibe}.
Additional details/preferences: ${instructions || "None"}.`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
          ],
          response_format: { type: "json_object" }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `HTTP ${response.status}`);
      }

      const data = await response.json();
      const textResult = data.choices?.[0]?.message?.content;
      if (!textResult) throw new Error("Empty response from OpenAI API.");

      const parsedData = JSON.parse(textResult);
      daysResult = parsedData.days || [];
    }

    if (daysResult.length === 0) {
      throw new Error("No itinerary days were generated by the AI.");
    }

    // Load generated days into state
    state.itineraryDays = daysResult.map(day => ({
      title: day.title || "Adventure day",
      highlights: day.highlights || "",
      description: day.description || "",
      accommodation: day.accommodation || "Hotel / Camping",
      meals: {
        breakfast: !!day.meals?.breakfast,
        lunch: !!day.meals?.lunch,
        dinner: !!day.meals?.dinner
      }
    }));

    // Update metadata fields if applicable
    state.destination = destination;
    state.duration = `${duration} Days / ${duration - 1} Nights`;
    inputDestination.value = state.destination;
    inputDuration.value = state.duration;

    // Refresh UI
    document.getElementById('preview-destination').innerText = state.destination;
    document.getElementById('preview-duration').innerText = state.duration;
    renderDaysEditor();
    renderItineraryPreview();

    // Close Modal and Success Message
    modal.classList.remove('active');
    alert("Itinerary generated and imported successfully!");

  } catch (error) {
    console.error("AI Generation failed:", error);
    alert(`AI Generation failed: ${error.message}`);
  } finally {
    loader.style.display = 'none';
  }
}

function importPastedItinerary() {
  const pastedText = document.getElementById('ai-pasted-text').value.trim();
  const modal = document.getElementById('ai-assistant-modal');
  
  if (!pastedText) {
    alert("Please paste some itinerary text first.");
    return;
  }
  
  const parsedDays = parsePastedItinerary(pastedText);
  if (parsedDays.length === 0) {
    alert("Failed to parse any days from the pasted text. Please check the formatting.");
    return;
  }
  
  state.itineraryDays = parsedDays;
  
  // Try to count days and auto-update duration
  const numDays = parsedDays.length;
  state.duration = `${numDays} Days / ${numDays - 1} Nights`;
  inputDuration.value = state.duration;
  
  // Refresh UI
  document.getElementById('preview-duration').innerText = state.duration;
  renderDaysEditor();
  renderItineraryPreview();
  
  modal.classList.remove('active');
  alert(`Parsed and loaded ${numDays} days successfully!`);
}

function parsePastedItinerary(text) {
  if (!text || text.trim() === "") return [];
  
  const lines = text.split('\n');
  const parsedDays = [];
  let currentDay = null;
  
  const dayRegex = /^\s*Day\s*(\d+)\s*[:\-\.]?\s*(.*)/i;
  const highlightsRegex = /^\s*(?:Highlights|Highlight|Key attractions)\s*[:\-]\s*(.*)/i;
  const accommodationRegex = /^\s*(?:Accommodation|Stay|Hotel|Lodging)\s*[:\-]\s*(.*)/i;
  const mealsRegex = /^\s*(?:Meals|Meal)\s*[:\-]\s*(.*)/i;

  lines.forEach(line => {
    const trimmedLine = line.trim();
    if (trimmedLine === "") return;
    
    const dayMatch = trimmedLine.match(dayRegex);
    if (dayMatch) {
      if (currentDay) {
        parsedDays.push(currentDay);
      }
      currentDay = {
        title: dayMatch[2].trim() || `Day ${dayMatch[1]}`,
        highlights: "",
        description: "",
        accommodation: "",
        meals: { breakfast: true, lunch: true, dinner: true }
      };
    } else if (currentDay) {
      const hMatch = trimmedLine.match(highlightsRegex);
      const aMatch = trimmedLine.match(accommodationRegex);
      const mMatch = trimmedLine.match(mealsRegex);
      
      if (hMatch) {
        currentDay.highlights = hMatch[1].trim();
      } else if (aMatch) {
        currentDay.accommodation = aMatch[1].trim();
      } else if (mMatch) {
        const mealsText = mMatch[1].toLowerCase();
        currentDay.meals.breakfast = mealsText.includes('b') || mealsText.includes('breakfast');
        currentDay.meals.lunch = mealsText.includes('l') || mealsText.includes('lunch');
        currentDay.meals.dinner = mealsText.includes('d') || mealsText.includes('dinner');
      } else {
        if (currentDay.description) {
          currentDay.description += "\n" + trimmedLine;
        } else {
          currentDay.description = trimmedLine;
        }
      }
    }
  });
  
  if (currentDay) {
    parsedDays.push(currentDay);
  }
  
  if (parsedDays.length === 0) {
    // If no Day markers were found, split by double linebreaks and treat each paragraph as a day
    const paragraphs = text.split(/\n\s*\n+/);
    paragraphs.forEach((p, idx) => {
      const pText = p.trim();
      if (pText !== "") {
        parsedDays.push({
          title: `Day ${idx + 1}`,
          highlights: "",
          description: pText,
          accommodation: "TBD",
          meals: { breakfast: true, lunch: true, dinner: true }
        });
      }
    });
  }
  
  return parsedDays;
}

function updatePricingPreview() {
  const previewPrice = document.getElementById('preview-price');
  const detailsPrice = document.getElementById('preview-details-price');
  
  const previewPrivatePriceBox = document.getElementById('preview-private-price-box');
  const previewGroupPriceBox = document.getElementById('preview-group-price-box');
  
  const pricingPrivateContainer = document.getElementById('pricing-private-container');
  const pricingGroupContainer = document.getElementById('pricing-group-container');

  if (state.tripType === 'group') {
    // Show Group fields in editor
    if (pricingPrivateContainer) pricingPrivateContainer.style.display = 'none';
    if (pricingGroupContainer) pricingGroupContainer.style.display = 'flex';
    
    // Show Group price cards in preview details page
    if (previewPrivatePriceBox) previewPrivatePriceBox.style.display = 'none';
    if (previewGroupPriceBox) previewGroupPriceBox.style.display = 'flex';
    
    // Cover page price displays starting rate
    if (previewPrice) {
      previewPrice.innerText = state.priceQuad ? `From ${state.priceQuad} / Person` : "From [Price] / Person";
    }
    
    // Details page values
    const detQuad = document.getElementById('preview-details-price-quad');
    const detTriple = document.getElementById('preview-details-price-triple');
    const detDouble = document.getElementById('preview-details-price-double');
    if (detQuad) detQuad.innerText = state.priceQuad || "₹0";
    if (detTriple) detTriple.innerText = state.priceTriple || "₹0";
    if (detDouble) detDouble.innerText = state.priceDouble || "₹0";
  } else {
    // Show Private field in editor
    if (pricingPrivateContainer) pricingPrivateContainer.style.display = 'block';
    if (pricingGroupContainer) pricingGroupContainer.style.display = 'none';
    
    // Show Private price box in preview details page
    if (previewPrivatePriceBox) previewPrivatePriceBox.style.display = 'flex';
    if (previewGroupPriceBox) previewGroupPriceBox.style.display = 'none';
    
    // Cover page price displays standard price
    if (previewPrice) {
      previewPrice.innerText = state.price ? `${state.price} / Person` : "[Price]";
    }
    
    // Details page value
    if (detailsPrice) {
      detailsPrice.innerText = state.price || "₹0";
    }
  }
}

function updateCustomerNamePreview() {
  const container = document.getElementById('preview-customer-name-container');
  const txt = document.getElementById('preview-customer-name');
  if (state.customerName && state.customerName.trim() !== "") {
    if (container) container.style.display = 'flex';
    if (txt) txt.innerText = state.customerName;
  } else {
    if (container) container.style.display = 'none';
  }
}
