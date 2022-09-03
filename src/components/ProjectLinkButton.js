import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
function ProjectLinkButton({ url }) {
  return (
    <div
      style={{ marginTop: '30px' }}
      onClick={() => {
        window.location.href = url;
      }}
    >
      <GitHubIcon />
      <div className='artBgImage'></div>
    </div>
  );
}

export default ProjectLinkButton;
