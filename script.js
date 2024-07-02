
var tl=gsap.timeline();
function page1(){
tl.from('nav div',{
    y:-100,
    opacity:0,
    duration:0.5
})
tl.from('nav ul li',{
    y:-100,
    opacity:0,
    stagger:.15,
    duration:.5
})
tl.from('.left h1 ,.left p',{
    x:-100,
    opacity:0,
    duration:.6,
    stagger:.3
})

tl.from('.left button',{
    opacity:0
})
tl.from('.right img',{
    x:100,
    opacity:0,
    duration:.4,

},"-=1.4")
tl.from('.clients img',{
    y:100,
    opacity:0,
    duration:.7,
    stagger:.15
})}
page1()

gsap.from('.topservices h1',{
    x:-100,
    opacity:0,
    scrollTrigger:{
      trigger:'.services h1',
        scroller:"body",
        start:'top 80%',
        end:'top 60%',
       
        scrub:true
    }
})
gsap.from('.cards .leftcard',{
    x:-100,
    opacity:0,
    stagger:.5,
    duration:1,
    scrollTrigger:{
      trigger:'.cards .leftcard',
        scroller:"body",
        start:'top 40%',
        end:'top 50%',
        scrub:1,
      
    }
})

gsap.from('.cards .rightcard',{
    x:100,
    opacity:0,
    stagger:.5,
    duration:1,
    scrollTrigger:{
      trigger:'.cards .rightcard',
        scroller:"body",
        start:'top 40%',
        end:'top 50%',
        scrub:1
    }
})
gsap.from('.largeCard',{
    x:-400,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'.largeCard',
        scroller:'body',
        start:'top 70%',
        end:'top 50%',
        scrub:2
    }
})
gsap.from('.bottomservice h1',{
    x:-100,
    opacity:0,
    scrollTrigger:{
      trigger:'.bottomservice h1',
        scroller:"body",
        start:'top 80%',
        end:'top 60%',
       
        scrub:true
    }
})
gsap.from('footer',{
    x:300,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:'footer',
        scroller:'body',
        start:'top 90%',
        end:'top 80%',
        scrub:2
    }
})
