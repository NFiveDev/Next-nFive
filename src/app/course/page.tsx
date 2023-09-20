import Image from 'next/image';
import backgroundImage from '../../../public/banner-course.jpg';

export default function Course() {
  return (
    <>
    <div className='relative h-96 w-screen'>
      <div className='absolute w-full h-full'>
        <Image src={backgroundImage} alt='Picture of the author' className=' h-full w-full object-cover'/>
      </div>

    </div>
    <main className='max-w-7xl mx-auto px-6'>

    </main>
    </>
      
  );
}
