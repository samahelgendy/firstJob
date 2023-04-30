let video = document.querySelector(".pop");
video.addEventListener("click", function(event){
    let overlay = document.createElement('div');
    overlay.className="pop-over";
    document.body.appendChild(overlay);
    
    let mybutton = document.createElement('button');
    mybutton.className="my-button";
    var context = document.createTextNode('X');
    mybutton.appendChild(context);
    overlay.appendChild(mybutton); 

    let show = document.createElement("iframe");
    show.className="vid";
    show.src="https://www.youtube-nocookie.com/embed/EYw0kBKhkU8?start=4";
    overlay.appendChild(show);


});

document.addEventListener('click' , function(event){
    if(event.target.className === "my-button"){
        document.querySelector(".pop-over").remove();
    }
    
});


const prags = document.querySelectorAll(".carousel-caption .prag");


prags.forEach( (prag) =>{
    prag.innerHTML = prag.innerHTML.split(" ").map( (char) =>{
        return "<span>"+char+"</span>"
     }).join(" ")
})
anime.timeline({
    loop:true
})

.add({
    targets:'.prag span' ,
    translateX : [-600 , 0] , 
    scale :[10 , 1] , 
    opacity:[0 , 1],
    easing:"easeOutExpo" , 
    duration:1500 , 
    delay:anime.stagger(100),
})

var mainlanding = document.querySelectorAll(".carousel-item");

var backimage=true;
var backinterval;

function intervalbackground (){
    if(backimage === true){
        backinterval = setInterval(() => {
            mainlanding.forEach( (land) =>{
                
                // let randomimgs = Math.floor(Math.random() * mainlanding.length);
                // console.log(randomimgs)
                // land.src = arrayimg[randomimgs]
                // land.style.display = "block";
                // if(land[i] === randomimgs){
                //     land.style.display = "block";
                // }
                // i++;
                // console.log(randomimgs)
                // for( let i = 0 ; i === land[randomimgs] ; i++){
                //     land.style.display = "block";
                // }
            })
           
        }, 5000);
    };
    };
    intervalbackground();


