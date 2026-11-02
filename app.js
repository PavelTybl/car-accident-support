(function () {
  'use strict';

  var TOTAL_STEPS = 8;

  /* ---------- Icons ---------- */
  var I = {
    check: '<svg class="ico" viewBox="0 0 32 32" fill="none" stroke="#30d158" stroke-width="2"><circle cx="16" cy="16" r="13"/><path d="M10 16.5l4 4 8-9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    empty: '<svg class="ico" viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2"><circle cx="16" cy="16" r="13"/></svg>',
    alert: '<svg class="ico" viewBox="0 0 32 32" fill="none" stroke="#ff453a" stroke-width="2"><circle cx="16" cy="16" r="13"/><path d="M16 9v9M16 22v1" stroke-linecap="round"/></svg>',
    right: '<svg class="go" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6"><path d="M3 12h17M14 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    left: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6"><path d="M21 12H4M10 5l-7 7 7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    move: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 12h18M12 3l-3 3M12 3l3 3M12 21l-3-3M12 21l3-3M3 12l3-3M3 12l3 3M21 12l-3-3M21 12l-3 3"/></svg>',
    car: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v-4l2-5h12l2 5v4M4 16h16M4 16v2M20 16v2M7 13h.01M17 13h.01"/></svg>',
    speed: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18a8 8 0 1116 0M12 18l4-6"/></svg>',
    rotate: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12a8 8 0 11-2.6-5.9M20 4v4h-4"/></svg>',
    plus: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M12 4v16M4 12h16"/></svg>',
    pencil: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l1-4L16 5l3 3L8 19z"/></svg>',
    plusc: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>',
    camera: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l1.5-2.5h7L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>',
    checkc: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#30d158" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/></svg>',
    info: '<svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#ffd60a"/><path d="M12 11v6M12 7.2v.1" stroke="#000" stroke-width="2.2" stroke-linecap="round"/></svg>',
    chev: '<svg class="chv" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 4l6 6-6 6"/></svg>',
    qr: '<svg class="oi" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8V4h4M17 4h4v4M21 16v4h-4M7 20H3v-4"/><rect x="7.5" y="7.5" width="3" height="3"/><rect x="13.5" y="7.5" width="3" height="3"/><rect x="7.5" y="13.5" width="3" height="3"/><path d="M13.5 13.5h3v3"/></svg>',
    mail: '<svg class="oi" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="1"/><path d="M3.5 6.5l8.5 7 8.5-7M3.5 18l6-6M20.5 18l-6-6"/></svg>',
    phone: '<svg class="oi" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="6.5" y="2.5" width="11" height="19" rx="1.5"/><path d="M11 18.5h2"/></svg>',
    doc: '<svg class="oi" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/></svg>',
    xmark: '<svg class="oi" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"><path d="M5 5l14 14M19 5L5 19"/></svg>',
    bank: '<svg class="oi" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-5 9 5M5 9v9M19 9v9M3 20h18M3 18h18"/><rect x="9" y="11" width="6" height="5" rx="1"/><circle cx="12" cy="13.5" r="1"/></svg>',
    hand: '<svg class="oi" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11V5.5a1.5 1.5 0 013 0V11M12 10V8.5a1.5 1.5 0 013 0V12M15 11.5a1.5 1.5 0 013 0V15a6 6 0 01-6 6h-1a6 6 0 01-5-2.7L4 14.5a1.5 1.5 0 012.4-1.7L9 15"/></svg>',
    dl: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 11l5 5 5-5M5 20h14"/></svg>',
    pin: '<svg width="36" height="46" viewBox="0 0 36 46"><path d="M18 45C18 45 3 28 3 17a15 15 0 0130 0c0 11-15 28-15 28z" fill="#30d158"/><circle cx="18" cy="17" r="5.5" fill="#06210d"/></svg>'
  };

  /* ---------- Session state (survives refresh; harmless if storage is blocked) ---------- */
  var state = {};
  try { state = JSON.parse(sessionStorage.getItem('aw') || '{}'); } catch (e) {}
  function save() { try { sessionStorage.setItem('aw', JSON.stringify(state)); } catch (e) {} }

  var app = document.getElementById('app');
  var cleanup = null;

  function toast(msg) {
    var host = app.querySelector('.controls') || app;
    var old = app.querySelector('.toast'); if (old) old.remove();
    var t = document.createElement('div'); t.className = 'toast' + (host === app ? ' fixed' : ''); t.textContent = msg; host.appendChild(t);
    setTimeout(function () { t.remove(); }, 1800);
  }

  /* ---------- Maps (Leaflet + OpenStreetMap-based tiles; no API key needed) ---------- */
  function makeMap(el, kind, lat, lng, zoom) {
    var m = L.map(el, { zoomControl: false, dragging: false, touchZoom: false, doubleClickZoom: false,
      scrollWheelZoom: false, boxZoom: false, keyboard: false }).setView([lat, lng], zoom);
    m.attributionControl.setPrefix(false);
    if (kind === 'dark') {
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 19, className: 'dark-tiles', attribution: 'Tiles © Esri' }).addTo(m);
    } else {
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 19, attribution: 'Tiles © Esri' }).addTo(m);
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 19 }).addTo(m);
    }
    cleanup = function () { m.remove(); };
    setTimeout(function () { m.invalidateSize(); }, 0);
    return m;
  }

  function jget(url) { return fetch(url).then(function (r) { return r.json(); }); }

  function geocode(q) {
    return jget('https://nominatim.openstreetmap.org/search?format=json&limit=1&accept-language=en&q=' + encodeURIComponent(q))
      .then(function (a) { return a && a[0] ? { lat: +a[0].lat, lng: +a[0].lon } : null; })
      .catch(function () { return null; })
      .then(function (r) {
        if (r) return r;
        return jget('https://photon.komoot.io/api/?limit=1&lang=en&q=' + encodeURIComponent(q))
          .then(function (j) { var f = j && j.features && j.features[0]; return f ? { lat: f.geometry.coordinates[1], lng: f.geometry.coordinates[0] } : null; })
          .catch(function () { return null; });
      });
  }

  function reverse(lat, lng) {
    return jget('https://nominatim.openstreetmap.org/reverse?format=jsonv2&accept-language=en&lat=' + lat + '&lon=' + lng)
      .then(function (j) {
        var a = j && j.address; if (!a) return null;
        var street = [a.road, a.house_number].filter(Boolean).join(' ');
        var tail = [a.postcode, a.city || a.town || a.village || a.suburb].filter(Boolean).join(' ');
        return [street, tail].filter(Boolean).join(', ') || null;
      })
      .catch(function () { return null; })
      .then(function (r) {
        if (r) return r;
        return jget('https://photon.komoot.io/reverse?lang=en&lat=' + lat + '&lon=' + lng)
          .then(function (j) {
            var p = j && j.features && j.features[0] && j.features[0].properties; if (!p) return null;
            var street = [p.street || p.name, p.housenumber].filter(Boolean).join(' ');
            var tail = [p.postcode, p.city || p.district].filter(Boolean).join(' ');
            return [street, tail].filter(Boolean).join(', ') || null;
          })
          .catch(function () { return null; });
      });
  }

  /* Fallback used when the visitor declines or can't share their location */
  var DEFAULT_ADDR = 'K Háječku 29, 100 00 Strašnice';
  function getLoc() {
    if (!state.location) state.location = { address: DEFAULT_ADDR, lat: 50.0705, lng: 14.5, resolved: false, source: 'default' };
    return state.location;
  }

  /* Ask for the real location once, as soon as the page loads */
  var geo = { done: false, listeners: [] };
  var token = 0; // changes on every screen, so late results never touch a screen that is gone
  function onGeo(fn) {
    if (geo.done) return;
    var t = token;
    geo.listeners.push(function () { if (t === token) fn(); });
  }
  function geoSettled() {
    var loc = getLoc();
    var p = (loc.source === 'gps' || loc.source === 'manual' || loc.resolved)
      ? Promise.resolve()
      : geocode('K Háječku 29, Praha').then(function (r) { if (r) { loc.lat = r.lat; loc.lng = r.lng; } loc.resolved = true; save(); });
    p.then(function () {
      state.geoTried = true; save(); geo.done = true;
      var ls = geo.listeners; geo.listeners = []; ls.forEach(function (f) { f(); });
    });
  }
  function initGeolocation() {
    var loc = getLoc();
    if (state.geoTried || !navigator.geolocation) { geoSettled(); return; }
    navigator.geolocation.getCurrentPosition(function (pos) {
      if (loc.source !== 'manual') {
        loc.lat = pos.coords.latitude; loc.lng = pos.coords.longitude; loc.source = 'gps'; loc.resolved = true;
        loc.address = 'Your current location'; save();
        reverse(loc.lat, loc.lng).then(function (addr) { if (addr && loc.source === 'gps') { loc.address = addr; save(); } geoSettled(); });
      } else geoSettled();
    }, function () { geoSettled(); }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 });
  }

  /* ---------- Screens ---------- */
  function startScreen() {
    return {
      bar: { title: 'Car accident support' },
      html:
        '<h2>Is everyone all right?</h2>' +
        '<p class="intro">Your safety comes first. Please confirm that you and everyone else at the scene are unhurt.</p>' +
        '<div class="stack">' +
        '<a class="opt" href="#safety">' + I.check + '<div class="txt"><b>Yes, everyone is all right.</b><span>Start the accident report assistant.</span></div>' + I.right + '</a>' +
        '<a class="opt danger" href="tel:112">' + I.alert + '<div class="txt"><b>No, emergency!</b><span>We will help you call help</span></div>' + I.right + '</a>' +
        '</div>'
    };
  }

  function checklist(key, title, intro, items, next) {
    return {
      bar: { title: title, back: true }, next: next, gated: true,
      html:
        '<p class="intro">' + intro + '</p><div class="stack">' +
        items.map(function (it, i) {
          return '<button class="opt" role="checkbox" aria-checked="false">' +
            I.empty + '<div class="txt"><b>' + it[0] + '</b><span>' + it[1] + '</span></div></button>';
        }).join('') + '</div>',
      init: function (root, btn) {
        var boxes = root.querySelectorAll('[role=checkbox]');
        var saved = state[key] || [];
        function paint() {
          var all = true;
          boxes.forEach(function (b, i) {
            var on = !!saved[i];
            b.setAttribute('aria-checked', on);
            b.classList.toggle('checked', on);
            b.querySelector('.ico').outerHTML = on ? I.check : I.empty;
            if (!on) all = false;
          });
          btn.classList.toggle('on', all);
          btn.disabled = !all;
        }
        boxes.forEach(function (b, i) {
          b.addEventListener('click', function () { saved[i] = !saved[i]; state[key] = saved; save(); paint(); });
        });
        paint();
      }
    };
  }

  function locationScreen() {
    return {
      bar: { title: 'Accident location', back: true, step: 1 }, next: 'details', cta: "Yes, that's correct", fill: true,
      html:
        '<p class="intro">Confirm the location where the accident occured:</p>' +
        '<div class="card grow">' +
          '<div id="v-confirm"><h3>Is this the accident location?</h3><div class="map loc" id="locmap"></div>' +
            '<p class="addr" id="locaddr"></p><button class="btn2" id="manual">No, enter manually</button></div>' +
          '<div id="v-manual" hidden><h3>Enter the accident location</h3>' +
            '<input class="field" id="q" type="text" placeholder="Street, number, city" autocomplete="street-address">' +
            '<p class="err" id="err"></p><button class="btn2" id="find">Find on map</button>' +
            '<button class="btn2 ghost" id="cancel">Cancel</button></div>' +
        '</div>',
      init: function (root) {
        var loc = getLoc(), mapEl = root.querySelector('#locmap');
        var m = makeMap(mapEl, 'dark', loc.lat, loc.lng, 17);
        var mk = L.marker([loc.lat, loc.lng], { icon: L.divIcon({ className: 'pin', html: I.pin, iconSize: [36, 46], iconAnchor: [18, 46] }) }).addTo(m);
        var addr = root.querySelector('#locaddr'), vc = root.querySelector('#v-confirm'), vm = root.querySelector('#v-manual'),
            q = root.querySelector('#q'), err = root.querySelector('#err');
        function show() {
          addr.textContent = geo.done ? loc.address : 'Finding your location…';
          m.setView([loc.lat, loc.lng], 17, { animate: false }); mk.setLatLng([loc.lat, loc.lng]);
        }
        show(); onGeo(show);
        root.querySelector('#manual').addEventListener('click', function () { vc.hidden = true; vm.hidden = false; q.value = ''; q.focus(); });
        function find() {
          var v = q.value.trim(); if (!v) return; err.textContent = 'Searching…';
          geocode(v).then(function (r) {
            if (!r) { err.textContent = "We couldn't find that address. Try adding the city."; return; }
            loc.address = v; loc.lat = r.lat; loc.lng = r.lng; loc.resolved = true; loc.source = 'manual'; save();
            err.textContent = ''; vm.hidden = true; vc.hidden = false; geo.done = true; m.invalidateSize(); show();
          });
        }
        root.querySelector('#find').addEventListener('click', find);
        root.querySelector('#cancel').addEventListener('click', function () {
          err.textContent = ''; vm.hidden = true; vc.hidden = false; m.invalidateSize(); show();
        });
        q.addEventListener('keydown', function (e) { if (e.key === 'Enter') find(); });
        if (window.ResizeObserver) {
          var ro = new ResizeObserver(function () { m.invalidateSize(); m.setView([loc.lat, loc.lng], 17, { animate: false }); });
          ro.observe(mapEl);
          var prev = cleanup; cleanup = function () { ro.disconnect(); if (prev) prev(); };
        }
      }
    };
  }

  function sketchScreen() {
    return {
      bar: { title: 'Accident sketch', back: true, step: 4 }, next: 'documents', cta: 'Next', fill: true,
      html:
        '<div class="seg" role="tablist"><button data-k="A" class="on">Vehicle A</button><button data-k="B">Vehicle B</button></div>' +
        '<div class="card flush grow"><div class="sketch" id="sk"><div class="map" id="skmap"></div></div></div>' +
        '<div class="row"><button id="add">' + I.plus + ' Add element</button><button id="edit">' + I.pencil + ' Edit</button></div>',
      init: function (root) {
        var loc = getLoc();
        var box = root.querySelector('#sk');
        var sm = makeMap(root.querySelector('#skmap'), 'sat', loc.lat, loc.lng, 19);
        onGeo(function () { sm.setView([loc.lat, loc.lng], 19, { animate: false }); });
        var sk = state.sketch || {
          sel: 'A',
          A: { x: 0.66, y: 0.76, a: 35, van: 0, spd: 1 },
          B: { x: 0.30, y: 0.38, a: 150, van: 0, spd: 1 }
        };
        state.sketch = sk;
        var els = {}, ctrls = document.createElement('div');
        ctrls.className = 'ctrls';
        ctrls.innerHTML =
          '<button data-act="move" style="left:0;top:-60px" aria-label="Move">' + I.move + '</button>' +
          '<button data-act="car" style="left:-60px;top:0" aria-label="Vehicle type">' + I.car + '</button>' +
          '<button data-act="speed" style="left:60px;top:0" aria-label="Speed">' + I.speed + '</button>' +
          '<button data-act="rotate" style="left:0;top:60px" aria-label="Rotate">' + I.rotate + '</button>';

        function vehSVG(k, v) {
          var h = v.van ? 68 : 54, w = 28, len = [10, 22, 38][v.spd], top = 70 - h / 2;
          var col = k === 'A' ? '#30d158' : '#ffffff';
          var body = k === 'A'
            ? '<rect class="body" data-act="body" data-k="A" x="' + (70 - w / 2) + '" y="' + top + '" width="' + w + '" height="' + h + '" rx="6" fill="#30d158"/>'
            : '<rect class="body" data-act="body" data-k="B" x="' + (70 - w / 2) + '" y="' + top + '" width="' + w + '" height="' + h + '" rx="6" fill="rgba(0,0,0,.4)" stroke="#fff" stroke-width="2.5"/>';
          var ay = top - 3;
          return '<svg viewBox="0 0 140 140">' + body +
            '<text x="70" y="76" text-anchor="middle" font-size="20" font-weight="700" fill="' + (k === 'A' ? '#06210d' : '#fff') + '" pointer-events="none">' + k + '</text>' +
            '<path d="M70 ' + ay + ' V' + (ay - len) + ' M63 ' + (ay - len + 8) + ' L70 ' + (ay - len) + ' L77 ' + (ay - len + 8) + '" stroke="' + col + '" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round" pointer-events="none"/></svg>';
        }
        ['B', 'A'].forEach(function (k) {
          var d = document.createElement('div'); d.className = 'veh'; els[k] = d; box.appendChild(d);
        });
        box.appendChild(ctrls);

        function place() {
          var W = box.clientWidth, H = box.clientHeight;
          ['A', 'B'].forEach(function (k) {
            var v = sk[k], d = els[k];
            d.innerHTML = vehSVG(k, v);
            d.style.left = (v.x * 100) + '%'; d.style.top = (v.y * 100) + '%';
            d.style.transform = 'rotate(' + v.a + 'deg)';
            d.style.zIndex = sk.sel === k ? 520 : 510;
          });
          var s = sk[sk.sel];
          ctrls.style.left = (s.x * W) + 'px'; ctrls.style.top = (s.y * H) + 'px';
          root.querySelectorAll('.seg button').forEach(function (b) { b.classList.toggle('on', b.dataset.k === sk.sel); });
        }
        function select(k) { sk.sel = k; place(); save(); }
        root.querySelectorAll('.seg button').forEach(function (b) { b.addEventListener('click', function () { select(b.dataset.k); }); });
        root.querySelector('#add').addEventListener('click', function () { toast('Not available in this prototype'); });
        root.querySelector('#edit').addEventListener('click', function () { toast('Not available in this prototype'); });

        var drag = null;
        function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }
        box.addEventListener('pointerdown', function (e) {
          var t = e.target.closest('[data-act]'); if (!t) return;
          var act = t.dataset.act;
          if (act === 'body') select(t.dataset.k);
          var v = sk[sk.sel];
          if (act === 'car') { v.van = v.van ? 0 : 1; place(); save(); return; }
          if (act === 'speed') { v.spd = (v.spd + 1) % 3; place(); save(); return; }
          e.preventDefault(); box.setPointerCapture(e.pointerId);
          var r = box.getBoundingClientRect();
          var ang = Math.atan2(e.clientX - (r.left + v.x * r.width), -(e.clientY - (r.top + v.y * r.height))) * 180 / Math.PI;
          drag = { mode: act === 'rotate' ? 'rotate' : 'move', x: e.clientX, y: e.clientY, ang0: ang, a0: v.a };
        });
        box.addEventListener('pointermove', function (e) {
          if (!drag) return;
          var r = box.getBoundingClientRect(), v = sk[sk.sel];
          if (drag.mode === 'move') {
            v.x = clamp(v.x + (e.clientX - drag.x) / r.width, 0.03, 0.97);
            v.y = clamp(v.y + (e.clientY - drag.y) / r.height, 0.03, 0.97);
            drag.x = e.clientX; drag.y = e.clientY;
          } else {
            var ang = Math.atan2(e.clientX - (r.left + v.x * r.width), -(e.clientY - (r.top + v.y * r.height))) * 180 / Math.PI;
            v.a = Math.round(drag.a0 + (ang - drag.ang0));
          }
          place();
        });
        function end() { if (drag) { drag = null; save(); } }
        box.addEventListener('pointerup', end);
        box.addEventListener('pointercancel', end);
        var ro;
        if (window.ResizeObserver) { ro = new ResizeObserver(function () { sm.invalidateSize(); place(); }); ro.observe(box); }
        else window.addEventListener('resize', place);
        var prev = cleanup;
        cleanup = function () { window.removeEventListener('resize', place); if (ro) ro.disconnect(); if (prev) prev(); };
        place();
      }
    };
  }

  function detailsScreen() {
    var d = state.details || (state.details = { text: '', vehicles: '1', damage: DEFAULT_DAMAGE, witnesses: [] });
    var vehicles = ['1', '2', '3', '4', '5 or more'];
    var damage = Object.keys(DAMAGE_ANGLES);
    function opts(list, cur) { return list.map(function (o) { return '<option' + (o === cur ? ' selected' : '') + '>' + o + '</option>'; }).join(''); }
    return {
      bar: { title: 'Accident details', back: true, step: 2 }, next: 'photos', cta: 'Next',
      html:
        '<p class="intro">Fill in the details of your accident:</p>' +
        '<div class="card form">' +
          '<textarea class="ta" id="txt" placeholder="Describe the accident"></textarea>' +
          '<label class="sel"><span>How many other vehicles?</span><select id="veh">' + opts(vehicles, d.vehicles) + '</select></label>' +
          '<label class="sel"><span>Type of damage</span><select id="dmg">' + opts(damage, d.damage) + '</select></label>' +
        '</div>' +
        '<div class="card wit"><small>Witnesses</small><div id="wl"></div>' +
          '<button class="btn2 icon" id="addw">' + I.plusc + ' Add a witness</button></div>',
      init: function (root) {
        var txt = root.querySelector('#txt'), wl = root.querySelector('#wl');
        txt.value = d.text;
        txt.addEventListener('input', function () { d.text = txt.value; save(); });
        root.querySelector('#veh').addEventListener('change', function (e) { d.vehicles = e.target.value; save(); });
        root.querySelector('#dmg').addEventListener('change', function (e) { d.damage = e.target.value; save(); });
        function drawW() {
          wl.innerHTML = '';
          d.witnesses.forEach(function (w, i) {
            var el = document.createElement('div'); el.className = 'wi';
            el.innerHTML = '<input class="field" placeholder="Witness name" aria-label="Witness name">' +
              '<input class="field" type="tel" placeholder="Phone or email" aria-label="Witness contact">' +
              '<button class="link" type="button">Remove</button>';
            var f = el.querySelectorAll('input');
            f[0].value = w.name || ''; f[1].value = w.contact || '';
            f[0].addEventListener('input', function () { w.name = f[0].value; save(); });
            f[1].addEventListener('input', function () { w.contact = f[1].value; save(); });
            el.querySelector('.link').addEventListener('click', function () { d.witnesses.splice(i, 1); save(); drawW(); });
            wl.appendChild(el);
          });
        }
        drawW();
        root.querySelector('#addw').addEventListener('click', function () {
          d.witnesses.push({ name: '', contact: '' }); save(); drawW();
          var f = wl.querySelectorAll('.wi'); f[f.length - 1].querySelector('input').focus();
        });
      }
    };
  }

  /* ---------- Fake camera: real viewfinder, pre-made picture on shutter ---------- */
  var PH_SRC = {
    back: 'assets/photos/back.jpg', side: 'assets/photos/side.jpg',
    licence: 'assets/documents/licence.jpg', green: 'assets/documents/green-card.jpg'
  };
  function extraSrc(n) { return 'assets/photos/extra-' + n + '.jpg'; }
  /* The fake camera cycles through just these demo photos, whatever angle is requested */
  var DEMO_PHOTOS = ['assets/photos/front.jpg', 'assets/photos/front-left.jpg'];

  function placeholderImg(label, landscape) {
    var c = document.createElement('canvas'), w = landscape ? 1000 : 720, h = landscape ? 640 : 960; c.width = w; c.height = h;
    var g = c.getContext('2d'), gr = g.createLinearGradient(0, 0, w, h);
    gr.addColorStop(0, '#3a3d42'); gr.addColorStop(1, '#1d1f22'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(255,255,255,.18)'; g.lineWidth = 4; g.strokeRect(40, 40, w - 80, h - 80);
    g.fillStyle = 'rgba(255,255,255,.75)'; g.font = '600 ' + (landscape ? 40 : 44) + 'px sans-serif'; g.textAlign = 'center';
    g.fillText('Placeholder picture', w / 2, h / 2 - 10); g.font = '400 30px sans-serif'; g.fillStyle = 'rgba(255,255,255,.5)';
    g.fillText(label, w / 2, h / 2 + 40);
    return c.toDataURL('image/jpeg', 0.8);
  }
  function resolveImg(src, label, landscape) {
    return new Promise(function (res) {
      var im = new Image();
      im.onload = function () { res(src); };
      im.onerror = function () { res(placeholderImg(label, landscape)); };
      im.src = src;
    });
  }

  /* opts: { title, hint, shape: 'vehicle'|'document', src, label, onDone(imageUrl) } */
  function openCamera(opts) {
    var landscape = opts.shape === 'document';
    var prevOverflow = app.style.overflow; app.scrollTop = 0; app.style.overflow = 'hidden';
    var el = document.createElement('div'); el.className = 'cam';
    el.innerHTML =
      '<video playsinline muted autoplay></video><div class="cam-fallback">Camera preview</div>' +
      '<div class="cam-top"><button class="cam-x" aria-label="Close">' + I.left + '</button><span>' + opts.title + '</span><i></i></div>' +
      '<div class="cam-guide ' + (landscape ? 'g-doc' : 'g-veh') + '"></div>' +
      '<p class="cam-hint">' + opts.hint + '</p>' +
      '<div class="cam-bot"><button class="cam-shutter" aria-label="Take picture"></button></div>' +
      '<img class="cam-shot" alt="" hidden><div class="cam-busy" hidden><span class="spin big"></span><p>Analysing picture</p></div><div class="cam-flash"></div>';
    app.appendChild(el);
    var video = el.querySelector('video'), stream = null, closed = false, busy = false;
    var pre = resolveImg(opts.src, opts.label, landscape);

    function close() {
      if (closed) return; closed = true;
      if (stream) stream.getTracks().forEach(function (t) { t.stop(); });
      app.style.overflow = prevOverflow; el.remove();
    }
    var prevCleanup = cleanup; cleanup = function () { close(); if (prevCleanup) prevCleanup(); };

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' } }, audio: false }).then(function (s) {
        if (closed) { s.getTracks().forEach(function (t) { t.stop(); }); return; }
        stream = s; video.srcObject = s; el.classList.add('live');
      }).catch(function () {});
    }
    el.querySelector('.cam-x').addEventListener('click', close);
    el.querySelector('.cam-shutter').addEventListener('click', function () {
      if (busy) return; busy = true;
      var flash = el.querySelector('.cam-flash'), shot = el.querySelector('.cam-shot');
      flash.classList.add('go');
      pre.then(function (url) {
        shot.src = url; shot.hidden = false; shot.classList.toggle('doc', landscape);
        el.querySelector('.cam-guide').hidden = true; el.querySelector('.cam-hint').hidden = true;
        el.querySelector('.cam-bot').hidden = true;
        if (opts.analysing) el.querySelector('.cam-busy').hidden = false;
        setTimeout(function () { if (closed) return; close(); opts.onDone(url); }, opts.hold || 1000);
      });
    });
  }

  /* Which vehicle angles are photographed for each "Type of damage" (edit freely) */
  var ANGLES = {
    'front': 'Vehicle front side', 'front-left': 'Vehicle front left corner', 'front-right': 'Vehicle front right corner',
    'left': 'Vehicle driver side', 'right': 'Vehicle passenger side',
    'back': 'Vehicle back side', 'back-left': 'Vehicle back left corner', 'back-right': 'Vehicle back right corner'
  };
  var DAMAGE_ANGLES = {
    'Front damage': ['front'],
    'Front left damage': ['front-left'],
    'Front right damage': ['front-right'],
    'Left side damage': ['left'],
    'Right side damage': ['right'],
    'Rear damage': ['back'],
    'Rear left damage': ['back-left'],
    'Rear right damage': ['back-right'],
    'Front and side damage': ['front', 'right'],
    'Rear and side damage': ['back', 'right'],
    'Other damage': ['front', 'back', 'left', 'right']
  };
  var DEFAULT_DAMAGE = 'Rear and side damage';

  /* Photos are kept in memory only (a refresh clears them) */
  var photoUrls = {};
  var CAR_BODY = '<rect x="14" y="4" width="32" height="76" rx="13" fill="#232325" stroke="#cfcfcf" stroke-width="1.4"/>' +
    '<rect x="18" y="16" width="24" height="12" rx="3" fill="#4a4a4d"/><rect x="18" y="54" width="24" height="9" rx="3" fill="#4a4a4d"/>' +
    '<rect x="9" y="24" width="5" height="7" rx="2" fill="#cfcfcf"/><rect x="46" y="24" width="5" height="7" rx="2" fill="#cfcfcf"/>';
  var ILL = {
    back: '<svg viewBox="-4 0 72 100" height="88" overflow="visible"><polygon points="30,76 -2,100 62,100" fill="rgba(48,209,88,.22)"/>' + CAR_BODY +
      '<path d="M15 68 Q15 80 30 80 Q45 80 45 68 L41 68 Q41 75 30 75 Q19 75 19 68Z" fill="#30d158"/></svg>',
    side: '<svg viewBox="0 0 90 90" height="86" overflow="visible"><polygon points="46,22 86,0 86,88 46,62" fill="rgba(48,209,88,.22)"/>' + CAR_BODY +
      '<rect x="43" y="26" width="5" height="34" rx="2" fill="#30d158"/></svg>',
    generic: '<svg viewBox="0 0 64 80" height="64"><rect x="8" y="16" width="48" height="40" rx="4" fill="none" stroke="#6b6b6b" stroke-width="2"/><circle cx="24" cy="30" r="5" fill="#6b6b6b"/><path d="M10 52l16-14 10 8 8-6 12 12" fill="none" stroke="#6b6b6b" stroke-width="2"/></svg>'
  };

  function photosScreen() {
    return {
      bar: { title: 'Photos', back: true, step: 3 }, next: 'sketch', cta: 'Next',
      html:
        '<p class="intro">Take photos of the damage on your vehicle:</p>' +
        '<div class="stack" id="pc"></div>' +
        '<button class="btn2 add" id="addp">' + I.plus + ' Add photo</button>' +
        '<div class="note" id="est" hidden>' + I.info + '<p>Based on your photos, we estimate the damage at 160 000 – 190 000 CZK. If there are additional damages, the total may exceed the legal threshold – in that case, you will be required to call the police.</p></div>' +
        '',
      init: function (root) {
        var pc = root.querySelector('#pc');
        function cards() {
          var dmg = (state.details && DAMAGE_ANGLES[state.details.damage]) ? state.details.damage : DEFAULT_DAMAGE;
          var list = DAMAGE_ANGLES[dmg].map(function (a, n) {
            return { key: a, label: ANGLES[a], img: 'assets/illustrations/' + a + '.svg', src: DEMO_PHOTOS[n % DEMO_PHOTOS.length], req: true };
          });
          for (var k = 0; k < (state.extraPhotos || 0); k++) list.push({ key: 'x' + (k + 1), label: 'Additional photo ' + (k + 1), ill: 'generic', src: DEMO_PHOTOS[(list.length) % DEMO_PHOTOS.length] });
          return list;
        }
        function draw() {
          pc.innerHTML = '';
          var all = cards();
          all.forEach(function (c) {
            var b = document.createElement('button'); b.className = 'pcard'; b.type = 'button';
            var has = !!photoUrls[c.key];
            b.innerHTML = '<span class="pl">' + c.label + '</span><span class="prow"><span class="pill">' +
              (has ? '<img alt="" src="' + photoUrls[c.key] + '">' : c.img ? '<img class="ill" alt="" src="' + c.img + '">' : ILL[c.ill]) + '</span><span class="ptxt">' +
              (has ? 'Retake photo' : 'Take a photo') + '</span></span><span class="pcam">' + (has ? I.checkc : I.camera) + '</span>';
            b.addEventListener('click', function () {
              openCamera({ title: c.label, hint: 'Take a photo of the damage', shape: 'vehicle', src: c.src, label: c.label,
                onDone: function (url) { photoUrls[c.key] = url; draw(); } });
            });
            pc.appendChild(b);
          });
          root.querySelector('#est').hidden = !all.every(function (c) { return !c.req || photoUrls[c.key]; });
        }
        root.querySelector('#addp').addEventListener('click', function () { state.extraPhotos = (state.extraPhotos || 0) + 1; save(); draw(); });
        draw();
      }
    };
  }

  /* ---------- Driver information (scan documents) ---------- */
  var DOC_DEF = {
    contacts: { title: 'Contacts', fields: [
      ['name', 'Name and Surname', 'Jan Dvořák', 0, 0], ['tel', 'Telephone', '+420 603 123 456', 0, 0], ['email', 'Email', 'Jan.Dvorak@email.com', 0, 0]] },
    licence: { title: 'Your driver’s licence', fields: [
      ['no', 'Driver’s licence number', '1234 7894 897645', 0, 0], ['valid', 'Valid until', '26/10/2032', 0, 0]] },
    green: { title: 'Vehicle green card', fields: [
      ['holder', 'Policyholder', 'Jan Dvořák\nVinohradská 142\nPrague 2', 1, 0], ['plate', 'Vehicle plate', '2UL 8462', 0, 1],
      ['model', 'Make and model', 'Škoda Octavia', 0, 1], ['insurer', 'Insurer', 'Generali Česká pojišťovna\n877920-84\nGC: CZ/837/12', 1, 1]] }
  };
  var DOC_KEYS = ['contacts', 'licence', 'green'];

  function mockValues(k) { var v = {}; DOC_DEF[k].fields.forEach(function (f) { v[f[0]] = f[2]; }); return v; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

  function documentsScreen(filled) {
    if (!state.docs) { state.docs = {}; DOC_KEYS.forEach(function (k) { state.docs[k] = { mode: 'empty', values: {} }; }); }
    if (filled) DOC_KEYS.forEach(function (k) { state.docs[k] = { mode: 'filled', values: mockValues(k) }; });
    var docsState = state.docs, scanning = {};
    return {
      bar: { title: 'Driver information', back: true, step: 5 }, next: 'second-party', cta: 'Next',
      html: '<div class="stack" id="dc"></div>',
      init: function (root) {
        var dc = root.querySelector('#dc'), tok = token;
        function cardHTML(k) {
          var d = DOC_DEF[k], s = docsState[k], h = '<div class="card dcard"><small class="dl">' + d.title + '</small>';
          if (scanning[k]) {
            h += '<div class="scanbtn"><span class="spin"></span><b>Scanning…</b></div>';
          } else if (s.mode === 'empty') {
            h += k === 'contacts'
              ? '<div class="cbtns"><button class="btn on" data-k="contacts" data-act="login">Log in</button><button class="btn2" data-k="contacts" data-act="manual">Enter manually</button></div>'
              : '<button class="scanbtn" data-k="' + k + '" data-act="scan">' + I.camera.replace(/#fff/g, '#6b6b6b') + '<b>Scan document</b></button>';
          } else if (s.mode === 'edit') {
            d.fields.forEach(function (f) {
              var v = esc(s.values[f[0]] || '');
              h += '<label class="ef"><span>' + f[1] + '</span>' +
                (f[3] ? '<textarea rows="3" data-f="' + f[0] + '">' + v + '</textarea>' : '<input data-f="' + f[0] + '" value="' + v + '">') + '</label>';
            });
            h += '<div class="cbtns"><button class="btn on" data-k="' + k + '" data-act="save">Save</button><button class="btn2 ghost" data-k="' + k + '" data-act="cancel">Cancel</button></div>';
          } else {
            h += '<div class="dl-list">';
            d.fields.forEach(function (f) {
              h += '<div class="li"><span class="lt">' + f[1] + '</span><span class="lv">' + esc(s.values[f[0]] || '') + '</span>' + (f[4] ? I.chev : '') + '</div>';
            });
            h += '</div><div class="acts">' +
              (k === 'contacts' ? '' : '<button data-k="' + k + '" data-act="scan">' + I.rotate.replace(/width="22" height="22"/, 'width="18" height="18"') + ' Scan again</button>') +
              '<button data-k="' + k + '" data-act="edit">' + I.pencil + ' Edit</button></div>';
          }
          return h + '</div>';
        }
        function draw() { dc.innerHTML = DOC_KEYS.map(cardHTML).join(''); }
        dc.addEventListener('click', function (e) {
          var b = e.target.closest('[data-act]'); if (!b) return;
          var k = b.dataset.k, s = docsState[k], act = b.dataset.act;
          if (act === 'login') { s.mode = 'filled'; s.values = mockValues(k); }
          else if (act === 'manual') { s.prev = s.mode; s.mode = 'edit'; s.values = {}; }
          else if (act === 'edit') { s.prev = s.mode; s.mode = 'edit'; }
          else if (act === 'cancel') { s.mode = s.prev || 'empty'; }
          else if (act === 'save') {
            var vals = {}, any = false;
            dc.querySelectorAll('[data-k="' + k + '"]').forEach(function () {});
            b.closest('.dcard').querySelectorAll('[data-f]').forEach(function (i) { vals[i.dataset.f] = i.value.trim(); if (i.value.trim()) any = true; });
            s.values = vals; s.mode = any ? 'filled' : 'empty';
          }
          else if (act === 'scan') {
            var lab = k === 'licence' ? 'Driver’s licence' : 'Vehicle green card';
            openCamera({ title: lab, hint: 'Place the document inside the frame', shape: 'document', src: k === 'licence' ? PH_SRC.licence : PH_SRC.green, label: lab,
              analysing: true, hold: 3000,
              onDone: function () {
                s.mode = 'filled'; s.values = mockValues(k); save();
                if (tok === token) draw();
              } });
            return;
          }
          save(); draw();
        });
        draw();
      }
    };
  }

  /* ---------- Share form with the other party ---------- */
  var WAIT_MS = 8000; // how long "waiting for the other driver" lasts before moving on (0 = never move on)

  function shareScreen() {
    var opts = [
      ['qr', I.qr, 'Share QR code', 'The other party scans the code and fills in the form in their own browser.', 'waiting'],
      ['sms', I.mail, 'SMS / Email invitation', 'We send them a link to the same online form.', 'waiting'],
      ['device', I.phone, 'Use this device', 'Hand over your phone so they can fill in the form themselves.', 'waiting'],
      ['paper', I.doc, 'Paper form', 'Second driver fills the paper form and you can scan it to your app.', 'waiting'],
      ['none', I.xmark, 'Can’t or won’t fill in', 'The other party is unable or unwilling to complete the form.', 'sign']
    ];
    return {
      bar: { title: 'Share form', back: true, step: 6 },
      html: '<p class="intro">Choose how the other party will fill in the form:</p><div class="stack">' +
        opts.map(function (o) {
          return '<a class="opt" href="#' + o[4] + '" data-id="' + o[0] + '">' + o[1] +
            '<div class="txt"><b>' + o[2] + '</b><span>' + o[3] + '</span></div>' + I.right + '</a>';
        }).join('') + '</div>',
      init: function (root) {
        root.querySelectorAll('a.opt').forEach(function (el) {
          el.addEventListener('click', function () { state.shareMethod = el.dataset.id; save(); });
        });
      }
    };
  }

  function waitingScreen() {
    return {
      bar: { title: 'Share form', back: true, step: 6 }, fill: true,
      html: '<div class="center"><p>Waiting for the other driver to finish filling the report.</p></div>',
      init: function () {
        if (!WAIT_MS) return;
        var t = setTimeout(function () { location.hash = 'sign'; }, WAIT_MS);
        var prev = cleanup; cleanup = function () { clearTimeout(t); if (prev) prev(); };
      }
    };
  }

  /* ---------- Sign ---------- */
  function signScreen() {
    var opts = [
      ['bankid', I.bank, 'BankID', 'Log in with BankID and sign document digitally.'],
      ['sms', I.mail, 'Text message', 'Get a confirmation code via text message.'],
      ['hand', I.hand, 'Handwritten signature', 'Use your screen to write your signature manually.']
    ];
    return {
      bar: { title: 'Sign', back: true, step: 7 },
      html: '<p class="intro">Choose a method of signing the form:</p><div class="stack">' +
        opts.map(function (o) {
          return '<a class="opt" href="#summary" data-id="' + o[0] + '">' + o[1] +
            '<div class="txt"><b>' + o[2] + '</b><span>' + o[3] + '</span></div>' + I.right + '</a>';
        }).join('') + '</div>',
      init: function (root) {
        root.querySelectorAll('a.opt').forEach(function (el) {
          el.addEventListener('click', function () { state.signMethod = el.dataset.id; save(); });
        });
      }
    };
  }

  /* ---------- Report ready / services / consent ---------- */
  var CAR_IMG = '<svg viewBox="0 0 64 64" width="64" height="64"><rect width="64" height="64" rx="4" fill="#2a2a2c"/><path d="M0 40l22-14 16 8 26-16v46H0z" fill="#b3201f"/><path d="M8 52h48" stroke="#555" stroke-width="3"/><circle cx="24" cy="46" r="5" fill="#111"/><circle cx="46" cy="46" r="5" fill="#111"/></svg>';
  var TOW_IMG = '<svg viewBox="0 0 64 64" width="64" height="64"><rect width="64" height="64" rx="4" fill="#2a2a2c"/><path d="M6 40h30l6-10h12l4 10v6H6z" fill="#ffb340"/><circle cx="18" cy="48" r="5" fill="#111"/><circle cx="46" cy="48" r="5" fill="#111"/><path d="M36 40l-8-14" stroke="#ddd" stroke-width="3"/></svg>';

  /* Optional pictures: assets/illustrations/service.jpg|png and tow.jpg|png (falls back to the drawn placeholder) */
  window.__svcFallback = function (img) {
    var m = img.getAttribute('data-n'), step = +img.getAttribute('data-s') || 0;
    if (step === 0) { img.setAttribute('data-s', 1); img.src = 'assets/illustrations/' + m + '.png'; }
    else { var d = document.createElement('span'); d.innerHTML = img.getAttribute('data-f'); img.replaceWith(d.firstChild); }
  };
  function svcImg(name, fallbackSvg) {
    return '<img class="simgi" alt="" data-n="' + name + '" data-s="0" data-f="' + fallbackSvg.replace(/"/g, '&quot;') + '" src="assets/illustrations/' + name + '.jpg" onerror="__svcFallback(this)">';
  }

  function summaryScreen() {
    function drv(dot, name, who, veh, plate, ins) {
      return '<div class="sub"><div class="sr"><span class="sl"><i class="dot" style="background:' + dot + '"></i>' + name + '</span><span class="sv">' + who + '</span></div>' +
        '<div class="sr"><span class="sl">Vehicle</span><span class="sv">' + veh + '<br>' + plate + '</span></div>' +
        '<div class="sr"><span class="sl">Insurer</span><span class="sv">' + ins + '</span></div></div>';
    }
    return {
      bar: { title: 'Report ready', back: true, step: 8 },
      html:
        '<div class="tile"><p class="tp">Download a PDF and send it to your insurance company or simply submit it to them right from the app.</p>' +
          drv('#30d158', 'Driver A (You)', 'Jan Dvořák', 'Škoda Octavia', '2UL 8462', 'Generali Česká pojišťovna') +
          drv('#ffd60a', 'Driver B', 'Tomáš Procházka', 'VW Golf', '5AH 6534', 'ČPP') +
          '<div class="tb"><button class="tbtn" data-t="dl">' + I.dl + ' Download</button><button class="btn on" data-t="send">Send to insurance</button></div></div>' +
        '<p class="intro sec">Optional services:</p>' +
        '<a class="svc" href="#services"><span class="simg">' + svcImg('service', CAR_IMG) + '</span><span class="stx"><b>Book a service</b><span>Estimate repair cost:<br>20 000 – 45 000 CZK</span></span>' + I.right + '</a>' +
        '<button class="svc" data-t="tow"><span class="simg">' + svcImg('tow', TOW_IMG) + '</span><span class="stx"><b>Tow vehicle</b><span>Book a towing service.</span></span>' + I.right + '</button>',
      init: function (root) {
        function endBar() {
          if (root.querySelector('.controls')) return;
          var c = document.createElement('div'); c.className = 'controls two';
          c.innerHTML = '<button class="btn2" data-end="restart">Restart prototype</button><a class="btn2" href="#index" data-end="index">Screen overview</a>';
          root.appendChild(c);
          root.querySelector('[data-end="restart"]').addEventListener('click', function () {
            try { sessionStorage.removeItem('aw'); } catch (e) {}
            location.hash = '#start'; location.reload();
          });
        }
        function submitted(btn) {
          state.sent = true; save();
          btn.textContent = 'Sent to insurance'; btn.disabled = true; btn.classList.add('done');
          var m = document.createElement('div'); m.className = 'modal-bg'; m.setAttribute('role', 'dialog'); m.setAttribute('aria-modal', 'true');
          m.innerHTML = '<div class="modal"><div class="mi">' + I.checkc + '</div><h2>Form submitted</h2>' +
            '<p>Your accident report was successfully sent to Generali Česká pojišťovna. You will receive a confirmation by email.</p>' +
            '<button class="btn on">OK</button></div>';
          root.appendChild(m);
          m.querySelector('button').addEventListener('click', function () { m.remove(); });
          endBar();
        }
        if (state.sent) { var sb = root.querySelector('[data-t="send"]'); if (sb) { sb.textContent = 'Sent to insurance'; sb.disabled = true; sb.classList.add('done'); } endBar(); }
        root.querySelectorAll('[data-t]').forEach(function (b) {
          b.addEventListener('click', function () {
            var t = b.dataset.t;
            if (t === 'send') { submitted(b); return; }
            toast(t === 'dl' ? 'PDF download is not available in this prototype' : 'Towing is not available in this prototype');
          });
        });
      }
    };
  }

  function servicesScreen() {
    var list = [
      ['AZ World cars', '2,1 km', 'Náměstí svobody, 12, Praha 3, 134 00<br>Mo – Fri: 09:00 – 18:00', [['Cost estimate', '21 000 CZK'], ['Finished in', '2-3 weeks']]],
      ['Louwman s.r.o.', '2,3 km', 'Dlouhá 76, Praha 10. 10100<br>Mo – Sun: 08:00 – 17:00', [['Cost estimate', '26 000 CZK'], ['Finished in', '~ 1 week'], ['Extras', 'Replacement vehicle']]]
    ];
    return {
      bar: { title: 'Book a service', back: true },
      html: '<p class="intro rec">Recommended:</p><div class="stack">' + list.map(function (s, i) {
        return '<div class="tile svt"><div class="sh"><b>' + s[0] + '</b><span>' + s[1] + '</span></div><p class="sa">' + s[2] + '</p>' +
          '<div class="sub">' + s[3].map(function (r) { return '<div class="sr"><span class="sl">' + r[0] + '</span><span class="sv">' + r[1] + '</span></div>'; }).join('') + '</div>' +
          '<a class="btn on bk" href="#consent" data-i="' + i + '">Book</a></div>';
      }).join('') + '</div><button class="more" id="more">Show more</button>',
      init: function (root) {
        root.querySelectorAll('a.bk').forEach(function (el) {
          el.addEventListener('click', function () { state.service = list[+el.dataset.i][0]; save(); });
        });
        root.querySelector('#more').addEventListener('click', function () { toast('No more services in this prototype'); });
      }
    };
  }

  function consentScreen() {
    return {
      bar: { title: 'Book a service', back: true }, next: 'summary', cta: 'Send booking request', gated: true,
      html: '<div id="cw"><button class="opt" role="checkbox" aria-checked="false">' + I.empty +
        '<div class="txt"><b>Agree to share my accident details</b><span>I agree with sharing details of my accident with the vehicle service, including photos, description, vehicle type and insurance details.</span></div></button></div>',
      onNext: function (root, btn) {
        root.querySelector('#cw').innerHTML = '<div class="center"><p>Your booking request has been sent' + (state.service ? ' to ' + esc(state.service) : '') + '. The service will contact you shortly.</p></div>';
        btn.textContent = 'Back to report'; btn.onclick = function () { location.hash = 'summary'; };
        btn.classList.add('on'); btn.disabled = false; state.consent = false; save();
        root.querySelector('.content').classList.add('fill');
      },
      init: function (root, btn) {
        var box = root.querySelector('[role=checkbox]'), on = !!state.consent;
        function paint() {
          box.setAttribute('aria-checked', on); box.classList.toggle('checked', on);
          box.querySelector('.ico').outerHTML = on ? I.check : I.empty;
          btn.classList.toggle('on', on); btn.disabled = !on;
        }
        box.addEventListener('click', function () { on = !on; state.consent = on; save(); paint(); });
        paint();
      }
    };
  }

  /* ---------- Routes: order = wizard flow. figma = node id of the design ---------- */
  /* ---------- Voice chat (alternative to #details + #photos; outside the main flow) ---------- */
  I.mic = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2.5" width="6" height="12" rx="3"/><path d="M5 11.5a7 7 0 0014 0M12 18.5v3"/></svg>';
  I.stop = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2.5"/></svg>';
  I.send = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5.5 11.5L12 5l6.5 6.5"/></svg>';
  I.spk = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L13 19V5L7.5 9.5z"/><path d="M16.5 9a4 4 0 010 6M19 6.5a7.5 7.5 0 010 11"/></svg>';
  I.spkoff = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L13 19V5L7.5 9.5z"/><path d="M17 9.5l5 5M22 9.5l-5 5"/></svg>';

  function voiceScreen() {
    return {
      bar: { title: 'Voice assistant', back: false }, fill: true,
      html:
        '<div class="vc" id="vc">' +
          '<div class="vc-hero" id="hero"><div class="vc-orb">' + I.mic + '</div>' +
            '<h2>Tell us what happened</h2>' +
            '<p>I will ask a few short questions about the accident and your vehicle damage. Answer by voice – or type if you prefer.</p></div>' +
          '<div class="vc-log" id="log" aria-live="polite"></div>' +
        '</div>',
      init: function (root) {
        var tok = token, alive = true;
        var hero = root.querySelector('#hero'), log = root.querySelector('#log');
        var d = state.details || (state.details = { text: '', vehicles: '1', damage: DEFAULT_DAMAGE, witnesses: [] });
        var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        var synth = window.speechSynthesis, soundOn = true, micOK = false, rec = null, listening = false, speaking = false;
        var expecting = null;      // current step waiting for an answer
        var busy = false;
        var ctrls = document.createElement('div'); ctrls.className = 'controls vc-ctrls';
        root.appendChild(ctrls);

        var prev = cleanup;
        cleanup = function () { alive = false; try { if (rec) rec.abort(); } catch (e) {} try { if (synth) synth.cancel(); } catch (e) {} if (prev) prev(); };

        function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
        function down() { app.scrollTop = app.scrollHeight; }
        function add(cls, html) {
          var el = document.createElement('div'); el.className = 'bub ' + cls; el.innerHTML = html; log.appendChild(el); down(); return el;
        }
        function speak(text) {
          if (!soundOn || !synth || !window.SpeechSynthesisUtterance) return Promise.resolve();
          return new Promise(function (res) {
            try {
              synth.cancel();
              var u = new SpeechSynthesisUtterance(text.replace(/<[^>]+>/g, '')); u.lang = 'en-US'; u.rate = 1.02;
              var done = false, fin = function () { if (done) return; done = true; speaking = false; res(); };
              u.onend = fin; u.onerror = fin; speaking = true; synth.speak(u);
              setTimeout(fin, Math.min(15000, 1500 + text.length * 70));
            } catch (e) { res(); }
          });
        }
        /* assistant says something: typing dots, then the bubble, then (optionally) speech */
        function say(text, extraHtml) {
          if (!alive) return Promise.resolve();
          var dots = add('bot typing', '<i></i><i></i><i></i>');
          return sleep(600 + Math.min(900, text.length * 8)).then(function () {
            if (!alive) return;
            dots.remove();
            add('bot', esc(text) + (extraHtml || ''));
            return speak(text);
          });
        }
        function userSays(text) { add('me', esc(text)); }

        /* ----- controls ----- */
        function micState() {
          var mic = ctrls.querySelector('.vc-mic'); if (!mic) return;
          mic.classList.toggle('on', listening); mic.innerHTML = listening ? I.stop : (ctrls.querySelector('input').value.trim() ? I.send : I.mic);
          mic.setAttribute('aria-label', listening ? 'Stop listening' : 'Speak');
          ctrls.querySelector('.vc-live').hidden = !listening;
        }
        function chips(list) {
          var c = ctrls.querySelector('.vc-chips'); c.innerHTML = ''; c.hidden = !list || !list.length;
          (list || []).forEach(function (t) {
            var b = document.createElement('button'); b.type = 'button'; b.textContent = t;
            b.addEventListener('click', function () { answer(t); }); c.appendChild(b);
          });
          c.scrollLeft = 0;
        }
        function drawChat() {
          ctrls.innerHTML =
            '<div class="vc-chips" hidden></div>' +
            '<div class="vc-live" hidden><span class="wave"><i></i><i></i><i></i><i></i><i></i></span><span class="lt" id="lt">Listening…</span></div>' +
            '<div class="vc-row"><button class="vc-snd" type="button" aria-label="Toggle voice replies">' + (soundOn ? I.spk : I.spkoff) + '</button>' +
            '<input class="vc-in" type="text" placeholder="Type your answer…" aria-label="Type your answer" autocomplete="off">' +
            '<button class="vc-mic" type="button" aria-label="Speak">' + I.mic + '</button></div>';
          var inp = ctrls.querySelector('input'), mic = ctrls.querySelector('.vc-mic');
          inp.addEventListener('input', micState);
          inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); submitTyped(); } });
          ctrls.querySelector('.vc-snd').addEventListener('click', function () {
            soundOn = !soundOn; if (!soundOn && synth) try { synth.cancel(); } catch (e) {}
            this.innerHTML = soundOn ? I.spk : I.spkoff;
          });
          mic.addEventListener('click', function () {
            if (listening) { try { rec.stop(); } catch (e) {} return; }
            if (inp.value.trim()) { submitTyped(); return; }
            listen();
          });
        }
        function submitTyped() {
          var inp = ctrls.querySelector('input'), v = inp.value.trim(); if (!v) return; inp.value = ''; micState(); answer(v);
        }

        /* ----- speech recognition ----- */
        function listen() {
          if (busy) return;
          if (!SR) { toast('Voice input is not supported in this browser – please type'); ctrls.querySelector('input').focus(); return; }
          try { if (synth) synth.cancel(); } catch (e) {}
          var finalText = '', got = false;
          try {
            rec = new SR(); rec.lang = 'en-US'; rec.interimResults = true; rec.continuous = false;
            rec.onstart = function () { listening = true; micState(); ctrls.querySelector('#lt').textContent = 'Listening…'; };
            rec.onresult = function (e) {
              var t = ''; for (var i = 0; i < e.results.length; i++) t += e.results[i][0].transcript;
              finalText = t; got = true; micOK = true;
              ctrls.querySelector('#lt').textContent = t || 'Listening…';
            };
            rec.onerror = function (e) {
              if (e.error === 'not-allowed' || e.error === 'service-not-allowed' || e.error === 'audio-capture' || e.error === 'network') {
                micOK = false; toast('Microphone not available – please type your answer');
                var i = ctrls.querySelector('input'); if (i) i.focus();
              }
            };
            rec.onend = function () {
              listening = false; if (!alive) return; micState();
              if (finalText.trim()) answer(finalText.trim());
            };
            rec.start();
          } catch (e) { listening = false; micState(); toast('Voice input is not available – please type'); }
        }

        /* ----- answer parsing ----- */
        var NUM = { one: 1, a: 1, single: 1, two: 2, couple: 2, three: 3, four: 4, five: 5, six: 6, seven: 7 };
        function parseVehicles(t) {
          var m = t.match(/\d+/), n = m ? +m[0] : 0;
          if (!n) { t.toLowerCase().split(/\W+/).some(function (w) { if (NUM[w]) { n = NUM[w]; return true; } }); }
          if (!n) return null; return n >= 5 ? '5 or more' : String(n);
        }
        function parseDamage(t) {
          t = t.toLowerCase();
          var exact = Object.keys(DAMAGE_ANGLES).filter(function (k) { return k.toLowerCase() === t; })[0]; if (exact) return exact;
          var f = /front|bonnet|hood/.test(t), r = /rear|back|boot|trunk/.test(t), l = /\bleft\b/.test(t), rt = /\bright\b/.test(t), s = /side|door/.test(t);
          if (r && s && !/corner/.test(t)) return 'Rear and side damage'; if (f && s && !/corner/.test(t)) return 'Front and side damage';
          if (f && l) return 'Front left damage'; if (f && rt) return 'Front right damage';
          if (r && l) return 'Rear left damage'; if (r && rt) return 'Rear right damage';
          if (f && s) return 'Front and side damage'; if (r && s) return 'Rear and side damage';
          if (f) return 'Front damage'; if (r) return 'Rear damage';
          if (l) return 'Left side damage'; if (rt) return 'Right side damage'; if (s) return 'Right side damage';
          if (/other|everywhere|all over|several|multiple/.test(t)) return 'Other damage';
          return null;
        }
        function yesNo(t) {
          t = t.toLowerCase();
          if (/\b(no|nope|nobody|none|nothing|negative|nah)\b/.test(t)) return 'no';
          if (/\b(yes|yeah|yep|yup|sure|there (was|were)|one|two|some|ok|okay|correct)\b/.test(t)) return 'yes';
          return null;
        }

        /* ----- the conversation ----- */
        var witness = null;
        var photoQueue = [], photoN = 0, photosTaken = 0;
        var S = {
          intro: { q: 'Let’s start. Please describe what happened in your own words.', hint: null,
            handle: function (t) { d.text = t; save(); return say('Thank you, I’ve noted that down.').then(function () { return go('vehicles'); }); } },
          vehicles: { q: 'How many other vehicles were involved?', chips: ['1', '2', '3', '4', '5 or more'],
            handle: function (t) {
              var v = parseVehicles(t);
              if (!v) return say('Sorry, I didn’t catch the number. How many other vehicles were involved?').then(function () { return go('vehicles', true); });
              d.vehicles = v; save(); return say(v === '1' ? 'One other vehicle – got it.' : v + ' other vehicles – got it.').then(function () { return go('damage'); });
            } },
          damage: { q: 'Where is your own vehicle damaged?', chips: Object.keys(DAMAGE_ANGLES),
            handle: function (t) {
              var v = parseDamage(t);
              if (!v) return say('Sorry, I’m not sure which part that is. You can say for example “rear left” or choose from the options.').then(function () { return go('damage', true); });
              d.damage = v; save(); return say(v + ' – noted.').then(function () { return go('witnesses'); });
            } },
          witnesses: { q: 'Were there any witnesses?', chips: ['Yes', 'No'],
            handle: function (t) {
              var yn = yesNo(t);
              if (!yn) return say('Sorry, was there any witness – yes or no?').then(function () { return go('witnesses', true); });
              if (yn === 'no') return say('No problem.').then(function () { return startPhotos(); });
              witness = { name: '', contact: '' }; return go('wname');
            } },
          wname: { q: 'What is the witness’s name?',
            handle: function (t) { witness.name = t.replace(/^(it'?s|his name is|her name is|name is|they are|that'?s)\s+/i, ''); return go('wcontact'); } },
          wcontact: { q: 'And a phone number or email to reach them?',
            handle: function (t) {
              witness.contact = t; d.witnesses.push(witness); save();
              return say('Saved ' + witness.name + ' as a witness.').then(function () { return go('wmore'); });
            } },
          wmore: { q: 'Was there another witness?', chips: ['Yes', 'No'],
            handle: function (t) {
              var yn = yesNo(t);
              if (!yn) return say('Sorry, is there another witness – yes or no?').then(function () { return go('wmore', true); });
              if (yn === 'no') return startPhotos();
              witness = { name: '', contact: '' }; return go('wname');
            } },
          photo: { chips: ['Take photo', 'Skip'],
            handle: function (t) {
              if (/skip|later|no photo|can'?t|cannot/i.test(t)) { userSays('Skip'); return nextPhoto(); }
              return takePhoto();
            } }
        };

        function go(key, retry) {
          expecting = S[key]; expecting.key = key; busy = false;
          chips(expecting.chips);
          if (retry) return Promise.resolve();
          if (!expecting.q) return Promise.resolve();
          return say(expecting.q).then(function () { if (alive && micOK && expecting && expecting.key === key && !listening) listen(); });
        }
        function answer(t) {
          if (!expecting || busy || !alive) return;
          var st = expecting; busy = true; chips(null); expecting = null;
          if (st.key !== 'photo' || !/^(take photo)$/i.test(t)) { if (st.key !== 'photo' || !/skip/i.test(t)) userSays(t); }
          else userSays('Take photo');
          st.handle(t);
        }

        /* photos: one request per angle that belongs to the chosen damage type */
        function startPhotos() {
          photoQueue = DAMAGE_ANGLES[d.damage].slice(); photoN = 0; photosTaken = 0;
          var list = photoQueue.map(function (a) { return ANGLES[a].replace('Vehicle ', '').replace(/ side$/, ' side'); }).join(', ');
          return say('Thanks. Now I need ' + (photoQueue.length === 1 ? 'one photo' : photoQueue.length + ' photos') + ' of the damage – ' + list + '.').then(nextPhoto);
        }
        function nextPhoto() {
          if (photoN >= photoQueue.length) return finish();
          var a = photoQueue[photoN];
          var card = '<div class="vc-ph"><img src="assets/illustrations/' + a + '.svg" alt=""><span>' + ANGLES[a] + '</span></div>';
          return say('Please take a photo of the ' + ANGLES[a].toLowerCase().replace('vehicle ', '') + ' of your vehicle.', card).then(function () { return go('photo', true); });
        }
        function takePhoto() {
          var a = photoQueue[photoN]; busy = true;
          openCamera({ title: ANGLES[a], hint: 'Take a photo of the damage', shape: 'vehicle', label: ANGLES[a],
            src: DEMO_PHOTOS[photoN % DEMO_PHOTOS.length],
            onDone: function (url) {
              if (!alive) return;
              photoUrls[a] = url; photosTaken++;
              add('me img', '<img alt="" src="' + url + '">');
              photoN++; setTimeout(function () { if (alive) say(photoN < photoQueue.length ? 'Got it, thank you.' : 'Perfect, thank you.').then(nextPhoto); }, 300);
            } });
          // if the camera is closed without a picture, ask again
          var chk = setInterval(function () {
            if (!alive) { clearInterval(chk); return; }
            if (!app.querySelector('.cam')) { clearInterval(chk); if (busy && !expecting && photoQueue[photoN] === a && !photoUrls[a]) { busy = false; expecting = S.photo; expecting.key = 'photo'; chips(S.photo.chips); } }
          }, 400);
        }

        function finish() {
          chips(null); expecting = null;
          var est = photosTaken ? 'Based on your photos, we estimate the damage at 160 000 – 190 000 CZK. If there are additional damages, the total may exceed the legal threshold – in that case, you will be required to call the police.' : '';
          var p = Promise.resolve();
          if (est) p = say(est);
          return p.then(function () {
            var w = d.witnesses.length ? d.witnesses.map(function (x) { return esc(x.name) + ' (' + esc(x.contact) + ')'; }).join(', ') : 'None';
            var sum = '<div class="vc-sum"><div><small>Description</small><span>' + esc(d.text) + '</span></div>' +
              '<div><small>Other vehicles</small><span>' + esc(d.vehicles) + '</span></div>' +
              '<div><small>Type of damage</small><span>' + esc(d.damage) + '</span></div>' +
              '<div><small>Witnesses</small><span>' + w + '</span></div>' +
              '<div><small>Photos</small><span>' + photosTaken + ' of ' + photoQueue.length + '</span></div></div>';
            return say('That’s everything I need for this part. Here is a summary:', sum);
          }).then(function () {
            return say('You can now continue with the accident sketch.');
          }).then(function () {
            if (!alive) return;
            ctrls.innerHTML = '<div class="vc-end"><button class="btn2" id="rs">Restart chat</button><a class="btn on" href="#sketch">Continue</a></div>';
            ctrls.querySelector('#rs').addEventListener('click', function () { render(); });
            down();
          });
        }

        /* start: the first tap is also the user gesture that allows voice replies and the microphone */
        ctrls.innerHTML = '<button class="btn on" id="start">Start voice chat</button>';
        ctrls.querySelector('#start').addEventListener('click', function () {
          hero.hidden = true; d.witnesses = []; d.text = ''; save(); drawChat();
          try { if (synth) { synth.cancel(); var u = new SpeechSynthesisUtterance(' '); u.volume = 0; synth.speak(u); } } catch (e) {}
          say('Hi, I’m your accident assistant. I’ll ask a few quick questions.').then(function () { return go('intro'); });
        });
      }
    };
  }

  var ROUTES = [
    { id: 'start', label: 'Is everyone all right?', figma: '43:7044', build: startScreen, noBack: true },
    { id: 'safety', label: 'Roadside safety', figma: '43:6880', build: function () {
      return checklist('safety', 'Roadside safety', 'Make sure you follow the safety suggestions:', [
        ['Hazard lights active', 'Turn on your hazard lights to warn approaching drivers that your vehicle has stopped.'],
        ['High-visibility vest worn', 'Put on your vest before leaving the car so other drivers can see you clearly.'],
        ['Warning triangle placed', 'Place the triangle well behind your vehicle, about 50 meters on regular roads and 100 meters on highways, to give traffic time to slow down.']
      ], 'police-check'); } },
    { id: 'police-check', label: 'Police involvement', figma: '79:3219', build: function () {
      return checklist('police', 'Police involvement', 'Check that the accident meets the criteria for not involving the police:', [
        ['Damage on neither vehicle is above 200 000 CZK', 'Each of the affected vehicles is only lightly damaged, with damage cost estimate below 200 000 CZK'],
        ['No damage to a 3rd party', 'There is no damage to a third party property - like damaged fence, parked cars or a building.']
      ], 'location'); } },
    { id: 'location', label: 'Accident location', figma: '43:6689', build: locationScreen },
    { id: 'details', label: 'Accident details (form)', figma: '13:479', build: detailsScreen },
    { id: 'photos', label: 'Photos of damage', figma: '79:3450', build: photosScreen },
    { id: 'sketch', label: 'Accident sketch', figma: '41:5437', build: sketchScreen },
    { id: 'documents', label: 'Driver information', figma: '31:4013', build: function () { return documentsScreen(false); } },
    { id: 'documents-filled', label: 'Driver information (prefilled variant)', figma: '81:3924', variant: true, canon: 'documents', build: function () { return documentsScreen(true); } },
    { id: 'second-party', label: 'Share form', figma: '42:5595', build: shareScreen },
    { id: 'waiting', label: 'Waiting for the other driver', figma: '81:4621', variant: true, canon: 'second-party', backTo: 'second-party', build: waitingScreen },
    { id: 'sign', label: 'Sign', figma: '43:6514', build: signScreen },
    { id: 'summary', label: 'Report ready', figma: '43:7246', build: summaryScreen },
    { id: 'services', label: 'Book a service', figma: '81:4794', build: servicesScreen },
    { id: 'consent', label: 'Consent to share with service', figma: '81:5061', build: consentScreen },
    { id: 'voicechat', label: 'Voice chat (alternative to details + photos)', figma: '', outside: true, build: voiceScreen }
  ];

  function indexOfRoute(id) { return ROUTES.findIndex(function (r) { return r.id === id; }); }

  function indexScreen() {
    return {
      bar: { title: 'Prototype index' },
      html: '<p class="intro">Direct links to every step. Copy a link into your test task.</p><nav class="index">' +
        ROUTES.map(function (r, i) {
          var tag = r.outside ? '<small class="out">outside flow</small>' : '<small>' + (i + 1) + (r.build ? '' : ' · placeholder') + '</small>';
          return '<a href="#' + r.id + '"><span>' + r.label + '</span>' + tag + '</a>';
        }).join('') + '</nav>'
    };
  }

  function placeholder(r) {
    return {
      bar: { title: r.label, back: !r.outside, step: r.step },
      html: '<div class="todo">This screen is not built yet.' + (r.figma ? '<br>Figma node ' + r.figma : '') + '</div>',
      next: nextId(r)
    };
  }

  function flowList() { return ROUTES.filter(function (r) { return !r.outside && !r.variant; }); }
  function flowAt(r, d) {
    if (r.outside) return null;
    var f = flowList(), c = r.canon ? ROUTES[indexOfRoute(r.canon)] : r, n = f[f.indexOf(c) + d];
    return n ? n.id : null;
  }
  function nextId(r) { return flowAt(r, 1); }

  /* ---------- Rendering ---------- */
  function render() {
    token++;
    if (cleanup) { cleanup(); cleanup = null; }
    var id = (location.hash || '#start').slice(1);
    var r = ROUTES[indexOfRoute(id)];
    var s;
    if (id === 'index') s = indexScreen();
    else if (!r) { location.replace('#index'); return; }
    else s = r.build ? r.build() : placeholder(r);

    var backTarget = null;
    if (r && !r.outside && !r.noBack && s.bar.back !== false) {
      backTarget = r.backTo || flowAt(r, -1);
    }
    var step = s.bar.step, segs = '';
    var STEP_ROUTE = ['location', 'details', 'photos', 'sketch', 'documents', 'second-party', 'sign', 'summary'];
    for (var i = 1; i <= TOTAL_STEPS; i++) {
      segs += i < step ? '<a class="on done" href="#' + STEP_ROUTE[i - 1] + '" aria-label="Go to step ' + i + '"></a>'
        : '<i' + (i === step ? ' class="on"' : '') + '></i>';
    }
    app.innerHTML =
      '<header class="bar">' +
        (backTarget ? '<button class="back" aria-label="Back">' + I.left + '</button>' : '<span></span>') +
        '<div class="ttl">' + (step ? '<small>Step ' + step + '/' + TOTAL_STEPS + '</small>' : '') + '<h1>' + s.bar.title + '</h1></div><span></span></header>' +
      (step ? '<nav class="steps" aria-label="Progress">' + segs + '</nav>' : '') +
      '<main class="content' + (s.fill ? ' fill' : '') + '">' + s.html + '</main>' +
      (s.next ? '<div class="controls"><button class="btn">' + (s.cta || 'Proceed') + '</button></div>' : '');

    if (backTarget) app.querySelector('.back').addEventListener('click', function () { location.hash = backTarget; });
    var btn = app.querySelector('.controls .btn');
    if (btn) {
      btn.addEventListener('click', function () { if (btn.disabled) return; if (s.onNext) s.onNext(app, btn); else location.hash = s.next; });
      if (s.gated) btn.disabled = true; else btn.classList.add('on');
    }
    if (s.init) {
      try { s.init(app, btn); }
      catch (err) {
        console.error(err);
        var mp = app.querySelector('.map');
        if (mp) mp.innerHTML = '<p style="padding:16px;color:#c8c8c8;font-size:14px">The map could not be loaded. Make sure the whole folder (including "vendor") is uploaded next to index.html.</p>';
      }
    }
    app.scrollTop = 0;
    document.title = s.bar.title + ' – prototype';
  }

  window.addEventListener('hashchange', render);
  initGeolocation();
  render();
})();
