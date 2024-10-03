const dropdown = document.getElementById("mydropdown")
const header = document.querySelector(".para")
let btn = document.querySelector('.btn')
const tbody = document.querySelector('.tablebody')
const output = document.querySelector('.output')
const arrivalinput = document.querySelector('#at');
// console.log(dropdown.value);



dropdown.addEventListener('change', ()=>{
    tbody.innerHTML = " ";
    
 })
 
 let display = 1;
 // TOGLE OUTPUT
 function showoutput (){
      if(display == 1){
        output.style.display  = 'block';
        display = 0
      }else{
        output.style.display  = 'none';
        display = 0
      }
 } 

 
     let arrivalarr = [];
     let burstt = [];
     let finishtime = [];
     let turnaroundarr = [];
     let waitingtimearr = [];
     let gaintchart = ['A', 'B', 'C','D','E'];
     function storeInput() {
        const arrivalinput = document.getElementById("at").value;
        // Remove all spaces from the input value
        const noSpaceInput = arrivalinput.replace(/\s+/g,'');
        // const noSpaceInput = input.trim();
        // Store the value in the array
        arrivalarr = noSpaceInput;
        
        
        // burstinput
        const burstinput = document.getElementById("bt").value;
        const noSpaceburst = burstinput.replace(/\s+/g,'');
        burstt = noSpaceburst;
        // arrivalarr.map(Number);

        // Clear the input field
        document.getElementById("at").value = '';
        document.getElementById("bt").value = '';

        calculatefinishtime();
        turnaroundTime()
        waitingtime()
        firstcome();
     }

     function calculatefinishtime (){
        
        let currentindex = Number(arrivalarr[0]) + Number(burstt[0]);
        finishtime.push(currentindex);
        console.log(finishtime[0]);
        
       for(let i =1; i<arrivalarr.length; i++){
        let start = Math.max((finishtime[i - 1]), Number(arrivalarr[i]));
        let finish =  start + Number(burstt[i]);
        finishtime.push(finish)
        

       }
        // console.log(finishtime);
    
    }
    function turnaroundTime (){
        for(let i = 0; i<arrivalarr.length; i++){
            turnaroundarr[i] =  Number(finishtime[i]) - Number(arrivalarr[i]);
        }
    }

    function waitingtime (){
        for(let i = 0; i<burstt.length; i++){
            waitingtimearr[i] =  Number(turnaroundarr[i]) - Number(burstt[i]);
        }
    }
    

  
      
function firstcome(){
    // console.log("first:",arr);
    for(let i = 0; i<arrivalarr.length; i++){
        const row = document.createElement('tr');
        row.innerHTML = `<td>${gaintchart[i]}</td>
        <td>${arrivalarr[i]}</td>
        <td>${burstt[i]}</td>
        <td>${finishtime[i]}</td>
        <td>${turnaroundarr[i]}</td>;
        <td>${waitingtimearr[i]}</td>`
        tbody.appendChild(row);
    }
}


    btn.addEventListener('click' ,()=>{
        header.textContent = dropdown.value;
            showoutput()
            if(dropdown.value === 'FCFS'){
                storeInput();
            }
        
        
        
    })





