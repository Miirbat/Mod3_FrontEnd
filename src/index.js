// const notesList = new NotesList()
const adapter = new Adapter()

$(document).ready(
  function(){
  createNote()
  adapter.getNotes(successCallbackGet)
  selectingANote()
  editEventListener()
})

function createNote() {
  $('#create-note').on("submit", function(e) {
    e.preventDefault()
    let noteTitle = $('#create-note #noteTitle').val()
    let noteBody = $('#create-note #noteBody').val()
    adapter.postNote(noteTitle, noteBody, successCallbackPost)
    $('#create-note #noteTitle').val('')
    $('#create-note #noteBody').val('')
  })}

  function successCallbackPost() {
      adapter.getNotes(successCallbackGet)
  }

    function successCallbackGet(data){
      let notesList = new NotesList()
      data.forEach(
        noteItem => {
          notesList.addNote(noteItem.title, noteItem.body, noteItem.id)
      })
      $( "#notes-list" ).html(notesList.renderShortNotesList());
    }


    function selectingANote(){
      $('ul#notes-list').on("click",".note", function(e){
        e.preventDefault()
         if (e.target === e.currentTarget){
           return;
         }
        let idizzle = parseInt(e.target.dataset.id)
        adapter.getOneNote(idizzle, successCallbackGetWholeNote)
      })
    }

    function successCallbackGetWholeNote(data){
      let noteList = new NotesList()
      $( "#whole-notes" ).html(noteList.renderWholeNote(data));
    }


    function editEventListener(){
      $('#edit-note').on("submit", function(e){
        debugger
        e.preventDefault()
        alert("I've been clicked!")
      })
    }

    // function editNote() {
    //   $('somewhere').on("submit", function(e) {
    //     e.preventDefault()
    //     let noteTitle = $('somewhere').val()
    //     let noteBody = $('somewhere').val()
    //     let newObj = {
    //                   user_id: 1,
    //                   title: noteTitle,
    //                   body: noteBody
    //                   }
    //     adapter.editNote(ID#, newObj, successCallbackPatch)
    //     // then render whole note or something like that
    //
    //     //need to get a working edit button somehow
    //   })}
