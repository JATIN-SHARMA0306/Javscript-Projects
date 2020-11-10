let cartNumber =parseInt(document.getElementById("cartNumber").innerText);
console.log(cartNumber)
let btn=document.getElementsByClassName("add");
for(let i=0;i<btn.length;i++)
{
    if(localStorage.getItem("status")==="true")
    {
    btn[i].addEventListener("click",()=>{
        console.log("inside")
        cartNumber+=1
        document.getElementById("cartNumber").innerText=cartNumber
        btn[i].style.pointerEvents="none";
        btn[i].style.cursor="default";
        btn[i].style.backgroundColor="gray"
    })
}  
else
{
    btn[i].addEventListener("click",()=>{
        alert("You have to login first")
    })
}
}
if(localStorage.getItem("status")==="true")
{
    let rightnav=document.getElementsByClassName("list")[0];
    let user=localStorage.getItem("user");
    console.log(rightnav);
    while (rightnav.hasChildNodes()) {  
        rightnav.removeChild(rightnav.firstChild);
      } 
    let message=document.createElement("h4");
    message.style.color="cyan"
    let welcomeMessage=document.createTextNode("Hello,"+user);
    message.append(welcomeMessage);
    let listitem=document.createElement("li");
    listitem.className="nav-item active";
    let anchor=document.createElement("a");
    let logoutText=document.createTextNode("LOGOUT");
    anchor.append(logoutText)
    anchor.href="#"
    anchor.className="nav-link"
    anchor.id="logout"
    anchor.style.color="white"
    listitem.append(anchor);
    rightnav.append(message);
    rightnav.appendChild(listitem);
}
let logout=document.getElementById("logout");
console.log(logout)
if(logout!=null)
{
logout.addEventListener("click",()=>{
    localStorage.setItem("status","false");
    window.location.href="index.html";
})
}

