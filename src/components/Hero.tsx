
export default function Hero (){
    return(
        <div
        className="flex justify-end items-center h-[716px] bg-no-repeat bg-center bg-contain bg-[#F4F5F7]" 
        style={{
            backgroundImage: `url("/images/hero-bg.png")`,
        }}>
            <div className="bg-[#FFF3E3] flex gap-[46px] flex-col w-fit mr-[58px] rounded-[10px] pl-[39px] pr-[43px] pt-[62px] pb-[37px]">
                <div>
                    <h3 className="text-[#333333] text-[16px] font-semibold">New Arrival</h3>
                    <h2 className="text-primary text-[52px] font-bold leading-[65px] mb-[17px]">Discover Our <br />New Collection</h2>
                    <p className="font-medium text-[18px] text-[#333333] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
                </div>
                <div className="bg-primary px-[72px] py-[25px] w-fit">
                    <p className="text-white font-bold text-[16px]">BUY NOW</p>
                </div>
            </div>
        </div>
    )
}