import { ReactNode } from 'react';

interface PageContentProps {
  children: ReactNode;
}

const PageContent = ({ children }: PageContentProps) => {
  return <>{children}</>;
};

export default PageContent;
