let value1 = ""
let value2 = 0
let res = ''



function one(){
   value1+= Number(1)
   document.getElementById('answer').innerHTML = value1;
}

function two(){
    value1+=  Number(2)
    document.getElementById('answer').innerHTML = value1;
 }

 function three(){
    value1+=  Number(3)
    document.getElementById('answer').innerHTML = value1;
 }

 function four(){
    value1+=  Number(4)
    document.getElementById('answer').innerHTML = value1;
 }

 function five(){
    value1+=  Number(5)
    document.getElementById('answer').innerHTML = value1;
 }

 function six(){
    value1+=  Number(6)
    document.getElementById('answer').innerHTML = value1;
 }
 function seven(){
    value1+=  Number(7)
    document.getElementById('answer').innerHTML = value1;
 }
 function eight(){
    value1+=  Number(8)
    document.getElementById('answer').innerHTML = value1;
 }
 function nine(){
    value1+=  Number(9)
    document.getElementById('answer').innerHTML = value1;
 }
 
 function zero(){
    value1+=  Number(0)
    document.getElementById('answer').innerHTML = value1;
 }
 
 




function Add(){

    value2 = Number(value1) + Number(value2)
   
    value1 = ''

    res = value2
    console.log(res)
  
    document.getElementById('answer').innerHTML = value2
    
}

function substract(){
    if( Number(value1) >= Number(value2))  value2 = Number(value1) - Number(value2)
    else if( Number(value1) < Number(value2))  value2 = Number(value2) - Number(value1)

   value1 = ''
   document.getElementById('answer').innerHTML = value2


}

function divide(){
   if(value2 == 0){
    value2 = value1
   }

   else if(value2 > 0){
    if(!value1 == ''){value2 = Number(value2) / Number(value1)}
   }
   else{
    value1 = value2
   }
 
 value1 = ''

 document.getElementById('answer').innerHTML = value2
 }

 function Multiply(){
   
     if(value2 == 0){
        value2 = value1
     }

     else if(value2 > 0){
        if(!value1 == ''){ value2 = Number(value1) * Number(value2)}
       }
       else{
        value1 = value2
       }
    
     value1 = ''
    
     document.getElementById('answer').innerHTML = value2
   

}


// function result(){
//     document.getElementById("answer").innerHTML = value2
// }