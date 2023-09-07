import { HeroSimple } from '@/components/Simple';
import { DefaultCard } from '@/components/card';
import { GridSimple } from '@/components/layouts/grid';

export default function Home() {
  return (
    <>
      <HeroSimple />
      <div
        style={{
          maxWidth: '1280px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '5rem',
          paddingRight: '5rem',
        }}
      >
        <GridSimple columns={3} spacing={10}>
          <DefaultCard
            iconConfig={{
              element: 'HiAcademicCap',
              size: 7,
              bgColor: 'gray.100',
            }}
            title="Project Based Learning"
            content="Embark on a coding adventure with our immersive project-based learning. Develop practical skills while crafting real-world projects."
            link={{displayText: 'Learn more', href: ''}}
          />
          <DefaultCard
            iconConfig={{
              element: 'HiAcademicCap',
              size: 7,
              bgColor: 'gray.100',
            }}
            title="Project Based Learning"
            content="Embark on a coding adventure with our immersive project-based learning. Develop practical skills while crafting real-world projects."
            link={{displayText: 'Learn more', href: ''}}
          />
          <DefaultCard
            iconConfig={{
              element: 'HiAcademicCap',
              size: 7,
              bgColor: 'gray.100',
            }}
            title="Project Based Learning"
            content="Embark on a coding adventure with our immersive project-based learning. Develop practical skills while crafting real-world projects."
            link={{displayText: 'Learn more', href: ''}}
          />
        </GridSimple>
      </div>
    </>
  );
}
