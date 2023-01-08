
export default function Results({ data }) {
    return(
        <div className="animate__animated animate__fadeInDown w-[325px] h-[109px] md:w-[750px] md:h-[68px] border dark:border-none mt-4 rounded flex flex-col md:flex-row bg-white dark:bg-[#17161B] justify-center gap-1 md:justify-between items-start md:items-center px-5 transition-all duration-300">
            <span className="text-[#616161] dark:text-white font-medium text-lg ">{data.title}</span>
            <div className="flex items-center gap-1 text-[#616161] dark:text-white text-base font-normal ">
                <ion-icon name="options"></ion-icon>
                <span>${data.price}K+ /</span>
                <span>{data.description}</span>
            </div>
        </div>
    )
}