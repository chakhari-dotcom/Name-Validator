
function verif(){
    let myInput = document.getElementById('name');
    let myvalue= myInput.value;
    
    let myalert=document.getElementById('alert');

    if(myvalue.length<3){
        myalert.innerHTML= `
        <div class="alert alert-danger" role="alert">
             Invalid name !
         </div>`;
        
    }else{
        myalert.innerHTML= `
        <div class="alert alert-success" role="alert">
             Valid name
         </div>`;
    }
}