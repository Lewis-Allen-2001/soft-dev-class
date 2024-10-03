import './App.css'
import Timer from './components/Timer';
import TimerDirty from './components/TimerDirty'
import TimerClean from './components/TimerClean'

export default function App() {

  return (
    <div>
    <Timer/>
    <TimerDirty/>
    <TimerClean/>
    <p>Now they both clean hehe</p>
    <img src = "https://c.tadst.com/gfx/300x168/fb-stopwatch2.png?1"/>
    </div>
  )
}


