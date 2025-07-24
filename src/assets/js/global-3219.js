(function() {
  const init = () => {
    const mobileToggle = document.querySelectorAll('[data-config-id="toggle-mobile"]');
    const mobileMenu = document.querySelector('.navbar-menu');
    const mobileClose = document.querySelectorAll('.navbar-close');
    
    mobileToggle.forEach(toggle => {
      toggle.addEventListener('click', () => {
        if (mobileMenu) {
          mobileMenu.classList.remove('d-none');
        }
      });
    });
    
    mobileClose.forEach(close => {
      close.addEventListener('click', (e) => {
        e.preventDefault();
        if (mobileMenu) {
          mobileMenu.classList.add('d-none');
        }
      });
    });
    
    const spinElements = document.querySelectorAll('.spin');
    spinElements.forEach(element => {
      element.style.animation = 'spin 10s linear infinite';
    });
    
    const style = document.createElement('style');
    style.textContent = '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }';
    document.head.appendChild(style);
  };
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();