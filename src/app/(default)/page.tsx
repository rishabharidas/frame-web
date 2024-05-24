import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex max-w-screen flex-col'>
			<section className='h-screen flex px-[5%] justify-around'>
				<div className='flex flex-col md:flex-row gap-14 md:gap-24 justify-center items-center container'>
					<span className='border-8 border-red-900 p-28 md:p-36 h-36 w-36 hover:animate-spin-slow flex justify-center items-center'>
						<span className='border-[13px]  border-red-900 p-24 md:p-32 h-32 w-32'></span>
					</span>
					<h1 className='text-5xl font-bold text-center max-w-[35rem]'>
						Frames Desitined for Memories
					</h1>
				</div>
			</section>
			<section className='bg-[url(/frame.png)] bg-[antiquewhite]'>
				<div className='bg-[#B3A99BBF] py-20 flex flex-col justify-center px-[5%]'>
					<span className='text-start text-black text-3xl font-semibold container'>
						Discover Your Perfect Fit: Customized Photo Frames at
						Affordable Prices!
					</span>
					<span className='text-base mt-4 subpixel-antialiased leading-6 container text-justify'>
						Welcome to our photo frame section, where every moment
						finds its perfect fit. Dive into a world of personalized
						sizes and unbeatable prices, tailored to make your
						memories shine. Whether you're framing a cherished family
						portrait or capturing a breathtaking landscape, we've got
						the frame that's just right for you. Explore our
						collection and elevate your décor with frames as unique as
						your memories. Get ready to frame your world!"
					</span>
				</div>
			</section>
		</main>
	);
}
