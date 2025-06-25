import React, { useContext, useState } from 'react'
import Items from '@/components/Sidebar/Items/Items'
import { assets } from '@/assets/assets'
import NewChat from './Items/NewChat'
import RecentChat from './Items/RecentChat'
import MenuItem from './Items/MenuItem'
import { Context } from '../../context/Context'


const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    const menuItems = [
        { image: assets.question_icon, title: "Help" },
        { image: assets.history_icon, title: "Activity" },
        { image: assets.setting_icon, title: "Settings" },
    ];

    return (
        <div className='hidden md:block '>
            {/* sidebar */}
            <div className='inline-flex flex-col justify-between bg-gray-100 min-h-screen py-6 px-4 ' >
                {/* top */}
                <div className=''>
                    <div onClick={() => setExtended(prev => !prev)} className='ml-2.5 block'>
                        <MenuItem className='cursor-pointer' image={assets.menu_icon} title="" />
                    </div>
                    {extended ?
                        <div onClick={() => newChat()}><NewChat image={assets.plus_icon} title="New Chat" /></div> : <NewChat image={assets.plus_icon} title={null} />}


                    {/* recent */}
                    {extended
                        ?
                        <div className='flex flex-col'>
                            <h3 className='mt-7.5 mb-8'>Recent Chat</h3>
                            {prevPrompts.map((item, index) => {
                                return (
                                    <div className='fadeIn'>
                                        <RecentChat
                                            key={index}
                                            onClick={() => loadPrompt(item)}
                                            image={assets.message_icon}
                                            title={item.slice(0, 18) + "..."} />
                                    </div>
                                )
                            })}
                        </div>
                        :
                        null
                    }

                </div>

                {/* bottom */}
                <div className="flex flex-col">
                    {menuItems.map((item, index) => (
                        <Items
                            key={index}
                            image={item.image}
                            title={extended ? item.title : ""}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar