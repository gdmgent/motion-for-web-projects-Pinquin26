function quintendt (fase) {
    console.log("quintendt.js: fase =" + fase);
    let section = document.getElementById("quintendt");

    if( !section.init){
        section.init= true;
        console.log("quintendt.js: init");
        section.tl
        
        .add ("football")
        .to("#quintendt .box", {
            borderRadius:"50%",
            backgroundColor: "rgb(112, 90, 61)",
            width:"10rem",
            height:"5rem",
            rotation: 360,
            borderTop: "solid white 4px",
            center: 0
        }, "football")
        
        .add("toField")
        .to("#quintendt .box", {
            x:"45vw",
            y:"45vh"
        },"toField")

        .add ("catch")
        .to("#quintendt .box", {
            x:"-50vw",
            y:"40vw",
            scale:.3
        },"catch")

        .add("run")
        .to ("#quintendt .gif", {
            x:1200,
            ease:"none",
            delay: 6
        },"run")

        .from ("#quintendt .history", {
            x:-800,
            ease:"ease-in",
            delay:2
        },"run")

        .add("facts")
        .from ("#quintendt .facts", {
            x:800,
            ease:"ease-in",
            delay:2
        },"facts")
        
        //terug naar wit vierkant
        .to("#quintendt .box", {
            width:"20rem",
            height:"20rem",
            borderRadius:"0",
            backgroundColor: "white"
        });
    }
}