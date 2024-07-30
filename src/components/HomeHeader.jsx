import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
    return (
        <header className="flex justify-between h-16 md:justify-end items-center gap-4 px-5">
            <div className="flex gap-4">
                <span className="text-black/[.87] text-[13px] line-height hover:underline cursor-pointer">Gmail</span>
                <span className="text-black/[.87] text-[13px] line-height hover:underline cursor-pointer">Images</span>
            </div>
            <ProfileIcon />
        </header>
    )
};

export default HomeHeader;
