

  document.querySelectorAll('.btn-read-more').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const loader = document.getElementById('page-loader');
      loader.style.display = 'flex';
      const target = this.getAttribute('href');
      setTimeout(() => {
        window.location.href = target;
      }, 800); // You can change this delay
    });
  });