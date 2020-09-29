 function createTable(){
   //body reference
   const body = document.querySelector('body');

   // create Elements <table> and <tbody>

   const tbl = document.createElement('table');
   const tblBody = document.createElement('tbody')

   // cells creation 
   for(i=0;i<=3;i++){
     // table row creation
     const row = document.createElement('tr');
     for(j=0;j<3;j++){
       //create element <td> and text node
       //Maake the text node as content of <td>
       //put <td> at the end of the table row
       const cell = document.createElement('td')
       const cellText = document.createTextNode('cell is row '+i+', and column '+j);
       cell.id=(j+""+i)
       cell.appendChild(cellText);
       row.appendChild(cell);
     }
     //row added to the end of table body
     tblBody.appendChild(row)
   }
   // append the <tbody> inside the <table>
   tbl.appendChild(tblBody)
   //put the <table> inside the <body>
   body.appendChild(tbl);
   //adding tbl border attributes
   tbl.setAttribute('border','5px')
 }
 createTable()

const infoArray = [['Firstname','Lastname','City'],['Peter','Bach','Berlin'],['Lisa','Mueller','Hamburg'],['Max','Mustermann','Munich']]
for(i=0;i<=3;i++){
  for(j=0;j<3;j++){
   let item = document.getElementById(j+""+i).setAttribute('style',`background-color:rgba(${Math.round(Math.random()*(255-128)+128)},${Math.round(Math.random()*(255-128)+128)},${Math.round(Math.random()*(255-128)+128)},1)`) 

    document.getElementById(j+""+i).firstChild.replaceWith(infoArray[i][j])
   
     /* let att1 = document.createAttribute('style') 
      att1.value = 'width :33vw';
      document.getElementById(j+""+i).setAttributeNode(att1) */
      document.getElementById(j+""+i).style.width = '33vw';
  }
} 
