import Image from 'next/image';
import backgroundImage from '../../../public/banner-course.jpg';

export default function Course() {
  return (
    <>
    <div className=''>
          <Image className='object-fill' src={backgroundImage} alt='Picture of the author' />
      </div>

    <main className='max-w-7xl mx-auto px-6'>

    </main>
    </>
      
  );
}
