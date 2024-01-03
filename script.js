var crsr = document.querySelector("#cursor")  /*to select anything*/
var blur = document.querySelector("#cursor-blur")  /*to select anything wo peeche wale blur effect cursor ka*/
document.addEventListener("mousemove",function(dets){  /*to add functioning in anything and dets give that how the mouse are moving on which axis an how much*/
    crsr.style.left =dets.x+"px"
    crsr.style.top =dets.y+"px"
    blur.style.left =dets.x - 250 + "px" /*150 isliye jisme saath mai blur effect */
    blur.style.top =dets.y - 250 + "px"
})

var h4all=document.querySelectorAll("#nav h4")   //to select all h4 tags here
h4all.forEach(function(elem){  //forEach is a loop that works until jb tk cheeze hai in JS
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border= "1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border= "1px solid #cebd25"
        crsr.style.backgroundColor="#95C11F"
    })

}   )




gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1  /*scrolling ke basis pr cheezo ko adjust kr deta hai and value 2 isliye diye jisme wo smoothly change ho wrna true pr bhi chl jata*/

    }
    
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        // scrub:true

    }


})




gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1

    }


})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 79%",
        end:"top 73%",
        scrub:3}
})




        // Function to scroll to the target section
function scrollToTarget() {
    const target = document.getElementById('arrow');
    target.scrollIntoView({ behavior: 'smooth' });
    }

        // Attach the click event to the button
const button = document.getElementById('arrow');
button.addEventListener('click', scrollToTarget);
   