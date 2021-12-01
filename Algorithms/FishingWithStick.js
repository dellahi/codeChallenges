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
 var stop = false
 for (let i = 0; i < H; i++) {
     const row = readline().split('');
     lines.push(row)
 }
 let firstRow = lines[0]
 var rodIndex = firstRow.indexOf('|')
 if(rodIndex == -1) rodIndex = firstRow.indexOf('C')
 
 function findTheHook(indice) {
     let found = false
     lines.forEach(e => {
     if(e[indice] == 'C') found = true;
     })
     return found
 }
 
 findClosestGarbage = function() {    
     currentD =='RIGHT' ? closestGarbage = -1 : closestGarbage = W
     for (let i = 0; i < H; i++) {
         let element = lines[i]
         if(element[rodIndex] == 'C' ) break;
         let leftSide = element.slice(0, rodIndex)
         let rightSide = element.slice(rodIndex+1,W)
         switch(currentD){
                 case 'RIGHT' :
                             leftSide.forEach((e2,i) => {
                                 if(!'.><'.includes(e2) && i >= closestGarbage ) {
                                     let stopped = false;
                                     for (let k= i; k < rodIndex ; k ++){
                                     if (leftSide[k]=='<') { stopped = true ; break }
                                     }
                                     if(!stopped) { closestGarbage = i ; noGarbage= false}
                                     } 
                                 })
                             break;
                 case 'LEFT' : rightSide.forEach((e2,i) => {
                                 if(!'.><'.includes(e2) && i <= closestGarbage) {
                                     let stopped = false;
                                     for (let j= 0 ; j <= i ; j ++){
                                     if (rightSide[j]=='>') { stopped = true ; break }
                                     }
                                     if(!stopped) { closestGarbage = i ; noGarbage= false}
                                     } 
                                 })
                             
                             break;
             }
     }
 }
 
 fish = function() {
     lines.forEach( (element ) => {
         let leftSide = element.slice(0, rodIndex)
         let rightSide = element.slice(rodIndex+1,W)
         if(!stop){
             leftSide.forEach( (e, i) => {
             if ( e=='>') {
                         for (let k= i; k < rodIndex ; k ++){
                         if (!'>.'.includes(leftSide[k])) break ;
                         if (k == rodIndex-1) { 
                             if(!noGarbage) {
                                 if(currentD=='LEFT' && (rodIndex - i) <= closestGarbage+1) answer++ ;
                                 if (currentD=='RIGHT' && i >= closestGarbage) answer++
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
                                 if(currentD=='RIGHT' && (rodIndex - closestGarbage) >= index+1 ) answer++ 
                                 if (currentD=='LEFT' && index <= closestGarbage) answer++
                             }
                             else answer ++;
                         }
                     }           
                 }
             })
         }
         if(element[rodIndex] == 'C') stop=true
     });
 }
 
 if( 0<H<256 && 0<W<256 && ['LEFT','RIGHT'].includes(currentD) && findTheHook){
     findClosestGarbage();
     fish();
 }
     
 
 // Write an answer using console.log()
 console.log(answer);
 // To debug: console.error('Debug messages...');
 