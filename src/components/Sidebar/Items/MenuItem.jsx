const MenuItem = ({ image, title }) => {
    return (
        <div className="flex justify-center p-2.5 cursor-pointer rounded-3xl hover:bg-gray-200">
            <img className="w-5" src={image} alt="none" />
        </div>
    )
}
export default MenuItem