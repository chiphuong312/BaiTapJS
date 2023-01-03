// Bai tap 1
document.getElementById("sapxep").onclick = function(){
    let input1El = +document.getElementById("input1").value
    let input2El = +document.getElementById("input2").value
    let input3El = +document.getElementById("input3").value
    let outputEl = document.getElementById("output")

    if (input1El > input2El && input1El > input3El){
        if (input2El > input3El) {
            outputEl.innerHTML = "<p>" + input3El + ", "+input2El +", "+input1El + "</p>"
        } else {
            outputEl.innerHTML = "<p>" + input2El + ", "+input3El +", "+input1El + "</p>"
        }
    } else if (input2El > input1El && input2El > input3El) {
        if (input1El > input3El) {
            outputEl.innerHTML = "<p>" + input3El + ", "+input1El +", "+input2El + "</p>"
        } else {
            outputEl.innerHTML = "<p>" + input1El + ", "+input3El +", "+input2El + "</p>"

        }
    } else if (input3El > input1El && input3El > input2El){
        if (input1El > input2El){
            outputEl.innerHTML = "<p>" + input2El + ", "+input1El +", "+input3El + "</p>"
        } else {
            outputEl.innerHTML = "<p>" + input1El + ", "+input2El +", "+input3El + "</p>"
        }
    }
}


//Bai tap 2
document.getElementById("guiloichao").onclick = function() {
    let nameEl = document.getElementById("name").value
    let output2El = document.getElementById("output2")
    output2El.innerHTML = `<span> Xin Chào ${nameEl}</span>`

// switch (nameEl) {
//     case "bo":
//         output2El.innerHTML = "<p>"+ "Xin Chào Bố" +"</p>"
//         break;
//     case "me":
//         output2El.innerHTML = "<p>"+ "Xin Chào Mẹ" +"</p>"
//         break;
//     case "anhtrai":
//         output2El.innerHTML = "<p>"+ "Xin Chào Anh Trai" +"</p>"
//         break;
//     case "emgai":
//         output2El.innerHTML = "<p>"+ "Xin Chào Em Gái " +"</p>"
//         break;
//     default:
//     output2El.innerHTML = "<p>"+ "Xin Chào Người Lạ Ơi"   +"</p>"
// } 
}


//Bai tap 3
document.getElementById("count1").onclick = function (){
    let number1 = parseInt(document.getElementById("sothu-1").value) ;
    let number2 = parseInt(document.getElementById("sothu-2").value) ;
    let number3 = parseInt(document.getElementById("sothu-3").value) ;
    let phienthi = document.getElementById("hien-thi");

    let soDu = number1%2 + number2%2 + number3%2;
    if(soDu===2){
        phienthi.innerHTML = `<span> Có 2 số lẻ, 1 số chẵn </span>`
        phienthi.style.display = "block"
    }else if(soDu===3){
        phienthi.innerHTML = `<span> Có 3 số lẻ </span>`
        phienthi.style.display = "block"
    }else if(soDu===1){
        phienthi.innerHTML = `<span> Có 1 số lẻ, 2 số chẵn </span>`
        phienthi.style.display = "block"
    }else if(soDu===0){
        phienthi.innerHTML = `<span> Có 3 số chẵn </span>`
        phienthi.style.display = "block"
    }

}

// Bài tập 4
document.getElementById("count2").onclick = function (){
    let number1 = parseInt(document.getElementById("soth-1").value) ;
    let number2 = parseInt(document.getElementById("soth-2").value) ;
    let number3 = parseInt(document.getElementById("soth-3").value) ;
    let phienthi = document.getElementById("hien_thi");
    
    let numb = Math.sqrt(number1**2 + number2**2);
    if(number1===number2){
        phienthi.innerHTML = `<span> Là tam giác cân </span>`
        phienthi.style.display = "block"
    }else if(number1===number2 && number1===number3){
        phienthi.innerHTML = `<span> Là tam giác đều </span>`
        phienthi.style.display = "block"
    }else if(numb===number3){
        phienthi.innerHTML = `<span> Tam giác vuông </span>`
        phienthi.style.display = "block"
    }else{
        phienthi.innerHTML = `<span> Tam giác có 3 cạnh </span>`
        phienthi.style.display = "block"

    }

}