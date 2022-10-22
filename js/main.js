// var seyahet = [
//     ["Tebiet",
//         ["Deniz","Hava limani"],"Ismayilli","Almaniya"
//     ],
//     ["Aytac","Gultac","Sema","Nubar","Azima-Esmira"],
//     ["Revan","Sebuhi","Rza","Deyanet"],
//     [
//         "Shah dag",["Yay","Qis"],"Mandarin",
//     ],
//     ["","Baki."]
// ];

// console.log(seyahet[2][2])


// console.log(seyahet[3][2][7])

// console.log(seyahet[2][2])
// console.log(seyahet[2][3])



// console.log(seyahet[3][0])

// console.log(seyahet[2][3])
// console.log(seyahet[3][1][1])
// console.log(seyahet[4][1])
// console.log(seyahet[0][2])
// console.log(seyahet[1][2])
// console.log(seyahet[3][2])

// console.log("Menim adim "+ seyahet[2][2][0]+seyahet[0][1][0][4]+seyahet[0][3][7] +"dir.")


function chBg(){
    
    document.getElementById("main").style.animationName = "go";
}

function aniStop(){
    
    document.getElementById("main").style.animationName = "";
}

function changeWidht(){
    var widht = document.getElementById('widht').value
    var olchu = document.getElementById('olchu').value
    document.getElementById("main").style.width = widht+olchu
}

function changeWidhtDefault(){
    document.getElementById("main").style.width = "150px"
}

