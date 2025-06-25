import React, { useContext } from 'react'
import { assets } from '@/assets/assets'
import { Context } from '../../../context/Context';

const SearchBox = () => {
    const imageSearchBox = [
        { image: assets.gallery_icon },
        { image: assets.mic_icon },
    ];

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <>
            <div className='flex items-center justify-between gap-5 bg-gray-200 py-2.5 px-5 rounded-3xl mt-10'>
                <div className='min-w-[200px] max-w-full overflow-hidden'>
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        className='flex-1 border-0 outline-none bg-transparent p-2 text-lg'
                        type='text'
                        placeholder='Enter your prompt here!' />
                </div>
                <div className='flex flex-row items-center p-2 gap-2'>
                    {imageSearchBox.map((item, index) => {
                        return (
                            <img
                                className='w-6 cursor-pointer'
                                key={index}
                                src={item.image}
                                alt=''
                            />
                        )
                    })}
                    {input ? <img
                        onClick={() => onSent()}
                        className='w-6 cursor-pointer'
                        src={assets.send_icon}
                        alt=''
                    /> : null}
                </div>
            </div>
            <p className='text-sm my-4 mx-auto text-center font-light'>I'm Accurate as hell, those who don't trust me shall perish</p>
        </>
    )
}

export default SearchBox
