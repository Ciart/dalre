import { CanvasPanel } from './components/canvas-panel';
import { SplitView } from './components/split-view';
import { SplitViewItem } from './components/split-view-item';
import { StatusBar } from './status-bar';
import { ToolBar } from './tool-bar';

export function App() {
  return (
    <SplitView direction="column">
      <SplitViewItem isExpanded>
        <SplitView direction="row">
          <ToolBar />
          <SplitViewItem isExpanded>
            <CanvasPanel />
          </SplitViewItem>
        </SplitView>
      </SplitViewItem>
      <StatusBar />
    </SplitView>
  );
}

export default App;
