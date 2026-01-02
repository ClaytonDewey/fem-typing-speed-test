import { Dropdown } from '../dropdown';
import { Button } from '../';
import { Icon } from '../../svg';
import { useTypingStore } from '../../store/useTypingStore';

const TestHeader = () => {
  const { difficulty, mode, setDifficulty, setMode } = useTypingStore();

  const handleDifficultyChange = (level: 'Easy' | 'Medium' | 'Hard') => {
    setDifficulty(level);
  };

  const handleModeChange = (selectedMode: 'Timed' | 'Passage') => {
    setMode(selectedMode);
  };

  console.log(mode);
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
                {difficulty}
                <Icon name='down-arrow' />
              </>
            }
            content={({ closeDropdown }) => (
              <>
                <div className='dropdown__settings'>
                  <Button
                    type='button'
                    className={`btn btn-select ${
                      difficulty === 'Easy' ? 'active' : ''
                    }`}
                    onClick={() => {
                      handleDifficultyChange('Easy');
                      closeDropdown();
                    }}>
                    Easy
                  </Button>
                  <Button
                    type='button'
                    className={`btn btn-select ${
                      difficulty === 'Medium' ? 'active' : ''
                    }`}
                    onClick={() => {
                      handleDifficultyChange('Medium');
                      closeDropdown();
                    }}>
                    Medium
                  </Button>
                  <Button
                    type='button'
                    className={`btn btn-select ${
                      difficulty === 'Hard' ? 'active' : ''
                    }`}
                    onClick={() => {
                      handleDifficultyChange('Hard');
                      closeDropdown();
                    }}>
                    Hard
                  </Button>
                </div>
              </>
            )}
          />
        </div>
        <div className='item'>
          <Dropdown
            buttonText={
              <>
                {mode}
                <Icon name='down-arrow' />
              </>
            }
            content={({ closeDropdown }) => (
              <>
                <div className='dropdown__settings'>
                  <Button
                    type='button'
                    className={`btn btn-select ${
                      mode === 'Timed' ? 'active' : ''
                    }`}
                    onClick={() => {
                      handleModeChange('Timed');
                      closeDropdown();
                    }}>
                    Timed (60s)
                  </Button>
                  <Button
                    type='button'
                    className={`btn btn-select ${
                      mode === 'Passage' ? 'active' : ''
                    }`}
                    onClick={() => {
                      handleModeChange('Passage');
                      closeDropdown();
                    }}>
                    Passage
                  </Button>
                </div>
              </>
            )}
          />
        </div>
      </div>
    </header>
  );
};
export default TestHeader;
