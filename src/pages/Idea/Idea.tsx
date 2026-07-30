import React, { useEffect } from 'react';
import ContentRequired from '../../components/common/ContentRequired';

const Idea: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <ContentRequired category="THE IDEA" title="The Idea" />;
};

export default Idea;
