module.exports = [
    {
        path: '/projects/director',
        slug: 'director',
        name: 'Arduino Director',
        img: '/projects/directorThumb.jpg',
        description: 'Director is an open-source Arduino-based animatronics control software. It gives users a web-interface to plan out and test animatronic motion, without having to do any programming. The application is built with VueJS and Socket.io to communicate to a NodeJS server. Arduino communication happens over Serial from the server, and interfaces with a C++ library that handles the commands',
        images: [

        ],
        buttons: [
            { "title": "Documentation", "url": "https://github.com/johnventions/Arduino-Director"},
            { "title": "Demo Video", "url": "https://www.youtube.com/watch?v=AfgRimX_5pM"}
        ]
    },
    {
        path: '/projects/popcleveland',
        slug: 'popcleveland',
        name: 'Pop-Cleveland',
        img: '/projects/popThumb.jpg',
        description: 'Pop-Cleveland is a combination sketch comedy show and trivia night performed by the Common Room Theatre in Cleveland, OH. Audience members interact with the show and trivia in real time through their web-browser. The experience is built on Angular, with a NodeJS Express server and Socket.io backend. The questions are planned ahead of time in a custom interface and stored in MongoDB. ',
        images: [
        ]
    },
    {
        path: '/projects/drawsaster',
        slug: 'drawsaster',
        name: 'Drawsaster',
        img: '/projects/drawsasterThumb.jpg',
        description: 'Drawsaster is a telephone-style drawing game that you can play on your phone. Players all start by writing a phrase, which another player will have to draw. The next player then writes a phrase that describes that new image... then repeat that pattern until every phrase makes its way to every player. At the end, everyone gets to see how their phrase transformed from start to finish. The front end is built with javascript and the SignaturePad JS library. The back-end is built with PHP and stores all of the data in a MySQL database',
        images: [
            {
                s: '/projects/drawsaster/menu.png',
                l: '/projects/drawsaster/menu.png',
            },
        ]
    },
    {
        path: '/projects/litebrite',
        slug: 'litebrite',
        name: 'IoT Lite-Brite',
        img: '/projects/lbThumb.png',
        description: 'The Internet Lite-Brite is a wireless internet connected drawing system connecting a Particle Photon microcontroller to WS2812 RGB LEDs. Users can access the custom drawing app online and instantly update the lights in the physical world. The web interface is created with javascript and sends data to the microcontroller via the PHP API of the Particle Cloud. The current state of the lite-brite is stored in a MySQL database to allow multiple users to see what is currently drawn.',
        images: [
            {
                s: '/projects/litebrite/lb1.jpg',
                l: '/projects/litebrite/lb1.jpg',
            },
            {
                s: '/projects/litebrite/lb1at.jpg',
                l: '/projects/litebrite/lb1a.jpg',
            },
            {
                s: '/projects/litebrite/lb2.jpg',
                l: '/projects/litebrite/lb2.jpg',
            },
            {
                s: '/projects/litebrite/lb2at.png',
                l: '/projects/litebrite/lb2a.jpg',
            }
        ]
    },
    {
        path: '/projects/deathlyhallows',
        slug: 'deathlyhallows',
        name: 'Deathly Hallows Lamp',
        img: '/projects/dhThumb.png',
        description: 'The Deathly Hallows lamp is a back-lit lamp based on the iconic Deathly Hallows symbol from J.K. Rowling`s Harry Potter Universe. The structure of the lamp was drawn in CAD and laser cut from 1/2" pine. The lamp is backlit by blue 3528-LEDs.',
        images: [
            {
                s: '/projects/dh/dh1t.jpg',
                l: '/projects/dh/dh1.jpg',
            },
        ]
    }
]
