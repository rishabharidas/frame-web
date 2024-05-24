'use client';
import {
	createTheme,
	ThemeProvider,
	Typography,
	AppBar,
	Button,
	IconButton,
	Drawer,
	Box,
	ListItemText,
	MenuList,
	MenuItem,
	Link
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { useRouter } from 'next/navigation';
import { StoreProvider } from '@/store/StoreProvide';

export default function HomeLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const router = useRouter('/');
	const [open, setOpen] = React.useState(false);
	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};
	const theme = createTheme({
		palette: {
			mode: 'light',
			primary: {
				main: '#4a305bf2'
			},
			secondary: {
				main: '#dbd1c0'
			},
			info: {
				main: '#4f4f4e'
			}
		},
		components: {
			MuiDrawer: {
				styleOverrides: {
					paper: {
						backgroundColor: '#d9d9d9'
					}
				}
			},
			MuiAppBar: {
				styleOverrides: {
					root: {
						backgroundColor: '#dbd1c0f2',
						left: 'auto',
						right: 'auto',
						maxWidth: '1110px',
						width: '90%',
						marginRight: '5%',
						marginLeft: '5%',
						marginTop: '1.25rem',
						padding: '0.5rem 0 0.5rem 0'
					}
				}
			}
		}
	});
	return (
		<StoreProvider>
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={theme}>
					<div>
						<div className='flex justify-center'>
							<AppBar
								color='secondary'
								position='fixed'
								className='md:mx[15%] rounded-xl'
							>
								<div className='flex justify-between items-center px-4'>
									<Typography
										color='primary'
										variant='h4'
										sx={{
											fontWeight: 700,
											cursor: 'pointer'
										}}
										onClick={() => router.push('/')}
									>
										FrameWire
									</Typography>
									<div className='flex gap-8 justify-center items-center'>
										<Link
											href='/gallery'
											sx={{
												display: {
													xs: 'none',
													md: 'flex'
												}
											}}
										>
											Gallery
										</Link>
										<Button
											variant='contained'
											color='primary'
											sx={{
												display: {
													xs: 'none',
													md: 'flex'
												}
											}}
										>
											Get Yours
										</Button>
										<React.Fragment key={'right'}>
											<IconButton
												size='large'
												edge='start'
												color='primary'
												aria-label='menu'
												sx={{
													display: { md: 'none' }
												}}
												onClick={toggleDrawer(true)}
											>
												<MenuIcon fontSize='large' />
											</IconButton>
											<Drawer
												anchor={'right'}
												open={open}
												onClose={toggleDrawer(false)}
												className='relative'
												classes={{}}
											>
												<div className='flex flex-col mx-2 relative'>
													<div className='flex justify-between items-center border-b border-black px-2'>
														<span className='flex justify-center font-bold text-xl'>
															Explore
														</span>
														<IconButton
															size='large'
															edge='end'
															color='primary'
															aria-label='close'
															onClick={toggleDrawer(false)}
															sx={{
																justifyContent: 'end'
															}}
														>
															<CloseIcon fontSize='large' />
														</IconButton>
													</div>
													<Box sx={{ width: 300 }}>
														<MenuList>
															<MenuItem
																divider
																onClick={() => {
																	router.push('/gallery');
																	setOpen(false);
																}}
															>
																<ListItemText>Gallery</ListItemText>
															</MenuItem>
															<MenuItem
																divider
																onClick={() => {
																	router.push('/more');
																	setOpen(false);
																}}
															>
																<ListItemText>Get More</ListItemText>
															</MenuItem>
														</MenuList>
													</Box>
												</div>
												<a
													href='#'
													className='text-sm absolute bottom-3 left-28'
												>
													{' '}
													Contact Us
												</a>
											</Drawer>
										</React.Fragment>
									</div>
								</div>
							</AppBar>
						</div>
						<div className='my-28'>{children}</div>
					</div>
				</ThemeProvider>
			</StyledEngineProvider>
		</StoreProvider>
	);
}
