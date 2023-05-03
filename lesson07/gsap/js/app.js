console.log('app.js loaded');

/*gsap.to('h1', {duration:1, x:300, y:200, rotation:360 });
gsap.to('.box', {duration:1, x:300, y:200, rotation:360, delay:1 });
gsap.from('li', {duration: 0.5, x:"-300px", stagger:.5 });
bovenstaande is adhv delay ect, dit werkt dus met het inladen van de pagina*/

let timeline = gsap.timeline();
//{repeat:-1 , yoyo:true} tussen de haakjes om uw animatie oneindig te laten lopen en de animatie ook omgekeerd te doen laten "resetten"
timeline.to('h1', {duration:1, x:300, y:200, rotation:360 });
timeline.to('.box', {duration:1, x:300, y:200, rotation:360, backgroundColor:"green" , ease: "back"});

timeline.from('li', {duration: 0.5, x:"-300px", stagger:.5 });
//bovenstaande werkt met een timeline, iets gebeurt dus pas na dat het vorige geindigd is
