

body = document.getElementsByTagName("body");

nav = document.getElementsByTagName("nav");
Img_an = document.querySelector(".Images_animation");
welcome = document.querySelector(".welcome");

email = document.getElementById("email_addr");
passwd = document.getElementById("pass");

log = document.querySelector(".login_page");
cont = document.querySelector(".contact");
feed = document.querySelector(".feedback");
fed_inp = document.querySelector(".fed");
txtarea = document.getElementsByTagName("textarea");

element01 = document.getElementsByClassName("star");

product01 = document.querySelector(".masala");
product02 = document.querySelector(".b1");
product03 = document.querySelector(".goodday");
product04 = document.querySelector(".nirma");
product05 = document.querySelector(".lifebuy");
product06 = document.querySelector(".rin");
product07 = document.querySelector(".b2");
product08 = document.querySelector(".detol");
product09 = document.querySelector(".wafer");
product10 = document.querySelector(".batti");

cart_an = document.querySelector(".cart_animation");
w1 = document.querySelector(".w1");
w2 = document.querySelector(".w2");
cart_img = document.querySelector(".cart_img");

reviews = document.getElementsByClassName("review_box");
ques = document.querySelector(".question");
owner_name = document.querySelector(".owner_name_an")
owner_rem = document.querySelector(".owner_rem");
owner_img = document.querySelector(".owner_image");

async function starAnimation(){
    for(var i=0;i<element01.length;i++){
        element01[i].style.animation = "starblink 1s ease-in-out infinite";
        await sleep(200);
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

 starAnimation();

 async function animation_cart(){
 
     product02.style.animation = "drop_product 11s 1 ease-in";
     product06.style.animation = "drop_product2 11s 1 ease-in";
     product09.style.animation = "drop_product3 11s 1 ease-in";
     product01.style.animation = "drop_product 11s 1 ease-in";
     product01.style.animationDelay = "1s";
     product03.style.animation = "drop_product1 11s 1 ease-in";
     product03.style.animationDelay = "1s"; 
     product08.style.animation = "drop_product3 11s 1 ease-in";
     product08.style.animationDelay = "1s";
     product04.style.animation = "drop_product 11s 1 ease-in";
     product04.style.animationDelay = "2s";
     product10.style.animation = "drop_product3 11s 1 ease-in";
     product10.style.animationDelay = "2s";
     product05.style.animation = "drop_product1 11s 1 ease-in";
     product05.style.animationDelay = "3s";
     product07.style.animation = "drop_product2 11s 1 ease-in";
     product07.style.animationDelay = "3s";
     await sleep(2000);
     product02.style.visibility = "visible";
     product06.style.visibility = "visible";
     product09.style.visibility = "visible";
     await sleep(1000);
     product01.style.visibility = "visible";
     product03.style.visibility = "visible";
     product08.style.visibility = "visible";
     await sleep(1000);
     product04.style.visibility = "visible";
     product10.style.visibility = "visible";
     await sleep(1000);
     product05.style.visibility = "visible";
     product07.style.visibility = "visible";
    await sleep(1500);
     cart_an.style.visibility = "visible";
     w1.style.animation = "rotate 9s linear 1";
     w2.style.animation = "rotate 9s linear 1";
     cart_img.style.animation = "translation 9s linear 1";
    await sleep(4300);
    product02.style.visibility = "hidden";
    product06.style.visibility = "hidden";
    product09.style.visibility = "hidden";
    await sleep(800);
     product01.style.visibility = "hidden";
     product03.style.visibility = "hidden";
     product08.style.visibility = "hidden";
     await sleep(800);
     product04.style.visibility = "hidden";
     product10.style.visibility = "hidden";
     await sleep(800);
     product05.style.visibility = "hidden";
     product07.style.visibility = "hidden";
     await sleep(2300);
     cart_an.style.visibility = "hidden" ;
    }


function login(){
    log.style.visibility = "visible";
    document.getElementById("Img_an").style.opacity = "0.7";
    document.getElementById("wel").style.opacity = "0.7";
    document.getElementById("nav_bar").style.opacity = "0.7";
}

function login_submit(){
    if(ValidateEmail()){
        $(".bootstrap-growl").remove();
        $.bootstrapGrowl("Logged in Successfully", {
          type: "success",
          offset: { from: "top", amount: 25 },
          align: "center",
          delay: 1000,
          allow_dismiss: true,
          stackup_spacing: 10,
        });
    log.style.visibility = "hidden";
    document.getElementById("Img_an").style.opacity = "1";
    document.getElementById("wel").style.opacity = "1";
    document.getElementById("nav_bar").style.opacity = "1";
    email.value = "";
    passwd.value = "";
    }else{
        email.value = "";
        passwd.value = "";
    }
}

function ValidateEmail() 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function contact(){
    cont.style.visibility = "visible";
    document.getElementById("Img_an").style.opacity = "0.7";
    document.getElementById("wel").style.opacity = "0.7";
    document.getElementById("nav_bar").style.opacity = "0.7";
}

function contact_exit(){
    cont.style.visibility = "hidden";
    document.getElementById("Img_an").style.opacity = "1";
    document.getElementById("wel").style.opacity = "1";
    document.getElementById("nav_bar").style.opacity = "1";
}
var flag = 0;

function feedback(){
    if(flag==0){
    feed.style.visibility = "visible";
    }else{
        $(".bootstrap-growl").remove();
        $.bootstrapGrowl("Your feedback already submitted !", {
          type: "danger",
          offset: { from: "top", amount: 10 },
          align: "center",
          delay: 1000,
          allow_dismiss: true,
          stackup_spacing: 10,
        });
    }
}



function sub(){
    if(fed_inp.value==""){
        $(".bootstrap-growl").remove();
        $.bootstrapGrowl("Please Enter name and email", {
          type: "danger",
          offset: { from: "top", amount: 10 },
          align: "center",
          delay: 1000,
          allow_dismiss: true,
          stackup_spacing: 10,
        });
    }else{
    flag = 1;
    $(".bootstrap-growl").remove();
    $.bootstrapGrowl("Feedback submitted Successfully", {
      type: "success",
      offset: { from: "top", amount: 10 },
      align: "center",
      delay: 1000,
      allow_dismiss: true,
      stackup_spacing: 10,
    });
    fed_inp.value = "";
    txtarea.value = "";
    feed.style.visibility = "hidden";
}
}

async function start_Review_Animation(){
    ques.style.animation = "ques 1s ease-in 1";
    await sleep(1000);
    ques.style.visibility = "visible";
    for(var i=0;i<reviews.length;i++){
        reviews[i].style.animation = "review 1s ease-in 1";
        await sleep(1000);
        reviews[i].style.visibility = "visible";
    }
}

async function owner_animation(){
    owner_name.style.visibility = "visible";
    owner_name.style.animation = "owner_name_animation 2s ease-in 1";
    await sleep(2000);
    owner_rem.style.visibility = "visible";
    owner_rem.style.animation = "owner_remain 2s ease-in 1";
    await sleep(2000);
    owner_img.style.visibility = "visible";
    owner_img.style.animation = "owner_img_animation 1s ease-in 1";
}

async function Main_Function(){

        ScrollTrack.setTriggerEventsFraction(0.20);
        ScrollTrack.bindEvents();

        if(screen.width < 400){
                animation_cart();
                ScrollTrack.subscribeCallback(0.20, function (){
                    owner_animation();
                })
                ScrollTrack.subscribeCallback(0.40, function (){
                    start_Review_Animation();
                })
        }

        else{

                ScrollTrack.subscribeCallback(0.20, function (){
                    animation_cart();
                })

                ScrollTrack.subscribeCallback(0.40, function (){
                    owner_animation();
                })

                ScrollTrack.subscribeCallback(0.60, function (){
                    start_Review_Animation();
                })

                ScrollTrack.subscribeCallback(0.80, function (){
                })

                ScrollTrack.subscribeCallback(1.0, function (){
                })
         }
    }


    Main_Function();
