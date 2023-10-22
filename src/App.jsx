import './App.css';
import Digit from './components/digit';

function App() {
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className='w-screen h-screen bg-black overflow-hidden flex items-center justify-center'>
      <div className='m-auto bg-gray-500 max-w-xl max-h-max p-3 flex items-center justify-center flex-col gap-2'>
        <div className='w-[512px] h-[90px] bg-white border rounded-md px-3 py-1'></div>
        <div className='flex justify-between w-full'>
          <div>
            <ul className='grid grid-cols-3 text-8xl'>
            {num.map((val)=> <Digit key={val} value={val} />)}
            </ul>
          </div>
          <div>1234567890</div>
        </div>
      </div>
    </div>
  );
}

export default App;
