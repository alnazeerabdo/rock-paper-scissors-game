
//this part to detrimain what user clicked 


 var i = 0;
function reply_click(e){
	var	userClick =e; //user press one of the objects

    // the house chose one of the objects
	var x = [ "myScissors2" , "mySpock" , "myPaper" , "myLizard" , "myRock" ]
	var houseChose = x[Math.floor(Math.random() * 5)];

 

       // the user is going to win in this cases
    if( userClick =="myScissors" && houseChose=="myPaper" ){

    	   i++;
     	setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU WIN";
     	},1000);
     	document.getElementById("myScissors").classList.toggle("newScissors");
		document.getElementById("mySci").classList.toggle("newSci")
		document.getElementById("mySpo-pap").classList.toggle("hid");
		document.getElementById("myLiz-ro").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
       document.getElementById("myEmpty").classList.toggle("show");
       document.getElementById("myPaper2").classList.toggle("see3");

       setTimeout ( function () {
        document.getElementById("myScissors").classList.add("winnerCir");
       },1000);

     }

     if( userClick =="myScissors" && houseChose=="myScissors2" ){
  document.getElementById("myScissors").classList.toggle("newScissors");
		document.getElementById("mySci").classList.toggle("newSci")
		document.getElementById("mySpo-pap").classList.toggle("hid");
		document.getElementById("myLiz-ro").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
			setTimeout ( function () {
     	document.getElementById("degree").innerHTML="Equal";
     	},1000);
     	 document.getElementById("myEmpty").classList.toggle("show");
        document.getElementById("myScissors2").classList.toggle("see");
     }
       
    
      else if( userClick =="mySpock" && houseChose=="myScissors2" ){
      	   i++;
     		setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU WIN";
     	},1000);
     	document.getElementById("mySpock").classList.toggle("newSpock");
		document.getElementById("mySpo-pap").classList.toggle("newSpo-pap")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("myPaper").classList.toggle("hid");
		document.getElementById("myLiz-ro").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myEmpty").classList.toggle("show");
		  document.getElementById("myScissors2").classList.toggle("see");

		   setTimeout ( function () {
        document.getElementById("mySpock").classList.add("winnerCir");
       },1000);
     }
 
     else if( userClick =="mySpock" && houseChose=="mySpock" ){
     	
     		setTimeout ( function () {
     		document.getElementById("degree").innerHTML="Equal";
     	},1000);
     	document.getElementById("mySpock").classList.toggle("newSpock");
		document.getElementById("mySpo-pap").classList.toggle("newSpo-pap")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("myPaper").classList.toggle("hid");
		document.getElementById("myLiz-ro").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myEmpty").classList.toggle("show");
		 document.getElementById("mySpock2").classList.toggle("see2");

     }




     else if( userClick =="myPaper" && houseChose=="myRock" ){
     	i++;
     		setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU WIN";
     	},1000);
     	document.getElementById("myPaper").classList.toggle("newPaper");
		document.getElementById("mySpo-pap").classList.toggle("newSpo-pap")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("mySpock").classList.toggle("hid");
		document.getElementById("myLiz-ro").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myEmpty").classList.toggle("show");
		  document.getElementById("myRock2").classList.toggle("see5");

		   setTimeout ( function () {
        document.getElementById("myPaper").classList.add("winnerCir");
       },1000);
     }

    
     else if( userClick =="myPaper" && houseChose=="myPaper" ){
     		document.getElementById("myPaper").classList.toggle("newPaper");
		document.getElementById("mySpo-pap").classList.toggle("newSpo-pap")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("mySpock").classList.toggle("hid");
		document.getElementById("myLiz-ro").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myEmpty").classList.toggle("show");
		  document.getElementById("myPaper2").classList.toggle("see3");
       setTimeout ( function () {
     	document.getElementById("degree").innerHTML="Equal";
         },1000);
     
      

      }


     else if( userClick =="myLizard" && houseChose=="mySpock" ){
     	i++;
     	setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU WIN";
     	},1000);
     	   document.getElementById("myLizard").classList.toggle("newLizard");
		document.getElementById("myLiz-ro").classList.toggle("newLiz-ro")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("myRock").classList.toggle("hid");
		document.getElementById("mySpo-pap").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myEmpty").classList.toggle("show");
		  document.getElementById("mySpock2").classList.toggle("see2");

		   setTimeout ( function () {
        document.getElementById("myLizard").classList.add("winnerCir");
       },1000);
     }


     
     else if( userClick =="myLizard" && houseChose=="myLizard" ){
     	   document.getElementById("myLizard").classList.toggle("newLizard");
		document.getElementById("myLiz-ro").classList.toggle("newLiz-ro")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("myRock").classList.toggle("hid");
		document.getElementById("mySpo-pap").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myEmpty").classList.toggle("show");
		   document.getElementById("myLizard2").classList.toggle("see4");
		   setTimeout ( function () {
    document.getElementById("degree").innerHTML="Equal";
       },1000);

		  
     }


      else if( userClick =="myRock" && houseChose=="myLizard" ){
      	i++; 	
     setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU WIN";
     	},1000);
     	document.getElementById("myRock").classList.toggle("newRock");
		document.getElementById("myLiz-ro").classList.toggle("newLiz-ro")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("myLizard").classList.toggle("hid");
		document.getElementById("mySpo-pap").classList.toggle("hid");
		 document.getElementById("myEmpty").classList.toggle("show");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myLizard2").classList.toggle("see4");

		setTimeout ( function () {
        document.getElementById("myRock").classList.add("winnerCir");
       },1000);
     }

 else if( userClick =="myRock" && houseChose=="myRock" ){
 	document.getElementById("myRock").classList.toggle("newRock");
		document.getElementById("myLiz-ro").classList.toggle("newLiz-ro")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("myLizard").classList.toggle("hid");
		document.getElementById("mySpo-pap").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myEmpty").classList.toggle("show");
		  document.getElementById("myRock2").classList.toggle("see5");
		   setTimeout ( function () {
 	document.getElementById("degree").innerHTML="Equal";
 		},1000);

		   
     }


     else if( userClick =="myScissors" && houseChose=="myLizard" ){
     	i++;
     	  setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU WIN";
     	},1000);
     	document.getElementById("myScissors").classList.toggle("newScissors");
		document.getElementById("mySci").classList.toggle("newSci")
		document.getElementById("mySpo-pap").classList.toggle("hid");
		document.getElementById("myLiz-ro").classList.toggle("hid");
		 document.getElementById("myEmpty").classList.toggle("show");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myLizard2").classList.toggle("see4");

		  setTimeout ( function () {
        document.getElementById("myScissors").classList.add("winnerCir");
       },1000);

     }


      else if( userClick =="mySpock" && houseChose=="myRock" ){
      	i++;
     setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU WIN";
     	},1000);
     	document.getElementById("mySpock").classList.toggle("newSpock");
		document.getElementById("mySpo-pap").classList.toggle("newSpo-pap")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("myPaper").classList.toggle("hid");
		document.getElementById("myLiz-ro").classList.toggle("hid");
		 document.getElementById("myEmpty").classList.toggle("show");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myRock2").classList.toggle("see5");

		  setTimeout ( function () {
        document.getElementById("mySpock").classList.add("winnerCir");
       },1000);
     }


   else if( userClick =="myPaper" && houseChose=="mySpock" ){
   	i++;
     	  setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU WIN";
     	},1000);
     	document.getElementById("myPaper").classList.toggle("newPaper");
		document.getElementById("mySpo-pap").classList.toggle("newSpo-pap")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("mySpock").classList.toggle("hid");
		document.getElementById("myLiz-ro").classList.toggle("hid");
		 document.getElementById("myEmpty").classList.toggle("show");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("mySpock2").classList.toggle("see2");

		  setTimeout ( function () {
        document.getElementById("myPaper").classList.add("winnerCir");
       },1000);
     }

      else if( userClick =="myLizard" && houseChose=="myPaper" ){
      	i++;
    setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU WIN";
     	},1000);
     	document.getElementById("myLizard").classList.toggle("newLizard");
		document.getElementById("myLiz-ro").classList.toggle("newLiz-ro")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("myRock").classList.toggle("hid");
		document.getElementById("mySpo-pap").classList.toggle("hid");
		 document.getElementById("myEmpty").classList.toggle("show");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myPaper2").classList.toggle("see3");

		  setTimeout ( function () {
        document.getElementById("myLizard").classList.add("winnerCir");
       },1000);

     }
      else if( userClick =="myRock" && houseChose=="myScissors2" ){
      	 i++;
     	  setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU WIN";
     	},1000);
     	document.getElementById("myRock").classList.toggle("newRock");
		document.getElementById("myLiz-ro").classList.toggle("newLiz-ro")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("myLizard").classList.toggle("hid");
		document.getElementById("mySpo-pap").classList.toggle("hid");
		 document.getElementById("myEmpty").classList.toggle("show");
		document.getElementById("myAll").classList.toggle("back");
		document.getElementById("myScissors2").classList.toggle("see");

		 setTimeout ( function () {
        document.getElementById("myRock").classList.add("winnerCir");
       },1000);
     }

      // the house is going to win in this cases

     else if( userClick =="myPaper" && houseChose=="myScissors2" ){
     	 i--;
     	  setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU LOSE";
     	},1000);
     	document.getElementById("myPaper").classList.toggle("newPaper");
		document.getElementById("mySpo-pap").classList.toggle("newSpo-pap")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("mySpock").classList.toggle("hid");
		document.getElementById("myLiz-ro").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myEmpty").classList.toggle("show");
		 document.getElementById("myScissors2").classList.toggle("see");

		 setTimeout ( function () {
        document.getElementById("myScissors2").classList.add("winnerCir");
       },1000);
     }

    
     else if( userClick =="myScissors" && houseChose=="mySpock" ){
     	 i--;
     	  setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU LOSE";
     	},1000);
     	document.getElementById("myScissors").classList.toggle("newScissors");
		document.getElementById("mySci").classList.toggle("newSci")
		document.getElementById("mySpo-pap").classList.toggle("hid");
		document.getElementById("myLiz-ro").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
        document.getElementById("myEmpty").classList.toggle("show");
         document.getElementById("mySpock2").classList.toggle("see2");

         setTimeout ( function () {
        document.getElementById("mySpock2").classList.add("winnerCir");
       },1000);
     }


    else if( userClick =="myRock" && houseChose=="myPaper" ){
    	 i--;
     	  setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU LOSE";
     	},1000);
     	document.getElementById("myRock").classList.toggle("newRock");
		document.getElementById("myLiz-ro").classList.toggle("newLiz-ro")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("myLizard").classList.toggle("hid");
		document.getElementById("mySpo-pap").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myEmpty").classList.toggle("show");
		  document.getElementById("myPaper2").classList.toggle("see3");

		  setTimeout ( function () {
        document.getElementById("myPaper2").classList.add("winnerCir");
       },1000);

     }


     else if( userClick =="mySpock" && houseChose=="myLizard" ){ 
     	 i--;
       setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU LOSE";
     	},1000);
     	document.getElementById("mySpock").classList.toggle("newSpock");
		document.getElementById("mySpo-pap").classList.toggle("newSpo-pap")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("myPaper").classList.toggle("hid");
		document.getElementById("myLiz-ro").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myEmpty").classList.toggle("show");
		  document.getElementById("myLizard2").classList.toggle("see4");

		  setTimeout ( function () {
        document.getElementById("myLizard2").classList.add("winnerCir");
       },1000);


     }


     else if( userClick =="myLizard" && houseChose=="myRock" ){
     	 i--;
     	  setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU LOSE";
     	},1000);
     	document.getElementById("myLizard").classList.toggle("newLizard");
		document.getElementById("myLiz-ro").classList.toggle("newLiz-ro")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("myRock").classList.toggle("hid");
		document.getElementById("mySpo-pap").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myEmpty").classList.toggle("show");
		  document.getElementById("myRock2").classList.toggle("see5");

		 setTimeout ( function () {
        document.getElementById("myRock2").classList.add("winnerCir");
       },1000);
     }


     else if( userClick =="myLizard" && houseChose=="myScissors2" ){
     	 i--;
     	  setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU LOSE";
     	},1000);
     	document.getElementById("myLizard").classList.toggle("newLizard");
		document.getElementById("myLiz-ro").classList.toggle("newLiz-ro")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("myRock").classList.toggle("hid");
		document.getElementById("mySpo-pap").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myEmpty").classList.toggle("show");
		 document.getElementById("myScissors2").classList.toggle("see");

		 setTimeout ( function () {
        document.getElementById("myScissors2").classList.add("winnerCir");
       },1000);
     }


    else if( userClick =="myRock" && houseChose=="mySpock" ){
    	 i--;
       setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU LOSE";
     	},1000);
     	document.getElementById("myRock").classList.toggle("newRock");
		document.getElementById("myLiz-ro").classList.toggle("newLiz-ro")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("myLizard").classList.toggle("hid");
		document.getElementById("mySpo-pap").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myEmpty").classList.toggle("show");
		  document.getElementById("mySpock2").classList.toggle("see2");

		  setTimeout ( function () {
        document.getElementById("mySpock2").classList.add("winnerCir");
       },1000);
     }


     else if( userClick =="mySpock" && houseChose=="myPaper" ){
     	 i--;
     	  setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU LOSE";
     	},1000);
     	document.getElementById("mySpock").classList.toggle("newSpock");
		document.getElementById("mySpo-pap").classList.toggle("newSpo-pap")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("myPaper").classList.toggle("hid");
		document.getElementById("myLiz-ro").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myEmpty").classList.toggle("show");
		  document.getElementById("myPaper2").classList.toggle("see3");

		  setTimeout ( function () {
        document.getElementById("myPaper2").classList.add("winnerCir");
       },1000);

     }

      else if( userClick =="myPaper" && houseChose=="myLizard" ){
      	 i--;
     	  setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU LOSE";
     	},1000);
     	document.getElementById("myPaper").classList.toggle("newPaper");
		document.getElementById("mySpo-pap").classList.toggle("newSpo-pap")
		document.getElementById("mySci").classList.toggle("hid")
		document.getElementById("mySpock").classList.toggle("hid");
		document.getElementById("myLiz-ro").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myEmpty").classList.toggle("show");
		  document.getElementById("myLizard2").classList.toggle("see4");

		  setTimeout ( function () {
        document.getElementById("myLizard2").classList.add("winnerCir");
       },1000);
     }
       else if( userClick =="myScissors" && houseChose=="myRock" ){
       	   i--;
     	  setTimeout ( function () {
     		document.getElementById("myScore").value= i;
     		document.getElementById("degree").innerHTML="YOU LOSE";
     	},1000);
     	document.getElementById("myScissors").classList.toggle("newScissors");
		document.getElementById("mySci").classList.toggle("newSci")
		document.getElementById("mySpo-pap").classList.toggle("hid");
		document.getElementById("myLiz-ro").classList.toggle("hid");
		document.getElementById("myAll").classList.toggle("back");
		 document.getElementById("myEmpty").classList.toggle("show");
		  document.getElementById("myRock2").classList.toggle("see5");
      
      setTimeout ( function () {
        document.getElementById("myRock2").classList.add("winnerCir");
       },1000);
     } 

     document.getElementById("myYou").classList.toggle("youShow");

        document.getElementById("degree").classList.toggle("degShow");
      
      setTimeout ( function () {
       document.getElementById("myPlay").classList.toggle("playShow");
	},1000);
 
    

}










 function reply(){

            document.getElementById("degree").classList.remove("degShow");
            document.getElementById("myYou").classList.remove("youShow");

            
             document.getElementById("myPlay").classList.remove("playShow");
            

             document.getElementById("degree").innerHTML="";

            document.getElementById("myScissors").classList.remove("winnerCir");
            document.getElementById("mySpock").classList.remove("winnerCir");
    	    document.getElementById("myPaper").classList.remove("winnerCir");
    	    document.getElementById("myLizard").classList.remove("winnerCir");
    	     document.getElementById("myRock").classList.remove("winnerCir");
    	      document.getElementById("myScissors2").classList.remove("winnerCir");
    	       document.getElementById("mySpock2").classList.remove("winnerCir");
    	        document.getElementById("myPaper2").classList.remove("winnerCir");
    	         document.getElementById("myLizard2").classList.remove("winnerCir");
    	          document.getElementById("myRock2").classList.remove("winnerCir");


     	setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("myScissors").classList.remove("newScissors");
		document.getElementById("mySci").classList.remove("newSci")
		document.getElementById("mySpo-pap").classList.remove("hid");
		document.getElementById("myLiz-ro").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
       document.getElementById("myEmpty").classList.remove("show");
       document.getElementById("myPaper2").classList.remove("see3");


    


   
  document.getElementById("myScissors").classList.remove("newScissors");
		document.getElementById("mySci").classList.remove("newSci")
		document.getElementById("mySpo-pap").classList.remove("hid");
		document.getElementById("myLiz-ro").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
			setTimeout ( function () {
     	
     	},1000);
     	 document.getElementById("myEmpty").classList.remove("show");
        document.getElementById("myScissors2").classList.remove("see");
    




      	   
     		setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("mySpock").classList.remove("newSpock");
		document.getElementById("mySpo-pap").classList.remove("newSpo-pap")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("myPaper").classList.remove("hid");
		document.getElementById("myLiz-ro").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myEmpty").classList.remove("show");
		  document.getElementById("myScissors2").classList.remove("see");
   




     	
     		setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("mySpock").classList.remove("newSpock");
		document.getElementById("mySpo-pap").classList.remove("newSpo-pap")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("myPaper").classList.remove("hid");
		document.getElementById("myLiz-ro").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myEmpty").classList.remove("show");
		 document.getElementById("mySpock2").classList.remove("see2");
   




     	
     		setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("myPaper").classList.remove("newPaper");
		document.getElementById("mySpo-pap").classList.remove("newSpo-pap")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("mySpock").classList.remove("hid");
		document.getElementById("myLiz-ro").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myEmpty").classList.remove("show");
		  document.getElementById("myRock2").classList.remove("see5");
   







     		document.getElementById("myPaper").classList.remove("newPaper");
		document.getElementById("mySpo-pap").classList.remove("newSpo-pap")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("mySpock").classList.remove("hid");
		document.getElementById("myLiz-ro").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myEmpty").classList.remove("show");
		  document.getElementById("myPaper2").classList.remove("see3");
       setTimeout ( function () {
     
         },1000);
     
     





     	
     	setTimeout ( function () {
     		
     	},1000);
     	   document.getElementById("myLizard").classList.remove("newLizard");
		document.getElementById("myLiz-ro").classList.remove("newLiz-ro")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("myRock").classList.remove("hid");
		document.getElementById("mySpo-pap").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myEmpty").classList.remove("show");
		  document.getElementById("mySpock2").classList.remove("see2");
   






     	   document.getElementById("myLizard").classList.remove("newLizard");
		document.getElementById("myLiz-ro").classList.remove("newLiz-ro")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("myRock").classList.remove("hid");
		document.getElementById("mySpo-pap").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myEmpty").classList.remove("show");
		   document.getElementById("myLizard2").classList.remove("see4");
		   setTimeout ( function () {
   
       },1000);
    







     setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("myRock").classList.remove("newRock");
		document.getElementById("myLiz-ro").classList.remove("newLiz-ro")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("myLizard").classList.remove("hid");
		document.getElementById("mySpo-pap").classList.remove("hid");
		 document.getElementById("myEmpty").classList.remove("show");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myLizard2").classList.remove("see4");
     







 	document.getElementById("myRock").classList.remove("newRock");
		document.getElementById("myLiz-ro").classList.remove("newLiz-ro")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("myLizard").classList.remove("hid");
		document.getElementById("mySpo-pap").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myEmpty").classList.remove("show");
		  document.getElementById("myRock2").classList.remove("see5");
		   setTimeout ( function () {
 	
 		},1000);
    
     	



     	  setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("myScissors").classList.remove("newScissors");
		document.getElementById("mySci").classList.remove("newSci")
		document.getElementById("mySpo-pap").classList.remove("hid");
		document.getElementById("myLiz-ro").classList.remove("hid");
		 document.getElementById("myEmpty").classList.remove("show");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myLizard2").classList.remove("see4");

    





      	
     setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("mySpock").classList.remove("newSpock");
		document.getElementById("mySpo-pap").classList.remove("newSpo-pap")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("myPaper").classList.remove("hid");
		document.getElementById("myLiz-ro").classList.remove("hid");
		 document.getElementById("myEmpty").classList.remove("show");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myRock2").classList.remove("see5");
   
   	




     	  setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("myPaper").classList.remove("newPaper");
		document.getElementById("mySpo-pap").classList.remove("newSpo-pap")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("mySpock").classList.remove("hid");
		document.getElementById("myLiz-ro").classList.remove("hid");
		 document.getElementById("myEmpty").classList.remove("show");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("mySpock2").classList.remove("see2");
    




      	
    setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("myLizard").classList.remove("newLizard");
		document.getElementById("myLiz-ro").classList.remove("newLiz-ro")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("myRock").classList.remove("hid");
		document.getElementById("mySpo-pap").classList.remove("hid");
		 document.getElementById("myEmpty").classList.remove("show");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myPaper2").classList.remove("see3");

    



      	 
     	  setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("myRock").classList.remove("newRock");
		document.getElementById("myLiz-ro").classList.remove("newLiz-ro")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("myLizard").classList.remove("hid");
		document.getElementById("mySpo-pap").classList.remove("hid");
		 document.getElementById("myEmpty").classList.remove("show");
		document.getElementById("myAll").classList.remove("back");
		document.getElementById("myScissors2").classList.remove("see");
    
      // the house is going to win in this cases

    



     	
     	  setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("myPaper").classList.remove("newPaper");
		document.getElementById("mySpo-pap").classList.remove("newSpo-pap")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("mySpock").classList.remove("hid");
		document.getElementById("myLiz-ro").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myEmpty").classList.remove("show");
		 document.getElementById("myScissors2").classList.remove("see");
    
     	






     	  setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("myScissors").classList.remove("newScissors");
		document.getElementById("mySci").classList.remove("newSci")
		document.getElementById("mySpo-pap").classList.remove("hid");
		document.getElementById("myLiz-ro").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
        document.getElementById("myEmpty").classList.remove("show");
         document.getElementById("mySpock2").classList.remove("see2");
    
    	


     	  setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("myRock").classList.remove("newRock");
		document.getElementById("myLiz-ro").classList.remove("newLiz-ro")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("myLizard").classList.remove("hid");
		document.getElementById("mySpo-pap").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myEmpty").classList.remove("show");
		  document.getElementById("myPaper2").classList.remove("see3");

    
     	


       setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("mySpock").classList.remove("newSpock");
		document.getElementById("mySpo-pap").classList.remove("newSpo-pap")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("myPaper").classList.remove("hid");
		document.getElementById("myLiz-ro").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myEmpty").classList.remove("show");
		  document.getElementById("myLizard2").classList.remove("see4");
     



     	
     	  setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("myLizard").classList.remove("newLizard");
		document.getElementById("myLiz-ro").classList.remove("newLiz-ro")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("myRock").classList.remove("hid");
		document.getElementById("mySpo-pap").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myEmpty").classList.remove("show");
		  document.getElementById("myRock2").classList.remove("see5");
     





     	
     	  setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("myLizard").classList.remove("newLizard");
		document.getElementById("myLiz-ro").classList.remove("newLiz-ro")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("myRock").classList.remove("hid");
		document.getElementById("mySpo-pap").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myEmpty").classList.remove("show");
		 document.getElementById("myScissors2").classList.remove("see");
    
    	




       setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("myRock").classList.remove("newRock");
		document.getElementById("myLiz-ro").classList.remove("newLiz-ro")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("myLizard").classList.remove("hid");
		document.getElementById("mySpo-pap").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myEmpty").classList.remove("show");
		  document.getElementById("mySpock2").classList.remove("see2");
     




     	
     	  setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("mySpock").classList.remove("newSpock");
		document.getElementById("mySpo-pap").classList.remove("newSpo-pap")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("myPaper").classList.remove("hid");
		document.getElementById("myLiz-ro").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myEmpty").classList.remove("show");
		  document.getElementById("myPaper2").classList.remove("see3");

   
      	



     	  setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("myPaper").classList.remove("newPaper");
		document.getElementById("mySpo-pap").classList.remove("newSpo-pap")
		document.getElementById("mySci").classList.remove("hid")
		document.getElementById("mySpock").classList.remove("hid");
		document.getElementById("myLiz-ro").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myEmpty").classList.remove("show");
		  document.getElementById("myLizard2").classList.remove("see4");
    





       	       	  setTimeout ( function () {
     		
     	},1000);
     	document.getElementById("myScissors").classList.remove("newScissors");
		document.getElementById("mySci").classList.remove("newSci")
		document.getElementById("mySpo-pap").classList.remove("hid");
		document.getElementById("myLiz-ro").classList.remove("hid");
		document.getElementById("myAll").classList.remove("back");
		 document.getElementById("myEmpty").classList.remove("show");
		  document.getElementById("myRock2").classList.remove("see5");
      
  

        } 

function crossFunction(){
	 document.getElementById("myRules1").classList.remove("myRulesShow1");
}
  
function ruleFunction() {
	  document.getElementById("myRules1").classList.toggle("myRulesShow1");
}


















