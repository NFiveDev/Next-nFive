import Image from 'next/image';
import backgroundImage from '../../../public/banner-course.jpg';
import { SearchForm } from '@/components/forms';

export default function Course() {
  return (
    <>
      <main>
        <div className="relative w-screen">
          <div className="absolute w-full h-96 bg-blend-darken">
            <div className="bg-[url('/banner-course.jpg')] h-full bg-cover bg-center brightness-50 z-0">

            </div>
            {/* <Image
              src={backgroundImage}
              alt="Picture of the author"
              className=" h-full w-full object-cover brightness-50 "
            /> */}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="flex flex-col items-center py-14">
            <h1 className="text-white text-4xl font-base font-sans">Explore our Courses</h1>
            <div className='w-72 py-5'>
              <SearchForm placeholder='type to search...'/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
