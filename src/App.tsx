import { Button } from './components';
import { Icon } from './svg';

const App = () => {
  return (
    <div>
      <h1 className='text-preset-1'>Typing Speed Test</h1>
      <Icon name='logo' />
      <br />
      <Button type='button' className='btn btn-primary'>
        Primary Button
      </Button>
      <br />
      <Button type='button' className='btn btn-secondary'>
        Secondary Button <Icon name='restart' />
      </Button>
      <br />
      <Button type='button' className='btn btn-select'>
        Button
      </Button>
    </div>
  );
};
export default App;
