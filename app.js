const dropdown = document.getElementById("mydropdown")
const header = document.querySelector(".para")
let btn = document.querySelector('.btn')
const tbody = document.querySelector('.tablebody')
const output = document.querySelector('.output')
const arrivalinput = document.querySelector('#at');
const tfooter =  document.querySelector('.footer');
// console.log(dropdown.value);



dropdown.addEventListener('change', ()=>{
    tbody.innerHTML = " ";
    tfooter.innerHTML = " ";
    tbody.innerHTML = " "
    output.style.display  = 'none';
    display = 1;
    if(dropdown.value === 'RR'){
        document.querySelector('.Timequantum').style.display = "block";
    }
    else{
        document.querySelector('.Timequantum').style.display = "none";
    }
    
    
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
     let Timequantumarr = [];
    
     
     let gaintchart = ['A', 'B', 'C','D','E','F','G','H'];


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

        // for time quantam
        const timequantumtt = document.getElementById("tt").value;
         Timequantumarr = timequantumtt.replace(/\s+/g,'');

        // Clear the input field
        document.getElementById("at").value = '';
        document.getElementById("bt").value = '';
        document.getElementById("tt").value = '';
         
        
        if(dropdown.value === 'FCFS'){
            calculatefinishtime();
            turnaroundTime()
            waitingtime()
            firstcome();
        }else if(dropdown.value === 'RR'){
            Robincome();
        }else if(dropdown.value === 'SRTF'){
            timefirst();
        }
    
     }

     function calculatefinishtime (){
        
        let currentindex = Number(arrivalarr[0]) + Number(burstt[0]);
        finishtime.push(currentindex);
        
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
    // total of tat
    function Averageoftat (){

        let total = 0;
        for (let i = 0; i < turnaroundarr.length; i++) {
            total += Number(turnaroundarr[i]);
            
        }
        return avg = total/ turnaroundarr.length;
    }
      
    
    

    function waitingtime (){
        for(let i = 0; i<burstt.length; i++){
            waitingtimearr[i] =  Number(turnaroundarr[i]) - Number(burstt[i]);
        }
    }
    

//   Average of wat
function Averageofwat (){

    let total = 0;
    for (let i = 0; i < waitingtimearr.length; i++) {
        total += Number(waitingtimearr[i]);
    }
    return avg = total/ waitingtimearr.length;
}
      // for output in fcfs
function firstcome(){
    // console.log("first:",arr);
    for(let i = 0; i<arrivalarr.length; i++){
        const row = document.createElement('tr');
        row.innerHTML = `<td>${gaintchart[i]}</td>
        <td>${arrivalarr[i]}</td>
        <td>${burstt[i]}</td>
        <td>${finishtime[i]}</td>
        <td>${turnaroundarr[i]}</td>
        <td>${waitingtimearr[i]}</td>`
        tbody.appendChild(row);
    }
    tfooter.innerHTML = ` 
                 <tr>
                    <th colspan="4">Average</th>
                    <th >${Averageoftat()}</th>
                    <th >${Averageofwat()}</th>
                </tr>`

}








/////////////////////////////////////////////////////////////////////////////////////////////////////
// output for rr

function Robincome(){
    // console.log("first:",arr);
    for(let i = 0; i<arrivalarr.length; i++){
        const row = document.createElement('tr');
        row.innerHTML = `<td>${gaintchart[i]}</td>
        <td>${arrivalarr[i]}</td>
        <td>${burstt[i]}</td>`
        // <td>${finishtime[i]}</td>
        // <td>${turnaroundarr[i]}</td>
        // <td>${waitingtimearr[i]}</td>`
        tbody.appendChild(row);
    }
    tfooter.innerHTML = ` 
                 <tr>
                    <th colspan="4">Average</th>
                    <th ></th>
                    <th ></th>
                </tr>`

}
 







///////////////////////////////////////////////////////////////////////////////////////////////////////



///  output for time first
function timefirst(){
    // console.log("first:",arr);
    for(let i = 0; i<arrivalarr.length; i++){
        const row = document.createElement('tr');
        row.innerHTML = `<td>${gaintchart[i]}</td>
        <td>${arrivalarr[i]}</td>
        <td>${burstt[i]}</td>`
        // <td>${finishtime[i]}</td>
        // <td>${turnaroundarr[i]}</td>
        // <td>${waitingtimearr[i]}</td>`
        tbody.appendChild(row);
    }
    tfooter.innerHTML = ` 
                 <tr>
                    <th colspan="4">Average</th>
                    <th >${Averageoftat()}</th>
                    <th >${Averageofwat()}</th>
                </tr>`

}



    btn.addEventListener('click' ,()=>{
        
        header.textContent = dropdown.value;
            showoutput()
            storeInput();
            
        
        
    })





