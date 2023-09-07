import './App.css';
import ResourceType from './ResourceType';
import { CallbackUse } from './callback/CallbackUse';
import ContextConsumer from './context/ContextConsumer';
import {ThemeProvider} from './context/ThemeContext'
import { CustomUse } from './custom/CustomUse';
import { DeferredValueUse } from './deferred/DeferredValueUse';
import { LayoutEffectUse } from './layoutEffect/LayoutEffectUse';
import { MemoUse } from './memo/MemoUse';
import { ReducerUse } from './reducer/ReducerUse';
import { RefUse } from './refs/RefUse';
import { TransitionUse } from './transition/TransitionUse';

function App() {

  return (
    <div className="App" style={{padding: '100px'}}>
      {/* <ResourceType />
      <RefUse /> 
      <ThemeProvider >
        <ContextConsumer />
        <MemoUse />
        <CallbackUse />
    </ThemeProvider>
    <ReducerUse />
    <TransitionUse />
    <DeferredValueUse /> */}
    {/* <LayoutEffectUse /> */}
    <CustomUse />
    </div>
  );
}

export default App;
