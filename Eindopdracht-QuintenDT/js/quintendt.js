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

        .add ("down")
        .to("#quintendt .box", {
            y:"60vh"
        },"down")

        .add ("catch")
        .to("#quintendt .box", {
            x:"-50vw",
            y:"80vh",
            scale:.3,
        },"catch")

        .add("run")
        .to ("#quintendt .gif", {
            x:1200,
            ease:"none",
            delay:2
        },"run")

        
        
        .from ("#quintendt .history", {
            x:-800,
            delay:2
        },"run")



        .from ("#quintendt .facts", {
            x:800,
            delay:2
        },"run")


        .add("superbowl")
        .from("#quintendt .superbowl", {
            
        },"superbowl")

        .add("vs")
        .from("#quintendt .img1", {
            y:"-200vh",
            opacity:0,
            delay:2,
            ease:"easeOut"
        },"vs")

        .from("#quintendt .img2", {
            y:"200vh",
            opacity:0,
            delay:2,
            ease:"easeOut"
        },"vs")

        .add("flyin")
        .from ("#quintendt .AFC", {
            x:"90vw",
            y:"-80vh",
            rotation:720
        },"flyin")

        .from ("#quintendt .NFL", {
            x:"-90vw",
            y:"-80vh",
            rotation:720
        },"flyin")


        //terug naar wit vierkant
        .to("#quintendt .box", {
            width:"20rem",
            height:"20rem",
            borderRadius:"0",
            backgroundColor: "white"
        });
    }
}