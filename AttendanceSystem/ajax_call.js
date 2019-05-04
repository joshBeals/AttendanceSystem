/* GETTING MY SCRIPT READY */
let form = document.getElementById('form');
let form_div = document.getElementById('form-div');
let submit_btn = document.getElementById('submit');
let stdname = document.getElementById('stdname');
let stdmatric = document.getElementById('stdmatric');
let add = document.getElementById('add');
let view = document.getElementById('view');
let viewall = document.getElementById('viewall');
let mark = document.getElementById('mark');
let a = 1; let b = 1;


// event listeners for btn click events
form.addEventListener('submit', sendValues);

// calling the selectAPI to get the students records
view.addEventListener('click', () => {
    viewall.classList.toggle('show');
    changethename();
    if(view.innerHTML != 'Back'){
        CLEAN_DOM();
    }else{
        Call_SelectApi();
    }
});

// function to change the name of the button
function changethename(){
    if((b % 2) != 0){
        view.innerHTML = 'Back';
    }else if(b == 9){
        b = 1; 
    }else{
        view.innerHTML = 'View All';
    }
    b++;
}

// script to toggle view of the form
add.addEventListener('click', () => {
    form_div.classList.toggle('show');
    if((a % 2) != 0){
        add.innerHTML = 'Back';
    }else if(a == 9){
        a = 1; 
    }else{
        add.innerHTML = 'Add Student';
    }
    a++;
});

// function to send values
function sendValues(e){

    // removing the default submit functionality
    e.preventDefault();

    // setting my params variable
    //let name = "name="+stdname.value;
    //let matric = "matric="+stdmatric.value;
    let array = ["name="+stdname.value,   stdmatric.value];

    // creating an object of the XMLHttpReguest class
    let xhr = new XMLHttpRequest();
    // opening xhr to pass the data dynamically
    xhr.open('POST', 'insertApi.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    // onload function
    xhr.onload = function(){

        if(this.status == 200){
           let alert = document.getElementById('alert');
           alert.innerHTML = this.responseText;
           if(this.responseText == "Success!!! Data Inserted Into the database successfully"){
                alert.style.background = "seagreen";
                alert.style.padding = "10px 20px";
           }else{
                alert.style.background = "red";
                alert.style.padding = "10px 20px";
           }
           stdname.value = '';
           stdmatric.value = '';
        }

    }

    xhr.send(array);
}

// function to get the students data from the selectAPI
function Call_SelectApi(){
    /* ajax calls with jQuery
    $.ajax({
        url:'getdata.php',
        method: "POST",
        data:{action:'list',....}
    }).
    done(function(response){
        var json=JSON.parse(response);
        if(json.status==1)
        for(var idx=0;idx<=json.data.length;idx++)
        {
            var fname=json.data[idx].firstname;
            var lname=json.data[idx].lastname;
        }   
    })*/

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'selectApi.php', true); 
    xhr.onload =  function(){
        if(this.status == 200){
            let student = JSON.parse(this.responseText);
            PREPARE_DOM(student);
        }
    }


    xhr.send();

}

// funtion to prepare the DOM 
function PREPARE_DOM(student){
    let row = document.createElement('div');
    row.classList.add("row");
    let id = document.createElement('h3');
    id.innerHTML = 'Student ID';
    let name = document.createElement('h3');
    name.innerHTML = 'Student Name';
    let matric = document.createElement('h3');
    matric.innerHTML = 'Student Matric No';
    let time = document.createElement('h3');
    time.innerHTML = 'Time of account creation';
    row.appendChild(id);
    row.appendChild(name);
    row.appendChild(matric);
    row.appendChild(time);
    viewall.appendChild(row);
   for(let i = 0; i < student.length; i++){
        let row = document.createElement('div');
        row.classList.add("row");
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        p1.innerHTML = student[i].id;
        p2.innerHTML = student[i].stdname;
        p3.innerHTML = student[i].stdmatric;
        p4.innerHTML = student[i].created_at;
        row.appendChild(p1);
        row.appendChild(p2);
        row.appendChild(p3);
        row.appendChild(p4);
        viewall.appendChild(row);
   }
}

// function to remove the items in viewall div
function CLEAN_DOM(){
    viewall.innerHTML = '';
}