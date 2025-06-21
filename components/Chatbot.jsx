import { FaWhatsapp } from "react-icons/fa6";

const WhatsappButton = () => {
    const handleWhatsappClick = () => {
        window.open('https://wa.link/fb8jfa', '_blank');
    };

    return (
        <>
            <div
                className="fixed z-10 bottom-8 right-6 w-12 h-12 rounded-full bg-green-500 flex justify-center items-center cursor-pointer shadow-md hover:bg-green-600 transition select-none"
                onClick={handleWhatsappClick}
            >
                <FaWhatsapp className="text-white text-3xl" />
            </div>
        </>
    );
};

export default WhatsappButton;
