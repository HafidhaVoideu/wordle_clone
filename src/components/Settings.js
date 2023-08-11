import React from 'react';
import { useGlobalContext } from '../context';
import { CloseButton } from './CloseButton';

export const Settings = () => {
  const { isSettingsOpen, closeSettings } = useGlobalContext();

  var root = document.querySelector(':root');
  var rootStyles = getComputedStyle(root);
  var colorPrimary = rootStyles.getPropertyValue('--color-primary');
  // rootStyles.setPropertyValue('--color-primary', 'red');

  // console.log('colorprimary: ', colorPrimary);

  const ChangeTheme = () => {
    console.log('you switch has been clicked', rootStyles);
    root.style['--color-font'] = '#0000';
  };

  if (isSettingsOpen)
    return (
      <article className='settingPanel  example'>
        <CloseButton closeFunction={closeSettings} />

        <h1 className='settingPanel__title'>settings</h1>

        <section className='settingPanel__sets'>
          <div className='settingPanel__sets__slide'>
            <div>
              <h1>Dark Theme</h1>
            </div>

            <label onChange={() => ChangeTheme()} className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
          </div>

          <div className='settingPanel__sets__slide'>
            <div>
              <h1>High Contrast Mode</h1>
              <p>For improved color vision</p>
            </div>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
          </div>

          <div className='settingPanel__sets__slide'>
            <div>
              <h1>Hard Mode</h1>
              <p>Any revealed hints must be used in subsequent guesses</p>
            </div>

            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
          </div>

          <div className='settingPanel__sets__normal'>
            <h1>Feedback</h1>
            <p>Email</p>
          </div>
          <div className='settingPanel__sets__normal'>
            <h1>Community</h1>
            <p>Twitter</p>
          </div>
          <div className='settingPanel__sets__normal'>
            <h1>Questions?</h1>
            <p>FAQ</p>
          </div>
        </section>

        <footer className='settingPanel__footer'>
          <p>© 2022 The New York Times Company #496</p>
          <span>#496</span>
        </footer>
      </article>
    );
};
