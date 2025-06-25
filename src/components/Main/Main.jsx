import React, { useContext } from 'react'
import Nav from './Items/Nav'
import Greet from './Items/Greet'
import Card from './Items/Card'
import { assets } from '@/assets/assets'
import SearchBox from './Items/SearchBox'
import { Context } from '../../context/Context'


const Main = () => {
    const cardItems = [
        { image: assets.compass_icon, title: "Suggest beautiful places to see on an upcoming trip" },
        { image: assets.bulb_icon, title: "Briefly summarize this concept: Urban planning" },
        { image: assets.message_icon, title: "Brainstorm team bonding activities for our work retreat" },
        { image: assets.code_icon, title: "Improve the readability of the following code" },
    ];

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className='relative flex-1 min-h-screen pb-[15vh]'>
            <Nav />
            <div className='max-w-4xl m-auto'>

                {!showResult
                    ?
                    <>
                        <Greet />
                        <div className='grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-4 p-5'>
                            {cardItems.map((item, index) => {
                                return (
                                    <Card
                                        key={index}
                                        image={item.image}
                                        title={item.title}
                                    />
                                )
                            })}
                        </div>

                    </>
                    :
                    <div className='px-[5%] max-h-[70vh] overflow-y-scroll hidescroll'>
                        <div className='flex my-10 items-center gap-5'>
                            <img className='w-12 rounded-3xl' src={assets.user_icon} />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className='flex flex-col gap-5 md:items-start md:flex-row  '>
                            <img className="w-20 h-20"
                                src={assets.gemini_icon} />
                            {loading
                                ?
                                <div className='w-full flex flex-col gap-2.5'>
                                    <hr className='loader' />
                                    <hr className='loader' />
                                    <hr className='loader' />
                                </div>
                                :
                                <p
                                    className='text-sm md:text-lg font-light leading-[1.8]'
                                    dangerouslySetInnerHTML={{ __html: resultData }}
                                ></p>
                            }
                        </div>
                    </div>
                }

                <div className='absolute w-full max-w-4xl py-0 px-5 m-auto'>
                    <SearchBox />
                </div>
            </div>
        </div>

    )
}

export default Main