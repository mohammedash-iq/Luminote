import NoteList from "./notelist";

function Notes() {
  return(
    <>
    <div><textarea name="notecontent" id="note-content-area"></textarea></div>
    <button id="clear">clear</button>
    <button id="add" onClick={updateNoteList}>add note</button>
    </>
  );
}
function updateNoteList(){
NoteList("hello")
}
export default Notes;