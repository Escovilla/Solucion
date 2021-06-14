
function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
  $("#mySidenav").show();

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const typewriter = new Typewriter('#typewriter', {
    loop: false,
});

const typewriter2 = new Typewriter('#typewriterMobile', {
    loop: false,
});

const typewritertext = new Typewriter('#typewritertext', {
    loop: false,
});
 

function myFunction(x) {
    if (x.matches) { // If media query matches
        $("#typewriterMobile").show();
        $("#typewritertext").hide();
        typewriter.typeString('<strong>Nico Escovilla</strong>')
        .start();
        typewriter2.pauseFor(1500)
        .typeString('Hello I <br> Make Websites!')
        .pauseFor(2500)
        .deleteAll()
        
        .typeString('Welcoem, take')
        .pauseFor(0)
        .deleteChars(8)
        .typeString('me, take <br> a <strong>look</strong> around')
        .pauseFor(2500)
        .deleteAll()
        .typeString('oh wait!')
        .deleteAll()
        .typeString('<strong>Coming soon</strong> ')
        .start();
    } else {
        typewriter.typeString('Hello I Make Websites!')
        .pauseFor(4500)
        .deleteAll()
        .typeString('Welcoem, take')
        .pauseFor(100)
        .deleteChars(8)
        .typeString('me, take a <strong>look</strong> around')
        .pauseFor(2500)
        .deleteAll()
        .typeString('<strong>Nico Escovilla</strong>')  
        .start();

        
        setTimeout(function(){ 
            $("#typewritertext").show();
            typewritertext.typeString('<strong> Coming soon</strong> ')
            .start();
        }, 22550);
    }
}
    
    var x = window.matchMedia("(max-width: 530px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
