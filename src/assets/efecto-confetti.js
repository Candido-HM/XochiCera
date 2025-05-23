document.addEventListener('DOMContentLoaded', () => {
    var end = Date.now() + (2 * 1000);
  
    // Definir colores
    var colors = ['#511252', '#262626'];
  
    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });
  
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  });