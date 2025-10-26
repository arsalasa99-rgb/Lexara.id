
import React from 'react';

const createIcon = (path: React.ReactNode) => {
  const IconComponent: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      {path}
    </svg>
  );
  IconComponent.displayName = 'Icon';
  return IconComponent;
};

export const BookOpenIcon = createIcon(<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c3.95.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z" />);
export const LightbulbIcon = createIcon(<path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />);
export const CubeTransparentIcon = createIcon(<path fillRule="evenodd" d="M12 2l-5.5 3.18v6.36L12 14.72l5.5-3.18V5.18L12 2zm-4 4.04L12 8.82l4-2.78-4-2.22-4 2.22zm-.5 5.17l4.5 2.6v-5.2L7.5 9.21v2.92zm9 0v-2.92l-4.5 2.6v5.2l4.5-2.6z" clipRule="evenodd" />);
export const ChatBubbleLeftRightIcon = createIcon(<path fillRule="evenodd" d="M2 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8H4c-1.1 0-2-.9-2-2v-2zm13-4H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm-6 4H9c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1z" clipRule="evenodd" />);
export const ArrowLeftIcon = createIcon(<path fillRule="evenodd" d="M10.707 4.293a1 1 0 00-1.414 0l-6 6a1 1 0 000 1.414l6 6a1 1 0 001.414-1.414L5.414 12l5.293-5.293a1 1 0 000-1.414z" clipRule="evenodd" />);
export const ChevronDownIcon = createIcon(<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L12 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clipRule="evenodd" />);
export const XMarkIcon = createIcon(<path fillRule="evenodd" d="M6.707 5.293a1 1 0 011.414 0L12 10.586l3.879-3.88a1 1 0 111.414 1.415L13.414 12l3.879 3.879a1 1 0 01-1.414 1.414L12 13.415l-3.879 3.879a1 1 0 01-1.414-1.414L10.586 12 6.707 8.121a1 1 0 010-1.414z" clipRule="evenodd" />);
export const PaperAirplaneIcon = createIcon(<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />);
export const ArrowUpIcon = createIcon(<path fillRule="evenodd" d="M11.293 8.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L12 10.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4z" clipRule="evenodd" />);
export const CheckCircleIcon = createIcon(<path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />);
export const UserCircleIcon = createIcon(<path fillRule="evenodd" d="M12 2a10 10 0 100 20 10 10 0 000-20zM7.1 15.31c.96-.68 2.21-1.06 3.54-1.12.33.19.7.31 1.1.31s.77-.12 1.1-.31c1.33.06 2.58.44 3.54 1.12.92.65 1.56 1.62 1.56 2.69 0 .28-.22.5-.5.5H5.04c-.28 0-.5-.22-.5-.5 0-1.07.64-2.04 1.56-2.69zM12 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" clipRule="evenodd" />);

const disciplineIcons: { [key: string]: React.FC<{ className?: string }> } = {
  Hukum: createIcon(<path d="M12 3L4 9v12h16V9l-8-6zm-2 16H6v-6h4v6zm6 0h-4v-6h4v6zm0-8h-4V9h4v2z"/>),
  Sosiologi: createIcon(<path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H2v2h2v3h2v-3h2v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>),
  Ekonomi: createIcon(<path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 17.08z" />),
  'Politik & Kebijakan Publik': createIcon(<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 .55 0 1 .45 1 1v7h7c.55 0 1 .45 1 1 0 4.42-3.58 8-8 8S4 16.42 4 12z" />),
  Psikologi: createIcon(<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9c0-.9.6-1.64 1.4-1.9L12 6l.6 3.1c.8.26 1.4.99 1.4 1.9 0 1.1-.9 2-2 2s-2-.9-2-2z" />),
  'Antropologi & Budaya Lokal': createIcon(<path d="M11 7h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm-2 2h2v2h-2zm-4 4h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2zM4 3h16v2H4zm0 4h16v2H4zm0 8h16v2H4z" />),
  'Agama & Moral Publik': createIcon(<path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z" />),
  'Lingkungan & Ekologi': createIcon(<path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15.42v-2.1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v2.1c2.16-.62 3.89-2.28 4.67-4.42H7.33c.78 2.14 2.51 3.8 4.67 4.42zM18.67 11c-.78-2.14-2.51-3.8-4.67-4.42V4.5c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v2.08C7.84 7.2 6.11 8.86 5.33 11h13.34z" />),
  'Teknologi & Privasi': createIcon(<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H9v-2h6v2zm3-4H6V6h12v8z" />),
  'Sejarah Hukum': createIcon(<path d="M14.5 9H13v3h1.5c.83 0 1.5.67 1.5 1.5S15.33 15 14.5 15H13v1h1.5c1.38 0 2.5-1.12 2.5-2.5S15.88 9 14.5 9zM9.5 9H8v2h1.5c.83 0 1.5.67 1.5 1.5S10.33 14 9.5 14H8v2h1.5c1.38 0 2.5-1.12 2.5-2.5S10.88 9 9.5 9zM4 5v14h16V5H4zm-2 0c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5z" />),
  'Etika & Filsafat Hukum': createIcon(<path d="M12 2L4.5 5 12 8l7.5-3L12 2zm0 17.5L4.5 16v-6l7.5 3 7.5-3v6l-7.5 3.5zM4.5 8v2.16l7.5 3 7.5-3V8L12 11 4.5 8z" />),
  Kriminologi: createIcon(<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />),
  'Administrasi Publik': createIcon(<path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" />),
  'Komunikasi Publik & Media': createIcon(<path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-2-9H5V6h14v2z" />),
  'HAM & Keadilan Sosial': createIcon(<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />),
};

export const GetDisciplineIcon = (discipline: string) => {
    const Icon = disciplineIcons[discipline];
    return Icon ? <Icon /> : <LightbulbIcon />;
};
