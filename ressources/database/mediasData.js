const movies = [
{
    id:'avengers',
    imgSrc : require ('../moviesImage/avengers.png'), 
    title:'AVENGERS 3: INFINITY WAR', 
    date:'2018',
    réalisateurs:'Joe Russo, Anthony Russo',
    actors:'Robert Downey Jr, Chris Hemsworth, Mark Ruffalo',
    synopsis :'Les Avengers et leurs alliés devront être prêts à tout sacrifier pour neutraliser le redoutable Thanos avant que son attaque éclair ne conduise à la destruction complète de l’univers.',
    video : 'https://www.youtube.com/embed/eIWs2IUr3Vs'
   
},
{
    id:'sangfroid',
    imgSrc : require ('../moviesImage/sangfroid.png'), 
    title:'SANG FROID', 
    date:'2019',
    réalisateurs:'Hans Petter Moland',
    actors:'Liam Neeson, Tom Bateman, Tom Jackson',
    synopsis :'Bienvenue à Kehoe, luxueuse station de ski du Colorado. La police locale n\'y est pas franchement très sollicitée jusqu\'au jour où le fils d\'un conducteur de chasse-neige, Nels Coxman, est assassiné sur ordre de Viking...',
    video : 'https://www.youtube.com/embed/6r12e1bAh_o'

},
{
    id:'oblivion',
    imgSrc : require ('../moviesImage/oblivion.png'), 
    title:'OBLIVION', 
    date:'2013',
    réalisateurs:'Joseph Kosinski',
    actors:'Tom Cruise, Olga Kurylenko, Morgan Freeman',
    synopsis :'2077 : Jack Harper, en station sur la planète Terre dont toute la population a été évacuée, est en charge de la sécurité et de la réparation des drones...',
    video :'https://www.youtube.com/embed/XH1su3FVEA4'
},
{
    id:'starwars',
    imgSrc : require ('../moviesImage/starwars.png'), 
    title:'STAR WARS - LES DERNIERS JEDI', 
    date:'2017',
    réalisateurs:'Rian Johnson',
    actors:'Daisy Ridley, John Boyega, Oscar Isaac',
    synopsis :'Les héros du Réveil de la force rejoignent les figures légendaires de la galaxie dans une aventure épique qui révèle des secrets ancestraux sur la Force et entraîne de surprenantes révélations sur le passé…',
    video : 'https://www.youtube.com/embed/wY708Ky2SG8'
},
{
    id:'equalizer',
    imgSrc : require ('../moviesImage/equalizer.png'), 
    title:'EQUALIZER', 
    date:'2014',
    réalisateurs:'Antoine Fuqua',
    actors:'Denzel Washington, Chloë Grace Moretz, Marton Csokas',
    synopsis :'Pour McCall, la page était tournée. Il pensait en avoir fini avec son mystérieux passé. Mais lorsqu’il fait la connaissance de Teri, une jeune fille victime de gangsters russes violents, il lui est impossible de ne pas réagir...',
    video : 'https://www.youtube.com/embed/Ydmk1_1_Gi4'
},
{
    id:'assasinscreed',
    imgSrc : require ('../moviesImage/assasinscreed.png'), 
    title:'ASSASSIN SCREED', 
    date:'2016',
    réalisateurs:'Justin Kurzel',
    actors:' Michael Fassbender, Marion Cotillard, Jeremy Irons',
    synopsis :'Grâce à une technologie révolutionnaire qui libère la mémoire génétique, Callum Lynch revit les aventures de son ancêtre Aguilar, dans l’Espagne du XVe siècle...',
    video : 'https://www.youtube.com/embed/n6rqkhgwMVA'
},
{
    id:'avatar',
    imgSrc : require ('../moviesImage/avatar.png'), 
    title:'AVATAR', 
    date:'2009',
    réalisateurs:'James Cameron',
    actors:'Sam Worthington, Zoe Saldana, Sigourney Weaver',
    synopsis :'Malgré sa paralysie, Jake Sully, un ancien marine immobilisé dans un fauteuil roulant, est resté un combattant au plus profond de son être...',
    video : 'https://www.youtube.com/embed/O1CzgULNRGs'
}
]



const series = [
    {
        id:'gameofthrones',
        imgSrc : require ('../seriesImage/gameofthrones.jpg'), 
        title:'GAME OF THRONES - saison 8', 
        date:'2019',
        réalisateurs:'D.B. Weiss, David Benioff',
        actors:'Emilia Clarke, Peter Dinklage, Kit Harington',
        synopsis :'Après un été de dix années, un hiver rigoureux s\'abat sur le Royaume avec la promesse d\'un avenir des plus sombres. Pendant ce temps, complots et rivalités se jouent sur le continent pour s\'emparer du Trône de Fer...',
        video : 'https://www.youtube.com/embed/bU06sjTW1DQ'
    
         
    },
    {
        id:'walkingdead',
        imgSrc : require ('../seriesImage/walkingdead.jpg'), 
        title:'The Walking Dead - saison 9', 
        date:'2018',
        réalisateurs:'Glen Mazzara, Frank Darabont, Scott M. Gimple',
        actors:'Andrew Lincoln, Norman Reedus, Lauren Cohan...',
        synopsis :'Un an et demi après la défaite de Negan, les différentes communautés de survivants se sont unifiées et vivent désormais en harmonie...',
        video : 'https://www.youtube.com/embed/Z6mfmD6WRQ8'   
    },
    {
        id:'mrrobot',
        imgSrc : require ('../seriesImage/mrrobot.jpg'), 
        title:'Mr. Robot - saison 3', 
        date:'2017',
        réalisateurs:'Sam Esmail',
        actors:'Rami Malek, Christian Slater, Carly Chaikin',
        synopsis :'Elliot est un jeune programmeur anti-social qui souffre d\'un trouble du comportement qui le pousse à croire qu\'il ne peut rencontrer des gens qu\'en les hackant. Il travaille pour une firme spécialisée dans la cyber-sécurité...',
        video : 'https://www.youtube.com/embed/uml6bz9ygxA'
    
         
    },
    {
        id:'breakingbad',
        imgSrc : require ('../seriesImage/breakingbad.jpg'), 
        title:'Breaking Bad', 
        date:'2008 - 2013',
        réalisateurs:'Michelle Maclaren, Peter Gould',
        actors:'Bryan Cranston, Aaron Paul',
        synopsis :'Atteint d\'un cancer incurable, le professeur de chimie Walter White décide de tout mettre en oeuvre pour mettre définitivement à l\'abri sa famille. Sa solution ? Fabriquer et vendre du crystal meth. Il fait appel à Jesse..',
        video : 'https://www.youtube.com/embed/dlnKTmdqxn4'   
    },
    {
        id:'the100',
        imgSrc : require ('../seriesImage/the100.jpg'), 
        title:'The 100', 
        date:'Depuis 2014',
        réalisateurs:'Jason Rothenberg',
        actors:'Eliza Taylor, Paige Turco, Bob Morley',
        synopsis :'Après une apocalypse nucléaire causée par l\'Homme lors d\'une troisième Guerre Mondiale, les 318 survivants recensés se réfugient dans des stations spatiales et parviennent à y vivre et à se reproduire, atteignant le nombre de 4000..',
        video : 'https://www.youtube.com/embed/HlRxbBaET5w'   
    },
    {
        id:'chambers',
        imgSrc : require ('../seriesImage/chambers.jpg'), 
        title:'CHAMBERS', 
        date:'Depuis 2019',
        réalisateurs:'Leah Rachel, Akela Cooper',
        actors:'Sivan Alyra Rose, Uma Thurman, Griffin Powell-Arcand',
        synopsis :'Après avoir survécu à une crise cardiaque, une jeune femme devient obsédée par le mystère entourant la greffe de cœur qui lui a sauvé la vie. Plus elle se rapproche de la vérité sur la mort soudaine de son donneur... ',
        video : 'https://www.youtube.com/embed/6U72MhuPv_A'    
    },
    {
        id:'peakyblinders',
        imgSrc : require ('../seriesImage/peakyblinders.jpg'), 
        title:'Peaky Blinders', 
        date:'Depuis 2013',
        réalisateurs:'Steven Knight',
        actors:'Cillian Murphy, Helen McCrory',
        synopsis :'En 1919, la révolte gronde dans le Birmingham de l\'après-Guerre. Les "Peaky Blinders", dont plusieurs membres sont issus de la famille Shelby, comptent parmi les éléments les plus dangereux. Campbell...',
        video : 'https://www.youtube.com/embed/AGI1-57Q_I4'   
    }
    ]



    const games = [ 
        {
            id:'daysgone',
            imgSrc: require ('../gamesImage/daysgone.jpg'),
            title: 'Days Gone',
            date:'2019',
            plateforme:'PS4',
            synopsis :'Jeu d\'aventure en monde ouvert, Days Gone nous emmène dans un monde apocalyptique. Deux ans après une pandémie qui a ravagé la planète, Deacon St John, ancien biker, essaie tant bien que mal de survivre suite à une tragédie personnelle',
            video:'https://www.youtube.com/embed/pH6_o7oZK6Y'

        },

        {
            id:'sekiro',
            imgSrc: require ('../gamesImage/sekiro.jpg'),
            title: 'Sekiro Shadows Die Twice',
            date:'2019',
            plateforme:'PS4 - PC - ONE',
            synopsis :'Sekiro Shadows Die Twice est un jeu d\'action qui vous envoie dans le Japon féodal, à la fin du XVIème siècle. Incarnez "le loup à un bras" : un étrange samouraï équipé d\'une « prothèse shinobi » en guise de main gauche et partez à la poursuite d\'un jeune seigneur enlevé.',
            video:'https://www.youtube.com/embed/gs4T0R_BAj4'

        },
        {
            id:'mortalkombat',
            imgSrc: require ('../gamesImage/mortalkombat.jpg'),
            title: 'Mortal Kombat 11',
            date:'2019',
            plateforme:'PS4 - ONE',
            synopsis :'Mortal Kombat 11, développé par NetherRealm Studios et édité par Warner Bros. Games, est le dernier venu de la saga des jeux de combat Mortal Kombat. Ce dernier prévoit une customisation poussée pour créer de nombreuses variations de Kombattants.',
            video:'https://www.youtube.com/embed/39cburdHXTM'

        },
        {
            id:'fifa19',
            imgSrc: require ('../gamesImage/fifa19.jpg'),
            title: 'FIFA 19',
            date:'2018',
            plateforme:'Switch, PC, PlayStation, Xbox ',
            synopsis :'FIFA 19 est un jeu de simulation de football édité par Electronic Arts. La grande nouveauté de cette année est l\'ajout de la Ligue des Champions aux compétitions licenciées.Comme chaque saison, les traditionnelles améliorations apportées aux graphismes.',
            video:'https://www.youtube.com/embed/zX0AV6yxyrQ'
        },

        {
            id:'call',
            imgSrc: require ('../gamesImage/call.jpg'),
            title: 'Call of Duty: Black Ops IIII',
            date:'2018',
            plateforme:'PC, PlayStation 4, Xbox One ',
            synopsis :'Call of Duty : Black Ops IIII est la nouvelle entrée dans la célèbre licence d\'Activison. Elle nous promet un univers futuriste comme nous avons pu le voir par le passé mais sans les jetpacks. Nous aurons également l\'occasion d\'arpenter un multijoueur en point ..',
            video:'https://www.youtube.com/embed/mM10MaPVTac'
        },
        
        {
            id:'division2',
            imgSrc: require ('../gamesImage/division2.jpg'),
            title: 'Tom Clancy\'s The Division 2',
            date:'2019',
            plateforme:'PC, PlayStation 4, Xbox One ',
            synopsis :'Tom Clancy\'s The Division est un jeu d\'action en ligne où le joueur est au cœur d\'un univers post-apocalyptique. Ce dernier doit jongler entre coopération, stratégie et technologie pour survivre dans un environnement hostile. Partez en compagnie de la Division pour sauver Washington D.C.',
            video:'https://www.youtube.com/embed/hXPcM0iuPMo'
        },
        
        {
            id:'rally',
            imgSrc: require ('../gamesImage/rally.jpg'),
            title: 'DiRT Rally 2.0',
            date:'2019',
            plateforme:'PC, PlayStation 4, Xbox One ',
            synopsis :'DiRT Rally 2.0 est la suite du jeu de rallye DiRT Rally. Cet épisode vous permet de profiter des courses sous licence du championnat du monde de rallycross FIA, ainsi que quelques-uns des lieux les plus mythiques du rallye : Nouvelle-Zélande, Argentine, Espagne, Pologne, Australie et États-Unis. ',
            video:'https://www.youtube.com/embed/3erim-GPL2A'
        }
    ]

    

export {movies, series, games}

























