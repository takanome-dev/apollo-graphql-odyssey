import React from "react";
/**
 * Content Section component renders content (mainly text/mdown based)
 * for course detail and lesson detail
 */
const ContentSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mt-4 flex flex-col w-full self-center max-w-[800px] bg-["#F4F6F8"]'>
      {children}
    </div>
  );
};

export default ContentSection;

/** ContentSection styled component */
// const ContentDiv = styled.div({
//   marginTop: 10,
//   display: 'flex',
//   flexDirection: 'column',
//   maxWidth: widths.textPageWidth,
//   width: '100%',
//   alignSelf: 'center',
//   backgroundColor: colors.background,
// });
