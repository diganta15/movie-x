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
        popularMovies: {
            "page": 1,
            "results": [
                {
                    "adult": false,
                    "backdrop_path": "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
                    "genre_ids": [
                        28,
                        12,
                        14,
                        35
                    ],
                    "id": 436969,
                    "original_language": "en",
                    "original_title": "The Suicide Squad",
                    "overview": "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
                    "popularity": 7243.123,
                    "poster_path": "/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg",
                    "release_date": "2021-07-28",
                    "title": "The Suicide Squad",
                    "video": false,
                    "vote_average": 8.1,
                    "vote_count": 2357
                },
                {
                    "adult": false,
                    "backdrop_path": "/7WJjFviFBffEJvkAms4uWwbcVUk.jpg",
                    "genre_ids": [
                        12,
                        14,
                        35,
                        28
                    ],
                    "id": 451048,
                    "original_language": "en",
                    "original_title": "Jungle Cruise",
                    "overview": "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine.",
                    "popularity": 6680.739,
                    "poster_path": "/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
                    "release_date": "2021-07-28",
                    "title": "Jungle Cruise",
                    "video": false,
                    "vote_average": 7.9,
                    "vote_count": 1745
                },
                {
                    "adult": false,
                    "backdrop_path": "/j28p5VwI5ieZnNwfeuZ5Ve3mPsn.jpg",
                    "genre_ids": [
                        35,
                        28,
                        12,
                        878
                    ],
                    "id": 550988,
                    "original_language": "en",
                    "original_title": "Free Guy",
                    "overview": "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
                    "popularity": 3357.633,
                    "poster_path": "/acCS12FVUQ7blkC8qEbuXbsWEs2.jpg",
                    "release_date": "2021-08-11",
                    "title": "Free Guy",
                    "video": false,
                    "vote_average": 8,
                    "vote_count": 159
                },
                {
                    "adult": false,
                    "backdrop_path": "/rUoGZuscSG4fQP3I56ndadu2A8E.jpg",
                    "genre_ids": [
                        28,
                        35
                    ],
                    "id": 729720,
                    "original_language": "fr",
                    "original_title": "Le Dernier Mercenaire",
                    "overview": "A mysterious former secret service agent must urgently return to France when his estranged son  is falsely accused of arms and drug trafficking by the government, following a blunder by an overzealous bureaucrat and a mafia operation.",
                    "popularity": 2650.893,
                    "poster_path": "/ttpKJ7XQxDZV252KNEHXtykYT41.jpg",
                    "release_date": "2021-07-30",
                    "title": "The Last Mercenary",
                    "video": false,
                    "vote_average": 7.1,
                    "vote_count": 239
                },
                {
                    "adult": false,
                    "backdrop_path": "/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg",
                    "genre_ids": [
                        28,
                        12,
                        53,
                        878
                    ],
                    "id": 497698,
                    "original_language": "en",
                    "original_title": "Black Widow",
                    "overview": "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
                    "popularity": 2564.501,
                    "poster_path": "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
                    "release_date": "2021-07-07",
                    "title": "Black Widow",
                    "video": false,
                    "vote_average": 7.8,
                    "vote_count": 4248
                },
                {
                    "adult": false,
                    "backdrop_path": "/wjQXZTlFM3PVEUmKf1sUajjygqT.jpg",
                    "genre_ids": [
                        878,
                        28,
                        53
                    ],
                    "id": 581726,
                    "original_language": "en",
                    "original_title": "Infinite",
                    "overview": "Evan McCauley has skills he never learned and memories of places he has never visited. Self-medicated and on the brink of a mental breakdown, a secret group that call themselves “Infinites” come to his rescue, revealing that his memories are real.",
                    "popularity": 2451.867,
                    "poster_path": "/niw2AKHz6XmwiRMLWaoyAOAti0G.jpg",
                    "release_date": "2021-06-10",
                    "title": "Infinite",
                    "video": false,
                    "vote_average": 7.4,
                    "vote_count": 718
                },
                {
                    "adult": false,
                    "backdrop_path": "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
                    "genre_ids": [
                        28,
                        80,
                        53
                    ],
                    "id": 385128,
                    "original_language": "en",
                    "original_title": "F9",
                    "overview": "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
                    "popularity": 2330.877,
                    "poster_path": "/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
                    "release_date": "2021-05-19",
                    "title": "F9",
                    "video": false,
                    "vote_average": 7.7,
                    "vote_count": 2762
                },
                {
                    "adult": false,
                    "backdrop_path": "/8s4h9friP6Ci3adRGahHARVd76E.jpg",
                    "genre_ids": [
                        16,
                        35,
                        10751,
                        878
                    ],
                    "id": 379686,
                    "original_language": "en",
                    "original_title": "Space Jam: A New Legacy",
                    "overview": "When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.",
                    "popularity": 2327.176,
                    "poster_path": "/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",
                    "release_date": "2021-07-08",
                    "title": "Space Jam: A New Legacy",
                    "video": false,
                    "vote_average": 7.5,
                    "vote_count": 1756
                },
                {
                    "adult": false,
                    "backdrop_path": "/7BkkPaXnYo82T2pLSJP7GRyhD2S.jpg",
                    "genre_ids": [
                        10749,
                        35
                    ],
                    "id": 727745,
                    "original_language": "en",
                    "original_title": "The Kissing Booth 3",
                    "overview": "It’s the summer before Elle heads to college, and she has a secret decision to make. Elle has been accepted into Harvard, where boyfriend Noah is matriculating, and also Berkeley, where her BFF Lee is headed and has to decide if she should stay or not.",
                    "popularity": 1825.125,
                    "poster_path": "/c7xcqnMDVQ5v1hJBm3AZ5YikNe6.jpg",
                    "release_date": "2021-08-11",
                    "title": "The Kissing Booth 3",
                    "video": false,
                    "vote_average": 7.7,
                    "vote_count": 692
                },
                {
                    "adult": false,
                    "backdrop_path": "/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg",
                    "genre_ids": [
                        16,
                        35,
                        10751,
                        14
                    ],
                    "id": 508943,
                    "original_language": "en",
                    "original_title": "Luca",
                    "overview": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
                    "popularity": 1791.708,
                    "poster_path": "/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
                    "release_date": "2021-06-17",
                    "title": "Luca",
                    "video": false,
                    "vote_average": 8.1,
                    "vote_count": 3899
                },
                {
                    "adult": false,
                    "backdrop_path": "/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg",
                    "genre_ids": [
                        16,
                        35,
                        12,
                        10751
                    ],
                    "id": 459151,
                    "original_language": "en",
                    "original_title": "The Boss Baby: Family Business",
                    "overview": "The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
                    "popularity": 1759.371,
                    "poster_path": "/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg",
                    "release_date": "2021-07-01",
                    "title": "The Boss Baby: Family Business",
                    "video": false,
                    "vote_average": 7.8,
                    "vote_count": 1170
                },
                {
                    "adult": false,
                    "backdrop_path": "/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
                    "genre_ids": [
                        28,
                        878
                    ],
                    "id": 588228,
                    "original_language": "en",
                    "original_title": "The Tomorrow War",
                    "overview": "The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.",
                    "popularity": 1604.985,
                    "poster_path": "/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
                    "release_date": "2021-06-30",
                    "title": "The Tomorrow War",
                    "video": false,
                    "vote_average": 8.2,
                    "vote_count": 3455
                },
                {
                    "adult": false,
                    "backdrop_path": "/6tPOZmNQ1tbzlhcMmyhYN1a1dEh.jpg",
                    "genre_ids": [
                        28,
                        53
                    ],
                    "id": 809968,
                    "original_language": "pl",
                    "original_title": "Bartkowiak",
                    "overview": "After his brother dies in a car crash, a disgraced MMA fighter takes over the family nightclub — and soon learns his sibling's death wasn’t an accident.",
                    "popularity": 1573.198,
                    "poster_path": "/kOVko9u2CSwpU8zGj14Pzei6Eco.jpg",
                    "release_date": "2021-07-28",
                    "title": "Bartkowiak",
                    "video": false,
                    "vote_average": 6.1,
                    "vote_count": 72
                },
                {
                    "adult": false,
                    "backdrop_path": "/2BftdeCkD7uf68KUxaKRBxtsmZZ.jpg",
                    "genre_ids": [
                        16,
                        10751,
                        35
                    ],
                    "id": 449406,
                    "original_language": "en",
                    "original_title": "Vivo",
                    "overview": "A music-loving kinkajou named Vivo embarks on the journey of a lifetime to fulfill his destiny and deliver a love song for an old friend.",
                    "popularity": 1531.853,
                    "poster_path": "/eRLlrhbdYE7XN6VtcZKy6o2BsOw.jpg",
                    "release_date": "2021-07-30",
                    "title": "Vivo",
                    "video": false,
                    "vote_average": 7.7,
                    "vote_count": 188
                },
                {
                    "adult": false,
                    "backdrop_path": "/wPjtacig0kIkVcTQmXoNt6jbMwo.jpg",
                    "genre_ids": [
                        28,
                        35
                    ],
                    "id": 617502,
                    "original_language": "en",
                    "original_title": "Jolt",
                    "overview": "Lindy is an acid-tongued woman with rage issues who controls her temper by shocking herself with an electrode vest. One day she makes a connection with Justin, who gives her a glimmer of hope for a shock-free future, but when he’s murdered she launches herself on a revenge-fueled rampage in pursuit of his killer.",
                    "popularity": 1463.268,
                    "poster_path": "/gYZAHan5CHPFXORpQMvOjCTug4E.jpg",
                    "release_date": "2021-07-15",
                    "title": "Jolt",
                    "video": false,
                    "vote_average": 6.8,
                    "vote_count": 498
                },
                {
                    "adult": false,
                    "backdrop_path": "/tehpKMsls621GT9WUQie2Ft6LmP.jpg",
                    "genre_ids": [
                        27,
                        28,
                        53
                    ],
                    "id": 602223,
                    "original_language": "en",
                    "original_title": "The Forever Purge",
                    "overview": "All the rules are broken as a sect of lawless marauders decides that the annual Purge does not stop at daybreak and instead should never end as they chase a group of immigrants who they want to punish because of their harsh historical past.",
                    "popularity": 1379.329,
                    "poster_path": "/lB068qa6bQ0QKYKyC2xnYGvYjl7.jpg",
                    "release_date": "2021-06-30",
                    "title": "The Forever Purge",
                    "video": false,
                    "vote_average": 7.6,
                    "vote_count": 966
                },
                {
                    "adult": false,
                    "backdrop_path": "/hB8ypGAAq1YiyyTdCSQeFoXHPXW.jpg",
                    "genre_ids": [
                        53,
                        27
                    ],
                    "id": 482373,
                    "original_language": "en",
                    "original_title": "Don't Breathe 2",
                    "overview": "The Blind Man has been hiding out for several years in an isolated cabin and has taken in and raised a young girl orphaned from a devastating house fire. Their quiet life together is shattered when a group of criminals kidnap the girl, forcing the Blind Man to leave his safe haven to save her.",
                    "popularity": 1312.696,
                    "poster_path": "/aOu6PJVO9RyGAzdUwG6fupu0gpz.jpg",
                    "release_date": "2021-08-12",
                    "title": "Don't Breathe 2",
                    "video": false,
                    "vote_average": 7.6,
                    "vote_count": 32
                },
                {
                    "adult": false,
                    "backdrop_path": "/las0P4Dua54XrZ73VQmGUaH1z0U.jpg",
                    "genre_ids": [
                        16,
                        28,
                        18,
                        878
                    ],
                    "id": 283566,
                    "original_language": "ja",
                    "original_title": "シン・エヴァンゲリオン劇場版:||",
                    "overview": "In the aftermath of the Fourth Impact, stranded without their Evangelions, Shinji, Asuka, and Rei search for refuge in the desolate red remains of Tokyo-3. But the danger to the world is far from over. A new impact is looming on the horizon—one that will prove to be the true end of Evangelion.",
                    "popularity": 1223.921,
                    "poster_path": "/jDwZavHo99JtGsCyRzp4epeeBHx.jpg",
                    "release_date": "2021-03-08",
                    "title": "Evangelion: 3.0+1.0 Thrice Upon a Time",
                    "video": false,
                    "vote_average": 8.8,
                    "vote_count": 183
                },
                {
                    "adult": false,
                    "backdrop_path": "/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
                    "genre_ids": [
                        35,
                        80
                    ],
                    "id": 337404,
                    "original_language": "en",
                    "original_title": "Cruella",
                    "overview": "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
                    "popularity": 1125.416,
                    "poster_path": "/wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg",
                    "release_date": "2021-05-26",
                    "title": "Cruella",
                    "video": false,
                    "vote_average": 8.4,
                    "vote_count": 4756
                },
                {
                    "adult": false,
                    "backdrop_path": "/77tui163estZrQ78NBggqDB4n2C.jpg",
                    "genre_ids": [
                        28,
                        80,
                        53
                    ],
                    "id": 637649,
                    "original_language": "en",
                    "original_title": "Wrath of Man",
                    "overview": "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
                    "popularity": 1079.783,
                    "poster_path": "/M7SUK85sKjaStg4TKhlAVyGlz3.jpg",
                    "release_date": "2021-04-22",
                    "title": "Wrath of Man",
                    "video": false,
                    "vote_average": 7.9,
                    "vote_count": 1884
                }
            ],
            "total_pages": 500,
            "total_results": 10000
        },
    }

    const [state, dispatch] = useReducer(browseReducer, initialState);

    return(
        <BrowseContext.Provider value={{popularShows:state.popularShows,popularMovies:state.popularMovies}} >
            {props.children}
        </BrowseContext.Provider>
    )
}
export default BrowseState;