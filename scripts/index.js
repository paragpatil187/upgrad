var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  var courses;
fetch("http://localhost:3000/course", requestOptions)
.then(response => response.json())
.then(result => {courses= result
    showgrid("Management");
})
.catch(error => console.log('error', error));

var sidedropdown = document.getElementById("sidedropdown")
function showcourse(value){
    let data = courses.filter(el => el.category == value)
    showondrop(data)
}

function showondrop(data){
    sidedropdown.innerHTML = null;

    data.forEach(({title,logo,Duration,university,link,offer}) => {
        let div = document.createElement("div")
        div.style.margin = "20px"
        div.onclick = ()=>{
            window.location.href = link;
        }
        div.setAttribute("class","border-black border-2 rounded-lg flex hover:border-gs-red hover:bg-gray-100 ")
        let img = document.createElement("img")
        img.src = logo;
        img.style.width = "20%"
        img.style.height= "40px"
        img.style.marginTop="20px"
        let details = document.createElement("div")
        details.style.width= "70%";
        let h1 = document.createElement("h1")
        h1.style.fontWeight= "bold"
        h1.textContent = title;
        let uni = document.createElement("p")
        uni.style.fontSize = "12px"
        uni.textContent = university;
        let p = document.createElement("p")
        p.innerText = "Duration-" + Duration +" Months";
        p.style.fontSize= "12px"
        let off = document.createElement("p")
        off.style.margin = "5px"
        off.style.padding = "2px"
        off.style.width = "fit-content"
        if(offer == "New"){
            off.style.backgroundColor = "red";
            off.style.color= "white"
        }else if(offer == ""){
            off.style.backgroundColor = "transparent";
        }
        else{
            off.style.backgroundColor = "yellow";
            off.style.color= "red"
        }
        off.setAttribute("class","rounded")
        let arrow = document.createElement("div")
        arrow.innerHTML = "​&#8594;"
        arrow.style.marginTop= "10%"
        arrow.style.backgroundColor= "yellow"
        arrow.setAttribute("class","text-3xl text-gray-400 h-0")
        off.textContent = offer
        details.append(h1,uni,p,off)
        div.append(img,details,arrow)
        sidedropdown.append(div)
    });

}
//nav bar ends

//Display in Grid
function showgrid(value){
    
    let data = courses.filter(el => el.category == value)
    showongrid(data)
    
}

function showongrid(data){
    grid = document.getElementById("explore_courses")
    grid.innerHTML = null;
    data.forEach(({title,logo,Duration,university,link,offer,image}) => {
        let div = document.createElement("div")
        div.onclick = ()=>{
            window.location.href = link;
        }
        div.setAttribute("class","border-2 border-gray-300 cursor-pointer shadow-xl rounded-2xl m-3")
         let img = document.createElement("img")
         img.src = image;
         img.setAttribute("class","w-full rounded-t-2xl h-32")
         let univerity1 = document.createElement("p")
         univerity1.textContent = university;
         univerity1.setAttribute("class","inline-block w-7/12 h-12 border-l-2  align-top m-2 border-gray-600")
         let logo1 = document.createElement("img")
         logo1.src = logo;
         logo1.setAttribute("class","inline-block m-2 w-3/12 h-12")
         let title1 = document.createElement("p")
         title1.setAttribute("class","w-11/12 text-xl border-gray-200 font-bold ml-3 border-b-2")
         title1.textContent = title;
         let duration = document.createElement("div")
         duration.setAttribute("class","w-auto ml-3 p-2 text-gray-600")
         duration.innerHTML = `<span class="material-icons block align-bottom">menu_book</span> ${Duration} Months `
         let mentorship = document.createElement("div")
         mentorship.setAttribute("class","w-auto ml-3 -mt-3 p-2 text-gray-600")
         mentorship.innerHTML = `<span class="material-icons block align-bottom">supervisor_account</span> 1-1 Mentorship & Job Support`
         let button = document.createElement("div")
         button.setAttribute("class","w-10/12 m-auto text-center mb-2 text-gs-red border-2 p-1")
         button.innerHTML = `VIEW PROGRAM &#10132;`
         div.append(img,logo1,univerity1,title1,duration,mentorship,button)
         grid.append(div)

    });
}



// slideshow start
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
// Slideshow Stop




//Copy from deepesh
var flag = 0;
let modal=document.getElementById("modal");
//sign up button 
let signupbutton=document.getElementById("button1");
//close button 
let closebutton=document.getElementById("closebutton");

//adding click event on signup button
signupbutton.addEventListener("click",clicksignup);

//adding click event on close button
closebutton.addEventListener("click",clickclose);

//adding click event on clicking outside
window.addEventListener("click",clickoutside);

//function for click event on signup
function clicksignup(){
    if(flag == 0){
    modal.style.display="block";
    }else{
        if(confirm("Are You sure to logout")==true){
            localStorage.setItem("User_data",JSON.stringify([]));
            window.location.reload()
        }
    }
}

//function for click event on close modal
function clickclose(){
    modal.style.display="none";
}

//function for click event on outside clicking for close
function clickoutside(e){
    if(e.target == modal)
    modal.style.display="none";
}

//close button 
let continue_button=document.getElementById("continue_button");
//adding click event on continue button
continue_button.addEventListener("click",continuebutton);

// creating local storage
if(localStorage.getItem("User_data")===null){
    localStorage.setItem("User_data",JSON.stringify([]));
}
let email_input=document.getElementById("email_input");
        email_input.addEventListener("input",validatemail)
//adding user data in local storage
function continuebutton(){
    
        let user_datas=JSON.parse(localStorage.getItem("User_data"));
        
        let flag=false;
        if(user_datas!=null){

            user_datas.forEach(({email})=>{
                if(email_input.value==email){
                    flag=true;
                    
                }
            });
        }
        if(email_input.value!=""){
            if(flag==true)
            {
                alert("already registered");

                 //appending otp for taking checking user
                let containing=document.getElementById("containing");
                containing.innerHTML=null;
                let div=document.createElement("h2");
                div.textContent="Enter the code sent to your phone and email";
                let inputotp=document.createElement("input");
                inputotp.setAttribute("id","email_input");
                inputotp.placeholder="Enter 4 digit OTP";
                inputotp.type="password";
                let continue_button=document.createElement("button");
                continue_button.innerHTML="Continue";
                continue_button.setAttribute("id","continue_button");
                containing.append(div,inputotp,continue_button);
                continue_button.onclick=function(){forward();}
            }
            else{
              

               //appending details for taking user details
               let containing=document.getElementById("containing");
               containing.innerHTML=null;
               let div=document.createElement("h2");
               div.textContent="Enter Your Details";
               let inputname=document.createElement("input");
               inputname.setAttribute("id","email_input");
               inputname.placeholder="Enter your name";
               let inputmobile=document.createElement("input");
               inputmobile.type = "number"
               inputmobile.setAttribute("id","mobile_input");
               inputmobile.oninput=()=> validatemobile(inputmobile.value,inputname.value)
               inputmobile.placeholder="Enter your mobile no.";
               let continue_button=document.createElement("button");
               continue_button.innerHTML="Continue";
               
               continue_button.setAttribute("id","continue_button");
               containing.append(div,inputname,inputmobile,continue_button);
               continue_button.onclick=function(){
                let user_datas={
                    email:email_input.value,
                    name: inputname.value,
                    mobile: inputmobile.value
                };
                localStorage.setItem("User_data",JSON.stringify(user_datas));
                forward();}    
               
        }
}
}
function forward(){
    window.location.href="index.html";
}

function validatemail() {
    continue_button.style.backgroundColor = "gray"
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email_input.value.match(validRegex)) {


    continue_button.style.backgroundColor = "red"
    continue_button.disabled = false;

  } else {
    continue_button.style.backgroundColor = "gray"
    continue_button.disabled = true;
  }
}

function validatemobile(mobile,name) {
   
    let continue_button=document.getElementById("continue_button");
   if(name.length > 3){
       if(mobile.length == 10){
       continue_button.style.backgroundColor = "red"
    continue_button.disabled = false;
    console.log("done")
       }else{
        continue_button.disabled = true;
        continue_button.style.backgroundColor = "gray"
       }
   }else{
    continue_button.disabled = true;
    continue_button.style.backgroundColor = "gray"
   }
}

//Login Check
var details = JSON.parse(localStorage.getItem("User_data"))
if(details.name != undefined){

button1.setAttribute("class","p-2 rounded text-gray-600 absolute right-2")
button1.innerHTML =`<span class="material-icons" style="margin-top: 8px;">account_circle</span><span class="relative -top-2"> ${details.name.substring(0,7)}...</span>`
var flag = 1;
}

//import footer

// import footer from "../components/footer.js";

// let footerb = document.getElementById("footerb")

// footerb.innerHTML = footer()