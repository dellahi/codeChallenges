/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const H = parseInt(readline());
 const W = parseInt(readline());
 const currentD = readline();
 var answer = 0
 var lines = []
 var noGarbage= true;
 var closestGarbage;
 for (let i = 0; i < H; i++) {
     const row = readline().split('');
     lines.push(row)
 }
 
 var firstRow = lines[0]
 let rodIndex = firstRow.indexOf('|')
 if(rodIndex == -1) rodIndex = firstRow.indexOf('C')
 
 currentD =='RIGHT' ? closestGarbage = 0 : closestGarbage=W-rodIndex
 
 findClosestGarbage = function() {    
     for (let i = 0; i < H; i++) {
         let element = lines[i]
         let leftSide = element.slice(0, rodIndex)
         let rightSide = element.slice(rodIndex+1,W)
         switch(currentD){
                 case 'RIGHT' :
                             leftSide.forEach((e2,i) => {
                                 if(!'.><'.includes(e2) && i >= closestGarbage ) {closestGarbage=i; noGarbage= false} 
                                 })
                             break;
                 case 'LEFT' : rightSide.forEach((e2,i) => {
                                 if(!'.><'.includes(e2) && i <= closestGarbage && i!=rodIndex) {closestGarbage=i; noGarbage= false} 
                                 })
                             
                             break;
             }
         if(element[rodIndex] == 'C' ) break;
     }
 }
 findClosestGarbage();
 
 lines.forEach( (element ) => {
     let leftSide = element.slice(0, rodIndex)
     let rightSide = element.slice(rodIndex+1,W)
     leftSide.forEach( (e, i) => {
         if ( e=='>') {
                     for (let k= i; k < rodIndex ; k ++){
                     if (!'>.'.includes(leftSide[k])) break ;
                     if (k == rodIndex-1) { 
                         if(!noGarbage) {
                             if(currentD=='LEFT' && (rodIndex - i) < closestGarbage) answer++ ;
                             if (currentD=='RIGHT' && i > closestGarbage) answer++ ;
                         }
                         else answer++;
                     }
                 }       
         }
     })
      rightSide.forEach( (e,index) => {
         if ( e =='<') {
             for (let j= 0 ; j <= index ; j ++){
                 if (!'<.'.includes(rightSide[j])) { break} ;
                 if ( j == index) {
                     if(!noGarbage) {
                         if(currentD=='RIGHT' && (rodIndex - closestGarbage) >= index ) answer++
                         if (currentD=='LEFT' && index <= closestGarbage) answer++
                     }
                     else answer ++;
                 }
             }           
         }
     })
     });
     
 
 // Write an answer using console.log()
 
 // To debug: console.error('Debug messages...');
 console.log(answer);
 