import {Editor} from '@monaco-editor/react'
import './App.css'

function App(){
  return (
    <main className=" flex h-screen bg-gray-950 w-full gap-4 p-4">
      <aside className="h-full w-2/5 bg-amber-50 rounded-lg">
      </aside>
      <section className="w-3/4 bg-neutral-800 rounded-lg overflow-hidden">
        <Editor
        height="100%" defaultLanguage="javascript" defaultValue="//comment" theme="vs-dark"
        />
          
      </section>
    </main>
  )
}


export default App