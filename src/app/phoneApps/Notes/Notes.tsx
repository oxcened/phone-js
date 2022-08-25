import { Route, Routes, useNavigate } from 'react-router-dom';
import { AppRoute } from 'app/AppRoute';
import React, { useMemo, useState } from 'react';
import { Note } from './Note';

const NotesList = React.lazy(() => import('./NotesList'));
const NoteDetail = React.lazy(() => import('./NoteDetail'));

const Notes = () => {
  const [notes, setNotes] = useState<ReadonlyArray<Note>>([]);
  const [selectedId, setSelectedId] = useState<Note['id']>();
  const navigate = useNavigate();

  const selectedNote = useMemo(
    () => notes.find(note => note.id === selectedId),
    [notes, selectedId]
  );

  const onNew = (note: Note) => setNotes([...notes, note])
  const onEdit = (editedNote: Note) => setNotes(notes.map(note => {
    if (note.id === editedNote.id) return editedNote;
    else return note;
  }));

  const onSelect = (id: Note['id']) => {
    setSelectedId(id);
    navigate(id);
  };

  return (
    <Routes>
      <Route index element={<NotesList notes={notes} onSelect={onSelect} />} />
      <Route path={AppRoute.NOTE_DETAIL_NEW} element={<NoteDetail onDone={onNew} />} />
      <Route path={AppRoute.NOTE_DETAIL_EDIT} element={<NoteDetail note={selectedNote} onDone={onEdit} />} />
    </Routes>
  );
};

export default Notes;