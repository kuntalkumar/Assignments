    let jokes=document.getElementById("jokeselement");
    let audio = new Audio('./jhim_tapak_dam_dam .mp3');  
    fetch("https://icanhazdadjoke.com/slack")
    .then((ele)=> ele.json())
    .then((jokesData)=> {
        const jokesText=jokesData.attachments[0].text

        jokes.innerText=jokesText
        // console.log(jokesText)
        audio.play();

    })


