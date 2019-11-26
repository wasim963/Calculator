var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var five=document.getElementById("five");
var six=document.getElementById("six");
var seven=document.getElementById("seven");
var eight=document.getElementById("eight");
var nine=document.getElementById("nine");
var zero=document.getElementById("zero");
var add=document.getElementById("add");
var sub=document.getElementById("sub");
var mul=document.getElementById("mul");
var divide=document.getElementById("divide");
var equal=document.getElementById("equal");
var decimal=document.getElementById("dot");
var clear=document.getElementById("clear");
var del=document.getElementById("delete");
var char=[];
var i=0;
var result;

clear.addEventListener("click",function(){
    
        document.lcdform.lcds.value = "0";
        document.lcdform.lcdsu.value=""; 
        i=0;
        char=[]; 
})
del.addEventListener("click",function(){
    if (document.lcdform.lcds.value == "0"){  
    
        document.lcdform.lcds.value = "0";
        document.lcdform.lcdsu.value="";    
            
    }
    else{
        var s=document.lcdform.lcds.value ;
        document.lcdform.lcds.value =s.substring(0,s.length-1);
        var s1=document.lcdform.lcdsu.value ;
        document.lcdform.lcdsu.value =s1.substring(0,s1.length-1);
    }  
})
one.addEventListener("click",function(){
    if (document.lcdform.lcds.value == "0"){  
        document.lcdform.lcds.value = "1";
        document.lcdform.lcdsu.value+="1";  
            
       }  
       else 
       {  
        document.lcdform.lcds.value = document.lcdform.lcds.value + "1";
        document.lcdform.lcdsu.value+="1";  
       }  
})
two.addEventListener("click",function(){
    if (document.lcdform.lcds.value == "0"){  
        document.lcdform.lcds.value = "2";
        document.lcdform.lcdsu.value+="2";    
            
       }  
       else 
       {  
        document.lcdform.lcds.value = document.lcdform.lcds.value + "2"; 
        document.lcdform.lcdsu.value+="2";   
       }  
})
three.addEventListener("click",function(){
    if (document.lcdform.lcds.value == "0"){  
        document.lcdform.lcds.value = "3";
        document.lcdform.lcdsu.value+="3";    
            
       }  
       else 
       {  
        document.lcdform.lcds.value = document.lcdform.lcds.value + "3"; 
        document.lcdform.lcdsu.value+="3";   
       }  
})
four.addEventListener("click",function(){
    if (document.lcdform.lcds.value == "0"){  
    
        document.lcdform.lcds.value = "4"; 
        document.lcdform.lcdsu.value+="4";   
            
       }  
       else 
       {  
        document.lcdform.lcds.value = document.lcdform.lcds.value + "4";
        document.lcdform.lcdsu.value+="4";    
       }  
})
five.addEventListener("click",function(){
    if (document.lcdform.lcds.value == "0"){  
    
        document.lcdform.lcds.value = "5";
        document.lcdform.lcdsu.value+="5";    
            
       }  
       else 
       {  
        document.lcdform.lcds.value = document.lcdform.lcds.value + "5";
        document.lcdform.lcdsu.value+="5";    
       }  
})
six.addEventListener("click",function(){
    if (document.lcdform.lcds.value == "0"){  
    
        document.lcdform.lcds.value = "6";
        document.lcdform.lcdsu.value+="6";    
            
       }  
       else 
       {  
        document.lcdform.lcds.value = document.lcdform.lcds.value + "6";
        document.lcdform.lcdsu.value+="6";    
       }  
})
seven.addEventListener("click",function(){
    if (document.lcdform.lcds.value == "0"){  
    
        document.lcdform.lcds.value = "7";
        document.lcdform.lcdsu.value+="7";    
            
       }  
       else 
       {  
        document.lcdform.lcds.value = document.lcdform.lcds.value + "7"; 
        document.lcdform.lcdsu.value+="7";   
       }  
})
eight.addEventListener("click",function(){
    if (document.lcdform.lcds.value == "0"){  
    
        document.lcdform.lcds.value = "8";
        document.lcdform.lcdsu.value+="8";    
            
       }  
       else 
       {  
        document.lcdform.lcds.value = document.lcdform.lcds.value + "8";
        document.lcdform.lcdsu.value+="8";    
       }  
})
nine.addEventListener("click",function(){
    if (document.lcdform.lcds.value == "0"){  
    
        document.lcdform.lcds.value = "9";
        document.lcdform.lcdsu.value+="9";    
            
       }  
       else 
       {  
        document.lcdform.lcds.value = document.lcdform.lcds.value + "9";  
        document.lcdform.lcdsu.value+="9";  
       }  
})
zero.addEventListener("click",function(){
    if (document.lcdform.lcds.value == "0"){  
    
        document.lcdform.lcds.value = "0";
        document.lcdform.lcdsu.value+="0";    
            
       }  
       else 
       {  
        document.lcdform.lcds.value = document.lcdform.lcds.value + "0";
        document.lcdform.lcdsu.value+="0";    
       }  
})
decimal.addEventListener("click",function(){
    if (document.lcdform.lcds.value == "0"){  
    
        document.lcdform.lcds.value = "0."; 
        document.lcdform.lcdsu.value+="0.";   
            
       }  
       else 
       {  
        document.lcdform.lcds.value = document.lcdform.lcds.value + ".";
        document.lcdform.lcdsu.value+=".";    
       }  
})
add.addEventListener("click",function(){
    char[i]=document.lcdform.lcds.value;
    i++;
    char[i]='+';
    i++;
    document.lcdform.lcds.value = "0";
    document.lcdform.lcdsu.value+="+";  
})
sub.addEventListener("click",function(){
    char[i]=document.lcdform.lcds.value;
    i++;
    char[i]='-';
    i++;
    document.lcdform.lcds.value = "0";
    document.lcdform.lcdsu.value+="-";  
})
mul.addEventListener("click",function(){
    char[i]=document.lcdform.lcds.value;
    i++;
    char[i]='*';
    i++;
    document.lcdform.lcds.value = "0";
    document.lcdform.lcdsu.value+="*";  
})
divide.addEventListener("click",function(){
    char[i]=document.lcdform.lcds.value;
    i++;
    char[i]='/';
    i++;
    document.lcdform.lcds.value = "0";
    document.lcdform.lcdsu.value+="/";  
})
equal.addEventListener("click",function(){
    char[i]=document.lcdform.lcds.value;
    result=0;
    for (i = 0; i <= self.char.length; i++) {
        cItem = self.char[ i ];
        if (cItem == '/') {
            tLeft = parseFloat(self.char[i-1]);
            tRight = parseFloat(self.char[i+1]);

            nVal = tLeft / tRight;
            self.char[i-1] = nVal;
            self.char.splice(i, 2);
            i = self.char.length;
        }
    }
    
    for (i = 0; i <= self.char.length; i++) {
        cItem = self.char[ i ];
        if (cItem == '*') {
            tLeft = parseFloat(self.char[ i - 1 ]);
            tRight = parseFloat(self.char[ i + 1 ]);

            nVal = tLeft * tRight;
            self.char[ i - 1 ] = nVal;
            self.char.splice(i, 2);
            i = self.char.length;
        }
    }
    
    
    result= parseFloat(self.char[0]);
                for (i = 1; i < self.char.length; i++) {
                    if (self.char[ i ] == '+') {
                        result = result + parseFloat(self.char[ i + 1 ]);
                    } else if (self.char[ i ] == '-') {
                        result = result - parseFloat(self.char[ i + 1 ]);
                    }
                    i++;
                }
                document.lcdform.lcds.value = result.toString();
                i=0;
                 
})