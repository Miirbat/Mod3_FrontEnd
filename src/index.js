// const notesList = new NotesList()
const adapter = new Adapter()

$(document).ready(
  function(){
  $(".new-note").hide()
  $("#editing-notes").hide()
  newNoteButtonListener()
  createNote()
  adapter.getNotes(successCallbackGet)
  selectingANote()
  editEventListener()
  sendChangesToDB()
})



function createNote() {
  $('#create-note').on("submit", function(e) {
    e.preventDefault()
    let noteTitle = $('#create-note #noteTitle').val()
    let noteBody = $('#create-note #noteBody').val()
    adapter.postNote(noteTitle, noteBody, successCallbackPost)
    $('#create-note #noteTitle').val('')
    $('#create-note #noteBody').val('')
    $(".new-note").hide()

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
        //  $( "#add-edit-button" ).remove('<button type="button" id="edit-a-note">Edit</button>')
        let idizzle = parseInt(e.target.dataset.id)
        adapter.getOneNote(idizzle, successCallbackGetWholeNote)
      })
    }


    function successCallbackGetWholeNote(data){
      let noteList = new NotesList()
      $( "#whole-notes" ).html(noteList.renderWholeNote(data))
      $( "#editing-notes" ).html(noteList.renderEditNote(data))
    }


    function editEventListener(){
      $('#whole-notes').on("click",'#edit-note', function(e){
        e.preventDefault()
        $("#editing-notes").show()
      })
    }

    function sendChangesToDB(){
      let noteList = new NotesList()
      $("#editing-notes").on("click","#edit-note", function(e){
        e.preventDefault()
        let idizzle = parseInt(e.target.dataset.id)
        let noteTitle = $('#edit-note #noteTitle').val()
        let noteBody = $('#myTextArea').val()
        let newObj = {
                      user_id: 1,
                      title: noteTitle,
                      body: noteBody
                    }
        adapter.editNote(idizzle, newObj, editSuccessCallback)
      })
    }

    function editSuccessCallback(data){
      alert("yeah!!")
    }


    function newNoteButtonListener(){
      $('#new-note-btn').on("click", function(e){
        e.preventDefault();
        $(".new-note").show()
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
