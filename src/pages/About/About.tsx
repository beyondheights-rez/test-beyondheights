import React, { useEffect } from 'react';
import ContentRequired from '../../components/common/ContentRequired';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <ContentRequired category="ABOUT US" title="About Us" />;
};

export default About;
