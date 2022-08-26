import './NoteListItem.css';
import { Note } from './Note';
import { useEffect, useMemo, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import deleteIcon from 'assets/images/system-icons/delete_row.png';
import { Swiper as SwiperClass } from 'swiper/types';

const NoteListItem = (
  {
    note: { content, editedAt },
    isOpenActions,
    onClick,
    onDelete,
    onOpenActions
  }: {
    note: Note;
    isOpenActions?: boolean;
    onClick?: () => void;
    onDelete?: () => void;
    onOpenActions?: () => void;
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
  const swiper = useRef<SwiperClass>();

  useEffect(() => {
    if (swiper.current && !isOpenActions) {
      swiper.current?.slideReset();
    }
  }, [isOpenActions]);

  return (
    <Swiper
      className='note'
      slidesPerView='auto'
      onSwiper={s => swiper.current = s}
      onReachEnd={onOpenActions}
    >
      <SwiperSlide>
        <div className='content' onClick={onClick}>
          <p className='title'>{content.slice(0, 10) || 'New Note'}</p>
          <p className='description'>
            {dateStr}&nbsp;
            {content.slice(10, content.length) || 'No additional text'}
          </p>
          <div className='divider' />
        </div>
      </SwiperSlide>
      <SwiperSlide className='delete-slide' onClick={onDelete}>
        <img
          src={deleteIcon}
          className='delete'
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default NoteListItem;
