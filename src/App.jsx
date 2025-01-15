import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const menu = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FAN', 'NEWS', 'SHOP']

const App = () => {
  return (
    <>
      <Header menu={menu} />
      <Main />
      <Footer />
    </>
  )
}
export default App