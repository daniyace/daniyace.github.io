import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <span className='navbar-brand'>React apps</span>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  target='_blank'
                  aria-current='page'
                  rel='noreferrer'
                  href='https://daniyace.github.io/react-minesweeper/'
                >
                  Minesweeper
                </a>
              </li>
              <li classNameName='nav-item'>
                <a
                  className='nav-link'
                  target='_blank'
                  aria-current='page'
                  rel='noreferrer'
                  href='https://daniyace.github.io/sudoku/'
                >
                  Sudoku
                </a>
              </li>
              <li classNameName='nav-item'>
                <a
                  className='nav-link'
                  target='_blank'
                  aria-current='page'
                  rel='noreferrer'
                  href='https://daniyace.github.io/gato/'
                >
                  Tic tac toe
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  target='_blank'
                  aria-current='page'
                  rel='noreferrer'
                  href='https://daniyace.github.io/dots/'
                >
                  Dots and boxes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
