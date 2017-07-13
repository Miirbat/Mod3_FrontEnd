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
    return(
     `<a class="whole-note">
       <b class="note-title" font size="8">${data.title}</b> <br>
      <span class="note-body">${data.body}</span> <br><br>
      <input type="submit" name="edit" id='edit-note' value="Edit"></input>
      </a>`
    )
   }

  //  renderEditNote(data){
  //    return
  //    `<form id="edit-note">
  //      Your Title: <input type="text" id="noteTitle">${data.title}</input></br>
  //    </form>
  //    <textarea id="text-area" rows="12" cols="60">
  //      ${data.body}
  //    </textarea><br>
  //    <input type="submit" id="submit-changes" value="Save Changes"> `
  //  }

  }
