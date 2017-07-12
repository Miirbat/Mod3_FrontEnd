class NotesList {
  constructor(data) {
      this.notes = []
  }

  addNote(title, body) {
    const note = new Note(title, body)
    this.notes.push(note)
  }

  renderNotesList() {
    return this.notes.map(note => note.renderShortNote())
  }

  renderSelectedNote() {
    return (this.notes[this.notes.length-1]).renderNote()
  }
}
