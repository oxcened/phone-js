import './NotesList.css';
import SafeArea from '../../structural/SafeArea/SafeArea';
import { useNavigate } from 'react-router-dom';
import BottomBar from '../../structural/BottomBar/BottomBar';
import HomeButton from '../../structural/HomeButton/HomeButton';
import createIcon from 'assets/images/system-icons/create_note.png';
import searchIcon from 'assets/images/system-icons/search.png';
import NoteRow from './NoteRow';
import { Note } from './Note';
import { useCallback, useMemo, useState } from 'react';
import PhoneAppScreen from '../../structural/PhoneAppScreen/PhoneAppScreen';

const NotesList = ({ notes, onSelect, onDelete }: {
  notes: ReadonlyArray<Note>;
  onSelect?: (id: Note['id']) => void;
  onDelete?: (id: Note['id']) => void;
}) => {
  const navigate = useNavigate();
  const [actionsOpenIndex, setActionsOpenIndex] = useState<string>();
  const [search, setSearch] = useState<string>('');

  const filteredNotes = useMemo(() => {
    return notes.filter(note => note.content.match(search))
  }, [search, notes]);

  const getOpenActions = useCallback((id: Note['id']) => {
    return actionsOpenIndex === id;
  }, [actionsOpenIndex]);

  return (
    <div className='notes'>
      <PhoneAppScreen>
        <p className='app-title'>Notes</p>

        <div className='search'>
          <img
            alt='Create Note'
            src={searchIcon}
            height={12}
            width={12}
            className='search-icon'
          />
          <input
            className='search-input'
            placeholder='Search'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className='list'>
          {filteredNotes.map(note => (
            <NoteRow
              key={note.id}
              note={note}
              isOpenActions={getOpenActions(note.id)}
              onClick={() => onSelect?.(note.id)}
              onDelete={() => onDelete?.(note.id)}
              onOpenActions={() => setActionsOpenIndex(note.id)}
            />
          ))}
        </div>
      </PhoneAppScreen>

      <BottomBar>
        <span className='notes-count'>{notes.length || 'No'} Notes</span>
        <img
          alt='Create Note'
          title='Create Note'
          src={createIcon}
          height={15}
          width={15}
          className='create-icon'
          onClick={() => navigate('new')}
        />
      </BottomBar>
    </div>
  );
};

export default NotesList;
