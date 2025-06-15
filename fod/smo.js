document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // ✅ Only smooth scroll if it's a hash link
        if (!href.startsWith('#')) return;
  
        e.preventDefault();
        const targetId = href.substring(1);
        const target = document.getElementById(targetId);
        if (!target) return;
  
        const headerOffset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1500;
        let startTime = null;
  
        function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }
  
        function easeInOutCubic(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t * t + b;
          t -= 2;
          return c / 2 * (t * t * t + 2) + b;
        }
  
        requestAnimationFrame(animation);
      });
    });
  });
  