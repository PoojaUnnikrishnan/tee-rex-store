import { defaultCss } from './defaultCss';
export const Navbar = ({ cart }) => {
    return (
        <div className={`${defaultCss.defaultPadding} py-4 flex justify-between bg-[#f1f0f1] items-center`}>
            <a href="/" className='pl-4 text-lg font-semibold'>
                TeeRex Store
            </a>
            <div className='flex gap-10 items-center'>
                <div className='border-b border-black w-12 hidden md:block'>
                    Products
                </div>
                <a className='relative px-4 py-2 bg-[#d3d3d3] shadow-inner shadow-gray-400' href="/cart">
                    <p className='absolute top-0 right-1 font-bold text-sm'>{cart.length}</p>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-6 w-6'>
                        <path fillRule="evenodd" clipRule="evenodd" d="M5 2.5C3.6193 2.5 2.5 3.6193 2.5 5C2.5 6.3807 3.6193 7.5 5 7.5H8.04805L16.9586 43.1423C14.3319 44.309 12.5 46.9405 12.5 50C12.5 54.1423 15.8579 57.5 20 57.5C24.1421 57.5 27.5 54.1423 27.5 50C27.5 49.1235 27.3495 48.282 27.0732 47.5H37.9268C37.6505 48.282 37.5 49.1235 37.5 50C37.5 54.1423 40.8577 57.5 45 57.5C49.1423 57.5 52.5 54.1423 52.5 50C52.5 45.8577 49.1423 42.5 45 42.5H21.9519L20.7019 37.5H45C50.1605 37.5 53.2548 34.2398 54.9718 30.6398C56.6498 27.1218 57.2338 22.9173 57.4375 19.8592C57.721 15.6003 54.2007 12.5 50.3027 12.5H14.4519L12.8988 6.28733C12.3423 4.06148 10.3424 2.5 8.04805 2.5H5ZM45 32.5H19.4519L15.7019 17.5H50.3027C51.6855 17.5 52.5158 18.5169 52.4485 19.527C52.2585 22.3805 51.7265 25.8295 50.459 28.4873C49.2305 31.0628 47.5502 32.5 45 32.5ZM45 52.4845C43.6277 52.4845 42.5155 51.3723 42.5155 50C42.5155 48.6277 43.6277 47.5155 45 47.5155C46.3723 47.5155 47.4845 48.6277 47.4845 50C47.4845 51.3723 46.3723 52.4845 45 52.4845ZM17.5154 50C17.5154 51.3723 18.6278 52.4845 20 52.4845C21.3722 52.4845 22.4846 51.3723 22.4846 50C22.4846 48.6277 21.3722 47.5155 20 47.5155C18.6278 47.5155 17.5154 48.6277 17.5154 50Z" fill="#0F0F0F" />
                    </svg>
                </a>
            </div>
        </div>
    )
}
