document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (!target) return;
  
        const headerOffset = 80; // adjust for sticky nav height
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1500; // 1.5 seconds for slower smooth scroll
        let startTime = null;
  
        function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }
  
        // ✨ Super smooth easing
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
  


  
    const text = document.getElementById('scrollText');
  
    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          text.classList.remove('opacity-0', 'translate-x-full');
          text.classList.add('opacity-100', 'translate-x-0');
        } else {
          text.classList.remove('opacity-100', 'translate-x-0');
          text.classList.add('opacity-0', 'translate-x-full');
        }
      });
    }, { threshold: 0.5 });
  
    textObserver.observe(text);


    const image = document.getElementById('scrollImage');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            image.classList.remove('opacity-0', '-translate-x-full');
            image.classList.add('opacity-100', 'translate-x-0');
        } else {
            image.classList.remove('opacity-100', 'translate-x-0');
            image.classList.add('opacity-0', '-translate-x-full');
        }
        });
    }, { threshold: 0.5 }); // Adjust threshold if needed

    observer.observe(image);
