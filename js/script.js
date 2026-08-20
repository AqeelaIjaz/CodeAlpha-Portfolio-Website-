// Reveal sections gently on scroll.
(function(){
  var groups = document.querySelectorAll(
    '.about__grid, .flagship__card, .projects__grid, .skills__grid, .design__grid, .timeline__list, .contact__inner'
  );

  var targets = [];
  groups.forEach(function(group){
    var children = group.children;
    if (children.length > 1){
      Array.prototype.forEach.call(children, function(child){ targets.push(child); });
    } else {
      targets.push(group);
    }
  });

  targets.forEach(function(el){ el.classList.add('reveal'); });

  if (!('IntersectionObserver' in window)){
    targets.forEach(function(el){ el.classList.add('is-visible'); });
    return;
  }

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function(el){ io.observe(el); });
})();

// Mobile nav toggle
(function(){
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function(){
    nav.classList.toggle('nav--open');
  });
  nav.querySelectorAll('.nav__links a').forEach(function(a){
    a.addEventListener('click', function(){ nav.classList.remove('nav--open'); });
  });
})();
