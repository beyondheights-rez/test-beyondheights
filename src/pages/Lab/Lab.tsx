import React, { useEffect } from 'react';
import ContentRequired from '../../components/common/ContentRequired';

const Lab: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <ContentRequired category="OUR WORK" title="Our Work" />;
};

export default Lab;
