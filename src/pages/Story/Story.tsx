import React, { useEffect } from 'react';
import ContentRequired from '../../components/common/ContentRequired';

const Story: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <ContentRequired category="STORIES" title="Stories" />;
};

export default Story;
