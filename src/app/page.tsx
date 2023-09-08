import { HeroSimple } from '@/components/Hero';
import { DefaultCard } from '@/components/card';
import { GridSimple, GridItemSimple } from '@/components/layouts/grid';

export default function Home() {
  return (
    <>
      <HeroSimple />
      <div
        style={{
          maxWidth: '1280px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '8rem',
          paddingRight: '8rem',
          marginTop: '2rem'
        }}
      >
        <GridSimple columns={{'base': 1, 'sm': 1, 'md': 2, 'lg': 3}} spacing={'3rem'} paddingY={{base: '1rem', sm: '1rem', md: '1rem'}}>
          <GridItemSimple>
            <DefaultCard
              iconConfig={{
                element: 'HiAcademicCap',
                size: 6,
                bgColor: 'gray.100',
              }}
              title="Project Based Learning"
              content="Embark on a coding adventure with our immersive project-based learning. Develop practical skills while crafting real-world projects."
              link={{ displayText: 'Learn more', href: '' }}
            />
          </GridItemSimple>

          <GridItemSimple>
            <DefaultCard
              iconConfig={{
                element: 'HiAcademicCap',
                size: 6,
                bgColor: 'gray.100',
              }}
              title="Project Based Learning"
              content="Embark on a coding adventure with our immersive project-based learning. Develop practical skills while crafting real-world projects."
              link={{ displayText: 'Learn more', href: '' }}
            />
          </GridItemSimple>
          <GridItemSimple>
            <DefaultCard
              iconConfig={{
                element: 'HiAcademicCap',
                size: 6,
                bgColor: 'gray.100',
              }}
              title="Project Based Learning"
              content="Embark on a coding adventure with our immersive project-based learning. Develop practical skills while crafting real-world projects."
              link={{ displayText: 'Learn more', href: '' }}
            />
          </GridItemSimple>
        </GridSimple>
      </div>
    </>
  );
}
