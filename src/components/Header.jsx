import React from 'react';
import style from '../styles/Header.module.css';

function Header() {
  return (
    <header className='flex flex-col items-center justify-center'>
        <h1 className={style.container}>
            <span className={style.item}>Search.</span>
            <span className={style.item}>Enjoy.</span>
            <span className={style.item}>Share.</span>
        </h1>
    </header>
  )
}

export { Header }