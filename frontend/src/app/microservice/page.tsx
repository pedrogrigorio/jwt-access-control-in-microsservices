'use client'

import { Button } from '@/components/ui/button'

export default function page() {
  return (
    <div className="bg-[#17171A] flex flex-col w-screen h-screen justify-center items-center">
      <div className="font-bold text-white text-6xl mb-16">
        <h1>Welcome back, User!</h1>
      </div>

      <div className="flex justify-between space-x-9">
        <Button className="bg-[#1F694B] w-[176px] h-[46px]">Resource 1</Button>
        <Button className="bg-[#1F694B] w-[176px] h-[46px] ">Resource 1</Button>
        <Button className="bg-[#1F694B] w-[176px] h-[46px]">
          Both resources
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center mt-20">
        <Button className="bg-[#CD4C4C] w-[176px] h-[46px]">Log out </Button>
      </div>
    </div>
  )
}
