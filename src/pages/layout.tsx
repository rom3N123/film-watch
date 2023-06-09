import { FC, ReactNode } from 'react';
import { AppShell } from '@mantine/core';

export type LayoutProps = {
	children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
	return <AppShell>{children}</AppShell>;
};
