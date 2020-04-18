//Tests whether it is possible to run the main script. When possible, execute and end the interval
const interval = setInterval( () => {
    //Taking the Chevron
    let chevron= document.querySelector(".ytp-fullerscreen-edu-button")

    //If Chevron exists, the video will be ready to be changed by scripts
    let start = !!chevron
    if(start){
    //Taking the video
    let video= document.querySelector("video")

    //Function to increment/decrement the video speed
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

    //Taking the controls on the right of the yt
    let rightControls= document.querySelector(".ytp-right-controls")

    //Delete Cheveron
    rightControls.removeChild(chevron)

    //Making the Yt controller a flex-box
    let controler= document.querySelector(".ytp-chrome-controls")
    let styleControler = document.createAttribute("style")
    styleControler.value = "display: flex; justify-content: space-between;" 
    controler.setAttributeNode(styleControler)



    // Create Speeder
    let speeder = document.createElement("div")
    let classSpeeder = document.createAttribute("class")
    classSpeeder.value = "speeder" 
    speeder.setAttributeNode(classSpeeder)

    //create button accelerator container
    let btAcceCont = document.createElement("div")
    let classBtAcceCont = document.createAttribute("class")
    classBtAcceCont.value = "btsAcceCont" 
    btAcceCont.setAttributeNode(classBtAcceCont)

    //create button accelerator
    let btAcce   =  document.createElement("button")
    btAcce.innerHTML= "<span>+</span>"
    let classbtAcce = document.createAttribute("class")
    classbtAcce.value = "btsAcce" 
    btAcce.setAttributeNode(classbtAcce)
    btAcce.addEventListener('click', () => {changePlaybackRate(0.25)}, false);



    //create speed reader
    let reader = document.createElement("span")
    let classReader= document.createAttribute("class")
    classReader.value = "reader" 
    reader.setAttributeNode(classReader)
    reader.innerHTML= `   ${video.playbackRate}   `



    //create button decelerator container
    let btDeceCont = document.createElement("div")
    let classBtDeceCont = document.createAttribute("class")
    classBtDeceCont.value = "btsAcceCont" 
    btDeceCont.setAttributeNode(classBtDeceCont)

    
    //create button decelerator
    let btDece   =  document.createElement("button")
    btDece.innerHTML= "<span>-</span>"
    let classbtDece = document.createAttribute("class")
    classbtDece.value = "btsAcce reposition" 
    btDece.setAttributeNode(classbtDece)
    btDece.addEventListener('click', () => {changePlaybackRate(-0.25)}, false);
    
    //Add buttons in the containers
    btDeceCont.appendChild(btDece)
    btAcceCont.appendChild(btAcce)

    //Add at speeder
    speeder.appendChild(btDeceCont)
    speeder.appendChild(reader)
    speeder.appendChild(btAcceCont)

    //Add the speeder at Yt controller
    controler.insertBefore(speeder,rightControls)

    //finesh the script
    clearInterval(interval)
    }


}, 100)

