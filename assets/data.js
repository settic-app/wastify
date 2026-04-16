// ============================================
// Wastify by SetTIC — Données partagées v2
// ============================================

var WASTIFY = {

  // UTILISATEURS
  users: {
    boussoura:    { nom:'Boussoura TALLA',  role:'Manager',              initiales:'BT', dest:'dashboard_ops.html' },
    julie:        { nom:'Julie',             role:'Manager',              initiales:'JU', dest:'dashboard_ops.html' },
    woulare:      { nom:'Ibrahima WOULARE', role:'Agent operations',     initiales:'IW', dest:'bsd.html' },
    tapha:        { nom:'Tapha',             role:'Agent operations',     initiales:'TA', dest:'bsd.html' },
    fama:         { nom:'Fama',              role:'Chargee des ops',      initiales:'FM', dest:'dashboard_ops.html' },
    aminata:      { nom:'Aminata',           role:'Chargee des ops',      initiales:'AM', dest:'dashboard_ops.html' },
    sonatel:      { nom:'Sonatel',           role:'Client',               initiales:'SO', dest:'portail_client.html' },
    gmd:          { nom:'GMD',               role:'Client',               initiales:'GM', dest:'portail_client.html' },
    seneau:       { nom:'SENEAU',            role:'Client',               initiales:'SN', dest:'portail_client.html' },
    idex:         { nom:'IDEX SA',           role:'Partenaire Downstream',initiales:'ID', dest:'portail_client.html' },
    fabrimetal:   { nom:'Fabrimetal',        role:'Partenaire Downstream',initiales:'FA', dest:'portail_client.html' },
    exporteurope: { nom:'Export Europe',     role:'Partenaire Downstream',initiales:'EE', dest:'portail_client.html' },
  },

  // CLIENTS
  clients: {
    tis:     { nom:'TRANSPORT IBRAHIMA SAKHO', code:'TIS', tel:'769295255', email:'contact@tis.sn',
               sites:['Route de Rufisque','Pikine'], reps:['Ibrahima SAKHO','Mamadou BALDE'] },
    orange:  { nom:'Orange Sénégal', code:'ORG', tel:'33 869 30 00', email:'contact@orange.sn',
               sites:['Almadies','Plateau','Rufisque'], reps:['Aminata FALL','Cheikh DIOP'] },
    sonatel: { nom:'Sonatel', code:'SON', tel:'33 839 90 00', email:'contact@sonatel.sn',
               sites:['Plateau','Liberté 6'], reps:['Moussa NDIAYE','Aissatou BA'] },
    egmt:    { nom:'EGMT', code:'EGM', tel:'33 821 00 00', email:'contact@egmt.sn',
               sites:['Diamniadio','Almadies'], reps:['Omar SARR','Ndèye SECK'] },
    gmd:     { nom:'GMD', code:'GMD', tel:'33 800 00 00', email:'contact@gmd.sn',
               sites:['Plateau'], reps:['Contact GMD'] },
    seneau:  { nom:'SENEAU', code:'SEN', tel:'33 800 00 01', email:'contact@seneau.sn',
               sites:['Diamniadio'], reps:['Contact SENEAU'] },
  },

  // PARTENAIRES
  partenaires: {
    idex:      { nom:'IDEX SA', tel:'77 931 89 26', adresse:'Zone Industrielle, Dakar', contact:'Abdoulaye SECK' },
    recycleco: { nom:'RecyclEco Dakar', tel:'33 800 11 22', adresse:'Zone Industrielle, Dakar', contact:'Directeur technique' },
    sotrec:    { nom:'SOTREC', tel:'33 834 56 78', adresse:'Route de Rufisque', contact:'Responsable logistique' },
    mbeubeuss: { nom:'Décharge Mbeubeuss', tel:'', adresse:'Mbeubeuss, Dakar', contact:'' },
  },

  // VÉHICULES
  vehicules: [
    { id:'VEH001', label:'Renault Benne / AA-927-SZ', immat:'AA-927-SZ', type:'Benne tasseuse' },
    { id:'VEH002', label:'Kia Camionette / AA-329-YT', immat:'AA-329-YT', type:'Camionette' },
    { id:'VEH003', label:'Toyota Hilux / DK-441-TZ', immat:'DK-441-TZ', type:'Pick-up' },
  ],

  // AGENTS
  agents: {
    woulare: { nom:'Ibrahima WOULARE', tel:'76 517 44 79' },
    tapha:   { nom:'Tapha', tel:'77 000 00 00' },
    adama:   { nom:'ADAMA NGUER', tel:'77 111 00 00' },
    ahmed:   { nom:'Ahmed DIAGNE', tel:'77 393 48 31' },
  },

  // ARTICLES / TYPES DE DÉCHETS
  articles: [
    'Ordinateurs portables','Unités centrales','Ecrans','Imprimantes','Copieurs',
    'Téléphones mobiles','Tablettes','Serveurs','UPS / Onduleurs','Disques durs',
    'Cartouches encre','Cartouches toner','Piles / Batteries',
    'Archives papier','Déchets ménagers mixtes',
    'Papier / Carton','Plastique','Métaux ferreux','Métaux non-ferreux','Autre'
  ],

  // TYPES DE MATÉRIELS (pour listing)
  typesMateriel: [
    'Ordinateur portable','Unité centrale','Ecran','Imprimante','Copieur',
    'Téléphone mobile','Tablette','Serveur','UPS / Onduleur','Disque dur',
    'Cartouche encre','Cartouche toner','Toner bidon','Pile / Batterie','Autre'
  ],

  // MARQUES (autocomplete)
  marques: ['HP','Dell','Lenovo','Apple','Samsung','Canon','Epson','Xerox','Brother','Acer','Asus','Toshiba','Sony','LG','Huawei','Autre'],

  // MODÈLES (autocomplete)
  modeles: ['EliteBook 840','ProBook 450','OptiPlex 7050','Latitude E5470','ThinkPad T480',
            'MacBook Pro 2019','Galaxy A52','LBP6030','CF280A','T0711','P2419H',
            'ThinkCentre M720','Backup Plus','Inspiron 15'],

  // EMPLACEMENTS ENTREPÔT
  emplacements: [
    { id:'A01', label:'Zone A / Bac A-01', zone:'Zone A — Métaux', statut:'libre' },
    { id:'A02', label:'Zone A / Bac A-02', zone:'Zone A — Métaux', statut:'occupe' },
    { id:'A03', label:'Zone A / Bac A-03', zone:'Zone A — Métaux', statut:'libre' },
    { id:'B01', label:'Zone B / Palette B-01', zone:'Zone B — Plastiques', statut:'occupe' },
    { id:'B02', label:'Zone B / Palette B-02', zone:'Zone B — Plastiques', statut:'libre' },
    { id:'C01', label:'Zone C / Caisse C-01 (sécurisée)', zone:'Zone C — DEEE', statut:'occupe' },
    { id:'C02', label:'Zone C / Caisse C-02 (sécurisée)', zone:'Zone C — DEEE', statut:'libre' },
    { id:'D01', label:'Zone D / Bac D-01', zone:'Zone D — Papier', statut:'libre' },
    { id:'E01', label:'Zone E / Espace E-01', zone:'Zone E — Divers', statut:'libre' },
  ],

  // SERVICES
  services: {
    deee:              'Collecte & Recyclage DEEE',
    archives_site:     'Destruction archives sur site',
    archives_entrepot: 'Destruction archives entrepôt',
    dd_site:           'Destruction disques durs sur site',
    dd_entrepot:       'Destruction disques durs entrepôt',
    recyclables:       'Collecte déchets recyclables',
    menagers:          'Collecte déchets ménagers',
  },

  // BONS DE COMMANDE (fictifs)
  bons_commande: [
    { ref:'SO-2026-0142', client:'orange', service:'deee', date:'27/03/2026',
      articles:[
        {nom:'Unités centrales', qte:10, unite:'unité', poids:120},
        {nom:'Imprimantes', qte:5, unite:'unité', poids:45},
        {nom:'Téléphones mobiles', qte:20, unite:'unité', poids:30}
      ], statut:'utilise', bsd:'DIA/BSD/2026/05000', notes:'' },
    { ref:'SO-2026-0138', client:'orange', service:'deee', date:'25/03/2026',
      articles:[
        {nom:'Téléphones mobiles', qte:50, unite:'unité', poids:25},
        {nom:'Cartouches encre', qte:30, unite:'unité', poids:15}
      ], statut:'utilise', bsd:'DIA/BSD/2026/04998', notes:'' },
    { ref:'SO-2026-0145', client:'sonatel', service:'dd_entrepot', date:'05/04/2026',
      articles:[{nom:'Disques durs', qte:45, unite:'unité', poids:18}],
      statut:'actif', bsd:'', notes:'Disques durs SSD et HDD mélangés' },
    { ref:'SO-2026-0147', client:'egmt', service:'deee', date:'08/04/2026',
      articles:[
        {nom:'Ordinateurs portables', qte:20, unite:'unité', poids:50},
        {nom:'Ecrans', qte:15, unite:'unité', poids:45}
      ], statut:'actif', bsd:'', notes:'' },
  ],

  // BSD (fictifs)
  bsd_list: [
    { ref:'DIA/BSD/2026/05000', lot:'N°/27/03/2026/BSD/05000', client:'orange', date:'27/03/2026',
      poids:195.0, statut:'Prêt', agent:'woulare', vehicule:'AA-927-SZ',
      articles:[
        {nom:'Unités centrales', qtePrevu:10, qteReel:10, unite:'unité', ecart:0},
        {nom:'Imprimantes', qtePrevu:5, qteReel:5, unite:'unité', ecart:0},
        {nom:'Téléphones mobiles', qtePrevu:20, qteReel:18, unite:'unité', ecart:-2},
      ]
    },
    { ref:'DIA/BSD/2026/04999', lot:'N°/26/03/2026/BSD/04999', client:'tis', date:'26/03/2026',
      poids:120.0, statut:'Fait', agent:'tapha', vehicule:'AA-329-YT',
      articles:[{nom:'Déchets ménagers mixtes', qtePrevu:120, qteReel:120, unite:'kg', ecart:0}]
    },
    { ref:'DIA/BSD/2026/04998', lot:'N°/25/03/2026/BSD/04998', client:'orange', date:'25/03/2026',
      poids:88.0, statut:'Prêt', agent:'woulare', vehicule:'AA-927-SZ',
      articles:[
        {nom:'Téléphones mobiles', qtePrevu:50, qteReel:52, unite:'unité', ecart:2},
        {nom:'Cartouches encre', qtePrevu:30, qteReel:30, unite:'unité', ecart:0},
      ]
    },
    { ref:'DIA/BSD/2026/04997', lot:'N°/24/03/2026/BSD/04997', client:'sonatel', date:'24/03/2026',
      poids:210.0, statut:'Fait', agent:'tapha', vehicule:'AA-329-YT',
      articles:[
        {nom:'Unités centrales', qtePrevu:15, qteReel:15, unite:'unité', ecart:0},
        {nom:'Ecrans', qtePrevu:10, qteReel:10, unite:'unité', ecart:0},
      ]
    },
    { ref:'DIA/BSD/2026/04996', lot:'', client:'egmt', date:'23/03/2026',
      poids:55.0, statut:'Brouillon', agent:'woulare', vehicule:'AA-927-SZ',
      articles:[{nom:'Métaux ferreux', qtePrevu:55, qteReel:0, unite:'kg', ecart:0}]
    },
  ],

  // LOTS DECOMP EN STOCK
  lots_decomp: [
    { ref:'N°/27/03/2026/DECOMP/001', matiere:'Métaux ferreux', bsd:'DIA/BSD/2026/05000',
      client:'IDEX SA', poids:45.0, emplacement:'Zone A / Bac A-01', statut:'stock' },
    { ref:'N°/27/03/2026/DECOMP/002', matiere:'Plastique', bsd:'DIA/BSD/2026/05000',
      client:'IDEX SA', poids:30.0, emplacement:'Zone B / Palette B-01', statut:'stock' },
    { ref:'N°/27/03/2026/DECOMP/003', matiere:'Circuits imprimés (PCB)', bsd:'DIA/BSD/2026/05000',
      client:'IDEX SA', poids:15.0, emplacement:'Zone C / Caisse C-01', statut:'stock' },
    { ref:'N°/24/03/2026/DECOMP/005', matiere:'Aluminium', bsd:'DIA/BSD/2026/04997',
      client:'Sonatel', poids:22.0, poidsDisponible:18.0, emplacement:'Zone A / Bac A-02', statut:'partiel' },
    { ref:'N°/24/03/2026/DECOMP/006', matiere:'Métaux ferreux', bsd:'DIA/BSD/2026/04997',
      client:'Sonatel', poids:35.0, emplacement:'Zone A / Bac A-03', statut:'stock' },
    { ref:'N°/22/03/2026/DECOMP/008', matiere:'Papier / Carton', bsd:'DIA/BSD/2026/04995',
      client:'IDEX SA', poids:80.0, emplacement:'Zone D / Bac D-01', statut:'stock' },
  ],

  // N° SÉRIE DÉJÀ ENREGISTRÉS
  series_enregistrees: ['DL7050-2341','HP840-5522','CN6030-8891','SGA52-1123','LNV720-4456'],

  // COMPTEURS
  compteurs: { bsd: 5001, bld: 2001, decomp: 1001 },
};

// ============================================
// FONCTIONS UTILITAIRES PARTAGÉES
// ============================================
function W_genRef(type) {
  var now = new Date();
  var pad = function(n){return String(n).padStart(2,'0');};
  var num = String(WASTIFY.compteurs[type.toLowerCase()]).padStart(5,'0');
  WASTIFY.compteurs[type.toLowerCase()]++;
  return 'DIA/' + type + '/' + now.getFullYear() + '/' + num;
}

function W_genLot(type, num) {
  var now = new Date();
  var pad = function(n){return String(n).padStart(2,'0');};
  return 'N\u00b0/' + pad(now.getDate()) + '/' + pad(now.getMonth()+1) + '/' + now.getFullYear() + '/' + type + '/' + String(num).padStart(5,'0');
}

function W_formatDate(d) {
  var pad = function(n){return String(n).padStart(2,'0');};
  return pad(d.getDate())+'/'+pad(d.getMonth()+1)+'/'+d.getFullYear()+' \u00e0 '+pad(d.getHours())+'h'+pad(d.getMinutes());
}

function W_getMois(dateStr) {
  var mois = ['Jan','Fév','Mars','Avr','Mai','Juin','Juil','Août','Sep','Oct','Nov','Déc'];
  var parts = dateStr.split('/');
  return mois[parseInt(parts[1]) - 1] || '';
}

function W_getTrimestre(dateStr) {
  var m = parseInt(dateStr.split('/')[1]);
  return m <= 3 ? 'T1' : (m <= 6 ? 'T2' : (m <= 9 ? 'T3' : 'T4'));
}

function W_verifierSerie(serie) {
  return WASTIFY.series_enregistrees.indexOf(serie) !== -1;
}

function W_enregistrerSerie(serie) {
  if (serie && !W_verifierSerie(serie)) WASTIFY.series_enregistrees.push(serie);
}

function W_getUser() {
  return localStorage.getItem('wastify_user') || 'Utilisateur';
}

function W_getInitiales() {
  return W_getUser().split(' ').map(function(w){return w[0];}).join('').substring(0,2).toUpperCase();
}
