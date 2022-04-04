fetch('https://muskan-api.herokuapp.com/api/v1/getsongs?artist_id=uGdfg6zGf4s_&type=artist')
    .then(response => response.json())
    .then(data => htmlrender(data.data))
    .catch(err => handleerror(err))

function handleerror(msg) {
    let html = `<div id = "err_msg"> Something went Wrong</div>`
    document.querySelector('.body').insertAdjacentHTML('beforeend', html)
}
let cal = Math.ceil(25 / 6)

function htmlrender(response) {
    // for(let i =0; i<cal; i++)
    // {
    //     `<div class="carousel-inner">
    //     <div class="carousel-item active">
    //     <div class="container">
    //    for (let x of response){
    //        console.log(x)
    //     let insert_img = 
    //     <div class="col-2">
    //     <figure>
    //         <img class="img-thumbnail" src="${x.image}" alt="">
    //         <figcaption class="text-center text-light">${x.title}</figcaption>
    //         <figcaption class="text-center text-light">${x.subtitle}</figcaption>
    //     </figure>
    //     </div>
    //     document.querySelector('.image_insertion').insertAdjacentHTML('beforeend',insert_img)
    //    }
    //    </div>
    //    </div>
    //    </div>`
    // }

    for (let y of response){
           
            let insert_img = 
            `<div class="col-2">
            <figure>
                <img class="img-thumbnail playAudio" data-mp3=${y.more_info.vlink} src="${y.image}" alt="">
                <figcaption class="text-center text-light">${y.title}</figcaption>
                <figcaption class="text-center text-light">${y.subtitle}</figcaption>
            </figure>
            </div>`
            document.querySelector('.image_insertion').insertAdjacentHTML('beforeend',insert_img)
           }

        //    var musics_1 = document.querySelectorAll('.playAudio');
        //    musics_1.forEach((n) => {
        //     n.addEventListener('click',audio_playing
        // })

    var j = 0;
    var temp = "";

    for(let x of response) {
        var card = ` <div class="br20 ">
        <img class="thumbnail playAudio"  data-mp3=${x.more_info.vlink} src="${x.image}" alt="">
        <p class="m5">${x.title}</p>
        <p class="m5">${x.more_info.album}</p>
    </div>`
    j++;
    temp += card;
    if(j>7) {
        break;
    }
    }
    // response.forEach(r => {
    //     var card = ` <div class="br20" data-mp3=${r.more_info.vlink}>
    //     <img class="thumbnail" src="${r.image}" alt="">
    //     <p class="m5">${r.title}</p>
    //     <p class="m5"></p>
    // </div>`
    //     console.log(card);
    //     temp += card;
    //     j++;
    //     if (j > 7) {
    //         return;
    //     }
    // });
    document.querySelector(".grid_property_1").insertAdjacentHTML('afterbegin', temp);

    var musics = document.querySelectorAll('.playAudio');
    
    musics.forEach((m) => {
        m.addEventListener('click',audio_playing)
    })
}




function audio_playing(event){
    var player = document.querySelector(".audio_links");
    var mp3 = event.target.getAttribute("data-mp3");
    console.log(event.target);
    document.querySelector(".audio-source").setAttribute("src",mp3);
    player.load();
}

