import { HeroSimple } from '@/components/Simple'
import { DefaultCard } from '@/components/card'
import { GridSimple } from '@/components/layouts/grid'


export default function Home() {
  return (
    <>
      <HeroSimple/>
      <div style={{maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '5rem', paddingRight: '5rem'}}>
        <GridSimple columns={3} spacing={10}>
          <DefaultCard iconConfig={{element: "HiAcademicCap"}} title='Project Based Learning' content=''/>
          <DefaultCard title='Project Based Learning' content=''/>
          <DefaultCard title='Project Based Learning' content=''/>
        </GridSimple>
      </div>
    </>
  )
}
