const Btn = document.querySelector("#btn");
const Bill = document.querySelector("#bill");
const Cash = document.querySelector("#cash");
const Cashlabel = document.querySelector('#cashLabel')

let msg = document.querySelector("#message")

const changeCalculator = () => {

    for (let i=0; i<=6; i++){
        let notes = "note"+i;
        let clear = document.getElementById(notes);
        clear.innerHTML=0;
        clear.style.color="chartreuse"
    }

    const billAmount = Bill.value
    const cashAmount = Cash.value

    if(billAmount!==''){
        
        Cashlabel.style.display="Block";
        Cash.style.display="Block";
        

    }
    if (billAmount==='' || cashAmount===''){
        msg.innerHTML = "enter amount"

    }else{

    
    if (billAmount-cashAmount<0){
    let payAmount = cashAmount-billAmount
    
    
    for (let i=0; i<=6; i++) {
        let row = "note"+i
        let deno="den"+i
        console.log(row)
        let count = document.getElementById(row)
        count.innerHTML= 0;

        let denomination = document.getElementById(deno)
        console.log(typeof(count.innerHTML))
        console.log(typeof(denomination.innerHTML))
        

        if (payAmount >= Number(denomination.innerText)){
            let n1 = payAmount/denomination.innerText
            let denom = Math.trunc(Number(n1))
            console.log(denom)
            count.innerHTML = denom
            count.style.color="cyan"
            payAmount = (payAmount-Number(denom)*Number(denomination.innerText))
        }
        msg.innerHTML = 'Here\'s your change'
        
    }
}else if (billAmount-cashAmount===0) {
    msg.innerHTML = ("You have paid your dues in full")
}else if (billAmount-cashAmount>0){
    msg.innerHTML = ("Insufficient Amount")
}
    
    }}

Btn.addEventListener("click",changeCalculator);


