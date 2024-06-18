import React from 'react'
import MeetCard from '../components/screen/MeetCard'

const OurTeam = () => {
  return (
    <div className=' py-20 px-20'>
        <div className='justify-center'>
            <div className='border border-custom-green-99 w-[200px] py-2 text-white flex items-center justify-center font-bold' style={{margin:'0 auto'}}>
                MEET OUR TEAM
            </div>
            <h3 className='text-center mt-4 text-4xl font-bold text-white'>OUR EXPERTS</h3>
        </div>
        <div className='py-10 flex flex-wrap justify-between'>
            <MeetCard/>
            <MeetCard/>
            <MeetCard/>
            <MeetCard/>
            <MeetCard/>
            <MeetCard/>
            <MeetCard/>
            <MeetCard/>
        </div>
    </div>
  )
}

export default OurTeam
