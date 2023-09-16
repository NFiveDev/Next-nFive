import { ButtonDefault } from '@/components/buttons';
import { HiPlayCircle, HiAcademicCap } from 'react-icons/hi2';
import { FeatureCard } from '@/components/cards';
import { Link } from '@nextui-org/react';


const featureSectionConfig = [
  {
    icon: <HiAcademicCap className='w-6 h-6 text-emerald-700'/>,
    title: 'Project Based Learning',
    link: {
      displayText: 'Learn more',
      ref: '#'
    },
    bodyText: 'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
  },
  {
    icon: <HiAcademicCap className='w-6 h-6 text-emerald-700'/>,
    title: 'Project Based Learning',
    link: {
      displayText: 'Learn more',
      ref: '#'
    },
    bodyText: 'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
  },
  {
    icon: <HiAcademicCap className='w-6 h-6 text-emerald-700'/>,
    title: 'Project Based Learning',
    link: {
      displayText: 'Learn more',
      ref: '#'
    },
    bodyText: 'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
  }
]



export default function Home() {
  return (
    <main className=''>
      <section className='flex flex-col items-center text-center pt-32 pb-28'>
        <h1 className='text-slate-800 dark:text-slate-400 text-6xl font-normal py-2'>
          Future of Learning in <span className='text-emerald-500'>IT</span> and{' '}
          <span className='text-emerald-500'>Programming</span>
        </h1>
        <p className='text-cyan-800 text-lg font-medium py-2 px-36 dark:text-cyan-400'>
          Discover the Future of Learning through Interactive Videos and
          Project-Based Courses. Join Our Inclusive Community, Where Aspiration
          Meets Expertise, Welcoming Learners of All Levels.
        </p>
        <div className='gap-4 flex py-5'>
          <ButtonDefault color='primary' size='lg' be='link' href='/course'>
            Explore
          </ButtonDefault>
          <ButtonDefault
            color='secondary'
            variant='bordered'
            size='lg'
            className='gap-2'
            
          >
            Intro
            <HiPlayCircle className='w-5 h-5 p-0 m-0' />
          </ButtonDefault>
        </div>
      </section>

      <section className=''>
        <div className='grid grid-cols-3 gap-5 px-10'>

          {
            featureSectionConfig.map(function(feature, index){
              return (
                <div key={index}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  link={feature.link}
                >
                  <span className='text-sky-700 font-base text-base'>
                    {feature.bodyText}
                  </span>
                </FeatureCard>
              </div>
              )
            })
          }
         
        </div>
      </section>
    </main>
  );
}
