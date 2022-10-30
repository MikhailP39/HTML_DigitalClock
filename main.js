const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "am";

    let y = new Date().getFullYear();
    let mn = new Date().getMonth();
    let d = new Date().getDate();

    if(h > 12){
        h = h - 12;
        ampm = "pm";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    mn = mn < 9 ? "0" + mn : mn;
    d = d < 0 ? "0" + d : d;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;

    yearEl.innerText = y;
    monthEl.innerText = mn + 1;
    dayEl.innerText = d;

    changeSeason(mn, h, ampm);

    setTimeout(() => {
        updateClock()
    }, 1000);
}

function changeSeason(month, hour, am_pm){
    if(month >= 8 && month < 11){
        changeTime(hour, am_pm, 'https://wallpapercave.com/wp/wp4726929.jpg',
            'https://wallpaperaccess.com/full/2942192.jpg',
            'https://img.fotocommunity.com/autumn-morning-d61405cd-2bf0-4cc4-8168-1ed8acb83e88.jpg?width=1000',
            'https://wallpapercave.com/wp/wp3490817.jpg')
    } else if(month >= 11 && month < 2){
        changeTime(hour, am_pm,'https://wallpaperaccess.com/full/1320216.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b49d567691051.58b2f51843b6b.jpg',
            'https://as1.ftcdn.net/v2/jpg/02/88/73/34/1000_F_288733450_JhCzDnowWFyz8xzgSXDWVwGlfjHV5NHF.jpg',
            'https://previews.123rf.com/images/emarandjelovic/emarandjelovic1812/emarandjelovic181200044/113930518-path-covered-with-big-snow-in-park-on-cold-winter-day-winter-idyll-and-cold-weather-with-snow-concep.jpg')
    }else if(month >= 2 && month < 5){
        changeTime(hour, am_pm,'https://wallpaperaccess.com/full/2990888.jpg',
            'https://wallpapercave.com/wp/wp6504329.jpg',
            'https://wallpaperaccess.com/full/456184.jpg',
            'https://wallpapercave.com/wp/wp5837228.jpg')
    }else{
        changeTime(hour, am_pm,'https://nt.global.ssl.fastly.net/images/1431874180522-1206900.jpg&crop=16:7',
            'https://wallpaperaccess.com/full/2182860.jpg',
            'https://wallup.net/wp-content/uploads/2019/09/7661-fresh-sun-shine-behind-the-tree.jpg',
            'https://images.photowall.com/products/44500/sunny-summer-day.jpg?h=699&q=85')
    }
}

function changeTime(hour, am_pm, url_evening, url_night, url_morning, url_day){
    if(hour >= 5 && hour < 10 && am_pm === "pm"){
        document.body.style.backgroundImage = "url(" + url_evening + ")";
    } else if(hour >= 10 && hour <= 12 && am_pm === "pm" || hour >= 0 && hour < 5 && ampm === "am"){
        document.body.style.backgroundImage = "url(" + url_night + ")";
    } else if(hour >= 5 && hour < 12 && am_pm === "am") {
        document.body.style.backgroundImage = "url(" + url_morning + ")";
    } else{
        document.body.style.backgroundImage = "url(" + url_day + ")";
    }
}

updateClock()
