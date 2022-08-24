import { AppRoute } from '../../core/models/AppRoute';
import './NoteListItem.css';
import { useNavigate } from 'react-router-dom';

const NoteListItem = () => {
  const navigate = useNavigate();

  return (
    <div className='note' onClick={() => navigate(AppRoute.NOTE_DETAIL_EDIT)}>
      <div className='content'>
        <p className='title'>Titolo</p>
        <p className='description'>Descrizione</p>
      </div>
      <div className='divider' />
    </div>
  );
};

export default NoteListItem;
