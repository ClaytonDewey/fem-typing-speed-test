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
        <div className='item'>Difficulty</div>
        <div className='item'>Mode</div>
      </div>
    </header>
  );
};
export default TestHeader;
