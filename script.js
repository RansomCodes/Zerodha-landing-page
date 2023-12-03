const calculate=document.getElementById("calculate")
const amount=document.getElementById("amount")
const capital=document.getElementById("capital")
const years=document.getElementById("years")
const interset=document.getElementById("interest")

calculate.addEventListener("click",()=>{
    let cap=parseFloat(capital.value);
    let yrs=parseFloat(years.value);
    let rate=parseFloat(interset.value);
    if(!isNaN(cap) && !isNaN(yrs) && !isNaN(rate))
    {
        let amt=cap+(cap*yrs*rate)/100.0;
        amount.value=amt;
    }
})