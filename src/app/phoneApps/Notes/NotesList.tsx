import './NotesList.css';
import SafeArea from '../../structural/SafeArea/SafeArea';
import { useNavigate } from 'react-router-dom';
import BottomBar from '../../structural/BottomBar/BottomBar';
import HomeButton from '../../structural/HomeButton/HomeButton';
import createIcon from 'assets/images/system-icons/create_note.png';
import searchIcon from 'assets/images/system-icons/search.png';
import NoteListItem from './NoteListItem';
import { Destination } from 'app/AppRoute';
import { Note } from './Note';

const NotesList = ({ notes, onSelect }: {
  notes: ReadonlyArray<Note>;
  onSelect?: (id: Note['id']) => void;
}) => {
  const navigate = useNavigate();

  return (
    <div className='notes'>
      <SafeArea>
        <p className='title'>Notes</p>

        <div className='search'>
          <img
            alt='Create Note'
            src={searchIcon}
            height={12}
            width={12}
            className='search-icon'
          />
          <input className='search-input' placeholder='Search'></input>
        </div>

        <div className='list'>
          {notes.map(note => (
            <NoteListItem key={note.id} note={note} onClick={() => onSelect?.(note.id)} />
          ))}
        </div>
      </SafeArea>

      <BottomBar>
        <span className='notes-count'>{notes.length || 'No'} Notes</span>
        <img
          alt='Create Note'
          src={createIcon}
          height={15}
          width={15}
          className='create-icon'
          onClick={() => navigate(Destination.NOTE_DETAIL_NEW)}
        />
      </BottomBar>

      <HomeButton />
    </div>
  );
};

export default NotesList;
