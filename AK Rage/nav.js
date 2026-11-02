document.addEventListener("DOMContentLoaded", function () {
  // 1. Header HTML Structure
  const headerHTML = `
    <nav class="navbar">
      <a href="index.html" class="logo">Alaska Rage Cheer</a>
      <button class="menu-toggle" aria-label="Toggle Navigation" onclick="document.querySelector('.nav-menu').classList.toggle('active')">
        &#9776; MENU
      </button>
      <ul class="nav-menu">
        <li><a href="index.html">Home</a></li>
        <li class="dropdown">
          <a href="#">Teams &#9662;</a>
          <div class="dropdown-content">
            <a href="AKTiny.html">Tiny (Ages 4-6)</a>
            <a href="AKMini.html">Mini (Ages 7-8)</a>
            <a href="AKYouth.html">Youth (Ages 9-16)</a>            
          </div>
        </li>
        <li class="dropdown">
          <a href="#">More &#9662;</a>
          <div class="dropdown-content">
            <a href="AKTumble.html">Tumbling</a>
            <a href="AKPL.html">Private Lessons</a>
            <a href="shop.html">Team Shop</a>
            <a href="schedule.html">Schedule & Tuition</a>
          </div>
        </li>
        <li><a href="coaches.html">Coaches</a></li>
        <li><a href="events.html">Events</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </nav>
  `;

  // 2. Footer HTML Structure with Social Icons & @tag
  const footerHTML = `
    <p><strong>Call / Text:</strong> 907-982-6362 | <strong>Email:</strong> akragecheer@gmail.com</p>
    <div style="margin: 0.8rem 0; display: flex; justify-content: center; align-items: center; gap: 0.8rem;">
      <!-- Facebook Link & Icon -->
      <a href="https://www.facebook.com/alaskaragecheer" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style="color: #f1c40f; text-decoration: none; transition: opacity 0.2s;">
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" style="vertical-align: middle;">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
        </svg>
      </a>
      <!-- Instagram Link & Icon -->
      <a href="https://www.instagram.com/alaskaragecheer" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style="color: #f1c40f; text-decoration: none; transition: opacity 0.2s;">
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" style="vertical-align: middle;">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>
      <!-- @tag Handles -->
      <span style="color: #f1c40f; font-weight: bold; font-family: sans-serif;">@alaskaragecheer</span>
    </div>
    <p style="color: #d4af37; margin-top: 0.5rem;">STRONGER SKILLS. STRONGER YOU. #BUILTINRAGE</p>
  `;

  // 3. Inject into DOM
  const headerElem = document.querySelector("header");
  const footerElem = document.querySelector("footer");

  if (headerElem) headerElem.innerHTML = headerHTML;
  if (footerElem) footerElem.innerHTML = footerHTML;
});