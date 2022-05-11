//song list
let All_song = [
   {
     name: "140G REMIX (Can't Touch This)",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142151171866654/Niska_-_140G_REMIX_Can_t_Touch_This.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142151016685598/Niska_-_140G_REMIX_Can_t_Touch_This.jpg?width=479&height=479",
     singer: "Niska ft. 1PLIKÉ140"
   },
   {
     name: "Zipette (Funk Remix)",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142150580482078/Ninho_-_Zipette_Funk_Remix.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142150391730196/Ninho_-_Zipette_Funk_Remix.jpg?width=479&height=479",
     singer: "Ninho"
   },
   {
     name: "Without Billie Jean",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142151989780480/Michael_Jackson___Eminem_-_Without_Billie_Jean.mp3",
     img: "https://media.discordapp.net/attachments/672467491628253206/971342827042766848/Michael_Jackson__Eminem_-_Without_Billie_Jean.jpg?width=479&height=475",
     singer: "Michael Jackson & Eminem"
   },
   {
    name: "Groove from Tarkov",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142121136476201/Funk_Corleone_-_Groove_from_Tarkov.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142121694310450/Funk_Corleone_-_Groove_from_Tarkov.png",
    singer: "Funk Corleone"
  },
   {
     name: "MAUVAIS TEUFEUR",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142120645722223/La_Feve_-_MAUVAIS_TEUFEUR.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142120465395742/La_Feve_-_MAUVAIS_TEUFEUR.jpg?width=479&height=479",
     singer: "La Fève"
   },
   {
     name: "U Can't Touch RR 9.1",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142119727190096/Koba_LaDouille_-_U_Can_t_Touch_RR_9.1.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142119563599992/Koba_LaDouille_-_U_Can_t_Touch_RR_9.1.jpg?width=479&height=269",
     singer: "Koba LaDouille ft. Niska"
   },
   {
    name: "Disco FR 4",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142118984781855/Gazo_-_Disco_FR_4.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142118779289710/Gazo_-_Disco_FR_4.jpg?width=479&height=479",
    singer: "Gazo ft. Funk Corleone"
   },
   {
    name: "Funk catéchisme",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142122092761148/Funk_Corleone_-_Rap_cateshit.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142121920819210/Funk_Corleone_-_Rap_cateshit.jpg?width=479&height=269",
    singer: "Funk Corleone ft. Alpha One"
   },
   {
    name: "Without Me Staying Alive",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142072730013777/Bee_Gees___Eminem_-_Without_Me_Staying_Alive.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142072558055474/Bee_Gees___Eminem_-_Without_Me_Staying_Alive.jpg",
    singer: "Bee Gees & Eminem"
   },
   {
    name: "Give Me La Prise Connectée",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142074336432168/Funk_Corleone_-_Give_Me_La_Prise_Connectee.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142074135101470/Funk_Corleone_-_Give_Me_La_Prise_Connectee.jpg?width=479&height=479",
    singer: "Funk Corleone"
   },
   {
    name: "CANADA (HOUSE REMIX)",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142075221422100/1PLIKE140_-_CANADA_-_HOUSE_REMIX.mp3",
    img: "https://media.discordapp.net/attachments/672467491628253206/971346102966165564/1PLIKE140_-_CANADA_-_HOUSE_REMIX.jpg?width=479&height=480",
    singer: "1PLIKÉ140"
   },
   {
    name: "Funk Laden",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142073547886622/Funk_Corleone_-_Funk_Laden.mp3",
    img: "https://media.discordapp.net/attachments/672467491628253206/971342724592717854/Funk_Corleone_-_Funk_Laden.jpg?width=479&height=481",
    singer: "Funk Corleone"
   },
   {
    name: "Staying Alive In Da Club",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142075947053086/Bee_Gees___50_Cent_-_Staying_Alive_In_Da_Club.mp3",
    img: "https://media.discordapp.net/attachments/672467491628253206/971342713263910982/Bee_Gees__50_Cent_-_Staying_Alive_In_Da_Club.jpg?width=479&height=476",
    singer: "Bee Gees & 50 Cent"
   },
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks 
= document.querySelector('.tracks');

//creating a list or generating Html
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


/*please follow all the rules so that you do not face any problem*/