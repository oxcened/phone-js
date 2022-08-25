import './NoteListItem.css';
import { Note } from './Note';

const NoteListItem = ({ note: { content }, onClick }: {
  note: Note;
  onClick?: () => void;
}) => {
  return (
    <div className='note' onClick={onClick}>
      <div className='content'>
        <p className='title'>{content.slice(0, 10) || 'New Note'}</p>
        <p className='description'>{content.slice(10, content.length) || 'No additional text'}</p>
      </div>
      <div className='divider' />
    </div>
  );
};

export default NoteListItem;
