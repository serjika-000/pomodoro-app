import { ModeSelector } from './components/ModeSelector';
import { Settings } from './components/Settings';
import { Timer } from './components/Timer/Timer';
import { Wrapper } from './components/Wrapper';

function App() {

  return (
    <Wrapper>
      <ModeSelector/>
      <Timer/>
      <Settings/>
    </Wrapper>
  );
}

export default App;
