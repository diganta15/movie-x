import {useReducer} from 'react';
import  moviesReducer from './moviesReducer';
import {GET_TOP_MOVIES} from '../types';
import MoviesContext from "./moviesContext";

const MoviesState = (props) =>{
    const initialState = {
        topMovies:{
            "page": 1,
            "results": [
                {
                    "adult": false,
                    "backdrop_path": "/gNBCvtYyGPbjPCT1k3MvJuNuXR6.jpg",
                    "genre_ids": [
                        35,
                        18,
                        10749
                    ],
                    "id": 19404,
                    "original_language": "hi",
                    "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
                    "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
                    "popularity": 20.108,
                    "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
                    "release_date": "1995-10-20",
                    "title": "Dilwale Dulhania Le Jayenge",
                    "video": false,
                    "vote_average": 8.7,
                    "vote_count": 3086
                },
                {
                    "adult": false,
                    "backdrop_path": "/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg",
                    "genre_ids": [
                        18,
                        80
                    ],
                    "id": 278,
                    "original_language": "en",
                    "original_title": "The Shawshank Redemption",
                    "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
                    "popularity": 55.779,
                    "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
                    "release_date": "1994-09-23",
                    "title": "The Shawshank Redemption",
                    "video": false,
                    "vote_average": 8.7,
                    "vote_count": 19449
                },
                {
                    "adult": false,
                    "backdrop_path": "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
                    "genre_ids": [
                        18,
                        80
                    ],
                    "id": 238,
                    "original_language": "en",
                    "original_title": "The Godfather",
                    "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
                    "popularity": 54.907,
                    "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
                    "release_date": "1972-03-14",
                    "title": "The Godfather",
                    "video": false,
                    "vote_average": 8.7,
                    "vote_count": 14668
                },
                {
                    "adult": false,
                    "backdrop_path": "/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg",
                    "genre_ids": [
                        10749
                    ],
                    "id": 724089,
                    "original_language": "en",
                    "original_title": "Gabriel's Inferno Part II",
                    "overview": "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
                    "popularity": 6.516,
                    "poster_path": "/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg",
                    "release_date": "2020-07-31",
                    "title": "Gabriel's Inferno Part II",
                    "video": false,
                    "vote_average": 8.7,
                    "vote_count": 1293
                },
                {
                    "adult": false,
                    "backdrop_path": "/fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg",
                    "genre_ids": [
                        10749,
                        35
                    ],
                    "id": 761053,
                    "original_language": "en",
                    "original_title": "Gabriel's Inferno Part III",
                    "overview": "The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.",
                    "popularity": 21.329,
                    "poster_path": "/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg",
                    "release_date": "2020-11-19",
                    "title": "Gabriel's Inferno Part III",
                    "video": false,
                    "vote_average": 8.7,
                    "vote_count": 851
                },
                {
                    "adult": false,
                    "backdrop_path": "/w2uGvCpMtvRqZg6waC1hvLyZoJa.jpg",
                    "genre_ids": [
                        10749
                    ],
                    "id": 696374,
                    "original_language": "en",
                    "original_title": "Gabriel's Inferno",
                    "overview": "An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love.",
                    "popularity": 10.354,
                    "poster_path": "/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg",
                    "release_date": "2020-05-29",
                    "title": "Gabriel's Inferno",
                    "video": false,
                    "vote_average": 8.6,
                    "vote_count": 2089
                },
                {
                    "adult": false,
                    "backdrop_path": "/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg",
                    "genre_ids": [
                        18,
                        36,
                        10752
                    ],
                    "id": 424,
                    "original_language": "en",
                    "original_title": "Schindler's List",
                    "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
                    "popularity": 30.598,
                    "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
                    "release_date": "1993-11-30",
                    "title": "Schindler's List",
                    "video": false,
                    "vote_average": 8.6,
                    "vote_count": 11687
                },
                {
                    "adult": false,
                    "backdrop_path": "/lQAe1hfWYDdYypRVdzTbdg6JYWP.jpg",
                    "genre_ids": [
                        18
                    ],
                    "id": 526702,
                    "original_language": "en",
                    "original_title": "Black Beauty",
                    "overview": "Born free in the American West, Black Beauty is a horse rounded up and brought to Birtwick Stables, where she meets spirited teenager Jo Green. The two forge a bond that carries Beauty through the different chapters, challenges and adventures.",
                    "popularity": 15.567,
                    "poster_path": "/5ZjMNJJabwBEnGVQoR2yoMEL9um.jpg",
                    "release_date": "2020-11-27",
                    "title": "Black Beauty",
                    "video": false,
                    "vote_average": 8.6,
                    "vote_count": 206
                },
                {
                    "adult": false,
                    "backdrop_path": "/poec6RqOKY9iSiIUmfyfPfiLtvB.jpg",
                    "genre_ids": [
                        18,
                        80
                    ],
                    "id": 240,
                    "original_language": "en",
                    "original_title": "The Godfather: Part II",
                    "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
                    "popularity": 38.736,
                    "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
                    "release_date": "1974-12-20",
                    "title": "The Godfather: Part II",
                    "video": false,
                    "vote_average": 8.6,
                    "vote_count": 8785
                },
                {
                    "adult": false,
                    "backdrop_path": "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
                    "genre_ids": [
                        10749,
                        16,
                        18
                    ],
                    "id": 372058,
                    "original_language": "ja",
                    "original_title": "君の名は。",
                    "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
                    "popularity": 129.476,
                    "poster_path": "/q719jXXEzOoYaps6babgKnONONX.jpg",
                    "release_date": "2016-08-26",
                    "title": "Your Name.",
                    "video": false,
                    "vote_average": 8.6,
                    "vote_count": 7750
                },
                {
                    "adult": false,
                    "backdrop_path": "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
                    "genre_ids": [
                        16,
                        10751,
                        14
                    ],
                    "id": 129,
                    "original_language": "ja",
                    "original_title": "千と千尋の神隠し",
                    "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
                    "popularity": 65.423,
                    "poster_path": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
                    "release_date": "2001-07-20",
                    "title": "Spirited Away",
                    "video": false,
                    "vote_average": 8.5,
                    "vote_count": 11682
                },
                {
                    "adult": false,
                    "backdrop_path": "/l5K9elugftlcyIHHm4nylvsn26X.jpg",
                    "genre_ids": [
                        18
                    ],
                    "id": 255709,
                    "original_language": "ko",
                    "original_title": "소원",
                    "overview": "After 8-year-old So-won narrowly survives a brutal sexual assault, her family labors to help her heal while coping with their own rage and grief.",
                    "popularity": 8.495,
                    "poster_path": "/x9yjkm9gIz5qI5fJMUTfBnWiB2o.jpg",
                    "release_date": "2013-10-02",
                    "title": "Hope",
                    "video": false,
                    "vote_average": 8.5,
                    "vote_count": 203
                },
                {
                    "adult": false,
                    "backdrop_path": "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
                    "genre_ids": [
                        35,
                        53,
                        18
                    ],
                    "id": 496243,
                    "original_language": "ko",
                    "original_title": "기생충",
                    "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
                    "popularity": 116.69,
                    "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
                    "release_date": "2019-05-30",
                    "title": "Parasite",
                    "video": false,
                    "vote_average": 8.5,
                    "vote_count": 11939
                },
                {
                    "adult": false,
                    "backdrop_path": "/9guoVF7zayiiUq5ulKQpt375VIy.jpg",
                    "genre_ids": [
                        16,
                        28,
                        14,
                        12
                    ],
                    "id": 592350,
                    "original_language": "ja",
                    "original_title": "僕のヒーローアカデミア THE MOVIE ヒーローズ：ライジング",
                    "overview": "Class 1-A visits Nabu Island where they finally get to do some real hero work. The place is so peaceful that it's more like a vacation … until they're attacked by a villain with an unfathomable Quirk! His power is eerily familiar, and it looks like Shigaraki had a hand in the plan. But with All Might retired and citizens' lives on the line, there's no time for questions. Deku and his friends are the next generation of heroes, and they're the island's only hope.",
                    "popularity": 356.461,
                    "poster_path": "/zGVbrulkupqpbwgiNedkJPyQum4.jpg",
                    "release_date": "2019-12-20",
                    "title": "My Hero Academia: Heroes Rising",
                    "video": false,
                    "vote_average": 8.5,
                    "vote_count": 773
                },
                {
                    "adult": false,
                    "backdrop_path": "/5Nz25DPXfQaSpDgce42Y3kFg9G4.jpg",
                    "genre_ids": [
                        14,
                        18,
                        80
                    ],
                    "id": 497,
                    "original_language": "en",
                    "original_title": "The Green Mile",
                    "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
                    "popularity": 40.875,
                    "poster_path": "/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
                    "release_date": "1999-12-10",
                    "title": "The Green Mile",
                    "video": false,
                    "vote_average": 8.5,
                    "vote_count": 12625
                },
                {
                    "adult": false,
                    "backdrop_path": "/5MgMCnslrxQfOfaq6T5ndkLlcCk.jpg",
                    "genre_ids": [
                        16,
                        35,
                        10749,
                        18,
                        14
                    ],
                    "id": 572154,
                    "original_language": "ja",
                    "original_title": "青春ブタ野郎はゆめみる少女の夢を見ない",
                    "overview": "In Fujisawa, Sakuta Azusagawa is in his second year of high school. Blissful days with his girlfriend and upperclassman, Mai Sakurajima, are interrupted by the appearance of his first crush, Shoko Makinohara.",
                    "popularity": 163.75,
                    "poster_path": "/pvdBzHOWjrLl69lUswPiVnI8szv.jpg",
                    "release_date": "2019-06-15",
                    "title": "Rascal Does Not Dream of a Dreaming Girl",
                    "video": false,
                    "vote_average": 8.5,
                    "vote_count": 293
                },
                {
                    "adult": false,
                    "backdrop_path": "/yHtB4KHNigx3ZoxDvQbW2SOXGfq.jpg",
                    "genre_ids": [
                        16,
                        10751,
                        12,
                        14
                    ],
                    "id": 441130,
                    "original_language": "en",
                    "original_title": "Wolfwalkers",
                    "overview": "In a time of superstition and magic, when wolves are seen as demonic and nature an evil to be tamed, a young apprentice hunter comes to Ireland with her father to wipe out the last pack. But when she saves a wild native girl, their friendship leads her to discover the world of the Wolfwalkers and transform her into the very thing her father is tasked to destroy.",
                    "popularity": 19.923,
                    "poster_path": "/ehAKuE48okTuonq6TpsNQj8vFTC.jpg",
                    "release_date": "2020-10-26",
                    "title": "Wolfwalkers",
                    "video": false,
                    "vote_average": 8.5,
                    "vote_count": 528
                },
                {
                    "adult": false,
                    "backdrop_path": "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
                    "genre_ids": [
                        18
                    ],
                    "id": 389,
                    "original_language": "en",
                    "original_title": "12 Angry Men",
                    "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
                    "popularity": 27.685,
                    "poster_path": "/ppd84D2i9W8jXmsyInGyihiSyqz.jpg",
                    "release_date": "1957-04-10",
                    "title": "12 Angry Men",
                    "video": false,
                    "vote_average": 8.5,
                    "vote_count": 5769
                },
                {
                    "adult": false,
                    "backdrop_path": "/alQqTpmEkxSLgajfEYTsTH6nAKB.jpg",
                    "genre_ids": [
                        12,
                        35
                    ],
                    "id": 40096,
                    "original_language": "pt",
                    "original_title": "O Auto da Compadecida",
                    "overview": "The lively Jack the Cricket and the sly Chicó are poor guys living in the hinterland who cheat a bunch of people in a small in Northeastern Brazil. When they die, they have to be judged by Christ, the Devil and the Virgin Mary before they are admitted to paradise.",
                    "popularity": 8.72,
                    "poster_path": "/m8eFedsS7vQCZCS8WGp5n1bVD0q.jpg",
                    "release_date": "2000-09-15",
                    "title": "A Dog's Will",
                    "video": false,
                    "vote_average": 8.5,
                    "vote_count": 801
                },
                {
                    "adult": false,
                    "backdrop_path": "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
                    "genre_ids": [
                        53,
                        80
                    ],
                    "id": 680,
                    "original_language": "en",
                    "original_title": "Pulp Fiction",
                    "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
                    "popularity": 44.886,
                    "poster_path": "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
                    "release_date": "1994-09-10",
                    "title": "Pulp Fiction",
                    "video": false,
                    "vote_average": 8.5,
                    "vote_count": 21590
                }
            ],
            "total_pages": 450,
            "total_results": 8993
        },
        popularMovies:{
            "page": 1,
            "results": [
                {
                    "adult": false,
                    "backdrop_path": "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
                    "genre_ids": [
                        28,
                        12,
                        14
                    ],
                    "id": 436969,
                    "original_language": "en",
                    "original_title": "The Suicide Squad",
                    "overview": "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
                    "popularity": 9101.854,
                    "poster_path": "/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg",
                    "release_date": "2021-07-28",
                    "title": "The Suicide Squad",
                    "video": false,
                    "vote_average": 8.1,
                    "vote_count": 2286
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
                    "popularity": 7760.301,
                    "poster_path": "/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
                    "release_date": "2021-07-28",
                    "title": "Jungle Cruise",
                    "video": false,
                    "vote_average": 8,
                    "vote_count": 1699
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
                    "popularity": 3602.033,
                    "poster_path": "/ttpKJ7XQxDZV252KNEHXtykYT41.jpg",
                    "release_date": "2021-07-30",
                    "title": "The Last Mercenary",
                    "video": false,
                    "vote_average": 7.1,
                    "vote_count": 226
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
                    "popularity": 3492.69,
                    "poster_path": "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
                    "release_date": "2021-07-07",
                    "title": "Black Widow",
                    "video": false,
                    "vote_average": 7.8,
                    "vote_count": 4218
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
                    "popularity": 2940.303,
                    "poster_path": "/niw2AKHz6XmwiRMLWaoyAOAti0G.jpg",
                    "release_date": "2021-06-10",
                    "title": "Infinite",
                    "video": false,
                    "vote_average": 7.4,
                    "vote_count": 705
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
                    "popularity": 2748.452,
                    "poster_path": "/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",
                    "release_date": "2021-07-08",
                    "title": "Space Jam: A New Legacy",
                    "video": false,
                    "vote_average": 7.5,
                    "vote_count": 1743
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
                    "popularity": 3975.725,
                    "poster_path": "/acCS12FVUQ7blkC8qEbuXbsWEs2.jpg",
                    "release_date": "2021-08-11",
                    "title": "Free Guy",
                    "video": false,
                    "vote_average": 8.1,
                    "vote_count": 132
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
                    "popularity": 2949.98,
                    "poster_path": "/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
                    "release_date": "2021-05-19",
                    "title": "F9",
                    "video": false,
                    "vote_average": 7.7,
                    "vote_count": 2728
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
                    "popularity": 2099.958,
                    "poster_path": "/kOVko9u2CSwpU8zGj14Pzei6Eco.jpg",
                    "release_date": "2021-07-28",
                    "title": "Bartkowiak",
                    "video": false,
                    "vote_average": 6.2,
                    "vote_count": 70
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
                    "popularity": 2054.012,
                    "poster_path": "/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
                    "release_date": "2021-06-30",
                    "title": "The Tomorrow War",
                    "video": false,
                    "vote_average": 8.2,
                    "vote_count": 3435
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
                    "popularity": 2057.865,
                    "poster_path": "/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg",
                    "release_date": "2021-07-01",
                    "title": "The Boss Baby: Family Business",
                    "video": false,
                    "vote_average": 7.8,
                    "vote_count": 1166
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
                    "popularity": 2034.37,
                    "poster_path": "/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
                    "release_date": "2021-06-17",
                    "title": "Luca",
                    "video": false,
                    "vote_average": 8.1,
                    "vote_count": 3880
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
                    "popularity": 1731.973,
                    "poster_path": "/lB068qa6bQ0QKYKyC2xnYGvYjl7.jpg",
                    "release_date": "2021-06-30",
                    "title": "The Forever Purge",
                    "video": false,
                    "vote_average": 7.6,
                    "vote_count": 957
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
                    "popularity": 1719.442,
                    "poster_path": "/gYZAHan5CHPFXORpQMvOjCTug4E.jpg",
                    "release_date": "2021-07-15",
                    "title": "Jolt",
                    "video": false,
                    "vote_average": 6.8,
                    "vote_count": 492
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
                    "popularity": 1501.798,
                    "poster_path": "/aOu6PJVO9RyGAzdUwG6fupu0gpz.jpg",
                    "release_date": "2021-08-12",
                    "title": "Don't Breathe 2",
                    "video": false,
                    "vote_average": 7.8,
                    "vote_count": 27
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
                    "popularity": 1359.955,
                    "poster_path": "/wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg",
                    "release_date": "2021-05-26",
                    "title": "Cruella",
                    "video": false,
                    "vote_average": 8.4,
                    "vote_count": 4739
                },
                {
                    "adult": false,
                    "backdrop_path": "/heMC3jAjQPNSlr1n9mZKUQ58EOE.jpg",
                    "genre_ids": [
                        28,
                        12,
                        18
                    ],
                    "id": 672322,
                    "original_language": "ja",
                    "original_title": "るろうに剣心 最終章 The Beginning",
                    "overview": "Before he was a protector, Kenshin was a fearsome assassin known as Battosai. But when he meets the gentle Tomoe Yukishiro, a beautiful young woman who carries a huge burden in her heart which would change the life of Battosai forever.",
                    "popularity": 1111.115,
                    "poster_path": "/rODS466qSdrwMlGdbUwPENhDN2c.jpg",
                    "release_date": "2021-06-04",
                    "title": "Rurouni Kenshin: The Beginning",
                    "video": false,
                    "vote_average": 7.7,
                    "vote_count": 103
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
                    "popularity": 1218.498,
                    "poster_path": "/M7SUK85sKjaStg4TKhlAVyGlz3.jpg",
                    "release_date": "2021-04-22",
                    "title": "Wrath of Man",
                    "video": false,
                    "vote_average": 7.9,
                    "vote_count": 1875
                },
                {
                    "adult": false,
                    "backdrop_path": "/iJ2HVOZT9Kjayrhy21pbGIJs9ey.jpg",
                    "genre_ids": [
                        28,
                        12,
                        14
                    ],
                    "id": 525660,
                    "original_language": "cn",
                    "original_title": "真·三国无双",
                    "overview": "Warlords, warriors and statesmen wage a battle for supremacy in this fantasy tale based on the hit video games and the \"Romance of the Three Kingdoms.\"",
                    "popularity": 1062.321,
                    "poster_path": "/7BCTdek5LFHglcgl7shsm7igJAH.jpg",
                    "release_date": "2021-04-29",
                    "title": "Dynasty Warriors",
                    "video": false,
                    "vote_average": 6.5,
                    "vote_count": 54
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
                    "popularity": 1577.436,
                    "poster_path": "/eRLlrhbdYE7XN6VtcZKy6o2BsOw.jpg",
                    "release_date": "2021-07-30",
                    "title": "Vivo",
                    "video": false,
                    "vote_average": 7.7,
                    "vote_count": 175
                }
            ],
            "total_pages": 500,
            "total_results": 10000
        },
        upcoming:{
            "dates": {
                "maximum": "2021-09-10",
                "minimum": "2021-08-16"
            },
            "page": 1,
            "results": [
                {
                    "adult": false,
                    "backdrop_path": "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
                    "genre_ids": [
                        28,
                        12,
                        14
                    ],
                    "id": 436969,
                    "original_language": "en",
                    "original_title": "The Suicide Squad",
                    "overview": "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
                    "popularity": 9101.854,
                    "poster_path": "/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg",
                    "release_date": "2021-07-28",
                    "title": "The Suicide Squad",
                    "video": false,
                    "vote_average": 8.1,
                    "vote_count": 2286
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
                    "popularity": 3975.725,
                    "poster_path": "/acCS12FVUQ7blkC8qEbuXbsWEs2.jpg",
                    "release_date": "2021-08-11",
                    "title": "Free Guy",
                    "video": false,
                    "vote_average": 8.1,
                    "vote_count": 132
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
                    "popularity": 2949.98,
                    "poster_path": "/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
                    "release_date": "2021-05-19",
                    "title": "F9",
                    "video": false,
                    "vote_average": 7.7,
                    "vote_count": 2728
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
                    "popularity": 2940.303,
                    "poster_path": "/niw2AKHz6XmwiRMLWaoyAOAti0G.jpg",
                    "release_date": "2021-06-10",
                    "title": "Infinite",
                    "video": false,
                    "vote_average": 7.4,
                    "vote_count": 705
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
                    "popularity": 2057.865,
                    "poster_path": "/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg",
                    "release_date": "2021-07-01",
                    "title": "The Boss Baby: Family Business",
                    "video": false,
                    "vote_average": 7.8,
                    "vote_count": 1166
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
                    "popularity": 2034.37,
                    "poster_path": "/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
                    "release_date": "2021-06-17",
                    "title": "Luca",
                    "video": false,
                    "vote_average": 8.1,
                    "vote_count": 3880
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
                    "popularity": 1731.973,
                    "poster_path": "/lB068qa6bQ0QKYKyC2xnYGvYjl7.jpg",
                    "release_date": "2021-06-30",
                    "title": "The Forever Purge",
                    "video": false,
                    "vote_average": 7.6,
                    "vote_count": 957
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
                    "popularity": 1501.798,
                    "poster_path": "/aOu6PJVO9RyGAzdUwG6fupu0gpz.jpg",
                    "release_date": "2021-08-12",
                    "title": "Don't Breathe 2",
                    "video": false,
                    "vote_average": 7.8,
                    "vote_count": 27
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
                    "popularity": 1218.498,
                    "poster_path": "/M7SUK85sKjaStg4TKhlAVyGlz3.jpg",
                    "release_date": "2021-04-22",
                    "title": "Wrath of Man",
                    "video": false,
                    "vote_average": 7.9,
                    "vote_count": 1875
                },
                {
                    "adult": false,
                    "backdrop_path": "/6FzuNrApEc71aJ3CwwkpadbNled.jpg",
                    "genre_ids": [
                        28,
                        35,
                        80
                    ],
                    "id": 581644,
                    "original_language": "en",
                    "original_title": "The Misfits",
                    "overview": "After being recruited by a group of unconventional thieves, renowned criminal Richard Pace finds himself caught up in an elaborate gold heist that promises to have far-reaching implications on his life and the lives of countless others.",
                    "popularity": 888.99,
                    "poster_path": "/dPOyYnCkRbWAEem85N3VFpQODf5.jpg",
                    "release_date": "2021-06-10",
                    "title": "The Misfits",
                    "video": false,
                    "vote_average": 5.5,
                    "vote_count": 102
                },
                {
                    "adult": false,
                    "backdrop_path": "/ok7RdHhVngnwkvKj09tvtOvypG.jpg",
                    "genre_ids": [
                        80,
                        18,
                        53,
                        9648
                    ],
                    "id": 649409,
                    "original_language": "en",
                    "original_title": "No Sudden Move",
                    "overview": "A group of criminals are brought together under mysterious circumstances and have to work together to uncover what's really going on when their simple job goes completely sideways.",
                    "popularity": 696.849,
                    "poster_path": "/34BmdJkdvRweC3xJJFlOFQ2IbYc.jpg",
                    "release_date": "2021-06-24",
                    "title": "No Sudden Move",
                    "video": false,
                    "vote_average": 6.6,
                    "vote_count": 173
                },
                {
                    "adult": false,
                    "backdrop_path": "/uWeffFhprUohUL5GO3YfQqdsVrI.jpg",
                    "genre_ids": [
                        28,
                        80,
                        53,
                        18
                    ],
                    "id": 615457,
                    "original_language": "en",
                    "original_title": "Nobody",
                    "overview": "Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a \"nobody.\" When two thieves break into his home one night, Hutch's unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.",
                    "popularity": 560.74,
                    "poster_path": "/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
                    "release_date": "2021-03-18",
                    "title": "Nobody",
                    "video": false,
                    "vote_average": 8.4,
                    "vote_count": 3049
                },
                {
                    "adult": false,
                    "backdrop_path": "/iTgM25ftE7YtFgZwUZupVp8A61S.jpg",
                    "genre_ids": [
                        9648,
                        53,
                        27
                    ],
                    "id": 631843,
                    "original_language": "en",
                    "original_title": "Old",
                    "overview": "A group of families on a tropical holiday discover that the secluded beach where they are staying is somehow causing them to age rapidly – reducing their entire lives into a single day.",
                    "popularity": 596.035,
                    "poster_path": "/cGLL4SY6jFjjUZkz2eFxgtCtGgK.jpg",
                    "release_date": "2021-07-21",
                    "title": "Old",
                    "video": false,
                    "vote_average": 6.3,
                    "vote_count": 389
                },
                {
                    "adult": false,
                    "backdrop_path": "/g15PR8eQV9DehSWlagvdnJZqoRq.jpg",
                    "genre_ids": [
                        27,
                        53,
                        9648
                    ],
                    "id": 602734,
                    "original_language": "en",
                    "original_title": "Spiral: From the Book of Saw",
                    "overview": "Working in the shadow of an esteemed police veteran, brash Detective Ezekiel “Zeke” Banks and his rookie partner take charge of a grisly investigation into murders that are eerily reminiscent of the city’s gruesome past.  Unwittingly entrapped in a deepening mystery, Zeke finds himself at the center of the killer’s morbid game.",
                    "popularity": 392.578,
                    "poster_path": "/lcyKve7nXRFgRyms9M1bndNkKOx.jpg",
                    "release_date": "2021-05-12",
                    "title": "Spiral: From the Book of Saw",
                    "video": false,
                    "vote_average": 6.4,
                    "vote_count": 711
                },
                {
                    "adult": false,
                    "backdrop_path": "/ouOojiypBE6CD1aqcHPVq7cJf2R.jpg",
                    "genre_ids": [
                        18,
                        53,
                        28
                    ],
                    "id": 578701,
                    "original_language": "en",
                    "original_title": "Those Who Wish Me Dead",
                    "overview": "A young boy finds himself pursued by two assassins in the Montana wilderness, with a survival expert determined to protect him, and a forest fire threatening to consume them all.",
                    "popularity": 386.582,
                    "poster_path": "/xCEg6KowNISWvMh8GvPSxtdf9TO.jpg",
                    "release_date": "2021-05-05",
                    "title": "Those Who Wish Me Dead",
                    "video": false,
                    "vote_average": 7,
                    "vote_count": 745
                },
                {
                    "adult": false,
                    "backdrop_path": "/1TkU6gJNpNPZzZdQVvdJCTDi32f.jpg",
                    "genre_ids": [
                        28,
                        35,
                        53
                    ],
                    "id": 522931,
                    "original_language": "en",
                    "original_title": "Hitman's Wife's Bodyguard",
                    "overview": "The world’s most lethal odd couple – bodyguard Michael Bryce and hitman Darius Kincaid – are back on another life-threatening mission. Still unlicensed and under scrutiny, Bryce is forced into action by Darius's even more volatile wife, the infamous international con artist Sonia Kincaid. As Bryce is driven over the edge by his two most dangerous protectees, the trio get in over their heads in a global plot and soon find that they are all that stand between Europe and a vengeful and powerful madman.",
                    "popularity": 294.914,
                    "poster_path": "/6zwGWDpY8Zu0L6W4SYWERBR8Msw.jpg",
                    "release_date": "2021-06-14",
                    "title": "Hitman's Wife's Bodyguard",
                    "video": false,
                    "vote_average": 7,
                    "vote_count": 511
                },
                {
                    "adult": false,
                    "backdrop_path": "/dyxBVVoSAITq7wQ0i9myPWObJ8J.jpg",
                    "genre_ids": [
                        16,
                        10751,
                        12,
                        35
                    ],
                    "id": 675445,
                    "original_language": "en",
                    "original_title": "PAW Patrol: The Movie",
                    "overview": "Ryder and the pups are called to Adventure City to stop Mayor Humdinger from turning the bustling metropolis into a state of chaos.",
                    "popularity": 330.023,
                    "poster_path": "/ic0intvXZSfBlYPIvWXpU1ivUCO.jpg",
                    "release_date": "2021-08-09",
                    "title": "PAW Patrol: The Movie",
                    "video": false,
                    "vote_average": 8.1,
                    "vote_count": 11
                },
                {
                    "adult": false,
                    "backdrop_path": "/2OFg5p9yarI5zZsUWKCRgBgPctj.jpg",
                    "genre_ids": [
                        28,
                        12
                    ],
                    "id": 568620,
                    "original_language": "en",
                    "original_title": "Snake Eyes: G.I. Joe Origins",
                    "overview": "After saving the life of their heir apparent, tenacious loner Snake Eyes is welcomed into an ancient Japanese clan called the Arashikage where he is taught the ways of the ninja warrior. But, when secrets from his past are revealed, Snake Eyes' honor and allegiance will be tested – even if that means losing the trust of those closest to him.",
                    "popularity": 272.992,
                    "poster_path": "/uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg",
                    "release_date": "2021-07-22",
                    "title": "Snake Eyes: G.I. Joe Origins",
                    "video": false,
                    "vote_average": 7.1,
                    "vote_count": 65
                },
                {
                    "adult": false,
                    "backdrop_path": null,
                    "genre_ids": [
                        10749,
                        18
                    ],
                    "id": 744275,
                    "original_language": "en",
                    "original_title": "After We Fell",
                    "overview": "Just as Tessa's life begins to become unglued, nothing is what she thought it would be. Not her friends nor her family. The only person that she should be able to rely on is Hardin, who is furious when he discovers the massive secret that she's been keeping. Before Tessa makes the biggest decision of her life, everything changes because of revelations about her family.",
                    "popularity": 270.069,
                    "poster_path": "/oOZITZodAja6optBgLh8ZZrgzbb.jpg",
                    "release_date": "2021-09-01",
                    "title": "After We Fell",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/AmzVV7kqds8BJBXwnQtx5YpqFdU.jpg",
                    "genre_ids": [
                        18,
                        10749
                    ],
                    "id": 638449,
                    "original_language": "en",
                    "original_title": "The Last Letter From Your Lover",
                    "overview": "A young journalist in London becomes obsessed with a series of letters she discovers that recounts an intense star-crossed love affair from the 1960s.",
                    "popularity": 248.783,
                    "poster_path": "/fDKK51YdOfu9pTmSRw7sHUhGFxm.jpg",
                    "release_date": "2021-07-23",
                    "title": "The Last Letter From Your Lover",
                    "video": false,
                    "vote_average": 7.5,
                    "vote_count": 161
                }
            ],
            "total_pages": 23,
            "total_results": 459
        },
        topShows:null,
        search:null,
        loading:true,
        errors:null
    }

    const [state, dispatch] = useReducer(moviesReducer,initialState);

    //TODO Get Top Movies
    //TODO Send Search Request


    return(
        <MoviesContext.Provider value={{popularMovies:state.popularMovies,topMovies:state.topMovies,upcoming:state.upcoming}}>
            {props.children}
        </MoviesContext.Provider>
    )

}
export default MoviesState;
