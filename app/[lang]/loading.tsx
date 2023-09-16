import { Icons } from '@/components/Icons'
import Wrapper from '@/components/Wrapper'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import React from 'react'

function loading() {
    return (
        <Wrapper>
            <Icons.QuranKareem className='w-4/12 mx-auto py-28 md:py-20' />
            <div className='flex flex-wrap md:flex-nowrap gap-4 items-center justify-between'>
                <div className='w-full h-60  p-8 text-center space-y-3 bg-gradient-to-br from-yellow-500/25 to-50% flex flex-col items-center justify-center'>
                    <Skeleton className="w-[100px] h-[20px]" />
                    <Skeleton className="w-[100px] h-[20px] " />
                </div>
                <div className='w-full h-60 p-8 text-center space-y-3 bg-gradient-to-br from-yellow-500/25 to-50%'>
                    <Skeleton className="w-[100px] h-[20px] " />
                    <div className='w-full p-3 bg-yellow-500/25 my-2 flex items-center justify-between text-center'>
                        <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        <Skeleton className="w-[30px] h-[30px] rounded-md" />
                    </div>
                </div>
            </div>
            <div className={cn('grid grid-cols-fluid gap-4 py-4 place-items-center')}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((l, i) => (
                    <div key={i} className='flex w-full  max-w-[300px] justify-between items-center p-4 py-6 bg-muted rounded-lg border hover:border-yellow-500 hover:bg-gradient-to-r hover:from-yellow-500/10 group'>
                        <div className='flex items-center justify-between space-x-4 w-full'>
                            <span className="w-[35px] h-[35px]   text-center leading-[35px] ">
                                <Skeleton className="w-[30px] h-[30px] rounded-full" />
                            </span>
                            <Skeleton className="w-[180px] h-[20px] rounded-md " />
                        </div>
                        <Skeleton className="w-[20px] h-[30px] rounded-md " />
                    </div>))}
            </div>
        </Wrapper>
    )
}

export default loading