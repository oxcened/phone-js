import './NoteDetail.css';
import { useNavigate } from 'react-router-dom';
import { ChangeEventHandler, useEffect, useId, useRef, useState } from 'react';
import chevronLeft from '../../assets/chevron_left_notes.png';
import { Note } from '../../models/Note';
import { PhoneAppScreen } from '@phone-js/utils';

const NoteDetail = ({ note, onDone }: {
  note?: Note;
  onDone?: (note: Note) => void;
}) => {
  const isEdit = !!note
  const textarea = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const newId = useId();
  const [content, setContent] = useState(note?.content || '');
  const [showSubmit, setShowSubmit] = useState(false);

  useEffect(() => {
    if (note) {
      setContent(note.content);
    }
  }, [note]);

  const onSubmit = () => {
    const now = new Date().getTime();

    const newNote = {
      id: newId,
      createdAt: now,
      ...note ? note : {},
      content,
      editedAt: now
    };

    onDone?.(newNote);

    textarea.current?.blur();
    setShowSubmit(false);
  };

  const onTextareaChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className='note-detail'>
      <PhoneAppScreen>
        <div className='toolbar'>
          <div className='back' onClick={() => navigate(-1)}>
            <img
              src={chevronLeft}
              height={13}
              className='black'
              alt='Back to'
            />

            Notes
          </div>

          {showSubmit && (
            <span className='submit' onClick={onSubmit}>Done</span>
          )}
        </div>

        <textarea
          autoFocus={!isEdit}
          ref={textarea}
          value={content}
          onChange={onTextareaChange}
          onFocus={() => setShowSubmit(true)}
        >
        </textarea>
      </PhoneAppScreen>
    </div>
  );
};

export default NoteDetail;
