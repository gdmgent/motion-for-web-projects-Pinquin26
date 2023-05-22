function quintendt (fase) {
    console.log("quintendt.js: fase =" + fase);
    let section = document.getElementById("quintendt");

    if( !section.init){
        section.init= true;
        console.log("quintendt.js: init");
        section.tl
        
        .add ("field")
        .to("#quintendt .box", {
            borderRadius:"50%",
            backgroundColor: "rgb(112, 90, 61)",
            width:"10rem",
            height:"5rem",
            rotation: 360,
            borderTop: "solid white 4px",
            center: 0
        }, "field")
        
        .to("#quintendt .box", {
            x:"45vw",
            y:"45vh"
        },"field")

        .add ("history")
        .to("#quintendt .box", {
            x:"-30vw",
            y:"40vw"
        },"history")

        //terug naar wit vierkant
        .to("#quintendt .box", {
            width:"20rem",
            height:"20rem",
            borderRadius:"0",
            backgroundColor: "white",
            rotation: -180
        });
    }
}