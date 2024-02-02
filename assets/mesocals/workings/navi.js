document.getElementById('forcer').addEventListener('click', () => {
    if (document.getElementById('year_greg').value == "0") {
        alert('The Gregorian Calendar skips from year -1 directly to 1, thus having no year 0. Input the correct year and try again.');
    }
    let formDataGreggy = document.getElementById('year_greg').value + '/' + document.getElementById('month_greg').value + '/' + document.getElementById('day_greg').value;
    let lc_Spit = getLCarr(getLCEDate(formDataGreggy));
    localStorage.setItem("lastDate", formDataGreggy.replace(/\//gi, ","));
    if (lc_Spit[6] == 0) {
        document.getElementById('msgfin').innerHTML = lc_Spit.join('.').substring(0, lc_Spit.join('.').lastIndexOf('.'));
    } else {
        let disc = lc_Spit.pop();
        document.getElementById('msgfin').innerHTML = lc_Spit.join('.') + disc;
    }
    let sr_Spit = [], sr_Spit_may = [], sr_Spit_yuh = [], sr_Spit_zaa = [];
    if (isleapg(getHyear(parseInt(document.getElementById('year_greg').value))) && ((parseInt(document.getElementById('month_greg').value) > 2 && parseInt(document.getElementById('month_greg').value) < 8)||(parseInt(document.getElementById('month_greg').value) == 8 && parseInt(document.getElementById('day_greg').value) < 29))) {
        sr_Spit_may = getSarr(getLCEDate(formDataGreggy) + 218 + 57);
    } else {
        sr_Spit_may = getSarr(getLCEDate(formDataGreggy) + 217 + 57);
    }
    if (isleapg(getHyear(parseInt(document.getElementById('year_greg').value))) && (parseInt(document.getElementById('month_greg').value) > 2)) {
        sr_Spit = getSarr(getLCEDate_minusleaps(formDataGreggy) + 1);
    } else if (isleapg(getHyear(parseInt(document.getElementById('year_greg').value)) - 1) && (parseInt(document.getElementById('month_greg').value) < 3)) {
        sr_Spit = getSarr(getLCEDate_minusleaps(formDataGreggy) + 1);
    } else {
        sr_Spit = getSarr(getLCEDate_minusleaps(formDataGreggy));
    }
    if ((isleapg(getHyear(parseInt(document.getElementById('year_greg').value))) && (parseInt(document.getElementById('month_greg').value) > 2)) || (isleapg(getHyear(parseInt(document.getElementById('year_greg').value)) - 1) && (document.getElementById('month_greg').value == "1" || (document.getElementById('month_greg').value == "2" && parseInt(document.getElementById('day_greg').value) < 11)))) {
        sr_Spit_yuh = getSarr(getLCEDate_minusleaps(formDataGreggy) + 1);
    } else {
        sr_Spit_yuh = getSarr(getLCEDate_minusleaps(formDataGreggy));
    }
    if ((isleapg(getHyear(parseInt(document.getElementById('year_greg').value))) && parseInt(document.getElementById('month_greg').value) > 2) || (isleapg(getHyear(parseInt(document.getElementById('year_greg').value)) - 1) && (document.getElementById('month_greg').value == "1" || (parseInt(document.getElementById('day_greg').value) < 23 && document.getElementById('month_greg').value == "2")))) {
        sr_Spit_zaa = getSarr(getLCEDate_minusleaps(formDataGreggy) + 95);
    } else {
        sr_Spit_zaa = getSarr(getLCEDate_minusleaps(formDataGreggy) + 94);
    }
    document.getElementById('naw_d_num').innerHTML = sr_Spit[0];
    document.getElementById('naw_d_sign').innerHTML = nsigns[sr_Spit[1] - 1];
    document.getElementById('hn_d_num').innerHTML = sr_Spit_yuh[0];
    document.getElementById('hn_d_sign').innerHTML = !osigns[sr_Spit_yuh[1] - 1].startsWith("Ama") ? "An" + osigns[sr_Spit_yuh[1] - 1] : osigns[sr_Spit_yuh[1] - 1];
    document.getElementById('may_d_num').innerHTML = sr_Spit_may[0] - 1;
    document.getElementById('may_d_sign').innerHTML = msigns[sr_Spit_may[1] - 1];
    document.getElementById('zaa_d_num').innerHTML = "(" + sr_Spit_zaa[0] + ")";
    if (sr_Spit_zaa[0] == 1 && (sr_Spit_zaa[1] == 10 || sr_Spit_zaa[1] == 13 || sr_Spit_zaa[1] == 18)) {
        document.getElementById('zaa_d_sign').innerHTML = prefNums["zaa"][sr_Spit_zaa[0]] + zsigns[sr_Spit_zaa[1] - 1];
    } else if (sr_Spit_zaa[0] == 1) {
        document.getElementById('zaa_d_sign').innerHTML = prefNums["zaa"][sr_Spit_zaa[0]] + "a" + zsigns[sr_Spit_zaa[1] - 1];
    } else {
        document.getElementById('zaa_d_sign').innerHTML = prefNums["zaa"][sr_Spit_zaa[0]] + zsigns[sr_Spit_zaa[1] - 1];
    }
    faceFix(sr_Spit_may,sr_Spit, sr_Spit_yuh, sr_Spit_zaa);
    let dayCount = getLCEDate(formDataGreggy),
        yc_Spit = getYCArr(dayCount),
        yc_Spit_yuh = getYCArr(dayCount + 18),
        yc_Spit_may = getYCArr_may(dayCount),
        yc_Spit_zaa = getYCArr_zaa(dayCount); //thebe, anixui, year-num, year-sign, month, day
    document.getElementById('count_thebe').innerHTML = yc_Spit[0];
    document.getElementById('count_ani').innerHTML = yc_Spit[1];
    ycFix(yc_Spit_may,yc_Spit, yc_Spit_yuh,yc_Spit_zaa);
    let leapcheck = [0,0,0,0];
    if (isleapg(getHyear(parseInt(document.getElementById('year_greg').value) - 1)) && parseInt(document.getElementById('month_greg').value) == 3 && parseInt(document.getElementById('day_greg').value) == 1) {
        document.getElementById('naw_d_num').innerHTML = "";
        document.getElementById('naw_d_sign').innerHTML = "<span class='info'>6th dead deay. The Sacred Round pauses today.</span>";
        if (document.querySelector('#daynsign input[type=radio]:checked')['name'] == "nah") {
          document.getElementById('faceDisp')['src'] = "";
        }
        leapcheck[0] = true;
        leapcheck[1] = false;
        leapcheck[2] = false;
        leapcheck[3] = false;
        /*document.getElementById('nsa_d_num').innerHTML = "";
        document.getElementById('nsa_d_sign').innerHTML = "N/A";*/
    } else if (isleapg(getHyear(parseInt(document.getElementById('year_greg').value))) && parseInt(document.getElementById('month_greg').value) == 8 && parseInt(document.getElementById('day_greg').value) == 29) {
        document.getElementById('may_d_num').innerHTML = "";
        document.getElementById('may_d_sign').innerHTML = "<span class='info'>6th dead deay. The Sacred Round pauses today.</span>";
        if (document.querySelector('#daynsign input[type=radio]:checked')['name'] == "may") {
            document.getElementById('faceDisp')['src'] = "";
        }
        leapcheck[0] = false;
        leapcheck[1] = true;
        leapcheck[2] = false;
        leapcheck[3] = false;
    } else if (isleapg(getHyear(parseInt(document.getElementById('year_greg').value)) - 1) && parseInt(document.getElementById('month_greg').value) == 2 && parseInt(document.getElementById('day_greg').value) == 23 && document.querySelector('#daynsign input[type=radio]:checked')['name'] == "zaa") {
        document.getElementById('zaa_d_num').innerHTML = "";
        document.getElementById('zaa_d_sign').innerHTML = "<span class='info'>6th dead deay. The Sacred Round pauses today.</span>";
        if (document.querySelector('#daynsign input[type=radio]:checked')['name'] == "zaa") {
            document.getElementById('faceDisp')['src'] = "";
        }
        leapcheck[0] = false;
        leapcheck[1] = false;
        leapcheck[2] = true;
        leapcheck[3] = false;
    } else if (isleapg(getHyear(parseInt(document.getElementById('year_greg').value)) - 1) && parseInt(document.getElementById('month_greg').value) == 2 && parseInt(document.getElementById('day_greg').value) == 11) {
        document.getElementById('hn_d_num').innerHTML = "";
        document.getElementById('hn_d_sign').innerHTML = "<span class='info'>6th dead deay. The Sacred Round pauses today.</span>";
        if (document.querySelector('#daynsign input[type=radio]:checked')['name'] == "yuh") {
          document.getElementById('faceDisp')['src'] = "";
        }
        leapcheck[0] = false;
        leapcheck[1] = false;
        leapcheck[2] = false;
        leapcheck[3] = true;
    }
    /*if (isleapg(parseInt(document.getElementById('year_greg').value) - 1) && parseInt(document.getElementById('month_greg').value) == 3 && parseInt(document.getElementById('day_greg').value) == 1) {
        let sc_Spit = getSCnum(getLCEDate_minusleaps(formDataGreggy) + 1);
        document.getElementById("katunmsg").innerHTML = sc_Spit + "<span class='info'>&nbsp;&mdash;&nbsp;Intercalary day.</span>";
    } else {
        let sc_Spit = 0;
        if (isleapg(getHyear(parseInt(document.getElementById('year_greg').value))) && (parseInt(document.getElementById('month_greg').value) > 2)) {
            sc_Spit = getSCnum(getLCEDate_minusleaps(formDataGreggy) + 1);
        } else if (isleapg(getHyear(parseInt(document.getElementById('year_greg').value)) - 1) && (parseInt(document.getElementById('month_greg').value) < 3)) {
            sc_Spit = getSCnum(getLCEDate_minusleaps(formDataGreggy) + 1);
        } else {
            sc_Spit = getSCnum(getLCEDate_minusleaps(formDataGreggy));
        }
        document.getElementById("katunmsg").innerHTML = sc_Spit;
    }*/
    katunise(dayCount);
});
const thirties = [0,0,0,1,0,1,0,0,1,0,1,0];
var greglist = [...document.querySelectorAll('#sheet_greg_days td')];
document.getElementById('month_greg').addEventListener('input',()=>{
    if (thirties[document.getElementById('month_greg').value - 1] == 1) {
        document.getElementById('themanymonths').style['display'] = 'none';
        document.getElementById('themonthoftwo').style['display'] = "";
        document.getElementById('gregs_leapday').style['display'] = "";
        updateSheet(greglist, 30);
    } else if (document.getElementById('month_greg').value == 2) {
        document.getElementById('themonthoftwo').style['display'] = "none";
        document.getElementById('themanymonths').style['display'] = "none";
        if (isleapg(getHyear(parseInt(document.getElementById('year_greg').value)))) {
            updateSheet(greglist, 29);
        } else {
            document.getElementById('gregs_leapday').style["display"] = "none";
            updateSheet(greglist, 28);
        }
    } else {
        document.getElementById('themanymonths').style['display'] = '';
        document.getElementById('themonthoftwo').style['display'] = "";
        document.getElementById('gregs_leapday').style['display'] = "";
        updateSheet(greglist, 31);
    }
    document.getElementById('sheet_greg_month').innerHTML = document.getElementById('month_greg').options[document.getElementById('month_greg').selectedIndex].text;
    document.getElementById('forcer').classList.add('ded');
});
document.getElementById('year_greg').addEventListener('input', ()=>{
    document.getElementById('month_greg').dispatchEvent(new Event('input'));
    document.getElementById('sheet_greg_year').innerHTML = document.getElementById('year_greg').value;
    if (parseInt(document.getElementById('year_greg').value) < 1582 || (parseInt(document.getElementById('year_greg').value) == 1582 && parseInt(document.getElementById('month_greg').value) <= 10 && parseInt(document.getElementById('day_greg').value) < 15)) {
        document.getElementById('greggyhead').innerHTML = "(Proleptic) Gregorian Calendar";
    } else {
        document.getElementById('greggyhead').innerHTML = "Gregorian Calendar";
    }
    document.getElementById('forcer').classList.remove('ded');
});
document.getElementById('day_greg').addEventListener('input', ()=>{
    document.querySelector('#sheet_greg_days td.cellect').classList.remove('cellect');
    document.querySelectorAll('#sheet_greg_days td')[document.getElementById('day_greg').value - 1].classList.add('cellect');
    document.getElementById('forcer').classList.remove('ded');
});
document.getElementById('greg_bigback').addEventListener('click', () => {
    if (parseInt(document.getElementById('year_greg').value) <= -8239) {
        alert("The converter only works on dates after March 31, -8239 (Proleptic Gregorian Calendar).");
    } else if (document.getElementById('year_greg').value == "0") {
        document.getElementById('year_greg').value = -1;
    } else {
        document.getElementById('year_greg').value = parseInt(document.getElementById('year_greg').value) - 1;
    }
    if (isleapg(getHyear(parseInt(document.getElementById('year_greg').value)) + 1) && document.getElementById('month_greg').value == "2" && document.getElementById('day_greg').value == "29") {
        document.getElementById('day_greg').value = 28;
    }
    document.getElementById('year_greg').dispatchEvent(new Event('input'));
    document.getElementById('forcer').dispatchEvent(new Event('click'));
    document.getElementById('forcer').classList.add('ded');
});
document.getElementById('greg_bigforward').addEventListener('click', () => {
    if(isleapg(getHyear(parseInt(document.getElementById('year_greg').value))) && document.getElementById('day_greg').value == "29") {
        document.getElementById('day_greg').value = 28;
    }
    document.getElementById('year_greg').value = parseInt(document.getElementById('year_greg').value) + 1;
    document.getElementById('year_greg').dispatchEvent(new Event('input'));
    document.getElementById('forcer').dispatchEvent(new Event('click'));
    document.getElementById('forcer').classList.add('ded');
});
document.getElementById('greg_smaback').addEventListener('click', () => {
    if (parseInt(document.getElementById('year_greg').value) <= -8239 && parseInt(document.getElementById('month_greg').value) <= 4) {
        alert("The converter only works on dates after March 31, -8239 (Proleptic Gregorian Calendar).");
    } else if (parseInt(document.getElementById('month_greg').value) > 1) {
        if (parseInt(document.getElementById('month_greg').value) - 1 == 2 && isleapg(getHyear(parseInt(document.getElementById('year_greg').value))) && parseInt(document.getElementById('day_greg').value) > 29) {
            greglist[28].dispatchEvent(new Event('click'));
        } else if (parseInt(document.getElementById('month_greg').value) - 1 == 2 && parseInt(document.getElementById('day_greg').value) > 28) {
            greglist[27].dispatchEvent(new Event('click'));
        } else if (thirties[parseInt(document.getElementById('month_greg').value)] == 1 && parseInt(document.getElementById('day_greg').value) == 31) {
            greglist[29].dispatchEvent(new Event('click'));
        }
        document.getElementById('month_greg').value = parseInt(document.getElementById('month_greg').value) - 1;
        document.getElementById('month_greg').dispatchEvent(new Event('input'));
        document.getElementById('forcer').dispatchEvent(new Event('click'));
        document.getElementById('forcer').classList.add('ded');
    } else {
        if (parseInt(document.getElementById('year_greg').value) <= -8239) {
            alert("The converter only works on dates after March 31, -8239 (Proleptic Gregorian Calendar).");
        } else if (document.getElementById('year_greg').value == "0") {
            document.getElementById('year_greg').value = -1;
            document.getElementById('month_greg').value = 12;
        } else {
            document.getElementById('year_greg').value = parseInt(document.getElementById('year_greg').value) - 1;
            document.getElementById('month_greg').value = 12;
        }
        document.getElementById('month_greg').dispatchEvent(new Event('input'));
        document.getElementById('year_greg').dispatchEvent(new Event('input'));
        document.getElementById('forcer').dispatchEvent(new Event('click'));
        document.getElementById('forcer').classList.add('ded');
    }
});
document.getElementById('greg_smaforward').addEventListener('click', () => {
    if (parseInt(document.getElementById('month_greg').value) < 12) {
        if (parseInt(document.getElementById('month_greg').value) + 1 == 2 && isleapg(getHyear(parseInt(document.getElementById('year_greg').value))) && parseInt(document.getElementById('day_greg').value) > 29) {
            greglist[28].dispatchEvent(new Event('click'));
        } else if (parseInt(document.getElementById('month_greg').value) + 1 == 2 && parseInt(document.getElementById('day_greg').value) > 28) {
            greglist[27].dispatchEvent(new Event('click'));
        } else if (thirties[parseInt(document.getElementById('month_greg').value)] == 1 && parseInt(document.getElementById('day_greg').value) == 31) {
            greglist[29].dispatchEvent(new Event('click'));
        }
        document.getElementById('month_greg').value = parseInt(document.getElementById('month_greg').value) + 1;
        document.getElementById('month_greg').dispatchEvent(new Event('input'));
        document.getElementById('forcer').dispatchEvent(new Event('click'));
        document.getElementById('forcer').classList.add('ded');
    } else {
        document.getElementById('month_greg').value = 1;
        document.getElementById('year_greg').value = parseInt(document.getElementById('year_greg').value) + 1;
        document.getElementById('month_greg').dispatchEvent(new Event('input'));
        document.getElementById('year_greg').dispatchEvent(new Event('input'));
        document.getElementById('forcer').dispatchEvent(new Event('click'));
        document.getElementById('forcer').classList.add('ded');
    }
});
document.getElementById('teenyback').addEventListener('click', () => {
    if (parseInt(document.getElementById('day_greg').value) == 1) {
        if (parseInt(document.getElementById('year_greg').value) <= -8239 && parseInt(document.getElementById('month_greg').value) <= 4 && parseInt(document.getElementById('day_greg').value) <= 1) {
            alert("The converter only works on dates after March 31, -8239 (Proleptic Gregorian Calendar).");
        } else if (document.getElementById('year_greg').value == "0" && parseInt(document.getElementById('month_greg').value) <= 1) {
            document.getElementById('year_greg').value = -1;
            document.getElementById('month_greg').value = 12;
            greglist[dcountm_greg[parseInt(document.getElementById('month_greg').value) - 1] - 1].dispatchEvent(new Event('click'));
            document.getElementById('year_greg').dispatchEvent(new Event('input'));
            document.getElementById('month_greg').dispatchEvent(new Event('input'));
        } else if (parseInt(document.getElementById('month_greg').value) <= 1) {
            document.getElementById('year_greg').value = parseInt(document.getElementById('year_greg').value) - 1;
            document.getElementById('month_greg').value = 12;
            greglist[dcountm_greg[parseInt(document.getElementById('month_greg').value) - 1] - 1].dispatchEvent(new Event('click'));
            document.getElementById('year_greg').dispatchEvent(new Event('input'));
            document.getElementById('month_greg').dispatchEvent(new Event('input'));
        } else {
            document.getElementById('month_greg').value = parseInt(document.getElementById('month_greg').value) - 1;
            if (document.getElementById('month_greg').value == "2" && isleapg(getHyear(parseInt(document.getElementById('year_greg').value)))) {
                greglist[28].dispatchEvent(new Event('click'));
            } else if (document.getElementById('month_greg').value == "2") {
                greglist[27].dispatchEvent(new Event('click'));
            } else if (thirties[parseInt(document.getElementById('month_greg').value) - 1] == 1) {
                greglist[29].dispatchEvent(new Event('click'));
            } else {
                greglist[30].dispatchEvent(new Event('click'));
            }
            document.getElementById('year_greg').dispatchEvent(new Event('input'));
            document.getElementById('month_greg').dispatchEvent(new Event('input'));
        }
    } else {
        greglist[parseInt(document.getElementById('day_greg').value) - 2].dispatchEvent(new Event('click'));
    }
    document.getElementById('forcer').dispatchEvent(new Event('click'));
    document.getElementById('forcer').classList.add('ded');
});
document.getElementById('teenyforward').addEventListener('click', ()=>{
    if ((isleapg(getHyear(parseInt(document.getElementById('year_greg').value))) && parseInt(document.getElementById('day_greg').value) == 28)) {
        greglist[parseInt(document.getElementById('day_greg').value)].dispatchEvent(new Event('click'));
    } else if ((parseInt(document.getElementById('day_greg').value) == dcountm_greg[parseInt(document.getElementById('month_greg').value) - 1]) || (isleapg(getHyear(parseInt(document.getElementById('year_greg').value))) && parseInt(document.getElementById('day_greg').value) == 29 && document.getElementById('month_greg').value == "2")) {
        if (document.getElementById('month_greg').value != "12") {
            document.getElementById('month_greg').value = parseInt(document.getElementById('month_greg').value) + 1;
        } else {
            document.getElementById('month_greg').value = 1;
            document.getElementById('year_greg').value = parseInt(document.getElementById('year_greg').value) + 1;
        }
        greglist[0].dispatchEvent(new Event('click'));
        document.getElementById('year_greg').dispatchEvent(new Event('input'));
        document.getElementById('month_greg').dispatchEvent(new Event('input'));
    } else {
        greglist[parseInt(document.getElementById('day_greg').value)].dispatchEvent(new Event('click'));
    }
    document.getElementById('forcer').dispatchEvent(new Event('click'));
    document.getElementById('forcer').classList.add('ded');
});
