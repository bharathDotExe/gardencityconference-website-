import React from 'react';

export const FacebookIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.802 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z" fill="#1877F2"/>
    <path d="M19.681 14.707L20.148 11.085H16.561V8.772C16.561 7.724 16.852 7.009 18.356 7.009L20.274 7.008V3.768C19.942 3.724 18.802 3.625 17.479 3.625C14.713 3.625 12.82 5.313 12.82 8.413V11.084H9.692V14.706H12.82V24H16.561V14.707H19.681Z" fill="white"/>
  </svg>
);

export const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5.333" fill="url(#paint0_radial_16_29)"/>
    <path d="M16.5 1.5H7.5C4.18629 1.5 1.5 4.18629 1.5 7.5V16.5C1.5 19.8137 4.18629 22.5 7.5 22.5H16.5C19.8137 22.5 22.5 19.8137 22.5 16.5V7.5C22.5 4.18629 19.8137 1.5 16.5 1.5ZM20.625 16.5C20.625 18.7781 18.7781 20.625 16.5 20.625H7.5C5.22187 20.625 3.375 18.7781 3.375 16.5V7.5C3.375 5.22187 5.22187 3.375 7.5 3.375H16.5C18.7781 3.375 20.625 5.22187 20.625 7.5V16.5Z" fill="white"/>
    <path d="M12 5.8125C8.58281 5.8125 5.8125 8.58281 5.8125 12C5.8125 15.4172 8.58281 18.1875 12 18.1875C15.4172 18.1875 18.1875 15.4172 18.1875 12C18.1875 8.58281 15.4172 5.8125 12 5.8125ZM12 16.3125C9.62344 16.3125 7.6875 14.3766 7.6875 12C7.6875 9.62344 9.62344 7.6875 12 7.6875C14.3766 7.6875 16.3125 9.62344 16.3125 12C16.3125 14.3766 14.3766 16.3125 12 16.3125Z" fill="white"/>
    <circle cx="17.4375" cy="6.5625" r="1.125" fill="white"/>
    <defs>
      <radialGradient id="paint0_radial_16_29" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(3 21) rotate(-45) scale(25.4558)">
        <stop stopColor="#FEE411"/>
        <stop offset="0.0526" stopColor="#FEDB16"/>
        <stop offset="0.1382" stopColor="#FEC125"/>
        <stop offset="0.2481" stopColor="#FE983D"/>
        <stop offset="0.3764" stopColor="#FE5F5E"/>
        <stop offset="0.5" stopColor="#E53688"/>
        <stop offset="0.75" stopColor="#C22DBA"/>
        <stop offset="1" stopColor="#515ECF"/>
      </radialGradient>
    </defs>
  </svg>
);

export const XIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="black"/>
    <path d="M18.2439 6H20.7259L15.3049 12.196L21.6839 20.618H16.6909L12.7819 15.508L8.30986 20.618H5.82686L11.5999 14.021L5.53986 6H10.6589L14.2019 10.662L18.2439 6ZM17.3759 19.132H18.7509L9.76186 7.408H8.28386L17.3759 19.132Z" fill="white"/>
  </svg>
);

export const LinkedinIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#0A66C2"/>
    <path d="M7.484 20H4.076V9.01H7.484V20ZM5.78 7.502C4.69 7.502 3.805 6.611 3.805 5.514C3.805 4.418 4.69 3.527 5.78 3.527C6.871 3.527 7.756 4.418 7.756 5.514C7.756 6.611 6.871 7.502 5.78 7.502ZM20 20H16.592V14.643C16.592 13.366 16.568 11.725 14.814 11.725C13.036 11.725 12.763 13.111 12.763 14.551V20H9.356V9.01H12.627V10.511H12.673C13.128 9.652 14.234 8.749 15.877 8.749C19.305 8.749 19.999 11.006 19.999 13.918V20H20Z" fill="white"/>
  </svg>
);

export const YoutubeIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5.333" fill="#FF0000"/>
    <path d="M9.545 15.568l6.273-3.621-6.273-3.62v7.241z" fill="white"/>
  </svg>
);
