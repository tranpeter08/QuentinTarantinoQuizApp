const STORAGE = [
    [   //1
        'In what movie did Christoph Waltz play a German SS Officer Named Hans Landa?',
        [
            'Inglorious Basterds',
            'Django Unchained',
            'Pulp Fiction',
            'Reservoir Dogs'
        ],
        'Inglorious Basterds',
        `Christoph Waltz played the egotistical and ambitious SS Colonel, "Hans Landa," in the movie, "Inglorious Basterds".`,
        `https://i.imgur.com/mO3Buom.png`,
        `Hans Landa laughing from the movie Ingrloious Basterds`
    ],[  //2
        "In Glorious Basterds, during the French tavern scene where Bridget von Hammersmark and the rest of the undercover Basterds were discussing their plans, what did British Intelligence Corps Lieutenant Archie Hicox do to blow his cover?",
        [
            'Wearing the wrong uniform',
            'Mispronouncing a German word',
            'Revealing his english accent',
            'Using the incorrect German hand gesture for the number “3”'
        ],
        'Using the incorrect German hand gesture for the number “3”',
        `Lieutenant Archie Hicox blew his cover by using the wrong German hand gesture for the number "3".`,
        `https://i.imgur.com/OAWhNsk.png`,
        `Archie Hicox incorrectly making the German hand gesture for the number 3 in front of a German Officer Superior.`
    ],[ //3
        'In Pulp Fiction, what scene was done in reverse and was filmed backwards to make it look more “real”?',
        [
            'When Vincent Vega was driving in his 1964 Chevrolet Malibu',
            'When Vincent Vega had to stab Mia Wallace in the chest.',
            'Vincent and Mia’s dance scene.',
            'The “Gimp” scene.'
        ],
        'When Vincent Vega had to stab Mia Wallace in the chest.',
        `When Vincent Vega had to stab Mia Wallace in the chest, to make the scene look more real, Quentin Tarantino decided to shoot the scene in reverse and run the film backwards.`,
        `https://i.imgur.com/YCmTGtG.png`,
        `Vincent Vega about to stab Mia Whallace in the chest with an adrenaline shot in Pulp Fiction.`
    ],[ //4
        'In Pulp Fiction, what song was playing during Vincent and Mia’s dance scene?',
        [
        '"The Twist" by Chubby Checker',
        '"Hound Dog" by Elvis Presley',
        '"You can never tell" by Chuck Berry',
        '"Mess Around" by Ray Charles'
        ],
        '"You can never tell" by Chuck Berry',
        `"You can never tell" by Chuck Berry was played during Vincent and Mia’s dance scene.`,
        `https://i.imgur.com/dwO9iXI.png`,
        `Vincent Vega and Mia Whallace dancing in Pulp Fiction`

    ],[  //5
        'In what movie did Quentin Tarantino feature a band called “The 5.6.7.8’s” and their music?',
        [
            'Jackie Brown',
            'Kill Bill Vol.1',
            'Pulp Fiction',
            'Django Unchained'
        ],
        'Kill Bill Vol.1',
        `The “The 5.6.7.8’s” were featured in Kill Bill Vol.1. Quentin Tarainto actually heard the group playing in a store while visiting Japan. When asked to buy the CD, the store owner refused to sell it to Quentin.`,
        `https://i.imgur.com/kBQUoVg.jpg`,
        `The 5.6.7.8's playing music in the movie Kill Bill.`
    ],[ //6
        'In Kill Bill Vol. 2, what martial arts move was used to kill, Bill?',
        [
            'Five Point Palm Exploding Heart Technique',
            'Crane Kick',
            'Throat Punch',
            '12-6 Elbow Strike'
        ],
        'Five Point Palm Exploding Heart Technique',
        `The "Five Point Palm Exploding Heart Technique" was used to ultimately kill Bill. It was taught to Beatrix Kiddo by her martial arts master, Pei Mei.`,
        `https://i.imgur.com/DM9mJTz.jpg`,
        `Beatrix Kiddo performing the Five Point Palm Exploding Heart Technique on Bill from Kill Bill`
    ],[ //7
        'In what movie did actor Leonardo DiCaprio accidentally shed his own blood on camera by slamming his hand onto a piece of glass?',
        [
            'Inglorious Basterds',
            'Django Unchained',
            'The Hateful Eight',
            'The Revenant'
        ],
        'Django Unchained',
        `This occured in "Inglorious Basterds" during the dining room scene at Calvin Candy's plantation.`,
        `https://i.imgur.com/6lq5tDo.jpg`,
        `Calvin Candy staring back with malevolent satisfaction with a cigarette is his left, bloodied, hand from Django Unchained.`
    ],[ //8
        'Which Actor/Actress has been in the most Tarantino movies?',
        [   'Samuel L. Jackson',
            'Uma Therman',
            'Tim Roth',
            'Michael Madsen'
        ],
        'Samuel L. Jackson',
        `Currently, Samuel L. Jackson has been in the most Tarantino movies. He's been in 6 of Tarantino's movies. `,
        `https://i.imgur.com/hlEOEAM.jpg`,
        `Samuel L. Jackson pointing a gun torwards his target that is below and to the right of him from Pulp Fiction.`
    ],[ //9
        'In what movie did Quentin Tarantino actually choked an actor/actress for a scene with his bare hands?',
        [
            'Reservoir Dogs',
            'Kill Bill',
            'Django Unchained',
            'Inglorious Basterds'
        ],
        'Inglorious Basterds',
        `In "Inglorious Basterds," in the scene where Bridget Von Hammersmark was being choked to death, the hands that appear on screen acutally belong to Quentin Tarantino.`,
        `https://i.imgur.com/IGXqsS3.jpg`,
        `Hans Landa and Bridget Von Hammersmark, both sitting on a chair, facing each other in a suspensful scene from Inglorious Basterds.`
    ],[ //10
    	'In what movie did Quentin Tarantino actually spat on an actor/actress for a scene?',
        [
            'Reservoir Dogs',
            'Inglorious Basterds',
            'Kill Bill',
            'Django'
        ],
        'Kill Bill',
        `In "Kill Bill Vol. 1," while Beatrix Kiddo was beaten and lying on the ground in her wedding dress, she was spat on. The spitting was performed by Quentin Tarantino.`,
        `https://i.imgur.com/e0taOpP.png`,
        `Bill and Beatrix Kiddo standing together in a wedding gown, speaking to Beatrix's soon to be husband from Kill Bill Vol.1.`
    ]
];

const RESULTS = {

    badResult:
    {
        msg1:'Well... ',
        msg2:'You are not a huge fan of Tarantino Movies. Watch some more of his films and try the quiz again.',
        src: 'https://i.imgur.com/RqoDdGj.png',
        alt: 'Picture of Jules Winnfield with an extremely upset face from the movie "Pulp Fiction"'
    },
    goodResult:
    {
        msg1:'Congratulations! ',
        msg2:'You are a true Tarantino Movie fan!',
        src:'https://i.imgur.com/0kYlLFS.jpg',
        alt:'Quentin Tarantino giving a thumbs up'
    }
}