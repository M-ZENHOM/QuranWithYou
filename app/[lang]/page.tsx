import { Icons } from '@/components/Icons'
import SurhaBox from '@/components/SurhaBox'
import Wrapper from '@/components/Wrapper'
import { Locale } from '@/i18n-config'
import { getQuran, getRandomAyah } from '@/lib/getQuran'
import { Card, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'
import FavBox from '@/components/FavBox'

interface QuranData {
  number: number,
  name: string,
  englishName: string,
  englishNameTranslation: string,
  numberOfAyahs: number,
  revelationType: string
}
export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const randomAyah = Math.floor(Math.random() * 6236);
  const ayah = await getRandomAyah(randomAyah)
  const Quran = await getQuran();

  return (
    <Wrapper>
      <Icons.QuranKareem className='w-4/12 mx-auto py-20' />
      <div className='flex flex-wrap md:flex-nowrap gap-4 items-center justify-between'>
        <Card className='w-full h-60  p-8 text-center space-y-3 bg-gradient-to-br from-yellow-500/25 to-50% flex flex-col items-center justify-center'>
          <CardTitle className='text-muted-foreground'>AYAH OF THE DAY</CardTitle>
          <h2 className='text-lg'>{ayah.data.text}</h2>
        </Card>
        <Card className='w-full h-60 p-8 text-center space-y-3 bg-gradient-to-br from-yellow-500/25 to-50%'>
          <CardTitle className='text-muted-foreground'>FAV LIST</CardTitle>
          <ScrollArea className="rounded-md p-4 h-full" >
            <FavBox />
          </ScrollArea>
        </Card>
      </div>
      <div className={cn('grid grid-cols-fluid gap-4 py-4 place-items-center')}>
        {Quran.data.map((q: QuranData) => (
          <SurhaBox key={q.number} number={q.number} name={q.name} englishName={q.englishName} numberOfAyahs={q.numberOfAyahs} lang={lang} />
        ))}
      </div>
    </Wrapper>
  )
}
