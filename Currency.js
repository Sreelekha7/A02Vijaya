

function valid(temp){
    var temp1 =0;
    const minAmount =1;
    const maxAmount = 100;
    if(temp<minAmount){
        temp1 = 0;
    }
    else if(temp>maxAmount){
        temp1=100;
    }
    else{
        temp1=temp;
    }
    window.alert(temp1);
    return temp1;
}
function Currency() {
var temp = document.getElementById("value2").value;
temp = valid(temp);
 
$("#val").html("Hello,  your amount in INR is: "+temp*64); 


}
