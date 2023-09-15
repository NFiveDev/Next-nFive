import { ButtonDefault } from '@/components/buttons'
import {HiPlayCircle} from 'react-icons/hi2'

export default function Home() {
  return (
    <main className=''>
      <div className='flex flex-col items-center text-center py-32'>
        <h1 className='text-slate-800 text-6xl font-normal py-2'>Future of Learning in <span className='text-emerald-500'>IT</span> and <span className='text-emerald-500'>Programming</span></h1>
        <p className='text-cyan-800 text-lg font-medium py-2 px-36'> 
          Discover the Future of Learning through Interactive Videos and Project-Based Courses. Join Our Inclusive Community, Where Aspiration Meets Expertise, Welcoming Learners of All Levels.
        </p>
        <div className='gap-4 flex py-5'>
          <ButtonDefault color='primary' size='lg'>Explore</ButtonDefault>
          <ButtonDefault color='secondary' variant='bordered' size='lg' className='gap-2'>Intro<HiPlayCircle className='w-5 h-5 p-0 m-0' /></ButtonDefault>
        </div>
      </div>
    </main>
  )
}
