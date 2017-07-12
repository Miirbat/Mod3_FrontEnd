// const notesList = new NotesList()
const adapter = new Adapter()

$(document).ready(
  function(){
  createNote()
  adapter.getNotes(successCallbackGet)
})

function createNote() {
  $('#create-note').on("submit", function(e) {
    e.preventDefault()
    let noteTitle = $('#create-note #noteTitle').val()
    let noteBody = $('#create-note #noteBody').val()
    adapter.postNote(noteTitle, noteBody, successCallbackPost)
  })}

  function successCallbackPost() {
      adapter.getNotes(successCallbackGet)
      $('#noteTitle').val() = ''
      $('#noteBody').val() = ''
      alert("Congratulations on your new note!")
  }

    function successCallbackGet(data){
      let notesList = new NotesList()
      data.forEach(
        noteItem => {
          notesList.addNote(noteItem.title,noteItem.body)
      })
      $( "#notes-list" ).html(notesList.renderNotesList());

    }
