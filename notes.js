let notesButton = document.querySelector('.add-btn')
let messagesList = document.querySelector('.messages-list')
let messageContainer = document.querySelector('.messages-container')


let notes = []

function addMessage() {
  notes.push(document.getElementById('note-input').value)
  
  localStorage.setItem('noteList',JSON.stringify(notes))  

  getMessage()

  window.location.reload()
}

function getMessage() {
  let notesList = localStorage.getItem('noteList')
  console.log(notesList.length)
  notesList = JSON.parse(notesList)


  messagesList.innerHTML = notesList.map((notes) => {
    return '<li>' + notes + '</li>'
  }).join('')

  message.innerText = ""
}