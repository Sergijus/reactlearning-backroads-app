import { servicesData } from '../data';
import Service from './Service';
import Title from './Title';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" titleSpan="services" />
      <div className="section-center services-center">
        {servicesData.map((service) => {
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
};
export default Services;
