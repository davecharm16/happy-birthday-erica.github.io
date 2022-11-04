var confettiSettings = {"target":"my-canvas","max":"200","size":"1","animate":true,"props":["circle","square","triangle","line"],"colors":[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],"clock":"25","rotate":true,"start_from_edge":true,"respawn":true};
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();


const jsConfetti = new JSConfetti()

const timer = ()=> Math.floor(Math.random() * 5000) + 5000;

const popConfetti = setInterval(() => {
    jsConfetti.addConfetti({
        confettiNumber: 100,
     })
     jsConfetti.addConfetti({
        emojis: ['🎉','💝', '💐'],
        emojiSize : 30,
     })
}, timer());


  

