// Function to toggle theme
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.querySelector('.btn-theme i');

  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
  }
}

// Function to load theme on page load
function loadTheme() {
  const theme = localStorage.getItem('theme');
  const themeIcon = document.querySelector('.btn-theme i');

  if (theme === 'dark') {
    document.body.classList.add('dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    document.body.classList.remove('dark');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
}

// Load theme when DOM is ready
document.addEventListener('DOMContentLoaded', loadTheme);

// Existing sidebar function
function alternarSidebar() {
  document.body.classList.toggle('sidebar-oculta');
}
