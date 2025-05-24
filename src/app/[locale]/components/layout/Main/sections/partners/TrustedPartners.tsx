import { Airbnb, Google, Microsoft, Walmart } from './Airbnb';

const TrustedPartners = () => {
  return (
    <section className='bg-primary flex justify-center space-x-16 items-center md:py-[60px] md:pb-[100px] md:px-[80px] px-[20px]'>
      <Airbnb />
      <Google />
      <Microsoft />
      <Walmart />
    </section>
  );
};
export default TrustedPartners;
