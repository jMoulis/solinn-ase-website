import HeroSection from './components/layout/Main/sections/hero/HeroSection';
import { Observation } from './components/layout/Main/sections/observation/Observation';
import TrustedPartners from './components/layout/Main/sections/partners/TrustedPartners';
import { Solutions } from './components/layout/Main/sections/solutions/Solutions';
import Testimonials from './components/layout/Main/sections/testimonials/Testimonials';

export default function HomePage() {
  return (
    <>
      <div className='bg-primary'>
        <HeroSection />
        <TrustedPartners />
        <Observation />
      </div>
      <Solutions />
      <Testimonials />
    </>
  );
}
