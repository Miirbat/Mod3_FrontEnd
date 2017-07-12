class Note {
  constructor(title, body) {
     this.title = title
     this.body = body
   }

   renderShortNote() {
     return(
      `<a class="item">
      <li class="note">
         <span class="note-title">${this.title}:</span><br>
         <span class="note-body">${this.body.slice(0,30)}...</span>
         </li></a>`
         )
       }
}
