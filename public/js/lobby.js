let form =  document.getElementById('lobby__form')

let displayName =  sessionStorage.getItem('display_name')

if(displayName){
    form.namespaceURI.value= displayName;
}

form.addEventListener('submit',(e) =>{
    e.preventDefault()

    let inviteCode = e.target.room.value

    sessionStorage.setItem('display_name',e.target.name.value)

    if(!inviteCode){
        inviteCode = String(Math.floor(Math.random() * 10000))
    }

    window.location = `room.html?room=${inviteCode}`
})