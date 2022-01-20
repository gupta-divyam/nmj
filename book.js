class1 = ""
class1ch=""
function onopen(){
    name1= localStorage.getItem("name")
    document.getElementById("namegame").innerHTML= "Wellcome "+name1+"!"
    document.getElementById("aaaap").volume = 0.1;
}
function don(){
    class1= document.getElementById("class").value 
    if(class1 == 1){
        console.log("work")
        class1ch= "<div style='float: left;'><a class='do' href='https://ncert.nic.in/textbook.php?aeen1=0-10'>English</a><br><a class='do' href='https://ncert.nic.in/textbook.php?aemh1=0-13'>Maths</a><br><a class='do' href='https://ncert.nic.in/textbook.php?ahhn1=0-23'>Hindi</a><br></div>"
        document.getElementById("maind").innerHTML= class1ch
    }
    if ( class1 == 2) {
        class1ch= "<div style='float: left;'><a class='do' href='https://ncert.nic.in/textbook.php?been1=0-10'>English</a><br><a class='do' href='https://ncert.nic.in/textbook.php?bemh1=0-15'>Maths</a><br><a class='do' href='https://ncert.nic.in/textbook.php?bhhn1=0-15'>Hindi</a><br></div>"
        document.getElementById("maind").innerHTML= class1ch
    }
    if( class1 == 3){
        class1ch= "<div style='float: left;'><a class='do' href='https://ncert.nic.in/textbook.php?ceen1=0-10'>English</a><br><a class='do' href='https://ncert.nic.in/textbook.php?cemh1=0-14'>Maths</a><br><a class='do' href='https://ncert.nic.in/textbook.php?chhn1=0-14'>Hindi</a><br><a class='do' href='https://ncert.nic.in/textbook.php?ceap1=0-24'>EVS</a></div>"
        document.getElementById("maind").innerHTML= class1ch 
    }
    if( class1 == 4){
        class1ch= "<div style='float: left;'><a class='do' href='https://ncert.nic.in/textbook.php?deen1=0-9'>English</a><br><a class='do' href='https://ncert.nic.in/textbook.php?demh1=0-14'>Maths</a><br><a class='do' href='https://ncert.nic.in/textbook.php?dhhn1=0-14'>Hindi</a><br><a class='do' href='https://ncert.nic.in/textbook.php?deap1=0-27'>EVS</a></div>"
        document.getElementById("maind").innerHTML= class1ch  
    }
    if( class1 == 5){
        class1ch= "<div style='float: left;'><a class='do' href='https://ncert.nic.in/textbook.php?eemh1=0-14'>English</a><br><a class='do' href='https://ncert.nic.in/textbook.php?eemh1=0-14'>Maths</a><br><a class='do' href='https://ncert.nic.in/textbook.php?ehhn1=0-18'>Hindi</a><br><a class='do' href='https://ncert.nic.in/textbook.php?ehap1=0-22'>EVS</a></div>"
        document.getElementById("maind").innerHTML= class1ch  
    }
    if( class1 == 6){
        class1ch= "<div style='float: left;'><a class='do' href='https://ncert.nic.in/textbook.php?fehl1=0-10'>English</a><br><a class='do' href='https://ncert.nic.in/textbook.php?femh1=0-14'>Maths</a><br><a class='do' href='https://ncert.nic.in/textbook.php?fhvs1=0-17'>Hindi</a><br><a class='do' href='https://ncert.nic.in/textbook.php?fesc1=0-16'>Science</a><br><a class='do' href='https://ncert.nic.in/textbook.php?fess2=0-8'>Gogrophy</a><br><a class='do' href='https://ncert.nic.in/textbook.php?fess1=0-11'>History</a><br><a class='do' href='https://ncert.nic.in/textbook.php?fess3=0-9'>Civics</a>"
        document.getElementById("maind").innerHTML= class1ch  
    }
    if( class1 == 7){
        class1ch= "<div style='float: left;'><a class='do' href='https://ncert.nic.in/textbook.php?gehc1=0-10'>English</a><br><a class='do' href='https://ncert.nic.in/textbook.php?gemh1=0-15'>Maths</a><br><a class='do' href='https://ncert.nic.in/textbook.php?ghvs1=0-20'>Hindi</a><br><a class='do' href='https://ncert.nic.in/textbook.php?gesc1=0-18'>Science</a><br><a class='do' href='https://ncert.nic.in/textbook.php?gess2=0-9'>Gogrophy</a><br><a class='do' href='https://ncert.nic.in/textbook.php?gess1=0-10'>History</a><br><a class='do' href='https://ncert.nic.in/textbook.php?gess3=0-9'>Civics</a></div>"
        document.getElementById("maind").innerHTML= class1ch  
    }
    if( class1 == 8){
        class1ch= "<div style='float: left;'><a class='do' href='https://ncert.nic.in/textbook.php?hehd1=0-10'>English</a><br><a class='do' href='https://ncert.nic.in/textbook.php?hemh1=0-16'>Maths</a><br><a class='do' href='https://ncert.nic.in/textbook.php?hhvs1=0-18'>Hindi</a><br><a class='do' href='https://ncert.nic.in/textbook.php?hesc1=0-18'>Science</a><br><a class='do' href='https://ncert.nic.in/textbook.php?hess4=0-6'>Gogrophy</a><br><a class='do' href='https://ncert.nic.in/textbook.php?hess2=0-10'>History</a><br><a class='do' href='https://ncert.nic.in/textbook.php?hess3=0-10'>Civics</div></a>"
        document.getElementById("maind").innerHTML= class1ch  
    }
    if( class1 == 9){
        class1ch= "<div style='float: left;'><a class='do' href='https://ncert.nic.in/textbook.php?iebe1=0-11'>English</a><br><a class='do' href='https://ncert.nic.in/textbook.php?iemh1=0-15'>Maths</a><br><a class='do' href='https://ncert.nic.in/textbook.php?ihks1=0-17'>Hindi</a><br><a class='do' href='https://ncert.nic.in/textbook.php?iesc1=0-15'>Science</a><br><a class='do' href='https://ncert.nic.in/textbook.php?iess2=0-4'>Gogrophy</a><br><a class='do' href='https://ncert.nic.in/textbook.php?iess3=0-5'>History</a><br><a class='do' href='https://ncert.nic.in/textbook.php?iess4=0-5'>Civics</div></a>"
        document.getElementById("maind").innerHTML= class1ch  
    }

}
 function logout(){
     window.location="index.html"
     localStorage.removeItem("name")
 }
