(function () {
  'use strict';
  var WA = 'https://wa.me/628129101829?text=Halo%2C%20saya%20ingin%20reservasi';
  document.querySelectorAll('.wa-link').forEach(function (a) { a.href = WA; });
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  // Hamburger
  var burger = document.querySelector('.burger');
  var links = document.getElementById('nav-links');
  burger.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { links.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  });

  // Menu tabs
  var tabsEl = document.getElementById('menu-tabs');
  var panelsEl = document.getElementById('menu-panels');
  var tabs = [];
  MENU.forEach(function (cat, i) {
    var t = document.createElement('button');
    t.type = 'button'; t.className = 'tab'; t.id = 'tab-' + cat.id;
    t.setAttribute('role', 'tab');
    t.setAttribute('aria-controls', 'panel-' + cat.id);
    t.textContent = cat.label;
    tabsEl.appendChild(t); tabs.push(t);

    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'panel-' + cat.id;
    p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', t.id); p.tabIndex = 0;
    cat.groups.forEach(function (g) {
      var h = document.createElement('h3'); h.className = 'group-title'; h.textContent = g.title; p.appendChild(h);
      var ul = document.createElement('ul'); ul.className = 'menu-grid';
      g.items.forEach(function (it) {
        var li = document.createElement('li'); li.className = 'menu-card';
        var n = document.createElement('span'); n.className = 'm-name'; n.textContent = it.name;
        var d = document.createElement('span'); d.className = 'm-dots'; d.setAttribute('aria-hidden', 'true');
        var pr = document.createElement('span'); pr.className = 'm-price'; pr.textContent = formatHarga(it.price);
        li.append(n, d, pr); ul.appendChild(li);
      });
      p.appendChild(ul);
    });
    panelsEl.appendChild(p);
    t.addEventListener('click', function () { select(i, false); });
  });
  function select(i, focus) {
    tabs.forEach(function (t, j) {
      var on = i === j;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tabs[i].focus();
  }
  tabsEl.addEventListener('keydown', function (e) {
    var i = tabs.indexOf(document.activeElement); if (i < 0) return;
    var n = tabs.length, k = e.key;
    if (k === 'ArrowRight') i = (i + 1) % n; else if (k === 'ArrowLeft') i = (i - 1 + n) % n;
    else if (k === 'Home') i = 0; else if (k === 'End') i = n - 1; else return;
    e.preventDefault(); select(i, true);
  });
  select(0, false);

  // Lightbox
  var lb = document.getElementById('lightbox'), lbImg = lb.querySelector('img'), last;
  function close() { lb.hidden = true; lbImg.src = ''; if (last) last.focus(); }
  document.querySelectorAll('[data-lightbox]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault(); last = a;
      lbImg.src = a.href; lbImg.alt = a.querySelector('img').alt;
      lb.hidden = false; lb.querySelector('.lb-close').focus();
    });
  });
  lb.addEventListener('click', function (e) { if (e.target !== lbImg) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) close(); });
})();
