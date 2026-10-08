[1:44 PM, 10/8/2026] suwilanji🦍: // Light and dark theme switch

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
});
[1:49 PM, 10/8/2026] suwilanji🦍: # My Student Portfolio Website

## About the Website

This is my personal student portfolio website created for ICT251 Web Technologies.

The website presents information about me, my hobbies, learning plan, projects and skills, photos, media and contact form.

## JavaScript Features

The website includes four interactive JavaScript features:

1. *Contact Form Validation and Preview*
   - Checks the name, email and message.
   - Rejects empty or whitespace-only information.
   - Displays a preview without reloading the page.

2. *Photo Gallery Viewer*
   - Allows users to move through my photos using Previous and Next buttons.

3. *Project Search and Filter*
   - Allows users to search for projects such as HTML, CSS and JavaScript.
   - Includes a Reset button.

4. *Light/Dark Theme Switch*
   - Allows users to switch between light and dark themes.

## Testing

The website was tested using VS Code Live Server.

I tested:

- Navigation links
- Images
- Video and audio
- Contact form validation
- Photo gallery buttons
- Project search
- Light/Dark theme switch
- Responsive layout

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git and GitHub
- Render

## Sources

- MDN Web Docs was used as a reference for HTML, CSS and JavaScript concepts.
- My own photos, video and audio were used as website media.

## Student Information

*Name:* Suwilanji George Ngwira  
*Student Number:* 202506490  
*Programme:* Computer Science  
*University:* Mulungushi University