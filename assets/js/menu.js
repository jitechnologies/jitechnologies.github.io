const menuData = [
  {
    label: "Process",
    fullPath: "process",
    icon: "🔧",
    children: [
      {
        label: "Rubber",
        fullPath: "process/rubber",
        icon: "🧪",
        children: [
          {
            label: "Extruders",
            fullPath: "process/rubber/extruders",
            icon: "🛠",
            link: "#",
            children: [
              {
                label: "Rubber",
                icon: "✅",
                fullPath: "process/rubber/vulcanization/lcm-salt-bath-line",
                link: "https://www.mdc-engineering.net/en/lcm-salt-bath-line/",
                cards: [
                  {
                    title: "Test 1",
                    description: "Test details for Testing1."
                  }
                ]
              },
              {
                label: "Silicon",
                icon: "✅",
                fullPath:
                  "process/rubber/vulcanization/treatment-of-vulcanising-fumes",
                link: "https://www.mdc-engineering.net/en/treatment-of-vulcanising-fumes/",
                cards: [
                  {
                    title: "Test 1",
                    description: "Test details for Testing1."
                  }
                ]
              },
              {
                label: "Plastic",
                icon: "✅",
                fullPath: "process/rubber/vulcanization/lcm-salt-bath-line",
                link: "https://www.mdc-engineering.net/en/lcm-salt-bath-line/",
                cards: [
                  {
                    title: "Test 1",
                    description: "Test details for Testing1."
                  }
                ]
              }
            ]
          },
          {
            label: "Roll Miller",
            icon: "🌀",
            fullPath: "process/rubber/rollMiller",
            children: [
              {
                label: "Testing1",
                link: "#",
                icon: "✅",
                cards: [
                  {
                    title: "Test 1",
                    description: "Test details for Testing1."
                  }
                ]
              }
            ]
          },
          {
            label: "Laboratory",
            icon: "✅",
            fullPath: "process/rubber/laboratory",
            link: "#",
            children: [
              {
                label: "Intermeshing",
                icon: "✅",
                fullPath: "process/rubber/vulcanization/lcm-salt-bath-line",
                link: "https://www.mdc-engineering.net/en/lcm-salt-bath-line/",
                cards: [
                  {
                    title: "Internal mixer with intermeshing rotors",
                    description:
                      "This mixer enables efficient dispersion of additives in a batch of product, with tank capacities ranging from 0.5 to 50 liters. Equipped with intermeshing rotors, it is suitable for batches ranging from 0.4 to 45 kg."
                  }
                ]
              },
              {
                label: "Tangential",
                icon: "✅",
                fullPath:
                  "process/rubber/vulcanization/treatment-of-vulcanising-fumes",
                link: "https://www.mdc-engineering.net/en/treatment-of-vulcanising-fumes/",
                cards: [
                  {
                    title: "Internal mixer with tangential rotors",
                    description:
                      "This mixer enables efficient dispersion of additives in a batch of product, with tank capacities ranging from 0.5 to 50 liters. Equipped with tangential rotors, it is suitable for batches ranging from 0.4 to 45 kg."
                  }
                ]
              },
              {
                label: "Plastic",
                icon: "✅",
                fullPath: "process/rubber/vulcanization/lcm-salt-bath-line",
                link: "https://www.mdc-engineering.net/en/lcm-salt-bath-line/",
                cards: [
                  {
                    title: "Test 1",
                    description: "Test details for Testing1."
                  }
                ]
              }
            ]
          },
          {
            label: "Internal Mixers",
            icon: "✅",
            fullPath: "process/rubber/internalMixers",
            link: "#",
            cards: [
              {
                title: "Internal Mixers",
                description: "Test details for Testing2."
              }
            ]
          },
          {
            label: "Vulcanization",
            icon: "✅",
            fullPath: "process/rubber/vulcanization",
            link: "#",
            children: [
              {
                label: "LCM salt bath line",
                icon: "✅",
                fullPath: "process/rubber/vulcanization/lcm-salt-bath-line",
                link: "https://www.mdc-engineering.net/en/lcm-salt-bath-line/",
                cards: [
                  {
                    title: "Test 1",
                    description: "Test details for Testing1."
                  }
                ]
              },
              {
                label: "Treatment of vulcanising fumes",
                icon: "✅",
                fullPath:
                  "process/rubber/vulcanization/treatment-of-vulcanising-fumes",
                link: "https://www.mdc-engineering.net/en/treatment-of-vulcanising-fumes/",
                cards: [
                  {
                    title: "Test 1",
                    description: "Test details for Testing1."
                  }
                ]
              }
            ]
          },
          {
            label: "Batch-off cooling unit",
            icon: "✅",
            link: "https://www.lescuyer-villeneuve.com/en/batch-cooling-unit/",
            fullPath: "process/rubber/batch-off-cooling-unit"
          },
          {
            label: "Calenders",
            icon: "✅",
            link: "https://www.lescuyer-villeneuve.com/en/3-rolls-calender/",
            fullPath: "process/rubber/calenders"
          },
          {
            label: "Press",
            icon: "✅",
            link: "https://www.lescuyer-villeneuve.com/en/compression-presses-electric/",
            fullPath: "process/rubber/press"
          },
          {
            label: "Bi-Vis conical",
            icon: "✅",
            link: "https://www.lescuyer-villeneuve.com/en/bi-vis-conical/",
            fullPath: "process/rubber/bi-vis-conical"
          },
          {
            label: "Slicers",
            icon: "✅",
            link: "https://www.lescuyer-villeneuve.com/en/electric-slicers/",
            fullPath: "process/rubber/slicers"
          }
        ]
      },
      {
        label: "Silicon",
        icon: "🔬",
        fullPath: "process/silicon",
        cards: [
          {
            title: "Silicon Type A",
            description: "Used for microchips."
          },
          { title: "Silicon Type B", description: "High purity silicon." }
        ]
      },
      { label: "Tire", icon: "🚗", fullPath: "process/tire" },
      {
        label: "Plastic",
        icon: "🧴",
        fullPath: "process/plastic",
        children: [
          {
            label: "ThermoPlastic",
            icon: "✅",
            fullPath: "process/plastic/thermoplastic",
            link: "https://www.lescuyer-villeneuve.com/en/thermoplastic-extruder/"
          },
          {
            label: "Laboratory Press",
            icon: "✅",
            fullPath: "process/plastic/laboratory-press",
            link: "https://www.mdc-engineering.net/en/treatment-of-vulcanising-fumes/"
          }
        ]
      }
    ]
  },
  {
    label: "Testing",
    icon: "🧭",
    fullPath: "testing",
    cards: [
      {
        title: "Testing Services",
        description: "Quality assurance testing."
      }
    ]
  }
];

const updateURLForTracking = (path) => {
  const newURL = `${window.location.pathname}#${path}`;
  window.history.pushState({ path }, "", newURL);
  // Optional: Send a manual GA event (if using gtag)
  if (typeof gtag === "function") {
    gtag("event", "menu_click", {
      event_category: "Navigation",
      event_label: path
    });
  }
};

const menuContainer = document.getElementById("menu-container");
const toggleBtn = document.getElementById("toggle-menu");
const contentArea = document.getElementById("content-area");
const cardsDiv = document.getElementById("featured-services");
const menuPanel = document.getElementById("menu-panel");

let currentPath = [];
const menusStack = [];

document.addEventListener("click", (event) => {
  const isClickInsideMenu = event.target.closest("#menu-container") !== null;
  const isClickOnToolbar = event.target.closest("#toggle-menu") !== null;
  const isClickInsideMenuPanel = event.target.closest("#menu-panel") !== null;
  console.log("isClickInsideMenu", isClickInsideMenu);
  console.log("isClickOnToolbar", isClickOnToolbar);
  console.log("isClickInsideMenuPanel", isClickInsideMenuPanel);
  //   if (!isClickInsideMenu && !isClickOnToolbar && !isClickInsideMenuPanel) {
  //     menuContainer.classList.remove("visible");
  //     contentArea.classList.remove("shifted");
  //     removeMenusAfterLevel(0);
  //   }
});

toggleBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("visible");
  contentArea.classList.toggle("shifted");
  if (menuContainer.classList.contains("visible")) {
    if (menusStack.length === 0) {
      //   renderMenuLevel(menuData, 0);
      renderMenu(menuData);
    }
  }
});

function removeMenusAfterLevel(level) {
  while (menusStack.length > level) {
    const panel = menusStack.pop();
    menuContainer.removeChild(panel);
  }
}

function renderMenu(data) {
  menuPanel.innerHTML = "";

  if (currentPath.length > 0) {
    const backBtn = document.createElement("div");
    backBtn.className = "menu-item";
    backBtn.innerHTML = `<span class="icon"><i class='fas fa-arrow-left'></i></span><span>Back</span>`;
    backBtn.addEventListener("click", () => {
      currentPath.pop();
      renderMenu(getCurrentMenuData());
    });
    menuPanel.appendChild(backBtn);

    const breadcrumb = document.createElement("div");
    breadcrumb.className = "breadcrumb";
    breadcrumb.id = "breadcrumb";
    breadcrumb.innerHTML = `<i class='fas fa-home'></i>`;
    // breadcrumb.textContent = currentPath.map((item) => item.label).join(" > ");
    currentPath.forEach((item, idx) => {
      breadcrumb.innerHTML += `<span onclick="navigateToLevel(${idx})"> / ${item.label}</span>`;
    });
    menuPanel.appendChild(breadcrumb);
  }

  data.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "menu-item";

    const leftSpan = document.createElement("span");
    leftSpan.style.display = "flex";
    leftSpan.style.alignItems = "center";

    const iconSpan = document.createElement("span");
    iconSpan.className = "icon";
    iconSpan.textContent = item.icon || "📁";

    const labelSpan = document.createElement("span");
    labelSpan.textContent = item.label;

    //     // Create anchor or span inside item
    const anchor = document.createElement("a");
    anchor.className = "menu-link";
    if (item.link && item.link !== "#") {
      anchor.textContent = item.label;
      anchor.href = item.link;

      anchor.style = "color:#000 !important"; // inherit color from parent
      anchor.target = "_blank"; // open in new tab
      anchor.rel = "noopener noreferrer";
    } else {
      anchor.href = "#";
      anchor.textContent = item.label;
    }

    // leftSpan.appendChild(iconSpan);
    // leftSpan.appendChild(labelSpan);
    leftSpan.appendChild(anchor);
    itemDiv.appendChild(leftSpan);

    if (item.children) {
      const arrowSpan = document.createElement("span");
      arrowSpan.className = "arrow";
      arrowSpan.innerHTML = "<i class='fas fa-chevron-right'></i>";
      itemDiv.appendChild(arrowSpan);

      itemDiv.addEventListener("click", () => {
        // Update URL for tracking
        const path =
          item.fullPath || item.label.toLowerCase().replace(/\s+/g, "-");
        console.log("path", path);
        updateURLForTracking(path);
        currentPath.push(item);
        renderMenu(item.children);
      });
    } else {
      itemDiv.addEventListener("click", () => {
        // Update URL for tracking
        const path =
          item.fullPath || item.label.toLowerCase().replace(/\s+/g, "-");
        console.log("path", path);
        updateURLForTracking(path);
        renderCards(item.cards || [], item.label);
        let breadcrumb = document.getElementById("breadcrumb");
        // clear breadcrumb
        breadcrumb.innerHTML = `<i class='fas fa-home'></i>`;
        // clear currentPath
        currentPath = [];
        menuContainer.classList.remove("visible");
        contentArea.classList.remove("shifted");
      });
    }
    menuPanel.appendChild(itemDiv);
  });
}

function navigateToLevel(index) {
  currentPath = currentPath.slice(0, index + 1);
  renderMenu(getCurrentMenuData());
}

function getCurrentMenuData() {
  let data = menuData;
  currentPath.forEach((level) => {
    const next = data.find((item) => item.label === level.label);
    data = next.children || [];
  });
  return data;
}

function renderCards(cards) {
  console.log("renderCards");
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = ""; // Clear existing

  contentArea.innerHTML = `<div class="card-container"></div>`;
  const container = contentArea.querySelector(".card-container");

  cards.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    const title = document.createElement("h5");
    title.textContent = card.title;
    cardDiv.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = card.description;
    cardDiv.appendChild(desc);

    container.appendChild(cardDiv);
  });
}

function clearContentArea() {
  contentArea.innerHTML = "";
}

/**  render card */
// let selectedSection = "";

// // Method to select section
// function selectSection(section) {
//   selectedSection = section;
//   //   setActiveMenu(el);
//   renderContent();
// }

function renderContent() {
  console.log("renderContent");
  let contentPanel = document.getElementById("content-area");
  if (window.innerWidth < 768) {
    contentPanel = document.getElementById("featured-services");
  } else {
    // Desktop: Show content in panelContentArea
    contentPanel = document.getElementById("content-area");
  }
  let html = "Extruders-Rubber";
  let breadcrumbText = "Home";
  let onlyOnce = true;
  // Fetch the JSON externally
  fetch("assets/js/data.json")
    .then((response) => response.json())
    .then((data) => {
      industriesData = data;
      htmlContent = `
      <div class="row gy-4">
        ${industriesData
          .map((item) => {
            if (selectedSection === item.type) {
              console.log(item);
              if (onlyOnce) {
                breadcrumbText += `/${item.type}`;
                onlyOnce = false;
              }
              return `
              <div class="col-lg-4 col-md-6">
              <div class="card service-item position-relative">
                  <img src="${item.img_url}" height="250px" style="padding:10px"alt="${item.title}">
                  <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${item.title}</h5>
                  <p class="card-text" style="font-size: x-small;">${item.description}</p>
                  <a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="${item.product_web_link}" target="_blank">
    More Details
    <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg>
  </a>
                  </div>
              </div>
              </div>
                      `;
            }
          })
          .join("")}
      </div>
    `;
      console.log(htmlContent);
      updateContent(contentPanel, breadcrumbText, htmlContent);
    })
    .catch((error) => {
      console.error("Error loading JSON:", error);
      htmlContent = `<p class="text-danger">Failed to load data. Please try again later.</p>`;
      updateContent(contentPanel, breadcrumbText, htmlContent);
    });

  contentPanel.innerHTML = html;
}

function updateContent(container, breadcrumbText, htmlContent) {
  container.innerHTML = `
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            ${breadcrumbText
              .split("/")
              .map((item) => `<li class="breadcrumb-item">${item.trim()}</li>`)
              .join("")}
          </ol>
        </nav>
        ${htmlContent}
      `;
}

// Swipe gesture for mobile menu
let touchStartX = 0;
let touchEndX = 0;

document.body.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.body.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
});

function handleSwipeGesture() {
  const threshold = 50;
  const deltaX = touchEndX - touchStartX;

  if (deltaX > threshold && !menuContainer.classList.contains("visible")) {
    menuContainer.classList.add("visible");
    contentArea.classList.add("shifted");
    renderMenu(menuData);
  } else if (
    deltaX < -threshold &&
    menuContainer.classList.contains("visible")
  ) {
    menuContainer.classList.remove("visible");
    contentArea.classList.remove("shifted");
  }
}
