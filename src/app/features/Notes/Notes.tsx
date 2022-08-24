import './Notes.css';
import SafeArea from '../SafeArea/SafeArea';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../core/models/AppRoute';
import BottomBar from '../BottomBar/BottomBar';
import HomeButton from '../HomeButton/HomeButton';
import createIcon from '../../../assets/images/system-icons/create_note.png';
import searchIcon from '../../../assets/images/system-icons/search.png';
import NoteListItem from './NoteListItem';

const Notes = () => {
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
          <NoteListItem />
          <NoteListItem />
          <NoteListItem />
          <NoteListItem />
        </div>
      </SafeArea>

      <BottomBar>
        <span className='notes-count'>4 Notes</span>
        <img
          alt='Create Note'
          src={createIcon}
          height={15}
          width={15}
          className='create-icon'
          onClick={() => navigate(AppRoute.NOTE_DETAIL_NEW)}
        />
      </BottomBar>

      <HomeButton />
    </div>
  );
};

export default Notes;
