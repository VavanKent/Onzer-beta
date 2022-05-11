//song list
let All_song = [
    {
      name: "Careless Whisper",
      path: "https://cdn.discordapp.com/attachments/429749359593127936/971143016200929301/George_Michael_-_Careless_Whisper.mp3",
      img: "https://media.discordapp.net/attachments/429749359593127936/971143140901781514/Wham_-_Make_It_Big.jpg",
      singer: "George Michael"
    },
    {
      name: "I Wanna Dance with Somebody (Who Loves Me)",
      path: "https://cdn.discordapp.com/attachments/429749359593127936/971143141904253058/Whitney_Houston_-_I_Wanna_Dance_with_Somebody_Who_Loves_Me.mp3",
      img: "https://media.discordapp.net/attachments/429749359593127936/971143141723877396/Whitney_Houston_-_I_Wanna_Dance_with_Somebody_Who_Loves_Me.jpg",
      singer: "Whitney Houston"
    },
    {
      name: "Hey Ya!",
      path: "https://cdn.discordapp.com/attachments/429749359593127936/971143089701920778/Outkast_-_Hey_Ya.mp3",
      img: "https://media.discordapp.net/attachments/429749359593127936/971143089349619732/Outkast_-_Hey_Ya.jpg?width=480&height=480",
      singer: "Outkast"
    },
    {
      name: "Skyfall",
      path: "https://cdn.discordapp.com/attachments/429749359593127936/971142486116409414/Adele_-_Skyfall.mp3",
      img: "https://media.discordapp.net/attachments/429749359593127936/971142485898313728/Adele_-_Skyfall.jpg?width=480&height=480",
      singer: "Adele"
    },
    {
      name: "YMCA",
      path: "https://cdn.discordapp.com/attachments/429749359593127936/971143140192956496/Village_People_-_YMCA.mp3",
      img: "https://media.discordapp.net/attachments/429749359593127936/971143143133155338/Village_People_-_YMCA.jpg?width=480&height=479",
      singer: "Village People"
    },
    {
     name: "Word Up",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971143014451904602/Cameo_-_Word_Up.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971143014271565925/Cameo_-_Word_Up.jpg",
     singer: "Cameo"
    },
    {
     name: "Happy",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971143116096700426/Pharrell_Williams_-_Happy.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971143090435915816/Pharrell_Williams_-_Happy.jpg?width=480&height=477",
     singer: "Pharrell Williams"
    },
    {
     name: "U Can't Touch This",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971143088632365107/MC_Hammer_-_U_Can_t_Touch_This.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971143088389111899/MC_Hammer_-_U_Can_t_Touch_This.jpg",
     singer: "MC Hammer"
    },
    {
     name: "Tout oublier",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142487181774868/Angele_-_Tout_oublier.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142486942679110/Angele_-_Tout_oublier.jpg?width=480&height=480",
     singer: "Angèle ft. Roméo Elvis"
    },
    {
     name: "Bamboléo",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971143090675019826/Gipsy_Kings_-_Bamboleo.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971143017081757706/Gipsy_Kings_-_Bamboleo.jpg?width=480&height=480",
     singer: "Gipsy Kings"
    },
    {
     name: "Me Gustas Tu",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971143091560005702/Manu_Chao_-_Me_Gustas_Tu.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971143091346087976/Manu_Chao_-_Me_Gustas_Tu.jpg?width=480&height=481",
     singer: "Manu Chao"
    },
    {
     name: "No Time To Die",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971143018084188210/Billie_Eilish_-_No_Time_To_Die.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971143017803182100/Billie_Eilish_-_No_Time_To_Die.jpg?width=480&height=480",
     singer: "Billie Eilish"
    },
    {
     name: "Wake Me Up Before You Go-Go",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971143141098938478/Wham_-_Wake_Me_Up_Before_You_Go-Go.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971143140901781514/Wham_-_Make_It_Big.jpg",
     singer: "Wham!"
    },
    {
     name: "...Baby One More Time",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971143019040489582/Britney_Spears_-_...Baby_One_More_Time.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971143018847543296/Britney_Spears_-_...Baby_One_More_Time.jpg",
     singer: "Britney Spears"
    },
    {
     name: "Mamma Mia",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142488964354138/ABBA_-_Mamma_Mia.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142488809148526/ABBA_-_Mamma_Mia.jpg",
     singer: "ABBA"
    },
    {
     name: "Gimme! Gimme! Gimme! (A Man After Midnight)",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142488171618444/ABBA_-_Gimme_Gimme_Gimme_A_Man_After_Midnight.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142487974510722/ABBA_-_Gimme_Gimme_Gimme_A_Man_After_Midnight.jpg?width=480&height=431",
     singer: "ABBA"
    },
    {
     name: "Come and Get Your Love",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971143113697542194/Redbone_-_Come_and_Get_Your_Love.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971143117732470794/Redbone_-_Come_and_Get_Your_Love.jpg?width=480&height=480",
     singer: "Redbone"
    },
    {
     name: "Lemon Tree",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971143015638896640/Fools_Garden_-_Lemon_Tree.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971143015429210122/Fools_Garden_-_Lemon_Tree.jpg",
     singer: "Fools Garden"
    },
    {
     name: "Sarà perché ti amo",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971143114511241286/Ricchi_E_Poveri_-_Sara_perche_ti_amo.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971143114272170064/Ricchi_E_Poveri_-_Sara_perche_ti_amo.jpg?width=480&height=480",
     singer: "Ricchi E Poveri"
    },
    {
     name: "Waterloo",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142485411778570/ABBA_-_Waterloo.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142485231415417/ABBA_-_Waterloo.jpg",
     singer: "ABBA"
    },
    {
     name: "Am I Crazy",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971143087575425114/Mathieu_Boogaerts_-_Am_I_Crazy.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971143092394684466/Mathieu_Boogaerts_-_Am_I_Crazy.jpg",
     singer: "Mathieu Boogaerts"
    },
    {
     name: "Hit the Road Jack",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971143117203963975/Ray_Charles_-_Hit_the_Road_Jack.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971143117036208229/Ray_Charles_-_Hit_the_Road_Jack.jpg",
     singer: "Ray Charles"
    },
    {
      name: "Wannabe",
      path: "https://cdn.discordapp.com/attachments/429749359593127936/971143115295555624/Spice_Girls_-_Wannabe.mp3",
      img: "https://media.discordapp.net/attachments/429749359593127936/971143115102625822/Spice_Girls_-_Wannabe.jpg?width=480&height=474",
      singer: "Spice Girls"
     },
     {
      name: "The Girl From Ipanema",
      path: "https://cdn.discordapp.com/attachments/429749359593127936/971143142466256967/Stan_Getz_-_The_Girl_From_Ipanema.mp3",
      img: "https://media.discordapp.net/attachments/429749359593127936/971143115912146954/Stan_Getz_-_The_Girl_From_Ipanema.jpg",
      singer: "Stan Getz, João Gilberto, Astrud Gilberto"
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