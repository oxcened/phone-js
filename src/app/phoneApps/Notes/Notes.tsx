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

  const onNew = (note: Note) => {
    setNotes(notes => sortNotes([...notes, note]));
    setSelectedId(note.id);
    navigate(note.id, { replace: true });
  };

  const onEdit = (editedNote: Note) => setNotes(notes => {
    return sortNotes(notes.map(note => {
      if (note.id === editedNote.id) return editedNote;
      else return note;
    }));
  });

  const onSelect = (id: Note['id']) => {
    setSelectedId(id);
    navigate(id);
  };

  const onDelete = (id: Note['id']) => {
    setNotes(notes => {
      return sortNotes([...notes].filter(note => note.id !== id));
    });
  };

  return (
    <Routes>
      <Route index element={<NotesList notes={notes} onSelect={onSelect} onDelete={onDelete} />} />
      <Route path='new' element={<NoteDetail onDone={onNew} />} />
      <Route path=':id' element={<NoteDetail note={selectedNote} onDone={onEdit} />} />
    </Routes>
  );
};

export default Notes;
