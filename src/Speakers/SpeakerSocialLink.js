import React from 'react';

import './SpeakerSocialLink.scss';

const getLinkType = (url) => {
  if (url.includes('github')) {
    return 'github';
  } if (url.includes('twitter')) {
    return 'twitter';
  } if (url.includes('linkedin')) {
    return 'linkedin';
  } if (url.includes('scholar.google')) {
    return 'googleScholar';
  } if (url.includes('facebook')) {
    return 'facebook';
  }

  return '';
};

const SpeakerSocialLink = ({ url }) => {
  const linkType = getLinkType(url);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`SpeakerSocialLink -${linkType}`}
    >
      <div className="SpeakerSocialLinkIcon" />
    </a>
  );
};

export default SpeakerSocialLink;
