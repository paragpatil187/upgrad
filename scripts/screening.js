 
 let f_name = document.getElementById("f_name")

 let l_name = document.getElementById("l_name")

 let email = document.getElementById("email")

 let mobile = document.getElementById("mobile")
if(details.name != undefined)
{let name = details.name.split(" ")

 f_name.value = name[0]
if(name[1] != undefined){
 l_name.value = name[1]
}
 email.value = details.email;

 email.disabled = true;

 mobile.value = details.mobile

 mobile.disabled = true;}
// Gender select start
{
 let male = document.getElementById("male")

 let female = document.getElementById("female")

 let noGender = document.getElementById("noGender")

 male.addEventListener("click",()=>{
     male.setAttribute("class","border-box border-4 p-4 bg-blue-500 text-xl font-bold text-upgrad-blue rounded-2xl" )
     female.setAttribute("class","border-box border-4 p-4 text-xl font-bold text-upgrad-blue rounded-2xl")
     noGender.setAttribute("class","border-box border-4 p-4 text-xl font-bold text-upgrad-blue rounded-2xl")
 })
 female.addEventListener("click",()=>{
    male.setAttribute("class","border-box border-4 p-4 text-xl font-bold text-upgrad-blue rounded-2xl" )
    female.setAttribute("class","border-box border-4 p-4  bg-pink-500 text-xl font-bold text-upgrad-blue rounded-2xl")
    noGender.setAttribute("class","border-box border-4 p-4 text-xl font-bold text-upgrad-blue rounded-2xl")
})

noGender.addEventListener("click",()=>{
    noGender.setAttribute("class","border-box border-4 p-4  bg-yellow-500 text-xl font-bold text-upgrad-blue rounded-2xl")
    male.setAttribute("class","border-box border-4 p-4 text-xl font-bold text-upgrad-blue rounded-2xl" )
    female.setAttribute("class","border-box border-4 p-4 text-xl font-bold text-upgrad-blue rounded-2xl")
})
}
//Gender select ends

//Check Graduation
{
let g_yes = document.getElementById("g_yes")

let g_no = document.getElementById("g_no")

g_yes.addEventListener("click",()=>{
    g_yes.setAttribute("class","border-box border-4 p-4 bg-green-500 text-xl font-bold text-upgrad-blue rounded-2xl")
    g_no.setAttribute("class","border-box border-4 p-4 text-xl font-bold text-upgrad-blue rounded-2xl")
})

g_no.addEventListener("click",()=>{
    g_yes.setAttribute("class","border-box border-4 p-4 text-xl font-bold text-upgrad-blue rounded-2xl")
    g_no.setAttribute("class","border-box border-4 p-4 bg-gs-red text-xl font-bold text-upgrad-blue rounded-2xl")
})
}

function myFunction() {
    location.replace("pleasewait.html")
  }