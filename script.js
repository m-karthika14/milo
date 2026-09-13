(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // scroll progress
  var progress = document.getElementById('progress');
  function onScroll() {
    var h = document.documentElement;
    var scrolled = h.scrollTop || document.body.scrollTop;
    var max = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
    var pct = max > 0 ? (scrolled / max) * 100 : 0;
    progress.style.width = pct + '%';
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // smooth scroll for data-scroll links
  document.querySelectorAll('[data-scroll]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      var href = el.getAttribute('href');
      if (!href || href.charAt(0) !== '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
      }
    });
  });

  // reveal on scroll
  var revealEls = document.querySelectorAll('.reveal-up');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('pending');
        }
      });
    }, { threshold: .2, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });

    var diagramWrap = document.getElementById('diagramWrap');
    if (diagramWrap) {
      var io2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setTimeout(function () { diagramWrap.classList.add('solved'); }, 500);
          }
        });
      }, { threshold: .5 });
      io2.observe(diagramWrap);
    }
  } else {
    revealEls.forEach(function (el) { el.classList.remove('pending'); });
  }

  // watch demo -> scroll to hero visual + pulse
  var watchBtn = document.getElementById('watchDemoBtn');
  var stage = document.getElementById('stage');
  if (watchBtn && stage) {
    watchBtn.addEventListener('click', function () {
      stage.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
      stage.classList.remove('pulse');
      void stage.offsetWidth;
      stage.classList.add('pulse');
    });
  }

  // ambient particles in hero
  var canvas = document.getElementById('particles');
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var hero = canvas.closest('.hero');
    var dots = [];
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      var rect = hero.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.round((rect.width * rect.height) / 26000);
      dots = [];
      for (var i = 0; i < count; i++) {
        dots.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          r: Math.random() * 1.4 + .4,
          vy: -(Math.random() * .12 + .04),
          o: Math.random() * .4 + .15
        });
      }
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
      var rect = hero.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      dots.forEach(function (d) {
        d.y += d.vy;
        if (d.y < -4) { d.y = rect.height + 4; d.x = Math.random() * rect.width; }
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(62,207,142,' + d.o + ')';
        ctx.fill();
      });
      if (!reduced) { requestAnimationFrame(draw); }
    }
    if (reduced) {
      draw();
    } else {
      requestAnimationFrame(draw);
    }
  }
})();
