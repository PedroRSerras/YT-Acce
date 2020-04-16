const interval = setInterval( () => {
    let chevron= document.querySelector(".ytp-fullerscreen-edu-button")
    let start = !!chevron
    if(start){
    let video= document.querySelector("video")

    function changePlaybackRate(pbr){
        if(video.playbackRate+pbr>=16){
            video.playbackRate= 16
            reader.innerHTML= 16
        }
        else if(video.playbackRate+pbr<=0){
            video.playbackRate= 0
            reader.innerHTML= 0
        }
        else{
        video.playbackRate+= pbr
        reader.innerHTML= ` ${video.playbackRate} `
        }
        
    }

    let rightControls= document.querySelector(".ytp-right-controls")
    rightControls.removeChild(chevron)

    let controler= document.querySelector(".ytp-chrome-controls")
    let styleControler = document.createAttribute("style")
    styleControler.value = "display: flex; justify-content: space-between;" 
    controler.setAttributeNode(styleControler)

    let speeder = document.createElement("div")
    let classSpeeder = document.createAttribute("class")
    classSpeeder.value = "speeder" 
    speeder.setAttributeNode(classSpeeder)

    let btAcce   =  document.createElement("button")
    btAcce.innerHTML= "+"
    let classbtAcce = document.createAttribute("class")
    classbtAcce.value = "btsAcce" 
    btAcce.setAttributeNode(classbtAcce)
    btAcce.addEventListener('click', () => {changePlaybackRate(0.25)}, false);

    let reader = document.createElement("span")
    let classReader= document.createAttribute("class")
    classReader.value = "reader" 
    reader.setAttributeNode(classReader)
    reader.innerHTML= `   ${video.playbackRate}   `

    let btDece   =  document.createElement("button")
    btDece.innerHTML= "-"
    let classbtDece = document.createAttribute("class")
    classbtDece.value = "btsAcce resize" 
    btDece.setAttributeNode(classbtDece)
    btDece.addEventListener('click', () => {changePlaybackRate(-0.25)}, false);

    speeder.appendChild(btDece)
    speeder.appendChild(reader)
    speeder.appendChild(btAcce)
    controler.insertBefore(speeder,rightControls)
    clearInterval(interval)
    }


}, 100)

