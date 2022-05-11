//song list
let All_song = [
    {
      name: "Good Times",
      path: "https://cdn.discordapp.com/attachments/429749359593127936/971141424835870820/CHIC_-_Good_Times.mp3",
      img: "https://media.discordapp.net/attachments/429749359593127936/971141424676474981/CHIC_-_Good_Times.jpg",
      singer: "CHIC"
    },
    {
      name: "Lose Yourself To Dance",
      path: "https://cdn.discordapp.com/attachments/429749359593127936/971141426513600613/Daft_Punk_-_Lose_Yourself_To_Dance.mp3",
      img: "https://media.discordapp.net/attachments/429749359593127936/971141427138555914/Daft_Punk_-_Random_Access_Memories.jpg?width=480&height=477",
      singer: "Daft Punk, Pharrell Williams"
    },
    {
      name: "Let's Groove",
      path: "https://cdn.discordapp.com/attachments/429749359593127936/971141473342992474/Earth_Wind___Fire_-_Let_s_Groove.mp3",
      img: "https://media.discordapp.net/attachments/429749359593127936/971141424437424178/Earth_Wind___Fire_-_Let_s_Groove.jpg?width=480&height=480",
      singer: "Earth, Wind & Fire"
    },
    {
      name: "Instant Crush",
      path: "https://cdn.discordapp.com/attachments/429749359593127936/971141425951572078/Daft_Punk_-_Instant_Crush.mp3",
      img: "https://media.discordapp.net/attachments/429749359593127936/971141427138555914/Daft_Punk_-_Random_Access_Memories.jpg?width=480&height=477",
      singer: "Daft Punk, Julian Casablancas"
    },
    {
      name: "Voyage voyage",
      path: "https://cdn.discordapp.com/attachments/429749359593127936/971141423774695464/Desireless_-_Voyage_voyage.mp3",
      img: "https://media.discordapp.net/attachments/429749359593127936/971141423611129896/Desireless_-_Voyage_voyage.jpg",
      singer: "Desireless"
    },
    {
     name: "Reggae Night - Special Version",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971141503630065684/Jimmy_Cliff_-_Reggae_Night_-_Special_Version.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971141503298727977/Jimmy_Cliff_-_Reggae_Night_-_Special_Version.jpg",
     singer: "Jimmy Cliff"
    },
    {
     name: "Lady - Hear Me Tonight",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971141534424653844/Modjo_-_Lady_-_Hear_Me_Tonight.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971141534223314944/Modjo_-_Lady_-_Hear_Me_Tonight.jpg?width=480&height=480",
     singer: "Modjo"
    },
    {
     name: "Sexy Boy",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971141387393331270/Air_-_Sexy_Boy.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971141387187798107/Air_-_Sexy_Boy.jpg?width=480&height=480",
     singer: "Air"
    },
    {
     name: "Celebration",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971141536173678592/Kool___The_Gang_-_Celebration.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971141504607330384/Kool___The_Gang_-_Celebration.jpg",
     singer: "Kool & The Gang"
    },
    {
     name: "Ma quale idea",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971141587654557747/Pino_D_Angio_-_Ma_quale_idea.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971141536010104933/Pino_D_Angio_-_Ma_quale_idea.jpg",
     singer: "Pino D'Angiò"
    },
    {
     name: "Rasputin",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971141384063053824/Boney_M_-_Rasputin.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971141388752273538/Boney_M_-_Rasputin.jpg",
     singer: "Boney M"
    },
    {
     name: "Sexy And I Know It",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971141537075445780/LMFAO_-_Sexy_And_I_Know_It.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971141536882524250/LMFAO_-_Sexy_And_I_Know_It.jpg?width=480&height=476",
     singer: "LMFAO"
    },
    {
    name: "Nuit de folie",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141423028117554/Debut_de_Soiree_-_Nuit_de_folie.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141422730334278/Debut_de_Soiree_-_Nuit_de_folie.jpg?width=480&height=480",
    singer: "Début de Soirée"
    },
    {
    name: "Take On Me",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141254278692884/a-ha_-_Take_On_Me.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141254039621712/a-ha_-_Take_On_Me.jpg?width=536&height=536",
    singer: "a-ha"
    },
    {
    name: "Sacrifice",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141587088338964/The_Weeknd_-_Sacrifice.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141586274639922/The_Weeknd_-_Dawn_FM.jpg",
    singer: "The Weeknd"
    },
    {
    name: "Feel Good Inc.",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141471300370462/Gorillaz_-_Feel_Good_Inc..mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141471128391690/Gorillaz_-_Feel_Good_Inc..jpg?width=480&height=480",
    singer: "Gorillaz"
    },
    {
    name: "Gangnam Style",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141588430516304/PSY_-_Gangnam_Style.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141588233355304/PSY_-_Gangnam_Style.jpg",
    singer: "PSY"
    },
    {
    name: "Everybody Wants To Rule The World",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141585599340597/Tears_For_Fears_-_Everybody_Wants_To_Rule_The_World.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141585406423050/Tears_For_Fears_-_Everybody_Wants_To_Rule_The_World.jpg?width=480&height=480",
    singer: "Tears For Fears"
    },
    {
    name: "Feels",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141386403479593/Calvin_Harris_-_Feels.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141386013401108/Calvin_Harris_-_Feels.jpg?width=480&height=480",
    singer: "Calvin Harris, Pharrell Williams, Katy Perry, Big Sean, Funk Wav"
    },
    {
    name: "Partenaire Particulier",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141535334797322/Partenaire_Particulier_-_Partenaire_Particulier.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141535125086308/Partenaire_Particulier_-_Partenaire_Particulier.jpg?width=480&height=480",
    singer: "Partenaire Particulier"
    },
    {
    name: "Staying Alive",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141388244779009/Bee_Gees_-_Staying_Alive.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141387993112636/Bee_Gees_-_Staying_Alive.jpg",
    singer: "Bee Gees"
    },
    {
    name: "Ça m'énerve",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141504791891968/Helmut_Fritz_-_Ca_m_enerve.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141473171046431/Helmut_Fritz_-_Ca_m_enerve.jpg",
    singer: "Helmut Fritz"
    },
    {
    name: "Take My Breath",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141586123624458/The_Weeknd_-_Take_My_Breath.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141586274639922/The_Weeknd_-_Dawn_FM.jpg",
    singer: "The Weeknd"
    },
    {
    name: "L'aventurier",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141502606639155/Indochine_-_L_aventurier.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141502443081778/Indochine_-_L_aventurier.jpg",
    singer: "Indochine"
    },
    {
    name: "Just An Illusion",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141501671333968/Imagination_-_Just_An_Illusion.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141506385715201/Imagination_-_Just_An_Illusion.jpg",
    singer: "Imagination"
    },
    {
    name: "Baby I'm Yours",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141385380048916/Breakbot_-_Baby_I_m_Yours.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141385132605440/Breakbot_-_Baby_I_m_Yours.jpg",
    singer: "Breakbot, Irfane"
    },
    {
    name: "September",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141474341228574/Earth_Wind___Fire_-_September.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141474135703672/Earth_Wind___Fire_-_September.jpg",
    singer: "Earth, Wind & Fire"
    },
    {
    name: "Never Gonna Give You Up",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141589311291442/Rick_Astley_-_Never_Gonna_Give_You_Up.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141589089009774/Rick_Astley_-_Never_Gonna_Give_You_Up.jpg?width=480&height=480",
    singer: "Rick Astley"
    },
    {
    name: "Les Démons De Minuit",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141505844658246/Images_-_Les_Demons_De_Minuit.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141505462992906/Images_-_Les_Demons_De_Minuit.jpg",
    singer: "Images"
    },
    {
    name: "Break My Stride",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141537985617980/Matthew_Wilder_-_Break_My_Stride.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141537742336030/Matthew_Wilder_-_Break_My_Stride.jpg",
    singer: "Matthew Wilder"
    },
    {
    name: "Out of Time",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141586501128263/The_Weeknd_-_Out_of_Time.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141586274639922/The_Weeknd_-_Dawn_FM.jpg",
    singer: "The Weeknd"
    },
    {
    name: "Just the Two of Us",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141472483172382/Grover_Washington_Jr._-_Just_the_Two_of_Us.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141472214724618/Grover_Washington_Jr._-_Just_the_Two_of_Us.jpg?width=480&height=480",
    singer: "Grover Washington, Jr. and Bill Withers"
    },
    {
    name: "Give Me the Night",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971141470478270544/George_Benson_-_Give_Me_the_Night.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971141470285352970/George_Benson_-_Give_Me_The_Night.jpg",
    singer: "George Benson"
    },
 ];
 /*you can add more song & images from you computer*/
 
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
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