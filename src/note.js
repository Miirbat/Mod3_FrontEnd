class Note {
  constructor(title, body, id) {
     this.title = title
     this.body = body
     this.id = id
   }

   renderShortNote() {
     return(
       `<a class="item note">
        <li data-id=${this.id}>
        ${this.title}:<br>
        ${this.body.slice(0,30)}...
       </li>
       </a>`
        )
      }

    // renderWholeNote() {
    //   return(
    //    `<a class="whole-note">
    //      <b class="note-title" font size="8">${this.title}:</b><br>
    //     <span class="note-body">${this.body}</span><br><br>
    //     <input type="submit" name="edit" id='edit-note' value="Edit"></input>
    //     </a>
    //     `
    //      )
    //  }

}
