/* function peopleWithSameName(arr, serarchName){
   for(i=0;i<arr.length;i++){
      if(arr[i].name.includes(serarchName)){
           return arr[i]
       }
   }
}
const people = [{name:'Sarah'},{name:'Philipp'},{name:'Mike'}];
const myName = 'Philipp';
console.log(peopleWithSameName(people, myName)); 
 */


function hiredOrNot(arr, req){
    let hired = [];
    for(i=0;i<arr.length;i++){
        let skills =[]
        for(j=0;j<arr[i].skills.length;j++){
            for(k=0;k<req.length;k++){
                if(arr[i].skills[j].includes(req[k]) && skills.length < 3){
                    skills.push(arr[i].skills[j]);   
                    }else if(arr[i].skills[j].includes(req[k])&& skills.length >= 3){
                        hired.push(arr[i].name);
                }
            }
        }
    }
    return hired;
 }
 const people = [{name:'Mike',skills:["Python", "JavaScript", "Java"]},
 {name:'Peter',skills:["PHP", "JavaScript", "Ruby", "Java"]},
 {name:'Sarah',skills:["PHP", "JavaScript", "Ruby", "Python", "Java"]}];
 const prerequisites = ["PHP", "JavaScript","Java"];
 console.log(hiredOrNot(people, prerequisites)); 