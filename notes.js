let notesButton = document.querySelector('.add-btn')
let messagesList = document.querySelector('.messages-list')


let notes = []

function addMessage() {
  notes.push(document.getElementById('note-input').value)
  
  localStorage.setItem('noteList',JSON.stringify(notes))

  let notesList = localStorage.getItem('noteList')
  console.log(notesList.length)
  notesList = JSON.parse(notesList)

  for(let i = 0; i < notesList.length; i++) {
    let message = document.createElement('LI')
    message.innerText = notesList[i]
    message.classList = 'message'
    messagesList.appendChild(message)
  }

  message.innerText = ""
  
}