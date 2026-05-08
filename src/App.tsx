import Cover from './components/Cover'
import Nav from './components/Nav'
import Song from './components/Song'
import Credits from './components/Credits'
import { SONGS } from './data/songs'

export default function App() {
  return (
    <>
      <Cover />
      <Nav />
      {SONGS.map((song) => (
        <Song key={song.id} song={song} />
      ))}
      <Credits />
    </>
  )
}
