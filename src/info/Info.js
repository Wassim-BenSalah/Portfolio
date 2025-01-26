import self from "../img/self.png"
import logo from "../img/logo.png"
import checkit from "../img/checkit.png"
import EMS from "../img/EMS.png"
import screenshot1_1 from "../img/project1/screenshot1.png"
import screenshot1_2 from "../img/project1/screenshot2.png"
import screenshot1_3 from "../img/project1/screenshot3.png"
import screenshot1_4 from "../img/project1/screenshot4.png"
import screenshot1_5 from "../img/project1/screenshot5.png"
import screenshot1_6 from "../img/project1/screenshot6.png"
import screenshot1_7 from "../img/project1/screenshot7.png"
import screenshot1_8 from "../img/project1/screenshot8.png"

import screenshot2_1 from "../img/project2/screenshot1.png"
import screenshot2_2 from "../img/project2/screenshot2.png"
import screenshot2_3 from "../img/project2/screenshot3.png"
import screenshot2_4 from "../img/project2/screenshot4.png"
import screenshot2_5 from "../img/project2/screenshot5.png"
import screenshot2_6 from "../img/project2/screenshot6.png"




/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: " Wassim",
    lastName: " Ben Salah",
    initials: logo, // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like

        {
            emoji: '📍',
            text: "M'saken, Sousse "
        },
        {
            emoji: "📞",
            text: "+216 28 624 448"
        },
        {
            emoji: "📧",
            text: "wbensalah170@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/amine.bensalah.967",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/wassim.ben.saleh/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Wassim-BenSalah",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/wassim-ben-salah-8151471b6/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "I’m Wassim Ben Salah, a computer science graduate with a degree in Software Engineering and Information Systems, currently pursuing a master’s in SRE & DevOps. I’m passionate about technology, with experience in web and mobile development, and strong leadership skills. You should hire me!",
    skills:
    {
        proficientWith: [
            'Python', 
            'Java', 
            'PHP', 
            'JavaScript', 
            'C/C++', 
            'Laravel', 
            'React', 
            'Jakarta EE',   
            'MySQL (SQL)', 
            'Docker'
        ],
        exposedTo: [
            'Android Studio (Java/Kotlin,XML)', 
            'DevOps Tools',            
            'MongoDB (NoSQL)', 
            '.NET Core'
        ]
    }
    
    ,
    hobbies: [
        {
            label: 'Boxing',
            emoji: '🥊'
        },
        {
            label: 'bodybuilding',
            emoji: '🏋️'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },

// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed

        {
            title: "Project 1",
            live: null,
            source: "https://github.com/Wassim-BenSalah/CheckIt",
            image: checkit,
            images: [screenshot1_1,screenshot1_2,screenshot1_3,screenshot1_4,screenshot1_5,screenshot1_6,screenshot1_7,screenshot1_8] // Capture d'écrans du projet
         },         
        {
            title: "Project 2",
            live: null,
            source: "https://github.com/Wassim-BenSalah/EMS",
            image: EMS,
            images: [screenshot2_1,screenshot2_2,screenshot2_5,screenshot2_6,screenshot2_3,screenshot2_4] // Capture d'écrans du projet

        }
    ]
}