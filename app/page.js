import '../styles/globals.css';
import Navbar from "../components/Navbar";
import Home from '@/pages/Home';
import OurValues from '@/pages/OurValues';
import Productpage from '@/pages/Productpage';


export default function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <OurValues/>
      <Productpage/>
    </>
  );
}
