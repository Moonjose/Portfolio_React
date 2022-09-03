import React from 'react';

function NavbarLinkButton({ url, children }) {
  return (
    <div
      onClick={() => {
        window.location.href = url;
      }}
    >
      {children}
    </div>
  );
}

export default NavbarLinkButton;
