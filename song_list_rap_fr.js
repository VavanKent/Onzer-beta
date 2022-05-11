//song list
let All_song = [
   {
     name: "L'empire du côté obscur",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971141770631053362/IAM_L_empire_du_cote_obscur.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971141770454909008/IAM_L_empire_du_cote_obscur.jpg?width=480&height=480",
     singer: "IAM"
   },
   {
     name: "Femme Like U",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971141767271424000/K.Maro_-_Femme_Like_U.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971141767086886972/K.Maro_-_Femme_Like_U.jpg?width=480&height=480",
     singer: "K.Maro"
   },
   {
     name: "Hors ligne",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971141714066690108/Freeze_Corleone_-_Hors_ligne.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971141713865375874/Freeze_Corleone_-_Hors_ligne.jpg?width=573&height=573",
     singer: "Freeze Corleone"
   },
   {
     name: "Drill FR4",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971141711885635664/Gazo_-_Drill_FR_4.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971141711705292840/Gazo_-_Drill_FR_4.jpg",
     singer: "Gazo, Freeze Corleone"
   },
   {
     name: "L'enfant seul",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971141831159054357/Oxmo_Puccino_-_L_enfant_seul.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971141830928400394/Oxmo_Puccino_-_L_enfant_seul.jpg?width=569&height=573",
     singer: "Oxmo Puccino"
   },
   {
    name: "Ma Benz",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141829800108032/Supreme_NTM_-_Ma_Benz.mp3",
    img: "https://media.discordapp.net/attachments/672467491628253206/971340803240788018/Supreme_NTM_-_Ma_Benz.jpg?width=573&height=573",
    singer: "Suprême NTM"
   },
   {
    name: "Éteins la lumière",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141712657391736/Francky_Vincent_ft.Alkapote_-_Eteins_la_lumiere.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141712456085644/Francky_Vincent_ft.Alkapote_-_Eteins_la_lumiere.jpg?width=764&height=573",
    singer: "Francky Vincent, Alkpote"
   },
   {
    name: "Life",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141769699930133/Hamza_-_Life.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141769511202876/Hamza_-_Life.jpg?width=573&height=573",
    singer: "Hamza"
   },
   {
    name: "Tarkov",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141710866423808/Freeze_Corleone_-_Tarkov.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141713865375874/Freeze_Corleone_-_Hors_ligne.jpg?width=573&height=573",
    singer: "Freeze Corleone"
   },
   {
    name: "Stupeflip vite !!!",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141828806070432/Stupeflip_-Stupeflip_vite_.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141828583755807/Stupeflip_-Stupeflip_vite_.jpg?width=573&height=573",
    singer: "Stupeflip"
   },
   {
    name: "Fous Ta Cagoule",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141674732494979/Fatal_Bazooka_-_Fous_Ta_Cagoule.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141674539552838/Fatal_Bazooka_-_Fous_Ta_Cagoule.jpg?width=618&height=676",
    singer: "Fatal Bazooka"
   },
   {
    name: "RR 9.1",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141768240300142/Koba_LaD_-_RR_9.1.mp3",
    img: "https://media.discordapp.net/attachments/672467491628253206/971340432074219521/Koba_LaD_-_RR_9.1.jpg?width=573&height=573",
    singer: "Koba LaD feat. Niska"
   },
   {
    name: "La boulette",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141673184792586/Diam_s_-_La_boulette.mp3",
    img: "https://media.discordapp.net/attachments/672467491628253206/971340184870338600/Diams_-_La_boulette.jpg?width=580&height=572",
    singer: "Diam's"
   },
   {
    name: "Zipette",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141791854247936/Ninho_-_Zipette.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141792760234054/Ninho_-_Zipette.png?width=573&height=573",
    singer: "Ninho"
   },
   {
    name: "Fixette",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141835416301658/Ziak_-_Fixette.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141835202375710/Ziak_-_Fixette.jpg?width=573&height=573",
    singer: "Ziak"
   },
   {
    name: "Chen Laden",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141713324302366/Freeze_Corleone_-_Chen_Laden.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141713865375874/Freeze_Corleone_-_Hors_ligne.jpg?width=573&height=573",
    singer: "Freeze Corleone"
   },
   {
    name: "Devil May Cry",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141827761680454/Rowjay_-_Devil_May_Cry.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141827413573753/Rowjay_-_Devil_May_Cry.jpg?width=573&height=573",
    singer: "Rowjay"
   },
   {
    name: "Crystal Lake",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141791183171614/Luv_Resval_-_Crystal_Lake.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141790826635304/Luv_Resval_-_Crystal_Lake.jpg",
    singer: "Luv Resval"
   },
   {
    name: "J'avais juste envie d'écrire",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141676351508580/Damso_-_J_avais_juste_envie_d_ecrire..mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141672681488464/Damso_-_J_avais_juste_envie_d_ecrire.jpg",
    singer: "Damso"
   },
   {
    name: "CANADA",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141675684610179/1PLIKE140_-_CANADA.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141675445530654/1PLIKE140_-_CANADA.jpg",
    singer: "1PLIKÉ140"
   },
   {
    name: "OWAW",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141794370842695/La_Miellerie_-_OWAW.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141794140135424/La_Miellerie_-_OWAW.jpg?width=573&height=573",
    singer: "La Miellerie"
   },
   {
    name: "140G",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141793578106890/Niska_-_140G.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141793280319518/Niska_-_140G.jpg?width=573&height=573",
    singer: "Niska"
   },
   {
    name: "Rap catéchisme",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141709868183722/Freeze_Corleone_-_Rap_catechisme.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141713865375874/Freeze_Corleone_-_Hors_ligne.jpg?width=573&height=573",
    singer: "Freeze Corleone x Alpha Wann"
   },
   {
    name: "Me Gusta",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141674015260672/DTF_-_Me_Gusta.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141673704902697/DTF_-_Me_Gusta.jpg",
    singer: "DTF"
   },
   {
    name: "Akimbo",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141834745184286/Ziak_-_Akimbo.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141835202375710/Ziak_-_Fixette.jpg?width=573&height=573",
    singer: "Ziak"
   },
   {
    name: "¥2S °4 Katon",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141790096834580/Luv_Resval_-_2S_4_Katon.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141795020943360/Luv_Resval_-_2S_4_Katon.jpg?width=573&height=573",
    singer: "Luv Resval"
   },
   {
    name: "Galerie",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141836217389066/Ziak_-_Galerie.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141835202375710/Ziak_-_Fixette.jpg?width=573&height=573",
    singer: "Ziak"
   },
   {
    name: "Émotif (Booska 1H)",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141832417378354/PLK_-_Emotif_Booska_1H.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141832169889822/PLK_-_Emotif_Booska_1H.jpg",
    singer: "PLK"
   },
   {
    name: "MAUVAIS PAYEUR",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141768995291156/La_Feve_-_MAUVAIS_PAYEUR.mp3",
    img: "https://media.discordapp.net/attachments/672467491628253206/971342190490046474/La_Feve_-_MAUVAIS_PAYEUR.jpg?width=573&height=573",
    singer: "La Fève"
   },
];

let tracks = document.querySelector('.tracks');

for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-play-circle" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};