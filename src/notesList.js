class NotesList {
  constructor(data) {
      this.notes = []
  }

  addNote(title, body, id) {
    const note = new Note(title, body, id)
    this.notes.push(note)
  }

  renderShortNotesList() {
    return this.notes.map(note => note.renderShortNote())
  }

  renderWholeNote(data) {
    return(`
        <a class="whole-note" data-id=${data.id} >
            <b id="note-title">${data.title}</b><br>
            <span id="note-body">${data.body}</span><br>
            <input type="submit" id="edit-note" data-id=${data.id} value="Edit">
        </a>
      `)
     }

     renderEditButton(){
       return(`<button type="button" id="edit-a-note">Edit</button>`)
     }


   renderEditNote(data){
     return(
     `<form id="edit-this-note" data-id=${data.id}>
       <input type="text" id="noteTitle" value=${data.title}></input></br>
     </form>
     <textarea id="myTextArea" rows="5" cols="40">
       ${data.body}
     </textarea><br>
     <input type="submit" id="send-edited-note" data-id=${data.id} value="Save Changes">
     `)
   }

  }
