const faces = {'mayFaces': {
    1: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/MAYA-g-log-cal-D06-Kimi-cdxW.png',
    2: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/MAYA-g-log-cal-D07-Manik-cdxW.png',
    3: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/MAYA-g-log-cal-D08-Lamat-cdxW.png',
    4: 'https://upload.wikimedia.org/wikipedia/commons/8/88/MAYA-g-log-cal-D09-Muluk-cdxW.png',
    5: 'https://upload.wikimedia.org/wikipedia/commons/6/63/MAYA-g-log-cal-D10-Ok-cdxW.png',
    6: 'https://upload.wikimedia.org/wikipedia/commons/7/78/MAYA-g-log-cal-D11-Chuwen-cdxW.png',
    7: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/MAYA-g-log-cal-D12-Eb-cdxW.png',
    8: 'https://upload.wikimedia.org/wikipedia/commons/0/09/MAYA-g-log-cal-D13-Ben-cdxW.png',
    9: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/MAYA-g-log-cal-D14-Ix-cdxW.png',
    10: 'https://upload.wikimedia.org/wikipedia/commons/1/10/MAYA-g-log-cal-D15-Men-cdxW.png',
    11: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/MAYA-g-log-cal-D16-Kib-cdxW.png',
    12: 'https://upload.wikimedia.org/wikipedia/commons/2/28/MAYA-g-log-cal-D17-Kaban-cdxW.png',
    13: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/MAYA-g-log-cal-D18-Etznab-cdxW.png',
    14: 'https://upload.wikimedia.org/wikipedia/commons/9/91/MAYA-g-log-cal-D19-Kawak-cdxW.png',
    15: 'https://upload.wikimedia.org/wikipedia/commons/8/83/MAYA-g-log-cal-D20-Ajaw-cdxW.png',
    16: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/MAYA-g-log-cal-D01-Imix-cdxW.png',
    17: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/MAYA-g-log-cal-D02-Ik-cdxW.png',
    18: 'https://upload.wikimedia.org/wikipedia/commons/a/af/MAYA-g-log-cal-D03-Akbal-cdxW.png',
    19: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/MAYA-g-log-cal-D04-Kan-cdxW.png',
    20: 'https://upload.wikimedia.org/wikipedia/commons/3/32/MAYA-g-log-cal-D05-Chikchan-cdxW.png'
}, "nahFaces": {
    1: 'https://www.azteccalendar.com/images/axayacatl/Miquiztli.jpg',
    2: 'https://www.azteccalendar.com/images/axayacatl/Mazatl.jpg',
    3: 'https://www.azteccalendar.com/images/axayacatl/Tochtli.jpg',
    4: 'https://www.azteccalendar.com/images/axayacatl/Atl.jpg',
    5: 'https://www.azteccalendar.com/images/axayacatl/Itzcuintli.jpg',
    6: 'https://www.azteccalendar.com/images/axayacatl/Ozomahtli.jpg',
    7: 'https://www.azteccalendar.com/images/axayacatl/Malinalli.jpg',
    8: 'https://www.azteccalendar.com/images/axayacatl/Acatl.jpg',
    9: 'https://www.azteccalendar.com/images/axayacatl/Ocelotl.jpg',
    10: 'https://www.azteccalendar.com/images/axayacatl/Cuauhtli.jpg',
    11: 'https://www.azteccalendar.com/images/axayacatl/Cozcacuauhtli.jpg',
    12: 'https://www.azteccalendar.com/images/axayacatl/Ollin.jpg',
    13: 'https://www.azteccalendar.com/images/axayacatl/Tecpatl.jpg',
    14: 'https://www.azteccalendar.com/images/axayacatl/Quiahuitl.jpg',
    15: 'https://www.azteccalendar.com/images/axayacatl/Xochitl.jpg',
    16: 'https://www.azteccalendar.com/images/axayacatl/Cipactli.jpg',
    17: 'https://www.azteccalendar.com/images/axayacatl/Ehecatl.jpg',
    18: 'https://www.azteccalendar.com/images/axayacatl/Calli.jpg',
    19: 'https://www.azteccalendar.com/images/axayacatl/Cuetzpalin.jpg',
    20: 'https://www.azteccalendar.com/images/axayacatl/Coatl.jpg'
}, "yuhFaces": { //same ones bc i do Not have the time or graphical experience to digitize/lift the signs from the hem'i
    1: 'https://www.azteccalendar.com/images/axayacatl/Miquiztli.jpg',
    2: 'https://www.azteccalendar.com/images/axayacatl/Mazatl.jpg',
    3: 'https://www.azteccalendar.com/images/axayacatl/Tochtli.jpg',
    4: 'https://www.azteccalendar.com/images/axayacatl/Atl.jpg',
    5: 'https://www.azteccalendar.com/images/axayacatl/Itzcuintli.jpg',
    6: 'https://www.azteccalendar.com/images/axayacatl/Ozomahtli.jpg',
    7: 'https://www.azteccalendar.com/images/axayacatl/Malinalli.jpg',
    8: 'https://www.azteccalendar.com/images/axayacatl/Acatl.jpg',
    9: 'https://www.azteccalendar.com/images/axayacatl/Ocelotl.jpg',
    10: 'https://www.azteccalendar.com/images/axayacatl/Cuauhtli.jpg',
    11: 'https://www.azteccalendar.com/images/axayacatl/Cozcacuauhtli.jpg',
    12: 'https://www.azteccalendar.com/images/axayacatl/Ollin.jpg',
    13: 'https://www.azteccalendar.com/images/axayacatl/Tecpatl.jpg',
    14: 'https://www.azteccalendar.com/images/axayacatl/Quiahuitl.jpg',
    15: 'https://www.azteccalendar.com/images/axayacatl/Xochitl.jpg',
    16: 'https://www.azteccalendar.com/images/axayacatl/Cipactli.jpg',
    17: 'https://www.azteccalendar.com/images/axayacatl/Ehecatl.jpg',
    18: 'https://www.azteccalendar.com/images/axayacatl/Calli.jpg',
    19: 'https://www.azteccalendar.com/images/axayacatl/Cuetzpalin.jpg',
    20: 'https://www.azteccalendar.com/images/axayacatl/Coatl.jpg'
}, "zaaFaces": {
    1: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_1.png",
    2: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_2.png",
    3: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_3.png",
    4: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_4.png",
    5: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_5.png",
    6: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_6.png",
    7: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_7.png",
    8: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_8.png",
    9: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_9.png",
    10: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_a.png",
    11: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_b.png",
    12: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_c.png",
    13: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_d.png",
    14: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_e.png",
    15: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_f.png",
    16: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_g.png",
    17: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_h.png",
    18: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_i.png",
    19: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_j.png",
    20: "https://cornlands.neocities.org/tools/assets/mesocals/zaa_k.png"
}};
const specNumbers = {'may':{
    1: "𝋠",
    2: "𝋡",
    3: "𝋢",
    4: "𝋣",
    5: "𝋤",
    6: "𝋥",
    7: "𝋦",
    8: "𝋧",
    9: "𝋨",
    10: "𝋩",
    11: "𝋪",
    12: "𝋫",
    13: "𝋬",
    14: "𝋭",
    15: "𝋮",
    16: "𝋯",
    17: "𝋰",
    18: "𝋱",
    19: "𝋲",
    20: "𝋳"
}, 'nah': {
    1: '◉',
    2: '◉◉',
    3: '◉◉◉',
    4: '◉◉◉◉',
    5: '◉◉◉◉◉',
    6: '◉◉◉◉◉<br/>◉',
    7: '◉◉◉◉◉<br/>◉◉',
    8: '◉◉◉◉◉<br/>◉◉◉',
    9: '◉◉◉◉◉<br/>◉◉◉◉',
    10: '◉◉◉◉◉<br/>◉◉◉◉◉',
    11: '◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉',
    12: '◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉',
    13: '◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉◉',
    14: '◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉◉◉',
    15: '◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉◉◉◉',
    16: '◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉',
    17: '◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉',
    18: '◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉◉',
    19: '◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉◉◉',
    20: '⚑'
}, 'yuh': {
    1: '◉',
    2: '◉◉',
    3: '◉◉◉',
    4: '◉◉◉◉',
    5: '◉◉◉◉◉',
    6: '◉◉◉◉◉<br/>◉',
    7: '◉◉◉◉◉<br/>◉◉',
    8: '◉◉◉◉◉<br/>◉◉◉',
    9: '◉◉◉◉◉<br/>◉◉◉◉',
    10: '◉◉◉◉◉<br/>◉◉◉◉◉',
    11: '◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉',
    12: '◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉',
    13: '◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉◉',
    14: '◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉◉◉',
    15: '◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉◉◉◉',
    16: '◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉',
    17: '◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉',
    18: '◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉◉',
    19: '◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉◉◉◉<br/>◉◉◉◉',
    20: '⚑'
}, 'zaa': {
    1: "𝋡",
    2: "𝋢",
    3: "𝋣",
    4: "𝋤",
    5: "𝋥",
    6: "𝋦",
    7: "𝋧",
    8: "𝋨",
    9: "𝋩",
    10: "𝋪",
    11: "𝋫",
    12: "𝋬",
    13: "𝋭",
    14: "𝋮",
    15: "𝋯",
    16: "𝋰",
    17: "𝋱",
    18: "𝋲",
    19: "𝋳",
    20: "𝋡𝋠"
}}; // international style bbyyyyy
const specMoons = {
    "nah": ["Atl Kawalo", "Tlakaxipewalistli", "Tosostontli", "Weytotostli", "Toxcatl", "Etsalkwalistli", "Tekwilwitontli", "Weytekwilwitl", "Mikkailwitontli", "Weymikkailwitontli", "Ochpanistli", "Teotleco", "Tepeilwitl", "Kecholli", "Panketsalistli", "Atemostli", "Tititl", "Iskalli", "Nemontemi"],
    "yuh": ["bo&#x0320;täxi", "ts'&auml;'yo", "ts'ohntho", "t&auml;ts'ohni", "tsibifi", "ego&#x0320;o&#x0320;ni", "ts'u&#x0320;ngohm&uuml;", "t&auml;ngohm&uuml;", "ts'u&#x0320;ngot&uuml;", "t&auml;ngot&uuml;", "baxi", "ts'u&#x0320;n'boxu&#x0320;gi", "t&auml;'boxu&#x0320;gi", "ts'oni", "t'&auml;xhm&euml;", "k&auml;ndehe", "bu&#x0320;", "th&uuml;do&#x0320;ni", "Dupa"],
    "may": ["Pop", "Wo'", "Sip", "Sots'", "Sek", "Xul", "Yaxk'in", "Mol", "Ch'en", "Yax", "Sak'", "Kej", "Mak", "K'ank'in", "Muwan", "Pax", "K'ayab", "Kumk'u", "Wayeb'"],
    "zaa": ["Toowa", "Wistao", "Begag", "Lowek", "Yagkeo", "Gabena", "Golagoo", "Cheag", "Gogaa", "Gonaa", "Ga'aa", "Tina", "Za'a", "Zadii", "Zowao", "Yetila", "Yeche", "Gowi", "Kichola", "Keainij"]
}
const calNames = {"short":{
    "zaa": "(Lachewize) Biye",
    "yuh": "Medepa",
    "nah": "T&omacr;nalp&omacr;walli",
    "may": "Classic Maya Short Round"
}, "long":{
    "zaa": "Iza",
    "yuh": "Eninabenje&#x0320;ya & Eninabeningo/Eninabenz&auml;n&auml;",
    "nah": "Xiwp&omacr;walli",
    "may": "Maya Long Round"
}};
const prefNums = {"zaa": {
    1: "Yag",
    2: "Yoo",
    3: "Yoo",
    4: "Ka",
    5: "Yoo",
    6: "Kwa",
    7: "Bila",
    8: "La",
    9: "Yoolo",
    10: "Bila",
    11: "La",
    12: "Bene'", 
    13: "Yeze"
}};