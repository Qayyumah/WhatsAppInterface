function updates(){
    document.getElementById('con').innerHTML = document.getElementById('meet').innerHTML
}

function calls(){
    document.getElementById('con').innerHTML = document.getElementById('hed').innerHTML
}
document.getElementById('m-ch').addEventListener('click', function(){
    document.getElementById('con').innerHTML = document.getElementById('chat-container').innerHTML
})