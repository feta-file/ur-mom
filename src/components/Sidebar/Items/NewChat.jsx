const NewChat = ({ image, title }) => {
    return (
        <div className="inline-flex mt-12.5 gap-2.5 py-2.5 px-4 bg-gray-300 text-gray-600 rounded-3xl text-sm items-center cursor-pointer">
            <img className="w-5" src={image} alt="none" />
            <p className="">{title}</p>
        </div>
    )
}

export default NewChat