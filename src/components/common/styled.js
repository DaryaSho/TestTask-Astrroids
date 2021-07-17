// import styled from 'styled-components';

export const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  };
  
  export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    tabletLandscape: `(max-height: ${size.tablet}) and (orientation: landscape)`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
    mobileLLandscape: `(max-height: ${size.mobileL}) and (orientation: landscape)`,
    mobileMLandscape: `(max-height: ${size.mobileM}) and (orientation: landscape)`,
    mobileSLandscape: `(max-height: ${size.mobileS}) and (orientation: landscape)`,
    touchScreen: `(pointer: coarse)`
  };

  


