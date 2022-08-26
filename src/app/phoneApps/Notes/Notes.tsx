import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useMemo, useState } from 'react';
import { Note } from './Note';

const NotesList = React.lazy(() => import('./NotesList'));
const NoteDetail = React.lazy(() => import('./NoteDetail'));
const sortNotes = (notes: Note[]) => notes.sort((a, b) => b.editedAt - a.editedAt);

const Notes = () => {
  const [notes, setNotes] = useState<ReadonlyArray<Note>>([]);
  const [selectedId, setSelectedId] = useState<Note['id']>();
  const navigate = useNavigate();

  const selectedNote = useMemo(
    () => notes.find(note => note.id === selectedId),
    [notes, selectedId]
  );

  const setOrderedNotes = (notes: Note[]) => setNotes(sortNotes([...notes]));

  const onNew = (note: Note) => {
    setOrderedNotes([...notes, note]);
    setSelectedId(note.id);
  };

  const onEdit = (editedNote: Note) => setOrderedNotes(notes.map(note => {
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
      <Route path='new' element={<NoteDetail onDone={onNew} />} />
      <Route path=':id' element={<NoteDetail note={selectedNote} onDone={onEdit} />} />
    </Routes>
  );
};

export default Notes;
