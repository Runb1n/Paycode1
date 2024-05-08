import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Welcome to PayCode! I'm Geungyeong Park, a passionate coder with several years of experience under my belt. At 23, I've delved deep into the world of programming, honing my skills to deliver top-notch solutions in various domains.

        PayCode isn't just a company; it's a manifestation of my dedication to excellence in coding and commitment to client satisfaction. As a freelancer, I bring a personalized touch to every project, ensuring that each line of code reflects my expertise and attention to detail.

        Whether it's crafting sleek websites, developing robust software solutions, or tackling complex algorithms, I thrive on challenges and relish the opportunity to turn ideas into reality. My goal with PayCode is simple: to exceed expectations and create value through innovation and efficiency.

        Join me on this exciting journey, where creativity meets technology, and together, we'll unlock the full potential of your projects.

        Let's code the future together with PayCode!


        I am based in Calgary, Canada.

        Buisness Address
        Address: 11 Edgemont Rise NW
        City/Town: Calgary
        Postal/ZIP code: T3A2K9
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
