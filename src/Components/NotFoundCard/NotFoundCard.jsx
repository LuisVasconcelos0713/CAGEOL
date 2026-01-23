const NotFoundCard = ({icon:Icon, text}) => {
    return (
        <div className="p-20 text-center bg-white rounded-[3rem] border-2 border-dashed border-gray-100 w-full">
            {Icon && (
                <Icon className="mx-auto mb-4 text-gray-300" size={48}></Icon>
                )
            }
                <h1 className="text-gray-500 font-medium text-lg ">{text}</h1>
        </div>
    )
}

export default NotFoundCard