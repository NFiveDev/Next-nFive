import Link from 'next/link';
import { FaFacebook, FaGithub, FaTwitch } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='w-full py-5'>
      <div className='max-w-7xl mx-auto px-6 flex flex-row-reverse'>
        <div className='flex flex-row gap-4 me-2'>
          <div className=''>
            <Link href=''>
              <FaTwitch className='w-6 h-6 text-slate-500 hover:text-slate-700' />
            </Link>
          </div>
          <div>
            <Link href=''>
              <FaFacebook className='w-6 h-6 text-slate-500 hover:text-slate-700' />
            </Link>
          </div>
          <div>
            <Link href=''>
              <FaGithub className='w-6 h-6 text-slate-500 hover:text-slate-700' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
