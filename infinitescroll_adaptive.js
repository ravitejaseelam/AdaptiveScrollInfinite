const app = document.getElementById('root');
var last_display_index = 6;
var dob;
var k = 0;
var details;
var card;
onScroll();
function load() {
    var request = new XMLHttpRequest()
   url = 'https://randomuser.me/api/?results=100';
 //url='https://jsonplaceholder.typicode.com/users';
    console.log(url);
    request.open('GET', url, true)
    request.onload = function () {
        var data = JSON.parse(this.response)
        StopLoadAnimation();
        if (request.status >= 200 && request.status < 400) {
            dob = data["results"]
           //dob=data;
            //       dob[0].picture.large=null;dob[0].gender=null; dob[0].name.first=null;
            //console.log(dob.length)
            for (var present_index = 0; present_index < 6; present_index++) {
                addPerson(dob[present_index]);
            }
        }
    }
    request.send();
}



function StopLoadAnimation() {
    document.getElementById("loader").style.visibility = "hidden";
}



function onScroll()
{
window.onscroll = function () {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        document.getElementById("loader").style.visibility = "visible";
       loadMore();
    }
}
}



function loadMore() {
    document.getElementById("loader").style.visibility = "hidden";
    for (var present_index = last_display_index; present_index < last_display_index + 6; present_index++) {
        if (present_index >= dob.length) {
            last_display_index = 6;
            alert("Nextcall is Made")
            load();

        }
        else
        addPerson(dob[present_index]);     
    }
    last_display_index += 6;
}

function addPerson(dob) {

   var img
   var info_name
   var info_sname
   var email
   var phone
   var gender 

    addDiv();

    addImage(dob.picture.large,dob.name.first,dob.name.last);

    addFirstName(dob.name.first);

    addLastName(dob.name.last);

    addEmail(dob.email);

    addPhone(dob.phone);

    addGender(dob.gender);

    append(info_name,info_sname,email,phone,img,gender);

}
module.exports={addPerson,addDiv,append,addImage,addFirstName,addLastName,addEmail,addPhone,addGender,load,loadMore}

function addFirstName(data) {
    info_name = document.createElement('h1')
    if (data != null)
        info_name.textContent = "First Name:  " + data;
    else {
        info_name.style.color = "red";
        info_name.textContent = "First Name: " + "null";
    }
    info_name.setAttribute('class', 'info_name')
    return info_name;
}

function addLastName(data) {
     info_sname = document.createElement('h1')
    if (data != null)
        info_sname.textContent = " Last Name: " + data;
    else {
        info_sname.style.color = "red";
        info_sname.textContent = " Last Name: " + "null";
    }
    info_sname.setAttribute('class', 'info_sname')
    return info_sname;
}

function addEmail(data) {
     email = document.createElement('h1')
    if (data != null)
        email.textContent = "Email: " + data;
    else {
        email.style.color = "red";
        email.textContent = "Email: " + "null";
    }
    email.setAttribute('class', 'email')
    return email;
}

function addPhone(data) {
     phone = document.createElement('h1')
    if (data != null) {
        phone.textContent = "Phone :" + data;
        phone.setAttribute('class', 'phone');
    }
    else {
        phone.textContent = "Phone :" + "null";
        phone.style.color = "red";
        phone.setAttribute('class', 'phone');
    }
return phone
}

function addGender(data) {
     gender = document.createElement('h1')
    if (data != null) {
        gender.textContent = "Gender : " + data
        gender.setAttribute('class', 'gender');
    }
    else {
        gender.textContent = "Gender :" + "null";
        gender.style.color = "red";
        gender.setAttribute('class', 'gender');
    }
    return gender;
}

function addImage(data,data_f,data_s) {
     img = document.createElement('img');

    if (data != null) {
        img = document.createElement('img');
        img.src = data;
    }
    else if (data_f != null && data_s != null) {
        img = document.createElement('h1');
        img.textContent = data_f[0] + data_s[0];
    }
    else if (data_s != null) {
        img = document.createElement('h1');
        img.textContent = dob.name.first[0];
    }
    else {
        img = document.createElement('h1');
        img.style.color = "red";
        img.textContent = "NA";
    }

    img.setAttribute('class', 'img')
    return img
}
function addDiv() {
    card = document.createElement('div')
    card.setAttribute('class', 'card')

    details = document.createElement('div')
    details.setAttribute('class', 'details')

}

function append() {
    details.appendChild(info_name)
    details.appendChild(info_sname)
    details.appendChild(gender)
    details.appendChild(phone)
    details.appendChild(email)
    card.appendChild(img)
    card.appendChild(details)
    app.appendChild(card)
}
