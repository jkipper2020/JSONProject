/**
 * Jonathan Kipper
 * @version 5-19-2020
 * THis is the javascript file that reads in from a json file and loads all of the objects into a large array (not all, just
 * most of the file since it was too big)
 */
let mainArray = [
    {
        "death": true,
        "name": "Sagelhurst, John C.",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "Under a heavy fire from the enemy carried off the field a commissioned officer who was severely wounded and also led a charge on the enemy's rifle pits.",
            "issued": "01/03/1906",
            "date": {
                "day": 6,
                "full": "1865-2-6",
                "month": 2,
                "year": 1865
            },
            "location": {
                "latitude": 38,
                "longitude": -77,
                "name": "Hatchers Run Court, Stafford, VA 22554, USA"
            }
        },
        "birth": {
            "location name": "Buffalo, N.Y.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/1176/sagelhurst-john-c.php"
        },
        "military record": {
            "company": "Company B",
            "division": "1st New Jersey Cavalry",
            "entered service at": "Buffalo, N.Y.",
            "organization": "U.S. Army",
            "rank": "Sergeant"
        }
    },
    {
        "death": true,
        "name": "Hack, John",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "Was one of a party which volunteered and attempted to run the enemy's batteries with a steam tug and 2 barges loaded with subsistence stores.",
            "issued": "01/03/1907",
            "date": {
                "day": 3,
                "full": "1863-5-3",
                "month": 5,
                "year": 1863
            },
            "location": {
                "latitude": 32,
                "longitude": -90,
                "name": "Vicksburg, MS, USA"
            }
        },
        "birth": {
            "location name": "1843, Germany",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/537/hack-john.php"
        },
        "military record": {
            "company": "Company B",
            "division": "47th Ohio Infantry",
            "entered service at": "Adrian, Mich.",
            "organization": "U.S. Army",
            "rank": "Private"
        }
    },
    {
        "death": true,
        "name": "Carson, Anthony J.",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "Assumed command of a detachment of the company which had survived an overwhelming attack of the enemy, and by his bravery and untiring efforts and the exercise of extraordinary good judgment in the handling of his men successfully withstood for 2 days the attacks of a large force of the enemy, thereby saving the lives of the survivors and protecting the wounded until relief came.",
            "issued": "01/04/1906",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 10,
                "longitude": 124,
                "name": "Leyte, Philippines"
            }
        },
        "birth": {
            "location name": "Boston, Mass.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2211/carson-anthony-j.php"
        },
        "military record": {
            "company": "Company H",
            "division": "43d Infantry",
            "entered service at": "Malden, Mass.",
            "organization": "U.S. Army",
            "rank": "Corporal"
        }
    },
    {
        "death": true,
        "name": "Defranzos, Arthur F.",
        "awarded": {
            "General Order number": 1,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity at the risk of his life, above and beyond the call of duty, on 10 June 1944, near Vaubadon, France. As scouts were advancing across an open field, the enemy suddenly opened fire with several machineguns and hit 1 of the men. S/Sgt. DeFranzo courageously moved out in the open to the aid of the wounded scout and was himself wounded but brought the man to safety. Refusing aid, S/Sgt. DeFranzo reentered the open field and led the advance upon the enemy. There were always at least 2 machineguns bringing unrelenting fire upon him, but S/Sgt. DeFranzo kept going forward, firing into the enemy and 1 by 1 the enemy emplacements became silent. While advancing he was again wounded, but continued on until he was within 100 yards of the enemy position and even as he fell, he kept firing his rifle and waving his men forward. When his company came up behind him, S/Sgt. DeFranzo, despite his many severe wounds, suddenly raised himself and once more moved forward in the lead of his men until he was again hit by enemy fire. In a final gesture of indomitable courage, he threw several grenades at the enemy machinegun position and completely destroyed the gun. In this action, S/Sgt. DeFranzo lost his life, but by bearing the brunt of the enemy fire in leading the attack, he prevented a delay in the assault which would have been of considerable benefit to the foe, and he made possible his company's advance with a minimum of casualties. The extraordinary heroism and magnificent devotion to duty displayed by S/Sgt. DeFranzo was a great inspiration to all about him, and is in keeping with the highest traditions of the armed forces.",
            "issued": "01/04/1945",
            "date": {
                "day": 10,
                "full": "1944-6-10",
                "month": 6,
                "year": 1944
            },
            "location": {
                "latitude": 49,
                "longitude": 0,
                "name": "14490 Vaubadon, France"
            }
        },
        "birth": {
            "location name": "Saugus, Mass.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2710/defranzos-arthur-f.php"
        },
        "military record": {
            "company": "",
            "division": "1st Infantry Division",
            "entered service at": "Saugus, Mass.",
            "organization": "U.S. Army",
            "rank": "Staff Sergeant"
        }
    },
    {
        "death": true,
        "name": "Kessler, Patrick L.",
        "awarded": {
            "General Order number": 1,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity at risk of life above and beyond the call of duty. Pfc. Kessler, acting without orders, raced 50 yards through a hail of machinegun fire, which had killed 5 of his comrades and halted the advance of his company, in order to form an assault group to destroy the machinegun. Ordering 3 men to act as a base of fire, he left the cover of a ditch and snaked his way to a point within 50 yards of the enemy machinegun before he was discovered, whereupon he plunged headlong into the furious chain of automatic fire. Reaching a spot within 6 feet of the emplacement he stood over it and killed both the gunner and his assistant, jumped into the gun position, overpowered and captured a third German after a short struggle. The remaining member of the crew escaped, but Pfc. Kessler wounded him as he ran. While taking his prisoner to the rear, this soldier saw 2 of his comrades killed as they assaulted an enemy strongpoint, fire from which had already killed 10 men in the company. Turning his prisoner over to another man, Pfc. Kessler crawled 35 yards to the side of 1 of the casualties, relieved him of his BAR and ammunition and continued on toward the strongpoint, 125 yards distant. Although 2 machineguns concentrated their fire directly on him and shells exploded within 10 yards, bowling him over, Pfc. Kessler crawled 75 yards, passing through an antipersonnel minefield to a point within 50 yards of the enemy and engaged the machineguns in a duel. When an artillery shell burst within a few feet of him, he left the cover of a ditch and advanced upon the position in a slow walk, firing his BAR from the hip. Although the enemy poured heavy machinegun and small arms fire at him, Pfc. Kessler succeeded in reaching the edge of their position, killed the gunners, and captured 13 Germans. Then, despite continuous shelling, he started to the rear. After going 25 yards, Pfc. Kessler was fired upon by 2 snipers only 100 yards away. Several of his prisoners took advantage of this opportunity and attempted to escape; however, Pfc. Kessler hit the ground, fired on either flank of his prisoners, forcing them to cover, and then engaged the 2 snipers in a fire fight, and captured them. With this last threat removed, Company K continued its advance, capturing its objective without further opposition. Pfc. Kessler was killed in a subsequent action.",
            "issued": "01/04/1945",
            "date": {
                "day": 23,
                "full": "1944-5-23",
                "month": 5,
                "year": 1944
            },
            "location": {
                "latitude": 43,
                "longitude": 11,
                "name": "50026 Ponte Rotto FI, Italy"
            }
        },
        "birth": {
            "location name": "Middletown, Ohio",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2824/kessler-patrick-l.php"
        },
        "military record": {
            "company": "Company K",
            "division": "30th Infantry, 3d Infantry Division",
            "entered service at": "Middletown, Ohio",
            "organization": "U.S. Army",
            "rank": "Private First Class"
        }
    },
    {
        "death": true,
        "name": "Pinder, John J., Jr.",
        "awarded": {
            "General Order number": 1,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity above and beyond the call of duty on 6 June 1944, near Colleville-sur-Mer, France. On D-day, Technician 5th Grade Pinder landed on the coast 100 yards off shore under devastating enemy machinegun and artillery fire which caused severe casualties among the boatload. Carrying a vitally important radio, he struggled towards shore in waist-deep water. Only a few yards from his craft he was hit by enemy fire and was gravely wounded. Technician 5th Grade Pinder never stopped. He made shore and delivered the radio. Refusing to take cover afforded, or to accept medical attention for his wounds, Technician 5th Grade Pinder, though terribly weakened by loss of blood and in fierce pain, on 3 occasions went into the fire-swept surf to salvage communication equipment. He recovered many vital parts and equipment, including another workable radio. On the 3rd trip he was again hit, suffering machinegun bullet wounds in the legs. Still this valiant soldier would not stop for rest or medical attention. Remaining exposed to heavy enemy fire, growing steadily weaker, he aided in establishing the vital radio communication on the beach. While so engaged this dauntless soldier was hit for the third time and killed. The indomitable courage and personal bravery of Technician 5th Grade Pinder was a magnificent inspiration to the men with whom he served.",
            "issued": "01/04/1945",
            "date": {
                "day": 6,
                "full": "1944-6-6",
                "month": 6,
                "year": 1944
            },
            "location": {
                "latitude": 49,
                "longitude": 0,
                "name": "Colleville-sur-Mer, France"
            }
        },
        "birth": {
            "location name": "McKees Rocks, Pa.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2951/pinder-john-j-jr.php"
        },
        "military record": {
            "company": "",
            "division": "16th Infantry, 1st Infantry Division",
            "entered service at": "Burgettstown, Pa.",
            "organization": "U.S. Army",
            "rank": "Technician Fifth Grade"
        }
    },
    {
        "death": true,
        "name": "Vance, Leon R., Jr.",
        "awarded": {
            "General Order number": 1,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity above and beyond the call of duty on 5 June 1944, when he led a Heavy Bombardment Group, in an attack against defended enemy coastal positions in the vicinity of Wimereaux, France. Approaching the target, his aircraft was hit repeatedly by antiaircraft fire which seriously crippled the ship, killed the pilot, and wounded several members of the crew, including Lt. Col. Vance, whose right foot was practically severed. In spite of his injury, and with 3 engines lost to the flak, he led his formation over the target, bombing it successfully. After applying a tourniquet to his leg with the aid of the radar operator, Lt. Col. Vance, realizing that the ship was approaching a stall altitude with the 1 remaining engine failing, struggled to a semi-upright position beside the copilot and took over control of the ship. Cutting the power and feathering the last engine he put the aircraft in glide sufficiently steep to maintain his airspeed. Gradually losing altitude, he at last reached the English coast, whereupon he ordered all members of the crew to bail out as he knew they would all safely make land. But he received a message over the interphone system which led him to believe 1 of the crewmembers was unable to jump due to injuries; so he made the decision to ditch the ship in the channel, thereby giving this man a chance for life. To add further to the danger of ditching the ship in his crippled condition, there was a 500-pound bomb hung up in the bomb bay. Unable to climb into the seat vacated by the copilot, since his foot, hanging on to his leg by a few tendons, had become lodged behind the copilot's seat, he nevertheless made a successful ditching while lying on the floor using only aileron and elevators for control and the side window of the cockpit for visual reference. On coming to rest in the water the aircraft commenced to sink rapidly with Lt. Col. Vance pinned in the cockpit by the upper turret which had crashed in during the landing. As it was settling beneath the waves an explosion occurred which threw Lt. Col. Vance clear of the wreckage. After clinging to a piece of floating wreckage until he could muster enough strength to inflate his life vest he began searching for the crewmember whom he believed to be aboard. Failing to find anyone he began swimming and was found approximately 50 minutes later by an Air-Sea Rescue craft. By his extraordinary flying skill and gallant leadership, despite his grave injury, Lt. Col. Vance led his formation to a successful bombing of the assigned target and returned the crew to a point where they could bail out with safety. His gallant and valorous decision to ditch the aircraft in order to give the crewmember he believed to be aboard a chance for life exemplifies the highest traditions of the U.S. Armed Forces.",
            "issued": "01/04/1945",
            "date": {
                "day": 5,
                "full": "1944-6-5",
                "month": 6,
                "year": 1944
            },
            "location": {
                "latitude": 50,
                "longitude": 1,
                "name": "Wimereux, France"
            }
        },
        "birth": {
            "location name": " Enid, Okla.",
            "date": {
                "day": 11,
                "month": 8,
                "year": 1916
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3033/vance-leon-r-jr.php"
        },
        "military record": {
            "company": "",
            "division": "489th Bomber Group",
            "entered service at": "Garden City, N.Y.",
            "organization": "U.S. Army",
            "rank": "Lieutenant Colonel"
        }
    },
    {
        "death": true,
        "name": "Boers, Edward William",
        "awarded": {
            "General Order number": 13,
            "accredited to": "Kentucky",
            "citation": "On board the U.S.S. Bennington, 21 July 1905. Following the explosion of a boiler of that vessel, Boers displayed extraordinary heroism in the resulting action.",
            "issued": "01/05/1906",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": -1,
                "longitude": -1,
                "name": ""
            }
        },
        "birth": {
            "location name": " Cincinnati, Ohio",
            "date": {
                "day": 10,
                "month": 3,
                "year": 1884
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2350/boers-edward-william.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "",
            "organization": "U.S. Navy",
            "rank": "Seaman"
        }
    },
    {
        "death": true,
        "name": "Brock, George F.",
        "awarded": {
            "General Order number": 13,
            "accredited to": "California",
            "citation": "Serving on board the U.S.S. Bennington for extraordinary heroism displayed at the time of the explosion of that vessel at San Diego, Calif., 21 July 1905.",
            "issued": "01/05/1906",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 32,
                "longitude": -117,
                "name": "San Diego, CA, USA"
            }
        },
        "birth": {
            "location name": " Cleveland, Ohio",
            "date": {
                "day": 18,
                "month": 10,
                "year": 1872
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2354/brock-george-f.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "",
            "organization": "U.S. Navy",
            "rank": "Carpenter's Mate Second Class"
        }
    },
    {
        "death": true,
        "name": "Clausey, John J.",
        "awarded": {
            "General Order number": 13,
            "accredited to": "California",
            "citation": "On board the U.S.S. Bennington for extraordinary heroism displayed at the time of the explosion of a boiler of that vessel at San Diego, Calif., 21 July 1905.",
            "issued": "01/05/1906",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 32,
                "longitude": -117,
                "name": "San Diego, CA, USA"
            }
        },
        "birth": {
            "location name": " San Francisco, Calif.",
            "date": {
                "day": 16,
                "month": 5,
                "year": 1875
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2357/clausey-john-j.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "",
            "organization": "U.S. Navy",
            "rank": "Chief Gunner's Mate"
        }
    },
    {
        "death": true,
        "name": "Cronan, Willie",
        "awarded": {
            "General Order number": 13,
            "accredited to": "Illinois",
            "citation": "Serving on board the U.S.S. Bennington, for extraordinary heroism displayed at the time of the explosion of a boiler of that vessel at San Diego, Calif., 21 July 1905.",
            "issued": "01/05/1906",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 32,
                "longitude": -117,
                "name": "San Diego, CA, USA"
            }
        },
        "birth": {
            "location name": " Chicago, Ill.",
            "date": {
                "day": 23,
                "month": 10,
                "year": 1883
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2360/cronan-willie.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "",
            "organization": "U.S. Navy",
            "rank": "Boatswain's Mate"
        }
    },
    {
        "death": true,
        "name": "Davis, Raymond E.",
        "awarded": {
            "General Order number": 13,
            "accredited to": "",
            "citation": "Serving on board the U.S.S. Bennington, for extraordinary heroism displayed at the time of the explosion of a boiler of that vessel at San Diego, Calif., 21 July 1905.",
            "issued": "01/05/1906",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 43,
                "longitude": -79,
                "name": "Board Room, Toronto, ON M5R, Canada"
            }
        },
        "birth": {
            "location name": " Mankato, Minn.",
            "date": {
                "day": 19,
                "month": 9,
                "year": 1885
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2361/davis-raymond-e.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "Puget Sound, Wash.",
            "organization": "U.S. Navy",
            "rank": "Quartermaster"
        }
    },
    {
        "death": true,
        "name": "Fredericksen, Emil",
        "awarded": {
            "General Order number": 13,
            "accredited to": "",
            "citation": "Serving on board the U.S.S. Benington, for extraordinary heroism displayed at the time of the explosion of a boiler of that vessel at San Diego, Calif., 21 July 1905.",
            "issued": "01/05/1906",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 32,
                "longitude": -117,
                "name": "San Diego, CA, USA"
            }
        },
        "birth": {
            "location name": "",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2364/fredericksen-emil.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "",
            "organization": "U.S. Navy",
            "rank": "Watertender"
        }
    },
    {
        "death": true,
        "name": "Grbitch, Rade",
        "awarded": {
            "General Order number": 13,
            "accredited to": "Illinois",
            "citation": "On board the U.S.S. Bennington, for extraordinary heroism displayed at the time of the explosion of a boiler of that vessel at San Diego, Calif., 21 July 1905.",
            "issued": "01/05/1906",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 32,
                "longitude": -117,
                "name": "San Diego, CA, USA"
            }
        },
        "birth": {
            "location name": " Austria",
            "date": {
                "day": 24,
                "month": 12,
                "year": 1870
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2367/grbitch-rade.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "",
            "organization": "U.S. Navy",
            "rank": "Seaman"
        }
    },
    {
        "death": true,
        "name": "Hill, Frank E.",
        "awarded": {
            "General Order number": 13,
            "accredited to": "Indiana",
            "citation": "On board the U.S.S. Bennington, for extraordinary heroism displayed at the time of the explosion of a boiler of that vessel at San Diego, Calif., 21 July 1905.",
            "issued": "01/05/1906",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 32,
                "longitude": -117,
                "name": "San Diego, CA, USA"
            }
        },
        "birth": {
            "location name": " La Grange, Ind.",
            "date": {
                "day": 31,
                "month": 7,
                "year": 1880
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2370/hill-frank-e.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "",
            "organization": "U.S. Navy",
            "rank": "Ship's Cook First Class"
        }
    },
    {
        "death": true,
        "name": "Nelson, Oscar Frederick",
        "awarded": {
            "General Order number": 13,
            "accredited to": "Minnesota",
            "citation": "Serving on board the U.S.S. Bennington, for extraordinary heroism displayed at the time of the explosion of a boiler of that vessel at San Diego, Calif., 21 July 1905.",
            "issued": "01/05/1906",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 32,
                "longitude": -117,
                "name": "San Diego, CA, USA"
            }
        },
        "birth": {
            "location name": " Minneapolis, Minn.",
            "date": {
                "day": 5,
                "month": 11,
                "year": 1881
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2377/nelson-oscar-frederick.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "",
            "organization": "U.S. Navy",
            "rank": "Machinist's Mate First Class"
        }
    },
    {
        "death": true,
        "name": "Schmidt, Otto Diller",
        "awarded": {
            "General Order number": 13,
            "accredited to": "Nebraska",
            "citation": "While serving on board the U.S.S. Bennington for extraordinary heroism displayed at the time of the explosion of a boiler of that vessel at San Diego, Calif., 21 July 1905.",
            "issued": "01/05/1906",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 32,
                "longitude": -117,
                "name": "San Diego, CA, USA"
            }
        },
        "birth": {
            "location name": " Blair, Nebr.",
            "date": {
                "day": 10,
                "month": 8,
                "year": 1884
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2385/schmidt-otto-diller.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "",
            "organization": "U.S. Navy",
            "rank": "Seaman"
        }
    },
    {
        "death": true,
        "name": "Shacklette, William Sidney",
        "awarded": {
            "General Order number": 13,
            "accredited to": "Virginia",
            "citation": "For extraordinary heroism while serving on the U.S.S. Bennington at the time of the explosion of a boiler of that vessel at San Diego, Calif., 21 July 1905.",
            "issued": "01/05/1906",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 32,
                "longitude": -117,
                "name": "San Diego, CA, USA"
            }
        },
        "birth": {
            "location name": " Delaplane, Va.",
            "date": {
                "day": 17,
                "month": 5,
                "year": 1880
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2386/shacklette-william-sidney.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "",
            "organization": "U.S. Navy",
            "rank": "Hospital Steward"
        }
    },
    {
        "death": true,
        "name": "Kearby, Neel E.",
        "awarded": {
            "General Order number": 3,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity above and beyond the call of duty in action with the enemy, Col. Kearby volunteered to lead a flight of 4 fighters to reconnoiter the strongly defended enemy base at Wewak. Having observed enemy installations and reinforcements at 4 airfields, and secured important tactical information, he saw an enemy fighter below him, made a diving attack and shot it down in flames. The small formation then sighted approximately 12 enemy bombers accompanied by 36 fighters. Although his mission had been completed, his fuel was running low, and the numerical odds were 12 to 1, he gave the signal to attack. Diving into the midst of the enemy airplanes he shot down 3 in quick succession. Observing 1 of his comrades with 2 enemy fighters in pursuit, he destroyed both enemy aircraft. The enemy broke off in large numbers to make a multiple attack on his airplane but despite his peril he made one more pass before seeking cloud protection. Coming into the clear, he called his flight together and led them to a friendly base. Col. Kearby brought down 6 enemy aircraft in this action, undertaken with superb daring after his mission was completed.",
            "issued": "01/06/1944",
            "date": {
                "day": 11,
                "full": "1943-10-11",
                "month": 10,
                "year": 1943
            },
            "location": {
                "latitude": -3,
                "longitude": 143,
                "name": "Wewak, Papua New Guinea"
            }
        },
        "birth": {
            "location name": "Wichita Falls, Tex.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2814/kearby-neel-e.php"
        },
        "military record": {
            "company": "",
            "division": "Air Corps",
            "entered service at": "Dallas, Tex.",
            "organization": "U.S. Army",
            "rank": "Colonel"
        }
    },
    {
        "death": true,
        "name": "Knight, Noah O.",
        "awarded": {
            "General Order number": 2,
            "accredited to": "",
            "citation": "Pfc. Knight, a member of Company F, distinguished himself by conspicuous gallantry and indomitable courage above and beyond the call of duty in action against the enemy. He occupied a key position in the defense perimeter when waves of enemy troops passed through their own artillery and mortar concentrations and charged the company position. Two direct hits from an enemy emplacement demolished his bunker and wounded him. Disregarding personal safety, he moved to a shallow depression for a better firing vantage. Unable to deliver effective fire from his defilade position, he left his shelter, moved through heavy fire in full view of the enemy and, firing into the ranks of the relentless assailants, inflicted numerous casualties, momentarily stemming the attack. Later during another vicious onslaught, he observed an enemy squad infiltrating the position and, counterattacking, killed or wounded the entire group. Expending the last of his ammunition, he discovered 3 enemy soldiers entering the friendly position with demolition charges. Realizing the explosives would enable the enemy to exploit the breach, he fearlessly rushed forward and disabled 2 assailants with the butt of his rifle when the third exploded a demolition charge killing the 3 enemy soldiers and mortally wounding Pfc. Knight. Pfc. Knight's supreme sacrifice and consummate devotion to duty reflect lasting glory on himself and uphold the noble traditions of the military service.",
            "issued": "01/07/1953",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 38,
                "longitude": 126,
                "name": "Kowang-san, Wangjing-myeon, Yeoncheon-gun"
            }
        },
        "birth": {
            "location name": " Chesterfield County, S.C.",
            "date": {
                "day": 27,
                "month": 10,
                "year": 1929
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3140/knight-noah-o.php"
        },
        "military record": {
            "company": "Company F",
            "division": "7th Infantry Regiment, 3d Infantry Division",
            "entered service at": "Jefferson, S.C.",
            "organization": "U.S. Army",
            "rank": "Private First Class"
        }
    },
    {
        "death": true,
        "name": "Dervishian, Ernest H.",
        "awarded": {
            "General Order number": 3,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity at risk of life above and beyond the call of duty on 23 May 1944, in the vicinity of Cisterna, Italy. 2d Lt. Dervishian (then Tech. Sgt.) and 4 members of his platoon found themselves far ahead of their company after an aggressive advance in the face of enemy artillery and sniper fire. Approaching a railroad embankment, they observed a force of German soldiers hiding in dugouts. 2d Lt. Dervishian, directing his men to cover him, boldly moved forward and firing his carbine forced 10 Germans to surrender. His men then advanced and captured 15 more Germans occupying adjacent dugouts. The prisoners were returned to the rear to be picked up by advancing units. From the railroad embankment, 2d Lt. Dervishian and his men then observed 9 Germans who were fleeing across a ridge. He and his men opened fire and 3 of the enemy were wounded. As his men were firing, 2d Lt. Dervishian, unnoticed, fearlessly dashed forward alone and captured all of the fleeing enemy before his companions joined him on the ridge. At this point 4 other men joined 2d Lt. Dervishian's group. An attempt was made to send the 4 newly arrived men along the left flank of a large, dense vineyard that lay ahead, but murderous machinegun fire forced them back. Deploying his men, 2d Lt. Dervishian moved to the front of his group and led the advance into the vineyard. He and his men suddenly became pinned down by a machinegun firing at them at a distance of 15 yards. Feigning death while the hostile weapon blazed away at him, 2d Lt. Dervishian assaulted the position during a halt in the firing, using a hand grenade and carbine fire, and forced the 4 German crewmembers to surrender. The 4 men on the left flank were now ordered to enter the vineyard but encountered machinegun fire which killed 1 soldier and wounded another. At this moment the enemy intensified the fight by throwing potato-masher grenades at the valiant band of American soldiers within the vineyard. 2d Lt. Dervishian ordered his men to withdraw; but instead of following, jumped into the machinegun position he had just captured and opened fire with the enemy weapon in the direction of the second hostile machinegun nest. Observing movement in a dugout 2 or 3 yards to the rear, 2d Lt. Dervishian seized a machine pistol. Simultaneously blazing away at the entrance to the dugout to prevent its occupants from firing and firing his machinegun at the other German nest, he forced 5 Germans in each position to surrender. Determined to rid the area of all Germans, 2d Lt. Dervishian continued his advance alone. Noticing another machinegun position beside a house, he picked up an abandoned machine pistol and forced 6 more Germans to surrender by spraying their position with fire. Unable to locate additional targets in the vicinity, 2d Lt. Dervishian conducted these prisoners to the rear. The prodigious courage and combat skill exhibited by 2d Lt. Dervishian are exemplary of the finest traditions of the U.S. Armed Forces.",
            "issued": "01/08/1945",
            "date": {
                "day": 23,
                "full": "1944-5-23",
                "month": 5,
                "year": 1944
            },
            "location": {
                "latitude": 41,
                "longitude": 12,
                "name": "Cisterna LT, Italy"
            }
        },
        "birth": {
            "location name": "Richmond, Va.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2713/dervishian-ernest-h.php"
        },
        "military record": {
            "company": "",
            "division": "34th Infantry Division",
            "entered service at": "Richmond, Va.",
            "organization": "U.S. Army",
            "rank": "Second Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Mcgovern, Robert M.",
        "awarded": {
            "General Order number": 2,
            "accredited to": "",
            "citation": "1st Lt. McGovern, a member of Company A, distinguished himself by conspicuous gallantry and intrepidity at the risk of life above and beyond the call of duty in action against an armed enemy of the United Nations. As 1st Lt. McGovern led his platoon up a slope to engage hostile troops emplaced in bunker-type pillboxes with connecting trenches, the unit came under heavy machine gun and rifle fire from the crest of the hill, approximately 75 yards distant. Despite a wound sustained in this initial burst of withering fire, 1st Lt. McGovern, assured the men of his ability to continue on and urged them forward. Forging up the rocky incline, he fearlessly led the platoon to within several yards of its objective when the ruthless foe threw and rolled a vicious barrage of handgrenades on the group and halted the advance. Enemy fire increased in volume and intensity and 1st Lt. McGovern realizing that casualties were rapidly increasing and the morale of his men badly shaken, hurled back several grenades before they exploded. Then, disregarding his painful wound and weakened condition he charged a machine gun emplacement which was raking his position with flanking fire. When he was within 10 yards of the position a burst of fire ripped the carbine from his hands, but, undaunted, he continued his lone-man assault and, firing his pistol and throwing grenades, killed 7 hostile soldiers before falling mortally wounded in front of the gun he had silenced. 1st Lt. McGovern's incredible display of valor imbued his men with indomitable resolution to avenge his death. Fixing bayonets and throwing grenades, they charged with such ferocity that hostile positions were overrun and the enemy routed from the hill. The inspirational leadership, unflinching courage, and intrepid actions of 1st Lt. McGovern reflected utmost glory on himself and the honored tradition of the military services.",
            "issued": "01/08/1952",
            "date": {
                "day": 30,
                "full": "1951-1-30",
                "month": 1,
                "year": 1951
            },
            "location": {
                "latitude": 35,
                "longitude": 127,
                "name": "South Korea"
            }
        },
        "birth": {
            "location name": "Washington, D.C.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3155/mcgovern-robert-m.php"
        },
        "military record": {
            "company": "Company A",
            "division": "5th Cavalry Regiment, 1st Cavalry Division",
            "entered service at": "Washington, D.C.",
            "organization": "U.S. Army",
            "rank": "First Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Jordan, Mack A.",
        "awarded": {
            "General Order number": 3,
            "accredited to": "",
            "citation": "Pfc. Jordan, a member of Company K, distinguished himself by conspicuous gallantry and indomitable courage above and beyond the call of duty in action against the enemy. As a squad leader of the 3d Platoon, he was participating in a night attack on key terrain against a fanatical hostile force when the advance was halted by intense small-arms and automatic-weapons fire and a vicious barrage of handgrenades. Upon orders for the platoon to withdraw and reorganize, Pfc. Jordan voluntarily remained behind to provide covering fire. Crawling toward an enemy machine gun emplacement, he threw 3 grenades and neutralized the gun. He then rushed the position delivering a devastating hail of fire, killing several of the enemy and forcing the remainder to fall back to new positions. He courageously attempted to move forward to silence another machine gun but, before he could leave his position, the ruthless foe hurled explosives down the hill and in the ensuing blast both legs were severed. Despite mortal wounds, he continued to deliver deadly fire and held off the assailants until the platoon returned. Pfc. Jordan's unflinching courage and gallant self-sacrifice reflect lasting glory upon himself and uphold the noble traditions of the infantry and the military service.",
            "issued": "01/08/1953",
            "date": {
                "day": 15,
                "full": "1951-11-15",
                "month": 11,
                "year": 1951
            },
            "location": {
                "latitude": 36,
                "longitude": 128,
                "name": "??? ??? ???"
            }
        },
        "birth": {
            "location name": " Collins, Miss.",
            "date": {
                "day": 8,
                "month": 12,
                "year": 1928
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3132/jordan-mack-a.php"
        },
        "military record": {
            "company": "Company K",
            "division": "21st Infantry Regiment, 24th Infantry Division",
            "entered service at": "Collins, Miss.",
            "organization": "U.S. Army",
            "rank": "Private First Class"
        }
    },
    {
        "death": true,
        "name": "Burke, Frank",
        "awarded": {
            "General Order number": 4,
            "accredited to": "",
            "citation": "Also known as Francis X. Burke, he fought with extreme gallantry in the streets of war-torn Nuremberg, Germany, where the 1st Battalion, 15th Infantry, was engaged in rooting out fanatical defenders of the citadel of Nazism. As battalion transportation officer he had gone forward to select a motor-pool site, when, in a desire to perform more than his assigned duties and participate in the fight, he advanced beyond the lines of the forward riflemen. Detecting a group of about 10 Germans making preparations for a local counterattack, he rushed back to a nearby American company, secured a light machinegun with ammunition, and daringly opened fire on this superior force, which deployed and returned his fire with machine pistols, rifles, and rocket launchers. From another angle a German machinegun tried to blast him from his emplacement, but 1st Lt. Burke killed this guncrew and drove off the survivors of the unit he had originally attacked. Giving his next attention to enemy infantrymen in ruined buildings, he picked up a rifle dashed more than 100 yards through intense fire and engaged the Germans from behind an abandoned tank. A sniper nearly hit him from a cellar only 20 yards away, but he dispatched this adversary by running directly to the basement window, firing a full clip into it and then plunging through the darkened aperture to complete the job. He withdrew from the fight only long enough to replace his jammed rifle and secure grenades, then re-engaged the Germans. Finding his shots ineffective, he pulled the pins from 2 grenades, and, holding 1 in each hand, rushed the enemy-held building, hurling his missiles just as the enemy threw a potato masher grenade at him. In the triple explosion the Germans were wiped out and 1st Lt. Burke was dazed; but he emerged from the shower of debris that engulfed him, recovered his rifle, and went on to kill 3 more Germans and meet the charge of a machine pistolman, whom he cut down with 3 calmly delivered shots. He then retired toward the American lines and there assisted a platoon in a raging, 30-minute fight against formidable armed hostile forces. This enemy group was repulsed, and the intrepid fighter moved to another friendly group which broke the power of a German unit armed with a 20-mm. gun in a fierce fire fight. In 4 hours of heroic action, 1st Lt. Burke single-handedly killed 11 and wounded 3 enemy soldiers and took a leading role in engagements in which an additional 29 enemy were killed or wounded. His extraordinary bravery and superb fighting skill were an inspiration to his comrades, and his entirely voluntary mission into extremely dangerous territory hastened the fall of Nuremberg, in his battalion's sector.",
            "issued": "01/09/1946",
            "date": {
                "day": 17,
                "full": "1945-4-17",
                "month": 4,
                "year": 1945
            },
            "location": {
                "latitude": 49,
                "longitude": 11,
                "name": "Nuremberg, Germany"
            }
        },
        "birth": {
            "location name": " New York, N.Y.",
            "date": {
                "day": 29,
                "month": 9,
                "year": 1918
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2657/burke-frank.php"
        },
        "military record": {
            "company": "",
            "division": "15th Infantry, 3d Infantry Division",
            "entered service at": "Jersey City, N.J.",
            "organization": "U.S. Army",
            "rank": "First Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Lyell, William F.",
        "awarded": {
            "General Order number": 4,
            "accredited to": "",
            "citation": "Cpl. Lyell, a member of Company F, distinguished himself by conspicuous gallantry and outstanding courage above and beyond the call of duty in action against the enemy. When his platoon leader was killed, Cpl. Lyell assumed command and led his unit in an assault on strongly fortified enemy positions located on commanding terrain. When his platoon came under vicious, raking fire which halted the forward movement, Cpl. Lyell seized a 57mm. recoilless rifle and unhesitatingly moved ahead to a suitable firing position from which he delivered deadly accurate fire completely destroying an enemy bunker, killing its occupants. He then returned to his platoon and was resuming the assault when the unit was again subjected to intense hostile fire from 2 other bunkers. Disregarding his personal safety, armed with grenades he charged forward hurling grenades into 1 of the enemy emplacements, and although painfully wounded in this action he pressed on destroying the bunker and killing 6 of the foe. He then continued his attack against a third enemy position, throwing grenades as he ran forward, annihilating 4 enemy soldiers. He then led his platoon to the north slope of the hill where positions were occupied from which effective fire was delivered against the enemy in support of friendly troops moving up. Fearlessly exposing himself to enemy fire, he continuously moved about directing and encouraging his men until he was mortally wounded by enemy mortar fire. Cpl. Lyell's extraordinary heroism, indomitable courage, and aggressive leadership reflect great credit on himself and are in keeping with the highest traditions of the military service.",
            "issued": "01/09/1953",
            "date": {
                "day": 31,
                "full": "1951-8-31",
                "month": 8,
                "year": 1951
            },
            "location": {
                "latitude": 38,
                "longitude": 127,
                "name": "Chup'a-ryong, Wonnam-myeon, Cheorwon-gun"
            }
        },
        "birth": {
            "location name": "Hickman County, Tenn.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3151/lyell-william-f.php"
        },
        "military record": {
            "company": "Company F",
            "division": "17th Infantry Regiment, 7th Infantry Division",
            "entered service at": "Old Hickory, Tenn.",
            "organization": "U.S. Army",
            "rank": "Corporal"
        }
    },
    {
        "death": true,
        "name": "Church, James Robb",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "In addition to performing gallantly the duties pertaining to his position, voluntarily and unaided carried several seriously wounded men from the firing line to a secure position in the rear, m each instance being subjected to a very heavy fire and great exposure and danger.",
            "issued": "01/10/1906",
            "date": {
                "day": 24,
                "full": "1898-6-24",
                "month": 6,
                "year": 1898
            },
            "location": {
                "latitude": 19,
                "longitude": -75,
                "name": "Las Gu?simas, Cuba"
            }
        },
        "birth": {
            "location name": "Chicago, Ill.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2103/church-james-robb.php"
        },
        "military record": {
            "company": "",
            "division": "1st U.S. Volunteer Cavalry",
            "entered service at": "Washington, D.C.",
            "organization": "U.S. Army",
            "rank": "Assistant Surgeon"
        }
    },
    {
        "death": true,
        "name": "Semple, Robert",
        "awarded": {
            "General Order number": 120,
            "accredited to": "Pennsylvania",
            "citation": "For meritorious service under fire on the occasion of the landing of the American naval forces at Vera Cruz on 21 April 1914. C.G. Semple was then attached to the U.S.S. Florida as a chief turret captain.",
            "issued": "01/10/1924",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 19,
                "longitude": -96,
                "name": "Heroica Veracruz, Veracruz, Mexico"
            }
        },
        "birth": {
            "location name": " Pittsburgh, Pa.",
            "date": {
                "day": 18,
                "month": 8,
                "year": 1887
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2446/semple-robert.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "",
            "organization": "U.S. Navy",
            "rank": "Chief Gunner"
        }
    },
    {
        "death": true,
        "name": "Bertoldo, Vito R.",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "He fought with extreme gallantry while guarding 2 command posts against the assault of powerful infantry and armored forces which had overrun the battalion's main line of resistance. On the close approach of enemy soldiers, he left the protection of the building he defended and set up his gun in the street, there to remain for almost 12 hours driving back attacks while in full view of his adversaries and completely exposed to 88-mm., machinegun and small-arms fire. He moved back inside the command post, strapped his machinegun to a table and covered the main approach to the building by firing through a window, remaining steadfast even in the face of 88-mm. fire from tanks only 75 yards away. One shell blasted him across the room, but he returned to his weapon. When 2 enemy personnel carriers led by a tank moved toward his position, he calmly waited for the troops to dismount and then, with the tank firing directly at him, leaned out of the window and mowed down the entire group of more than 20 Germans. Some time later, removal of the command post to another building was ordered. M/Sgt. Bertoldo voluntarily remained behind, covering the withdrawal of his comrades and maintaining his stand all night. In the morning he carried his machinegun to an adjacent building used as the command post of another battalion and began a day-long defense of that position. He broke up a heavy attack, launched by a self-propelled 88-mm. gun covered by a tank and about 15 infantrymen. Soon afterward another 88-mm. weapon moved up to within a few feet of his position, and, placing the muzzle of its gun almost inside the building, fired into the room, knocking him down and seriously wounding others. An American bazooka team set the German weapon afire, and M/Sgt. Bertoldo went back to his machinegun dazed as he was and killed several of the hostile troops as they attempted to withdraw. It was decided to evacuate the command post under the cover of darkness, but before the plan could be put into operation the enemy began an intensive assault supported by fire from their tanks and heavy guns. Disregarding the devastating barrage, he remained at his post and hurled white phosphorous grenades into the advancing enemy troops until they broke and retreated. A tank less than 50 yards away fired at his stronghold, destroyed the machinegun and blew him across the room again but he once more returned to the bitter fight and, with a rifle, single-handedly covered the withdrawal of his fellow soldiers when the post was finally abandoned. With inspiring bravery and intrepidity M/Sgt. Bertoldo withstood the attack of vastly superior forces for more than 48 hours without rest or relief, time after time escaping death only by the slightest margin while killing at least 40 hostile soldiers and wounding many more during his grim battle against the enemy hordes.",
            "issued": "01/10/1946",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 48,
                "longitude": 7,
                "name": "Hatten, France"
            }
        },
        "birth": {
            "location name": " Decatur, Ill.",
            "date": {
                "day": 1,
                "month": 12,
                "year": 1916
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2637/bertoldo-vito-r.php"
        },
        "military record": {
            "company": "Company A",
            "division": "242d Infantry, 42d Infantry Division",
            "entered service at": "Decatur, Ill.",
            "organization": "U.S. Army",
            "rank": "Master Sergeant"
        }
    },
    {
        "death": true,
        "name": "Gilliland, Charles L.",
        "awarded": {
            "General Order number": 2,
            "accredited to": "",
            "citation": "Cpl. Gilliland, a member of Company I, distinguished himself by conspicuous gallantry and outstanding courage above and beyond the call of duty in action against the enemy. A numerically superior hostile force launched a coordinated assault against his company perimeter, the brunt of which was directed up a defile covered by his automatic rifle. His assistant was killed by enemy fire but Cpl. Gilliland, facing the full force of the assault, poured a steady fire into the foe which stemmed the onslaught. When 2 enemy soldiers escaped his raking fire and infiltrated the sector, he leaped from his foxhole, overtook and killed them both with his pistol. Sustaining a serious head wound in this daring exploit, he refused medical attention and returned to his emplacement to continue his defense of the vital defile. His unit was ordered back to new defensive positions but Cpl. Gilliland volunteered to remain to cover the withdrawal and hold the enemy at bay. His heroic actions and indomitable devotion to duty prevented the enemy from completely overrunning his company positions. Cpl. Gilliland's incredible valor and supreme sacrifice reflect lasting glory upon himself and are in keeping with the honored traditions of the military service.",
            "issued": "01/11/1955",
            "date": {
                "day": 25,
                "full": "1951-4-25",
                "month": 4,
                "year": 1951
            },
            "location": {
                "latitude": 35,
                "longitude": 127,
                "name": "South Korea"
            }
        },
        "birth": {
            "location name": " Mountain Home, Ark.",
            "date": {
                "day": 24,
                "month": 5,
                "year": 1933
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3116/gilliland-charles-l.php"
        },
        "military record": {
            "company": "Company I",
            "division": "7th Infantry Regiment, 3d Infantry Division",
            "entered service at": "Yellville (Marion County), Ark.",
            "organization": "U.S. Army",
            "rank": "Corporal"
        }
    },
    {
        "death": true,
        "name": "Dunham, Jason L.",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity at the risk of his life above and beyond the call of duty while serving as Rifle Squad Leader, 4th Platoon, Company K, Third Battalion, Seventh Marines (Reinforced), Regimental Combat Team 7, First Marine Division (Reinforced), on 14 April 2004. Corporal Dunham's squad was conducting a reconnaissance mission in the town of Karabilah, Iraq, when they heard rocket-propelled grenade and small arms fire erupt approximately two kilometers to the west. Corporal Dunham led his Combined Anti-Armor Team towards the engagement to provide fire support to their Battalion Commander's convoy, which had been ambushed as it was traveling to Camp Husaybah. As Corporal Dunham and his Marines advanced, they quickly began to receive enemy fire. Corporal Dunham ordered his squad to dismount their vehicles and led one of his fire teams on foot several blocks south of the ambushed convoy. Discovering seven Iraqi vehicles in a column attempting to depart, Corporal Dunham and his team stopped the vehicles to search them for weapons. As they approached the vehicles, an insurgent leaped out and attacked Corporal Dunham. Corporal Dunham wrestled the insurgent to the ground and in the ensuing struggle saw the insurgent release a grenade. Corporal Dunham immediately alerted his fellow Marines to the threat. Aware of the imminent danger and without hesitation, Corporal Dunham covered the grenade with his helmet and body, bearing the brunt of the explosion and shielding his Marines from the blast. In an ultimate and selfless act of bravery in which he was mortally wounded, he saved the lives of at least two fellow Marines. By his undaunted courage, intrepid fighting spirit, and unwavering devotion to duty, Corporal Dunham gallantly gave his life for his country, thereby reflecting great credit upon himself and upholding the highest traditions of the Marine Corps and the United States Naval Service.",
            "issued": "01/11/2007",
            "date": {
                "day": 14,
                "full": "2004-4-14",
                "month": 4,
                "year": 2004
            },
            "location": {
                "latitude": 33,
                "longitude": 43,
                "name": "Iraq"
            }
        },
        "birth": {
            "location name": " Scio, N.Y.",
            "date": {
                "day": 10,
                "month": 11,
                "year": 1981
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3458/dunham-jason-l.php"
        },
        "military record": {
            "company": "Company K, 3d Battalion",
            "division": "7th Marines",
            "entered service at": "Scio, N.Y.",
            "organization": "U.S. Marine Corps",
            "rank": "Corporal"
        }
    },
    {
        "death": true,
        "name": "Shea, Charles W.",
        "awarded": {
            "General Order number": 4,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity at risk of life above and beyond the call of duty, on 12 May 1944, near Mount Damiano, Italy. As 2d Lt. Shea and his company were advancing toward a hill occupied by the enemy, 3 enemy machineguns suddenly opened fire, inflicting heavy casualties upon the company and halting its advance. 2d Lt. Shea immediately moved forward to eliminate these machinegun nests in order to enable his company to continue its attack. The deadly hail of machinegun fire at first pinned him down, but, boldly continuing his advance, 2d Lt. Shea crept up to the first nest. Throwing several hand grenades, he forced the 4 enemy soldiers manning this position to surrender, and disarming them, he sent them to the rear. He then crawled to the second machinegun position, and after a short fire fight forced 2 more German soldiers to surrender. At this time, the third machinegun fired at him, and while deadly small arms fire pitted the earth around him, 2d Lt. Shea crawled toward the nest. Suddenly he stood up and rushed the emplacement and with well-directed fire from his rifle, he killed all 3 of the enemy machine gunners. 2d Lt. Shea's display of personal valor was an inspiration to the officers and men of his company.",
            "issued": "01/12/1945",
            "date": {
                "day": 12,
                "full": "1944-5-12",
                "month": 5,
                "year": 1944
            },
            "location": {
                "latitude": 41,
                "longitude": 12,
                "name": "Italy"
            }
        },
        "birth": {
            "location name": "New York, N.Y.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2991/shea-charles-w.php"
        },
        "military record": {
            "company": "Company F",
            "division": "350th Infantry. 88th Infantry Division",
            "entered service at": "New York, N.Y.",
            "organization": "U.S. Army",
            "rank": "Second Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Womack, Bryant H.",
        "awarded": {
            "General Order number": 5,
            "accredited to": "",
            "citation": "Pfc. Womack distinguished himself by conspicuous gallantry above and beyond the call of duty in action against the enemy. Pfc. Womack was the only medical aid man attached to a night combat patrol when sudden contact with a numerically superior enemy produced numerous casualties. Pfc. Womack went immediately to their aid, although this necessitated exposing himself to a devastating hail of enemy fire, during which he was seriously wounded. Refusing medical aid for himself, he continued moving among his comrades to administer aid. While he was aiding 1 man, he was again struck by enemy mortar fire, this time suffering the loss of his right arm. Although he knew the consequences should immediate aid not be administered, he still refused aid and insisted that all efforts be made for the benefit of others that were wounded. Although unable to perform the task himself, he remained on the scene and directed others in first aid techniques. The last man to withdraw, he walked until he collapsed from loss of blood, and died a few minutes later while being carried by his comrades. The extraordinary heroism, outstanding courage, and unswerving devotion to his duties displayed by Pfc. Womack reflect the utmost distinction upon himself and uphold the esteemed traditions of the U.S. Army.",
            "issued": "01/12/1953",
            "date": {
                "day": 12,
                "full": "1952-3-12",
                "month": 3,
                "year": 1952
            },
            "location": {
                "latitude": 36,
                "longitude": 127,
                "name": "?????, Yangchon-myeon, Nonsan-si"
            }
        },
        "birth": {
            "location name": "Mill Springs, N.C.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3210/womack-bryant-h.php"
        },
        "military record": {
            "company": "Medical Detachment",
            "division": "14th Infantry Regiment, 25th Infantry Division",
            "entered service at": "Mill Springs, N.C.",
            "organization": "U.S. Army",
            "rank": "Private First Class"
        }
    },
    {
        "death": true,
        "name": "Charette, William R.",
        "awarded": {
            "General Order number": -1,
            "accredited to": "Michigan",
            "citation": "For conspicuous gallantry and intrepidity at the risk of his life above and beyond the call of duty in action against enemy aggressor forces during the early morning hours. Participating in a fierce encounter with a cleverly concealed and well-entrenched enemy force occupying positions on a vital and bitterly contested outpost far in advance of the main line of resistance, HC3c. Charette repeatedly and unhesitatingly moved about through a murderous barrage of hostile small-arms and mortar fire to render assistance to his wounded comrades. When an enemy grenade landed within a few feet of a marine he was attending, he immediately threw himself upon the stricken man and absorbed the entire concussion of the deadly missile with his body. Although sustaining painful facial wounds, and undergoing shock from the intensity of the blast which ripped the helmet and medical aid kit from his person, HC3c. Charette resourcefully improvised emergency bandages by tearing off part of his clothing, and gallantly continued to administer medical aid to the wounded in his own unit and to those in adjacent platoon areas as well. Observing a seriously wounded comrade whose armored vest had been torn from his body by the blast from an exploding shell, he selflessly removed his own battle vest and placed it upon the helpless man although fully aware of the added jeopardy to himself. Moving to the side of another casualty who was suffering excruciating pain from a serious leg wound, HC3c. Charette stood upright in the trench line and exposed himself to a deadly hail of enemy fire in order to lend more effective aid to the victim and to alleviate his anguish while being removed to a position of safety. By his indomitable courage and inspiring efforts in behalf of his wounded comrades, HC3c. Charette was directly responsible for saving many lives. His great personal valor reflects the highest credit upon himself and enhances the finest traditions of the U.S. Naval Service.",
            "issued": "01/12/1954",
            "date": {
                "day": 27,
                "full": "1953-3-27",
                "month": 3,
                "year": 1953
            },
            "location": {
                "latitude": 35,
                "longitude": 127,
                "name": "South Korea"
            }
        },
        "birth": {
            "location name": "March 29, 1932, Ludington, Mich.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3093/charette-william-r.php"
        },
        "military record": {
            "company": "Company F, 2nd Battalion, 7th Marines",
            "division": "1st Marines",
            "entered service at": "Ludington, Mich.",
            "organization": "U.S. Navy",
            "rank": "Hospital Corpsman Third Class"
        }
    },
    {
        "death": true,
        "name": "West, Ernest E.",
        "awarded": {
            "General Order number": 7,
            "accredited to": "Wurtland, KY",
            "citation": "Pfc. West distinguished himself by conspicuous gallantry above and beyond the call of duty in action against the enemy. He voluntarily accompanied a contingent to locate and destroy a reported enemy outpost. Nearing the objective, the patrol was ambushed and suffered numerous casualties. Observing his wounded leader lying in an exposed position, Pfc. West ordered the troops to withdraw, then braved intense fire to reach and assist him. While attempting evacuation, he was attacked by 3 hostile soldiers employing grenades and small-arms fire. Quickly shifting his body to shelter the officer, he killed the assailants with his rifle, then carried the helpless man to safety. He was critically wounded and lost an eye in this action. but courageously returned through withering fire and bursting shells to assist the wounded. While evacuating 2 comrades, he closed with and killed 3 more of the foe. Pfc. West's indomitable spirit, consummate valor, and intrepid actions inspired all who observed him, reflect the highest credit on himself, and uphold the honored traditions of the military service.",
            "issued": "01/12/1954",
            "date": {
                "day": 12,
                "full": "1952-10-12",
                "month": 10,
                "year": 1952
            },
            "location": {
                "latitude": 35,
                "longitude": 127,
                "name": "South Korea"
            }
        },
        "birth": {
            "location name": " Russell, Ky.",
            "date": {
                "day": 2,
                "month": 9,
                "year": 1931
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3205/west-ernest-e.php"
        },
        "military record": {
            "company": "Company L",
            "division": "14th Infantry Regiment, 25th Infantry Division",
            "entered service at": "Wurtland, KY",
            "organization": "U.S. Army",
            "rank": "Private First Class"
        }
    },
    {
        "death": true,
        "name": "Collier, Gilbert G.",
        "awarded": {
            "General Order number": 3,
            "accredited to": "",
            "citation": "Sgt. Collier, a member of Company F, distinguished himself by conspicuous gallantry and indomitable courage above and beyond the call of duty in action against the enemy. Sgt. Collier was pointman and assistant leader of a combat patrol committed to make contact with the enemy. As the patrol moved forward through the darkness, he and his commanding officer slipped and fell from a steep, 60-foot cliff and were injured. Incapacitated by a badly sprained ankle which prevented immediate movement, the officer ordered the patrol to return to the safety of friendly lines. Although suffering from a painful back injury, Sgt. Collier elected to remain with his leader, and before daylight they managed to crawl back up and over the mountainous terrain to the opposite valley where they concealed themselves in the brush until nightfall, then edged toward their company positions. Shortly after leaving the daylight retreat they were ambushed and, in the ensuing fire fight, Sgt. Collier killed 2 hostile soldiers, received painful wounds, and was separated from his companion. Then, ammunition expended, he closed in hand-to-hand combat with 4 attacking hostile infantrymen, killing, wounding, and routing the foe with his bayonet. He was mortally wounded during this action, but made a valiant attempt to reach and assist his leader in a desperate effort to save his comrade's life without regard for his own personal safety. Sgt. Collier's unflinching courage, consummate devotion to duty, and gallant self-sacrifice reflect lasting glory upon himself and uphold the noble traditions of the military service.",
            "issued": "01/12/1955",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 35,
                "longitude": 127,
                "name": "South Korea"
            }
        },
        "birth": {
            "location name": " Hunter, Ark.",
            "date": {
                "day": 30,
                "month": 12,
                "year": 1930
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3096/collier-gilbert-g.php"
        },
        "military record": {
            "company": "Company F",
            "division": "223d Infantry Regiment, 40th Infantry Division",
            "entered service at": "Tichnor, Ark.",
            "organization": "U.S. Army",
            "rank": "Sergeant"
        }
    },
    {
        "death": true,
        "name": "Wilbur, William H.",
        "awarded": {
            "General Order number": 2,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity in action above and beyond the call of duty. Col. Wilbur prepared the plan for making contact with French commanders in Casablanca and obtaining an armistice to prevent unnecessary bloodshed. On 8 November 1942, he landed at Fedala with the leading assault waves where opposition had developed into a firm and continuous defensive line across his route of advance. Commandeering a vehicle, he was driven toward the hostile defenses under incessant fire, finally locating a French officer who accorded him passage through the forward positions. He then proceeded in total darkness through 16 miles of enemy-occupied country intermittently subjected to heavy bursts of fire, and accomplished his mission by delivering his letters to appropriate French officials in Casablanca. Returning toward his command, Col. Wilbur detected a hostile battery firing effectively on our troops. He took charge of a platoon of American tanks and personally led them in an attack and capture of the battery. From the moment of landing until the cessation of hostile resistance, Col. Wilbur's conduct was voluntary and exemplary in its coolness and daring.",
            "issued": "01/13/1943",
            "date": {
                "day": 8,
                "full": "1942-11-8",
                "month": 11,
                "year": 1942
            },
            "location": {
                "latitude": 33,
                "longitude": -7,
                "name": "Mohammedia, Morocco"
            }
        },
        "birth": {
            "location name": "Palmer, Mass.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3062/wilbur-william-h.php"
        },
        "military record": {
            "company": "",
            "division": "Western Task Force, North Africa",
            "entered service at": "Palmer, Mass.",
            "organization": "U.S. Army",
            "rank": "Colonel"
        }
    },
    {
        "death": true,
        "name": "Baker, Vernon",
        "awarded": {
            "General Order number": -1,
            "accredited to": "Cheyenne, WY",
            "citation": "For extraordinary heroism in action on 5 and 6 April 1945, near Viareggio, Italy. Then Second Lieutenant Baker demonstrated outstanding courage and leadership in destroying enemy installations, personnel and equipment during his company's attack against a strongly entrenched enemy in mountainous terrain. When his company was stopped by the concentration of fire from several machine gun emplacements, he crawled to one position and destroyed it, killing three Germans. Continuing forward, he attacked and enemy observation post and killed two occupants. With the aid of one of his men, Lieutenant Baker attacked two more machine gun nests, killing or wounding the four enemy soldiers occupying these positions. He then covered the evacuation of the wounded personnel of his company by occupying an exposed position and drawing the enemy's fire. On the following night Lieutenant Baker voluntarily led a battalion advance through enemy mine fields and heavy fire toward the division objective. Second Lieutenant Baker's fighting spirit and daring leadership were an inspiration to his men and exemplify the highest traditions of the Armed Forces.",
            "issued": "01/13/1997",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 43,
                "longitude": 10,
                "name": "Viareggio LU, Italy"
            }
        },
        "birth": {
            "location name": "17 December 1919",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2624/baker-vernon.php"
        },
        "military record": {
            "company": "Weapons Platoon, Company C",
            "division": "",
            "entered service at": "St. Maries, ID",
            "organization": "U.S. Army",
            "rank": "First Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Schoonover, Dan D.",
        "awarded": {
            "General Order number": 5,
            "accredited to": "",
            "citation": "Cpl. Schoonover, distinguished himself by conspicuous gallantry and outstanding courage above and beyond the call of duty in action against the enemy. He was in charge of an engineer demolition squad attached to an infantry company which was committed to dislodge the enemy from a vital hill. Realizing that the heavy fighting and intense enemy fire made it impossible to carry out his mission, he voluntarily employed his unit as a rifle squad and, forging up the steep barren slope, participated in the assault on hostile positions. When an artillery round exploded on the roof of an enemy bunker, he courageously ran forward and leaped into the position, killing 1 hostile infantryman and taking another prisoner. Later in the action, when friendly forces were pinned down by vicious fire from another enemy bunker, he dashed through the hail of fire, hurled grenades in the nearest aperture, then ran to the doorway and emptied his pistol, killing the remainder of the enemy. His brave action neutralized the position and enabled friendly troops to continue their advance to the crest of the hill. When the enemy counterattacked he constantly exposed himself to the heavy bombardment to direct the fire of his men and to call in an effective artillery barrage on hostile forces. Although the company was relieved early the following morning, he voluntarily remained in the area, manned a machine gun for several hours, and subsequently joined another assault on enemy emplacements. When last seen he was operating an automatic rifle with devastating effect until mortally wounded by artillery fire. Cpl. Schoonover's heroic leadership during 2 days of heavy fighting, superb personal bravery, and willing self-sacrifice inspired his comrades and saved many lives, reflecting lasting glory upon himself and upholding the honored traditions of the military service.",
            "issued": "01/14/1955",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 36,
                "longitude": 127,
                "name": "??????, Maero-dong, Daejeon"
            }
        },
        "birth": {
            "location name": " Boise, Idaho",
            "date": {
                "day": 8,
                "month": 10,
                "year": 1933
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3184/schoonover-dan-d.php"
        },
        "military record": {
            "company": "Company A",
            "division": "13th Engineer Combat Battalion, 7th Infantry Division",
            "entered service at": "Boise, Idaho",
            "organization": "U.S. Army",
            "rank": "Corporal"
        }
    },
    {
        "death": true,
        "name": "Avery, James",
        "awarded": {
            "General Order number": 71,
            "accredited to": "New York",
            "citation": "Served on board the U.S.S. Metacomet. As a member of the boat's crew which went to the rescue of the U.S. monitor Tecumseh when that vessel was struck by a torpedo in passing the enemy forts in Mobile Bay, 5 August 1864, S/man Avery braved the enemy fire which was said by the admiral to be \"one of the most galling\" he had ever seen, and aided in rescuing from death 10 of the crew of the Tecumseh, eliciting the admiration of both friend and foe.",
            "issued": "01/15/1866",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 30,
                "longitude": -87,
                "name": "Mobile Bay, Alabama, USA"
            }
        },
        "birth": {
            "location name": "1825, Scotland",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/44/avery-james.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "",
            "organization": "U.S. Navy",
            "rank": "Seaman"
        }
    },
    {
        "death": true,
        "name": "Baker, Charles",
        "awarded": {
            "General Order number": 71,
            "accredited to": "",
            "citation": "Served on board the U.S.S. Metacomet. As a member of the boat's crew which went to the rescue of the U.S. monitor Tecumseh when that vessel was struck by a torpedo in passing the enemy forts in Mobile Bay, 5 August 1864, Q.G. Baker braved the enemy fire which was said by the admiral to be \"one of the most galling\" he had ever seen, and aided in rescuing from death 10 of the crew of the Tecumseh, eliciting the admiration of both friend and foe.",
            "issued": "01/15/1866",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 30,
                "longitude": -87,
                "name": "Mobile Bay, Alabama, USA"
            }
        },
        "birth": {
            "location name": "1809, Georgetown, D.C.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/51/baker-charles.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "New York, N.Y.",
            "organization": "U.S. Navy",
            "rank": "Quarter Gunner"
        }
    },
    {
        "death": true,
        "name": "Hawks, Lloyd C.",
        "awarded": {
            "General Order number": 5,
            "accredited to": "",
            "citation": "For gallantry and intrepidity at risk of life above and beyond the call of duty. On 30 January 1944, at 3 p.m., near Carano, Italy, Pfc. Hawks braved an enemy counterattack in order to rescue 2 wounded men who, unable to move, were Iying in an exposed position within 30 yards of the enemy. Two riflemen, attempting the rescue, had been forced to return to their fighting holes by extremely severe enemy machinegun fire, after crawling only 10 yards toward the casualties. An aid man, whom the enemy could plainly identify as such, had been critically wounded in a similar attempt. Pfc. Hawks, nevertheless, crawled 50 yards through a veritable hail of machinegun bullets and flying mortar fragments to a small ditch, administered first aid to his fellow aid man who had sought cover therein, and continued toward the 2 wounded men 50 yards distant. An enemy machinegun bullet penetrated his helmet, knocking it from his head, momentarily stunning him. Thirteen bullets passed through his helmet as it lay on the ground within 6 inches of his body. Pfc. Hawks, crawled to the casualties, administered first aid to the more seriously wounded man and dragged him to a covered position 25 yards distant. Despite continuous automatic fire from positions only 30 yards away and shells which exploded within 25 yards, Pfc. Hawks returned to the second man and administered first aid to him. As he raised himself to obtain bandages from his medical kit his right hip was shattered by a burst of machinegun fire and a second burst splintered his left forearm. Displaying dogged determination and extreme self-control, Pfc. Hawks, despite severe pain and his dangling left arm, completed the task of bandaging the remaining casualty and with superhuman effort dragged him to the same depression to which he had brought the first man. Finding insufficient cover for 3 men at this point, Pfc. Hawks crawled 75 yards in an effort to regain his company, reaching the ditch in which his fellow aid man was lying.",
            "issued": "01/15/1945",
            "date": {
                "day": 30,
                "full": "1944-1-30",
                "month": 1,
                "year": 1944
            },
            "location": {
                "latitude": 46,
                "longitude": 11,
                "name": "38033 Carano TN, Italy"
            }
        },
        "birth": {
            "location name": " Becker, Minn.",
            "date": {
                "day": 13,
                "month": 1,
                "year": 1911
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2785/hawks-lloyd-c.php"
        },
        "military record": {
            "company": "Medical Detachment",
            "division": "30th Infantry, 3d Infantry Division",
            "entered service at": "Park Rapids, Minn.",
            "organization": "U.S. Army",
            "rank": "Private First Class"
        }
    },
    {
        "death": true,
        "name": "Michael, Edward S.",
        "awarded": {
            "General Order number": 5,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity above and beyond the call of duty while serving as pilot of a B17 aircraft on a heavy-bombardment mission to Germany, 11 April 1944. The group in which 1st Lt. Michael was flying was attacked by a swarm of fighters. His plane was singled out and the fighters pressed their attacks home recklessly, completely disregarding the Allied fighter escort and their own intense flak. His plane was riddled from nose to tail with exploding cannon shells and knocked out of formation, with a large number of fighters following it down, blasting it with cannon fire as it descended. A cannon shell exploded in the cockpit, wounded the copilot, wrecked the instruments, and blew out the side window. 1st Lt. Michael was seriously and painfully wounded in the right thigh. Hydraulic fluid filmed over the windshield making visibility impossible, and smoke filled the cockpit. The controls failed to respond and 3,000 feet were lost before he succeeded in leveling off. The radio operator informed him that the whole bomb bay was in flames as a result of the explosion of 3 cannon shells, which had ignited the incendiaries. With a full load of incendiaries in the bomb bay and a considerable gas load in the tanks, the danger of fire enveloping the plane and the tanks exploding seemed imminent. When the emergency release lever failed to function, 1st Lt. Michael at once gave the order to bail out and 7 of the crew left the plane. Seeing the bombardier firing the navigator's gun at the enemy planes, 1st Lt. Michael ordered him to bail out as the plane was liable to explode any minute. When the bombardier looked for his parachute he found that it had been riddled with 20mm. fragments and was useless. 1st Lt. Michael, seeing the ruined parachute, realized that if the plane was abandoned the bombardier would perish and decided that the only chance would be a crash landing. Completely disregarding his own painful and profusely bleeding wounds, but thinking only of the safety of the remaining crewmembers, he gallantly evaded the enemy, using violent evasive action despite the battered condition of his plane. After the plane had been under sustained enemy attack for fully 45 minutes, 1st Lt. Michael finally lost the persistent fighters in a cloud bank. Upon emerging, an accurate barrage of flak caused him to come down to treetop level where flak towers poured a continuous rain of fire on the plane. He continued into France, realizing that at any moment a crash landing might have to be attempted, but trying to get as far as possible to increase the escape possibilities if a safe landing could be achieved. 1st Lt. Michael flew the plane until he became exhausted from the loss of blood, which had formed on the floor in pools, and he lost consciousness. The copilot succeeded in reaching England and sighted an RAF field near the coast. 1st Lt. Michael finally regained consciousness and insisted upon taking over the controls to land the plane. The undercarriage was useless; the bomb bay doors were jammed open; the hydraulic system and altimeter were shot out. In addition, there was no airspeed indicator, the ball turret was jammed with the guns pointing downward, and the flaps would not respond. Despite these apparently insurmountable obstacles, he landed the plane without mishap.",
            "issued": "01/15/1945",
            "date": {
                "day": 11,
                "full": "1944-4-11",
                "month": 4,
                "year": 1944
            },
            "location": {
                "latitude": 53,
                "longitude": 10,
                "name": "Over, 21217 Seevetal, Germany"
            }
        },
        "birth": {
            "location name": " Chicago, Ill.",
            "date": {
                "day": 2,
                "month": 5,
                "year": 1918
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2890/michael-edward-s.php"
        },
        "military record": {
            "company": "",
            "division": "364th Bomber Squadron, 305th Bomber Group",
            "entered service at": "Chicago, Ill.",
            "organization": "U.S. Army",
            "rank": "First Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Montgomery, Jack C.",
        "awarded": {
            "General Order number": 5,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity at risk of life above and beyond the call of duty on 22 February 1944, near Padiglione, Italy. Two hours before daybreak a strong force of enemy infantry established themselves in 3 echelons at 50 yards, 100 yards, and 300 yards, respectively, in front of the rifle platoons commanded by 1st Lt. Montgomery. The closest position, consisting of 4 machineguns and 1 mortar, threatened the immediate security of the platoon position. Seizing an Ml rifle and several hand grenades, 1st Lt. Montgomery crawled up a ditch to within hand grenade range of the enemy. Then climbing boldly onto a little mound, he fired his rifle and threw his grenades so accurately that he killed 8 of the enemy and captured the remaining 4. Returning to his platoon, he called for artillery fire on a house, in and around which he suspected that the majority of the enemy had entrenched themselves. Arming himself with a carbine, he proceeded along the shallow ditch, as withering fire from the riflemen and machinegunners in the second position was concentrated on him. He attacked this position with such fury that 7 of the enemy surrendered to him, and both machineguns were silenced. Three German dead were found in the vicinity later that morning. 1st Lt. Montgomery continued boldly toward the house, 300 yards from his platoon position. It was now daylight, and the enemy observation was excellent across the flat open terrain which led to 1st Lt. Montgomery's objective. When the artillery barrage had lifted, 1st Lt. Montgomery ran fearlessly toward the strongly defended position. As the enemy started streaming out of the house, 1st Lt. Montgomery, unafraid of treacherous snipers, exposed himself daringly to assemble the surrendering enemy and send them to the rear. His fearless, aggressive, and intrepid actions that morning, accounted for a total of 11 enemy dead, 32 prisoners, and an unknown number of wounded. That night, while aiding an adjacent unit to repulse a counterattack, he was struck by mortar fragments and seriously wounded. The selflessness and courage exhibited by 1st Lt. Montgomery in alone attacking 3 strong enemy positions inspired his men to a degree beyond estimation.",
            "issued": "01/15/1945",
            "date": {
                "day": 22,
                "full": "1944-2-22",
                "month": 2,
                "year": 1944
            },
            "location": {
                "latitude": 43,
                "longitude": 12,
                "name": "61010 Padiglione PU, Italy"
            }
        },
        "birth": {
            "location name": "Long, Okla.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2897/montgomery-jack-c.php"
        },
        "military record": {
            "company": "",
            "division": "45th Infantry Division",
            "entered service at": "Sallisaw, Okla.",
            "organization": "U.S. Army",
            "rank": "First Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Newman, Beryl R.",
        "awarded": {
            "General Order number": 5,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity above and beyond the call of duty on 26 May 1944. Attacking the strongly held German Anzio-Nettuno defense line near Cisterna, Italy, 1st Lt. Newman, in the lead of his platoon, was suddenly fired upon by 2 enemy machineguns located on the crest of a hill about 100 yards to his front. The 4 scouts with him immediately hit the ground, but 1st Lt. Newman remained standing in order to see the enemy positions and his platoon then about 100 yards behind. Locating the enemy nests, 1st Lt. Newman called back to his platoon and ordered 1 squad to advance to him and the other to flank the enemy to the right. Then, still standing upright in the face of the enemy machinegun fire, 1st Lt. Newman opened up with his tommygun on the enemy nests. From this range, his fire was not effective in covering the advance of his squads, and 1 squad was pinned down by the enemy fire. Seeing that his squad was unable to advance, 1st Lt. Newman, in full view of the enemy gunners and in the face of their continuous fire, advanced alone on the enemy nests. He returned their fire with his tommygun and succeeded in wounding a German in each of the nests. The remaining 2 Germans fled from the position into a nearby house. Three more enemy soldiers then came out of the house and ran toward a third machinegun. 1st Lt. Newman, still relentlessly advancing toward them, killed 1 before he reached the gun, the second before he could fire it. The third fled for his life back into the house. Covering his assault by firing into the doors and windows of the house, 1st Lt. Newman, boldly attacking by himself, called for the occupants to surrender to him. Gaining the house, he kicked in the door and went inside. Although armed with rifles and machine pistols, the 11 Germans there, apparently intimidated, surrendered to the lieutenant without further resistance, 1st Lt. Newman, single-handed, had silenced 3 enemy machineguns, wounded 2 Germans, killed 2 more, and took 11 prisoners. This demonstration of sheer courage, bravery, and willingness to close with the enemy even in the face of such heavy odds, instilled into these green troops the confidence of veterans and reflects the highest traditions of the U.S. Armed Forces.",
            "issued": "01/15/1945",
            "date": {
                "day": 26,
                "full": "1944-5-26",
                "month": 5,
                "year": 1944
            },
            "location": {
                "latitude": 41,
                "longitude": 12,
                "name": "Cisterna LT, Italy"
            }
        },
        "birth": {
            "location name": "Baraboo, Wis.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2917/newman-beryl-r.php"
        },
        "military record": {
            "company": "",
            "division": "133d Infantry, 34th Infantry Division",
            "entered service at": "Baraboo, Wis.",
            "organization": "U.S. Army",
            "rank": "First Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Powers, Leo J.",
        "awarded": {
            "General Order number": 5,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity at risk of life above and beyond the call of duty. On 3 February 1944, this soldier's company was assigned the mission of capturing Hill 175, the key enemy strong point northwest of Cassino, Italy. The enemy, estimated to be at least 50 in strength, supported by machineguns emplaced in 3 pillboxes and mortar fire from behind the hill, was able to pin the attackers down and inflict 8 casualties. The company was unable to advance, but Pfc. Powers, a rifleman in 1 of the assault platoons, on his own initiative and in the face of the terrific fire, crawled forward to assault 1 of the enemy pillboxes which he had spotted. Armed with 2 handgrenades and well aware that if the enemy should see him it would mean almost certain death, Pfc. Powers crawled up the hill to within 15 yards of the enemy pillbox. Then standing upright in full view of the enemy gunners in order to throw his grenade into the small opening in the roof, he tossed a grenade into the pillbox. At this close, the grenade entered the pillbox, killed 2 of the occupants and 3 or 4 more fled the position, probably wounded. This enemy gun silenced, the center of the line was able to move forward again, but almost immediately came under machinegun fire from a second enemy pillbox on the left flank. Pfc. Powers, however, had located this pillbox, and crawled toward it with absolutely no cover if the enemy should see him. Raising himself in full view of the enemy gunners about 15 feet from the pillbox, Pfc. Powers threw his grenade into the pillbox, silencing this gun, killing another German and probably wounding 3 or 4 more who fled. Pfc. Powers, still acting on his own initiative, commenced crawling toward the third enemy pillbox in the face of heavy machine-pistol and machinegun fire. Skillfully availing himself of the meager cover and concealment, Pfc. Powers crawled up to within 10 yards of this pillbox fully exposed himself to the enemy gunners, stood upright and tossed the 2 grenades into the small opening in the roof of the pillbox. His grenades killed 2 of the enemy and 4 more, all wounded, came out and surrendered to Pfc. Powers, who was now unarmed. Pfc. Powers had worked his way over the entire company front, and against tremendous odds had single-handedly broken the backbone of this heavily defended and strategic enemy position, and enabled his regiment to advance into the city of Cassino. Pfc. Powers' fighting determination and intrepidity in battle exemplify the highest traditions of the U.S. Armed Forces.",
            "issued": "01/15/1945",
            "date": {
                "day": 3,
                "full": "1944-2-3",
                "month": 2,
                "year": 1944
            },
            "location": {
                "latitude": 41,
                "longitude": 13,
                "name": "Cassino FR, Italy"
            }
        },
        "birth": {
            "location name": "Anselmo, Nebr.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2955/powers-leo-j.php"
        },
        "military record": {
            "company": "",
            "division": "133d Infantry, 34th Infantry Division",
            "entered service at": "Alder Gulch, Mont.",
            "organization": "U.S. Army",
            "rank": "Private First Class"
        }
    },
    {
        "death": true,
        "name": "Dix, Drew Dennis",
        "awarded": {
            "General Order number": -1,
            "accredited to": "Denver, CO",
            "citation": "For conspicuous gallantry and intrepidity in action at the risk of his life above and beyond the call of duty. S/Sgt. Dix distinguished himself by exceptional heroism while serving as a unit adviser. Two heavily armed Viet Cong battalions attacked the Province capital city of Chau Phu resulting in the complete breakdown and fragmentation of the defenses of the city. S/Sgt. Dix, with a patrol of Vietnamese soldiers, was recalled to assist in the defense of Chau Phu. Learning that a nurse was trapped in a house near the center of the city, S/Sgt. Dix organized a relief force, successfully rescued the nurse, and returned her to the safety of the Tactical Operations Center. Being informed of other trapped civilians within the city, S/Sgt. Dix voluntarily led another force to rescue 8 civilian employees located in a building which was under heavy mortar and small-arms fire. S/Sgt. Dix then returned to the center of the city. Upon approaching a building, he was subjected to intense automatic rifle and machine gun fire from an unknown number of Viet Cong. He personally assaulted the building, killing 6 Viet Cong, and rescuing 2 Filipinos. The following day S/Sgt. Dix, still on his own volition, assembled a 20-man force and though under intense enemy fire cleared the Viet Cong out of the hotel, theater, and other adjacent buildings within the city. During this portion of the attack, Army Republic of Vietnam soldiers inspired by the heroism and success of S/Sgt. Dix, rallied and commenced firing upon the Viet Cong. S/Sgt. Dix captured 20 prisoners, including a high ranking Viet Cong official. He then attacked enemy troops who had entered the residence of the Deputy Province Chief and was successful in rescuing the official's wife and children. S/Sgt. Dix's personal heroic actions resulted in 14 confirmed Viet Cong killed in action and possibly 25 more, the capture of 20 prisoners, 15 weapons, and the rescue of the 14 United States and free world civilians. The heroism of S/Sgt. Dix was in the highest tradition and reflects great credit upon the U.S. Army.",
            "issued": "01/16/1969",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 10,
                "longitude": 106,
                "name": "Honorary Consulate General of the Republic of the Philippines, ph??ng 19, B?nh Th?nh, H? Ch? Minh, Vietnam"
            }
        },
        "birth": {
            "location name": " West Point, N.Y.",
            "date": {
                "day": 14,
                "month": 12,
                "year": 1944
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3263/dix-drew-dennis.php"
        },
        "military record": {
            "company": "",
            "division": "U.S. Senior Advisor Group",
            "entered service at": "Denver, Colo.",
            "organization": "U.S. Army",
            "rank": "Staff Sergeant"
        }
    },
    {
        "death": true,
        "name": "Jackson, Joe M.",
        "awarded": {
            "General Order number": -1,
            "accredited to": "Newnan, Ga.",
            "citation": "For conspicuous gallantry and intrepidity in action at the risk of his life above and beyond the call of duty. Lt. Col. Jackson distinguished himself as pilot of a C-123 aircraft. Lt. Col. Jackson volunteered to attempt the rescue of a 3-man USAF Combat Control Team from the special forces camp at Kham Duc. Hostile forces had overrun the forward outpost and established gun positions on the airstrip. They were raking the camp with small arms, mortars, light and heavy automatic weapons, and recoilless rifle fire. The camp was engulfed in flames and ammunition dumps were continuously exploding and littering the runway with debris. In addition, 8 aircraft had been destroyed by the intense enemy fire and 1 aircraft remained on the runway reducing its usable length to only 2,200 feet. To further complicate the landing, the weather was deteriorating rapidly, thereby permitting only 1 air strike prior to his landing. Although fully aware of the extreme danger and likely failure of such an attempt. Lt. Col. Jackson elected to land his aircraft and attempt to rescue. Displaying superb airmanship and extraordinary heroism, he landed his aircraft near the point where the combat control team was reported to be hiding. While on the ground, his aircraft was the target of intense hostile fire. A rocket landed in front of the nose of the aircraft but failed to explode. Once the combat control team was aboard, Lt. Col. Jackson succeeded in getting airborne despite the hostile fire directed across the runway in front of his aircraft. Lt. Col. Jackson's profound concern for his fellowmen, at the risk of his life above and beyond the call of duty are in keeping with the highest traditions of the U.S. Air Force and reflect great credit upon himself, and the Armed Forces of his country.",
            "issued": "01/16/1969",
            "date": {
                "day": 12,
                "full": "1968-5-12",
                "month": 5,
                "year": 1968
            },
            "location": {
                "latitude": 10,
                "longitude": 106,
                "name": "Honorary Consulate General of the Republic of the Philippines, ph??ng 19, B?nh Th?nh, H? Ch? Minh, Vietnam"
            }
        },
        "birth": {
            "location name": " Newnan, Ga.",
            "date": {
                "day": 14,
                "month": 3,
                "year": 1923
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3310/jackson-joe-m.php"
        },
        "military record": {
            "company": "311th Air Commando Squadron",
            "division": "",
            "entered service at": "Newnan, Ga.",
            "organization": "U.S. Air Force",
            "rank": "Lieutenant Colonel"
        }
    },
    {
        "death": true,
        "name": "Roosevelt, Theodore",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "Lieutenant Colonel Theodore Roosevelt distinguished himself by acts of bravery on 1 July, 1898, near Santiago de Cuba, Republic of Cuba, while leading a daring charge up San Juan Hill. Lieutenant Colonel Roosevelt, in total disregard for his personal safety, and accompanied by only four or five men, led a desperate and gallant charge up San Juan Hill, encouraging his troops to continue the assault through withering enemy fire over open countryside. Facing the enemy's heavy fire, he displayed extraordinary bravery throughout the charge, and was the first to reach the enemy trenches, where he quickly killed one of the enemy with his pistol, allowing his men to continue the assault. His leadership and valor turned the tide in the Battle for San Juan Hill. Lieutenant Colonel Roosevelt's extraordinary heroism and devotion to duty are in keeping with the highest traditions of military service and reflect great credit upon himself, his unit, and the United States Army.",
            "issued": "01/16/2001",
            "date": {
                "day": 1,
                "full": "1898-7-1",
                "month": 7,
                "year": 1898
            },
            "location": {
                "latitude": -34,
                "longitude": -58,
                "name": "Avenida San Juan, Buenos Aires, Ciudad Aut?noma de Buenos Aires, Argentina"
            }
        },
        "birth": {
            "location name": "",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2178/roosevelt-theodore.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "",
            "organization": "U.S. Army",
            "rank": "Lieutenant Colonel"
        }
    },
    {
        "death": true,
        "name": "Fisher, Bernard Francis",
        "awarded": {
            "General Order number": -1,
            "accredited to": "Kuna, ID",
            "citation": "For conspicuous gallantry and intrepidity at the risk of his life above and beyond the call of duty. On that date, the special forces camp at A Shau was under attack by 2,000 North Vietnamese Army regulars. Hostile troops had positioned themselves between the airstrip and the camp. Other hostile troops had surrounded the camp and were continuously raking it with automatic weapons fire from the surrounding hills. The tops of the 1,500-foot hills were obscured by an 800 foot ceiling, limiting aircraft maneuverability and forcing pilots to operate within range of hostile gun positions, which often were able to fire down on the attacking aircraft. During the battle, Maj. Fisher observed a fellow airman crash land on the battle-torn airstrip. In the belief that the downed pilot was seriously injured and in imminent danger of capture, Maj. Fisher announced his intention to land on the airstrip to effect a rescue. Although aware of the extreme danger and likely failure of such an attempt, he elected to continue. Directing his own air cover, he landed his aircraft and taxied almost the full length of the runway, which was littered with battle debris and parts of an exploded aircraft. While effecting a successful rescue of the downed pilot, heavy ground fire was observed, with 19 bullets striking his aircraft. In the face of the withering ground fire, he applied power and gained enough speed to lift-off at the overrun of the airstrip. Maj. Fisher's profound concern for his fellow airman, and at the risk of his life above and beyond the call of duty are in the highest traditions of the U.S. Air Force and reflect great credit upon himself and the Armed Forces of his country.",
            "issued": "01/19/1967",
            "date": {
                "day": 10,
                "full": "1966-3-10",
                "month": 3,
                "year": 1966
            },
            "location": {
                "latitude": 10,
                "longitude": 106,
                "name": "Bi?n H?a, Dong Nai, Vietnam"
            }
        },
        "birth": {
            "location name": " San Bernardino, Calif.",
            "date": {
                "day": 11,
                "month": 1,
                "year": 1927
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3275/fisher-bernard-francis.php"
        },
        "military record": {
            "company": "",
            "division": "1st Air Commandos",
            "entered service at": "Kuna, Idaho",
            "organization": "U.S. Air Force",
            "rank": "Major"
        }
    },
    {
        "death": true,
        "name": "Day, James L.",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity at the risk of his life above and beyond the call of duty as a squad leader serving with the Second Battalion, Twenty-Second Marines, Sixth Marine Division, in sustained combat operations against Japanese forces on Okinawa, Ryukya Islands from 14 to 17 May 1945. On the first day, Corporal Day rallied his squad and the remnants of another unit and led them to a critical position forward of the front lines of Sugar Loaf Hill. Soon thereafter, they came under an intense mortar and artillery barrage that was quickly followed by a ferocious ground attack by some forty Japanese soldiers. Despite the loss of one-half of his men, Corporal Day remained at the forefront, shouting encouragement, hurling hand grenades, and directing deadly fire, thereby repelling the determined enemy. Reinforced by six men, he led his squad in repelling three fierce night attacks but suffered five additional Marines killed and one wounded, whom he assisted to safety. Upon hearing nearby calls for corpsman assistance, Corporal Day braved heavy enemy fire to escort four seriously wounded Marines, one at a time, to safety. Corporal Day then manned a light machine gun, assisted by a wounded Marine, and halted another night attack. In the ferocious action, his machine gun was destroyed, and he suffered multiple white phosphorous and fragmentation wounds. He reorganized his defensive position in time to halt a fifth enemy attack with devastating small arms fire. On three separated occasions, Japanese soldiers closed to within a few feet of his foxhole, but were killed by Corporal Day. During the second day, the enemy conducted numerous unsuccessful swarming attacks against his exposed position. When the attacks momentarily subsided, over 70 enemy dead were counted around his position. On the third day, a wounded and exhausted Corporal Day repulsed the enemy's final attack, killing a dozen enemy soldiers at close range. Having yielded no ground and with more than 100 enemy dead around his position, Corporal Day preserved the lives of his fellow Marines and made a significant contribution to the success of the Okinawa campaign. By his extraordinary heroism, repeated acts of valor, and quintessential battlefield leadership, Corporal Day inspired the efforts of his outnumbered Marines to defeat a much larger enemy force, reflecting great credit upon himself and upholding the highest traditions of the Marine Corps and the United States Naval Service.",
            "issued": "01/20/1998",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 26,
                "longitude": 128,
                "name": "Ryukyu Islands, Japan"
            }
        },
        "birth": {
            "location name": "",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2707/day-james-l.php"
        },
        "military record": {
            "company": "2d Battalion",
            "division": "22d Marines, 6th Marine Division",
            "entered service at": "",
            "organization": "U.S. Marine Corps",
            "rank": "Corporal"
        }
    },
    {
        "death": true,
        "name": "Hamilton, Pierpont M.",
        "awarded": {
            "General Order number": 4,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity in action above and beyond the call of duty. On 8 November 1942, near Port Lyautey, French Morocco, Lt. Col. Hamilton volunteered to accompany Col. Demas Craw on a dangerous mission to the French commander, designed to bring about a cessation of hostilities. Driven away from the mouth of the Sebou River by heavy shelling from all sides, the landing boat was finally beached at Mehdia Plage despite continuous machinegun fire from 3 low-flying hostile planes. Driven in a light truck toward French headquarters, this courageous mission encountered intermittent firing, and as it neared Port Lyautey a heavy burst of machinegun fire was delivered upon the truck from pointblank range, killing Col. Craw instantly. Although captured immediately, after this incident, Lt. Col. Hamilton completed the mission.",
            "issued": "01/23/1943",
            "date": {
                "day": 8,
                "full": "1942-11-8",
                "month": 11,
                "year": 1942
            },
            "location": {
                "latitude": 34,
                "longitude": -6,
                "name": "Kenitra, Morocco"
            }
        },
        "birth": {
            "location name": " Tuxedo Park, N.Y.",
            "date": {
                "day": 3,
                "month": 8,
                "year": 1898
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2772/hamilton-pierpont-m.php"
        },
        "military record": {
            "company": "",
            "division": "Air Corps",
            "entered service at": "New York, N.Y.",
            "organization": "U.S. Army",
            "rank": "Major"
        }
    },
    {
        "death": true,
        "name": "Lyon, Edward E.",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "With 11 other scouts, without waiting for the supporting battalion to aid them or to get into position to do so, charged over a distance of about 150 yards and completely routed about 300 of the enemy, who were in line and in a position that could only be carried by a frontal attack.",
            "issued": "01/24/1906",
            "date": {
                "day": 13,
                "full": "1899-5-13",
                "month": 5,
                "year": 1899
            },
            "location": {
                "latitude": 15,
                "longitude": 120,
                "name": "San Miguel, Bulacan, Philippines"
            }
        },
        "birth": {
            "location name": "Hixton, Wis.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2247/lyon-edward-e.php"
        },
        "military record": {
            "company": "Company B",
            "division": "2d Oregon Volunteer Infantry",
            "entered service at": "Amboy, Wash.",
            "organization": "U.S. Army",
            "rank": "Private"
        }
    },
    {
        "death": true,
        "name": "Kelly, John D.",
        "awarded": {
            "General Order number": 6,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity at the risk of his life above and beyond the call of duty. On 25 June 1944, in the vicinity of Fort du Roule, Cherbourg, France, when Cpl. Kelly's unit was pinned down by heavy enemy machinegun fire emanating from a deeply entrenched strongpoint on the slope leading up to the fort, Cpl. Kelly volunteered to attempt to neutralize the strongpoint. Arming himself with a pole charge about 10 feet long and with 15 pounds of explosive affixed, he climbed the slope under a withering blast of machinegun fire and placed the charge at the strongpoint's base. The subsequent blast was ineffective, and again, alone and unhesitatingly, he braved the slope to repeat the operation. This second blast blew off the ends of the enemy guns. Cpl. Kelly then climbed the slope a third time to place a pole charge at the strongpoint's rear entrance. When this had been blown open he hurled hand grenades inside the position, forcing survivors of the enemy guncrews to come out and surrender The gallantry, tenacity of purpose, and utter disregard for personal safety displayed by Cpl. Kelly were an incentive to his comrades and worthy of emulation by all.",
            "issued": "01/24/1945",
            "date": {
                "day": 25,
                "full": "1944-6-25",
                "month": 6,
                "year": 1944
            },
            "location": {
                "latitude": 49,
                "longitude": -1,
                "name": "Cherbourg, France"
            }
        },
        "birth": {
            "location name": "Venango Township, Pa.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2820/kelly-john-d.php"
        },
        "military record": {
            "company": "Company E",
            "division": "314th Infantry, 79th Infantry Division",
            "entered service at": "Cambridge Springs, Pa.",
            "organization": "U.S. Army",
            "rank": "Technical Sergeant"
        }
    },
    {
        "death": true,
        "name": "Olson, Truman O.",
        "awarded": {
            "General Order number": 6,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity above and beyond the call of duty. Sgt. Olson, a light machine gunner, elected to sacrifice his life to save his company from annihilation. On the night of 30 January 1944, after a 16-hour assault on entrenched enemy positions in the course of which over one-third of Company B became casualties, the survivors dug in behind a horseshoe elevation, placing Sgt. Olson and his crew, with the 1 available machinegun, forward of their lines and in an exposed position to bear the brunt of the expected German counterattack. Although he had been fighting without respite, Sgt. Olson stuck grimly to his post all night while his guncrew was cut down, 1 by 1, by accurate and overwhelming enemy fire. Weary from over 24 hours of continuous battle and suffering from an arm wound, received during the night engagement, Sgt. Olson manned his gun alone, meeting the full force of an all-out enemy assault by approximately 200 men supported by mortar and machinegun fire which the Germans launched at daybreak on the morning of 31 January. After 30 minutes of fighting, Sgt. Olson was mortally wounded, yet, knowing that only his weapons stood between his company and complete destruction, he refused evacuation. For an hour and a half after receiving his second and fatal wound he continued to fire his machinegun, killing at least 20 of the enemy, wounding many more, and forcing the assaulting German elements to withdraw.",
            "issued": "01/24/1945",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 41,
                "longitude": 12,
                "name": "Italy"
            }
        },
        "birth": {
            "location name": "Christiana, Wis.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2929/olson-truman-o.php"
        },
        "military record": {
            "company": "Company B",
            "division": "7th Infantry, 3d Infantry Division",
            "entered service at": "Cambridge, Wis.",
            "organization": "U.S. Army",
            "rank": "Sergeant"
        }
    },
    {
        "death": true,
        "name": "Smith, Furman L.",
        "awarded": {
            "General Order number": 6,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity at the risk of his life above and beyond the call of duty. In its attack on a strong point, an infantry company was held up by intense enemy fire. The group to which Pvt. Smith belonged was far in the lead when attacked by a force of 80 Germans. The squad leader and 1 other man were seriously wounded and other members of the group withdrew to the company position, but Pvt. Smith refused to leave his wounded comrades. He placed them in the shelter of shell craters and then alone faced a strong enemy counterattack, temporarily checking it by his accurate rifle fire at close range, killing and wounding many of the foe. Against overwhelming odds, he stood his ground until shot down and killed, rifle in hand.",
            "issued": "01/24/1945",
            "date": {
                "day": 31,
                "full": "1944-5-31",
                "month": 5,
                "year": 1944
            },
            "location": {
                "latitude": 41,
                "longitude": 12,
                "name": "Lanuvio RM, Italy"
            }
        },
        "birth": {
            "location name": "Six Miles, S.C.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3002/smith-furman-l.php"
        },
        "military record": {
            "company": "",
            "division": "135th Infantry, 34th Infantry Division",
            "entered service at": "Central, S.C.",
            "organization": "U.S. Army",
            "rank": "Private"
        }
    },
    {
        "death": true,
        "name": "Reisinger, J. Monroe",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "Specially brave and meritorious conduct in the face of the enemy. Awarded under Act of Congress, January 25, 1907.",
            "issued": "01/25/1907",
            "date": {
                "day": 1,
                "full": "1863-7-1",
                "month": 7,
                "year": 1863
            },
            "location": {
                "latitude": 39,
                "longitude": -77,
                "name": "Gettysburg, PA 17325, USA"
            }
        },
        "birth": {
            "location name": "Beaver County, Pa.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/1123/reisinger-j-monroe.php"
        },
        "military record": {
            "company": "Company H",
            "division": "150th Pennsylvania Infantry",
            "entered service at": "Meadville, Pa.",
            "organization": "U.S. Army",
            "rank": "Corporal"
        }
    },
    {
        "death": true,
        "name": "Beaudoin, Raymond O.",
        "awarded": {
            "General Order number": 9,
            "accredited to": "",
            "citation": "He was leading the 2d Platoon of Company F over flat, open terrain to Hamelin, Germany, when the enemy went into action with machineguns and automatic weapons, laying down a devastating curtain of fire which pinned his unit to the ground. By rotating men in firing positions he made it possible for his entire platoon to dig in, defying all the while the murderous enemy fire to encourage his men and to distribute ammunition. He then dug in himself at the most advanced position, where he kept up a steady fire, killing 6 hostile soldiers, and directing his men in inflicting heavy casualties on the numerically superior opposing force. Despite these defensive measures, however, the position of the platoon became more precarious, for the enemy had brought up strong reinforcements and was preparing a counterattack. Three men, sent back at intervals to obtain ammunition and reinforcements, were killed by sniper fire. To relieve his command from the desperate situation, 1st Lt. Beaudoin decided to make a l-man attack on the most damaging enemy sniper nest 90 yards to the right flank, and thereby divert attention from the runner who would attempt to pierce the enemy's barrier of bullets and secure help. Crawling over completely exposed ground, he relentlessly advanced, undeterred by 8 rounds of bazooka fire which threw mud and stones over him or by rifle fire which ripped his uniform. Ten yards from the enemy position he stood up and charged. At point-blank range he shot and killed 2 occupants of the nest; a third, who tried to bayonet him, he overpowered and killed with the butt of his carbine; and the fourth adversary was cut down by the platoon's rifle fire as he attempted to flee. He continued his attack by running toward a dugout, but there he was struck and killed by a burst from a machinegun. By his intrepidity, great fighting skill, and supreme devotion to his responsibility for the well-being of his platoon, 1st Lt. Beaudoin single-handedly accomplished a mission that enabled a messenger to secure help which saved the stricken unit and made possible the decisive defeat of the German forces.",
            "issued": "01/25/1946",
            "date": {
                "day": 6,
                "full": "1945-4-6",
                "month": 4,
                "year": 1945
            },
            "location": {
                "latitude": 52,
                "longitude": 9,
                "name": "Hamelin, Germany"
            }
        },
        "birth": {
            "location name": "Holyoke, Mass.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2630/beaudoin-raymond-o.php"
        },
        "military record": {
            "company": "Company F",
            "division": "119th Infantry, 30th Infantry Division",
            "entered service at": "Holyoke, Mass.",
            "organization": "U.S. Army",
            "rank": "First Lieutenant"
        }
    },
    {
        "death": true,
        "name": "May, Martin O.",
        "awarded": {
            "General Order number": 9,
            "accredited to": "",
            "citation": "He gallantly maintained a 3-day stand in the face of terrible odds when American troops fought for possession of the rugged slopes of legusuku-Yama on Ie Shima, Ryukyu Islands. After placing his heavy machinegun in an advantageous yet vulnerable position on a ridge to support riflemen, mortar and small arms fire from counterattacking Japanese. He repulsed this assault by sweeping the enemy with accurate bursts while explosions and ricocheting bullets threw blinding dust and dirt about him. He broke up a second counterattack by hurling grenades into the ?$???iI???' ??zHM?W??iOo=)4*??orces, and then refused to withdraw, volunteering to maintain his post and cover the movement of American riflemen as they reorganized to meet any further hostile action. The major effort of the enemy did not develop until the morning of 21 April. It found Pfc. May still supporting the rifle company in the face of devastating rifle, machinegun, and mortar fire. While many of the friendly troops about him became casualties, he continued to fire his machinegun until he was severely wounded and his gun rendered useless by the burst of a mortar shell. Refusing to withdraw from the violent action, he blasted fanatical Japanese troops with hand grenades until wounded again, this time mortally. By his intrepidity and the extreme tenacity with which he held firm until death against overwhelming force of Japanese, was largely responsible for maintaining the American lines, and inspired his comrades to efforts which later resulted in complete victory and seizure of the mountain stronghold.",
            "issued": "01/25/1946",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 26,
                "longitude": 127,
                "name": "Iejima, Japan"
            }
        },
        "birth": {
            "location name": "Phillipsburg, N.J.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2866/may-martin-o.php"
        },
        "military record": {
            "company": "",
            "division": "307th Infantry, 77th Infantry Division",
            "entered service at": "Phillipsburg, N.J.",
            "organization": "U.S. Army",
            "rank": "Private First Class"
        }
    },
    {
        "death": true,
        "name": "Schowalter, Edward R., Jr.",
        "awarded": {
            "General Order number": 6,
            "accredited to": "",
            "citation": "1st Lt. Schowalter, commanding, Company A, distinguished himself by conspicuous gallantry and indomitable courage above and beyond the call of duty in action against the enemy. Committed to attack and occupy a key-approach to the primary objective, the 1st Platoon of his company came under heavy vicious small-arms, grenade, and mortar fire within 50 yards of the enemy-held strongpoint, halting the advance and inflicting several casualties. The 2d Platoon moved up in support at this juncture, and although wounded, 1st Lt. Schowalter continued to spearhead the assault. Nearing the objective he was severely wounded by a grenade fragment but, refusing medical aid, he led his men into the trenches and began routing the enemy from the bunkers with grenades. Suddenly from a burst of fire from a hidden cove off the trench he was again wounded. Although suffering from his wounds, he refused to relinquish command and continued issuing orders and encouraging his men until the commanding ground was secured and then he was evacuated. 1st Lt. Schowalter's unflinching courage, extraordinary heroism, and inspirational leadership reflect the highest credit upon himself and are in keeping with the highest traditions of the military service.",
            "issued": "01/28/1954",
            "date": {
                "day": 14,
                "full": "1952-10-14",
                "month": 10,
                "year": 1952
            },
            "location": {
                "latitude": 37,
                "longitude": 127,
                "name": "??? ??? ???"
            }
        },
        "birth": {
            "location name": " New Orleans, La.",
            "date": {
                "day": 24,
                "month": 12,
                "year": 1927
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3185/schowalter-edward-r-jr.php"
        },
        "military record": {
            "company": "Company A",
            "division": "31st Infantry Regiment, 7th Infantry Division",
            "entered service at": "Metairie, La.",
            "organization": "U.S. Army",
            "rank": "First Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Grant, Joseph Xavier",
        "awarded": {
            "General Order number": 4,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity in action at the risk of his life above and beyond the call of duty. Company A was participating in a search and destroy operation when the leading platoon made contact with the enemy and a fierce fire-fight ensued. Capt. Grant was ordered to disengage the 2 remaining platoons and to maneuver them to envelop and destroy the enemy. After beginning their movement, the platoons encountered intense enemy automatic weapons and mortar fire from the front and flank. Capt. Grant was ordered to deploy the platoons in a defensive position. As this action was underway, the enemy attacked, using \"human wave'' assaults, in an attempt to literally overwhelm Capt. Grant's force. In a magnificent display of courage and leadership, Capt. Grant moved under intense fire along the hastily formed defensive line repositioning soldiers to fill gaps created by the mounting casualties and inspiring and directing the efforts of his men to successfully repel the determined enemy onslaught. Seeing a platoon leader wounded, Capt. Grant hastened to his aid, in the face of the mass of fire of the entire enemy force, and moved him to a more secure position. During this action, Capt. Grant was wounded in the shoulder. Refusing medical treatment, he returned to the forward part of the perimeter, where he continued to lead and to inspire his men by his own indomitable example. While attempting to evacuate a wounded soldier, he was pinned down by fire from an enemy machine gun. With a supply of hand grenades, he crawled forward under a withering hail of fire and knocked out the machine gun, killing the crew, after which he moved the wounded man to safety. Learning that several other wounded men were pinned down by enemy fire forward of his position, Capt. Grant disregarded his painful wound and led 5 men across the fire-swept open ground to effect a rescue. Following return of the wounded men to the perimeter, a concentration of mortar fire landed in their midst and Capt. Grant was killed instantly. His heroic actions saved the lives of a number of his comrades and enabled the task force to repulse the vicious assaults and defeat the enemy. Capt. Grant's actions reflect great credit upon himself and were in keeping with the finest traditions of the U.S. Army.",
            "issued": "01/29/1968",
            "date": {
                "day": 13,
                "full": "1966-11-13",
                "month": 11,
                "year": 1966
            },
            "location": {
                "latitude": 10,
                "longitude": 106,
                "name": "Honorary Consulate General of the Republic of the Philippines, ph??ng 19, B?nh Th?nh, H? Ch? Minh, Vietnam"
            }
        },
        "birth": {
            "location name": " Cambridge, Mass.",
            "date": {
                "day": 28,
                "month": 3,
                "year": 1940
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3293/grant-joseph-xavier.php"
        },
        "military record": {
            "company": "Company A, 1st Battalion",
            "division": "14th Infantry, 25th Infantry Division",
            "entered service at": "Boston, Mass.",
            "organization": "U.S. Army",
            "rank": "Captain"
        }
    },
    {
        "death": true,
        "name": "Ammerman, Robert W.",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "Capture of battle flag of 8th North Carolina (C.S.A.), being one of the foremost in the assault.",
            "issued": "01/31/1865",
            "date": {
                "day": 12,
                "full": "1864-5-12",
                "month": 5,
                "year": 1864
            },
            "location": {
                "latitude": 37,
                "longitude": -78,
                "name": "Virginia, USA"
            }
        },
        "birth": {
            "location name": "Center County, Pa.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/24/ammerman-robert-w.php"
        },
        "military record": {
            "company": "Company B",
            "division": "148th Pennsylvania Infantry",
            "entered service at": "Center County, Pa.",
            "organization": "U.S. Army",
            "rank": "Private"
        }
    },
    {
        "death": true,
        "name": "Smith, Andrew Jackson",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "Corporal Andrew Jackson Smith, of Clinton, Illinois, a member of the 55th Massachusetts Voluntary Infantry, distinguished himself on 30 November 1864 by saving his regimental colors, after the color bearer was killed during al bloody charge called the Battle of Honey Hill, South Carolina. In the late afternoon, as the 55th Regiment pursued enemy skirmishers and conducted a running fight, they ran into a swampy area backed by a rise where the Confederate Army awaited. The surrounding woods and thick underbrush impeded infantry movement and artillery support. The 55th and 34th regiments formed columns to advance on the enemy position in a flanking movement. As the Confederates repelled other units, the 55th and 54th regiments continued to move into tanking positions. Forced into a narrow gorge crossing a swamp in the face of the enemy position, the 55th's Color-Sergeant was killed by an exploding shell, and Corporal Smith took the Regimental Colors from his hand and carried them through heavy grape and canister fire. Although half of the officers and a third of the enlisted men engaged in the fight were killed or wounded, Corporal Smith continued to expose himself to enemy fire by carrying the colors throughout the battle. Through his actions, the Regimental Colors of the 55th Infantry Regiment were not lost to the enemy. Corporal Andrew Jackson Smith's extraordinary valor in the face of deadly enemy fire is in keeping with the highest traditions of military service and reflect great credit upon him, the 55th Regiment, and the United States Army.",
            "issued": "01/31/2001",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 32,
                "longitude": -80,
                "name": "Honey Hill, SC 29936, USA"
            }
        },
        "birth": {
            "location name": "Kentucky",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/1261/smith-andrew-jackson.php"
        },
        "military record": {
            "company": "",
            "division": "55th Massachusetts Voluntary Infantry",
            "entered service at": "",
            "organization": "U.S. Army",
            "rank": "Corporal"
        }
    },
    {
        "death": true,
        "name": "Bender, Stanley",
        "awarded": {
            "General Order number": 7,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity at risk of life above and beyond the call of duty. On 17 August 1944, near La Lande, France, he climbed on top of a knocked-out tank, in the face of withering machinegun fire which had halted the advance of his company, in an effort to locate the source of this fire. Although bullets ricocheted off the turret at his feet, he nevertheless remained standing upright in full view of the enemy for over 2 minutes. Locating the enemy machineguns on a knoll 200 yards away, he ordered 2 squads to cover him and led his men down an irrigation ditch, running a gauntlet of intense machinegun fire, which completely blanketed 50 yards of his advance and wounded 4 of his men. While the Germans hurled hand grenades at the ditch, he stood his ground until his squad caught up with him, then advanced alone, in a wide flanking approach, to the rear of the knoll. He walked deliberately a distance of 40 yards, without cover, in full view of the Germans and under a hail of both enemy and friendly fire, to the first machinegun and knocked it out with a single short burst. Then he made his way through the strong point, despite bursting hand grenades, toward the second machinegun, 25 yards distant, whose 2-man crew swung the machinegun around and fired two bursts at him, but he walked calmly through the fire and, reaching the edge of the emplacement, dispatched the crew. Signaling his men to rush the rifle pits, he then walked 35 yards further to kill an enemy rifleman and returned to lead his squad in the destruction of the 8 remaining Germans in the strong point. His audacity so inspired the remainder of the assault company that the men charged out of their positions, shouting and yelling, to overpower the enemy roadblock and sweep into town, knocking out 2 antitank guns, killing 37 Germans and capturing 26 others. He had sparked and led the assault company in an attack which overwhelmed the enemy, destroying a roadblock, taking a town, seizing intact 3 bridges over the Maravenne River, and capturing commanding terrain which dominated the area.",
            "issued": "02/01/1945",
            "date": {
                "day": 17,
                "full": "1944-8-17",
                "month": 8,
                "year": 1944
            },
            "location": {
                "latitude": 43,
                "longitude": 0,
                "name": "La Lande, 65250 Izaux, France"
            }
        },
        "birth": {
            "location name": " Carlisle, W. Va.",
            "date": {
                "day": 31,
                "month": 10,
                "year": 1909
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2632/bender-stanley.php"
        },
        "military record": {
            "company": "Company E",
            "division": "7th Infantry, 3d Infantry Division",
            "entered service at": "Chicago, Ill.",
            "organization": "U.S. Army",
            "rank": "Staff Sergeant"
        }
    },
    {
        "death": true,
        "name": "Galt, William Wylie",
        "awarded": {
            "General Order number": 1,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity above and beyond the call of duty. Capt. Galt, Battalion S3, at a particularly critical period following 2 unsuccessful attacks by his battalion, of his own volition went forward and ascertained just how critical the situation was. He volunteered, at the risk of his life, personally to lead the battalion against the objective. When the lone remaining tank destroyer refused to go forward, Capt. Galt jumped on the tank destroyer and ordered it to precede the attack. As the tank destroyer moved forward, followed by a company of riflemen, Capt. Galt manned the .30-caliber machinegun in the turret of the tank destroyer, located and directed fire on an enemy 77mm. anti-tank gun, and destroyed it. Nearing the enemy positions, Capt. Galt stood fully exposed in the turret, ceaselessly firing his machinegun and tossing hand grenades into the enemy zigzag series of trenches despite the hail of sniper and machinegun bullets ricocheting off the tank destroyer. As the tank destroyer moved, Capt. Galt so maneuvered it that 40 of the enemy were trapped in one trench. When they refused to surrender, Capt. Galt pressed the trigger of the machinegun and dispatched every one of them. A few minutes later an 88mm shell struck the tank destroyer and Capt. Galt fell mortally wounded across his machinegun. He had personally killed 40 Germans and wounded many more. Capt. Galt pitted his judgment and superb courage against overwhelming odds, exemplifying the highest measure of devotion to his country and the finest traditions of the U.S. Army.",
            "issued": "02/01/1945",
            "date": {
                "day": 29,
                "full": "1944-5-29",
                "month": 5,
                "year": 1944
            },
            "location": {
                "latitude": 45,
                "longitude": 10,
                "name": "Villa, 37020 Marano di Valpolicella VR, Italy"
            }
        },
        "birth": {
            "location name": "Geyser, Mont.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2749/galt-william-wylie.php"
        },
        "military record": {
            "company": "",
            "division": "168th Infantry, 34th Infantry Division",
            "entered service at": "Stanford, Mont.",
            "organization": "U.S. Army",
            "rank": "Captain"
        }
    },
    {
        "death": true,
        "name": "Bennett, Emory L.",
        "awarded": {
            "General Order number": 11,
            "accredited to": "",
            "citation": "Pfc. Bennett a member of Company B, distinguished himself by conspicuous gallantry and intrepidity at the risk of his life above and beyond the call of duty in action against an armed enemy of the United Nations. At approximately 0200 hours, 2 enemy battalions swarmed up the ridge line in a ferocious banzai charge in an attempt to dislodge Pfc. Bennett's company from its defensive positions. Meeting the challenge, the gallant defenders delivered destructive retaliation, but the enemy pressed the assault with fanatical determination and the integrity of the perimeter was imperiled. Fully aware of the odds against him, Pfc. Bennett unhesitatingly left his foxhole, moved through withering fire, stood within full view of the enemy, and, employing his automatic rifle, poured crippling fire into the ranks of the onrushing assailants, inflicting numerous casualties. Although wounded, Pfc. Bennett gallantly maintained his l-man defense and the attack was momentarily halted. During this lull in battle, the company regrouped for counterattack, but the numerically superior foe soon infiltrated into the position. Upon orders to move back, Pfc. Bennett voluntarily remained to provide covering fire for the withdrawing elements, and, defying the enemy, continued to sweep the charging foe with devastating fire until mortally wounded. His willing self-sacrifice and intrepid actions saved the position from being overrun and enabled the company to effect an orderly withdrawal. Pfc. Bennett's unflinching courage and consummate devotion to duty reflect lasting glory on himself and the military service.",
            "issued": "02/01/1952",
            "date": {
                "day": 24,
                "full": "1951-6-24",
                "month": 6,
                "year": 1951
            },
            "location": {
                "latitude": 37,
                "longitude": 127,
                "name": "Dobongsan, Dobong-dong, Dobong-gu, Seoul, South Korea"
            }
        },
        "birth": {
            "location name": " New Smyrna Beach, Fla.",
            "date": {
                "day": 20,
                "month": 12,
                "year": 1929
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3085/bennett-emory-l.php"
        },
        "military record": {
            "company": "Company B",
            "division": "15th Infantry Regiment, 3d Infantry Division",
            "entered service at": "Cocoa, Fla.",
            "organization": "U.S. Army",
            "rank": "Private First Class"
        }
    },
    {
        "death": true,
        "name": "Brittin, Nelson V.",
        "awarded": {
            "General Order number": 12,
            "accredited to": "",
            "citation": "Sfc. Brittin, a member of Company I, distinguished himself by conspicuous gallantry and intrepidity above and beyond the call of duty in action. Volunteering to lead his squad up a hill, with meager cover against murderous fire from the enemy, he ordered his squad to give him support and, in the face of withering fire and bursting shells, he tossed a grenade at the nearest enemy position. On returning to his squad, he was knocked down and wounded by an enemy grenade. Refusing medical attention, he replenished his supply of grenades and returned, hurling grenades into hostile positions and shooting the enemy as they fled. When his weapon jammed, he leaped without hesitation into a foxhole and killed the occupants with his bayonet and the butt of his rifle. He continued to wipe out foxholes and, noting that his squad had been pinned down, he rushed to the rear of a machine gun position, threw a grenade into the nest, and ran around to its front, where he killed all 3 occupants with his rifle. Less than 100 yards up the hill, his squad again came under vicious fire from another camouflaged, sandbagged, machine gun nest well-flanked by supporting riflemen. Sfc. Brittin again charged this new position in an aggressive endeavor to silence this remaining obstacle and ran direct into a burst of automatic fire which killed him instantly. In his sustained and driving action, he had killed 20 enemy soldiers and destroyed 4 automatic weapons. The conspicuous courage, consummate valor, and noble self-sacrifice displayed by Sfc. Brittin enabled his inspired company to attain its objective and reflect the highest glory on himself and the heroic traditions of the military service.",
            "issued": "02/01/1952",
            "date": {
                "day": 7,
                "full": "1951-3-7",
                "month": 3,
                "year": 1951
            },
            "location": {
                "latitude": 35,
                "longitude": 127,
                "name": "South Korea"
            }
        },
        "birth": {
            "location name": "Audubon, N.J.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3087/brittin-nelson-v.php"
        },
        "military record": {
            "company": "Company I",
            "division": "19th Infantry Regiment",
            "entered service at": "Audubon, N.J.",
            "organization": "U.S. Army",
            "rank": "Sergeant First Class"
        }
    },
    {
        "death": true,
        "name": "Edwards, Junior D.",
        "awarded": {
            "General Order number": 13,
            "accredited to": "",
            "citation": "Sfc. Edwards, Company E, distinguished himself by conspicuous gallantry and intrepidity above and beyond the call of duty in action against the enemy. When his platoon, while assisting in the defense of a strategic hill, was forced out of its position and came under vicious raking fire from an enemy machine gun set up on adjacent high ground, Sfc. Edwards individually charged the hostile emplacement, throwing grenades as he advanced. The enemy withdrew but returned to deliver devastating fire when he had expended his ammunition. Securing a fresh supply of grenades, he again charged the emplacement, neutralized the weapon and killed the crew, but was forced back by hostile small-arms fire. When the enemy emplaced another machine gun and resumed fire, Sfc. Edwards again renewed his supply of grenades, rushed a third time through a vicious hail of fire, silenced this second gun and annihilated its crew. In this third daring assault he was mortally wounded but his indomitable courage and successful action enabled his platoon to regain and hold the vital strongpoint. Sfc. Edwards' consummate valor and gallant self-sacrifice reflect the utmost glory upon himself and are in keeping with the esteemed traditions of the infantry and military service.",
            "issued": "02/01/1952",
            "date": {
                "day": 2,
                "full": "1951-1-2",
                "month": 1,
                "year": 1951
            },
            "location": {
                "latitude": 35,
                "longitude": 127,
                "name": "South Korea"
            }
        },
        "birth": {
            "location name": " Indianola, Iowa",
            "date": {
                "day": 7,
                "month": 10,
                "year": 1926
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3111/edwards-junior-d.php"
        },
        "military record": {
            "company": "Company E",
            "division": "23d Infantry Regiment, 2d Infantry Division",
            "entered service at": "Indianola, Iowa",
            "organization": "U.S. Army",
            "rank": "Sergeant First Class"
        }
    },
    {
        "death": true,
        "name": "Goodblood, Clair",
        "awarded": {
            "General Order number": 14,
            "accredited to": "",
            "citation": "Cpl. Goodblood, a member of Company D, distinguished himself by conspicuous gallantry and intrepidity at the risk of his life above and beyond the call of duty in action against an armed enemy of the United Nations. Cpl. Goodblood, a machine gunner, was attached to Company B in defensive positions on thickly wooded key terrain under attack by a ruthless foe. In bitter fighting which ensued, the numerically superior enemy infiltrated the perimeter, rendering the friendly positions untenable. Upon order to move back, Cpl. Goodblood voluntarily remained to cover the withdrawal and, constantly vulnerable to heavy fire, inflicted withering destruction on the assaulting force. Seeing a grenade lobbed at his position, he shoved his assistant to the ground and flinging himself upon the soldier attempted to shield him. Despite his valorous act both men were wounded. Rejecting aid for himself, he ordered the ammunition bearer to evacuate the injured man for medical treatment. He fearlessly maintained his l-man defense, sweeping the onrushing assailants with fire until an enemy banzai charge carried the hill and silenced his gun. When friendly elements regained the commanding ground, Cpl. Goodblood's body was found lying beside his gun and approximately 100 hostile dead lay in the wake of his field of fire. Through his unflinching courage and willing self-sacrifice the onslaught was retarded, enabling his unit to withdraw, regroup, and resecure the strongpoint. Cpl. Goodblood's inspirational conduct and devotion to duty reflect lasting glory on himself and are in keeping with the noble traditions of the military service.",
            "issued": "02/01/1952",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 35,
                "longitude": 127,
                "name": "South Korea"
            }
        },
        "birth": {
            "location name": " Fort Kent, Maine",
            "date": {
                "day": 18,
                "month": 9,
                "year": 1929
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3118/goodblood-clair.php"
        },
        "military record": {
            "company": "Company D",
            "division": "7th Infantry Regiment",
            "entered service at": "Burnham, Maine",
            "organization": "U.S. Army",
            "rank": "Corporal"
        }
    },
    {
        "death": true,
        "name": "Hanson, Jack G.",
        "awarded": {
            "General Order number": 15,
            "accredited to": "",
            "citation": "Pfc. Hanson, a machine gunner with the 1st Platoon, Company F, distinguished himself by conspicuous gallantry and intrepidity at the risk of his life above and beyond the call of duty in action against an armed enemy of the United Nations. The company, in defensive positions on two strategic hills separated by a wide saddle, was ruthlessly attacked at approximately 0300 hours, the brunt of which centered on the approach to the divide within range of Pfc. Hanson's machine gun. In the initial phase of the action, 4 riflemen were wounded and evacuated and the numerically superior enemy, advancing under cover of darkness, infiltrated and posed an imminent threat to the security of the command post and weapons platoon. Upon orders to move to key terrain above and to the right of Pfc. Hanson's position, he voluntarily remained to provide protective fire for the withdrawal. Subsequent to the retiring elements fighting a rearguard action to the new location, it was learned that Pfc. Hanson's assistant gunner and 3 riflemen had been wounded and had crawled to safety, and that he was maintaining a lone-man defense. After the 1st Platoon reorganized, counterattacked, and resecured its original positions at approximately 0530 hours, Pfc. Hanson's body was found lying in front of his emplacement, his machine gun ammunition expended, his empty pistol in his right hand, and a machete with blood on the blade in his left hand, and approximately 22 enemy dead lay in the wake of his action. Pfc. Hanson's consummate valor, inspirational conduct, and willing self-sacrifice enabled the company to contain the enemy and regain the commanding ground, and reflect lasting glory on himself and the noble traditions of the military service.",
            "issued": "02/01/1952",
            "date": {
                "day": 7,
                "full": "1951-6-7",
                "month": 6,
                "year": 1951
            },
            "location": {
                "latitude": 35,
                "longitude": 127,
                "name": "South Korea"
            }
        },
        "birth": {
            "location name": " Escaptawpa, Miss.",
            "date": {
                "day": 18,
                "month": 9,
                "year": 1930
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3123/hanson-jack-g.php"
        },
        "military record": {
            "company": "Company F",
            "division": "31st Infantry Regiment",
            "entered service at": "Galveston, Tex.",
            "organization": "U.S. Army",
            "rank": "Private First Class"
        }
    },
    {
        "death": true,
        "name": "Hartell, Lee R.",
        "awarded": {
            "General Order number": 16,
            "accredited to": "",
            "citation": "1st. Lt. Hartell, a member of Battery A, distinguished himself by conspicuous gallantry and intrepidity at the risk of his life above and beyond the call of duty in action against an armed enemy of the United Nations. During the darkness of early morning, the enemy launched a ruthless attack against friendly positions on a rugged mountainous ridge. 1st Lt. Hartell, attached to Company B, 9th Infantry Regiment, as forward observer, quickly moved his radio to an exposed vantage on the ridge line to adjust defensive fires. Realizing the tactical advantage of illuminating the area of approach, he called for flares and then directed crippling fire into the onrushing assailants. At this juncture a large force of hostile troops swarmed up the slope in banzai charge and came within 10 yards of 1st Lt. Hartell's position. 1st Lt. Hartell sustained a severe hand wound in the ensuing encounter but grasped the microphone with his other hand and maintained his magnificent stand until the front and left flank of the company were protected by a close-in wall of withering fire, causing the fanatical foe to disperse and fall back momentarily. After the numerically superior enemy overran an outpost and was closing on his position, 1st Lt. Hartell, in a final radio call, urged the friendly elements to fire both batteries continuously. Although mortally wounded, 1st Lt. Hartell's intrepid actions contributed significantly to stemming the onslaught and enabled his company to maintain the strategic strongpoint. His consummate valor and unwavering devotion to duty reflect lasting glory on himself and uphold the noble traditions of the military service.",
            "issued": "02/01/1952",
            "date": {
                "day": 27,
                "full": "1951-8-27",
                "month": 8,
                "year": 1951
            },
            "location": {
                "latitude": 35,
                "longitude": 127,
                "name": "South Korea"
            }
        },
        "birth": {
            "location name": "Philadelphia, Pa.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3124/hartell-lee-r.php"
        },
        "military record": {
            "company": "Battery A",
            "division": "15th Field Artillery Battalion, 2d Infantry Division",
            "entered service at": "Danbury, Conn.",
            "organization": "U.S. Army",
            "rank": "First Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Kyle, Darwin K.",
        "awarded": {
            "General Order number": 17,
            "accredited to": "",
            "citation": "2d Lt. Kyle, distinguished himself by conspicuous gallantry and intrepidity above and beyond the call of duty in action against the enemy. When his platoon had been pinned down by intense fire, he completely exposed himself to move among and encourage his men to continue the advance against enemy forces strongly entrenched on Hill 185. Inspired by his courageous leadership, the platoon resumed the advance but was again pinned down when an enemy machine gun opened fire, wounding 6 of the men. 2d Lt. Kyle immediately charged the hostile emplacement alone, engaged the crew in hand-to-hand combat, killing all 3. Continuing on toward the objective, his platoon suddenly received an intense automatic-weapons fire from a well-concealed hostile position on its right flank. Again leading his men in a daring bayonet charge against this position, firing his carbine and throwing grenades, 2d Lt. Kyle personally destroyed 4 of the enemy before he was killed by a burst from an enemy submachinegun. The extraordinary heroism and outstanding leadership of 2d Lt. Kyle, and his gallant self-sacrifice, reflect the highest credit upon himself and are in keeping with the esteemed traditions of the military service.",
            "issued": "02/01/1952",
            "date": {
                "day": 16,
                "full": "1951-2-16",
                "month": 2,
                "year": 1951
            },
            "location": {
                "latitude": 35,
                "longitude": 127,
                "name": "South Korea"
            }
        },
        "birth": {
            "location name": " Jenkins, Ky.",
            "date": {
                "day": 1,
                "month": 6,
                "year": 1918
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3144/kyle-darwin-k.php"
        },
        "military record": {
            "company": "Company K",
            "division": "7th Infantry Regiment, 3d Infantry Division",
            "entered service at": "Racine, W. Va.",
            "organization": "U.S. Army",
            "rank": "Second Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Long, Charles R.",
        "awarded": {
            "General Order number": 18,
            "accredited to": "",
            "citation": "Sgt. Long, a member of Company M, distinguished himself by conspicuous gallantry and intrepidity above and beyond the call of duty in action against an armed enemy of the United Nations. When Company M, in a defensive perimeter on Hill 300, was viciously attacked by a numerically superior hostile force at approximately 0300 hours and ordered to withdraw, Sgt. Long, a forward observer for the mortar platoon, voluntarily remained at his post to provide cover by directing mortar fire on the enemy. Maintaining radio contact with his platoon, Sgt. Long coolly directed accurate mortar fire on the advancing foe. He continued firing his carbine and throwing handgrenades until his position was surrounded and he was mortally wounded. Sgt. Long's inspirational, valorous action halted the onslaught, exacted a heavy toll of enemy casualties, and enabled his company to withdraw, reorganize, counterattack, and regain the hill strongpoint. His unflinching courage and noble self-sacrifice reflect the highest credit on himself and are in keeping with the honored traditions of the military service.",
            "issued": "02/01/1952",
            "date": {
                "day": 12,
                "full": "1951-2-12",
                "month": 2,
                "year": 1951
            },
            "location": {
                "latitude": 37,
                "longitude": 128,
                "name": "??? ??? ???"
            }
        },
        "birth": {
            "location name": " Kansas City, Mo.",
            "date": {
                "day": 10,
                "month": 12,
                "year": 1923
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3148/long-charles-r.php"
        },
        "military record": {
            "company": "Company M",
            "division": "38th Infantry Regiment, 2d Infantry Division",
            "entered service at": "Kansas City, Mo.",
            "organization": "U.S. Army",
            "rank": "Sergeant"
        }
    },
    {
        "death": true,
        "name": "Moyer, Donald R.",
        "awarded": {
            "General Order number": 19,
            "accredited to": "",
            "citation": "Sfc. Moyer assistant platoon leader, Company E, distinguished himself by conspicuous gallantry and intrepidity at the risk of his life above and beyond the call of duty in action against an armed enemy of the United Nations. Sfc. Moyer's platoon was committed to attack and secure commanding terrain stubbornly defended by a numerically superior hostile force emplaced in well-fortified positions. Advancing up the rocky hill, the leading elements came under intense automatic weapons, small-arms, and grenade fire, wounding the platoon leader and platoon sergeant. Sfc. Moyer, realizing the success of the mission was imperiled, rushed to the head of the faltering column, assumed command and urged the men forward. Inspired by Sfc. Moyer's unflinching courage, the troops responded magnificently, but as they reached the final approaches to the rugged crest of the hill, enemy fire increased in volume and intensity and the fanatical foe showered the platoon with grenades. Undaunted, the valiant group forged ahead, and as they neared the top of the hill, the enemy hurled a grenade into their midst. Sfc. Moyer, fully aware of the odds against him, unhesitatingly threw himself on the grenade, absorbing the full blast of the explosion with his body. Although mortally wounded in this fearless display of valor, Sfc. Moyer's intrepid act saved several of his comrades from death or serious injury, and his inspirational leadership and consummate devotion to duty contributed significantly to the subsequent seizure of the enemy stronghold and reflect lasting glory on himself and the noble traditions of the military service.",
            "issued": "02/01/1952",
            "date": {
                "day": 20,
                "full": "1951-5-20",
                "month": 5,
                "year": 1951
            },
            "location": {
                "latitude": 37,
                "longitude": 126,
                "name": "Seoul, South Korea"
            }
        },
        "birth": {
            "location name": " Pontiac, Mich.",
            "date": {
                "day": 15,
                "month": 4,
                "year": 1930
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3164/moyer-donald-r.php"
        },
        "military record": {
            "company": "Company E",
            "division": "35th Infantry Regiment",
            "entered service at": "Keego Harbor, Oakland, Mich.",
            "organization": "U.S. Army",
            "rank": "Sergeant First Class"
        }
    },
    {
        "death": true,
        "name": "Sitman, William S.",
        "awarded": {
            "General Order number": 20,
            "accredited to": "",
            "citation": "Sfc. Sitman distinguished himself by conspicuous gallantry and intrepidity above and beyond the call of duty in action against an armed enemy of the United Nations. Sfc. Sitman, a machine gun section leader of Company M, was attached to Company I, under attack by a numerically superior hostile force. During the encounter when an enemy grenade knocked out his machine gun, a squad from Company I, immediately emplaced a light machine gun and Sfc. Sitman and his men remained to provide security for the crew. In the ensuing action, the enemy lobbed a grenade into the position and Sfc. Sitman, fully aware of the odds against him, selflessly threw himself on it, absorbing the full force of the explosion with his body. Although mortally wounded in this fearless display of valor, his intrepid act saved 5 men from death or serious injury, and enabled them to continue inflicting withering fire on the ruthless foe throughout the attack. Sfc. Sitman's noble self-sacrifice and consummate devotion to duty reflect lasting glory on himself and uphold the honored traditions of the military service.",
            "issued": "02/01/1952",
            "date": {
                "day": 14,
                "full": "1951-2-14",
                "month": 2,
                "year": 1951
            },
            "location": {
                "latitude": 37,
                "longitude": 127,
                "name": "Chip'yong-ni, Jipyeonghaetgol-gil, Jipyeong-myeon, Yangpyeong, South Korea"
            }
        },
        "birth": {
            "location name": "Bellwood, Pa.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3190/sitman-william-s.php"
        },
        "military record": {
            "company": "Company M",
            "division": "23d Infantry Regiment, 2d Infantry Division",
            "entered service at": "Bellwood, Pa.",
            "organization": "U.S. Army",
            "rank": "Sergeant First Class"
        }
    },
    {
        "death": true,
        "name": "Cholister, George Robert",
        "awarded": {
            "General Order number": -1,
            "accredited to": "New Jersey",
            "citation": "For extraordinary heroism in the line of his profession on the occasion of a fire on board the U S.S. Trenton. At 3:35 on the afternoon of 20 October 1924, while the Trenton was preparing to fire trial installation shots from the two 6-inch guns in the forward twin mount of that vessel, 2 charges of powder ignited. Twenty men were trapped in the twin mount. Four died almost immediately and 10 later from burns and inhalation of flames and gases. The 6 others were severely injured. Cholister, without thought of his own safety, on seeing that the charge of powder from the left gun was ignited, jumped for the right charge and endeavored to put it in the immersion tank. The left charge burst into flame and ignited the right charge before Cholister could accomplish his purpose. He fell unconscious while making a supreme effort to save his shipmates and died the following day.",
            "issued": "02/03/1933",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": -1,
                "longitude": -1,
                "name": ""
            }
        },
        "birth": {
            "location name": "",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2480/cholister-george-robert.php"
        },
        "military record": {
            "company": "",
            "division": "18 December 1898, Camden, N.J.",
            "entered service at": "",
            "organization": "U.S. Navy",
            "rank": "Boatswain's Mate First Class"
        }
    },
    {
        "death": true,
        "name": "Drexler, Henry Clay",
        "awarded": {
            "General Order number": -1,
            "accredited to": "Pennsylvania",
            "citation": "For extraordinary heroism in the line of his profession on the occasion of a fire on board the U.S.S. Trenton. At 3:35 on the afternoon of 20 October 1924, while the Trenton was preparing to fire trial installation shots from the two 6-inch guns in the forward twin mount of that vessel, 2 charges of powder ignited. Twenty men were trapped in the twin mount. Four died almost immediately and 10 later from burns and inhalation of flame and gases. The 6 others were severely injured. Ens. Drexler, without thought of his own safety, on seeing that the charge of powder for the left gun was ignited, jumped for the right charge and endeavored to put it in the immersion tank. The left charge burst into flame and ignited the right charge before Ens. Drexler could accomplish his purpose. He met his death while making a supreme effort to save his shipmates.",
            "issued": "02/03/1933",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": -1,
                "longitude": -1,
                "name": ""
            }
        },
        "birth": {
            "location name": " Braddock, Pa.",
            "date": {
                "day": 7,
                "month": 8,
                "year": 1901
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2483/drexler-henry-clay.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "",
            "organization": "U.S. Navy",
            "rank": "Ensign"
        }
    },
    {
        "death": true,
        "name": "Edwards, Walter Atlee",
        "awarded": {
            "General Order number": 123,
            "accredited to": "Pennsylvania",
            "citation": "For heroism in rescuing 482 men, women and children from the French military transport Vinh-Long, destroyed by fire in the Sea of Marmora, Turkey, on 16 December 1922. Lt. Comdr. Edwards, commanding the U.S.S. Bainbridge, placed his vessel alongside the bow of the transport and, in spite of several violent explosions which occurred on the burning vessel, maintained his ship in that position until all who were alive were taken on board. Of a total of 495 on board, 482 were rescued by his coolness, judgment and professional skill, which were combined with a degree of heroism that must reflect new glory on the U.S. Navy.",
            "issued": "02/04/1924",
            "date": {
                "day": 16,
                "full": "1922-12-16",
                "month": 12,
                "year": 1922
            },
            "location": {
                "latitude": 36,
                "longitude": 29,
                "name": "Marmara Caddesi, 48300 ?l?deniz/Mu?la, Turkey"
            }
        },
        "birth": {
            "location name": " Philadelphia, Pa.",
            "date": {
                "day": 8,
                "month": 11,
                "year": 1886
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2485/edwards-walter-atlee.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "",
            "organization": "U.S. Navy",
            "rank": "Lieutenant Commander"
        }
    },
    {
        "death": true,
        "name": "Carswell, Horace Jr.",
        "awarded": {
            "General Order number": 14,
            "accredited to": "",
            "citation": "He piloted a B-24 bomber in a one-plane strike against a Japanese convoy in the South China Sea on the night of 26 October 1944. Taking the enemy force of 12 ships escorted by at least 2 destroyers by surprise, he made 1 bombing run at 600 feet, scoring a near miss on 1 warship and escaping without drawing fire. He circled. and fully realizing that the convoy was thoroughly alerted and would meet his next attack with a barrage of antiaircraft fire, began a second low-level run which culminated in 2 direct hits on a large tanker. A hail of steel from Japanese guns, riddled the bomber, knocking out 2 engines, damaging a third, crippling the hydraulic system, puncturing 1 gasoline tank, ripping uncounted holes in the aircraft, and wounding the copilot; but by magnificent display of flying skill, Maj. Carswell controlled the plane's plunge toward the sea and carefully forced it into a halting climb in the direction of the China shore. On reaching land, where it would have been possible to abandon the staggering bomber, one of the crew discovered that his parachute had been ripped by flak and rendered useless; the pilot, hoping to cross mountainous terrain and reach a base. continued onward until the third engine failed. He ordered the crew to bail out while he struggled to maintain altitude. and, refusing to save himself, chose to remain with his comrade and attempt a crash landing. He died when the airplane struck a mountainside and burned. With consummate gallantry and intrepidity, Maj. Carswell gave his life in a supreme effort to save all members of his crew. His sacrifice. far beyond that required of him, was in keeping with the traditional bravery of America's war heroes.",
            "issued": "02/04/1946",
            "date": {
                "day": 26,
                "full": "1944-10-26",
                "month": 10,
                "year": 1944
            },
            "location": {
                "latitude": 35,
                "longitude": 104,
                "name": "China"
            }
        },
        "birth": {
            "location name": "Fort Worth, Tex.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2671/carswell-horace-jr.php"
        },
        "military record": {
            "company": "",
            "division": "308th Bombardment Group",
            "entered service at": "San Angelo, Tex.",
            "organization": "U.S. Army",
            "rank": "Major"
        }
    },
    {
        "death": true,
        "name": "Lee, Daniel W.",
        "awarded": {
            "General Order number": 14,
            "accredited to": "",
            "citation": "1st Lt. (then 2d Lt. ) Daniel W. Lee was leader of Headquarters Platoon, Troop A, 117th Cavalry Reconnaissance Squadron, Mechanized, at Montreval, France, on 2 September 1944, when the Germans mounted a strong counterattack, isolating the town and engaging its outnumbered defenders in a pitched battle. After the fight had raged for hours and our forces had withstood heavy shelling and armor-supported infantry attacks, 2d Lt. Lee organized a patrol to knock out mortars which were inflicting heavy casualties on the beleaguered reconnaissance troops. He led the small group to the edge of the town, sweeping enemy riflemen out of position on a ridge from which he observed 7 Germans manning 2 large mortars near an armored half-track about 100 yards down the reverse slope. Armed with a rifle and grenades, he left his men on the high ground and crawled to within 30 yards of the mortars, where the enemy discovered him and unleashed machine-pistol fire which shattered his right thigh. Scorning retreat, bleeding and suffering intense pain, he dragged himself relentlessly forward He killed 5 of the enemy with rifle fire and the others fled before he reached their position. Fired on by an armored car, he took cover behind the German half-track and there found a panzerfaust with which to neutralize this threat. Despite his wounds, he inched his way toward the car through withering machinegun fire, maneuvering into range, and blasted the vehicle with a round from the rocket launcher, forcing it to withdraw. Having cleared the slope of hostile troops, he struggle back to his men, where he collapsed from pain and loss of blood. 2d Lt. Lee's outstanding gallantry, willing risk of life, and extreme tenacity of purpose in coming to grips with the enemy, although suffering from grievous wounds, set an example of bravery and devotion to duty in keeping with the highest traditions of the military service.",
            "issued": "02/04/1946",
            "date": {
                "day": 2,
                "full": "1944-9-2",
                "month": 9,
                "year": 1944
            },
            "location": {
                "latitude": 49,
                "longitude": 4,
                "name": "Montreval, 51500 Villers-Allerand, France"
            }
        },
        "birth": {
            "location name": " Alma, Ga.",
            "date": {
                "day": 23,
                "month": 6,
                "year": 1919
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2841/lee-daniel-w.php"
        },
        "military record": {
            "company": "Troop A",
            "division": "117th Cavalry Reconnaissance Squadron",
            "entered service at": "Alma, Ga.",
            "organization": "U.S. Army",
            "rank": "First Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Mckinney, John R.",
        "awarded": {
            "General Order number": 14,
            "accredited to": "",
            "citation": "He fought with extreme gallantry to defend the outpost which had been established near Dingalan Bay. Just before daybreak approximately 100 Japanese stealthily attacked the perimeter defense, concentrating on a light machinegun position manned by 3 Americans. Having completed a long tour of duty at this gun, Pvt. McKinney was resting a few paces away when an enemy soldier dealt him a glancing blow on the head with a saber. Although dazed by the stroke, he seized his rifle, bludgeoned his attacker, and then shot another assailant who was charging him. Meanwhile, 1 of his comrades at the machinegun had been wounded and his other companion withdrew carrying the injured man to safety. Alone, Pvt. McKinney was confronted by 10 infantrymen who had captured the machinegun with the evident intent of reversing it to fire into the perimeter. Leaping into the emplacement, he shot 7 of them at pointblank range and killed 3 more with his rifle butt. In the melee the machinegun was rendered inoperative, leaving him only his rifle with which to meet the advancing Japanese, who hurled grenades and directed knee mortar shells into the perimeter. He warily changed position, secured more ammunition, and reloading repeatedly, cut down waves of the fanatical enemy with devastating fire or clubbed them to death in hand-to-hand combat. When assistance arrived, he had thwarted the assault and was in complete control of the area. Thirty-eight dead Japanese around the machinegun and 2 more at the side of a mortar 45 yards distant was the amazing toll he had exacted single-handedly. By his indomitable spirit, extraordinary fighting ability, and unwavering courage in the face of tremendous odds, Pvt. McKinney saved his company from possible annihilation and set an example of unsurpassed intrepidity.",
            "issued": "02/04/1946",
            "date": {
                "day": 11,
                "full": "1945-5-11",
                "month": 5,
                "year": 1945
            },
            "location": {
                "latitude": 15,
                "longitude": 120,
                "name": "Tarlac City PNR Station, Tarlac City, Tarlac, Philippines"
            }
        },
        "birth": {
            "location name": "Woodcliff, Ga.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2881/mckinney-john-r.php"
        },
        "military record": {
            "company": "Company A",
            "division": "123d Infantry, 33d Infantry Division",
            "entered service at": "Woodcliff, Ga.",
            "organization": "U.S. Army",
            "rank": "Sergeant"
        }
    },
    {
        "death": true,
        "name": "Woodford, Howard E.",
        "awarded": {
            "General Order number": 14,
            "accredited to": "",
            "citation": "He volunteered to investigate the delay in a scheduled attack by an attached guerrilla battalion. Reaching the line of departure, he found that the lead company, in combat for the first time, was immobilized by intense enemy mortar, machinegun, and rifle fire which had caused casualties to key personnel. Knowing that further failure to advance would endanger the flanks of adjacent units, as well as delay capture of the objective, he immediately took command of the company, evacuated the wounded, reorganized the unit under fire, and prepared to attack. He repeatedly exposed himself to draw revealing fire from the Japanese strongpoints, and then moved forward with a 5-man covering force to determine exact enemy positions. Although intense enemy machinegun fire killed 2 and wounded his other 3 men, S/Sgt. Woodford resolutely continued his patrol before returning to the company. Then, against bitter resistance, he guided the guerrillas up a barren hill and captured the objective, personally accounting for 2 hostile machinegunners and courageously reconnoitering strong defensive positions before directing neutralizing fire. After organizing a perimeter defense for the night, he was given permission by radio to return to his battalion, but, feeling that he was needed to maintain proper control, he chose to remain with the guerrillas. Before dawn the next morning the enemy launched a fierce suicide attack with mortars, grenades, and small-arms fire, and infiltrated through the perimeter. Though wounded by a grenade, S/Sgt. Woodford remained at his post calling for mortar support until bullets knocked out his radio. Then, seizing a rifle he began working his way around the perimeter, encouraging the men until he reached a weak spot where 2 guerrillas had been killed. Filling this gap himself, he fought off the enemy. At daybreak he was found dead in his foxhole, but 37 enemy dead were lying in and around his position. By his daring, skillful, and inspiring leadership, as well as by his gallant determination to search out and kill the enemy, S/Sgt. Woodford led an inexperienced unit in capturing and securing a vital objective, and was responsible for the successful continuance of a vitally important general advance.",
            "issued": "02/04/1946",
            "date": {
                "day": 6,
                "full": "1945-6-6",
                "month": 6,
                "year": 1945
            },
            "location": {
                "latitude": 15,
                "longitude": 120,
                "name": "Tarlac City PNR Station, Tarlac City, Tarlac, Philippines"
            }
        },
        "birth": {
            "location name": "Barberton, Ohio",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3074/woodford-howard-e.php"
        },
        "military record": {
            "company": "Company I",
            "division": "",
            "entered service at": "Barberton, Ohio",
            "organization": "U.S. Army",
            "rank": "Staff Sergeant"
        }
    },
    {
        "death": true,
        "name": "Nininger, Alexander R., Jr.",
        "awarded": {
            "General Order number": 9,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity above and beyond the call of duty in action with the enemy near Abucay, Bataan, Philippine Islands, on 12 January 1942. This officer, though assigned to another company not then engaged in combat, voluntarily attached himself to Company K, same regiment, while that unit was being attacked by enemy force superior in firepower. Enemy snipers in trees and foxholes had stopped a counterattack to regain part of position. In hand-to-hand fighting which followed, 2d Lt. Nininger repeatedly forced his way to and into the hostile position. Though exposed to heavy enemy fire, he continued to attack with rifle and handgrenades and succeeded in destroying several enemy groups in foxholes and enemy snipers. Although wounded 3 times, he continued his attacks until he was killed after pushing alone far within the enemy position. When his body was found after recapture of the position, 1 enemy officer and 2 enemy soldiers lay dead around him.",
            "issued": "02/05/1942",
            "date": {
                "day": 12,
                "full": "1942-1-12",
                "month": 1,
                "year": 1942
            },
            "location": {
                "latitude": 14,
                "longitude": 120,
                "name": "Bataan, Philippines"
            }
        },
        "birth": {
            "location name": "Gainesville, Ga.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2918/nininger-alexander-r-jr.php"
        },
        "military record": {
            "company": "",
            "division": "57th Infantry, Philippine Scouts",
            "entered service at": "Fort Lauderdale, Fla.",
            "organization": "U.S. Army",
            "rank": "Second Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Lee, Hubert L.",
        "awarded": {
            "General Order number": 21,
            "accredited to": "",
            "citation": "M/Sgt. Lee, a member of Company I, distinguished himself by conspicuous gallantry and intrepidity above and beyond the call of duty in action against the enemy. When his platoon was forced from its position by a numerically superior enemy force, and his platoon leader wounded, M/Sgt. Lee assumed command, regrouped the remnants of his unit, and led them in repeated assaults to regain the position. Within 25 yards of his objective he received a leg wound from grenade fragments, but refused assistance and continued the attack. Although forced to withdraw 5 times, each time he regrouped his remaining men and renewed the assault. Moving forward at the head of his small group in the fifth attempt, he was struck by an exploding grenade, knocked to the ground, and seriously wounded in both legs. Still refusing assistance, he advanced by crawling, rising to his knees to fire, and urging his men to follow. While thus directing the final assault he was wounded a third time, by small-arms fire. Persistently continuing to crawl forward, he directed his men in a final and successful attack which regained the vital objective. His intrepid leadership and determination led to the destruction of 83 of the enemy and withdrawal of the remainder, and was a vital factor in stopping the enemy attack. M/Sgt. Lee's indomitable courage, consummate valor, and outstanding leadership reflect the highest credit upon himself and are in keeping with the finest traditions of the infantry and the U.S. Army.",
            "issued": "02/05/1952",
            "date": {
                "day": 1,
                "full": "1951-2-1",
                "month": 2,
                "year": 1951
            },
            "location": {
                "latitude": 35,
                "longitude": 127,
                "name": "South Korea"
            }
        },
        "birth": {
            "location name": " Arburg, Mo.",
            "date": {
                "day": 2,
                "month": 2,
                "year": 1915
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3145/lee-hubert-l.php"
        },
        "military record": {
            "company": "Company I",
            "division": "23d Infantry Regiment, 2d Infantry Division",
            "entered service at": "Leland, Miss.",
            "organization": "U.S. Army",
            "rank": "Master Sergeant"
        }
    },
    {
        "death": true,
        "name": "Epps, Joseph L.",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "Discovered a party of insurgents inside a wall, climbed to the top of the wall, covered them with his gun, and forced them to stack arms and surrender.",
            "issued": "02/07/1902",
            "date": {
                "day": 4,
                "full": "1899-12-4",
                "month": 12,
                "year": 1899
            },
            "location": {
                "latitude": 13,
                "longitude": 122,
                "name": "Philippine Islands, Philippines"
            }
        },
        "birth": {
            "location name": "Jamestown, Mo.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2217/epps-joseph-l.php"
        },
        "military record": {
            "company": "Company B",
            "division": "33d Infantry",
            "entered service at": "Oklahoma Indian Territory",
            "organization": "U.S. Army",
            "rank": "Private"
        }
    },
    {
        "death": true,
        "name": "Wigle, Thomas W.",
        "awarded": {
            "General Order number": 8,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity at the risk of life above and beyond the call of duty in the vicinity of Monte Frassino, Italy. The 3d Platoon, in attempting to seize a strongly fortified hill position protected by 3 parallel high terraced stone walls, was twice thrown back by the withering crossfire. 2d Lt. Wigle, acting company executive, observing that the platoon was without an officer, volunteered to command it on the next attack. Leading his men up the bare, rocky slopes through intense and concentrated fire, he succeeded in reaching the first of the stone walls. Having himself boosted to the top and perching there in full view of the enemy, he drew and returned their fire while his men helped each other up and over. Following the same method, he successfully negotiated the second. Upon reaching the top of the third wall, he faced 3 houses which were the key point of the enemy defense. Ordering his men to cover him, he made a dash through a hail of machine-pistol fire to reach the nearest house. Firing his carbine as he entered, he drove the enemy before him out of the back door and into the second house. Following closely on the heels of the foe, he drove them from this house into the third where they took refuge in the cellar. When his men rejoined him, they found him mortally wounded on the cellar stairs which he had started to descend to force the surrender of the enemy. His heroic action resulted in the capture of 36 German soldiers and the seizure of the strongpoint.",
            "issued": "02/07/1945",
            "date": {
                "day": 14,
                "full": "1944-9-14",
                "month": 9,
                "year": 1944
            },
            "location": {
                "latitude": 44,
                "longitude": 11,
                "name": "Monte Frassino, 50031 Barberino di Mugello, Florence, Italy"
            }
        },
        "birth": {
            "location name": "Indianapolis, Ind.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3061/wigle-thomas-w.php"
        },
        "military record": {
            "company": "Company K",
            "division": "135th Infantry, 34th Infantry Division",
            "entered service at": "Detroit, Mich.",
            "organization": "U.S. Army",
            "rank": "Second Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Smith, Eugene P.",
        "awarded": {
            "General Order number": 189,
            "accredited to": "California",
            "citation": "Attached to U.S.S. Decatur; for several times entering compartments on board of Decatur immediately following an explosion on board that vessel, 9 September 1915, and locating and rescuing injured shipmates.",
            "issued": "02/08/1916",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": -1,
                "longitude": -1,
                "name": ""
            }
        },
        "birth": {
            "location name": " Truney, Ill.",
            "date": {
                "day": 8,
                "month": 8,
                "year": 1871
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2465/smith-eugene-p.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "",
            "organization": "U.S. Navy",
            "rank": "Chief Watertender"
        }
    },
    {
        "death": true,
        "name": "Nett, Robert B.",
        "awarded": {
            "General Order number": 16,
            "accredited to": "",
            "citation": "Rank and organization:  Captain (then Lieutenant), U.S. Army, Company E, 305th Infantry, 77th Infantry Division.  Place and date:  Near Cognon, Leyte, Philippine Islands, 14 December 1944.  Entered service at:  New Haven, Conn. Birth:  13 June 1922, New Haven, Conn.  G.O. No.: 16, 8 February 1946.  Citation:  He commanded Company E in an attack against a reinforced enemy battalion which had held up the American advance for 2 days from its entrenched positions around a 3 story concrete building.  With another infantry company and armored vehicles, Company E advanced against heavy machine-gun and other automatic weapons fire with Lt. Nett spearheading the assault against the strongpoint.  During the fierce hand to hand encounter which ensued, he killed 7 deeply entrenched Japanese with his rifle and bayonet and, although seriously wounded, gallantly continued to lead his men forward, refusing to relinquish his command.  Again he was severely wounded, but still unwilling to retire, pressed ahead with his troops to assure the capture of the objective.  Wounded once more in the final assault, he calmly made all arrangements for the resumption of the advance, turned over his command to another officer, and then walked unaided to the rear for medical treatment.  By his remarkable courage in continuing forward through sheer determination despite successive wounds, Lt. Nett provided an inspiring example for his men and was instrumental in the capture of a vital strongpoint.",
            "issued": "02/08/1946",
            "date": {
                "day": 14,
                "full": "194-12-14",
                "month": 12,
                "year": 194
            },
            "location": {
                "latitude": 13,
                "longitude": 122,
                "name": "Philippine Islands, Philippines"
            }
        },
        "birth": {
            "location name": "New Haven, Conn.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2915/nett-robert-b.php"
        },
        "military record": {
            "company": "Company E",
            "division": "305th Infantry, 77th Infantry Division",
            "entered service at": "New Haven, Conn.",
            "organization": "U.S. Army",
            "rank": "Captain"
        }
    },
    {
        "death": true,
        "name": "Peters, George J.",
        "awarded": {
            "General Order number": 16,
            "accredited to": "",
            "citation": "Pvt. Peters, a platoon radio operator with Company G, made a descent into Germany near Fluren, east of the Rhine. With 10 others, he landed in a field about 75 yards from a German machinegun supported by riflemen, and was immediately pinned down by heavy, direct fire. The position of the small unit seemed hopeless with men struggling to free themselves of their parachutes in a hail of bullets that cut them off from their nearby equipment bundles, when Pvt. Peters stood up without orders and began a l-man charge against the hostile emplacement armed only with a rifle and grenades. His single-handed assault immediately drew the enemy fire away from his comrades. He had run halfway to his objective, pitting rifle fire against that of the machinegun, when he was struck and knocked to the ground by a burst. Heroically, he regained his feet and struggled onward. Once more he was torn by bullets, and this time he was unable to rise. With gallant devotion to his self-imposed mission, he crawled directly into the fire that had mortally wounded him until close enough to hurl grenades which knocked out the machinegun, killed 2 of its operators, and drove protecting riflemen from their positions into the safety of a woods. By his intrepidity and supreme sacrifice, Pvt. Peters saved the lives of many of his fellow soldiers and made it possible for them to reach their equipment, organize, and seize their first objective.",
            "issued": "02/08/1946",
            "date": {
                "day": 24,
                "full": "1945-3-24",
                "month": 3,
                "year": 1945
            },
            "location": {
                "latitude": 51,
                "longitude": 6,
                "name": "Fl?ren, 46487 Wesel, Germany"
            }
        },
        "birth": {
            "location name": "Cranston, R.I.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2943/peters-george-j.php"
        },
        "military record": {
            "company": "Company G",
            "division": "507th Parachute Infantry, 17th Airborne Division",
            "entered service at": "Cranston, R.I.",
            "organization": "U.S. Army",
            "rank": "Private"
        }
    },
    {
        "death": true,
        "name": "Valdez, Jose F.",
        "awarded": {
            "General Order number": 16,
            "accredited to": "",
            "citation": "He was on outpost duty with 5 others when the enemy counterattacked with overwhelming strength. From his position near some woods 500 yards beyond the American lines he observed a hostile tank about 75 yards away, and raked it with automatic rifle fire until it withdrew. Soon afterward he saw 3 Germans stealthily approaching through the woods. Scorning cover as the enemy soldiers opened up with heavy automatic weapons fire from a range of 30 yards, he engaged in a fire fight with the attackers until he had killed all 3. The enemy quickly launched an attack with 2 full companies of infantrymen, blasting the patrol with murderous concentrations of automatic and rifle fire and beginning an encircling movement which forced the patrol leader to order a withdrawal. Despite the terrible odds, Pfc. Valdez immediately volunteered to cover the maneuver, and as the patrol 1 by 1 plunged through a hail of bullets toward the American lines, he fired burst after burst into the swarming enemy. Three of his companions were wounded in their dash for safety and he was struck by a bullet that entered his stomach and, passing through his body, emerged from his back. Overcoming agonizing pain, he regained control of himself and resumed his firing position, delivering a protective screen of bullets until all others of the patrol were safe. By field telephone he called for artillery and mortar fire on the Germans and corrected the range until he had shells falling within 50 yards of his position. For 15 minutes he refused to be dislodged by more than 200 of the enemy; then, seeing that the barrage had broken the counter attack, he dragged himself back to his own lines. He died later as a result of his wounds. Through his valiant, intrepid stand and at the cost of his own life, Pfc. Valdez made it possible for his comrades to escape, and was directly responsible for repulsing an attack by vastly superior enemy forces.",
            "issued": "02/08/1946",
            "date": {
                "day": 25,
                "full": "1945-1-25",
                "month": 1,
                "year": 1945
            },
            "location": {
                "latitude": 46,
                "longitude": 2,
                "name": "France"
            }
        },
        "birth": {
            "location name": "Governador, N. Mex.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3032/valdez-jose-f.php"
        },
        "military record": {
            "company": "Company B",
            "division": "7th Infantry, 3d Infantry Division",
            "entered service at": "Pleasant Grove, Utah",
            "organization": "U.S. Army",
            "rank": "Private First Class"
        }
    },
    {
        "death": true,
        "name": "Rascon, Alfred V.",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "Specialist Four Alfred Rascon, distinguished himself by a series of extraordinarily courageous acts on 16 March 1966, while assigned as a medic to the Reconnaissance Platoon, Headquarters Company, 1st Battalion (Airborne), 503rd Infantry, 173d Airborne Brigade (Separate). While moving to reinforce its sister battalion under intense enemy attack, the Reconnaissance Platoon came under heavy fire from a numerically superior enemy force. The intense enemy fire from crew-served weapons and grenades severely wounded several point squad soldiers. Specialist Rascon, ignoring directions to stay behind shelter until covering fire could be provided, made his way forward. He repeatedly tried to reach the severely wounded point machine-gunner laying on an open enemy trail, but was driven back each time by the withering fire. Disregarding his personal safety, he jumped to his feet, ignoring flying bullets and exploding grenades to reach his comrade. To protect him from further wounds, he intentionally placed his body between the soldier and enemy machine guns, sustaining numerous shrapnel injuries and a serious wound to the hip. Disregarding his serious wounds he dragged the larger soldier from the fire-raked trail. Hearing the second machine-gunner yell that he was running out of ammunition, Specialist Rascon, under heavy enemy fire crawled back to the wounded machine-gunner stripping him of his bandoleers of ammunition, giving them to the machine-gunner who continued his suppressive fire. Specialist Rascon fearing the abandoned machine gun, its ammunition and spare barrel could fall into enemy hands made his way to retrieve them. On the way, he was wounded in the face and torso by grenade fragments, but disregarded these wounds to recover the abandoned machine gun, ammunition and spare barrel items, enabling another soldier to provide added suppressive fire to the pinned-down squad. In searching for the wounded, he saw the point grenadier being wounded by small arms fire and grenades being thrown at him. Disregarding his own life and his numerous wounds, Specialist Rascon reached and covered him with his body absorbing the blasts from the exploding grenades, and saving the soldier's life, but sustaining additional wounds to his body. While making his way to the wounded point squad leader, grenades were hurled at the sergeant. Again, in complete disregard for his own life, he reached and covered the sergeant with his body, absorbing the full force of the grenade explosions. Once more Specialist Rascon was critically wounded by shrapnel, but disregarded his own wounds to continue to search and aid the wounded. Severely wounded, he remained on the battlefield, inspiring his fellow soldiers to continue the battle. After the enemy broke contact, he disregarded aid for himself, instead treating the wounded and directing their evacuation. Only after being placed on the evacuation helicopter did he allow aid to be given to him. Specialist Rascon's extraordinary valor in the face of deadly enemy fire, his heroism in rescuing the wounded, and his gallantry by repeatedly risking his own life for his fellow soldiers are in keeping with the highest traditions of military service and reflect great credit upon himself, his unit, and the United States Army.",
            "issued": "02/08/2000",
            "date": {
                "day": 16,
                "full": "1966-3-16",
                "month": 3,
                "year": 1966
            },
            "location": {
                "latitude": 10,
                "longitude": 106,
                "name": "Honorary Consulate General of the Republic of the Philippines, ph??ng 19, B?nh Th?nh, H? Ch? Minh, Vietnam"
            }
        },
        "birth": {
            "location name": "1945, Chihuahua, Mexico",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3397/rascon-alfred-v.php"
        },
        "military record": {
            "company": "",
            "division": "503rd Infantry,173d Airborne Brigade",
            "entered service at": "",
            "organization": "U.S. Army",
            "rank": "Specialist Fourth Class"
        }
    },
    {
        "death": true,
        "name": "Bloch, Orville Emil",
        "awarded": {
            "General Order number": 9,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity at risk of life above and beyond the call of duty. 1st Lt. Bloch undertook the task of wiping out 5 enemy machinegun nests that had held up the advance in that particular sector for 1 day. Gathering 3 volunteers from his platoon, the patrol snaked their way to a big rock, behind which a group of 3 buildings and 5 machinegun nests were located. Leaving the 3 men behind the rock, he attacked the first machinegun nest alone charging into furious automatic fire, kicking over the machinegun, and capturing the machinegun crew of 5. Pulling the pin from a grenade, he held it ready in his hand and dashed into the face of withering automatic fire toward this second enemy machinegun nest located at the corner of an adjacent building 15 yards distant. When within 20 feet of the machinegun he hurled the grenade, wounding the machinegunner, the other 2 members of the crew fleeing into a door of the house. Calling one of his volunteer group to accompany him, they advanced to the opposite end of the house, there contacting a machinegun crew of 5 running toward this house. 1st Lt Bloch and his men opened fire on the enemy crew, forcing them to abandon this machinegun and ammunition and flee into the same house. Without a moment's hesitation, 1st Lt. Bloch, unassisted, rushed through the door into a hail of small-arms fire, firing his carbine from the hip, and captured the 7 occupants, wounding 3 of them. 1st Lt. Bloch with his men then proceeded to a third house where they discovered an abandoned enemy machinegun and detected another enemy machinegun nest at the next corner of the building. The crew of 6 spotted 1st Lt. Bloch the instant he saw them. Without a moment's hesitation he dashed toward them. The enemy fired pistols wildly in his direction and vanished through a door of the house, 1st Lt. Bloch following them through the door, firing his carbine from the hip, wounding 2 of the enemy and capturing 6. Altogether 1st Lt. Bloch had single-handedly captured 19 prisoners, wounding 6 of them and eliminating a total of 5 enemy machinegun nests. His gallant and heroic actions saved his company many casualties and permitted them to continue the attack with new inspiration and vigor.",
            "issued": "02/10/1945",
            "date": {
                "day": 22,
                "full": "1944-9-22",
                "month": 9,
                "year": 1944
            },
            "location": {
                "latitude": 44,
                "longitude": 11,
                "name": "50033 Firenzuola FI, Italy"
            }
        },
        "birth": {
            "location name": "Big Falls, Wis.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2643/bloch-orville-emil.php"
        },
        "military record": {
            "company": "Company E",
            "division": "338th Infantry, 85th Infantry Division",
            "entered service at": "Streeter, N. Dak.",
            "organization": "U.S. Army",
            "rank": "First Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Mower, Charles E.",
        "awarded": {
            "General Order number": 17,
            "accredited to": "",
            "citation": "He was an assistant squad leader in an attack against strongly defended enemy positions on both sides of a stream running through a wooded gulch. As the squad advanced through concentrated fire, the leader was killed and Sgt. Mower assumed command. In order to bring direct fire upon the enemy, he had started to lead his men across the stream, which by this time was churned by machinegun and rifle fire, but he was severely wounded before reaching the opposite bank. After signaling his unit to halt, he realized his own exposed position was the most advantageous point from which to direct the attack, and stood fast. Half submerged, gravely wounded, but refusing to seek shelter or accept aid of any kind, he continued to shout and signal to his squad as he directed it in the destruction of 2 enemy machineguns and numerous riflemen. Discovering that the intrepid man in the stream was largely responsible for the successful action being taken against them, the remaining Japanese concentrated the full force of their firepower upon him, and he was killed while still urging his men on. Sgt. Mower's gallant initiative and heroic determination aided materially in the successful completion of his squad's mission. His magnificent leadership was an inspiration to those with whom he served.",
            "issued": "02/11/1946",
            "date": {
                "day": 3,
                "full": "1944-11-3",
                "month": 11,
                "year": 1944
            },
            "location": {
                "latitude": 11,
                "longitude": 124,
                "name": "Capoocan, Leyte, Philippines"
            }
        },
        "birth": {
            "location name": "Chippewa Falls, Wis.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2902/mower-charles-e.php"
        },
        "military record": {
            "company": "Company A",
            "division": "34th Infantry, 24th Infantry Division",
            "entered service at": "Chippewa Falls, Wis.",
            "organization": "U.S. Army",
            "rank": "Sergeant"
        }
    },
    {
        "death": true,
        "name": "Romesha, Clinton L.",
        "awarded": {
            "General Order number": -1,
            "accredited to": "California",
            "citation": "For conspicuous gallantry and intrepidity in action at the risk of his life above and beyond the call of duty while serving as a Section Leader with Bravo Troop, 3d Squadron, 61st Cavalry Regiment, 4th Brigade Combat Team, 4th Infantry Division, during combat operations against an armed enemy at Combat Outpost Keating, Kamdesh District, Nuristan Province, Afghanistan on 3 October 2009.  On that morning, Staff Sergeant Romesha and his comrades awakened to an attack by an estimated 300 enemy fighters occupying the high ground on all four sides of the complex, employing concentrated fire from recoilless rifles, rocket propelled grenades, anti-aircraft machine guns, mortars and small arms fire.  Staff Sergeant Romesha moved uncovered under intense enemy fire to conduct a reconnaissance of the battlefield and seek reinforcements from the barracks before returning to action with the support of an assistant gunner.  Staff Sergeant Romesha took out an enemy machine gun team and, while engaging a second, the generator he was using for cover was struck by a rocket-propelled grenade, inflicting him with shrapnel wounds.  Undeterred by his injuries, Staff Sergeant Romesha continued to fight and upon the arrival of another soldier to aid him and the assistant gunner, he again rushed through the exposed avenue to assemble additional soldiers.  Staff Sergeant Romesha then mobilized a five-man team and returned to the fight equipped with a sniper rifle.  With complete disregard for his own safety, Staff Sergeant Romesha continually exposed himself to heavy enemy fire, as he moved confidently about the battlefield engaging and destroying multiple enemy targets, including three Taliban fighters who had breached the combat outpost?s perimeter.  While orchestrating a successful plan to secure and reinforce key points of the battlefield, Staff Sergeant Romesha maintained radio communication with the tactical operations center.  As the enemy forces attacked with even greater ferocity, unleashing a barrage of rocket-propelled grenades and recoilless rifle rounds, Staff Sergeant Romesha identified the point of attack and directed air support to destroy over 30 enemy fighters.  After receiving reports that seriously injured soldiers were at a distant battle position, Staff Sergeant Romesha and his team provided covering fire to allow the injured soldiers to safely reach the aid station.  Upon receipt of orders to proceed to the next objective, his team pushed forward 100 meters under overwhelming enemy fire to recover and prevent the enemy fighters from taking the bodies of the fallen comrades.  Staff Sergeant Romesha?s heroic actions throughout the day-long battle were critical in suppressing an enemy that had far greater numbers.  His extraordinary efforts gave Bravo Troop the opportunity to regroup, reorganize and prepare for the counterattack that allowed the Troop to account for its personnel and secure Combat Post Keating.  Staff Sergeant Romesha?s discipline and extraordinary heroism above and beyond the call of duty reflect great credit upon himself, Bravo Troop, 3d Squadron, 61st Cavalry Regiment, 4th Brigade Combat Team, 4th Infantry Division and the United States Army.",
            "issued": "02/11/2013",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 35,
                "longitude": 70,
                "name": "Nurestan, Afghanistan"
            }
        },
        "birth": {
            "location name": "August 17, 1981 / Lake City, CA",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3482/romesha-clinton-l.php"
        },
        "military record": {
            "company": "3rd Squadron, 61st Calvary Regiment, 4th Brigade Combat Team",
            "division": "4th Infantry",
            "entered service at": "California",
            "organization": "U.S. Army",
            "rank": "Staff Sergeant"
        }
    },
    {
        "death": true,
        "name": "Crain, Morris E.",
        "awarded": {
            "General Order number": 18,
            "accredited to": "",
            "citation": "He led his platoon against powerful German forces during the struggle to enlarge the bridgehead across the Moder River. With great daring and aggressiveness he spearheaded the platoon in killing 10 enemy soldiers, capturing 12 more and securing its objective near an important road junction. Although heavy concentrations of artillery, mortar, and self-propelled gunfire raked the area, he moved about among his men during the day, exhorting them to great efforts and encouraging them to stand firm. He carried ammunition and maintained contact with the company command post, exposing himself to deadly enemy fire. At nightfall the enemy barrage became more intense and tanks entered the fray to cover foot troops while they bombarded our positions with grenades and rockets. As buildings were blasted by the Germans, the Americans fell back from house to house. T/Sgt. Crain deployed another platoon which had been sent to his support and then rushed through murderous tank and small-arms fire to the foremost house, which was being defended by 5 of his men. With the enemy attacking from an adjoining room and a tank firing pointblank at the house, he ordered the men to withdraw while he remained in the face of almost certain death to hold the position. Although shells were crashing through the walls and bullets were hitting all around him, he held his ground and with accurate fire from his submachinegun killed 3 Germans. He was killed when the building was destroyed by the enemy. T/Sgt. Crain's outstanding valor and intrepid leadership enabled his platoon to organize a new defense, repel the attack and preserve the hard-won bridgehead.",
            "issued": "02/13/1946",
            "date": {
                "day": 13,
                "full": "1945-3-13",
                "month": 3,
                "year": 1945
            },
            "location": {
                "latitude": 48,
                "longitude": 7,
                "name": "Haguenau, France"
            }
        },
        "birth": {
            "location name": "Bandana, Ky.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2693/crain-morris-e.php"
        },
        "military record": {
            "company": "Company E",
            "division": "141st Infantry, 36th Infantry Division",
            "entered service at": "Paducah, Ky.",
            "organization": "U.S. Army",
            "rank": "Technical Sergeant"
        }
    },
    {
        "death": true,
        "name": "Gammon, Archer T.",
        "awarded": {
            "General Order number": 18,
            "accredited to": "",
            "citation": "He charged 30 yards through hip-deep snow to knock out a machinegun and its 3-man crew with grenades, saving his platoon from being decimated and allowing it to continue its advance from an open field into some nearby woods. The platoon's advance through the woods had only begun when a machinegun supported by riflemen opened fire and a Tiger Royal tank sent 88mm. shells screaming at the unit from the left flank. S/Sgt. Gammon, disregarding all thoughts of personal safety, rushed forward, then cut to the left, crossing the width of the platoon's skirmish line in an attempt to get within grenade range of the tank and its protecting foot troops. Intense fire was concentrated on him by riflemen and the machinegun emplaced near the tank. He charged the automatic weapon, wiped out its crew of 4 with grenades, and, with supreme daring, advanced to within 25 yards of the armored vehicle, killing 2 hostile infantrymen with rifle fire as he moved forward. The tank had started to withdraw, backing a short distance, then firing, backing some more, and then stopping to blast out another round, when the man whose single-handed relentless attack had put the ponderous machine on the defensive was struck and instantly killed by a direct hit from the Tiger Royal's heavy gun. By his intrepidity and extreme devotion to the task of driving the enemy back no matter what the odds, S/Sgt. Gammon cleared the woods of German forces, for the tank continued to withdraw, leaving open the path for the gallant squad leader's platoon.",
            "issued": "02/13/1946",
            "date": {
                "day": 11,
                "full": "1945-1-11",
                "month": 1,
                "year": 1945
            },
            "location": {
                "latitude": 50,
                "longitude": 5,
                "name": "Bastogne, Belgium"
            }
        },
        "birth": {
            "location name": " Chatham, Va.",
            "date": {
                "day": 11,
                "month": 9,
                "year": 1918
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2750/gammon-archer-t.php"
        },
        "military record": {
            "company": "Company A",
            "division": "9th Armored Infantry Battalion, 6th Armored Division",
            "entered service at": "Roanoke, Va.",
            "organization": "U.S. Army",
            "rank": "Staff Sergeant"
        }
    },
    {
        "death": true,
        "name": "Krotiak, Anthony L.",
        "awarded": {
            "General Order number": 18,
            "accredited to": "",
            "citation": "He was an acting squad leader, directing his men in consolidating a newly won position on Hill B when the enemy concentrated small arms fire and grenades upon him and 4 others, driving them to cover in an abandoned Japanese trench. A grenade thrown from above landed in the center of the group. Instantly pushing his comrades aside and jamming the grenade into the earth with his rifle butt, he threw himself over it, making a shield of his body to protect the other men. The grenade exploded under him, and he died a few minutes later. By his extraordinary heroism in deliberately giving his life to save those of his comrades, Pfc. Krotiak set an inspiring example of utter devotion and self-sacrifice which reflects the highest traditions of the military service.",
            "issued": "02/13/1946",
            "date": {
                "day": 8,
                "full": "1945-5-8",
                "month": 5,
                "year": 1945
            },
            "location": {
                "latitude": 15,
                "longitude": 120,
                "name": "Tarlac City PNR Station, Tarlac City, Tarlac, Philippines"
            }
        },
        "birth": {
            "location name": " Chicago, Ill.",
            "date": {
                "day": 15,
                "month": 8,
                "year": 1915
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2836/krotiak-anthony-l.php"
        },
        "military record": {
            "company": "Company I",
            "division": "148th Infantry, 37th Infantry Division",
            "entered service at": "Chicago, Ill.",
            "organization": "U.S. Army",
            "rank": "Private First Class"
        }
    },
    {
        "death": true,
        "name": "Michael, Harry J.",
        "awarded": {
            "General Order number": 18,
            "accredited to": "",
            "citation": "He was serving as a rifle platoon leader when his company began an assault on a wooded ridge northeast of the village of Neiderzerf, Germany, early on 13 March 1945. A short distance up the side of the hill, 2d Lt. Michael, at the head of his platoon, heard the click of an enemy machinegun bolt. Quietly halting the company, he silently moved off into the woods and discovered 2 enemy machineguns and crews. Executing a sudden charge, he completely surprised the enemy and captured the guns and crews. At daybreak, enemy voices were heard in the thick woods ahead. Leading his platoon in a flanking movement, they charged the enemy with hand grenades and, after a bitter fight, captured 25 members of an SS mountain division, 3 artillery pieces, and 20 horses. While his company was establishing its position, 2d Lt. Michael made 2 personal reconnaissance missions of the wood on his left flank. On his first mission he killed 2, wounded 4, and captured 6 enemy soldiers single-handedly. On the second mission he captured 7 prisoners. During the afternoon he led his platoon on a frontal assault of a line of enemy pillboxes, successfully capturing the objective, killing 10 and capturing 30 prisoners. The following morning the company was subjected to sniper fire and 2d Lt. Michael, in an attempt to find the hidden sniper, was shot and killed. The inspiring leadership and heroic aggressiveness displayed by 2d Lt. Michael upheld the highest traditions of the military service.",
            "issued": "02/13/1946",
            "date": {
                "day": 14,
                "full": "1945-3-14",
                "month": 3,
                "year": 1945
            },
            "location": {
                "latitude": 50,
                "longitude": 12,
                "name": "Niederdorf, Germany"
            }
        },
        "birth": {
            "location name": "Milford, Ind.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2891/michael-harry-j.php"
        },
        "military record": {
            "company": "Company L",
            "division": "318th Infantry, 80th Infantry Division",
            "entered service at": "Milford, Ind.",
            "organization": "U.S. Army",
            "rank": "Second Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Peden, Forrest E.",
        "awarded": {
            "General Order number": 18,
            "accredited to": "",
            "citation": "He was a forward artillery observer when the group of about 45 infantrymen with whom he was advancing was ambushed in the uncertain light of a waning moon. Enemy forces outnumbering the Americans by 4 to 1 poured withering artillery, mortar, machinegun, and small-arms fire into the stricken unit from the flanks, forcing our men to seek the cover of a ditch which they found already occupied by enemy foot troops. As the opposing infantrymen struggled in hand-to-hand combat, Technician Peden courageously went to the assistance of 2 wounded soldiers and rendered first aid under heavy fire. With radio communications inoperative, he realized that the unit would be wiped out unless help could be secured from the rear. On his own initiative, he ran 800 yards to the battalion command post through a hail of bullets which pierced his jacket and there secured 2 light tanks to go to the relief of his hard-pressed comrades. Knowing the terrible risk involved, he climbed upon the hull of the lead tank and guided it into battle. Through a murderous concentration of fire the tank lumbered onward, bullets and shell fragments ricocheting from its steel armor within inches of the completely exposed rider, until it reached the ditch. As it was about to go into action it was turned into a flaming pyre by a direct hit which killed Technician Peden. However, his intrepidity and gallant sacrifice was not in vain. Attracted by the light from the burning tank, reinforcements found the beleaguered Americans and drove off the enemy.",
            "issued": "02/13/1946",
            "date": {
                "day": 3,
                "full": "1945-2-3",
                "month": 2,
                "year": 1945
            },
            "location": {
                "latitude": 48,
                "longitude": 7,
                "name": "Biesheim, France"
            }
        },
        "birth": {
            "location name": "St. Joseph, Mo.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2939/peden-forrest-e.php"
        },
        "military record": {
            "company": "Battery C",
            "division": "10th Field Artillery Battalion, 3d Infantry Division",
            "entered service at": "Wathena, Kans.",
            "organization": "U.S. Army",
            "rank": "Technician Fifth Grade"
        }
    },
    {
        "death": true,
        "name": "Nash, Henry H.",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "Was one of a party that volunteered and attempted to run the enemy's batteries with a steam tug and 2 barges loaded with subsistence stores.",
            "issued": "02/15/1909",
            "date": {
                "day": 3,
                "full": "1863-5-3",
                "month": 5,
                "year": 1863
            },
            "location": {
                "latitude": 32,
                "longitude": -90,
                "name": "Vicksburg, MS, USA"
            }
        },
        "birth": {
            "location name": " Lanawee, Mich.",
            "date": {
                "day": 4,
                "month": 3,
                "year": 1842
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/979/nash-henry-h.php"
        },
        "military record": {
            "company": "Company B",
            "division": "47th Ohio Infantry",
            "entered service at": "Adrian, Mich.",
            "organization": "U.S. Army",
            "rank": "Corporal"
        }
    },
    {
        "death": true,
        "name": "Gaujot, Antoine A.",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "Attempted under a heavy fire of the enemy to swim a river for the purpose of obtaining and returning with a canoe.",
            "issued": "02/15/1911",
            "date": {
                "day": 19,
                "full": "1899-12-19",
                "month": 12,
                "year": 1899
            },
            "location": {
                "latitude": 37,
                "longitude": -122,
                "name": "San Mateo, CA, USA"
            }
        },
        "birth": {
            "location name": "Keweenaw, Mich.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2226/gaujot-antoine-a.php"
        },
        "military record": {
            "company": "Company M",
            "division": "27th Infantry",
            "entered service at": "Williamson, W. Va.",
            "organization": "U.S. Army",
            "rank": "Corporal"
        }
    },
    {
        "death": true,
        "name": "Downs, Willis H.",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "With 11 other scouts, without waiting for the supporting battalion to aid them or to get into a position to do so, charged over a distance of about 150 yards and completely routed about 300 of the enemy who were in line and in a position that could only be carried by a frontal attack.",
            "issued": "02/16/1906",
            "date": {
                "day": 13,
                "full": "1899-5-13",
                "month": 5,
                "year": 1899
            },
            "location": {
                "latitude": 15,
                "longitude": 120,
                "name": "San Miguel, Bulacan, Philippines"
            }
        },
        "birth": {
            "location name": "Mount Carmel, Conn.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2216/downs-willis-h.php"
        },
        "military record": {
            "company": "Company H",
            "division": "1st North Dakota Volunteer Infantry",
            "entered service at": "Jamestown, N. Dak.",
            "organization": "U.S. Army",
            "rank": "Private"
        }
    },
    {
        "death": true,
        "name": "Brown, Melvin L.",
        "awarded": {
            "General Order number": 11,
            "accredited to": "",
            "citation": "Pfc. Brown, Company D distinguished himself by conspicuous gallantry and intrepidity above and beyond the call of duty in action against the enemy. While his platoon was securing Hill 755 (the Walled City), the enemy, using heavy automatic weapons and small arms, counterattacked. Taking a position on a 50-foot-high wall he delivered heavy rifle fire on the enemy. His ammunition was soon expended and although wounded, he remained at his post and threw his few grenades into the attackers causing many casualties. When his supply of grenades was exhausted his comrades from nearby foxholes tossed others to him and he left his position, braving a hail of fire, to retrieve and throw them at the enemy. The attackers continued to assault his position and Pfc. Brown weaponless, drew his entrenching tool from his pack and calmly waited until they 1 by 1 peered over the wall, delivering each a crushing blow upon the head. Knocking 10 or 12 enemy from the wall, his daring action so inspired his platoon that they repelled the attack and held their position. Pfc. Brown's extraordinary heroism, gallantry, and intrepidity reflect the highest credit upon himself and was in keeping with the honored traditions of the military service. Reportedly missing in action and officially killed in action, September 5, 1950.",
            "issued": "02/16/1951",
            "date": {
                "day": 4,
                "full": "1950-9-4",
                "month": 9,
                "year": 1950
            },
            "location": {
                "latitude": 35,
                "longitude": 128,
                "name": "??? ???? ?????"
            }
        },
        "birth": {
            "location name": "Mahaffey, Pa.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3088/brown-melvin-l.php"
        },
        "military record": {
            "company": "Company D",
            "division": "8th Engineer Combat Battalion",
            "entered service at": "Erie, Pa.",
            "organization": "U.S. Army",
            "rank": "Private First Class"
        }
    },
    {
        "death": true,
        "name": "Dean, William F.",
        "awarded": {
            "General Order number": 7,
            "accredited to": "",
            "citation": "Maj. Gen. Dean distinguished himself by conspicuous gallantry and intrepidity at the repeated risk of his life above and beyond the call of duty. In command of a unit suddenly relieved from occupation duties in Japan and as yet untried in combat, faced with a ruthless and determined enemy, highly trained and overwhelmingly superior in numbers, he felt it his duty to take action which to a man of his military experience and knowledge was clearly apt to result in his death. He personally and alone attacked an enemy tank while armed only with a hand grenade. He also directed the fire of his tanks from an exposed position with neither cover nor concealment while under observed artillery and small-arm fire. When the town of Taejon was finally overrun he refused to insure his own safety by leaving with the leading elements but remained behind organizing his retreating forces, directing stragglers, and was last seen assisting the wounded to a place of safety. These actions indicate that Maj. Gen. Dean felt it necessary to sustain the courage and resolution of his troops by examples of excessive gallantry committed always at the threatened portions of his frontlines. The magnificent response of his unit to this willing and cheerful sacrifice, made with full knowledge of its certain cost, is history. The success of this phase of the campaign is in large measure due to Maj. Gen. Dean's heroic leadership, courageous and loyal devotion to his men, and his complete disregard for personal safety.",
            "issued": "02/16/1951",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 36,
                "longitude": 127,
                "name": "Daejeon, South Korea"
            }
        },
        "birth": {
            "location name": " Carlyle, Ill.",
            "date": {
                "day": 1,
                "month": 8,
                "year": 1899
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3105/dean-william-f.php"
        },
        "military record": {
            "company": "",
            "division": "24th Infantry Division",
            "entered service at": "California",
            "organization": "U.S. Army",
            "rank": "Major General"
        }
    },
    {
        "death": true,
        "name": "Henry, Frederick F.",
        "awarded": {
            "General Order number": 8,
            "accredited to": "",
            "citation": "1st Lt. Henry, Company F, distinguished himself by conspicuous gallantry and intrepidity above and beyond the call of duty in action. His platoon was holding a strategic ridge near the town when they were attacked by a superior enemy force, supported by heavy mortar and artillery fire. Seeing his platoon disorganized by this fanatical assault, he left his foxhole and moving along the line ordered his men to stay in place and keep firing. Encouraged by this heroic action the platoon reformed a defensive line and rained devastating fire on the enemy, checking its advance. Enemy fire had knocked out all communications and 1st Lt. Henry was unable to determine whether or not the main line of resistance was altered to this heavy attack. On his own initiative, although severely wounded, he decided to hold his position as long as possible and ordered the wounded evacuated and their weapons and ammunition brought to him. Establishing a l-man defensive position, he ordered the platoon's withdrawal and despite his wound and with complete disregard for himself remained behind to cover the movement. When last seen he was single-handedly firing all available weapons so effectively that he caused an estimated 50 enemy casualties. His ammunition was soon expended and his position overrun, but this intrepid action saved the platoon and halted the enemy's advance until the main line of resistance was prepared to throw back the attack. 1st Lt. Henry's outstanding gallantry and noble self-sacrifice above and beyond the call of duty reflect the highest honor on him and are in keeping with the esteemed traditions of the U.S. Army.",
            "issued": "02/16/1951",
            "date": {
                "day": 1,
                "full": "1950-9-1",
                "month": 9,
                "year": 1950
            },
            "location": {
                "latitude": 35,
                "longitude": 127,
                "name": "South Korea"
            }
        },
        "birth": {
            "location name": "Vian, Okla.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3126/henry-frederick-f.php"
        },
        "military record": {
            "company": "Company F",
            "division": "38th Infantry Regiment",
            "entered service at": "Clinton, Okla.",
            "organization": "U.S. Army",
            "rank": "First Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Turner, Charles W.",
        "awarded": {
            "General Order number": 10,
            "accredited to": "",
            "citation": "Sfc. Turner distinguished himself by conspicuous gallantry and intrepidity above and beyond the call of duty in action against the enemy. A large enemy force launched a mortar and automatic weapon supported assault against his platoon. Sfc. Turner, a section leader, quickly organized his unit for defense and then observed that the attack was directed at the tank section 100 yards away. Leaving his secured section he dashed through a hail of fire to the threatened position and, mounting a tank, manned the exposed turret machine gun. Disregarding the intense enemy fire he calmly held this position delivering deadly accurate fire and pointing out targets for the tank's 75mm. gun. His action resulted in the destruction of 7 enemy machine gun nests. Although severely wounded he remained at the gun shouting encouragement to his comrades. During the action the tank received over 50 direct hits; the periscopes and antenna were shot away and 3 rounds hit the machine gun mount. Despite this fire he remained at his post until a burst of enemy fire cost him his life. This intrepid and heroic performance enabled the platoon to withdraw and later launch an attack which routed the enemy. Sfc. Turner's valor and example reflect the highest credit upon himself and are in keeping with the esteemed traditions of the U.S. Army.",
            "issued": "02/16/1951",
            "date": {
                "day": 1,
                "full": "1950-9-1",
                "month": 9,
                "year": 1950
            },
            "location": {
                "latitude": 37,
                "longitude": 126,
                "name": "Yongsan, 40-1 Hangangno 3(sam)-ga, Yongsan-gu, Seoul, South Korea"
            }
        },
        "birth": {
            "location name": "Boston, Mass.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3199/turner-charles-w.php"
        },
        "military record": {
            "company": "2d Reconnaissance Company",
            "division": "2d Infantry Division",
            "entered service at": "Massachusetts",
            "organization": "U.S. Army",
            "rank": "Sergeant First Class"
        }
    },
    {
        "death": true,
        "name": "Watkins, Travis E.",
        "awarded": {
            "General Order number": 9,
            "accredited to": "",
            "citation": "M/Sgt. Watkins distinguished himself by conspicuous gallantry and intrepidity above and beyond the call of duty in action against the enemy. When an overwhelming enemy force broke through and isolated 30 men of his unit, he took command, established a perimeter defense and directed action which repelled continuous, fanatical enemy assaults. With his group completely surrounded and cut off, he moved from foxhole to foxhole exposing himself to enemy fire, giving instructions and offering encouragement to his men. Later when the need for ammunition and grenades became critical he shot 2 enemy soldiers 50 yards outside the perimeter and went out alone for their ammunition and weapons. As he picked up their weapons he was attacked by 3 others and wounded. Returning their fire he killed all 3 and gathering up the weapons of the 5 enemy dead returned to his amazed comrades. During a later assault, 6 enemy soldiers gained a defiladed spot and began to throw grenades into the perimeter making it untenable. Realizing the desperate situation and disregarding his wound he rose from his foxhole to engage them with rifle fire. Although immediately hit by a burst from an enemy machine gun he continued to fire until he had killed the grenade throwers. With this threat eliminated he collapsed and despite being paralyzed from the waist down, encouraged his men to hold on. He refused all food, saving it for his comrades, and when it became apparent that help would not arrive in time to hold the position ordered his men to escape to friendly lines. Refusing evacuation as his hopeless condition would burden his comrades, he remained in his position and cheerfully wished them luck. Through his aggressive leadership and intrepid actions, this small force destroyed nearly 500 of the enemy before abandoning their position. M/Sgt. Watkins' sustained personal bravery and noble self-sacrifice reflect the highest glory upon himself and is in keeping with the esteemed traditions of the U.S. Army.",
            "issued": "02/16/1951",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": 37,
                "longitude": 126,
                "name": "Yongsan, 40-1 Hangangno 3(sam)-ga, Yongsan-gu, Seoul, South Korea"
            }
        },
        "birth": {
            "location name": "Waldo, Ark.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3204/watkins-travis-e.php"
        },
        "military record": {
            "company": "Company H",
            "division": "9th Infantry Regiment, 2d Infantry Division",
            "entered service at": "Texas",
            "organization": "U.S. Army",
            "rank": "Master Sergeant"
        }
    },
    {
        "death": true,
        "name": "Appleton, William H.",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "The first man of the Eighteenth Corps to enter the enemy's works at Petersburg, Va., 15 June 1864. Valiant service in a desperate assault at New Market Heights, Va., inspiring the Union troops by his example of steady courage.",
            "issued": "02/18/1891",
            "date": {
                "day": 29,
                "full": "1864-9-29",
                "month": 9,
                "year": 1864
            },
            "location": {
                "latitude": 37,
                "longitude": -77,
                "name": "Petersburg, VA, USA"
            }
        },
        "birth": {
            "location name": " Chichester, N.H.",
            "date": {
                "day": 24,
                "month": 3,
                "year": 1843
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/35/appleton-william-h.php"
        },
        "military record": {
            "company": "Company H",
            "division": "4th U.S. Colored Troops",
            "entered service at": "Portsmouth, N.H.",
            "organization": "U.S. Army",
            "rank": "First Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Kelly, Charles E.",
        "awarded": {
            "General Order number": 13,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity at risk of life above and beyond the call of duty. On 13 September 1943, near Altavilla, Italy, Cpl. Kelly voluntarily joined a patrol which located and neutralized enemy machinegun positions. After this hazardous duty he volunteered to establish contact with a battalion of U.S. infantry which was believed to be located on Hill 315, a mile distant. He traveled over a route commanded by enemy observation and under sniper, mortar, and artillery fire; and later he returned with the correct information that the enemy occupied Hill 315 in organized positions. Immediately thereafter Cpl. Kelly, again a volunteer patrol member, assisted materially in the destruction of 2 enemy machinegun nests under conditions requiring great skill and courage. Having effectively fired his weapon until all the ammunition was exhausted, he secured permission to obtain more at an ammunition dump. Arriving at the dump, which was located near a storehouse on the extreme flank of his regiment's position, Cpl. Kelly found that the Germans were attacking ferociously at this point. He obtained his ammunition and was given the mission of protecting the rear of the storehouse. He held his position throughout the night. The following morning the enemy attack was resumed. Cpl. Kelly took a position at an open window of the storehouse. One machine gunner had been killed at this position and several other soldiers wounded. Cpl. Kelly delivered continuous aimed and effective fire upon the enemy with his automatic rifle until the weapon locked from overheating. Finding another automatic rifle, he again directed effective fire upon the enemy until this weapon also locked. At this critical point, with the enemy threatening to overrun the position, Cpl. Kelly picked up 60mm. mortar shells, pulled the safety pins, and used the shells as grenades, killing at least 5 of the enemy. When it became imperative that the house be evacuated, Cpl. Kelly, despite his sergeant's injunctions, volunteered to hold the position until the remainder of the detachment could withdraw. As the detachment moved out, Cpl. Kelly was observed deliberately loading and firing a rocket launcher from the window. He was successful in covering the withdrawal of the unit, and later in joining his own organization. Cpl. Kelly's fighting determination and intrepidity in battle exemplify the highest traditions of the U.S. Armed Forces.",
            "issued": "02/18/1944",
            "date": {
                "day": 13,
                "full": "1943-9-13",
                "month": 9,
                "year": 1943
            },
            "location": {
                "latitude": 42,
                "longitude": 13,
                "name": "64046 Altavilla TE, Italy"
            }
        },
        "birth": {
            "location name": "Pittsburgh, Pa.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2819/kelly-charles-e.php"
        },
        "military record": {
            "company": "Company L",
            "division": "143d Infantry, 36th Infantry Division",
            "entered service at": "Pittsburgh, Pa.",
            "organization": "U.S. Army",
            "rank": "Corporal"
        }
    },
    {
        "death": true,
        "name": "Kisters, Gerry H.",
        "awarded": {
            "General Order number": 13,
            "accredited to": "",
            "citation": "On 31 July 1943, near Gagliano, Sicily, a detachment of 1 officer and 9 enlisted men, including Sgt. Kisters, advancing ahead of the leading elements of U.S. troops to fill a large crater in the only available vehicle route through Gagliano, was taken under fire by 2 enemy machineguns. Sgt. Kisters and the officer, unaided and in the face of intense small arms fire, advanced on the nearest machinegun emplacement and succeeded in capturing the gun and its crew of 4. Although the greater part of the remaining small arms fire was now directed on the captured machinegun position, Sgt. Kisters voluntarily advanced alone toward the second gun emplacement. While creeping forward, he was struck 5 times by enemy bullets, receiving wounds in both legs and his right arm. Despite the wounds, he continued to advance on the enemy, and captured the second machinegun after killing 3 of its crew and forcing the fourth member to flee. The courage of this soldier and his unhesitating willingness to sacrifice his life, if necessary, served as an inspiration to the command.",
            "issued": "02/18/1944",
            "date": {
                "day": 31,
                "full": "1943-7-31",
                "month": 7,
                "year": 1943
            },
            "location": {
                "latitude": 37,
                "longitude": 15,
                "name": "Galleria Gagliano, 95030 Sant'agata Li Battiati CT, Italy"
            }
        },
        "birth": {
            "location name": "Salt Lake City, Utah",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2830/kisters-gerry-h.php"
        },
        "military record": {
            "company": "",
            "division": "2d Armored Division",
            "entered service at": "Bloomington, Ind.",
            "organization": "U.S. Army",
            "rank": "Second Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Breault, Henry",
        "awarded": {
            "General Order number": 125,
            "accredited to": "Vermont",
            "citation": "For heroism and devotion to duty while serving on board the U.S. submarine 0-5 at the time of the sinking of that vessel. On the morning of 28 October 1923, the 0-5 collided with the steamship Abangarez and sank in less than a minute. When the collision occurred, Breault was in the torpedo room. Upon reaching the hatch, he saw that the boat was rapidly sinking. Instead of jumping overboard to save his own life, he returned to the torpedo room to the rescue of a shipmate whom he knew was trapped in the boat, closing the torpedo room hatch on himself. Breault and Brown remained trapped in this compartment until rescued by the salvage party 31 hours later. (Medal presented by President Coolidge at the White House on 8 March 1924.)",
            "issued": "02/20/1924",
            "date": {
                "day": -1,
                "full": "-1--1--1",
                "month": -1,
                "year": -1
            },
            "location": {
                "latitude": -1,
                "longitude": -1,
                "name": ""
            }
        },
        "birth": {
            "location name": "14 October, 1900, Putnam, Conn.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2478/breault-henry.php"
        },
        "military record": {
            "company": "",
            "division": "",
            "entered service at": "",
            "organization": "U.S. Navy",
            "rank": "Torpedoman Second Class"
        }
    },
    {
        "death": true,
        "name": "Calugas, Jose",
        "awarded": {
            "General Order number": 10,
            "accredited to": "",
            "citation": "The action for which the award was made took place near Culis, Bataan Province, Philippine Islands, on 16 January 1942. A battery gun position was bombed and shelled by the enemy until 1 gun was put out of commission and all the cannoneers were killed or wounded. Sgt. Calugas, a mess sergeant of another battery, voluntarily and without orders ran 1,000 yards across the shell-swept area to the gun position. There he organized a volunteer squad which placed the gun back in commission and fired effectively against the enemy, although the position remained under constant and heavy Japanese artillery fire.",
            "issued": "02/24/1942",
            "date": {
                "day": 16,
                "full": "1942-1-16",
                "month": 1,
                "year": 1942
            },
            "location": {
                "latitude": 14,
                "longitude": 120,
                "name": "Bataan, Philippines"
            }
        },
        "birth": {
            "location name": " Barrio Tagsing, Leon, Philippine Islands",
            "date": {
                "day": 29,
                "month": 12,
                "year": 1907
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2666/calugas-jose.php"
        },
        "military record": {
            "company": "Battery B",
            "division": "88th Field Artillery, Philippine Scouts",
            "entered service at": "Fort Stotsenburg, Philippine Islands",
            "organization": "U.S. Army",
            "rank": "Sergeant"
        }
    },
    {
        "death": true,
        "name": "Welch, George W.",
        "awarded": {
            "General Order number": -1,
            "accredited to": "",
            "citation": "Captured the flag of the 13th Alabama Infantry (C.S.A.).",
            "issued": "02/24/1965",
            "date": {
                "day": 16,
                "full": "1864-12-16",
                "month": 12,
                "year": 1864
            },
            "location": {
                "latitude": 36,
                "longitude": -86,
                "name": "Nashville, TN, USA"
            }
        },
        "birth": {
            "location name": "Brown County, Iowa",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/1450/welch-george-w.php"
        },
        "military record": {
            "company": "Company A",
            "division": "11th Missouri Infantry",
            "entered service at": "Keokuk, Lee County, Iowa",
            "organization": "U.S. Army",
            "rank": "Private"
        }
    },
    {
        "death": true,
        "name": "Pierce, Larry S.",
        "awarded": {
            "General Order number": 7,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity at the risk of life above and beyond the call of duty. Sgt. Pierce was serving as squad leader in a reconnaissance platoon when his patrol was ambushed by hostile forces. Through his inspiring leadership and personal courage, the squad succeeded in eliminating an enemy machinegun and routing the opposing force. While pursuing the fleeing enemy, the squad came upon a dirt road and, as the main body of his men entered the road, Sgt. Pierce discovered an antipersonnel mine emplaced in the road bed. Realizing that the mine could destroy the majority of his squad, Sgt. Pierce saved the lives of his men at the sacrifice of his life by throwing himself directly onto the mine as it exploded. Through his indomitable courage, complete disregard for his safety, and profound concern for his fellow soldiers, he averted loss of life and injury to the members of his squad. Sgt. Pierce's extraordinary heroism, at the cost of his life, are in the highest traditions of the U.S. Army and reflect great credit upon himself and the Armed Forces of his country.",
            "issued": "02/24/1966",
            "date": {
                "day": 20,
                "full": "1965-9-20",
                "month": 9,
                "year": 1965
            },
            "location": {
                "latitude": 10,
                "longitude": 106,
                "name": "Honorary Consulate General of the Republic of the Philippines, ph??ng 19, B?nh Th?nh, H? Ch? Minh, Vietnam"
            }
        },
        "birth": {
            "location name": " Wewoka, Okla.",
            "date": {
                "day": 6,
                "month": 7,
                "year": 1941
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3387/pierce-larry-s.php"
        },
        "military record": {
            "company": "Headquarters Company",
            "division": "503d Infantry, 173d Airborne Brigade",
            "entered service at": "Fresno, Calif.",
            "organization": "U.S. Army",
            "rank": "Sergeant"
        }
    },
    {
        "death": true,
        "name": "Hibbs, Robert John",
        "awarded": {
            "General Order number": 8,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity at the risk of life above and beyond the call of duty. 2d Lt. Hibbs was in command of a 15-man ambush patrol of the 2d Battalion, when his unit observed a company of Viet Cong advancing along the road toward the 2d Battalion's position. Informing his command post by radio of the impending attack, he prepared his men for the oncoming Viet Cong, emplaced 2 mines in their path and, when the insurgents were within 20 feet of the patrol's position, he fired the 2 antipersonnel mines, wounding or killing half of the enemy company. Then, to cover the withdrawal of his patrol, he threw hand grenades, stepped onto the open road, and opened fire on the remainder of the Viet Cong force of approximately 50 men. Having rejoined his men, he was leading them toward the battalion perimeter when the patrol encountered the rear elements of another Viet Cong company deployed to attack the battalion. With the advantage of surprise, he directed a charge against the Viet Cong, which carried the patrol through the insurgent force, completely disrupting its attack. Learning that a wounded patrol member was wandering in the area between the 2 opposing forces and although moments from safety and wounded in the leg himself, he and a sergeant went back to the battlefield to recover the stricken man. After they maneuvered through the withering fire of 2 Viet Cong machine guns, the sergeant grabbed the dazed soldier and dragged him back toward the friendly lines while 2d Lt. Hibbs remained behind to provide covering fire. Armed with only an M-16 rifle and a pistol, but determined to destroy the enemy positions, he then charged the 2 machine gun emplacements and was struck down. Before succumbing to his mortal wounds, he destroyed the starlight telescopic sight attached to his rifle to prevent its capture and use by the Viet Cong. 2d Lt. Hibb's profound concern for his fellow soldiers, and his intrepidity at the risk of his life above and beyond the call of duty are in the highest traditions of the U.S. Army and reflect great credit upon himself and the Armed Forces of his country.",
            "issued": "02/24/1967",
            "date": {
                "day": 5,
                "full": "1966-3-5",
                "month": 3,
                "year": 1966
            },
            "location": {
                "latitude": 10,
                "longitude": 106,
                "name": "Honorary Consulate General of the Republic of the Philippines, ph??ng 19, B?nh Th?nh, H? Ch? Minh, Vietnam"
            }
        },
        "birth": {
            "location name": " Omaha, Nebr.",
            "date": {
                "day": 21,
                "month": 4,
                "year": 1943
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3301/hibbs-robert-john.php"
        },
        "military record": {
            "company": "Company B, 2d Battalion",
            "division": "28th Infantry, 1st Infantry Division",
            "entered service at": "Des Moines, Iowa",
            "organization": "U.S. Army",
            "rank": "Second Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Hughes, Lloyd H.",
        "awarded": {
            "General Order number": 17,
            "accredited to": "",
            "citation": "For conspicuous gallantry in action and intrepidity at the risk of his life above and beyond the call of duty. On August 1943, 2d Lt. Hughes served in the capacity of pilot of a heavy bombardment aircraft participating in a long and hazardous minimum-altitude attack against the Axis oil refineries of Ploesti, Rumania, launched from the northern shores of Africa. Flying in the last formation to attack the target, he arrived in the target area after previous flights had thoroughly alerted the enemy defenses. Approaching the target through intense and accurate antiaircraft fire and dense balloon barrages at dangerously low altitude, his plane received several direct hits from both large and small caliber antiaircraft guns which seriously damaged his aircraft, causing sheets of escaping gasoline to stream from the bomb bay and from the left wing. This damage was inflicted at a time prior to reaching the target when 2d Lt. Hughes could have made a forced landing in any of the grain fields readily available at that time. The target area was blazing with burning oil tanks and damaged refinery installations from which flames leaped high above the bombing level of the formation. With full knowledge of the consequences of entering this blazing inferno when his airplane was profusely leaking gasoline in two separate locations, 2d Lt. Hughes, motivated only by his high conception of duty which called for the destruction of his assigned target at any cost, did not elect to make a forced landing or turn back from the attack. Instead, rather than jeopardize the formation and the success of the attack, he unhesitatingly entered the blazing area and dropped his bomb load with great precision. After successfully bombing the objective, his aircraft emerged from the conflagration with the left wing aflame. Only then did he attempt a forced landing, but because of the advanced stage of the fire enveloping his aircraft the plane crashed and was consumed. By 2d Lt. Hughes' heroic decision to complete his mission regardless of the consequences in utter disregard of his own life, and by his gallant and valorous execution of this decision, he has rendered a service to our country in the defeat of our enemies which will everlastingly be outstanding in the annals of our Nation's history.",
            "issued": "02/26/1944",
            "date": {
                "day": 1,
                "full": "1943-8-1",
                "month": 8,
                "year": 1943
            },
            "location": {
                "latitude": 45,
                "longitude": 24,
                "name": "Romania"
            }
        },
        "birth": {
            "location name": " Alexandria, La.",
            "date": {
                "day": 12,
                "month": 7,
                "year": 1921
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2797/hughes-lloyd-h.php"
        },
        "military record": {
            "company": "564th Bomber Squadron",
            "division": "389th Bomber Group, 9th Air Force",
            "entered service at": "San Antonio, Tex.",
            "organization": "U.S. Army",
            "rank": "Second Lieutenant"
        }
    },
    {
        "death": true,
        "name": "Van Noy, Junior",
        "awarded": {
            "General Order number": 17,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity above and beyond the call of duty in action with the enemy near Finschafen, New Guinea, on 17 October 1943. When wounded late in September, Pvt. Van Noy declined evacuation and continued on duty. On 17 October 1943 he was gunner in charge of a machinegun post only 5 yards from the water's edge when the alarm was given that 3 enemy barges loaded with troops were approaching the beach in the early morning darkness. One landing barge was sunk by Allied fire, but the other 2 beached 10 yards from Pvt. Van Noy's emplacement. Despite his exposed position, he poured a withering hail of fire into the debarking enemy troops. His loader was wounded by a grenade and evacuated. Pvt. Van Noy, also grievously wounded, remained at his post, ignoring calls of nearby soldiers urging him to withdraw, and continued to fire with deadly accuracy. He expended every round and was found, covered with wounds dead beside his gun. In this action Pvt. Van Noy killed at least half of the 39 enemy taking part in the landing. His heroic tenacity at the price of his life not only saved the lives of many of his comrades, but enabled them to annihilate the attacking detachment.",
            "issued": "02/26/1944",
            "date": {
                "day": 17,
                "full": "1943-10-17",
                "month": 10,
                "year": 1943
            },
            "location": {
                "latitude": -4,
                "longitude": 136,
                "name": "New Guinea"
            }
        },
        "birth": {
            "location name": "Grace, Idaho",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3035/van-noy-junior.php"
        },
        "military record": {
            "company": "Headquarters Company",
            "division": "Engineer Boat and Shore Regiment",
            "entered service at": "Preston, Idaho",
            "organization": "U.S. Army",
            "rank": "Private"
        }
    },
    {
        "death": true,
        "name": "Mcgee, William D.",
        "awarded": {
            "General Order number": 21,
            "accredited to": "",
            "citation": "A medical aid man, he made a night crossing of the Moselle River with troops endeavoring to capture the town of Mulheim. The enemy had retreated in the sector where the assault boats landed, but had left the shore heavily strewn with antipersonnel mines. Two men of the first wave attempting to work their way forward detonated mines which wounded them seriously, leaving them bleeding and in great pain beyond the reach of their comrades. Entirely on his own initiative, Pvt. McGee entered the minefield, brought out 1 of the injured to comparative safety, and had returned to rescue the second victim when he stepped on a mine and was severely wounded in the resulting explosion. Although suffering intensely and bleeding profusely, he shouted orders that none of his comrades was to risk his life by entering the death-sown field to render first aid that might have saved his life. In making the supreme sacrifice, Pvt. demonstrated a concern for the well-being of his fellow soldiers that transcended all considerations for his own safety and a gallantry in keeping with the highest traditions of the military service.",
            "issued": "02/26/1946",
            "date": {
                "day": 18,
                "full": "1945-3-18",
                "month": 3,
                "year": 1945
            },
            "location": {
                "latitude": 51,
                "longitude": 6,
                "name": "M?lheim, Germany"
            }
        },
        "birth": {
            "location name": "Indianapolis, Ind.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2877/mcgee-william-d.php"
        },
        "military record": {
            "company": "Medical Detachment",
            "division": "304th Infantry, 76th Infantry Division",
            "entered service at": "Indianapolis, Ind.",
            "organization": "U.S. Army",
            "rank": "Private"
        }
    },
    {
        "death": true,
        "name": "Merrell, Joseph F.",
        "awarded": {
            "General Order number": 21,
            "accredited to": "",
            "citation": "He made a gallant, 1-man attack against vastly superior enemy forces near Lohe, Germany. His unit, attempting a quick conquest of hostile hill positions that would open the route to Nuremberg before the enemy could organize his defense of that city, was pinned down by brutal fire from rifles, machine pistols, and 2 heavy machineguns. Entirely on his own initiative, Pvt. Merrell began a single-handed assault. He ran 100 yards through concentrated fire, barely escaping death at each stride, and at pointblank range engaged 4 German machine pistolmen with his rifle, killing all of them while their bullets ripped his uniform. As he started forward again, his rifle was smashed by a sniper's bullet, leaving him armed only with 3 grenades. But he did not hesitate. He zigzagged 200 yards through a hail of bullets to within 10 yards of the first machinegun, where he hurled 2 grenades and then rushed the position ready to fight with his bare hands if necessary. In the emplacement he seized a Luger pistol and killed what Germans had survived the grenade blast. Rearmed, he crawled toward the second machinegun located 30 yards away, killing 4 Germans in camouflaged foxholes on the way, but himself receiving a critical wound in the abdomen. And yet he went on, staggering, bleeding, disregarding bullets which tore through the folds of his clothing and glanced off his helmet. He threw his last grenade into the machinegun nest and stumbled on to wipe out the crew. He had completed this self-appointed task when a machine pistol burst killed him instantly. In his spectacular 1-man attack Pvt. Merrell killed 6 Germans in the first machinegun emplacement, 7 in the next, and an additional 10 infantrymen who were astride his path to the weapons which would have decimated his unit had he not assumed the burden of the assault and stormed the enemy positions with utter fearlessness, intrepidity of the highest order, and a willingness to sacrifice his own life so that his comrades could go on to victory.",
            "issued": "02/26/1946",
            "date": {
                "day": 18,
                "full": "1945-4-18",
                "month": 4,
                "year": 1945
            },
            "location": {
                "latitude": 52,
                "longitude": 8,
                "name": "Lohe, 32545 Bad Oeynhausen, Germany"
            }
        },
        "birth": {
            "location name": "Staten Island, N.Y.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2887/merrell-joseph-f.php"
        },
        "military record": {
            "company": "Company I",
            "division": "15th Infantry, 3d Infantry Division",
            "entered service at": "Staten Island, N.Y.",
            "organization": "U.S. Army",
            "rank": "Private"
        }
    },
    {
        "death": true,
        "name": "Moskala, Edward J.",
        "awarded": {
            "General Order number": 21,
            "accredited to": "",
            "citation": "He was the leading element when grenade explosions and concentrated machinegun and mortar fire halted the unit's attack on Kakazu Ridge, Okinawa, Ryukyu Islands. With utter disregard for his personal safety, he charged 40 yards through withering, grazing fire and wiped out 2 machinegun nests with well-aimed grenades and deadly accurate fire from his automatic rifle. When strong counterattacks and fierce enemy resistance from other positions forced his company to withdraw, he voluntarily remained behind with 8 others to cover the maneuver. Fighting from a critically dangerous position for 3 hours, he killed more than 25 Japanese before following his surviving companions through screening smoke down the face of the ridge to a gorge where it was discovered that one of the group had been left behind, wounded. Unhesitatingly, Pvt. Moskala climbed the bullet-swept slope to assist in the rescue, and, returning to lower ground, volunteered to protect other wounded while the bulk of the troops quickly took up more favorable positions. He had saved another casualty and killed 4 enemy infiltrators when he was struck and mortally wounded himself while aiding still another disabled soldier. With gallant initiative, unfaltering courage, and heroic determination to destroy the enemy, Pvt. Moskala gave his life in his complete devotion to his company's mission and his comrades' well-being. His intrepid conduct provided a lasting inspiration for those with whom he served.",
            "issued": "02/26/1946",
            "date": {
                "day": 9,
                "full": "1945-4-9",
                "month": 4,
                "year": 1945
            },
            "location": {
                "latitude": 26,
                "longitude": 127,
                "name": "Okinawa Prefecture, Japan"
            }
        },
        "birth": {
            "location name": " Chicago, Ill.",
            "date": {
                "day": 6,
                "month": 11,
                "year": 1921
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2900/moskala-edward-j.php"
        },
        "military record": {
            "company": "Company C",
            "division": "383d Infantry, 96th Infantry Division",
            "entered service at": "Chicago, Ill.",
            "organization": "U.S. Army",
            "rank": "Private First Class"
        }
    },
    {
        "death": true,
        "name": "Murphy, Frederick C.",
        "awarded": {
            "General Order number": 21,
            "accredited to": "",
            "citation": "An aid man, he was wounded in the right shoulder soon after his comrades had jumped off in a dawn attack 18 March 1945, against the Siegfried Line at Saarlautern, Germany. He refused to withdraw for treatment and continued forward, administering first aid under heavy machinegun, mortar, and artillery fire. When the company ran into a thickly sown antipersonnel minefield and began to suffer more and more casualties, he continued to disregard his own wound and unhesitatingly braved the danger of exploding mines, moving about through heavy fire and helping the injured until he stepped on a mine which severed one of his feet. In spite of his grievous wounds, he struggled on with his work, refusing to be evacuated and crawling from man to man administering to them while in great pain and bleeding profusely. He was killed by the blast of another mine which he had dragged himself across in an effort to reach still another casualty. With indomitable courage, and unquenchable spirit of self-sacrifice and supreme devotion to duty which made it possible for him to continue performing his tasks while barely able to move, Pfc. Murphy saved many of his fellow soldiers at the cost of his own life.",
            "issued": "02/26/1946",
            "date": {
                "day": 18,
                "full": "1945-3-18",
                "month": 3,
                "year": 1945
            },
            "location": {
                "latitude": 51,
                "longitude": 10,
                "name": "Germany"
            }
        },
        "birth": {
            "location name": "Boston, Mass.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2908/murphy-frederick-c.php"
        },
        "military record": {
            "company": "Medical Detachment",
            "division": "259th Infantry, 65th Infantry Division",
            "entered service at": "Weymouth, Mass.",
            "organization": "U.S. Army",
            "rank": "Private First Class"
        }
    },
    {
        "death": true,
        "name": "Wetzel, Walter C.",
        "awarded": {
            "General Order number": 21,
            "accredited to": "",
            "citation": "Pfc. Wetzel, an acting squad leader with the Antitank Company of the 13th Infantry, was guarding his platoon's command post in a house at Birken, Germany, during the early morning hours of 3 April 1945, when he detected strong enemy forces moving in to attack. He ran into the house, alerted the occupants and immediately began defending the post against heavy automatic weapons fire coming from the hostile troops. Under cover of darkness the Germans forced their way close to the building where they hurled grenades, 2 of which landed in the room where Pfc. Wetzel and the others had taken up firing positions. Shouting a warning to his fellow soldiers, Pfc. Wetzel threw himself on the grenades and, as they exploded, absorbed their entire blast, suffering wounds from which he died. The supreme gallantry of Pfc. Wetzel saved his comrades from death or serious injury and made it possible for them to continue the defense of the command post and break the power of a dangerous local counterthrust by the enemy. His unhesitating sacrifice of his life was in keeping with the U.S. Army's highest traditions of bravery and heroism.",
            "issued": "02/26/1946",
            "date": {
                "day": 3,
                "full": "1945-4-3",
                "month": 4,
                "year": 1945
            },
            "location": {
                "latitude": 50,
                "longitude": 7,
                "name": "Birken, 53797 Lohmar, Germany"
            }
        },
        "birth": {
            "location name": "Huntington, W. Va.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3057/wetzel-walter-c.php"
        },
        "military record": {
            "company": "",
            "division": "13th Infantry, 8th Infantry Division",
            "entered service at": "Roseville, Mich.",
            "organization": "U.S. Army",
            "rank": "Private First Class"
        }
    },
    {
        "death": true,
        "name": "Crandall, Bruce P.",
        "awarded": {
            "General Order number": -1,
            "accredited to": "Olympia, WA",
            "citation": "For conspicuous gallantry and intrepidity at the risk of his life above and beyond the call of duty: Major Bruce P. Crandall distinguished himself by extraordinary heroism as a Flight Commander in the Republic of Vietnam, while serving with Company A, 229th Assault Helicopter Battalion, 1st Cavalry Division (Airmobile). On 14 November 1965, his flight of sixteen helicopters was lifting troops for a search and destroy mission from Plei Me, Vietnam, to Landing Zone X-Ray in the Ia Drang Valley. On the fourth troop lift, the airlift began to take enemy fire, and by the time the aircraft had refueled and returned for the next troop lift, the enemy had Landing Zone X-Ray targeted. As Major Crandall and the first eight helicopters landed to discharge troops on his fifth troop lift, his unarmed helicopter came under such intense enemy fire that the ground commander ordered the second flight of eight aircraft to abort their mission. As Major Crandall flew back to Plei Me, his base of operations, he determined that the ground commander of the besieged infantry batallion desperately needed more ammunition. Major Crandall then decided to adjust his base of operations to Artillery Firebase Falcon in order to shorten the flight distance to deliver ammunition and evacuate wounded soldiers. While medical evacuation was not his mission, he immediately sought volunteers and with complete disregard for his own personal safety, led the two aircraft to Landing Zone X-Ray. Despite the fact that the landing zone was still under relentless enemy fire, Major Crandall landed and proceeded to supervise the loading of seriously wounded soldiers aboard his aircraft. Major Crandall's voluntary decision to land under the most extreme fire instilled in the other pilots the will and spirit to continue to land their own aircraft, and in the ground forces the realization that they would be resupplied and that friendly wounded would be promptly evacuated. This greatly enhanced morale and the will to fight at a critical time. After his first medical evacuation, Major Crandall continued to fly into and out of the landing zone throughout the day and into the evening. That day he completed a total of 22 flights, most under intense enemy fire, retiring from the battlefield only after all possible service had been rendered to the Infantry battalion. His actions provided critical resupply of ammunition and evacuation of the wounded. Major Crandall's daring acts of bravery and courage in the face of an overwhelming and determined enemy are in keeping with the highest traditions of the military service and reflect great credit upon himself, his unit, and the United States Army.",
            "issued": "02/26/2007",
            "date": {
                "day": 14,
                "full": "1965-11-14",
                "month": 11,
                "year": 1965
            },
            "location": {
                "latitude": 10,
                "longitude": 106,
                "name": "Honorary Consulate General of the Republic of the Philippines, ph??ng 19, B?nh Th?nh, H? Ch? Minh, Vietnam"
            }
        },
        "birth": {
            "location name": "February 17, 1933, Olympia, Washington, 1933",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/3250/crandall-bruce-p.php"
        },
        "military record": {
            "company": "Company A, 229th Assault Helicopter Battalion",
            "division": "1st Cavalry Division",
            "entered service at": "Olympia, WA",
            "organization": "U.S. Army",
            "rank": "Major"
        }
    },
    {
        "death": true,
        "name": "Fields, James H.",
        "awarded": {
            "General Order number": 13,
            "accredited to": "",
            "citation": "For conspicuous gallantry and intrepidity at risk of life above and beyond the call of duty, at Rechicourt, France. On 27 September 1944, during a sharp action with the enemy infantry and tank forces, 1st Lt. Fields personally led his platoon in a counterattack on the enemy position. Although his platoon had been seriously depleted, the zeal and fervor of his leadership was such as to inspire his small force to accomplish their mission in the face of overwhelming enemy opposition. Seeing that 1 of the men had been wounded, he left his slit trench and with complete disregard for his personal safety attended the wounded man and administered first aid. While returning to his slit trench he was seriously wounded by a shell burst, the fragments of which cut through his face and head, tearing his teeth, gums, and nasal passage. Although rendered speechless by his wounds, 1st Lt. Fields refused to be evacuated and continued to lead his platoon by the use of hand signals. On 1 occasion, when 2 enemy machineguns had a portion of his unit under deadly crossfire, he left his hole, wounded as he was, ran to a light machinegun, whose crew had been knocked out, picked up the gun, and fired it from his hip with such deadly accuracy that both the enemy gun positions were silenced. His action so impressed his men that they found new courage to take up the fire fight, increasing their firepower, and exposing themselves more than ever to harass the enemy with additional bazooka and machinegun fire. Only when his objective had been taken and the enemy scattered did 1st Lt. Fields consent to be evacuated to the battalion command post. At this point he refused to move further back until he had explained to his battalion commander by drawing on paper the position of his men and the disposition of the enemy forces. The dauntless and gallant heroism displayed by 1st Lt. Fields were largely responsible for the repulse of the enemy forces and contributed in a large measure to the successful capture of his battalion objective during this action. His eagerness and determination to close with the enemy and to destroy him was an inspiration to the entire command, and are in the highest traditions of the U.S. Armed Forces.",
            "issued": "02/27/1945",
            "date": {
                "day": 27,
                "full": "1944-9-27",
                "month": 9,
                "year": 1944
            },
            "location": {
                "latitude": 48,
                "longitude": 6,
                "name": "R?chicourt-le-Ch?teau, France"
            }
        },
        "birth": {
            "location name": "Caddo, Tex.",
            "date": {
                "day": -1,
                "month": -1,
                "year": -1
            }
        },
        "metadata": {
            "link": "http://www.cmohs.org/recipient-detail/2734/fields-james-h.php"
        },
        "military record": {
            "company": "",
            "division": "10th Armored Infantry, 4th Armored Division",
            "entered service at": "Houston, Tex.",
            "organization": "U.S. Army",
            "rank": "First Lieutenant"
        }
    }
];