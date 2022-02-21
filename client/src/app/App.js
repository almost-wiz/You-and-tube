import { Navbar } from './components/Navbar'
import { VideosSidebar } from './components/sidebars/VideosSidebar'
import { ChatCreateSidebar } from './components/sidebars/ChatCreateSidebar'
import { ChatsSidebar } from './components/sidebars/ChatsSidebar'
import { SettingsSidebar } from './components/sidebars/SettingsSidebar'
import { VideosContent } from './components/contents/VideosContent'
import { MessagesContent } from './components/contents/MessagesContent'
import { NoContent } from './components/contents/NoContent'
import { PageTemplate } from './components/PageTemplate'
import { Err404 } from './components/errors/Err404'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="layout overflow-hidden">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/videos/" element={<PageTemplate Sidebar={VideosSidebar} Content={VideosContent} />} />
            <Route exact path="/start-chat/" element={<PageTemplate Sidebar={ChatCreateSidebar} Content={NoContent} />} />
            <Route exact path="/chats/" element={<PageTemplate Sidebar={ChatsSidebar} Content={MessagesContent} />} />
            <Route exact path="/settings/" element={<PageTemplate Sidebar={SettingsSidebar} Content={NoContent} />} />
            <Route path="*" element={<Err404 />}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
