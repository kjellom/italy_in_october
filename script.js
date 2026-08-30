// Destination data. To add your own photos: drop a file at
// assets/img/<id>.jpg and it will be used automatically as the
// card/modal thumbnail. Without one, the majolica-tile accent color
// shows instead — nothing breaks either way.

const DESTINATIONS = [
  {
    id: "rome",
    group: "hubs",
    tag: "Arrival · Hub",
    name: "Rome",
    accent: "#2F7A78",
    history: "Traditionally founded in 753 BCE, Rome grew from a cluster of hills into the capital of a republic, then an empire that stretched from Britain to the Persian Gulf. More than two thousand years of building sit stacked on top of one another here, often literally.",
    today: "A living capital of nearly three million people, where the Forum and the Colosseum sit a short walk from ordinary apartment blocks, scooters, and espresso bars that have nothing to do with tourism.",
    cuisine: "Cacio e pepe, carciofi alla giudia (Roman-Jewish fried artichokes), and supplì — fried rice croquettes with a molten mozzarella center.",
    fact: "The Pantheon's dome is still the largest unreinforced concrete dome in the world — poured roughly 1,900 years ago, with no steel reinforcement of any kind."
  },
  {
    id: "massa-lubrense",
    group: "hubs",
    tag: "Home base",
    name: "Massa Lubrense &amp; Sant'Agata",
    accent: "#2F7A78",
    history: "A rural corner of the Sorrentine Peninsula built around olive groves, lemon terraces, and small fishing hamlets rather than any single monument or grand history.",
    today: "The quiet alternative to Sorrento proper — hamlets like Termini and Nerano, working lemon groves, and a ridge at Sant'Agata sui Due Golfi where you can see two separate seas at once.",
    cuisine: "Provola cheese, lemon in every form (limoncello, delizia al limone), and Nerano's own spaghetti alle zucchine.",
    fact: "Sant'Agata sui Due Golfi means 'Saint Agatha of the Two Gulfs' — from its ridge you can look out over both the Bay of Naples and the Gulf of Salerno at the same time."
  },
  {
    id: "sorrento",
    group: "hubs",
    tag: "Fallback base",
    name: "Sorrento",
    accent: "#2F7A78",
    history: "Ancient Surrentum was a resort town for wealthy Romans escaping the city, later a fixture on the 18th- and 19th-century Grand Tour.",
    today: "The peninsula's largest town and its only true year-round economy — cliffside piazzas over the Bay of Naples, open through the winter when smaller coastal villages quiet down.",
    cuisine: "Limoncello's most credible claimed birthplace, plus gnocchi alla sorrentina baked with tomato and mozzarella.",
    fact: "Sorrento's clifftop is cut by a deep ravine, the Vallone dei Mulini, where an abandoned 16th-century watermill still stands, half-swallowed by vegetation, visible right from the main piazza."
  },
  {
    id: "pompeii",
    group: "ancient",
    tag: "Day trip · Ruins",
    name: "Pompeii",
    accent: "#5C6B4F",
    history: "A thriving Roman town of roughly 12,000 people, buried under volcanic ash and pumice when Vesuvius erupted in 79 CE — preserving streets, houses, and frescoes in extraordinary detail.",
    today: "One of the most complete windows into ordinary Roman life anywhere in the world, and still under active excavation more than 250 years after digging began.",
    cuisine: "Garum, a fermented fish sauce, was a Pompeian pantry staple two thousand years ago — its direct descendant is still made a short drive away in Cetara.",
    fact: "The famous plaster casts of victims were made by pouring plaster into hollow voids left in the hardened ash after the bodies inside had decomposed, preserving their final poses exactly."
  },
  {
    id: "herculaneum",
    group: "ancient",
    tag: "Day trip · Ruins",
    name: "Herculaneum",
    accent: "#5C6B4F",
    history: "A smaller, wealthier seaside town than Pompeii, destroyed in the same 79 CE eruption — but buried by pyroclastic flow rather than falling ash, which carbonized wood instead of destroying it.",
    today: "In some ways better preserved than Pompeii: multi-story buildings, wooden roof beams, even carbonized furniture and food have survived intact.",
    cuisine: "A Roman coastal resort town in its own right, with the same culinary roots as Pompeii and easy access to the bay's seafood.",
    fact: "Hundreds of skeletons were found sheltering in boat houses along the ancient shoreline — a discovery not made until excavations in the 1980s."
  },
  {
    id: "paestum",
    group: "ancient",
    tag: "Day trip · Ruins",
    name: "Paestum",
    accent: "#5C6B4F",
    history: "Founded by Greek colonists as Poseidonia in the 6th century BCE, later absorbed as a Roman colony, and eventually abandoned to malaria-ridden marshland for centuries.",
    today: "Home to three of the best-preserved Greek Doric temples anywhere on earth — arguably rivaling Greece itself — rediscovered largely by accident in the 18th century.",
    cuisine: "The surrounding plain is Italy's buffalo mozzarella heartland: genuine mozzarella di bufala campana DOP comes from right here.",
    fact: "Because the site was forgotten for so long, its temples were never quarried for building material the way most ancient structures were — which is a large part of why they still stand almost whole."
  },
  {
    id: "positano",
    group: "villages",
    tag: "Day trip · Coast",
    name: "Positano",
    risk: true,
    accent: "#B5533C",
    history: "A minor fishing and boat-building village for most of its history, until mid-20th-century writers and film stars discovered it and turned it into shorthand for Amalfi Coast glamour.",
    today: "Vertical and pastel-colored, built almost entirely into a cliff face, with steep staircases standing in for most of its streets.",
    cuisine: "Fresh seafood, totani e patate (squid and potatoes), and lemon-based desserts everywhere you look.",
    fact: "Positano has essentially no flat ground — locals joke that the town's real address is simply 'vertical.'"
  },
  {
    id: "amalfi",
    group: "villages",
    tag: "Day trip · Coast",
    name: "Amalfi",
    accent: "#B5533C",
    history: "A genuine maritime power in the early Middle Ages, rivaling Venice, Genoa, and Pisa for Mediterranean trade, until a flood and Pisan raids ended its independence.",
    today: "A real working town with an actual harbor — steadier and more accessible than its smaller cliffside neighbors, home to a striking Arab-Norman cathedral.",
    cuisine: "Scialatielli pasta is said to originate here, alongside a centuries-old handmade paper tradition still practiced in town.",
    fact: "Some Italian historians credit Amalfi with an early role in developing the maritime compass — a claim that's disputed but still proudly local."
  },
  {
    id: "ravello",
    group: "villages",
    tag: "Day trip · Coast",
    name: "Ravello",
    accent: "#B5533C",
    history: "A refuge for Amalfi's wealthy merchant families in the Middle Ages, built high above the coastline, later a retreat for composers and writers — Wagner among them.",
    today: "Calm and elevated above the coast road's traffic, with clifftop gardens at Villa Cimbrone and Villa Rufolo, and — unusually for this coast — real parking.",
    cuisine: "Fior di latte cheese and the local white wines of the Costa d'Amalfi DOC.",
    fact: "Wagner's 1880 visit to the gardens of Villa Rufolo directly inspired a set in his opera Parsifal — Ravello still runs an annual music festival built around that connection."
  },
  {
    id: "cetara",
    group: "villages",
    tag: "Day trip · Coast",
    name: "Cetara",
    risk: true,
    accent: "#B5533C",
    history: "A centuries-old fishing village whose identity is built almost entirely on anchovy and tuna fishing, largely bypassed by the coast's tourism boom.",
    today: "A handful of streets and one real piazza, with restaurants that mostly cook for the people who live there.",
    cuisine: "Colatura di alici — an amber fish sauce descended directly from ancient Roman garum — traditionally pressed each autumn.",
    fact: "Cetara's colatura is a genuinely unbroken culinary line back to Roman garum: the same basic product, made the same basic way, for roughly two thousand years."
  },
  {
    id: "capri",
    group: "cities",
    tag: "Day trip · Island — hard cutoff",
    name: "Capri",
    risk: true,
    accent: "#16323E",
    history: "A retreat for Roman emperors — Tiberius reportedly ran the empire from a clifftop villa here for the last decade of his reign.",
    today: "The coast's most glamorous stop, known for the Blue Grotto sea cave and the Faraglioni rock stacks rising out of the water.",
    cuisine: "Insalata Caprese is said to have been invented here, and lemon products are everywhere, as they are along the whole coast.",
    fact: "Ferries stop running for the season on October 31 — the one hard, calendar-fixed deadline on this whole list."
  },
  {
    id: "naples",
    group: "cities",
    tag: "Day trip · City",
    name: "Naples",
    accent: "#16323E",
    history: "Founded by Greek colonists as Neapolis — 'new city' — around the 6th century BCE, later a Roman resort city and eventually the capital of its own kingdom for centuries.",
    today: "Italy's third-largest city: dense, loud, and sitting directly in the shadow of Vesuvius, which still looms over the skyline from almost anywhere in town.",
    cuisine: "The birthplace of pizza — both Margherita and marinara styles trace back here — plus sfogliatelle pastry and a serious coffee culture.",
    fact: "Naples' pizza-making tradition (Verace Pizza Napoletana) has protected status, with strict rules on dough, oven temperature, and ingredients enforced by an actual association."
  },
  {
    id: "castellabate",
    group: "afield",
    tag: "Optional · Cilento",
    name: "Castellabate",
    accent: "#8C6E4E",
    history: "Founded in the 12th century by the abbot of a nearby monastery as a fortified hilltop village to protect the coast from raids.",
    today: "A quiet medieval borgo above a national park coastline — the real-life setting for the Italian film 'Benvenuti al Sud.'",
    cuisine: "Cilento is known for fichi bianchi (white figs), strong olive oil, and simpler, far less touristed cooking than the Amalfi Coast.",
    fact: "The whole Cilento coastline is a UNESCO World Heritage site, protected as much for its ancient Greek and Roman archaeological remains as for its landscape."
  }
];

const GROUP_ORDER = ["hubs", "ancient", "villages", "cities", "afield"];
const GROUP_ICONS = {
  hubs: "icon-house",
  ancient: "icon-column",
  villages: "icon-wave",
  cities: "icon-boat",
  afield: "icon-mountain"
};

function thumbStyle(dest) {
  return `background-color:${dest.accent}; background-image:url('assets/img/${dest.id}.jpg');`;
}

function renderGrid() {
  GROUP_ORDER.forEach(group => {
    const container = document.querySelector(`.dest-group[data-group="${group}"] .dest-grid`);
    if (!container) return;
    const items = DESTINATIONS.filter(d => d.group === group);
    container.innerHTML = items.map(d => `
      <button class="dest-card${d.risk ? " dest-card--risk" : ""}" data-id="${d.id}">
        <div class="dest-thumb" style="${thumbStyle(d)}">
          <svg class="icon dest-thumb-icon"><use href="#${GROUP_ICONS[d.group] || "icon-house"}"/></svg>
          ${d.risk ? '<svg class="icon dest-risk-badge"><use href="#icon-warning"/></svg>' : ""}
        </div>
        <div class="dest-card-body">
          <span class="dest-tag">${d.tag}</span>
          <h4 class="dest-name">${d.name}</h4>
        </div>
      </button>
    `).join("");
  });
}

function openModal(id) {
  const d = DESTINATIONS.find(x => x.id === id);
  if (!d) return;
  document.getElementById("modal-thumb").style.cssText = thumbStyle(d);
  document.getElementById("modal-thumb").innerHTML = `<svg class="icon dest-thumb-icon"><use href="#${GROUP_ICONS[d.group] || "icon-house"}"/></svg>`;
  document.getElementById("modal-tag").textContent = d.tag;
  document.getElementById("modal-title").innerHTML = d.name;
  document.getElementById("modal-history").textContent = d.history;
  document.getElementById("modal-today").textContent = d.today;
  document.getElementById("modal-cuisine").textContent = d.cuisine;
  document.getElementById("modal-fact").textContent = d.fact;
  const backdrop = document.getElementById("modal-backdrop");
  backdrop.classList.add("open");
  document.getElementById("modal-close").focus();
}

function closeModal() {
  document.getElementById("modal-backdrop").classList.remove("open");
}

const CATEGORY_COLORS = {
  hubs: "#2F7A78",
  ancient: "#5C6B4F",
  villages: "#B5533C",
  cities: "#16323E",
  afield: "#8C6E4E",
  support: "#9AA3A0"
};

function initMap() {
  const mapEl = document.getElementById("map");
  if (!mapEl || typeof L === "undefined") return;

  const map = L.map("map", { scrollWheelZoom: false });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 18
  }).addTo(map);
  map.setView([40.9, 14.4], 8); // fallback view until the KML loads and fits bounds

  // Re-enable scroll-zoom only once the visitor has clicked into the map,
  // so the page itself still scrolls normally by default.
  map.on("focus", () => map.scrollWheelZoom.enable());
  map.on("blur", () => map.scrollWheelZoom.disable());

  const customLayer = L.geoJson(null, {
    pointToLayer: (feature, latlng) => {
      const cat = (feature.properties && feature.properties.cat) || "support";
      return L.circleMarker(latlng, {
        radius: 9,
        fillColor: CATEGORY_COLORS[cat] || CATEGORY_COLORS.support,
        color: "#FBF7EC",
        weight: 2,
        fillOpacity: 0.95
      });
    },
    style: () => ({ color: "#B5533C", weight: 3, dashArray: "6 6" }),
    onEachFeature: (feature, layer) => {
      const props = feature.properties || {};
      const dest = DESTINATIONS.find(d => d.id === props.id);
      if (dest) {
        const btnId = `map-open-${dest.id}`;
        layer.bindPopup(`<strong>${dest.name}</strong><br><button class="map-popup-btn" id="${btnId}">More about this stop &rarr;</button>`);
        layer.on("popupopen", () => {
          const btn = document.getElementById(btnId);
          if (btn) btn.addEventListener("click", () => { map.closePopup(); openModal(dest.id); });
        });
      } else if (props.name) {
        layer.bindPopup(`<strong>${props.name}</strong>${props.description ? "<br>" + props.description : ""}`);
      }
    }
  });

  omnivore.kml("assets/southern_italy_itinerary.kml", null, customLayer)
    .on("ready", function () { map.fitBounds(this.getBounds(), { padding: [24, 24] }); })
    .addTo(map);
}

document.addEventListener("DOMContentLoaded", () => {
  renderGrid();
  initMap();

  document.querySelectorAll(".dest-grid").forEach(grid => {
    grid.addEventListener("click", e => {
      const card = e.target.closest(".dest-card");
      if (card) openModal(card.dataset.id);
    });
  });

  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-backdrop").addEventListener("click", e => {
    if (e.target.id === "modal-backdrop") closeModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
});
