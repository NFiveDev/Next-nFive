import { ButtonDefault } from '@components/buttons';
import { HiPlayCircle, HiAcademicCap } from 'react-icons/hi2';
import { FeatureCard } from '@components/cards';
import Link from 'next/link';

import { IntroModal } from '@components/modals';


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

type HomeProps = {
  searchParams: Record<string, string> | null | undefined;
}



export default function Home(props: HomeProps) {
  const showModal = props.searchParams?.modal;

  return (
    <main className='max-w-7xl mx-auto px-6'>
      <section className='flex flex-col items-center text-center py-36'>
        <h1 className='text-slate-800 dark:text-slate-400 text-6xl font-normal font-base py-2'>
          Future of Learning in <span className='text-emerald-500'>IT</span> and{' '}
          <span className='text-emerald-500'>Programming</span>
        </h1>
        <p className='text-cyan-600 text-lg py-2 px-36 dark:text-cyan-400'>
          Discover the Future of Learning through Interactive Videos and
          Project-Based Courses. Join Our Inclusive Community, Where Aspiration
          Meets Expertise, Welcoming Learners of All Levels.
        </p>
        <div className='gap-4 flex py-5'>
          <ButtonDefault color='primary' size='lg' be='link' href='/course'>
            Explore
            </ButtonDefault>
            <IntroModal />
        </div>
      </section>

      

      <section className=''>
        <div className='grid grid-cols-3 gap-10'>

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
