//song list
let All_song = [
    {
      name: "Still Loving You",
      path: "https://cdn.discordapp.com/attachments/429749359593127936/971142381363667014/Scorpions_-_Still_Loving_You.mp3",
      img: "https://media.discordapp.net/attachments/429749359593127936/971142381158150194/Scorpions_-_Still_Loving_You.jpg",
      singer: "Scorpions"
    },
    {
      name: "Nothing Else Matters",
      path: "https://cdn.discordapp.com/attachments/429749359593127936/971142287834890300/Metallica_-_Nothing_Else_Matters.mp3",
      img: "https://media.discordapp.net/attachments/429749359593127936/971142292708659320/Metallica_-_Metallica.jpg?width=480&height=480",
      singer: "Metallica"
    },
    {
      name: "Zombie",
      path: "https://cdn.discordapp.com/attachments/429749359593127936/971142413160702022/The_Cranberries_-_Zombie.mp3",
      img: "https://media.discordapp.net/attachments/429749359593127936/971142412942590012/The_Cranberries_-_Zombie.jpg",
      singer: "The Cranberries"
    },
    {
      name: "Bohemian Rhapsody",
      path: "https://cdn.discordapp.com/attachments/429749359593127936/971142313625665556/Queen_Bohemian_Rhapsody.mp3",
      img: "https://media.discordapp.net/attachments/429749359593127936/971142313415942174/Queen_-_Bohemian_Rhapsody.jpg?width=480&height=480",
      singer: "Queen"
    },
    {
      name: "The Jack",
      path: "https://cdn.discordapp.com/attachments/429749359593127936/971142210596798564/ACDC_-_The_Jack.mp3",
      img: "https://media.discordapp.net/attachments/429749359593127936/971142213235003412/ACDC_-_High_Voltage.jpg?width=480&height=480",
      singer: "AC/DC"
    },
    {
     name: "Sultans Of Swing",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142243924729916/Dire_Straits_-_Sultans_Of_Swing.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142212987543592/Dire_Straits_-_Sultans_Of_Swing.jpg",
     singer: "Dire Straits"
    },
    {
     name: "Killing In the Name",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142347490459768/Rage_Against_The_Machine_-_Killing_In_the_Name.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142352028704809/Rage_Against_The_Machine_-_Killing_In_the_Name.jpg?width=480&height=476",
     singer: "Rage Against The Machine"
    },
    {
     name: "Enter Sandman",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142292050165770/Metallica_-_Enter_Sandman.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142292708659320/Metallica_-_Metallica.jpg?width=480&height=480",
     singer: "Metallica"
    },
    {
     name: "Shoot to Thrill",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142213713141790/ACDC_-_Shoot_to_Thrill.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142213532790864/ACDC_-_Shoot_to_Thrill.jpg?width=342&height=535",
     singer: "AC/DC"
    },
    {
     name: "Walk",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142317597659156/Pantera_-_Walk.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142317375377418/Pantera_-_Walk.jpg",
     singer: "Pantera"
    },
    {
     name: "Somebody To Love",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142315437604974/Queen_-_Somebody_To_Love.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142315257253898/Queen_-_Somebody_To_Love.jpg",
     singer: "Queen"
    },
    {
     name: "Smells Like Teen Spirit",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142316729462854/Nirvana_-_Smells_Like_Teen_Spirit.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142290645061682/Nirvana_-_Nevermind.jpg?width=480&height=480",
     singer: "Nirvana"
    },
    {
     name: "Billie Jean",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142289017700393/Michael_Jackson_-_Billie_Jean.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142289848156180/Michael_Jackson_-_Thriller.jpg",
     singer: "Michael Jackson"
    },
    {
     name: "Under the Bridge",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142350426484746/Red_Hot_Chili_Peppers_-_Under_the_Bridge.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142350204190830/Red_Hot_Chili_Peppers_-_Under_the_Bridge.jpg?width=480&height=480",
     singer: "Red Hot Chili Peppers"
    },
    {
     name: "Take Me Out",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142241257160845/Franz_Ferdinand_-_Take_Me_Out.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142245656961115/Franz_Ferdinand_-_Take_Me_Out.jpg",
     singer: "Franz Ferdinand"
    },
    {
     name: "No One Knows",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142351315681320/Queens_of_the_Stone_Age_-_No_One_Knows.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142351114371122/Queens_of_the_Stone_Age_-_No_One_Knows.jpg?width=480&height=480",
     singer: "Queens of the Stone Age"
    },
    {
     name: "Welcome To The Jungle",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142243001970688/Guns_N__Roses_-_Welcome_To_The_Jungle.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142242762915850/Guns_N__Roses_-_Welcome_To_The_Jungle.jpg?width=480&height=480",
     singer: "Guns N' Roses"
    },
    {
     name: "Sonne",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142349335953479/Rammstein_-_Sonne.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142349130453082/Rammstein_-_Sonne.jpg",
     singer: "Rammstein"
    },
    {
     name: "Bring Me To Life",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142244927164477/Evanescence_-_Bring_Me_To_Life.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142244730044426/Evanescence_-_Bring_Me_To_Life.jpg",
     singer: "Evanescence"
    },
    {
     name: "I Was Made For Lovin' You",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142291479752774/KISS_-_I_Was_Made_For_Lovin__You.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142243719184484/KISS_-_I_Was_Made_For_Lovin__You.jpg?width=480&height=480",
     singer: "KISS"
    },
    {
     name: "House Of The Rising Sun",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142412305051738/The_Animals_-_House_Of_The_Rising_Sun.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142412015640586/The_Animals_-_House_Of_The_Rising_Sun.jpg?width=480&height=480",
     singer: "The Animals"
    },
    {
     name: "Owner of a Lonely Heart",
     path: "https://cdn.discordapp.com/attachments/429749359593127936/971142431045214209/Yes_-_Owner_of_a_Lonely_Heart.mp3",
     img: "https://media.discordapp.net/attachments/429749359593127936/971142430705471488/Yes_-_Owner_of_a_Lonely_Heart.jpg?width=480&height=480",
     singer: "Yes"
    },
    {
    name: "Polly",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142316121272340/Nirvana_-_Polly.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142291207127090/Nirvana_-_Polly.jpg?width=480&height=476",
    singer: "Nirvana"
    },
    {
    name: "Toxicity",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142411470401627/System_Of_A_Down_-_Toxicity.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142411290050570/System_Of_A_Down_-_Toxicity.jpg",
    singer: "System Of A Down"
    },
    {
    name: "Eye Of The Tiger",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142414658043915/Survivor_-_Eye_Of_The_Tiger.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142414473502780/Survivor_-_Eye_Of_The_Tiger.jpg?width=480&height=476",
    singer: "Survivor"
    },
    {
    name: "Somebody's Watching Me",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142380562546758/Rockwell_-_Somebody_s_Watching_Me.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142380373831710/Rockwell_-_Somebody_s_Watching_Me.jpg?width=480&height=485",
    singer: "Rockwell, Michael Jackson"
    },
    {
    name: "Chop Suey!",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142415190724628/System_Of_A_Down_-_Chop_Suey.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142411290050570/System_Of_A_Down_-_Toxicity.jpg",
    singer: "System Of A Down"
    },
    {
    name: "Welcome to Paradise",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142242175705108/Green_Day_-_Welcome_to_Paradise.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142241924026420/Green_Day_-_Welcome_to_Paradise.jpg?width=480&height=480",
    singer: "Green Day"
    },
    {
    name: "Mr. Brightside",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142431682752613/The_Killers_-_Mr._Brightside.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142414242812024/The_Killers_-_Mr._Brightside.jpg?width=480&height=480",
    singer: "The Killers"
    },
    {
    name: "Jerk It Out",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142212199022602/Caesars_-_Jerk_It_Out.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142212006064148/Caesars_-_Jerk_It_Out.jpg?width=480&height=481",
    singer: "Caesars"
    },
    {
    name: "All Star",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142378129858610/Smash_Mouth_-_All_Star.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142382630367312/Smash_Mouth_-_All_Star.jpg?width=480&height=479",
    singer: "Smash Mouth"
    },
    {
    name: "Original Prankster",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142428721569852/The_Offspring_-_Original_Prankster.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142428327280640/The_Offspring_-_Original_Prankster.jpg?width=480&height=480",
    singer: "The Offspring, Redman"
    },
    {
    name: "Don't Stop Me Now",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142314657476638/Queen_-_Don_t_Stop_Me_Now.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142314468728923/Queen_-_Don_t_Stop_Me_Now.jpg",
    singer: "Queen"
    },
    {
    name: "T.N.T.",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142214384246824/ACDC_-_T.N.T..mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142213235003412/ACDC_-_High_Voltage.jpg?width=480&height=480",
    singer: "AC/DC"
    },
    {
    name: "Notion",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142429803679774/The_Rare_Occasions_-_Notion.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142429606555709/The_Rare_Occasions_-_Notion.jpg?width=480&height=480",
    singer: "The Rare Occasions"
    },
    {
    name: "Breed",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142290041102436/Nirvana_-_Breed.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142290645061682/Nirvana_-_Nevermind.jpg?width=480&height=480",
    singer: "Nirvana"
    },
    {
    name: "Paranoid",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142211494375424/Black_Sabbath_-_Paranoid.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142211263676456/Black_Sabbath_-_Paranoid.jpg?width=480&height=480",
    singer: "Black Sabbath"
    },
    {
    name: "Tainted Love",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142379014860861/Soft_Cell_-_Tainted_Love.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142378813521920/Soft_Cell_-_Tainted_Love.jpg",
    singer: "Soft Cell"
    },
    {
    name: "Freaks",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142379790803015/Surf_Curse_-_Freaks.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142379627237387/Surf_Curse_-_Freaks.jpg",
    singer: "Surf Curse"
    },
    {
    name: "Beat It",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142288505974794/Michael_Jackson_-_Beat_It.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142289848156180/Michael_Jackson_-_Thriller.jpg",
    singer: "Michael Jackson"
    },
    {
    name: "Deutschland",
    path: "https://cdn.discordapp.com/attachments/429749359593127936/971142348434190486/Rammstein_-_Deutschland.mp3",
    img: "https://media.discordapp.net/attachments/429749359593127936/971142348207693834/Rammstein_-_Deutschland.jpg?width=480&height=480",
    singer: "Rammstein"
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