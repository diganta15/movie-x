import {useReducer} from "react";
import SearchContext from "./searchContext";
import searchReducer from "./searchReducer";
import {SET_LOADING} from "../types";


const SearchState = (props) =>{
	const initialState = {
		searchResultsMovies:{
			"page": 1,
			"results": [
				{
					"adult": false,
					"backdrop_path": "/cY3BC7LOLyeemyQZ21jfuqZTSu6.jpg",
					"genre_ids": [
						53
					],
					"id": 7183,
					"original_language": "en",
					"original_title": "Perfect Stranger",
					"overview": "A journalist goes undercover to ferret out businessman Harrison Hill as her best friend's killer. Posing as one of his temps, she enters into a game of online cat-and-mouse.",
					"popularity": 19.878,
					"poster_path": "/fKkabVcVNKTTgsR4ElklI5bXDU1.jpg",
					"release_date": "2007-04-11",
					"title": "Perfect Stranger",
					"video": false,
					"vote_average": 5.8,
					"vote_count": 645
				},
				{
					"adult": false,
					"backdrop_path": "/uzIGtyS6bbnJzGsPL93WCF1FWm8.jpg",
					"genre_ids": [
						12,
						28,
						14
					],
					"id": 1865,
					"original_language": "en",
					"original_title": "Pirates of the Caribbean: On Stranger Tides",
					"overview": "Captain Jack Sparrow crosses paths with a woman from his past, and he's not sure if it's love -- or if she's a ruthless con artist who's using him to find the fabled Fountain of Youth. When she forces him aboard the Queen Anne's Revenge, the ship of the formidable pirate Blackbeard, Jack finds himself on an unexpected adventure in which he doesn't know who to fear more: Blackbeard or the woman from his past.",
					"popularity": 76.591,
					"poster_path": "/keGfSvCmYj7CvdRx36OdVrAEibE.jpg",
					"release_date": "2011-05-14",
					"title": "Pirates of the Caribbean: On Stranger Tides",
					"video": false,
					"vote_average": 6.5,
					"vote_count": 11138
				},
				{
					"adult": false,
					"backdrop_path": null,
					"genre_ids": [
						18
					],
					"id": 182026,
					"original_language": "en",
					"original_title": "Stranger Things",
					"overview": "Oona, a recent graduate in anthropology, has returned to her dead mother’s seaside cottage in southern England to prepare it for sale. Her arrival disturbs Mani, a wary vagrant who has been squatting on the property.",
					"popularity": 13.826,
					"poster_path": "/4TKdguyacjYrC1Hnbi3PjSP8r3M.jpg",
					"release_date": "2013-04-05",
					"title": "Stranger Things",
					"video": false,
					"vote_average": 8.3,
					"vote_count": 36
				},
				{
					"adult": false,
					"backdrop_path": "/ka6WYdSS8JipvOLegWvVWhFHDRc.jpg",
					"genre_ids": [
						28,
						53
					],
					"id": 38166,
					"original_language": "en",
					"original_title": "The Stranger",
					"overview": "Pro wrestling legend Steve Austin stars as a man with no name, no memory and absolutely nothing left to lose. But when he finds himself hunted by both the FBI and the Russian mob, this amnesiac decides to fight back. Pursuit cannot stop him. Torture will not break him. And with every beating, bullet and betrayal, he’ll remember another piece of the horror that took away his career, his family and his identity. Now the puzzle is nearly complete, and one man is about to take back his past…by ending a whole lot of futures. Erica Cerra (“Eureka”) and Adam Beach (Flags of Our Fathers) star in this explosive action-thriller about collateral damage, stone cold vengeance, and a double-crossed killing machine known only as The Stranger",
					"popularity": 5.955,
					"poster_path": "/fXg4MXYruDKrssFmfzKlf2TINJb.jpg",
					"release_date": "2010-06-01",
					"title": "The Stranger",
					"video": false,
					"vote_average": 4.9,
					"vote_count": 47
				},
				{
					"adult": false,
					"backdrop_path": "/eyrUZ6jvg1Qy3jUz5YH8U4UkFLP.jpg",
					"genre_ids": [
						9648,
						18,
						27,
						36
					],
					"id": 455108,
					"original_language": "en",
					"original_title": "The Little Stranger",
					"overview": "In a dusty post-war summer in rural Warwickshire, a doctor is called to a patient at lonely Hundreds Hall. Home to the Ayres family for over two centuries, the Georgian house is now in decline. But are the Ayreses haunted by something more sinister than a dying way of life?",
					"popularity": 9.804,
					"poster_path": "/mfLl93043kOHPJfenkawjookil8.jpg",
					"release_date": "2018-08-30",
					"title": "The Little Stranger",
					"video": false,
					"vote_average": 5.7,
					"vote_count": 192
				},
				{
					"adult": false,
					"backdrop_path": "/lF3ojoSmCZgrh9nyy2lOxoWL7KD.jpg",
					"genre_ids": [
						27
					],
					"id": 10053,
					"original_language": "en",
					"original_title": "When a Stranger Calls",
					"overview": "Far away from the site of a gruesome murder, a teenager named Jill Johnson arrives at a luxurious home for a baby-sitting job. With the children fast asleep, she settles in for what she expects to be an ordinary evening. Soon, the ringing of a phone and the frightening words of a sadistic caller turn Jill's routine experience into a night of terror.",
					"popularity": 13.291,
					"poster_path": "/h0ZmU7BZDWBucq1FvblfeAWUkad.jpg",
					"release_date": "2006-02-03",
					"title": "When a Stranger Calls",
					"video": false,
					"vote_average": 5.7,
					"vote_count": 789
				},
				{
					"adult": false,
					"backdrop_path": "/eewSm2QKPMueCM3ix5r3aE5eIur.jpg",
					"genre_ids": [
						80,
						18,
						9648,
						53
					],
					"id": 20246,
					"original_language": "en",
					"original_title": "The Stranger",
					"overview": "A man working for the War Crimes Commission suspects that an important Nazi official has folded himself into a quaint Connecticut town.",
					"popularity": 7.139,
					"poster_path": "/c7qmGFZrj5AaDz9NKMeaajW38fC.jpg",
					"release_date": "1946-07-02",
					"title": "The Stranger",
					"video": false,
					"vote_average": 7.4,
					"vote_count": 394
				},
				{
					"adult": false,
					"backdrop_path": "/d9eONXYtCmQnPWw61w9pNMGlSzK.jpg",
					"genre_ids": [
						35,
						18,
						14,
						10749
					],
					"id": 1262,
					"original_language": "en",
					"original_title": "Stranger Than Fiction",
					"overview": "Harold Crick is a lonely IRS agent whose mundane existence is transformed when he hears a mysterious voice narrating his life.",
					"popularity": 8.716,
					"poster_path": "/pAPSRlxEHA2Hc6BgPUBg0D6OjCb.jpg",
					"release_date": "2006-09-09",
					"title": "Stranger Than Fiction",
					"video": false,
					"vote_average": 7.2,
					"vote_count": 1714
				},
				{
					"adult": false,
					"backdrop_path": "/tAEV7htL9Yi0hMHtxlv2VAm9Rbe.jpg",
					"genre_ids": [
						35,
						18
					],
					"id": 469,
					"original_language": "en",
					"original_title": "Stranger Than Paradise",
					"overview": "Rootless Hungarian émigré Willie, his pal Eddie, and visiting sixteen-year-old cousin Eva always manage to make the least of any situation, whether aimlessly traversing the drab interiors and environs of New York City, Cleveland, or an anonymous Florida suburb.",
					"popularity": 7.872,
					"poster_path": "/xo3gzcdeyC6YO3dpW1K875my48p.jpg",
					"release_date": "1984-10-01",
					"title": "Stranger Than Paradise",
					"video": false,
					"vote_average": 7.2,
					"vote_count": 341
				},
				{
					"adult": false,
					"backdrop_path": "/plTx6iHNbLxNXKL4swZxl4RVT2w.jpg",
					"genre_ids": [
						53,
						27,
						9648
					],
					"id": 291151,
					"original_language": "en",
					"original_title": "The Stranger",
					"overview": "A supernatural thriller, laced by flashbacks, and set in Canada’s North-West, “The Stranger” turns on the mysterious titular figure of Martin, who comes to a small quiet town seeking to kill his wife Ana who suffers from a very dangerous decease that makes her addicted to human blood - just like himself-. However, when he arrives to the town, he discovers that Ana has been dead for a couple of years and decides to commit suicide to definitely eradicate this dangerous decease, but, before he can do it, Martin's brutally attacked by three local thugs led by Caleb, the son of a corrupt police lieutenant, and the incident suddenly starts a snowball that will plunge the community into a bloodbath.",
					"popularity": 3.945,
					"poster_path": "/8YjSy1vG4yuuatgdAU1NbitA52F.jpg",
					"release_date": "2014-06-12",
					"title": "The Stranger",
					"video": false,
					"vote_average": 4.9,
					"vote_count": 70
				},
				{
					"adult": false,
					"backdrop_path": "/t8hYaY0ZCX0ukmE9NGjOsmtt2K.jpg",
					"genre_ids": [
						16
					],
					"id": 446370,
					"original_language": "en",
					"original_title": "Hi Stranger",
					"overview": "I made this film especially for you. I needed to check in with you. I needed to tell you how I feel.",
					"popularity": 4.879,
					"poster_path": "/lXMydNXO2IeZlkkolqNfmwJDRVH.jpg",
					"release_date": "2017-03-10",
					"title": "Hi Stranger",
					"video": false,
					"vote_average": 6.8,
					"vote_count": 79
				},
				{
					"adult": false,
					"backdrop_path": "/hL0hkMFGWgOvC0P4le6gzRzwa62.jpg",
					"genre_ids": [
						18,
						10749,
						80
					],
					"id": 41670,
					"original_language": "en",
					"original_title": "A Stranger Among Us",
					"overview": "Detective Emily Eden is a tough New York City cop forced to go undercover to solve a puzzling murder. Her search for the truth takes her into a secret world of unwritten law and unspoken power, a world where the only way out is deeper in!",
					"popularity": 5.858,
					"poster_path": "/t9V1cE3PzlK0syDD2HzrUiUpIRV.jpg",
					"release_date": "1992-07-17",
					"title": "A Stranger Among Us",
					"video": false,
					"vote_average": 5.7,
					"vote_count": 62
				},
				{
					"adult": false,
					"backdrop_path": "/vQkGZ0u9E8PgBbjg8vo61KHxQDc.jpg",
					"genre_ids": [
						16,
						28,
						27,
						14
					],
					"id": 618352,
					"original_language": "en",
					"original_title": "DC Showcase: The Phantom Stranger",
					"overview": "Set in the 1970s, the short follows young adult Jess as she joins her friends at a party in a dilapidated mansion hosted by the mysterious Seth. When odd things begin to happen to Jess and her friends, the Phantom Stranger intervenes to save her from a dreary fate.",
					"popularity": 6.844,
					"poster_path": "/tqcL1YEiGUKsW1Ofka59m4MIKr1.jpg",
					"release_date": "2020-02-25",
					"title": "DC Showcase: The Phantom Stranger",
					"video": false,
					"vote_average": 7.8,
					"vote_count": 39
				},
				{
					"adult": false,
					"backdrop_path": "/3dK12SaczU7Tf8btq7K2F5HQg6F.jpg",
					"genre_ids": [
						27,
						53,
						18,
						80,
						9648
					],
					"id": 45964,
					"original_language": "en",
					"original_title": "When a Stranger Calls",
					"overview": "A psychopathic killer terrorizes a babysitter, then returns seven years later to menace her again.",
					"popularity": 6.423,
					"poster_path": "/mdhpKVuuNZcc9noZzYXruxeIxdJ.jpg",
					"release_date": "1979-10-26",
					"title": "When a Stranger Calls",
					"video": false,
					"vote_average": 6.3,
					"vote_count": 144
				},
				{
					"adult": false,
					"backdrop_path": "/51aiE8fEXchmbLIyX7Smm3zJavV.jpg",
					"genre_ids": [
						18,
						9648,
						53,
						878
					],
					"id": 413852,
					"original_language": "en",
					"original_title": "Welcome the Stranger",
					"overview": "Alice arrives unannounced at her estranged brother Ethan's house in an attempt to reconcile, but bizarre visions, the return of his strange girlfriend and Alice's paranoia and suspicion force the siblings to cling onto reality amidst mysterious circumstances.",
					"popularity": 4.182,
					"poster_path": "/fZch4FhfexA18gUUQjHXKnLmkjh.jpg",
					"release_date": "2018-03-20",
					"title": "Welcome the Stranger",
					"video": false,
					"vote_average": 5.1,
					"vote_count": 31
				},
				{
					"adult": false,
					"backdrop_path": "/jhMRbl1rPOMrsHNILNDeJgE3LMs.jpg",
					"genre_ids": [
						53,
						9648
					],
					"id": 169758,
					"original_language": "en",
					"original_title": "The Stranger Within",
					"overview": "After a traumatic ordeal, acclaimed actress Emily Moore and her psychiatrist husband, Robert, escape on a relaxing vacation to a gorgeous remote Mediterranean island. But on the first night at the house, a young girl arrives, blood on her hands and hysterical from the death of her boyfriend in a hiking accident. Robert offers to take in and help the young girl, but her suggestive behavior makes Emily wonder if she might be a threat to their marriage... or her life.",
					"popularity": 3.365,
					"poster_path": "/zD5htX2QBYT6p1FiVogjVVutTp4.jpg",
					"release_date": "2013-05-01",
					"title": "The Stranger Within",
					"video": false,
					"vote_average": 4.6,
					"vote_count": 33
				},
				{
					"adult": false,
					"backdrop_path": null,
					"genre_ids": [
						35,
						53
					],
					"id": 9892,
					"original_language": "en",
					"original_title": "Stranger than Fiction",
					"overview": "Lives spiral out of control when four friends cover up a murder.",
					"popularity": 3.54,
					"poster_path": null,
					"release_date": "2000-03-16",
					"title": "Stranger than Fiction",
					"video": false,
					"vote_average": 5.7,
					"vote_count": 11
				},
				{
					"adult": false,
					"backdrop_path": null,
					"genre_ids": [
						28
					],
					"id": 56451,
					"original_language": "en",
					"original_title": "The Stranger",
					"overview": "In this modern retelling of High Plains Drifter, a female biker rides into a desert town to seek revenge on \"Angel\" and his ruthless gang.",
					"popularity": 2.086,
					"poster_path": "/iP3yGtG8vJNDl6fdfvfJ9yqbpXD.jpg",
					"release_date": "1995-03-10",
					"title": "The Stranger",
					"video": false,
					"vote_average": 6.6,
					"vote_count": 7
				},
				{
					"adult": false,
					"backdrop_path": "/r8bNNtwJO3uO4guw3IvzGUWSznM.jpg",
					"genre_ids": [
						35,
						18,
						10749
					],
					"id": 38031,
					"original_language": "en",
					"original_title": "You Will Meet a Tall Dark Stranger",
					"overview": "Two married couples find only trouble and heartache as their complicated lives unfold. After 40 years of marriage, Alfie leaves his wife to pursue what he thinks is happiness with a call girl. His wife, Helena, reeling from abandonment, decides to follow the advice of a psychic. Sally, the daughter of Alfie and Helena, is unhappy in her marriage and develops a crush on her boss, while her husband, Roy, falls for a woman engaged to be married.",
					"popularity": 8.947,
					"poster_path": "/oBhnI8UZQzTkAH1LMEtrBUmfpjS.jpg",
					"release_date": "2010-05-23",
					"title": "You Will Meet a Tall Dark Stranger",
					"video": false,
					"vote_average": 5.9,
					"vote_count": 647
				},
				{
					"adult": false,
					"backdrop_path": "/r8x3hxKHt7rrG1yAWuYCs7uFtAQ.jpg",
					"genre_ids": [
						27,
						10770,
						9648
					],
					"id": 37938,
					"original_language": "en",
					"original_title": "Stranger in Our House",
					"overview": "A well-to-do family of five takes in cousin Julia, whose parents recently perished in a car crash. While the rest of the family and those around them are completely charmed by Julia, teenaged daughter Rachel comes to suspect that her cousin has an ulterior agenda – one that possibly includes witchcraft.",
					"popularity": 4.796,
					"poster_path": "/hoVO0gY9IvRvsUlALnsURSiVIkc.jpg",
					"release_date": "1979-08-16",
					"title": "Stranger in Our House",
					"video": false,
					"vote_average": 5.5,
					"vote_count": 48
				}
			],
			"total_pages": 34,
			"total_results": 667
		},
		searchResultsShows:{
			"page": 1,
			"results": [
				{
					"backdrop_path": "/75HgaphatW0PDI3XIHQWZUpbhn6.jpg",
					"first_air_date": "2017-12-01",
					"genre_ids": [
						10765,
						18,
						9648,
						80
					],
					"id": 70523,
					"name": "Dark",
					"origin_country": [
						"DE"
					],
					"original_language": "de",
					"original_name": "Dark",
					"overview": "A missing child causes four families to help each other for answers. What they could not imagine is that this mystery would be connected to innumerable other secrets of the small town.",
					"popularity": 138.649,
					"poster_path": "/nlTUgbZY1E4Dr5B25zLLkudIaV.jpg",
					"vote_average": 8.4,
					"vote_count": 4444
				},
				{
					"backdrop_path": "/9yKCJTOh9m3Lol2RY3kw99QPH6x.jpg",
					"first_air_date": "2019-11-03",
					"genre_ids": [
						10765,
						18
					],
					"id": 68507,
					"name": "His Dark Materials",
					"origin_country": [
						"GB"
					],
					"original_language": "en",
					"original_name": "His Dark Materials",
					"overview": "Lyra is an orphan who lives in a parallel universe in which science, theology and magic are entwined. Lyra's search for a kidnapped friend uncovers a sinister plot involving stolen children, and turns into a quest to understand a mysterious phenomenon called Dust. She is later joined on her journey by Will, a boy who possesses a knife that can cut windows between worlds. As Lyra learns the truth about her parents and her prophesied destiny, the two young people are caught up in a war against celestial powers that ranges across many worlds.",
					"popularity": 83.642,
					"poster_path": "/g6tIKGc3f1H5QMz1dcgCwADKpZ7.jpg",
					"vote_average": 8.1,
					"vote_count": 919
				},
				{
					"backdrop_path": "/rJNG5Fp9uhH6reDh1m3RxkcwXOX.jpg",
					"first_air_date": "2019-10-08",
					"genre_ids": [],
					"id": 108847,
					"name": "AEW Dark",
					"origin_country": [
						"US"
					],
					"original_language": "en",
					"original_name": "AEW Dark",
					"overview": "All Elite Wrestling: Dark is a weekly web series featuring untelevised matches from the TNT series Dynamite. Former WCW announcer Tony Schiavone hosts the program.",
					"popularity": 37.544,
					"poster_path": "/kwg1eIJpF0qVt9uh4wImHaX4Yzk.jpg",
					"vote_average": 8.6,
					"vote_count": 7
				},
				{
					"backdrop_path": "/cs27OhmVu3nBTqokdonbSxRe4bs.jpg",
					"first_air_date": "2020-04-03",
					"genre_ids": [
						9648,
						18
					],
					"id": 98161,
					"name": "Home Before Dark",
					"origin_country": [
						"US"
					],
					"original_language": "en",
					"original_name": "Home Before Dark",
					"overview": "A young girl moves from Brooklyn to the small lakeside town her father left behind. While there, her dogged pursuit of the truth leads her to unearth a cold case that everyone in town, including her own father, tried hard to bury.",
					"popularity": 51.895,
					"poster_path": "/mt4P2epJrSaqrlkMP9fTUKLP9OE.jpg",
					"vote_average": 7.6,
					"vote_count": 325
				},
				{
					"backdrop_path": null,
					"first_air_date": "1966-06-27",
					"genre_ids": [
						18,
						10765,
						10766
					],
					"id": 2883,
					"name": "Dark Shadows",
					"origin_country": [
						"US"
					],
					"original_language": "en",
					"original_name": "Dark Shadows",
					"overview": "Dark Shadows is an American gothic soap opera that originally aired weekdays on the ABC television network, from June 27, 1966, to April 2, 1971. The show was created by Dan Curtis. The story bible, which was written by Art Wallace, does not mention any supernatural elements. It was unprecedented in daytime television when ghosts were introduced about six months after it began.\n\nThe series became hugely popular when vampire Barnabas Collins appeared a year into its run. Dark Shadows also featured werewolves, zombies, man-made monsters, witches, warlocks, time travel, and a parallel universe. A small company of actors each played many roles; indeed, as actors came and went, some characters were played by more than one actor. Major writers besides Art Wallace included Malcolm Marmorstein, Sam Hall, Gordon Russell, and Violet Welles.\n\nDark Shadows was distinguished by its vividly melodramatic performances, atmospheric interiors, memorable storylines, numerous dramatic plot twists, unusually adventurous music score, and broad and epic cosmos of characters and heroic adventures. Now regarded as something of a classic, it continues to enjoy an intense cult following. Although the original series ran for only five years, its scheduling as a daily daytime drama allowed it to amass more single episodes during its run than most other science-fiction/fantasy genre series produced for English-language television, including Doctor Who and the entire Star Trek television franchise. Only the paranormal soap opera Passions, with a total of 2,231 episodes, has more.",
					"popularity": 31.771,
					"poster_path": "/eRtnI7qTJIiPUmlY3J8TTM3jlT7.jpg",
					"vote_average": 6.8,
					"vote_count": 47
				},
				{
					"backdrop_path": "/3xJFM8b2ygQEzAllAUBN4UrF45X.jpg",
					"first_air_date": "2000-10-03",
					"genre_ids": [
						10759,
						18
					],
					"id": 2407,
					"name": "Dark Angel",
					"origin_country": [
						"US"
					],
					"original_language": "en",
					"original_name": "Dark Angel",
					"overview": "Super soldier Max Guevera tries to live a normal life in post-apocalyptic Seattle while eluding capture by government agents from the covert biotech facility she escaped from as a child and searching for her genetically-enhanced brothers and sisters who have dispersed after escape.",
					"popularity": 29.844,
					"poster_path": "/yX2YSHdufG8UZRE07RiVY4bwji.jpg",
					"vote_average": 7.6,
					"vote_count": 265
				},
				{
					"backdrop_path": "/l32UmARlJtdWFKpuM9KdduGzj5d.jpg",
					"first_air_date": "2019-04-04",
					"genre_ids": [
						18,
						35
					],
					"id": 85727,
					"name": "In the Dark",
					"origin_country": [
						"US"
					],
					"original_language": "en",
					"original_name": "In the Dark",
					"overview": "Murphy is a flawed and irreverent woman who just happens to be blind and is the only “witness” to the murder of her drug-dealing friend, Tyson. When the police dismiss her story, she sets out with her dog, Pretzel, to find the killer while also managing her colorful dating life and the job she hates at Breaking Blind — the guide-dog school owned by her overprotective parents.",
					"popularity": 37.603,
					"poster_path": "/ragOWWi3PRRNEubaWM0EXFQKEU6.jpg",
					"vote_average": 7.9,
					"vote_count": 137
				},
				{
					"backdrop_path": "/2s6eEUCzGhRl0yef4VGcHNKpKvy.jpg",
					"first_air_date": "2019-10-11",
					"genre_ids": [
						9648
					],
					"id": 93693,
					"name": "Are You Afraid of the Dark?",
					"origin_country": [],
					"original_language": "en",
					"original_name": "Are You Afraid of the Dark?",
					"overview": "Each season of this horror anthology series follows a different group of kids, members of the Midnight Society, as they discover terrifying curses and creatures.",
					"popularity": 112.219,
					"poster_path": "/seCdnVx50nhHmDqaC6QEYM3jSG3.jpg",
					"vote_average": 7.5,
					"vote_count": 151
				},
				{
					"backdrop_path": "/4wwWDjLfJVMt2hh8DIa2rzEx5VS.jpg",
					"first_air_date": "2015-06-12",
					"genre_ids": [
						10765,
						18
					],
					"id": 62425,
					"name": "Dark Matter",
					"origin_country": [
						"CA"
					],
					"original_language": "en",
					"original_name": "Dark Matter",
					"overview": "The six-person crew of a derelict spaceship awakens from stasis in the farthest reaches of space. Their memories wiped clean, they have no recollection of who they are or how they got on board. The only clue to their identities is a cargo bay full of weaponry and a destination: a remote mining colony that is about to become a war zone. With no idea whose side they are on, they face a deadly decision. Will these amnesiacs turn their backs on history, or will their pasts catch up with them?",
					"popularity": 15.956,
					"poster_path": "/oWYOFBvIMkW64n51uD4mdje6k2u.jpg",
					"vote_average": 6.6,
					"vote_count": 586
				},
				{
					"backdrop_path": "/gGNy7RNjevN7XqNdhQp0P0dVrxk.jpg",
					"first_air_date": "2021-03-15",
					"genre_ids": [],
					"id": 120691,
					"name": "AEW Dark: Elevation",
					"origin_country": [],
					"original_language": "en",
					"original_name": "AEW Dark: Elevation",
					"overview": "AEW Dark: Elevation will featuring up and rising talent in AEW, as well as wrestlers from the independent circuit Hosted by Tony Schiavone and former WWE superstar Paul Wight.",
					"popularity": 21.816,
					"poster_path": "/aEMwWietd8w4lJIXPmKBKELxNrJ.jpg",
					"vote_average": 8.3,
					"vote_count": 3
				},
				{
					"backdrop_path": "/sb68JRR5x9Rd9pjT7qcm4PJIpfH.jpg",
					"first_air_date": "2017-07-11",
					"genre_ids": [],
					"id": 72785,
					"name": "In the Dark",
					"origin_country": [
						"GB"
					],
					"original_language": "en",
					"original_name": "In the Dark",
					"overview": "DI Helen Weeks grapples with pregnancy as she undertakes a very personal abduction case.",
					"popularity": 18.467,
					"poster_path": "/ecUKYm6Pf8dEHk2IZiNaLtbprRQ.jpg",
					"vote_average": 6.6,
					"vote_count": 22
				},
				{
					"backdrop_path": null,
					"first_air_date": "2009-07-15",
					"genre_ids": [
						10759,
						18
					],
					"id": 18797,
					"name": "Dark Blue",
					"origin_country": [
						"US"
					],
					"original_language": "en",
					"original_name": "Dark Blue",
					"overview": "Dark Blue was an action/drama television series which premiered on TNT on July 15, 2009, at 10 pm. It ended its run on September 15, 2010. The series is set in Los Angeles, California. It revolves around Carter Shaw, the leader of an undercover unit. He is an officer who has dedicated his life to taking down the worst criminals in L.A., and this dedication has cost him his marriage. His team includes Ty Curtis, a newlywed who struggles between his job and his new life; Dean Bendis, an officer who is so deep in his undercover role that his team is no longer sure which side he is on; and Jaimie Allen, a green patrol cop recruited into the undercover unit because of her dark past and criminal skills.",
					"popularity": 12.621,
					"poster_path": "/wtCGJl9xOSKKHHo77Txnljykmem.jpg",
					"vote_average": 7.1,
					"vote_count": 14
				},
				{
					"backdrop_path": "/7li7Xi0yHsu4vgO0AC6f4UbkCeD.jpg",
					"first_air_date": "2018-07-20",
					"genre_ids": [
						10759,
						99
					],
					"id": 81002,
					"name": "Dark Tourist",
					"origin_country": [
						"NZ"
					],
					"original_language": "en",
					"original_name": "Dark Tourist",
					"overview": "The definition of \"tourism\" is redefined as New Zealand filmmaker David Farrier sets his sights on the world of dark tourism.  From nuclear tourism in Japan to Pablo Escobar-inspired tourism in Columbia to frontier tourism in Turkmenistan, David visits the world’s grisly and offbeat destinations, meeting travelers drawn to them, and the people telling these stories day after day.",
					"popularity": 10.715,
					"poster_path": "/53LaaZO4hnUlzNm7qQSFLvuwXAz.jpg",
					"vote_average": 6.5,
					"vote_count": 31
				},
				{
					"backdrop_path": "/d6gaIKwu3e6AFqXnHwkJc2a2G3J.jpg",
					"first_air_date": "1996-09-21",
					"genre_ids": [
						10765,
						18
					],
					"id": 164,
					"name": "Dark Skies",
					"origin_country": [
						"US"
					],
					"original_language": "en",
					"original_name": "Dark Skies",
					"overview": "Dark Skies is an American UFO conspiracy theory-based sci-fi television series that aired from the 1996 to 1997 season for 18 episodes, plus a two-hour pilot episode. The success of The X-Files on Fox proved there was an audience for science fiction shows, resulting in NBC commissioning this proposed competitor following a pitch from producers Bryce Zabel and Brent Friedman. The series debuted September 21, 1996 on NBC, and was later rerun by the Sci-Fi Channel. Its tagline was \"History as we know it is a lie.\"",
					"popularity": 8.933,
					"poster_path": "/nBNPfdllB1opBX4FWL2w2UkrbHO.jpg",
					"vote_average": 7.6,
					"vote_count": 22
				},
				{
					"backdrop_path": "/7eSm1fKhueKxq8BqwYoHCZYgTkv.jpg",
					"first_air_date": "2019-07-19",
					"genre_ids": [
						10765
					],
					"id": 90492,
					"name": "Dark/Web",
					"origin_country": [
						"US"
					],
					"original_language": "en",
					"original_name": "Dark/Web",
					"overview": "A horror anthology series that explores the dangers of a totally connected world.",
					"popularity": 8.033,
					"poster_path": "/rqDwDcOBwOwSiu5iC37NvTx5B3M.jpg",
					"vote_average": 6.6,
					"vote_count": 11
				},
				{
					"backdrop_path": "/uHFvwXGhchNOUFj3LLM0gQZ8m4z.jpg",
					"first_air_date": "2019-08-30",
					"genre_ids": [
						10765,
						10759
					],
					"id": 71809,
					"name": "The Dark Crystal: Age of Resistance",
					"origin_country": [
						"GB",
						"US"
					],
					"original_language": "en",
					"original_name": "The Dark Crystal: Age of Resistance",
					"overview": "Return to the world of Thra, where three Gelfling discover the horrifying secret behind the Skeksis' power and set out to ignite the fires of rebellion and save their world.",
					"popularity": 32.998,
					"poster_path": "/xnMJ7mBC8Jx4emaj7TE4TU0Qm92.jpg",
					"vote_average": 7.8,
					"vote_count": 226
				},
				{
					"backdrop_path": "/g1J4Gogxz9LIBHxjOExlLdy3ipK.jpg",
					"first_air_date": "1991-04-05",
					"genre_ids": [
						80,
						18
					],
					"id": 11741,
					"name": "Dark Justice",
					"origin_country": [
						"US"
					],
					"original_language": "en",
					"original_name": "Dark Justice",
					"overview": "Dark Justice is an American crime drama about a judge that turns into a vigilante by night in order to bring to justice high-level offenders that use technicalities to \"escape\" the legal system. The role of Judge Nicholas Marshall was played by actors Ramy Zada and Bruce Abbott.\n\nThe series began airing in 1991 and ran for three seasons finishing in 1993.",
					"popularity": 8.591,
					"poster_path": "/iMJ86qVLmDMdTrGnvpdqnAJEzW0.jpg",
					"vote_average": 7.1,
					"vote_count": 12
				},
				{
					"backdrop_path": "/xp5zva2Zav7mTxy3gApo2QM1GMC.jpg",
					"first_air_date": "1992-08-15",
					"genre_ids": [
						18,
						9648,
						10762
					],
					"id": 2913,
					"name": "Are You Afraid of the Dark?",
					"origin_country": [
						"CA",
						"US"
					],
					"original_language": "en",
					"original_name": "Are You Afraid of the Dark?",
					"overview": "Are You Afraid of the Dark? is a joint Canadian-American horror/fantasy-themed anthology television series. The original series was a joint production between the Canadian company Cinar and the American company Nickelodeon.\n\nThe episode \"The Tale of the Twisted Claw\" was aired as a pilot on the evening of October 31, 1991 in the USA and in October 1990 in Canada. Are You Afraid of the Dark? was aired from August 15, 1992 to April 20, 1996 on Nickelodeon's SNICK. The series also aired on the Canadian television network YTV from October 30, 1990 until June 11, 2000.\n\nA revived series with new directors, writers, and cast was produced by Nickelodeon from 1999 to 2000 and also aired on SNICK. The sole member from the original lineup to return for the sixth and seventh seasons was Tucker, although Ross Hull returned for the concluding miniseries, which notably broke from the show's established format by blurring the line between story and \"reality\".",
					"popularity": 29.074,
					"poster_path": "/hcVvglRh3l38IRhhtawlT2nUDY8.jpg",
					"vote_average": 8.3,
					"vote_count": 430
				},
				{
					"backdrop_path": null,
					"first_air_date": "2016-10-31",
					"genre_ids": [
						80,
						18,
						9648
					],
					"id": 67961,
					"name": "Dark Angel",
					"origin_country": [
						"GB"
					],
					"original_language": "en",
					"original_name": "Dark Angel",
					"overview": "The story of Victorian serial killer Mary Ann Cotton, a poisoner whose methods leave no visible scars, allowing her tally of victims to mount, unsuspected by a Victorian society unable to conceive of a woman capable of such terrible crimes. Traveling around the North East, she insinuates herself into unsuspecting families, marrying and creating new families of her own - before killing them, taking their money and moving on.",
					"popularity": 6.322,
					"poster_path": "/vkKmuIvYTaDuRrRPT9JJZ0rNVE8.jpg",
					"vote_average": 6.4,
					"vote_count": 20
				},
				{
					"backdrop_path": "/94zsM5qGXgjg8Q3Ii7CQdY3WY3r.jpg",
					"first_air_date": "2016-01-21",
					"genre_ids": [
						99
					],
					"id": 64607,
					"name": "Dark Net",
					"origin_country": [
						"US"
					],
					"original_language": "en",
					"original_name": "Dark Net",
					"overview": "A documentary series that explores the furthest reaches of the internet and the people who frequent it, Dark Net provides a revealing and cautionary look inside a vast cyber netherworld rarely witnessed by most of us. Provocative, thought-provoking and frequently profound, each episode illuminates an exciting, ever-expanding frontier where people can do anything and see anything, whether they should or not.",
					"popularity": 4.614,
					"poster_path": "/tWeJD3WEf1NkmBviPlzUOHmtKMd.jpg",
					"vote_average": 6,
					"vote_count": 22
				}
			],
			"total_pages": 13,
			"total_results": 243
		},
		loading:false
	}
	const [state, dispatch] = useReducer(searchReducer,initialState);

	//TODO Make Request to API
	const searchRequest = () =>{
		setLoading();

		console.log("Made Req")
	}
	// TODO Set Loading to true
	const setLoading = () =>{
		dispatch({type:SET_LOADING});
	}

	return(
		<SearchContext.Provider value={{searchResultsMovies: state.searchResultsMovies, searchResultsShows:state.searchResultsShows, loading:state.loading,searchRequest}}>
		{props.children}
			</SearchContext.Provider>
	)
}

export default SearchState;
