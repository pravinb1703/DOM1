let bulbC=document.getElementsByClassName('Bulb-Container')
let bulbfield=document.getElementById('bulb')
let turnonkey=document.getElementById('TurnOn')
let turnoffkey=document.getElementById('TurnOff')
console.log(bulbC);
console.log(bulbfield);
//bulbC[0].style.backgroundColor='green'


turnonkey.addEventListener('click',function(){
        bulbfield.style.backgroundColor='yellow'; 
        //bulbC[0].style.backgroundColor='8e8684'
        bulbC[0].style.backgroundColor='#3a3d3a';
       // turnonkey.innerText='Turn off';
       if(turnonkey.innerText=="Turn On") {
        turnonkey.innerText="Turn off"
        turnoffkey.innerText="Status On"
            }
    else{
        turnonkey.innerText="Turn On"
        turnoffkey.innerText="Status Off"

        bulbfield.style.backgroundColor='#D3D3D3'
    bulbC[0].style.backgroundColor='#d7e0d7'


         }
       //toggle(turnonkey);
        
})
//turnoffkey.addEventListener('click',function(){
   // bulbfield.style.backgroundColor='#D3D3D3'
   // bulbC[0].style.backgroundColor='#d7e0d7'

    //turnoffkey.innerText='Status ON'
    //toggle(turnoffkey);
//})

/*function toggle(key){
if(this.key==turnonkey){
        turnonkey.innerText="Turn off"
        turnoffkey.innerText="Status ON"
        }
        else{
            turnonkey.innerText="Turn off"
        turnoffkey.innerText="Status On"
        }

        if(this.key==turnoffkey){
            turnonkey.innerText="Turn off"
            turnoffkey.innerText="Status ON"
            }
            else{
                turnonkey.innerText="Turn off"
            turnoffkey.innerText="Status On"
            }
    }
*/