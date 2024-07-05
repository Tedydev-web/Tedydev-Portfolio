// @flow strict
import Link from 'next/link';
import { CgGitFork } from 'react-icons/cg';
import { IoStar } from 'react-icons/io5';

function Footer() {
	return (
		<div className='relative border-t bg-[#0d1224] border-[#353951] text-white'>
			<div className='mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10'>
				<div className='flex justify-center -z-40'>
					<div className='absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent'></div>
				</div>
				<div
					className='flex flex-col md:flex-row items-center justify-between'
					id='footer-card'
				>
					<p className='text-sm'>
						© Developer Portfolio by{' '}
						<Link
							target='_blank'
							href='https://www.instagram.com/hieuda_t/'
							className='text-[#16f2b3]'
						>
							Tedy Dev
						</Link>
					</p>
<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
+					<div className='flex items-center gap-5 mt-[15px]'>
-					<div className='flex items-center gap-5'>
 						<Link
<<<<<<<  676d09cf-d82c-4f47-bf20-4da73e8bb04c  >>>>>>>
							target='_blank'
							href='https://github.com/Tedydev-web/Tedydev-Portfolio'
							className='flex items-center gap-2 uppercase hover:text-[#16f2b3]'
						>
							<IoStar />
							<span>Star</span>
						</Link>
						<Link
							target='_blank'
							href='https://github.com/Tedydev-web/TedyDev-Portfolio/fork'
							className='flex items-center gap-2 uppercase hover:text-[#16f2b3]'
						>
							<CgGitFork />
							<span>Fork</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
