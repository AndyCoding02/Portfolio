import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
    background-image: linear-gradient(180deg, #1f2b85 0%, #9dcbe7 100%);
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;