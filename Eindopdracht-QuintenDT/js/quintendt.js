function quintendt (fase) {
    console.log("quintendt.js: fase =" + fase);
    let section = document.getElementById("quintendt");

    if( !section.init){
        section.init= true;
        console.log("quintendt.js: init");
        section.tl
        .to("#quintendt .box", {
            borderRadius:"50%",
            backgroundColor: "brown",
            rotation: 180,
            duration: 4
        })
        //terug naar wit vierkant
        .to("#quintendt .box", {
            borderRadius:"0",
            backgroundColor: "white",
            rotation: -180,
            duration:1
        });
    }
}