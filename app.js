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

  /* ---------- Language: all texts live in lang/<code>.json; ?lang=de|en|it|cz picks one ---------- */
  var LANGS = [['en', 'EN', 'English'], ['de', 'DE', 'Deutsch'], ['it', 'IT', 'Italiano'], ['cz', 'CZ', 'Čeština']];
  var lang = 'en', dict = {}, fallback = {};
  function normLang(c) {
    c = String(c || '').toLowerCase().slice(0, 2); if (c === 'cs') c = 'cz';
    return LANGS.some(function (l) { return l[0] === c; }) ? c : null;
  }
  function pickLang() {
    var q = null; try { q = new URLSearchParams(location.search).get('lang'); } catch (e) {}
    var c = normLang(q);
    if (c) { try { localStorage.setItem('aw-lang', c); } catch (e) {} return c; }
    try { c = normLang(localStorage.getItem('aw-lang')); } catch (e) {}
    if (c) return c;
    var nav = navigator.languages || [navigator.language];
    for (var i = 0; i < nav.length; i++) { c = normLang(nav[i]); if (c) return c; }
    return 'en';
  }
  /* t('key', {name: value}) -> text in the current language (falls back to English, then to the key) */
  function t(key, vars) {
    var v = dict[key]; if (v == null) v = fallback[key]; if (v == null) return key;
    if (typeof v !== 'string' || !vars) return v;
    return v.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
  }
  function loadJSON(code) { return fetch('lang/' + code + '.json').then(function (r) { if (!r.ok) throw new Error(code); return r.json(); }); }
  function loadLang(code) {
    var p = Object.keys(fallback).length ? Promise.resolve() : loadJSON('en').then(function (d) { fallback = d; });
    return p.then(function () { return code === 'en' ? fallback : loadJSON(code).catch(function () { return fallback; }); })
      .then(function (d) { dict = d; lang = code; document.documentElement.lang = code === 'cz' ? 'cs' : code; });
  }
  function setLang(code) {
    if (code === lang) return;
    try { localStorage.setItem('aw-lang', code); } catch (e) {}
    try { var u = new URL(location.href); u.searchParams.set('lang', code); history.replaceState(null, '', u.pathname + u.search + u.hash); } catch (e) {}
    loadLang(code).then(render);
  }
  /* regular expression built from a '|' separated word list in the language file */
  function rx(key, whole) { return new RegExp('(^|[^\\p{L}\\p{N}])(' + t(key) + ')' + (whole ? '(?![\\p{L}\\p{N}])' : ''), 'iu'); }
  function geoLang() { return (t('voice.lang') || 'en').split('-')[0]; }
  function photonLang() { var l = geoLang(); return l === 'de' || l === 'it' ? l : 'en'; }

  function toast(msg) {
    var host = app.querySelector('.controls') || app;
    var old = app.querySelector('.toast'); if (old) old.remove();
    var t = document.createElement('div'); t.className = 'toast' + (host === app ? ' fixed' : ''); t.textContent = msg; host.appendChild(t);
    setTimeout(function () { t.remove(); }, 1800);
  }

  /* ---------- Maps (Leaflet + OpenStreetMap-based tiles; no API key needed) ---------- */
  var SKETCH_ZOOM = 19.5;   // accident sketch map zoom (was 19)
  function makeMap(el, kind, lat, lng, zoom) {
    var m = L.map(el, { zoomControl: false, dragging: false, touchZoom: false, doubleClickZoom: false,
      scrollWheelZoom: false, boxZoom: false, keyboard: false, zoomSnap: 0.5, maxZoom: 21 }).setView([lat, lng], zoom);
    m.attributionControl.setPrefix(false);
    if (kind === 'dark') {
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 19, className: 'dark-tiles', attribution: 'Tiles © Esri' }).addTo(m);
    } else {
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 21, maxNativeZoom: 19, attribution: 'Tiles © Esri' }).addTo(m);
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 21, maxNativeZoom: 19 }).addTo(m);
    }
    cleanup = function () { m.remove(); };
    setTimeout(function () { m.invalidateSize(); }, 0);
    return m;
  }

  function jget(url) { return fetch(url).then(function (r) { return r.json(); }); }

  function geocode(q) {
    return jget('https://nominatim.openstreetmap.org/search?format=json&limit=1&accept-language=' + geoLang() + '&q=' + encodeURIComponent(q))
      .then(function (a) { return a && a[0] ? { lat: +a[0].lat, lng: +a[0].lon } : null; })
      .catch(function () { return null; })
      .then(function (r) {
        if (r) return r;
        return jget('https://photon.komoot.io/api/?limit=1&lang=' + photonLang() + '&q=' + encodeURIComponent(q))
          .then(function (j) { var f = j && j.features && j.features[0]; return f ? { lat: f.geometry.coordinates[1], lng: f.geometry.coordinates[0] } : null; })
          .catch(function () { return null; });
      });
  }

  function reverse(lat, lng) {
    return jget('https://nominatim.openstreetmap.org/reverse?format=jsonv2&accept-language=' + geoLang() + '&lat=' + lat + '&lon=' + lng)
      .then(function (j) {
        var a = j && j.address; if (!a) return null;
        var street = [a.road, a.house_number].filter(Boolean).join(' ');
        var tail = [a.postcode, a.city || a.town || a.village || a.suburb].filter(Boolean).join(' ');
        return [street, tail].filter(Boolean).join(', ') || null;
      })
      .catch(function () { return null; })
      .then(function (r) {
        if (r) return r;
        return jget('https://photon.komoot.io/reverse?lang=' + photonLang() + '&lat=' + lat + '&lon=' + lng)
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
  function addrText(loc) { return (loc.address === '@current' || loc.address === 'Your current location') ? t('location.current') : loc.address; }
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
        loc.address = '@current'; save();
        reverse(loc.lat, loc.lng).then(function (addr) { if (addr && loc.source === 'gps') { loc.address = addr; save(); } geoSettled(); });
      } else geoSettled();
    }, function () { geoSettled(); }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 });
  }

  /* ---------- Screens ---------- */
  function startScreen() {
    return {
      bar: { title: t('app.title') },
      html:
        '<h2>' + t('start.title') + '</h2>' +
        '<p class="intro">' + t('start.intro') + '</p>' +
        '<div class="stack">' +
        '<div class="opt start"><div class="txt"><b>' + t('start.yes.title') + '</b><span>' + t('start.yes.text') + '</span></div>' +
        '<a class="btn on" href="#safety">' + t('start.yes.cta') + '</a></div>' +
        '<div class="opt start"><div class="txt"><b>' + t('start.emergency.title') + '</b><span>' + t('start.emergency.text') + '</span></div>' +
        '<a class="btn call" href="tel:112">' + t('start.emergency.cta') + '</a></div>' +
        '</div>'
    };
  }

  function checklist(key, title, intro, items, next, warn, info) {
    return {
      bar: { title: title, back: true }, next: next, gated: !info, inline: true,
      html:
        '<p class="intro">' + intro + '</p><div class="stack">' +
        items.map(function (it, i) {
          var inner = '<div class="txt">' + (it[2] ? '<img class="ci" alt="" src="assets/icons/' + it[2] + '.svg">' : '') + '<b>' + it[0] + '</b><span>' + it[1] + '</span></div>';
          return info ? '<div class="opt chk info">' + inner + '</div>'
            : '<button class="opt chk" role="checkbox" aria-checked="false">' + I.empty + inner + '</button>';
        }).join('') + '</div>',
      init: function (root, btn) {
        if (info) return;
        var boxes = root.querySelectorAll('[role=checkbox]');
        var saved = state[key] || [];
        var note = null;
        if (warn) {
          note = document.createElement('div'); note.className = 'note'; note.setAttribute('role', 'status');
          note.innerHTML = I.info + '<div><p>' + warn + '</p><div class="nact"><a class="tlink" href="tel:112">' + t('police.call') + '</a>' +
            '<button class="tlink" type="button">' + t('police.proceed') + '</button></div></div>';
          note.querySelector('button.tlink').addEventListener('click', function () { location.hash = next; });
          btn.parentNode.insertBefore(note, btn);
        }
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
          if (note) { note.hidden = all; btn.hidden = !all; }
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
      bar: { title: t('location.title'), back: true, step: 1 }, next: 'details', cta: t('location.cta'), fill: true,
      html:
        '<p class="intro">' + t('location.intro') + '</p>' +
        '<div class="card grow">' +
          '<div id="v-confirm"><h3>' + t('location.confirm') + '</h3><div class="map loc" id="locmap"></div>' +
            '<p class="addr" id="locaddr"></p><button class="btn2" id="manual">' + t('location.manual') + '</button></div>' +
          '<div id="v-manual" hidden><h3>' + t('location.enter') + '</h3>' +
            '<input class="field" id="q" type="text" placeholder="' + t('location.placeholder') + '" autocomplete="street-address">' +
            '<p class="err" id="err"></p><button class="btn2" id="find">' + t('location.find') + '</button>' +
            '<button class="btn2 ghost" id="cancel">' + t('common.cancel') + '</button></div>' +
        '</div>',
      init: function (root) {
        var loc = getLoc(), mapEl = root.querySelector('#locmap');
        var m = makeMap(mapEl, 'dark', loc.lat, loc.lng, 17);
        var mk = L.marker([loc.lat, loc.lng], { icon: L.divIcon({ className: 'pin', html: I.pin, iconSize: [36, 46], iconAnchor: [18, 46] }) }).addTo(m);
        var addr = root.querySelector('#locaddr'), vc = root.querySelector('#v-confirm'), vm = root.querySelector('#v-manual'),
            q = root.querySelector('#q'), err = root.querySelector('#err');
        function show() {
          addr.textContent = geo.done ? addrText(loc) : t('location.finding');
          m.setView([loc.lat, loc.lng], 17, { animate: false }); mk.setLatLng([loc.lat, loc.lng]);
        }
        show(); onGeo(show);
        root.querySelector('#manual').addEventListener('click', function () { vc.hidden = true; vm.hidden = false; q.value = ''; q.focus(); });
        function find() {
          var v = q.value.trim(); if (!v) return; err.textContent = t('location.searching');
          geocode(v).then(function (r) {
            if (!r) { err.textContent = t('location.notfound'); return; }
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
      bar: { title: t('sketch.title'), back: true, step: 4 }, next: 'documents', cta: t('common.next'), fill: true,
      html:
        '<div class="seg" role="tablist"><button data-k="A" class="on">' + t('sketch.vehicleA') + '</button><button data-k="B">' + t('sketch.vehicleB') + '</button></div>' +
        '<div class="card flush grow"><div class="sketch" id="sk"><div class="map" id="skmap"></div></div></div>' +
        '<div class="row"><button id="add">' + I.plus + ' ' + t('sketch.add') + '</button><button id="edit">' + I.pencil + ' ' + t('common.edit') + '</button></div>',
      init: function (root) {
        var loc = getLoc();
        var box = root.querySelector('#sk');
        var sm = makeMap(root.querySelector('#skmap'), 'sat', loc.lat, loc.lng, SKETCH_ZOOM);
        onGeo(function () { sm.setView([loc.lat, loc.lng], SKETCH_ZOOM, { animate: false }); });
        var sk = state.sketch || {
          sel: 'A',
          A: { x: 0.66, y: 0.76, a: 35, van: 0, spd: 1 },
          B: { x: 0.30, y: 0.38, a: 150, van: 0, spd: 1 }
        };
        state.sketch = sk;
        var els = {}, ctrls = document.createElement('div');
        ctrls.className = 'ctrls';
        ctrls.innerHTML =
          '<button data-act="move" style="left:0;top:-60px" aria-label="' + t('sketch.move') + '">' + I.move + '</button>' +
          '<button data-act="car" style="left:-60px;top:0" aria-label="' + t('sketch.type') + '">' + I.car + '</button>' +
          '<button data-act="speed" style="left:60px;top:0" aria-label="' + t('sketch.speed') + '">' + I.speed + '</button>' +
          '<button data-act="rotate" style="left:0;top:60px" aria-label="' + t('sketch.rotate') + '">' + I.rotate + '</button>';

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
        (function () {
          var addBtn = root.querySelector('#add'), row = addBtn.parentNode, menu = null;
          var ic = function (p) { return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>'; };
          var items = [
            [t('sketch.menu.line'), ic('<path d="M4 19L19 4"/><circle cx="4" cy="19" r="1.6"/><circle cx="19" cy="4" r="1.6"/>')],
            [t('sketch.menu.shape'), ic('<rect x="3.5" y="3.5" width="9" height="9" rx="1.5"/><circle cx="16" cy="16" r="5"/>')],
            [t('sketch.menu.icon'), ic('<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.100L12 17l-5.400 2.900 1-6.100L3.200 9.500l6.100-.9z"/>')],
            [t('sketch.menu.free'), ic('<path d="M3 17c3-8 5-9 6-6s2 5 4 2 3-8 8-5"/>')]
          ];
          function close() { if (menu) { menu.remove(); menu = null; addBtn.setAttribute('aria-expanded', 'false'); document.removeEventListener('click', outside, true); } }
          function outside(e) { if (menu && !menu.contains(e.target) && !addBtn.contains(e.target)) close(); }
          addBtn.setAttribute('aria-haspopup', 'menu'); addBtn.setAttribute('aria-expanded', 'false');
          addBtn.addEventListener('click', function () {
            if (menu) { close(); return; }
            menu = document.createElement('div'); menu.className = 'menu'; menu.setAttribute('role', 'menu');
            menu.innerHTML = items.map(function (it) { return '<button role="menuitem" type="button">' + it[1] + '<span>' + it[0] + '</span></button>'; }).join('');
            menu.addEventListener('click', function (e) { if (e.target.closest('button')) close(); });
            row.appendChild(menu); addBtn.setAttribute('aria-expanded', 'true');
            document.addEventListener('click', outside, true);
          });
          var pc = cleanup; cleanup = function () { document.removeEventListener('click', outside, true); if (pc) pc(); };
        })();
        root.querySelector('#edit').addEventListener('click', function () { toast(t('common.notAvailable')); });

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

  var MAX_WITNESSES = 1;   // only one witness for now (raise to allow more)
  var MOCK_WITNESS = { name: 'Petra Svobodová', contact: '+420 777 456 321' };   // pre-filled when "Add a witness" is pressed

  function detailsScreen() {
    var d = state.details || (state.details = { text: '', vehicles: '1', damage: '', witnesses: [] });
    var vehicles = ['0', '1', '2', '3', '4', '5 or more'];
    function opts(list, cur) { return list.map(function (o) { return '<option value="' + o + '"' + (o === cur ? ' selected' : '') + '>' + vehLabel(o) + '</option>'; }).join(''); }
    return {
      bar: { title: t('details.title'), back: true, step: 2 }, next: 'photos', cta: t('common.next'),
      html:
        '<p class="intro">' + t('details.intro') + '</p>' +
        '<div class="card form">' +
          '<textarea class="ta" id="txt" placeholder="' + t('details.describe') + '"></textarea>' +
        '</div>' +
        '<div class="card form vehq">' +
          '<label class="sel"><span>' + t('details.vehicles') + '</span><select id="veh">' + opts(vehicles, d.vehicles) + '</select></label>' +
        '</div>' +
        '<div class="card dmgmap"><p>' + t('details.map.prompt') + '</p>' +
          '<svg id="car" viewBox="0 0 220 123" fill="none" role="group" aria-label="' + t('details.map.aria') + '">' +
            '<defs><clipPath id="carclip"><path d="M215.887 61.9813C215.887 61.9813 216.287 72.6483 213.491 84.3084C210.698 95.9684 198.271 97.8231 191.626 99.1523C184.98 100.485 177.851 101.053 168.611 101.328C159.374 101.603 147.586 101.199 142.513 101.224C137.441 101.248 131.611 101.514 114.384 101.74C97.1537 101.966 63.7472 102.015 63.7472 102.015C63.7472 102.015 60.3372 102.504 57.8317 102.63C55.3292 102.755 30.5883 102.568 28.3241 102.379C26.063 102.186 22.4086 101.102 18.583 99.4854C14.7605 97.872 7.42105 87.4922 5.94827 85.3839C4.47549 83.2756 3.62604 80.22 3.00882 76.1255C2.39159 72.0311 2.39159 51.238 3.00882 47.1435C3.62604 43.0491 4.47549 39.9935 5.94827 37.8852C7.42105 35.7768 14.7605 25.4002 18.583 23.7838C22.4086 22.1705 26.063 21.0827 28.3241 20.8932C30.5883 20.7007 55.3292 20.5143 57.8317 20.6396C60.3372 20.7649 63.7472 21.2538 63.7472 21.2538C63.7472 21.2538 97.1537 21.3057 114.384 21.5318C131.611 21.7579 137.441 22.0207 142.513 22.0452C147.586 22.0727 159.374 21.6693 168.611 21.9443C177.851 22.2163 184.98 22.7876 191.626 24.1168C198.271 25.446 210.698 27.3038 213.491 38.9607C216.287 50.6208 215.887 61.2878 215.887 61.2878"/></clipPath></defs>' +
            '<path d="M72.2267 21.2748C71.8478 21.0181 71.5116 20.4803 71.4566 19.8142C71.3741 18.8364 71.6949 18.2406 72.3641 16.8167C73.0333 15.3897 75.7955 12.7681 77.3691 12.2426C78.9397 11.7139 80.3329 11.888 80.3085 12.5633C80.2841 13.2386 80.3452 14.5128 79.6791 16.3033C79.0099 18.0939 78.0047 20.8898 76.8497 21.0426C76.2539 21.122 75.3311 21.2076 74.503 21.2809C85.7872 21.3145 103.384 21.3879 114.384 21.5315C131.611 21.7576 137.441 22.0203 142.517 22.0478C147.589 22.0722 159.374 21.6689 168.614 21.9439C177.851 22.2189 184.983 22.7873 191.629 24.1164C198.275 25.4486 210.702 27.3034 213.494 38.9634C216.287 50.6235 215.89 61.2874 215.89 61.2874L215.89 61.984C215.89 61.984 216.287 72.6479 213.494 84.308C210.702 95.968 198.275 97.8258 191.629 99.155C184.983 100.484 177.851 101.056 168.614 101.327C159.374 101.602 147.589 101.199 142.517 101.224C137.441 101.251 131.611 101.514 114.384 101.74C103.213 101.887 85.2341 101.96 73.9743 101.994C74.9002 102.073 76.0858 102.177 76.7977 102.272C77.9405 102.424 78.9366 105.193 79.5966 106.965C80.2597 108.74 80.1955 109.999 80.2199 110.668C80.2474 111.338 78.8695 111.509 77.3111 110.986C75.7528 110.464 73.018 107.869 72.355 106.458C71.6919 105.046 71.3772 104.456 71.4566 103.488C71.5147 102.785 71.8875 102.229 72.2908 101.997C67.1269 102.012 63.7474 102.018 63.7474 102.018C63.7474 102.018 60.3374 102.507 57.8349 102.632C55.3293 102.757 30.5885 102.571 28.3274 102.379C26.0663 102.186 22.4088 101.101 18.5863 99.488C14.7638 97.8716 7.42433 87.4949 5.95155 85.3866C4.47572 83.2752 3.62616 80.2196 3.01199 76.1282C2.39477 72.0338 2.39477 51.2407 3.01199 47.1463C3.62616 43.0518 4.47571 39.9962 5.95155 37.8879C7.42433 35.7796 14.7638 25.3998 18.5863 23.7864C22.4088 22.17 26.0663 21.0853 28.3274 20.8928C30.5885 20.7034 55.3293 20.5139 57.8349 20.6423C60.3374 20.7676 63.7474 21.2534 63.7474 21.2534C63.7474 21.2534 67.0994 21.2595 72.2267 21.2748Z" fill-rule="evenodd" clip-rule="evenodd" fill="#2C2C2E"/><path d="M160.286 36.473L195.086 34.5559C195.086 34.5559 200.105 46.0868 200.105 61.939C200.105 77.7882 195.086 89.3662 195.086 89.3662L160.286 87.4491C160.286 87.4491 163.664 76.9365 163.664 61.9611C163.664 46.9857 160.286 36.473 160.286 36.473Z" fill-rule="evenodd" clip-rule="evenodd" fill="#48484A"/><path d="M90.3532 89.98C90.3532 89.98 85.5322 77.9714 85.5322 61.9368C85.5322 45.8991 90.2182 33.9094 90.2182 33.9094L58.7745 26.6338C58.7745 26.6338 47.7715 32.954 47.7715 61.9589C47.7715 90.9669 58.7745 97.287 58.7745 97.287L90.3532 89.98Z" fill-rule="evenodd" clip-rule="evenodd" fill="#48484A"/><path d="M64.3352 20.4285C64.3352 20.4285 93.3212 28.6784 113.655 29.1498C133.989 29.6212 151.127 30.5546 159.455 26.6355C167.786 22.7133 169.44 21.1011 169.44 21.1011L117.757 20.7491L64.3352 20.4285Z" fill-rule="evenodd" clip-rule="evenodd" fill="#48484A"/><path d="M64.3352 104.168C64.3352 104.168 93.3212 95.9178 113.655 95.4464C133.989 94.975 151.127 94.0416 159.455 97.9607C167.786 101.883 169.44 103.495 169.44 103.495L117.757 103.847L64.3352 104.168Z" fill-rule="evenodd" clip-rule="evenodd" fill="#48484A"/><path d="M9.18447 83.0765C8.25253 81.3409 11.5739 79.0247 11.5739 79.0247C11.5739 79.0247 14.113 82.6151 15.5216 84.5645C18.5802 88.7965 24.1904 93.2453 25.7579 94.3973C27.6248 95.7692 30.1732 98.1404 30.1732 98.1404C30.1732 98.1404 24.3676 97.5414 22.0179 96.2764C19.3443 94.8403 16.7286 92.6984 13.9541 89.3556C11.1827 86.0098 9.92392 84.4576 9.18447 83.0765ZM208.722 80.7206C208.914 78.7558 204.96 78.3067 204.96 78.3067C204.96 78.3067 203.992 82.5967 203.439 84.9372C202.268 89.8811 198.95 95.9404 197.844 97.7982C197.813 97.8501 201.926 96.6309 203.818 95.6959C204.942 93.9725 205.935 91.962 206.772 89.2425C208.049 85.0931 208.566 82.2789 208.722 80.7206ZM208.722 42.5353C208.914 44.5 204.96 44.9491 204.96 44.9491C204.96 44.9491 203.992 40.6591 203.439 38.3186C202.268 33.3747 198.95 27.3154 197.844 25.4577C197.813 25.4057 201.926 26.6249 203.818 27.5599C204.942 29.2833 205.935 31.2938 206.772 34.0133C208.049 38.1658 208.566 40.98 208.722 42.5353ZM9.18447 40.8944C8.25253 42.633 11.5739 44.9491 11.5739 44.9491C11.5739 44.9491 14.113 41.3588 15.5216 39.4094C18.5802 35.1774 24.1904 30.7255 25.7579 29.5766C27.6248 28.2047 30.1732 25.8336 30.1732 25.8336C30.1732 25.8336 24.3676 26.4325 22.0179 27.6944C19.3442 29.1336 16.7286 31.2755 13.9541 34.6183C11.1827 37.9641 9.92392 39.5163 9.18447 40.8944Z" fill-rule="evenodd" clip-rule="evenodd" fill="white"/><path d="M215.887 61.9813C215.887 61.9813 216.287 72.6483 213.491 84.3084C210.698 95.9684 198.271 97.8231 191.626 99.1523C184.98 100.485 177.851 101.053 168.611 101.328C159.374 101.603 147.586 101.199 142.513 101.224C137.441 101.248 131.611 101.514 114.384 101.74C97.1537 101.966 63.7472 102.015 63.7472 102.015C63.7472 102.015 60.3372 102.504 57.8317 102.63C55.3292 102.755 30.5883 102.568 28.3241 102.379C26.063 102.186 22.4086 101.102 18.583 99.4854C14.7605 97.872 7.42105 87.4922 5.94827 85.3839C4.47549 83.2756 3.62604 80.22 3.00882 76.1255C2.39159 72.0311 2.39159 51.238 3.00882 47.1435C3.62604 43.0491 4.47549 39.9935 5.94827 37.8852C7.42105 35.7768 14.7605 25.4002 18.583 23.7838C22.4086 22.1705 26.063 21.0827 28.3241 20.8932C30.5883 20.7007 55.3292 20.5143 57.8317 20.6396C60.3372 20.7649 63.7472 21.2538 63.7472 21.2538C63.7472 21.2538 97.1537 21.3057 114.384 21.5318C131.611 21.7579 137.441 22.0207 142.513 22.0452C147.586 22.0727 159.374 21.6693 168.611 21.9443C177.851 22.2163 184.98 22.7876 191.626 24.1168C198.271 25.446 210.698 27.3038 213.491 38.9607C216.287 50.6208 215.887 61.2878 215.887 61.2878" stroke-width="2.75" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#636366"/><path d="M194.195 34.9917C194.195 34.9917 199.014 45.02 199.072 61.6362C199.142 80.7946 194.195 88.2776 194.195 88.2776" stroke-width="2.75" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#636366"/><path d="M160.358 36.8525C160.358 36.8525 163.643 46.9817 163.643 61.6362C163.643 76.2876 160.358 86.4168 160.358 86.4168" stroke-width="2.75" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#636366"/><path d="M90.3093 88.904C89.1604 86.0043 87.822 79.829 86.8901 75.2365C86.4959 73.3023 85.7534 67.4692 85.7534 61.6361C85.7534 55.8 86.4959 49.9669 86.8901 48.0328C87.822 43.4402 89.1604 37.265 90.3093 34.3652" stroke-width="2.75" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#636366"/><path d="M59.7383 27.2886C59.7383 27.2886 85.9703 33.5036 90.3519 34.3744C94.7336 35.2422 99.4147 35.7159 103.784 36.1497C108.157 36.5806 129.918 37.705 142.028 37.5155C154.137 37.3292 176.265 36.0367 184.255 35.4775C190.186 35.062 192.035 35.0314 194.195 34.9917" stroke-width="2.75" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#636366"/><path d="M59.7383 95.9846C59.7383 95.9846 85.9703 89.7696 90.3519 88.8988C94.7336 88.031 99.4147 87.5574 103.784 87.1235C108.157 86.6926 129.918 85.5682 142.028 85.7577C154.137 85.944 176.265 87.2365 184.255 87.7957C190.186 88.2112 192.035 88.2418 194.195 88.2815" stroke-width="2.75" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#636366"/><path d="M169.027 21.9567C169.027 21.9567 158.739 29.8308 138.929 30.225C127.159 30.4572 101.025 29.6689 92.2282 27.7805C83.4312 25.8953 65.1467 21.2661 65.1467 21.2661" stroke-width="2.75" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#636366"/><path d="M169.027 101.332C169.027 101.332 158.739 93.4575 138.929 93.0633C127.159 92.8311 101.025 93.6195 92.2282 95.5078C83.4312 97.3931 65.1467 102.022 65.1467 102.022" stroke-width="2.75" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#636366"/><path d="M115.713 21.7979L119.065 29.9806" stroke-width="2.75" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#636366"/><path d="M115.713 101.491L119.065 93.308" stroke-width="2.75" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#636366"/><path d="M72.3604 16.8151C73.03 15.3896 75.7916 12.7668 77.3652 12.2392C78.9388 11.7116 80.3304 11.8874 80.3057 12.5632C80.2811 13.2389 80.3428 14.5102 79.6763 16.3029C79.0098 18.0925 78.0008 20.888 76.8468 21.0423C75.6928 21.1935 73.2953 21.3756 72.7554 21.4311C72.2154 21.4867 71.5335 20.7893 71.4533 19.8112C71.373 18.8361 71.6939 18.2406 72.3604 16.8151Z" stroke-width="2.75" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#636366"/><path d="M72.3517 106.458C73.0148 107.87 75.7495 110.467 77.3078 110.99C78.8662 111.512 80.2442 111.338 80.2198 110.669C80.1953 110 80.2564 108.741 79.5964 106.965C78.9364 105.193 77.9373 102.425 76.7945 102.272C75.6517 102.122 73.2775 101.942 72.7428 101.887C72.2081 101.832 71.5328 102.523 71.4534 103.491C71.3739 104.457 71.6917 105.047 72.3517 106.458Z" stroke-width="2.75" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#636366"/><path d="M59.7383 95.9807C59.7383 95.9807 56.0838 92.5279 54.6233 90.0162C53.1627 87.5015 51.7083 82.7043 50.6572 78.4051C50.1316 76.257 49.0408 68.9451 49.0408 61.6362C49.0408 54.3242 50.1316 47.0122 50.6572 44.8642C51.7083 40.565 53.1627 35.7678 54.6233 33.2561C56.0838 30.7414 59.7383 27.2886 59.7383 27.2886" stroke-width="2.75" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#636366"/>' +
            '<g clip-path="url(#carclip)" id="hl"></g><g id="mk"></g><g id="hit"></g>' +
          '</svg><small id="dcap"></small></div>' +
        '<div class="card wit"><small>' + t('details.witnesses') + '</small><div id="wl"></div>' +
          '<button class="btn2 icon" id="addw">' + I.plusc + ' ' + t('details.witness.add') + '</button></div>',
      init: function (root) {
        var txt = root.querySelector('#txt'), wl = root.querySelector('#wl');
        txt.value = d.text;
        txt.addEventListener('input', function () { d.text = txt.value; save(); });
        root.querySelector('#veh').addEventListener('change', function (e) { d.vehicles = e.target.value; save(); });
        (function () {
          var NS = 'http://www.w3.org/2000/svg';
          /* zone rectangles in the drawing's 220x123 coordinates; the car points to the left */
          var Z = { F: [0, 38, 58, 47], FR: [0, 0, 58, 38], FL: [0, 85, 58, 38], R: [58, 0, 105, 61.5], L: [58, 61.5, 105, 61.5],
                    B: [163, 38, 57, 47], BR: [163, 0, 57, 38], BL: [163, 85, 57, 38] };
          var hl = root.querySelector('#hl'), mk = root.querySelector('#mk'), hit = root.querySelector('#hit'), cap = root.querySelector('#dcap');
          var sel = (d.zones || []).slice();
          function el(tag, attrs, parent) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); parent.appendChild(e); return e; }
          function paint() {
            hl.innerHTML = ''; mk.innerHTML = '';
            sel.forEach(function (z) {
              var r = Z[z];
              el('rect', { x: r[0], y: r[1], width: r[2], height: r[3], fill: '#30d158', 'fill-opacity': '.38' }, hl);
              var cx = r[0] + r[2] / 2, cy = r[1] + r[3] / 2;
              if (z === 'R' || z === 'L') cx = 112;
              if (z === 'F') cx = 24; if (z === 'B') cx = 196;
              if (z.length === 2) { cx = r[0] + r[2] / 2; cy = z[0] === 'F' || z[0] === 'B' ? (z[1] === 'R' ? 20 : 103) : cy; }
              el('circle', { cx: cx, cy: cy, r: 9, fill: '#30d158', stroke: '#000', 'stroke-width': 2.5 }, mk);
              el('path', { d: 'M' + (cx - 4) + ' ' + cy + 'l3 3 5-6', fill: 'none', stroke: '#000', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, mk);
            });
            hit.querySelectorAll('[role=button]').forEach(function (g) { g.setAttribute('aria-pressed', sel.indexOf(g.dataset.z) > -1); });
            cap.textContent = sel.length ? dmg(d.damage) : t('details.map.none');
            cap.classList.toggle('none', !sel.length);
          }
          function toggle(z) {
            var i = sel.indexOf(z);
            if (i > -1) sel.splice(i, 1); else sel.push(z);
            sel.sort(function (a, b) { return ZONE_ORDER.indexOf(a) - ZONE_ORDER.indexOf(b); });
            d.zones = sel.slice(); d.damage = sel.length ? zonesToDamage(sel) : ''; save(); paint();
          }
          ZONE_ORDER.forEach(function (z) {
            var r = Z[z], g = el('g', { role: 'button', tabindex: 0, 'aria-label': t('zone.' + z), 'data-z': z, style: 'cursor:pointer;outline:none' }, hit);
            el('rect', { x: r[0], y: r[1], width: r[2], height: r[3], fill: 'transparent' }, g);
            g.addEventListener('click', function () { toggle(z); });
            g.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(z); } });
          });
          paint();
        })();
        function drawW() {
          wl.innerHTML = '';
          d.witnesses.forEach(function (w, i) {
            var el = document.createElement('div'); el.className = 'wi';
            el.innerHTML = '<input class="field" placeholder="' + t('details.witness.name') + '" aria-label="' + t('details.witness.name') + '">' +
              '<input class="field" type="tel" placeholder="' + t('details.witness.contact') + '" aria-label="' + t('details.witness.contact') + '">' +
              '<button class="link" type="button">' + t('details.witness.remove') + '</button>';
            var f = el.querySelectorAll('input');
            f[0].value = w.name || ''; f[1].value = w.contact || '';
            f[0].addEventListener('input', function () { w.name = f[0].value; save(); });
            f[1].addEventListener('input', function () { w.contact = f[1].value; save(); });
            el.querySelector('.link').addEventListener('click', function () { d.witnesses.splice(i, 1); save(); drawW(); });
            wl.appendChild(el);
          });
          root.querySelector('#addw').hidden = d.witnesses.length >= MAX_WITNESSES;
        }
        drawW();
        root.querySelector('#addw').addEventListener('click', function () {
          if (d.witnesses.length >= MAX_WITNESSES) return;
          d.witnesses.push({ name: MOCK_WITNESS.name, contact: MOCK_WITNESS.contact }); save(); drawW();
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
  var MOTION_X = 1, MOTION_Y = 1;   // direction of the fake camera's movement; set to -1 to reverse an axis
  var USE_REAL_CAMERA = false;   // false = show the pre-made picture instead of the device camera

  function openCamera(opts) {
    var landscape = opts.shape === 'document';
    var prevOverflow = app.style.overflow; app.scrollTop = 0; app.style.overflow = 'hidden';
    var el = document.createElement('div'); el.className = 'cam';
    el.innerHTML =
      (USE_REAL_CAMERA ? '<video playsinline muted autoplay></video>' : '') +
      '<div class="cam-fallback">' + t('cam.preview') + '</div><div class="cam-feed"><img alt=""></div>' +
      '<div class="cam-top"><button class="cam-x" aria-label="' + t('common.close') + '">' + I.left + '</button><span>' + opts.title + '</span><i></i></div>' +
      '<div class="cam-guide ' + (landscape ? 'g-doc' : 'g-veh') + '"></div>' +
      '<p class="cam-hint">' + opts.hint + '</p>' +
      '<div class="cam-bot"><button class="cam-shutter" aria-label="' + t('cam.shutter') + '"></button></div>' +
      '<img class="cam-shot" alt="" hidden><div class="cam-busy" hidden><span class="spin big"></span><p>' + t('cam.analysing') + '</p></div><div class="cam-flash"></div>';
    app.appendChild(el);
    var video = el.querySelector('video'), stream = null, closed = false, busy = false, raf = 0, onOri = null;
    var pre = resolveImg(opts.src, opts.label, landscape);

    /* Fake viewfinder: the picture that will be "taken" is shown behind the overlay and drifts with the
       device's tilt (or on its own where there is no motion sensor), so it feels like the camera is looking around. */
    var feed = el.querySelector('.cam-feed'), feedImg = feed.querySelector('img');
    pre.then(function (url) { if (closed) return; feedImg.src = url; el.classList.add('live'); });
    (function motion() {
      var tilt = { x: 0, y: 0 }, base = null, gotSensor = false, cur = { x: 0, y: 0 }, t0 = Date.now();
      function clamp(v) { return Math.max(-1, Math.min(1, v)); }
      onOri = function (e) {
        if (e.gamma == null || e.beta == null) return;
        gotSensor = true; if (!base) base = { g: e.gamma, b: e.beta, a: e.alpha };
        /* left/right = turning the phone (compass heading, alpha) where available, else rolling it (gamma) */
        var dx = (e.alpha != null && base.a != null) ? ((e.alpha - base.a + 540) % 360) - 180 : (e.gamma - base.g);
        tilt.x = clamp(dx / 25); tilt.y = clamp((e.beta - base.b) / 20);
      };
      var DOE = window.DeviceOrientationEvent;
      if (DOE) {
        if (typeof DOE.requestPermission === 'function') {   // iOS: needs a tap, which opening the camera is
          DOE.requestPermission().then(function (r) { if (r === 'granted' && !closed) window.addEventListener('deviceorientation', onOri); }).catch(function () {});
        } else { window.addEventListener('deviceorientation', onOri); }
      }
      (function loop() {
        if (closed) return;
        var t = (Date.now() - t0) / 1000, amp = gotSensor ? 1.2 : 4;      // idle drift in %, larger without a sensor
        var tx = MOTION_X * tilt.x * 11 + Math.sin(t * 0.9) * amp, ty = MOTION_Y * tilt.y * 11 + Math.cos(t * 0.7) * amp * 0.8;
        cur.x += (tx - cur.x) * 0.08; cur.y += (ty - cur.y) * 0.08;
        feed.style.transform = 'translate3d(' + cur.x.toFixed(2) + '%,' + cur.y.toFixed(2) + '%,0) scale(1.32)';
        raf = requestAnimationFrame(loop);
      })();
    })();

    function close() {
      if (closed) return; closed = true;
      if (stream) stream.getTracks().forEach(function (t) { t.stop(); });
      if (raf) cancelAnimationFrame(raf);
      if (onOri) window.removeEventListener('deviceorientation', onOri);
      app.style.overflow = prevOverflow; el.remove();
    }
    var prevCleanup = cleanup; cleanup = function () { close(); if (prevCleanup) prevCleanup(); };

    /* Real camera feed - archived: set USE_REAL_CAMERA = true (top of this section) to bring it back */
    if (USE_REAL_CAMERA && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
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
  function angleName(a) { return t('angle.' + a); }
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
  /* The stored damage value stays English; this maps it to the translated label */
  var DMG_KEY = { 'Front damage': 'front', 'Front left damage': 'frontLeft', 'Front right damage': 'frontRight', 'Left side damage': 'left', 'Right side damage': 'right',
    'Rear damage': 'rear', 'Rear left damage': 'rearLeft', 'Rear right damage': 'rearRight', 'Front and side damage': 'frontSide', 'Rear and side damage': 'rearSide', 'Other damage': 'other' };
  function dmg(v) { return DMG_KEY[v] ? t('damage.' + DMG_KEY[v]) : (v || ''); }
  function vehLabel(v) { return v === '5 or more' ? t('details.vehicles5') : v; }
  /* Tap zones on the vehicle drawing (screen 5) -> damage value / photo angle */
  var ZONE_ORDER = ['F', 'FR', 'R', 'BR', 'B', 'BL', 'L', 'FL'];
  var ZONE_ANGLE = { F: 'front', FR: 'front-right', R: 'right', BR: 'back-right', B: 'back', BL: 'back-left', L: 'left', FL: 'front-left' };
  var DAMAGE_ZONES = {
    'Front damage': ['F'], 'Front left damage': ['FL'], 'Front right damage': ['FR'],
    'Left side damage': ['L'], 'Right side damage': ['R'],
    'Rear damage': ['B'], 'Rear left damage': ['BL'], 'Rear right damage': ['BR'],
    'Front and side damage': ['F', 'R'], 'Rear and side damage': ['B', 'R'], 'Other damage': ['F', 'B', 'L', 'R']
  };
  var SINGLE_ZONE = { F: 'Front damage', FL: 'Front left damage', FR: 'Front right damage', L: 'Left side damage', R: 'Right side damage', B: 'Rear damage', BL: 'Rear left damage', BR: 'Rear right damage' };
  function zonesToDamage(z) {
    if (z.length === 1) return SINGLE_ZONE[z[0]];
    if (z.length === 2) {
      var f = z.indexOf('F') > -1, b = z.indexOf('B') > -1, sd = z.indexOf('L') > -1 || z.indexOf('R') > -1;
      if (f && sd) return 'Front and side damage';
      if (b && sd) return 'Rear and side damage';
    }
    return 'Other damage';
  }
  function setDamage(d, value) { d.damage = value; d.zones = DAMAGE_ZONES[value].slice(); }
  function damageZones(d) {
    return (d && d.zones && d.zones.length) ? d.zones : DAMAGE_ZONES[(d && DAMAGE_ZONES[d.damage]) ? d.damage : DEFAULT_DAMAGE];
  }
  function damageAngles(d) { return damageZones(d).map(function (z) { return ZONE_ANGLE[z]; }); }

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
      bar: { title: t('photos.title'), back: true, step: 3 }, next: 'sketch', cta: t('common.next'),
      html:
        '<p class="intro">' + t('photos.intro') + '</p>' +
        '<div class="stack" id="pc"></div>' +
        '<button class="btn2 add" id="addp">' + I.plus + ' ' + t('photos.add') + '</button>' +
        '<div class="note" id="est" hidden>' + I.info + '<p>' + t('photos.estimate') + '</p></div>' +
        '',
      init: function (root) {
        var pc = root.querySelector('#pc');
        function cards() {
          var list = damageAngles(state.details).map(function (a, n) {
            return { key: a, label: angleName(a), img: 'assets/illustrations/' + a + '.svg', src: DEMO_PHOTOS[n % DEMO_PHOTOS.length], req: true };
          });
          for (var k = 0; k < (state.extraPhotos || 0); k++) list.push({ key: 'x' + (k + 1), label: t('photos.extra', { n: k + 1 }), ill: 'generic', src: DEMO_PHOTOS[(list.length) % DEMO_PHOTOS.length] });
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
              (has ? t('photos.retake') : t('photos.take')) + '</span></span><span class="pcam">' + (has ? I.checkc : I.camera) + '</span>';
            b.addEventListener('click', function () {
              openCamera({ title: c.label, hint: t('cam.hint.vehicle'), shape: 'vehicle', src: c.src, label: c.label,
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
    contacts: { title: 'docs.contacts', fields: [
      ['name', 'docs.f.name', 'Jan Dvořák', 0, 0], ['tel', 'docs.f.tel', '+420 603 123 456', 0, 0], ['email', 'docs.f.email', 'Jan.Dvorak@email.com', 0, 0]] },
    licence: { title: 'docs.licence', fields: [
      ['no', 'docs.f.no', '1234 7894 897645', 0, 0], ['valid', 'docs.f.valid', '26/10/2032', 0, 0]] },
    green: { title: 'docs.green', fields: [
      ['holder', 'docs.f.holder', 'Jan Dvořák\nVinohradská 142\nPrague 2', 1, 0], ['plate', 'docs.f.plate', '2UL 8462', 0, 1],
      ['model', 'docs.f.model', 'Škoda Octavia', 0, 1], ['insurer', 'docs.f.insurer', 'Generali Česká pojišťovna\n877920-84\nGC: CZ/837/12', 1, 1]] }
  };
  var DOC_KEYS = ['contacts', 'licence', 'green'];

  function mockValues(k) { var v = {}; DOC_DEF[k].fields.forEach(function (f) { v[f[0]] = f[2]; }); return v; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

  /* Mock login popup (any button signs in) */
  var G_LOGO = '<svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.5 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 01-2.2 3.3v2.7h3.5c2.1-1.9 3.3-4.7 3.3-8z"/><path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.5-2.7c-1 .7-2.2 1.1-3.8 1.1-2.9 0-5.4-2-6.3-4.6H2.1v2.8A11 11 0 0012 23z"/><path fill="#FBBC05" d="M5.7 14.1a6.6 6.6 0 010-4.2V7.1H2.1a11 11 0 000 9.8z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.3 1.7l3.2-3.2A11 11 0 002.1 7.1l3.6 2.8C6.6 7.4 9.1 5.4 12 5.4z"/></svg>';
  var A_LOGO = '<svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M16.4 12.6c0-2.4 2-3.5 2.1-3.6-1.1-1.700-2.900-1.900-3.500-1.900-1.500-.2-2.900.9-3.700.9s-1.900-.9-3.200-.8c-1.600 0-3.100 1-4 2.400-1.700 3-.4 7.300 1.200 9.700.8 1.200 1.800 2.500 3 2.400 1.200 0 1.700-.8 3.100-.8s1.900.8 3.200.8 2.100-1.200 2.900-2.300c.9-1.300 1.300-2.600 1.300-2.700 0 0-2.400-.9-2.400-3.700zM14 5.500c.7-.8 1.100-1.900 1-3-1 0-2.100.7-2.800 1.500-.6.700-1.200 1.800-1 2.900 1.100.1 2.100-.5 2.800-1.400z"/></svg>';
  function openLogin(onSuccess) {
    var m = document.createElement('div'); m.className = 'modal-bg'; m.setAttribute('role', 'dialog'); m.setAttribute('aria-modal', 'true'); m.setAttribute('aria-label', t('login.title'));
    m.innerHTML = '<div class="modal login"><button class="mx" aria-label="' + t('common.close') + '">' + I.xmark.replace('class="oi"', 'width="20" height="20"') + '</button>' +
      '<h2>' + t('login.title') + '</h2><p class="lsub">' + t('login.sub') + '</p>' +
      '<label class="ef"><span>' + t('login.email') + '</span><input type="email" value="jan.dvorak@email.com" autocomplete="off"></label>' +
      '<label class="ef"><span>' + t('login.password') + '</span><input type="password" value="password123" autocomplete="off"></label>' +
      '<button class="btn on go">' + t('login.submit') + '</button>' +
      '<div class="or"><span>' + t('login.or') + '</span></div>' +
      '<button class="btn2 soc go">' + G_LOGO + ' ' + t('login.google') + '</button>' +
      '<button class="btn2 soc go">' + A_LOGO + ' ' + t('login.apple') + '</button></div>';
    app.appendChild(m);
    function close() { m.remove(); }
    m.querySelector('.mx').addEventListener('click', close);
    m.addEventListener('click', function (e) { if (e.target === m) close(); });
    m.querySelectorAll('.go').forEach(function (b) { b.addEventListener('click', function () { close(); onSuccess(); }); });
    var prev = cleanup; cleanup = function () { m.remove(); if (prev) prev(); };
  }

  function documentsScreen(filled) {
    if (!state.docs) { state.docs = {}; DOC_KEYS.forEach(function (k) { state.docs[k] = { mode: 'empty', values: {} }; }); }
    if (filled) DOC_KEYS.forEach(function (k) { state.docs[k] = { mode: 'filled', values: mockValues(k) }; });
    var docsState = state.docs, scanning = {};
    return {
      bar: { title: t('docs.title'), back: true, step: 5 }, next: 'second-party', cta: t('common.next'),
      html: '<div class="stack" id="dc"></div>',
      init: function (root) {
        var dc = root.querySelector('#dc'), tok = token;
        function cardHTML(k) {
          var d = DOC_DEF[k], s = docsState[k], h = '<div class="card dcard"><small class="dl">' + t(d.title) + '</small>';
          if (scanning[k]) {
            h += '<div class="scanbtn"><span class="spin"></span><b>' + t('docs.scanning') + '</b></div>';
          } else if (s.mode === 'empty') {
            h += k === 'contacts'
              ? '<div class="cbtns"><button class="btn on" data-k="contacts" data-act="login">' + t('docs.login') + '</button><button class="btn2" data-k="contacts" data-act="manual">' + t('docs.manual') + '</button></div>'
              : '<button class="scanbtn" data-k="' + k + '" data-act="scan">' + I.camera.replace(/#fff/g, '#6b6b6b') + '<b>' + t('docs.scan') + '</b></button>';
          } else if (s.mode === 'edit') {
            d.fields.forEach(function (f) {
              var v = esc(s.values[f[0]] || '');
              h += '<label class="ef"><span>' + t(f[1]) + '</span>' +
                (f[3] ? '<textarea rows="3" data-f="' + f[0] + '">' + v + '</textarea>' : '<input data-f="' + f[0] + '" value="' + v + '">') + '</label>';
            });
            h += '<div class="cbtns"><button class="btn on" data-k="' + k + '" data-act="save">' + t('docs.save') + '</button><button class="btn2 ghost" data-k="' + k + '" data-act="cancel">' + t('common.cancel') + '</button></div>';
          } else {
            h += '<div class="dl-list">';
            d.fields.forEach(function (f) {
              h += '<div class="li"><span class="lt">' + t(f[1]) + '</span><span class="lv">' + esc(s.values[f[0]] || '') + '</span>' + (f[4] ? I.chev : '') + '</div>';
            });
            h += '</div><div class="acts">' +
              (k === 'contacts' ? '' : '<button data-k="' + k + '" data-act="scan">' + I.rotate.replace(/width="22" height="22"/, 'width="18" height="18"') + ' ' + t('docs.again') + '</button>') +
              '<button data-k="' + k + '" data-act="edit">' + I.pencil + ' ' + t('common.edit') + '</button></div>';
          }
          return h + '</div>';
        }
        function draw() { dc.innerHTML = DOC_KEYS.map(cardHTML).join(''); }
        dc.addEventListener('click', function (e) {
          var b = e.target.closest('[data-act]'); if (!b) return;
          var k = b.dataset.k, s = docsState[k], act = b.dataset.act;
          if (act === 'login') {
            openLogin(function () { s.mode = 'filled'; s.values = mockValues(k); save(); if (tok === token) draw(); });
            return;
          }
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
            var lab = k === 'licence' ? t('docs.licence.short') : t('docs.green');
            openCamera({ title: lab, hint: t('cam.hint.doc'), shape: 'document', src: k === 'licence' ? PH_SRC.licence : PH_SRC.green, label: lab,
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
  var WAIT_MS = 3000; // how long "waiting for the other driver" lasts before moving on (0 = never move on)

  function shareScreen() {
    var opts = [
      ['qr', I.qr, t('share.qr.title'), t('share.qr.text'), 'waiting'],
      ['sms', I.mail, t('share.sms.title'), t('share.sms.text'), 'waiting'],
      ['device', I.phone, t('share.device.title'), t('share.device.text'), 'waiting'],
      ['paper', I.doc, t('share.paper.title'), t('share.paper.text'), 'waiting'],
      ['none', I.xmark, t('share.none.title'), t('share.none.text'), 'sign']
    ];
    return {
      bar: { title: t('share.title'), back: true, step: 6 },
      html: '<p class="intro">' + t('share.intro') + '</p><div class="stack">' +
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
      bar: { title: t('share.title'), back: true, step: 6 }, fill: true,
      html: '<div class="center col"><span class="spin big" aria-hidden="true"></span><p>' + t('waiting.text') + '</p></div>',
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
      ['bankid', I.bank, t('sign.bankid.title'), t('sign.bankid.text')],
      ['sms', I.mail, t('sign.sms.title'), t('sign.sms.text')],
      ['hand', I.hand, t('sign.hand.title'), t('sign.hand.text')]
    ];
    return {
      bar: { title: t('sign.title'), back: true, step: 7 },
      html: '<p class="intro">' + t('sign.intro') + '</p><div class="stack">' +
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
        '<div class="sr"><span class="sl">' + t('summary.vehicle') + '</span><span class="sv">' + veh + '<br>' + plate + '</span></div>' +
        '<div class="sr"><span class="sl">' + t('summary.insurer') + '</span><span class="sv">' + ins + '</span></div></div>';
    }
    return {
      bar: { title: t('summary.title'), back: true, step: 8 },
      html:
        '<div class="tile"><p class="tp">' + t('summary.text') + '</p>' +
          drv('#30d158', t('summary.driverA'), 'Jan Dvořák', 'Škoda Octavia', '2UL 8462', 'Generali Česká pojišťovna') +
          drv('#ffd60a', t('summary.driverB'), 'Tomáš Procházka', 'VW Golf', '5AH 6534', 'ČPP') +
          '<div class="tb"><button class="tbtn" data-t="dl">' + I.dl + ' ' + t('summary.download') + '</button><button class="btn on" data-t="send">' + t('summary.send') + '</button></div></div>' +
        '<p class="intro sec">' + t('summary.optional') + '</p>' +
        '<a class="svc" href="#services"><span class="simg">' + svcImg('service', CAR_IMG) + '</span><span class="stx"><b>' + t('summary.book.title') + '</b><span>' + t('summary.book.text') + '<br>' + t('summary.book.amount') + '</span></span>' + I.right + '</a>' +
        '<button class="svc" data-t="tow"><span class="simg">' + svcImg('tow', TOW_IMG) + '</span><span class="stx"><b>' + t('summary.tow.title') + '</b><span>' + t('summary.tow.text') + '</span></span>' + I.right + '</button>',
      init: function (root) {
        function endBar() {
          if (root.querySelector('.restart')) return;
          var c = document.createElement('div'); c.className = 'restart';
          c.innerHTML = '<button class="btn2" data-end="restart">' + t('summary.restart') + '</button>';
          root.querySelector('.content').appendChild(c);
          root.querySelector('[data-end="restart"]').addEventListener('click', function () {
            try { sessionStorage.removeItem('aw'); } catch (e) {}
            location.hash = '#start'; location.reload();
          });
        }
        function submitted(btn) {
          state.sent = true; save();
          btn.textContent = t('summary.sent'); btn.disabled = true; btn.classList.add('done');
          var m = document.createElement('div'); m.className = 'modal-bg'; m.setAttribute('role', 'dialog'); m.setAttribute('aria-modal', 'true');
          m.innerHTML = '<div class="modal"><div class="mi">' + I.checkc + '</div><h2>' + t('summary.modal.title') + '</h2>' +
            '<p>' + t('summary.modal.text', { insurer: 'Generali Česká pojišťovna' }) + '</p>' +
            '<button class="btn on">' + t('summary.modal.ok') + '</button></div>';
          root.appendChild(m);
          m.querySelector('button').addEventListener('click', function () { m.remove(); });
          endBar();
        }
        if (state.sent) { var sb = root.querySelector('[data-t="send"]'); if (sb) { sb.textContent = t('summary.sent'); sb.disabled = true; sb.classList.add('done'); } endBar(); }
        root.querySelectorAll('[data-t]').forEach(function (b) {
          b.addEventListener('click', function () {
            var act = b.dataset.t;
            if (act === 'send') { submitted(b); return; }
            toast(act === 'dl' ? t('summary.toast.dl') : t('summary.toast.tow'));
          });
        });
      }
    };
  }

  function servicesScreen() {
    var list = [
      ['AZ World cars', '2,1 km', 'Náměstí svobody, 12, Praha 3, 134 00<br>' + t('services.hours.weekdays'), [[t('services.cost'), t('services.s1.cost')], [t('services.finished'), t('services.s1.time')]]],
      ['Louwman s.r.o.', '2,3 km', 'Dlouhá 76, Praha 10. 10100<br>' + t('services.hours.week'), [[t('services.cost'), t('services.s2.cost')], [t('services.finished'), t('services.s2.time')], [t('services.extras'), t('services.replacement')]]]
    ];
    return {
      bar: { title: t('services.title'), back: true },
      html: '<p class="intro rec">' + t('services.recommended') + '</p><div class="stack">' + list.map(function (s, i) {
        return '<div class="tile svt"><div class="sh"><b>' + s[0] + '</b><span>' + s[1] + '</span></div><p class="sa">' + s[2] + '</p>' +
          '<div class="sub">' + s[3].map(function (r) { return '<div class="sr"><span class="sl">' + r[0] + '</span><span class="sv">' + r[1] + '</span></div>'; }).join('') + '</div>' +
          '<a class="btn on bk" href="#consent" data-i="' + i + '">' + t('services.book') + '</a></div>';
      }).join('') + '</div><button class="more" id="more">' + t('services.more') + '</button>',
      init: function (root) {
        root.querySelectorAll('a.bk').forEach(function (el) {
          el.addEventListener('click', function () { state.service = list[+el.dataset.i][0]; save(); });
        });
        root.querySelector('#more').addEventListener('click', function () { toast(t('services.nomore')); });
      }
    };
  }

  function consentScreen() {
    return {
      bar: { title: t('consent.title'), back: true }, next: 'summary', cta: t('consent.cta'), gated: true,
      html: '<div id="cw"><button class="opt" role="checkbox" aria-checked="false">' + I.empty +
        '<div class="txt"><b>' + t('consent.agree.title') + '</b><span>' + t('consent.agree.text') + '</span></div></button></div>',
      onNext: function (root, btn) {
        root.querySelector('#cw').innerHTML = '<div class="center"><p>' + (state.service ? t('consent.sentTo', { service: esc(state.service) }) : t('consent.sent')) + '</p></div>';
        btn.textContent = t('consent.back'); btn.onclick = function () { location.hash = 'summary'; };
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
      bar: { title: t('voice.title'), back: false }, fill: true,
      html:
        '<div class="vc" id="vc">' +
          '<div class="vc-hero" id="hero"><div class="vc-orb">' + I.mic + '</div>' +
            '<h2>' + t('voice.hero.title') + '</h2>' +
            '<p>' + t('voice.hero.text') + '</p></div>' +
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
              var u = new SpeechSynthesisUtterance(text.replace(/<[^>]+>/g, '')); u.lang = t('voice.lang'); u.rate = 1.02;
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
          mic.setAttribute('aria-label', listening ? t('voice.mic.stop') : t('voice.mic'));
          ctrls.querySelector('.vc-live').hidden = !listening;
        }
        function chips(list) {
          var c = ctrls.querySelector('.vc-chips'); c.innerHTML = ''; c.hidden = !list || !list.length;
          (list || []).forEach(function (lbl) {
            var b = document.createElement('button'); b.type = 'button'; b.textContent = lbl;
            b.addEventListener('click', function () { answer(lbl); }); c.appendChild(b);
          });
          c.scrollLeft = 0;
        }
        function drawChat() {
          ctrls.innerHTML =
            '<div class="vc-chips" hidden></div>' +
            '<div class="vc-live" hidden><span class="wave"><i></i><i></i><i></i><i></i><i></i></span><span class="lt" id="lt">' + t('voice.listening') + '</span></div>' +
            '<div class="vc-row"><button class="vc-snd" type="button" aria-label="' + t('voice.sound') + '">' + (soundOn ? I.spk : I.spkoff) + '</button>' +
            '<input class="vc-in" type="text" placeholder="' + t('voice.input') + '" aria-label="' + t('voice.input') + '" autocomplete="off">' +
            '<button class="vc-mic" type="button" aria-label="' + t('voice.mic') + '">' + I.mic + '</button></div>';
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
          if (!SR) { toast(t('voice.toast.unsupported')); ctrls.querySelector('input').focus(); return; }
          try { if (synth) synth.cancel(); } catch (e) {}
          var finalText = '', got = false;
          try {
            rec = new SR(); rec.lang = t('voice.lang'); rec.interimResults = true; rec.continuous = false;
            rec.onstart = function () { listening = true; micState(); ctrls.querySelector('#lt').textContent = t('voice.listening'); };
            rec.onresult = function (e) {
              var txt = ''; for (var i = 0; i < e.results.length; i++) txt += e.results[i][0].transcript;
              finalText = txt; got = true; micOK = true;
              ctrls.querySelector('#lt').textContent = txt || t('voice.listening');
            };
            rec.onerror = function (e) {
              if (e.error === 'not-allowed' || e.error === 'service-not-allowed' || e.error === 'audio-capture' || e.error === 'network') {
                micOK = false; toast(t('voice.toast.nomic'));
                var i = ctrls.querySelector('input'); if (i) i.focus();
              }
            };
            rec.onend = function () {
              listening = false; if (!alive) return; micState();
              if (finalText.trim()) answer(finalText.trim());
            };
            rec.start();
          } catch (e) { listening = false; micState(); toast(t('voice.toast.unavailable')); }
        }

        /* ----- answer parsing (the word lists live in the language file) ----- */
        function parseVehicles(txt) {
          var m = txt.match(/\d+/), n = m ? +m[0] : null;
          if (n == null) { var nums = t('voice.numbers'); txt.toLowerCase().split(/[^\p{L}\p{N}]+/u).some(function (w) { if (Object.prototype.hasOwnProperty.call(nums, w)) { n = nums[w]; return true; } }); }
          if (n == null) return null; return n >= 5 ? '5 or more' : String(n);
        }
        function parseDamage(txt) {
          txt = txt.trim().toLowerCase();
          var exact = Object.keys(DAMAGE_ANGLES).filter(function (k) { return k.toLowerCase() === txt || dmg(k).toLowerCase() === txt; })[0]; if (exact) return exact;
          var f = rx('voice.re.front').test(txt), r = rx('voice.re.rear').test(txt), l = rx('voice.re.left').test(txt), rt = rx('voice.re.right').test(txt),
              s = rx('voice.re.side').test(txt), cr = rx('voice.re.corner').test(txt);
          if (r && s && !cr) return 'Rear and side damage'; if (f && s && !cr) return 'Front and side damage';
          if (f && l) return 'Front left damage'; if (f && rt) return 'Front right damage';
          if (r && l) return 'Rear left damage'; if (r && rt) return 'Rear right damage';
          if (f && s) return 'Front and side damage'; if (r && s) return 'Rear and side damage';
          if (f) return 'Front damage'; if (r) return 'Rear damage';
          if (l) return 'Left side damage'; if (rt) return 'Right side damage'; if (s) return 'Right side damage';
          if (rx('voice.re.other').test(txt)) return 'Other damage';
          return null;
        }
        function yesNo(txt) {
          if (rx('voice.re.no', true).test(txt)) return 'no';
          if (rx('voice.re.yes', true).test(txt)) return 'yes';
          return null;
        }
        function isSkip(txt) { return txt.trim().toLowerCase() === t('voice.chip.skip').toLowerCase() || rx('voice.re.skip').test(txt); }

        /* ----- the conversation ----- */
        var witness = null;
        var photoQueue = [], photoN = 0, photosTaken = 0;
        var YN = [t('voice.chip.yes'), t('voice.chip.no')];
        var S = {
          intro: { q: t('voice.q.intro'), hint: null,
            handle: function (txt) { d.text = txt; save(); return say(t('voice.ack.intro')).then(function () { return go('vehicles'); }); } },
          vehicles: { q: t('voice.q.vehicles'), chips: ['0', '1', '2', '3', '4', t('details.vehicles5')],
            handle: function (txt) {
              var v = parseVehicles(txt);
              if (!v) return say(t('voice.retry.vehicles')).then(function () { return go('vehicles', true); });
              d.vehicles = v; save(); return say(v === '0' ? t('voice.ack.vehicles.zero') : v === '1' ? t('voice.ack.vehicles.one') : t('voice.ack.vehicles.many', { n: v === '5 or more' ? '5+' : v })).then(function () { return go('damage'); });
            } },
          damage: { q: t('voice.q.damage'), chips: Object.keys(DAMAGE_ANGLES).map(dmg),
            handle: function (txt) {
              var v = parseDamage(txt);
              if (!v) return say(t('voice.retry.damage')).then(function () { return go('damage', true); });
              setDamage(d, v); save(); return say(t('voice.ack.damage', { damage: dmg(v) })).then(function () { return go('witnesses'); });
            } },
          witnesses: { q: t('voice.q.witnesses'), chips: YN,
            handle: function (txt) {
              var yn = yesNo(txt);
              if (!yn) return say(t('voice.retry.witnesses')).then(function () { return go('witnesses', true); });
              if (yn === 'no') return say(t('voice.ack.nowitness')).then(function () { return startPhotos(); });
              witness = { name: '', contact: '' }; return go('wname');
            } },
          wname: { q: t('voice.q.wname'),
            handle: function (txt) { witness.name = txt.replace(new RegExp('^(' + t('voice.re.namePrefix') + ')\\s+', 'iu'), ''); return go('wcontact'); } },
          wcontact: { q: t('voice.q.wcontact'),
            handle: function (txt) {
              witness.contact = txt; d.witnesses.push(witness); save();
              return say(t('voice.ack.wsaved', { name: witness.name })).then(function () { return go('wmore'); });
            } },
          wmore: { q: t('voice.q.wmore'), chips: YN,
            handle: function (txt) {
              var yn = yesNo(txt);
              if (!yn) return say(t('voice.retry.wmore')).then(function () { return go('wmore', true); });
              if (yn === 'no') return startPhotos();
              witness = { name: '', contact: '' }; return go('wname');
            } },
          photo: { chips: [t('voice.chip.take'), t('voice.chip.skip')],
            handle: function (txt) {
              if (isSkip(txt)) { userSays(t('voice.chip.skip')); return nextPhoto(); }
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
        function answer(txt) {
          if (!expecting || busy || !alive) return;
          var st = expecting; busy = true; chips(null); expecting = null;
          if (st.key === 'photo' && txt.trim().toLowerCase() === t('voice.chip.take').toLowerCase()) userSays(t('voice.chip.take'));
          else if (!(st.key === 'photo' && isSkip(txt))) userSays(txt);
          st.handle(txt);
        }

        /* photos: one request per angle that belongs to the chosen damage type */
        function startPhotos() {
          photoQueue = damageAngles(d); photoN = 0; photosTaken = 0;
          var list = photoQueue.map(function (a) { return t('angle.short.' + a); }).join(', ');
          return say(photoQueue.length === 1 ? t('voice.photos.one', { list: list }) : t('voice.photos.many', { n: photoQueue.length, list: list })).then(nextPhoto);
        }
        function nextPhoto() {
          if (photoN >= photoQueue.length) return finish();
          var a = photoQueue[photoN];
          var card = '<div class="vc-ph"><img src="assets/illustrations/' + a + '.svg" alt=""><span>' + angleName(a) + '</span></div>';
          return say(t('voice.photos.ask', { angle: t('angle.short.' + a) }), card).then(function () { return go('photo', true); });
        }
        function takePhoto() {
          var a = photoQueue[photoN]; busy = true;
          openCamera({ title: angleName(a), hint: t('cam.hint.vehicle'), shape: 'vehicle', label: angleName(a),
            src: DEMO_PHOTOS[photoN % DEMO_PHOTOS.length],
            onDone: function (url) {
              if (!alive) return;
              photoUrls[a] = url; photosTaken++;
              add('me img', '<img alt="" src="' + url + '">');
              photoN++; setTimeout(function () { if (alive) say(photoN < photoQueue.length ? t('voice.ack.photo') : t('voice.ack.photoLast')).then(nextPhoto); }, 300);
            } });
          // if the camera is closed without a picture, ask again
          var chk = setInterval(function () {
            if (!alive) { clearInterval(chk); return; }
            if (!app.querySelector('.cam')) { clearInterval(chk); if (busy && !expecting && photoQueue[photoN] === a && !photoUrls[a]) { busy = false; expecting = S.photo; expecting.key = 'photo'; chips(S.photo.chips); } }
          }, 400);
        }

        function finish() {
          chips(null); expecting = null;
          var est = photosTaken ? t('photos.estimate') : '';
          var p = Promise.resolve();
          if (est) p = say(est);
          return p.then(function () {
            var w = d.witnesses.length ? d.witnesses.map(function (x) { return esc(x.name) + ' (' + esc(x.contact) + ')'; }).join(', ') : t('voice.sum.none');
            var sum = '<div class="vc-sum"><div><small>' + t('voice.sum.description') + '</small><span>' + esc(d.text) + '</span></div>' +
              '<div><small>' + t('voice.sum.vehicles') + '</small><span>' + esc(vehLabel(d.vehicles)) + '</span></div>' +
              '<div><small>' + t('voice.sum.damage') + '</small><span>' + esc(dmg(d.damage)) + '</span></div>' +
              '<div><small>' + t('voice.sum.witnesses') + '</small><span>' + w + '</span></div>' +
              '<div><small>' + t('voice.sum.photos') + '</small><span>' + t('voice.sum.photosOf', { a: photosTaken, b: photoQueue.length }) + '</span></div></div>';
            return say(t('voice.sum.intro'), sum);
          }).then(function () {
            return say(t('voice.sum.next'));
          }).then(function () {
            if (!alive) return;
            ctrls.innerHTML = '<div class="vc-end"><button class="btn2" id="rs">' + t('voice.restart') + '</button><a class="btn on" href="#sketch">' + t('voice.continue') + '</a></div>';
            ctrls.querySelector('#rs').addEventListener('click', function () { render(); });
            down();
          });
        }

        /* start: the first tap is also the user gesture that allows voice replies and the microphone */
        ctrls.innerHTML = '<button class="btn on" id="start">' + t('voice.start') + '</button>';
        ctrls.querySelector('#start').addEventListener('click', function () {
          hero.hidden = true; d.witnesses = []; d.text = ''; save(); drawChat();
          try { if (synth) { synth.cancel(); var u = new SpeechSynthesisUtterance(' '); u.volume = 0; synth.speak(u); } } catch (e) {}
          say(t('voice.hello')).then(function () { return go('intro'); });
        });
      }
    };
  }

  var ROUTES = [
    { id: 'start', label: 'Is everyone all right?', figma: '43:7044', build: startScreen, noBack: true },
    { id: 'safety', label: 'Roadside safety', figma: '43:6880', build: function () {
      return checklist('safety', t('safety.title'), t('safety.intro'), [
        [t('safety.hazard.title'), t('safety.hazard.text'), 'hazard-lights'],
        [t('safety.vest.title'), t('safety.vest.text'), 'vest'],
        [t('safety.triangle.title'), t('safety.triangle.text'), 'triangle']
      ], 'police-check', null, true); } },
    { id: 'police-check', label: 'Police involvement', figma: '79:3219', build: function () {
      return checklist('police', t('police.title'), t('police.intro'), [
        [t('police.damage.title'), t('police.damage.text'), 'damage-vehicle'],
        [t('police.third.title'), t('police.third.text'), 'third-party'],
        [t('police.agree.title'), t('police.agree.text'), 'drivers-agree']
      ], 'location', t('police.warn')); } },
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

  /* ---------- Language switcher (top right of the header) ---------- */
  function langSwitcher() {
    var cur = LANGS.filter(function (l) { return l[0] === lang; })[0] || LANGS[0];
    return '<div class="lang"><button class="lang-btn" type="button" aria-haspopup="listbox" aria-expanded="false" aria-label="' + t('lang.label') + '">' + cur[1] +
      '<svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7.5l6 6 6-6"/></svg></button>' +
      '<ul class="lang-menu" role="listbox" hidden>' + LANGS.map(function (l) {
        return '<li><button type="button" role="option" data-lang="' + l[0] + '" aria-selected="' + (l[0] === lang) + '"><b>' + l[1] + '</b><span>' + l[2] + '</span></button></li>';
      }).join('') + '</ul></div>';
  }
  function closeLang() {
    var m = app.querySelector('.lang-menu'), b = app.querySelector('.lang-btn');
    if (m) m.hidden = true; if (b) b.setAttribute('aria-expanded', 'false');
  }
  function bindLang() {
    var box = app.querySelector('.lang'); if (!box) return;
    var btn = box.querySelector('.lang-btn'), menu = box.querySelector('.lang-menu');
    btn.addEventListener('click', function (e) {
      e.stopPropagation(); var open = menu.hidden; closeLang(); menu.hidden = !open; btn.setAttribute('aria-expanded', open);
    });
    menu.addEventListener('click', function (e) {
      var b = e.target.closest('[data-lang]'); if (!b) return; closeLang(); setLang(b.dataset.lang);
    });
  }
  document.addEventListener('click', closeLang);

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
      segs += i < step ? '<a class="on done" href="#' + STEP_ROUTE[i - 1] + '" aria-label="' + t('common.gotoStep', { n: i }) + '"></a>'
        : '<i' + (i === step ? ' class="on"' : '') + '></i>';
    }
    var ctl = s.next ? '<div class="controls' + (s.inline ? ' inline' : '') + '"><button class="btn">' + (s.cta || t('common.proceed')) + '</button></div>' : '';
    app.innerHTML =
      '<header class="bar">' +
        (backTarget ? '<button class="back" aria-label="' + t('common.back') + '">' + I.left + '</button>' : '<span></span>') +
        '<div class="ttl">' + (step ? '<small>' + t('common.step', { n: step, total: TOTAL_STEPS }) + '</small>' : '') + '<h1>' + s.bar.title + '</h1></div>' + langSwitcher() + '</header>' +
      (step ? '<nav class="steps" aria-label="' + t('common.progress') + '">' + segs + '</nav>' : '') +
      '<main class="content' + (s.fill ? ' fill' : '') + '">' + s.html + (s.next && s.inline ? ctl : '') + '</main>' +
      (s.next && !s.inline ? ctl : '');

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
        if (mp) mp.innerHTML = '<p style="padding:16px;color:#c8c8c8;font-size:14px">' + t('common.mapError') + '</p>';
      }
    }
    app.scrollTop = 0;
    document.title = s.bar.title + ' – ' + t('app.suffix');
    bindLang();
  }

  /* Start: load the language file first, then show the first screen */
  loadLang(pickLang()).then(function () {
    window.addEventListener('hashchange', render);
    initGeolocation();
    render();
  }, function () {
    app.innerHTML = '<div style="padding:28px 20px;color:#fff;font:16px/1.5 sans-serif"><b>Could not load the language files (lang/*.json).</b><br>' +
      'Open the prototype from a web server (for example GitHub Pages, or "python3 -m http.server" in this folder) rather than by double-clicking index.html.</div>';
  });
})();
