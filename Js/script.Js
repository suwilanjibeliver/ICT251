 // Contact form validation and preview

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    // Prevent the browser from submitting/reloading the page
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    const formPreview = document.getElementById("form-preview");
//suwilanji ngwira
    // Clear previous feedback
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formPreview.textContent = "";

    let valid = true;

    // Validate name
    if (name === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    // Validate message
    if (message === "") {
        messageError.textContent = "Please enter a message.";
        valid = false;
    }

    // Stop if the form is not valid
    if (!valid) {
        return;
    }

    // Display a local validation preview
    formPreview.textContent =
        "Your data was validated successfully. Name: " +
        name +
        " | Email: " +
        email +
        " | Message: " +
        message;
});


// Interactive photo gallery

const galleryImages = [
    {
        src: "images/PXL3.jpg",
        alt: "Me playing the guitar",
        caption: "Me playing the guitar at a friend's place"
    },
    {
        src: "images/PXL2.jpg",
        alt: "Me sitting in a chair at a restaurant",
        caption: "Me sitting in a chair at a restaurant"
    },
    {
        src: "images/PXL4.jpg",
        alt: "Outside taking in the view",
        caption: "Outside taking in the view"
    },
    {
        src: "images/PXL1.JPG",
        alt: "Picture with my mum",
        caption: "With Mrs Ngwira, my mum"
    },
    {
        src: "images/PXL5.JPG",
        alt: "My favourite movie, The Pursuit of Happyness",
        caption: "My favourite movie, The Pursuit of Happyness"
    }
];

let currentImage = 0;

const galleryImage = document.getElementById("gallery-image");
const galleryCaption = document.getElementById("gallery-caption");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

function updateGallery() {
    galleryImage.src = galleryImages[currentImage].src;
    galleryImage.alt = galleryImages[currentImage].alt;
    galleryCaption.textContent = galleryImages[currentImage].caption;

    previousButton.disabled = currentImage === 0;
    nextButton.disabled = currentImage === galleryImages.length - 1;
}

nextButton.addEventListener("click", function () {
    if (currentImage < galleryImages.length - 1) {
        currentImage++;
        updateGallery();
    }
});

previousButton.addEventListener("click", function () {
    if (currentImage > 0) {
        currentImage--;
        updateGallery();
    }
});

updateGallery();
// Project search and filter

const projectSearch = document.getElementById("project-search");
const resetSearch = document.getElementById("reset-search");
const projectCards = document.querySelectorAll(".project-card");
const noProjects = document.getElementById("no-projects");

projectSearch.addEventListener("input", function () {

    const searchText = projectSearch.value.toLowerCase().trim();
    let visibleProjects = 0;

    projectCards.forEach(function (card) {

        const projectText = card.textContent.toLowerCase();

        if (projectText.includes(searchText)) {
            card.style.display = "block";
            visibleProjects++;
        } else {
            card.style.display = "none";
        }
    });

    if (visibleProjects === 0) {
        noProjects.style.display = "block";
    } else {
        noProjects.style.display = "none";
    }
});

resetSearch.addEventListener("click", function () {

    projectSearch.value = "";

    projectCards.forEach(function (card) {
        card.style.display = "block";
    });

    noProjects.style.display = "none";
});
// Light and dark theme switch

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
});