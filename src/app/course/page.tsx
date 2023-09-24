import Image from 'next/image';
import backgroundImage from '../../../public/banner-course.jpg';
import { CourseFilterForm, SearchForm } from '@components/forms';
import { CourseFilterToggler, IconButton } from '@components/buttons';
import {HiAdjustmentsHorizontal} from 'react-icons/hi2'

export default function Course() {
  const openModal = () => console.log(open)

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
          <div className="flex flex-col items-center py-20">
            <h1 className="text-slate-100 text-6xl font-normal font-base">Explore our Courses</h1>
            <div className='w-80 py-8'>
              <SearchForm placeholder='type to search...'/>
            </div>
          </div>
          <div className='py-10 bg-white rounded-2xl w-full'>
            <section className='flex items-end w-full flex-col px-5'>
              <CourseFilterToggler><HiAdjustmentsHorizontal size={20} /></CourseFilterToggler>
            </section>
            <section className='w-full'>
              <CourseFilterForm />
            </section>
            <section className=''>
              <h1>hej</h1>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
