import { Faq } from './components/layout/sections/faq/Faq';
import HeroSection from './components/layout/sections/hero/HeroSection';
import { Observation } from './components/layout/sections/observation/Observation';
import TrustedPartners from './components/layout/sections/partners/TrustedPartners';
import { Solutions } from './components/layout/sections/solutions/Solutions';
import { Support } from './components/layout/sections/support/Support';
import Testimonials from './components/layout/sections/testimonials/Testimonials';
import { WhoAreWe } from './components/layout/sections/whoArewe/WhoAreWe';

export default function HomePage() {
  return (
    <>
      <div className='bg-primary p-6 md:p-0'>
        <HeroSection />
        <TrustedPartners />
        <Observation />
      </div>
      <Solutions />
      <Testimonials />
      <Support />
      <WhoAreWe />
      <Faq />
    </>
  );
}
