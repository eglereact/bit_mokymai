import "./App.css";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Section from "./Components/Section";

function App() {
  return (
    <>
      <Header />
      <Section
        direction="left"
        title="Enjoy on your TV"
        text="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
      />
      <Section
        direction="right"
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        title="Download your shows to watch offline"
        text="Save your favorites easily and always have something to watch."
      />
      <Section
        direction="left"
        title="Watch everywhere"
        text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
      />
      <Section
        direction="right"
        img="https://occ-0-8301-1500.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
        title="Create profiles for kids"
        text="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
      />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
