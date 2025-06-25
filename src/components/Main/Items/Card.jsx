const Card = ({ image, title }) => {
    return (
        <div className="relative h-50 p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-300 transition-all">
            <p className="text-gray-600 text-base">{title}</p>
            <img
                className="absolute w-9 p-1.5 bg-white rounded-3xl bottom-2.5 right-2.5"
                src={image} 
                alt=""
            />
        </div>
    )
}
export default Card