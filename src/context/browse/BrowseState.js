import {useReducer} from "react";
import BrowseContext from "./browseContext";
import browseReducer from "./browseReducer";


const BrowseState = (props) =>{
    const initialState = {
        popularShows:{
            "page": 1,
            "results": [
                {
                    "backdrop_path": "/4N6zEMfZ57zNEQcM8gWeERFupMv.jpg",
                    "first_air_date": "2021-08-11",
                    "genre_ids": [
                        16,
                        10759,
                        10765
                    ],
                    "id": 91363,
                    "name": "What If...?",
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "What If...?",
                    "overview": "Taking inspiration from the comic books of the same name, each episode explores a pivotal moment from the Marvel Cinematic Universe and turns it on its head, leading the audience into uncharted territory.",
                    "popularity": 2690.261,
                    "poster_path": "/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg",
                    "vote_average": 8.6,
                    "vote_count": 500
                },
                {
                    "backdrop_path": null,
                    "first_air_date": "2013-09-13",
                    "genre_ids": [
                        10764
                    ],
                    "id": 81799,
                    "name": "Promi Big Brother",
                    "origin_country": [
                        "DE"
                    ],
                    "original_language": "de",
                    "original_name": "Promi Big Brother",
                    "overview": "",
                    "popularity": 1791.286,
                    "poster_path": null,
                    "vote_average": 9,
                    "vote_count": 2
                },
                {
                    "backdrop_path": "/pnyT1foDmmXTsho2DfxN2ePI8ix.jpg",
                    "first_air_date": "2018-06-12",
                    "genre_ids": [
                        18
                    ],
                    "id": 80240,
                    "name": "The Queen of Flow",
                    "origin_country": [
                        "CO"
                    ],
                    "original_language": "es",
                    "original_name": "La Reina del Flow",
                    "overview": "After spending seventeen years in prison unfairly, a talented songwriter seeks revenge on the men who sank her and killed her family.",
                    "popularity": 1364.097,
                    "poster_path": "/fuVuDYrs8sxvEolnYr0wCSvtyTi.jpg",
                    "vote_average": 8,
                    "vote_count": 1004
                },
                {
                    "backdrop_path": "/jOJP93WpQrmSXX16lQCNulwuUVO.jpg",
                    "first_air_date": "2021-06-09",
                    "genre_ids": [
                        18,
                        10765
                    ],
                    "id": 84958,
                    "name": "Loki",
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "Loki",
                    "overview": "After stealing the Tesseract during the events of “Avengers: Endgame,” an alternate version of Loki is brought to the mysterious Time Variance Authority, a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a “time variant” or help fix the timeline and stop a greater threat.",
                    "popularity": 1177.268,
                    "poster_path": "/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
                    "vote_average": 8.2,
                    "vote_count": 7249
                },
                {
                    "backdrop_path": "/rSqKcCgC3FvEqXZiY89OEe2vEov.jpg",
                    "first_air_date": "2021-08-06",
                    "genre_ids": [
                        18,
                        10765
                    ],
                    "id": 95281,
                    "name": "S.O.Z: Soldiers or Zombies",
                    "origin_country": [
                        "ES"
                    ],
                    "original_language": "es",
                    "original_name": "S.O.Z: Soldados o Zombies",
                    "overview": "Drug lord Alonso Marroquín escapes from a Mexican prison in an attempt to go into hiding. A US military secret experiment goes wrong and the elite unit from the Mexican Police that is after Marroquín gets infected, creating a new zombie species. The Army and the zombies end up at the drug lord’s hideout and a battle for human survival begins.",
                    "popularity": 1123.961,
                    "poster_path": "/lICAhPifWrXpscCvweCrUdCzCuG.jpg",
                    "vote_average": 7.4,
                    "vote_count": 224
                },
                {
                    "backdrop_path": "/zJZfxi8X3XPHAhxXseRugtnNVtt.jpg",
                    "first_air_date": "2013-12-02",
                    "genre_ids": [
                        16,
                        35,
                        10765,
                        10759
                    ],
                    "id": 60625,
                    "name": "Rick and Morty",
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "Rick and Morty",
                    "overview": "Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
                    "popularity": 1123.743,
                    "poster_path": "/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg",
                    "vote_average": 8.8,
                    "vote_count": 5134
                },
                {
                    "backdrop_path": "/iDbIEpCM9nhoayUDTwqFL1iVwzb.jpg",
                    "first_air_date": "2017-09-25",
                    "genre_ids": [
                        18
                    ],
                    "id": 71712,
                    "name": "The Good Doctor",
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "The Good Doctor",
                    "overview": "A young surgeon with Savant syndrome is recruited into the surgical unit of a prestigious hospital. The question will arise: can a person who doesn't have the ability to relate to people actually save their lives",
                    "popularity": 1053.259,
                    "poster_path": "/6tfT03sGp9k4c0J3dypjrI8TSAI.jpg",
                    "vote_average": 8.6,
                    "vote_count": 9099
                },
                {
                    "backdrop_path": "/eyG9srihv68ScRdEbJZj66WT4O0.jpg",
                    "first_air_date": "2014-10-07",
                    "genre_ids": [
                        18,
                        10765
                    ],
                    "id": 60735,
                    "name": "The Flash",
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "The Flash",
                    "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
                    "popularity": 910.581,
                    "poster_path": "/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg",
                    "vote_average": 7.7,
                    "vote_count": 8274
                },
                {
                    "backdrop_path": "/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg",
                    "first_air_date": "2017-01-26",
                    "genre_ids": [
                        9648,
                        18,
                        80
                    ],
                    "id": 69050,
                    "name": "Riverdale",
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "Riverdale",
                    "overview": "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.",
                    "popularity": 1213.927,
                    "poster_path": "/wRbjVBdDo5qHAEOVYoMWpM58FSA.jpg",
                    "vote_average": 8.6,
                    "vote_count": 11763
                },
                {
                    "backdrop_path": "/ta5oblpMlEcIPIS2YGcq9XEkWK2.jpg",
                    "first_air_date": "2016-01-25",
                    "genre_ids": [
                        80,
                        10765
                    ],
                    "id": 63174,
                    "name": "Lucifer",
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "Lucifer",
                    "overview": "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
                    "popularity": 861.62,
                    "poster_path": "/ekZobS8isE6mA53RAiGDG93hBxL.jpg",
                    "vote_average": 8.5,
                    "vote_count": 9883
                },
                {
                    "backdrop_path": "/pPKiIJEEcV0E1hpVcWRXyp73ZpX.jpg",
                    "first_air_date": "2021-02-23",
                    "genre_ids": [
                        10765,
                        10759,
                        18
                    ],
                    "id": 95057,
                    "name": "Superman & Lois",
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "Superman & Lois",
                    "overview": "After years of facing megalomaniacal supervillains, monsters wreaking havoc on Metropolis, and alien invaders intent on wiping out the human race, The Man of Steel aka Clark Kent and Lois Lane come face to face with one of their greatest challenges ever: dealing with all the stress, pressures and complexities that come with being working parents in today's society.",
                    "popularity": 588.818,
                    "poster_path": "/vlv1gn98GqMnKHLSh0dNciqGfBl.jpg",
                    "vote_average": 8.3,
                    "vote_count": 1145
                },
                {
                    "backdrop_path": "/aGULNElJVpSru19WP2pUjopPX1U.jpg",
                    "first_air_date": "2021-07-28",
                    "genre_ids": [
                        80,
                        10766
                    ],
                    "id": 128252,
                    "name": "The Snitch Cartel: Origins",
                    "origin_country": [
                        "CO"
                    ],
                    "original_language": "es",
                    "original_name": "El cartel de los sapos: El origen",
                    "overview": "In Cali during the '60s and '70s, two brothers juggle family, romance and the joint pursuit of a burning ambition: to rule Colombia's drug industry.",
                    "popularity": 726.979,
                    "poster_path": "/A17Rt6BLHno0puR1QXbsSKhBfA4.jpg",
                    "vote_average": 8.3,
                    "vote_count": 60
                },
                {
                    "backdrop_path": "/pXjpqrx65mlQskf9mfTWSszYODn.jpg",
                    "first_air_date": "2020-05-18",
                    "genre_ids": [
                        10765,
                        10759,
                        18
                    ],
                    "id": 80986,
                    "name": "DC's Stargirl",
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "DC's Stargirl",
                    "overview": "Courtney Whitmore, a smart, athletic and above all else kind girl, discovers her step-father has a secret: he used to be the sidekick to a superhero. \"Borrowing\" the long-lost hero’s cosmic staff, she becomes the unlikely inspiration for an entirely new generation of superheroes.",
                    "popularity": 1019.348,
                    "poster_path": "/rbkGgrEHOPyAEZqPk609QN1Ird6.jpg",
                    "vote_average": 7.9,
                    "vote_count": 781
                },
                {
                    "backdrop_path": "/thuQmpI9OZNEUTqkkNsNZVDsgNP.jpg",
                    "first_air_date": "2021-06-17",
                    "genre_ids": [
                        35,
                        18
                    ],
                    "id": 119243,
                    "name": "iCarly",
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "iCarly",
                    "overview": "Ten years after signing off of one of TV's most iconic shows, Carly, Spencer, and Freddie are back, navigating the next chapter of their lives, facing the uncertainties of life in their twenties.",
                    "popularity": 665.545,
                    "poster_path": "/s5k4GqTUGXeUdScNrjpYfiQLKHI.jpg",
                    "vote_average": 7.7,
                    "vote_count": 437
                },
                {
                    "backdrop_path": "/wvdWb5kTQipdMDqCclC6Y3zr4j3.jpg",
                    "first_air_date": "2010-10-31",
                    "genre_ids": [
                        10759,
                        18,
                        10765
                    ],
                    "id": 1402,
                    "name": "The Walking Dead",
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "The Walking Dead",
                    "overview": "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
                    "popularity": 690.77,
                    "poster_path": "/w21lgYIi9GeUH5dO8l3B9ARZbCB.jpg",
                    "vote_average": 8.1,
                    "vote_count": 11332
                },
                {
                    "backdrop_path": "/2748H9LoK2oQd9L7ofze8VjCGhS.jpg",
                    "first_air_date": "2020-07-13",
                    "genre_ids": [
                        18,
                        10766
                    ],
                    "id": 116479,
                    "name": "Anupamaa",
                    "origin_country": [
                        "IN"
                    ],
                    "original_language": "hi",
                    "original_name": "अनुपमा",
                    "overview": "Anupama had to sacrifice a lot to become an ideal wife, daughter-in-law, and mother. After a bitter realisation, she sets out to live on her own terms.",
                    "popularity": 704.669,
                    "poster_path": "/9R4Qtm01pNh0CzdoIyvHKefe5RL.jpg",
                    "vote_average": 7,
                    "vote_count": 9
                },
                {
                    "backdrop_path": null,
                    "first_air_date": "2021-03-29",
                    "genre_ids": [
                        10763
                    ],
                    "id": 122152,
                    "name": "Noovo Le Fil Québec",
                    "origin_country": [
                        "CA"
                    ],
                    "original_language": "fr",
                    "original_name": "Noovo Le Fil Québec",
                    "overview": "",
                    "popularity": 959.328,
                    "poster_path": "/kdpM5Iz37EWi6hRMWZvrQRxTpEF.jpg",
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "backdrop_path": "/uRIiWJ0MrdNjykxl4mp8mXEi308.jpg",
                    "first_air_date": "2018-10-12",
                    "genre_ids": [
                        10759,
                        10765,
                        18
                    ],
                    "id": 75450,
                    "name": "Titans",
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "Titans",
                    "overview": "A team of young superheroes led by Nightwing (formerly Batman's first Robin) form to combat evil and other perils.",
                    "popularity": 620.14,
                    "poster_path": "/xKnUNWFsAOaKIviIYBLei02Bauu.jpg",
                    "vote_average": 8.1,
                    "vote_count": 1639
                },
                {
                    "backdrop_path": "/2O3ZRECju00Jod6LrVB3uRgZMXK.jpg",
                    "first_air_date": "2021-07-07",
                    "genre_ids": [
                        10751,
                        35,
                        16
                    ],
                    "id": 90461,
                    "name": "Monsters at Work",
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "Monsters at Work",
                    "overview": "Ever since he was a kid, Tylor Tuskmon has dreamed of becoming a Scarer just like his idol James P. Sullivan, and now that dream is about to come true... or not. The day he arrives at Monsters Incorporated to begin his dream job as a Scarer, he learns that scaring is out and laughter is in! After being reassigned to the Monsters, Inc. Facilities Team, Tylor sets his sights on a new goal: figuring out how to be funny and becoming a Jokester.",
                    "popularity": 657.37,
                    "poster_path": "/2gxgwhcuSmI5xtexb0t9zGj43FS.jpg",
                    "vote_average": 7.2,
                    "vote_count": 871
                },
                {
                    "backdrop_path": "/3IIBf6VlwEyKAX4cN2XCM1gKdgM.jpg",
                    "first_air_date": "2005-03-27",
                    "genre_ids": [
                        18
                    ],
                    "id": 1416,
                    "name": "Grey's Anatomy",
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "Grey's Anatomy",
                    "overview": "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
                    "popularity": 682.685,
                    "poster_path": "/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg",
                    "vote_average": 8.2,
                    "vote_count": 6546
                }
            ],
            "total_pages": 500,
            "total_results": 10000
        },
        errors:null,
        onTheAir:null,
        topMovies:null,
        popularMovies: null
    }

    const [state, dispatch] = useReducer(browseReducer, initialState);

    return(
        <BrowseContext.Provider value={{popularShows:state.popularShows}} >
            {props.children}
        </BrowseContext.Provider>
    )
}
export default BrowseState;