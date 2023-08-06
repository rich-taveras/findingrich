// timer
function countUp() {
    const startDate = new Date('June 5, 2023 00:00:00').getTime();
  
    setInterval(function() {
      const now = new Date().getTime();
      const timeElapsed = now - startDate;
  
      const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);
  
      document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
  }
  
  countUp();

