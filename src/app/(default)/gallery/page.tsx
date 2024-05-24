'use client';
import { Container, TextField, Button } from '@mui/material';
import type { RootState } from '../../../store/store';
import { useState } from 'react';

import { useSelector, UseDispatch, useDispatch } from 'react-redux';
import { addImage } from '@/store/photoStore';

function GalleryImage({ url }) {
	return (
		<>
			<img
				src={url}
				alt=''
				className='min-w-32 h-auto rounded-lg'
			></img>
		</>
	);
}

export default function gallery() {
	const photos = useSelector(
		(state: RootState) => state.photos.value
	);
	const dispatch = useDispatch();

	let [imageUrl, setImageUrl] = useState('');

	function addUrl() {
		dispatch(addImage(imageUrl));
	}
	return (
		<Container
			className='h-full container'
			sx={{
				paddingRight: { xs: '5%', xl: '1px' },
				paddingLeft: { xs: '5%', xl: '1px' }
			}}
		>
			<div className='flex justify-between items-center mb-10 border rounded-lg border-black p-4 gap-4'>
				<TextField
					variant='standard'
					fullWidth
					label='Image Url'
					value={imageUrl}
					onChange={(event) => setImageUrl(event.target.value)}
				/>
				<Button
					variant='outlined'
					onClick={addUrl}
				>
					Add Image
				</Button>
			</div>

			<div className='flex flex-wrap items-end gap-4 '>
				{photos.map((image) => (
					<GalleryImage
						key={image}
						url={image}
					/>
				))}
			</div>
		</Container>
	);
}
