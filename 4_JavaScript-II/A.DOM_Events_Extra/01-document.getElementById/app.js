// get the element 

let firstDiv = document.getElementById('fDiv');

//make its background red
firstDiv.style.background = 'red';
firstDiv.style.color = 'white';  




//Also there's a glabal variable named by id that reference to DOM-element with id='fDiv'

sDiv.style.background = 'blue';      // Dlobal Element ID // don't need getElementById // when an Id is created it will be automatically ecassible by the global  // However this method is not recomendet // Please use getElementById
sDiv.style.color = 'white';  

// That's unless we declare a JavaScript variable with the same Name, then it takes precendence  :

//let sDiv = 5; // now sDiv is 5 , not a reference to <div id='sdiv'>  // Interpretor cant go further 


///////////////// myTable //////////////////////
const tableDiv = document.getElementById('tableDiv');
const table = tableDiv.appendChild(document.createElement('table'))
//table.style.borderCollapse = 'collapse'
console.log(tableDiv)
const thead =table.appendChild(document.createElement('thead'));
thead.style.backgroundColor = 'gray';
thead.style.color = 'white';
const tbody = table.appendChild(document.createElement('tbody'));
tbody.style.backgroundColor = 'lightgray';
const tr = document.createElement('tr')
thead.appendChild(tr);
const th = document.createElement('th');
console.log(thead.firstElementChild)
 for(i=0;i<3;i++){
    const th = document.createElement('th');
    th.appendChild(document.createTextNode(i))
     th.style.width ='33vw' 
     th.id = `row0-col${i+1}`
thead.firstElementChild.appendChild(th);
}
for(i=0;i<2;i++){
    const tr = document.createElement('tr')
    tbody.appendChild(tr)
    }
   let alphabetArray = ['a','b','c']
for(i=0;i<3;i++){
    const td = document.createElement('td') 
    td.appendChild(document.createTextNode(alphabetArray[i]))  
    td.style.width ='33vw' 
    td.id = `row1-col${i+1}`
    td.style.textAlign = 'center';  
    tbody.firstElementChild.appendChild(td);
    }
    alphabetArray = ['d','e','f']
for(i=0;i<3;i++){
    const td = document.createElement('td') 
    td.appendChild(document.createTextNode(alphabetArray[i])) 
    td.style.width ='33vw' 
    td.id = `row2-col${i+1}`
    td.style.textAlign = 'center';  
    tbody.lastElementChild.appendChild(td);
    } 
  
 
 //console.log(tbody2[0])

      for(i=0;i<1;i++){
          let tr = document.createElement('tr'); 
          for(i=0;i<3;i++){
              //console.log(tbody2[0])
              const td = document.createElement('td')
            tr.appendChild(td) 
          }
         let tbody2 = document.getElementsByTagName('tbody')
         console.log(tbody2.chil)
          tbody2.children[0].appendChild(tr)
        }    
 




 
 

