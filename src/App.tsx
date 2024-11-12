import { Background } from './components/Background';
import { Header } from './components/Header';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Publications } from './components/Publications';

function App() {
  return (
    <>
      <Background />
      <Header />
      <main className="pt-16">
        <Experience />
        <Skills />
        <Education />
        <Publications />
      </main>
    </>
  );
}

export default App;