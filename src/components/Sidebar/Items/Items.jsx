const Items = ({ image, title }) => {
    return (
        <div className="flex items-start gap-2.5 p-2.5 pr-10 cursor-pointer rounded-3xl hover:bg-gray-200">
            <img className="w-5" src={image} alt="none" />
            <p className="">{title}</p>
        </div>
    )
}
export default Items