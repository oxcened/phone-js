import './NoteListItem.css';
import { Note } from './Note';
import { useMemo } from 'react';

const NoteListItem = ({ note: { content, editedAt }, onClick }: {
  note: Note;
  onClick?: () => void;
}) => {
  const dateStr = useMemo(() => {
    const date = new Date(editedAt);
    const now = new Date();
    const yearMatch = date.getFullYear() === now.getFullYear();
    const monthMatch = date.getMonth() && now.getMonth();
    const diff = now.getTime() - date.getTime();

    if (yearMatch && monthMatch && date.getDate() === now.getDate()) {
      return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
    }

    if (diff > (24 * 60 * 60 * 1000) && diff < (48 * 60 * 60 * 1000)) {
      return 'Yesterday';
    }

    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear().toString().slice(2, 4)}`;
  }, [editedAt]);

  return (
    <div className='note' onClick={onClick}>
      <div className='content'>
        <p className='title'>{content.slice(0, 10) || 'New Note'}</p>
        <p className='description'>
          {dateStr}&nbsp;
          {content.slice(10, content.length) || 'No additional text'}
        </p>
      </div>
      <div className='divider' />
    </div>
  );
};

export default NoteListItem;
