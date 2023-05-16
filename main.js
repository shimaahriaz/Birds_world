
const iconeAudio = document.querySelector(".icon-music")
const audio = document.querySelector(".audio")
const birdsTips = document.querySelector(".row")


iconeAudio.addEventListener("click", function(){
    if(audio.paused){
        audio.play()
    }else{
        audio.pause()
    }
})

const birdsWatch = [
    {
        imgurl : "image/birds tips/img16.jpeg"
    },
    {
        
        imgurl : "image/birds tips/img18.jpg"
    },
    {
        
        imgurl : "image/birds tips/img20.jpeg"
    },
    {
        
        imgurl : "image/birds tips/img3.jpeg"
    },
    {
        
        imgurl : "image/birds tips/img4.jpeg"
    },
    {
        
        imgurl : "image/birds tips/img29.jpeg"
    },
    {
        
        imgurl : "image/birds tips/img6.jpeg"
    },
    {
        
        imgurl : "image/birds tips/img7.jpg"
    },
    {

        imgurl : "image/birds tips/img8.jpeg"
    },
    {
        imgurl : "image/birds tips/img25.jpg"
    },
    {

        imgurl : "image/birds tips/img27.jpeg"
    },
    {
        
        imgurl : "image/birds tips/img30.jpeg"
    }
]

function displayBirdsTips(){
    const birds = birdsWatch.map(item =>{
        return `<div class=" col-sm-6 col-md-4 col-lg-3 px-0">
        <div class="birds-tips">
                <img src="${item.imgurl}" class="img-fluid"/>
        </div>
    </div>`
    })

    birdsTips.innerHTML = birds.join('');
}
    
displayBirdsTips();