// ============================================
// Wastify — Navigation commune
// ============================================

function SETTIC_logoSVG(size) {
  size = size || 44;
  return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">' +
    '<circle cx="50" cy="48" r="33" fill="#559FD7"/>' +
    '<path d="M50 15 C70 15 82 28 82 44 L75 44 C75 32 64 22 50 22 C44 22 38 24 34 27 L40 20 L30 14 L44 8 L44 20 C46 19 48 19 50 19 Z" fill="#8CC740"/>' +
    '<path d="M18 55 C15 42 22 30 32 24 L36 30 C28 35 23 44 25 55 C26 60 29 65 33 68 L24 68 L20 80 L12 67 L23 62 C21 60 19 58 18 55 Z" fill="#8CC740"/>' +
    '<path d="M82 55 C80 68 70 76 58 78 L58 85 L46 80 L58 72 L58 79 C68 77 76 70 78 59 C79 54 78 49 75 45 L82 45 C85 48 83 52 82 55 Z" fill="#8CC740"/>' +
    '<circle cx="50" cy="48" r="16" fill="none" stroke="white" stroke-width="4.5" stroke-dasharray="70 30" stroke-dashoffset="-10"/>' +
    '<line x1="50" y1="32" x2="50" y2="46" stroke="white" stroke-width="4.5" stroke-linecap="round"/>' +
    '<text x="50" y="103" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" font-weight="bold"><tspan fill="#8CC740">Set</tspan><tspan fill="#559FD7">TIC</tspan></text>' +
    '</svg>';
}

function SETTIC_getUser() {
  return sessionStorage.getItem('settic_user') || 'Utilisateur';
}
function SETTIC_getProfil() {
  return sessionStorage.getItem('settic_profil') || 'agent';
}
function SETTIC_seDeconnecter() {
  sessionStorage.clear();
  window.location.href = 'index.html';
}

function SETTIC_renderTopbar(pageCourante) {
  var user = SETTIC_getUser();
  var profil = SETTIC_getProfil();
  var profilLabel = {ops:'Chargée des opérations', agent:'Agent Opérations', manager:'Manager', client:'Client'}[profil] || profil;
  var el = document.getElementById('settic-topbar');
  if (!el) return;
  el.innerHTML =
    '<div class="topbar-brand">' +
      SETTIC_logoSVG(44) +
      '<span class="topbar-title">Wastify</span>' +
    '</div>' +
    '<div class="topbar-right">' +
      '<span style="color:rgba(255,255,255,0.7);font-size:13px;">' + user + '</span>' +
      '<span class="user-pill" onclick="SETTIC_seDeconnecter()" title="Se déconnecter">' + profilLabel + ' &#8594;</span>' +
    '</div>';
}

function SETTIC_renderSidebar(pageCourante) {
  var profil = SETTIC_getProfil();
  var el = document.getElementById('settic-sidebar');
  if (!el) return;

  var menuOps = [
    { label:'Vue d\'ensemble', icon:'&#9632;', href:'dashboard_ops.html', page:'dashboard' },
    { label:'BSD', icon:'&#128196;', href:'bsd.html', page:'bsd', badge:'3' },
    { label:'BLD', icon:'&#128666;', href:'bld.html', page:'bld', badge:'2', badgeClass:'green' },
    { label:'D&eacute;composition', icon:'&#9881;', href:'decomposition.html', page:'decomp' },
    { label:'Commentaires', icon:'&#128172;', href:'dashboard_ops.html#comments', page:'', badge:'4' },
    { label:'Rapport collecte', icon:'&#128202;', href:'rapport_collecte.html', page:'rapport_collecte' },
    { label:'Rapport Listing', icon:'&#128203;', href:'rapport_listing.html', page:'rapport_listing' },
  ];

  var menuAgent = [
    { label:'Nouveau BSD', icon:'&#128196;', href:'bsd.html', page:'bsd' },
    { label:'Nouveau BLD', icon:'&#128666;', href:'bld.html', page:'bld' },
    { label:'D&eacute;composition', icon:'&#9881;', href:'decomposition.html', page:'decomp' },
    { label:'Mes BSD', icon:'&#128196;', href:'mes_bsd.html', page:'mes_bsd' },
  ];

  var menu = (profil === 'agent') ? menuAgent : menuOps;

  var html = menu.map(function(item) {
    var isActive = pageCourante === item.page;
    var badge = item.badge ? '<span class="nav-badge' + (item.badgeClass ? ' '+item.badgeClass : '') + '">' + item.badge + '</span>' : '';
    return '<a href="' + item.href + '" class="nav-item' + (isActive ? ' active' : '') + '">' +
      '<span class="nav-icon">' + item.icon + '</span>' + item.label + badge +
      '</a>';
  }).join('');

  el.innerHTML = '<div class="nav-section">Navigation</div>' + html +
    '<div class="nav-section" style="margin-top:auto;padding-top:20px;">' +
    '<a href="index.html" class="nav-item" style="color:rgba(255,255,255,0.5);">' +
    '<span class="nav-icon">&#128682;</span> D&eacute;connexion</a></div>';
}

// Journal interne — fonctions communes
function SETTIC_journalAuto(containerId, texte) {
  var entries = document.getElementById(containerId);
  if (!entries) return;
  var now = new Date();
  var div = document.createElement('div');
  div.className = 'journal-entry';
  div.innerHTML = '<div class="journal-avatar system">&#9881;</div>' +
    '<div class="journal-bubble">' +
    '<div class="journal-meta"><strong>Syst&egrave;me</strong> &mdash; ' + SETTIC_formatDate(now) + '</div>' +
    '<div class="journal-text system">' + texte + '</div></div>';
  entries.appendChild(div);
  div.scrollIntoView({ behavior:'smooth', block:'nearest' });
}

function SETTIC_journalManuel(containerId, texte, type, user) {
  var entries = document.getElementById(containerId);
  if (!entries) return;
  var now = new Date();
  var isExterne = type === 'externe';
  var div = document.createElement('div');
  div.className = 'journal-entry';
  var typeLabel = type === 'note' ? 'Note interne' : (type === 'message' ? 'Message' : 'Journal externe');
  var typeColor = type === 'note' ? '#29608A' : (type === 'message' ? '#8CC740' : '#e67e22');
  var textClass = type === 'externe' ? 'externe' : (type === 'message' ? 'action' : '');
  div.innerHTML = '<div class="journal-avatar">' + (user || 'BT') + '</div>' +
    '<div class="journal-bubble">' +
    '<div class="journal-meta"><strong>' + (user || SETTIC_getUser()) + '</strong> &mdash; ' + SETTIC_formatDate(now) +
    ' &mdash; <span style="color:'+typeColor+';font-style:italic;">' + typeLabel + '</span></div>' +
    '<div class="journal-text ' + textClass + '">' + texte + '</div></div>';
  entries.appendChild(div);
  div.scrollIntoView({ behavior:'smooth', block:'nearest' });
}

function SETTIC_formatDate(d) {
  var pad = function(n){return String(n).padStart(2,'0');};
  return pad(d.getDate())+'/'+pad(d.getMonth()+1)+'/'+d.getFullYear()+' &agrave; '+pad(d.getHours())+'h'+pad(d.getMinutes());
}

// Signer
function SETTIC_signer(boxId, nameId, dateId, nom, couleur) {
  var now = new Date();
  var pad = function(n){return String(n).padStart(2,'0');};
  var d = pad(now.getDate())+'/'+pad(now.getMonth()+1)+'/'+now.getFullYear()+' &agrave; '+pad(now.getHours())+'h'+pad(now.getMinutes());
  var box = document.getElementById(boxId);
  if (box) box.innerHTML = '<svg width="100" height="50" viewBox="0 0 100 50"><path d="M10,38 Q20,8 38,25 Q55,42 70,15 Q82,5 92,20" stroke="'+couleur+'" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>';
  var nameEl = document.getElementById(nameId);
  if (nameEl) nameEl.textContent = nom;
  var dateEl = document.getElementById(dateId);
  if (dateEl) dateEl.innerHTML = d;
}
