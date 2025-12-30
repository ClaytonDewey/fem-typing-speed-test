import { Dropdown } from '../dropdown';
import { Icon } from '../../svg';

const TestHeader = () => {
  return (
    <header className='test__header'>
      <div className='test__results'>
        <div className='item text-preset-3'>
          WPM: <span className='text-preset-2'>0</span>
        </div>
        <div className='item text-preset-3'>
          Accuracy: <span className='text-preset-2'>100%</span>
        </div>
        <div className='item text-preset-3'>
          Time: <span className='text-preset-2'>0:60</span>
        </div>
      </div>
      <div className='test__settings'>
        <div className='item'>
          <Dropdown
            buttonText={
              <>
                Difficulty
                <Icon name='down-arrow' />
              </>
            }
            content={
              <>
                <div className='dropdown__settings'>
                  <div className='btn btn-select'>Easy</div>
                  <div className='btn btn-select'>Medium</div>
                  <div className='btn btn-select'>Hard</div>
                </div>
              </>
            }
          />
        </div>
        <div className='item'>
          <Dropdown
            buttonText={
              <>
                Mode
                <Icon name='down-arrow' />
              </>
            }
            content={
              <>
                <div className='dropdown__settings'>
                  <div className='btn btn-select'>Timed (60s)</div>
                  <div className='btn btn-select'>Passage</div>
                </div>
              </>
            }
          />
        </div>
      </div>
    </header>
  );
};
export default TestHeader;
