/**
 * Data loading
 */
let selectedSection = "";
let productData = []; // Empty initially
const offcanvas = new bootstrap.Offcanvas(
  document.getElementById("slidePanel")
);
// Method to select section
function selectSection(section, el) {
  selectedSection = section;
  setActiveMenu(el);
  renderContent();

  // On mobile, close slide panel
  if (window.innerWidth < 768) {
    document.getElementById("slidePanel").classList.remove("show");
    document.getElementById("page_body").classList.remove("mobile-nav-active");
    offcanvas.hide();
  }
}

// Highlight active menu
function setActiveMenu(element) {
  const links = document.querySelectorAll("#sidebarMenu a");
  links.forEach((link) => link.classList.remove("active"));
  element.classList.add("active");
}

// Render method: based on selectedSection
function renderContent() {
  let contentPanel = document.getElementById("contentArea");
  if (window.innerWidth < 768) {
    contentPanel = document.getElementById("featured-services");
  } else {
    // Desktop: Show content in panelContentArea
    contentPanel = document.getElementById("contentArea");
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
