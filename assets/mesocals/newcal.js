const dcountm_greg = [31,28,31,30,31,30,31,31,30,31,30,31],
    month_aggregates = [90,59,31],
    hepoch = [1762,4,1],
    mepoch = [2,11,7,3],
    sepoch = [4,1],
    aepoch = [0,0,6],
    nsigns = ["Mikistli", "Mas&#x0101;tl", "T&#x014d;chtli", "&Amacr;tl", "Itskwintli", "Osomahtli", "Mal&#x012b;nalli", "&Amacr;katl", "&Omacr;s&#x0113;l&#x014d;tl", "Kw&#x0101;wtli", "K&#x014d;skakw&#x0101;wtli", "Ol&#x012b;n", "Tekpatl", "Kiyawitl", "X&#x014d;chitl", "Sipaktli", "Eh&#x0113;katl", "Kalli", "Kwetspalin", "K&#x014d;&#x0101;tl"],
    osigns = ["t&uuml;", "f&auml;ni", "jwa", "dehe", "'yo", "Amatsu&#x0320;pa", "j&auml;xt'e&#x0320;i", "xithi", "hmatsani", "kaxu&#x0320;ni", "o&#x0320;ni", "kix&euml;i", "eyaxi", "'ye", "do&#x0320;ni", "tojwai", "Amand&auml;h&iuml;", "eg&uuml;", "bot&auml;ga", "k'&euml;y&auml;"],
    msigns = ["Kimi", "Manik'", "Lamat", "Muluk", "Ok", "Chuwen", "Eb'", "B'en", "Ix", "Men", "Kib", "Kab'an", "Ets'nab", "Kawak", "Ajaw", "Imix'", "Ik'", "Ak'b'al", "K'an", "Chikchan"],
    csigns = ["moku", "kwaa", "sayu", "kuta", "'wa", "ñuu", "kwañe", "'wiyo", "widzu", "xa", "kwij", "ki", "si", "ko", "wakoo", "kewi", "chi", "kwaw", "kuu", "yo"],
    zsigns = ["chila", "laa", "ela", "lachi", "tsee", "lana", "china", "laba", "nisa", "tela", "lao", "biaa", "gee", "lachi", "inaa", "lao", "xoo", "opa", "lapag", "lao"],
    specSigns = {"may": msigns, "nah": nsigns, "yuh": osigns, "nsa": csigns, "zaa": zsigns};
/**
 * hepoch: LCEpoch in Holocene years. mepoch: LCEpoch in year count terms [month,day,number,sign]. sepoch: LCE in short round terms^. aepoch: anixui epoch.
 * ^note that the signs are shifted some places, mostly for ease of writing. they may or may not ever be re-positioned and the code adapted.
*/
function findleap (x) {
    return (((x - (x % 4)) / 4) + ((x - (x % 400)) / 400) - ((x - (x % 100)) / 100));
}
function isleapg (x) {
    return ((x % 4 == 0 && x % 100 != 0) || (x % 400 == 0));
}
function getLCEDate(feed) {
    let reDate=[0,0,0],
        unDate = feed.split("\/");
    if (parseInt(unDate[0]) > 0) {
        reDate = [parseInt(unDate[0]) + 10000, parseInt(unDate[1]), parseInt(unDate[2])];
    } else {
        reDate = [10001 + parseInt(unDate[0]), parseInt(unDate[1]), parseInt(unDate[2])];
    }
    let accDayes = 0;
    if (reDate[0] < hepoch[0] || (reDate[0] == hepoch[0] && reDate[1] < hepoch[1]) || (reDate[0] == hepoch[0] && reDate[1] == hepoch[1] && reDate[2] < hepoch[2])) {
        return -1; // date underflows epoch; kill
    } else if (reDate[0] == hepoch[0] && reDate[1] == hepoch[1] && reDate[2] == hepoch[2]) {
        return 0; // same as epoch. no further action needed
    }
    if (reDate[0] > hepoch[0]) {
        accDayes += (reDate[0] - hepoch[0]) * 365;
        accDayes += findleap(reDate[0]) - 427; // alr calc'd the hepoch leaps, since they're constant we don't need to run the thing twice
        if (reDate[1] < hepoch[1]) {
            accDayes -= month_aggregates[reDate[1] - 1];
            if (isleapg(reDate[0]) && ((reDate[1] <= 2))) { accDayes -= 1; } 
        }
    }
    if (reDate[1] > hepoch[1]) {
        let i = hepoch[1];
        while (i < reDate[1]) {
            accDayes += dcountm_greg[i - 1];
            i += 1;
        }
    }
    accDayes += reDate[2] - hepoch[2];
    return accDayes;
}
function getLCarr(rawc) {
    if (rawc == -1) {
        alert("The converter only works on dates after March 31, -8239 (Proleptic Gregorian Calendar).");
    } else if (rawc === 0) {
        return [0,0,0,0,0,0,0];
    } else {
        let accDayes = rawc,
            lcDef = [0,0,0,0,0,0,0];
        if (accDayes - 2016000 > -1) {
            while (accDayes - 2016000 > -1) {
                lcDef[0] += 1;
                accDayes -= 2016000;
            }
            lcDef[1] += 1;
            while (accDayes !== 0) {
                if (accDayes - 144000 > -1) {
                    accDayes -= 144000;
                    lcDef[1] += 1;
                } else if (accDayes - 7200 > -1) {
                    accDayes -= 7200;
                    lcDef[2] += 1;
                } else if (accDayes - 360 > -1) {
                    accDayes -= 360;
                    lcDef[3] += 1;
                } else if (accDayes - 20 > -1) {
                    accDayes -= 20;
                    lcDef[4] += 1;
                } else {
                    lcDef[5] += accDayes;
                    accDayes = 0;
                }
            }
        } else {
            while (accDayes !== 0) {
                if (accDayes - 144000 > -1) {
                    accDayes -= 144000;
                    lcDef[1] += 1;
                } else if (accDayes - 7200 > -1) {
                    accDayes -= 7200;
                    lcDef[2] += 1;
                } else if (accDayes - 360 > -1) {
                    accDayes -= 360;
                    lcDef[3] += 1;
                } else if (accDayes - 20 > -1) {
                    accDayes -= 20;
                    lcDef[4] += 1;
                } else {
                    lcDef[5] += accDayes;
                    accDayes = 0;
                }
            }
        }
        if (lcDef[0] !== 0) {
            lcDef[6] = "<br /><span class='info'>while technically the 1st (recently named) piktun (1.0.0.0.0.0) @ Nov 13, 2720 BCE (proleptic Gregorian) should only have been that, the 1st piktun, it technically began in a 2nd b'ak'tun, for some fucking reason. this means that there never will be another b'ak'tun 0 other than that which began @ Apr 1, 8239 BCE</span>"
        }
        return lcDef;
    }
}
function updateSheet(sheet, maxval){
    let iter = maxval + 1,
        minter = 1;
    while (minter <= maxval) {
        sheet[minter - 1].style['display'] = "";
        minter += 1;
    }
    while (iter <= sheet.length) {
        sheet[iter - 1].style['display'] = "none";
        iter += 1;
    }
}
function changeDay_g (id) {
    document.getElementById('day_greg').value = id;
    document.getElementById('day_greg').dispatchEvent(new Event('input'));
    document.getElementById('forcer').dispatchEvent(new Event('click'));
}
function getSarr (rawc) {
    return [(rawc + sepoch[0]) % 13 == 0 ? 13 : (rawc + sepoch[0]) % 13, (rawc + sepoch[1]) % 20 == 0 ? 20 : (rawc + sepoch[1]) % 20];
}
function getLCEDate_minusleaps(feed) {
    let reDate = [0, 0, 0],
        unDate = feed.split("\/");
    if (parseInt(unDate[0]) > 0) {
        reDate = [parseInt(unDate[0]) + 10000, parseInt(unDate[1]), parseInt(unDate[2])];
    } else {
        reDate = [10001 + parseInt(unDate[0]), parseInt(unDate[1]), parseInt(unDate[2])];
    }
    let accDayes = 0;
    if (reDate[0] < hepoch[0] || (reDate[0] == hepoch[0] && reDate[1] < hepoch[1]) || (reDate[0] == hepoch[0] && reDate[1] == hepoch[1] && reDate[2] < hepoch[2])) {
        return -1;
    } else if (reDate[0] == hepoch[0] && reDate[1] == hepoch[1] && reDate[2] == hepoch[2]) {
        return 0; // same as epoch. no further action needed
    }
    if (reDate[0] > hepoch[0]) {
        accDayes += (reDate[0] - hepoch[0]) * 365;
        if (reDate[1] < hepoch[1]) {
            accDayes -= month_aggregates[reDate[1] - 1];
        }
    }
    if (reDate[1] > hepoch[1]) {
        let i = hepoch[1];
        while (i < reDate[1]) {
            accDayes += dcountm_greg[i - 1];
            i += 1;
        }
    }
    accDayes += reDate[2] - hepoch[2];
    return accDayes;
}  // only used for the short round; since it skips leaps, we can also just disregard those here
function updateFace(t) {
    let allChange = ["yuh", "nah", "may", "zaa"];
    allChange.splice(allChange.indexOf(t),1);
    document.getElementById(allChange[0] + "change").checked = false;
    document.getElementById(allChange[1] + "change").checked = false;
    document.getElementById(allChange[2] + "change").checked = false;
    document.getElementById('faceDisp').classList.remove(allChange[0]);
    document.getElementById('faceDisp').classList.remove(allChange[1]);
    document.getElementById('faceDisp').classList.remove(allChange[2]);
    document.getElementById('faceDisp').classList.add(t);
    document.getElementById('forcer').dispatchEvent(new Event('click'));
}
function getYCArr (rawc) {
    let fullArr = [0,0,7,3,2,11]; //thebe, anixui, year-num, year-sign, month, day
    let preYear = 1762,
        i = 0,
        anwYear = 22; // year from 0; iterator
    while (i < rawc) {
        if (isleapg(preYear) && (rawc - i) >= 366) {
            if (fullArr[2] == 13) {
                fullArr[2] = 1;
            } else {
                fullArr[2] += 1;
            }
            fullArr[3] = (fullArr[3] + 5) % 20;
            preYear += 1;
            if (anwYear == 51) {
                anwYear = 0;
                if (fullArr[1] == 99) {
                    fullArr[0] += 1;
                    fullArr[1] = 0;
                } else {
                    fullArr[1] += 1;
                }
            } else {
                anwYear += 1;
            }
            i += 366;
        } else if ((rawc - i) >= 365 && !isleapg(preYear)) {
            if (anwYear == 51) {
                anwYear = 0;
                if (fullArr[1] == 99) {
                    fullArr[0] += 1;
                    fullArr[1] = 0;
                } else {
                    fullArr[1] += 1;
                }
            } else {
                anwYear += 1;
            }
            if (fullArr[2] == 13) {
                fullArr[2] = 1;
            } else {
                fullArr[2] += 1;
            }
            fullArr[3] = (fullArr[3] + 5) % 20;
            preYear += 1;
            i += 365;
        } else if (isleapg(preYear) && (rawc - i >= 336) && fullArr[4] == 2) {
            i += 336;
            preYear += 1;
            if (anwYear == 51) {
                anwYear = 0;
                if (fullArr[1] == 99) {
                    fullArr[0] += 1;
                    fullArr[1] = 0;
                } else {
                    fullArr[1] += 1;
                }
            } else {
                anwYear += 1;
            }
            if (fullArr[2] == 13) {
                fullArr[2] = 1;
            } else {
                fullArr[2] += 1;
            }
            fullArr[4] = 1;
            fullArr[5] = 1;
            fullArr[3] = (fullArr[3] + 5) % 20;
        } else if (fullArr[4] == 19 && isleapg(preYear) && (rawc - i) == 5) {
            i += 5;
            fullArr[5] = 6;
        } else if (rawc - i >= 335 && !isleapg(preYear) && fullArr[4] == 2) {
            i += 335;
            preYear += 1;
            if (anwYear == 51) {
                anwYear = 0;
                if (fullArr[1] == 99) {
                    fullArr[0] += 1;
                    fullArr[1] = 0;
                } else {
                    fullArr[1] += 1;
                }
            } else {
                anwYear += 1;
            }
            fullArr[4] = 1;
            fullArr[5] = 1;
            if (fullArr[2] == 13) {
                fullArr[2] = 1;
            } else {
                fullArr[2] += 1;
            }
            fullArr[3] = (fullArr[3] + 5) % 20;
        } else if (fullArr[4] == 19 && rawc - i == 4) {
            i += 4;
            fullArr[5] = 5;
        } else if (rawc - i >= 20) {
            let q = (rawc - i) % 20;
            fullArr[4] += (q != 0) ? (rawc - i - q) / 20 : 1;
            i += (q != 0) ? (rawc - i - q) : 20;
        } else if (rawc - i >= 10 && fullArr[5] == 11) {
            i += 10;
            fullArr[5] = 1;
            fullArr[4] += 1;
        } else {
            fullArr[5] += rawc - i;
            i = rawc;
        }
    }
    return fullArr;
}
function getYCArr_may (rawc) {
    let fullArr = [0, 0, 7, 3, 11, 16]; //leap flag. bc that's necessary now?, dummy legacy 2, year-num, year-sign, month, day
    let preYear = 1763,
        i = 0; // year from 0; iterator
    while (i < rawc) {
        if (isleapg(preYear) && (rawc - i) >= 366) {
            if (fullArr[2] == 13) {
                fullArr[2] = 1;
            } else {
                fullArr[2] += 1;
            }
            fullArr[3] = (fullArr[3] + 5) % 20;
            preYear += 1;
            i += 366;
        } else if ((rawc - i) >= 365 && !isleapg(preYear)) {
            if (fullArr[2] == 13) {
                fullArr[2] = 1;
            } else {
                fullArr[2] += 1;
            }
            fullArr[3] = (fullArr[3] + 5) % 20;
            preYear += 1;
            i += 365;
        } else if (isleapg(preYear) && rawc - i >= 151 && fullArr[4] == 11) {
            i += 151;
            preYear += 1;
            if (fullArr[2] == 13) {
                fullArr[2] = 1;
            } else {
                fullArr[2] += 1;
            }
            fullArr[4] = 1;
            fullArr[5] = 1;
            fullArr[3] = (fullArr[3] + 5) % 20;
        } else if (fullArr[4] == 19 && isleapg(preYear) && (rawc - i) == 5) {
            i += 5;
            fullArr[5] = 6;
        } else if (rawc - i >= 150 && !isleapg(preYear) && fullArr[4] == 11) {
            i += 150;
            preYear += 1;
            fullArr[4] = 1;
            fullArr[5] = 1;
            if (fullArr[2] == 13) {
                fullArr[2] = 1;
            } else {
                fullArr[2] += 1;
            }
            fullArr[3] = (fullArr[3] + 5) % 20;
        } else if (fullArr[4] == 19 && rawc - i == 4) {
            i += 4;
            fullArr[5] = 5;
        } else if (rawc - i >= 20) {
            let q = (rawc - i) % 20;
            fullArr[4] += (q != 0) ? (rawc - i - q) / 20 : 1;
            i += (q != 0) ? (rawc - i - q) : 20;
        } else if (rawc - i >= 5 && fullArr[5] == 16) {
            i += 5;
            fullArr[5] = 1;
            fullArr[4] += 1;
        } else {
            fullArr[5] += rawc - i;
            i = rawc;
        }
    }
    fullArr[0] = isleapg(preYear);
    return fullArr;
}
function getYCArr_zaa(rawc) {
    let fullArr = [5, 7, 2, 18]; //year-num, year-sign, month, day
    let preYear = 1762,
        i = 0; // year from 0; iterator
    while (i < rawc) {
        if (isleapg(preYear - 1) && (rawc - i) >= 366) {
            if (fullArr[0] == 13) {
                fullArr[0] = 1;
            } else {
                fullArr[0] += 1;
            }
            fullArr[1] = (fullArr[1] + 5) % 20;
            preYear += 1;
            i += 366;
        } else if ((rawc - i) >= 365 && !isleapg(preYear - 1)) {
            if (fullArr[0] == 13) {
                fullArr[0] = 1;
            } else {
                fullArr[0] += 1;
            }
            fullArr[1] = (fullArr[1] + 5) % 20;
            preYear += 1;
            i += 365;
        } else if (isleapg(preYear) && rawc - i >= 330 && fullArr[2] == 2) {
            i += 330;
            preYear += 1;
            if (fullArr[0] == 13) {
                fullArr[0] = 1;
            } else {
                fullArr[0] += 1;
            }
            fullArr[2] = 1;
            fullArr[3] = 1;
            fullArr[1] = (fullArr[1] + 5) % 20;
        } else if (rawc - i >= 329 && !isleapg(preYear) && fullArr[2] == 2) {
            i += 329;
            preYear += 1;
            fullArr[2] = 1;
            fullArr[3] = 1;
            if (fullArr[0] == 13) {
                fullArr[0] = 1;
            } else {
                fullArr[0] += 1;
            }
            fullArr[1] = (fullArr[1] + 5) % 20;
        } else if (fullArr[2] == 19 && isleapg(preYear - 1) && (rawc - i) == 7) {
            i += 7;
            fullArr[2] += 1;
            fullArr[3] = 3;
        } else if ((fullArr[2] == 19 && rawc - i == 6) && !isleapg(preYear - 1)) {
            i += 6;
            fullArr[3] = 2;
            fullArr[2] += 1;
        } else if (rawc - i >= 3 && fullArr[3] == 18) {
            i += 3;
            fullArr[3] = 1;
            fullArr[2] += 1;
        } else if (rawc - i >= 19 && fullArr[2] == 14) {
            i += 19;
            fullArr[2] += 1;
        } else if (rawc - i >= 5 && fullArr[2] == 19) {
            i += 5;
            fullArr[2] += 1;
            fullArr[3] = 1;
        } else if (rawc - i >= 20) {
            i += 20;
            fullArr[2] += 1;
        } else {
            fullArr[3] += rawc - i;
            i = rawc;
        }
    }
    return fullArr;
}
function getHyear (y) {
    return ((y > 0) ? y + 10000 : 10001 + y);
}
/* function getSCnum (rawc) {
    let q = rawc + scepoch[1],
        qu = q % 7200,
        qua = ((q - qu) / 7200) % 13;
    if (scepoch[0] - (2 * qua) < 1) {
        return (13 + (scepoch[0] - (2 * qua)));
    } else {
        return scepoch[0] - (2 * qua);
    }
}*/
function faceFix(refM, refC, refY, refZ) {
    if(document.querySelector('#daynsign input[type=radio]:checked')['name'] == "may") {
        document.getElementById('faceDisp')['src'] = faces["mayFaces"][refM[1]];
        document.getElementById('roundNum').innerHTML = specNumbers["may"][refM[0]];
        document.getElementById('round20').style['transform'] = 'rotate(-' + (18 * ((refM[1] + 5) % 20)) + 'deg)';
    } else if (document.querySelector('#daynsign input[type=radio]:checked')['name'] == "zaa") {
        document.getElementById('faceDisp')['src'] = faces["zaaFaces"][refZ[1]];
        document.getElementById('roundNum').innerHTML = specNumbers["zaa"][refZ[0]];
        document.getElementById('round20').style['transform'] = 'rotate(-' + (18 * (refZ[1] % 20)) + 'deg)';
    } else if (document.querySelector('#daynsign input[type=radio]:checked')['name'] == "yuh") {
        document.getElementById('faceDisp')['src'] = faces["yuhFaces"][refY[1]];
        document.getElementById('roundNum').innerHTML = specNumbers[document.querySelector('#daynsign input[type=radio]:checked')['name']][refY[0]];
        document.getElementById('round20').style['transform'] = 'rotate(-' + (18 * ((refY[1] + 5) % 20)) + 'deg)';
    } else {
        document.getElementById('faceDisp')['src'] = faces[document.querySelector('#daynsign input[type=radio]:checked')['name'] + "Faces"][refC[1]];
        document.getElementById('roundNum').innerHTML = specNumbers[document.querySelector('#daynsign input[type=radio]:checked')['name']][refC[0]];
        document.getElementById('round20').style['transform'] = 'rotate(-' + (18 * ((refC[1] + 5) % 20)) + 'deg)';
    }
}
function ycFix(refM, refC, refY, refZ) {
    if (document.querySelector('#daynsign input[type=radio]:checked')['name'] == "may") {
        document.getElementById('sheet_count_days').classList.remove('zaa_act');
        document.getElementById('sheet_count_month').innerHTML = specMoons["may"][refM[4] - 1];
        document.getElementById('sheet_count_year').innerHTML = (refM[2] - 1) + " " + specSigns['may'][refM[3] - 1];
        document.querySelector('#sheet_count_days td.cellect').classList.remove('cellect');
        document.querySelectorAll('#sheet_count_days td')[refM[5] - 1].classList.add('cellect');
        if (refM[4] == 19) {
            if (refM[0]) {
                document.getElementById('sheet_count_days').classList.add('deathbis');
            } else {
                document.getElementById('sheet_count_days').classList.add('deathd');
            }
        } else {
            document.getElementById('sheet_count_days').classList.remove('deathd');
            document.getElementById('sheet_count_days').classList.remove('deathbis');
        }
        document.getElementById('count_specs').style['display'] = "none";
        document.getElementById('spacers_mayfix').style['display'] = "";
    } else if ((document.querySelector('#daynsign input[type=radio]:checked')['name'] == "zaa")) {
        document.getElementById('sheet_count_days').classList.add('zaa_act');
        if (refZ[2] == 14) {
            document.getElementById('sheet_count_days').classList.add('zaa_odd');
            document.getElementById('sheet_count_days').classList.remove('deathd');
            document.getElementById('sheet_count_days').classList.remove('deathbis');
            document.getElementById('sheet_count_days').classList.remove('zaa_last');
        } else if (refZ[2] == 19) {
            document.getElementById('sheet_count_days').classList.add('deathd');
            document.getElementById('sheet_count_days').classList.remove('deathbis');
            document.getElementById('sheet_count_days').classList.remove('zaa_last');
        } else if (refZ[2] == 20) {
            if (isleapg(getHyear(parseInt(document.getElementById('year_greg').value)) - 1)) {
                document.getElementById('sheet_count_days').classList.add('deathbis');
                document.getElementById('sheet_count_days').classList.remove('deathd');
            } else {
                document.getElementById('sheet_count_days').classList.remove('deathbis');
                document.getElementById('sheet_count_days').classList.add('deathd');
            }
            document.getElementById('sheet_count_days').classList.add('zaa_last');
        } else {
            document.getElementById('sheet_count_days').classList.remove('zaa_last');
            document.getElementById('sheet_count_days').classList.remove('zaa_odd');
            document.getElementById('sheet_count_days').classList.remove('deathd');
            document.getElementById('sheet_count_days').classList.remove('deathbis');
        }
        document.getElementById('spacers_mayfix').style['display'] = "none";
        document.getElementById('count_specs').style['display'] = "none";
        document.getElementById('sheet_count_month').innerHTML = specMoons["zaa"][refZ[2] - 1];
        document.getElementById('sheet_count_year').innerHTML = "(" + refZ[0] + ")" + " " + prefNums["zaa"][refZ[0]] + specSigns['zaa'][refZ[1] - 1];
        document.querySelector('#sheet_count_days td.cellect').classList.remove('cellect');
        document.querySelectorAll('#sheet_count_days td')[refZ[3] - 1].classList.add('cellect');
    } else if (document.querySelector('#daynsign input[type=radio]:checked')['name'] == "yuh") {
      document.getElementById('sheet_count_days').classList.remove('zaa_act');
      if (refY[4] != 19) {
          document.getElementById('sheet_count_month').innerHTML = "An" + specMoons["yuh"][refY[4] - 1];
          document.getElementById('sheet_count_days').classList.remove('deathd');
          document.getElementById('sheet_count_days').classList.remove('deathbis');
      } else {
        document.getElementById('sheet_count_month').innerHTML = "Dupa";
        if (isleapg(getHyear(parseInt(document.getElementById('year_greg').value)) - 1)) {
          document.getElementById('sheet_count_days').classList.add('deathbis');
        } else {
          document.getElementById('sheet_count_days').classList.add('deathd');
        }
      }
      document.querySelector('#sheet_count_days td.cellect').classList.remove('cellect');
      document.querySelectorAll('#sheet_count_days td')[refY[5] - 1].classList.add('cellect');
      document.getElementById('sheet_count_year').innerHTML = refY[2] + " An" + specSigns["yuh"][refY[3] - 1];
      document.getElementById('count_specs').style['display'] = "";
      document.getElementById('spacers_mayfix').style['display'] = "none";
    } else {
      document.getElementById('sheet_count_days').classList.remove('zaa_act');
      document.getElementById('sheet_count_month').innerHTML = specMoons["nah"][refC[4] - 1];
      document.getElementById('sheet_count_year').innerHTML = refC[2] + " " + specSigns["nah"][refC[3] - 1];
      document.querySelector('#sheet_count_days td.cellect').classList.remove('cellect');
      document.querySelectorAll('#sheet_count_days td')[refC[5] - 1].classList.add('cellect');
      if (refC[4] == 19) {
          if (isleapg(getHyear(parseInt(document.getElementById('year_greg').value)) - 1)) {
              document.getElementById('sheet_count_days').classList.add('deathbis');
          } else {
              document.getElementById('sheet_count_days').classList.add('deathd');
          }
      } else {
          document.getElementById('sheet_count_days').classList.remove('deathd');
          document.getElementById('sheet_count_days').classList.remove('deathbis');
      }
      document.getElementById('spacers_mayfix').style['display'] = "none";
      document.getElementById('count_specs').style['display'] = "none";
    }
    document.getElementById('name_ycal').innerHTML = calNames["long"][document.querySelector('#daynsign input[type=radio]:checked')['name']];
    document.getElementById('name_scal').innerHTML = calNames["short"][document.querySelector('#daynsign input[type=radio]:checked')['name']];
}
function calcLCdist (x,y) {
    let midX = x.split('.'), midY = y.split('.');
    let postX = [parseInt(midX[5]), parseInt(midX[4]), parseInt(midX[3]), parseInt(midX[2]), parseInt(midX[1]), parseInt(midX[0])], postY = [parseInt(midY[5]), parseInt(midY[4]), parseInt(midY[3]), parseInt(midY[2]), parseInt(midY[1]), parseInt(midY[0])];
    let sums = [postY[0] - postX[0], postY[1] - postX[1], postY[2] - postX[2], postY[3] - postX[3], postY[4] - postX[4], postY[5] - postX[5]];
    return sums[0] + (20*sums[1]) + (360*sums[2]) + (7200*sums[3]) + (144000*sums[4]) + (2880000*sums[5]);
}
function getKatunNumber (lcarr) {
  let preNum = (lcarr[1] * 20) + lcarr[2];
  let xNum = ((-2 * preNum) + 2) % 13;
  if (xNum <= 0) {
    xNum += 13;
  }
  return xNum;
}
function katunise (rawc) {
  let acK = rawc + 0;
  if (acK === 0) {
    document.getElementById("shortnum").setAttribute("fill", "red");
    document.getElementById("first_time_sc").style.display = "";
  } else {
    acK -= 1;
    document.getElementById("shortnum").setAttribute("fill", "#000");
    document.getElementById("first_time_sc").style.display = "none";
  }
  document.getElementById("shortnum").innerHTML = specNumbers.may[getKatunNumber(getLCarr(acK)) + 1];
  document.getElementById("katun_number_rom").innerHTML = getKatunNumber(getLCarr(acK));
  if (rawc === 0) {
    document.getElementById("shortnum").innerHTML = specNumbers.may[5];
    document.getElementById("katun_number_rom").innerHTML = 4;
  }
}
