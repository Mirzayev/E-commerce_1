import { Button } from "antd";

export default function Contact() {
    return (
        <div className="mt-20 max-w-[1440px] mx-auto px-4">
            <div className="lg:flex items-start">
                {/* Contact Info Section */}
                <div className="shadow-lg shadow-slate-300 m-4 px-6 py-8 lg:max-w-[340px] w-full">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-500 flex items-center justify-center rounded-full">
                            <i className="fa-solid fa-phone text-white"></i>
                        </div>
                        <p className="font-semibold">Call To us</p>
                    </div>
                    <p className="mt-6 mb-4">We are available 24/7, 7 days a week.</p>
                    <p className="mb-8 border-b border-slate-300 pb-8">
                        Phone: +8801611112222
                    </p>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-500 flex items-center justify-center rounded-full">
                            <i className="fa-solid fa-envelope text-white"></i>
                        </div>
                        <p className="font-semibold">Write To us</p>
                    </div>
                    <p className="mt-6 mb-4">
                        Fill out our form and we will contact you within 24 hours.
                    </p>
                    <p>Emails: support@exclusive.com</p>
                    <p className="mt-4">Emails: support@exclusive.com</p>
                </div>

                {/* Contact Form Section */}
                <div className="shadow-lg shadow-slate-300 m-4 px-6 py-8 w-full">
                    <div className="lg:flex items-center justify-between gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="bg-slate-100 py-3 px-4 rounded-md w-full outline-none block my-2"
                        />
                        <input
                            type="text"
                            placeholder="Your Email"
                            className="bg-slate-100 py-3 px-4 rounded-md w-full outline-none block my-2"
                        />
                        <input
                            type="text"
                            placeholder="Your Phone"
                            className="bg-slate-100 py-3 px-4 rounded-md w-full outline-none block my-2"
                        />
                    </div>
                    <textarea
                        placeholder="Your Message"
                        className="bg-slate-100 w-full lg:mt-8 py-3 px-4 rounded-lg h-[207px] mt-4 outline-none"
                    ></textarea>

                    <div className="flex justify-end mt-8">
                        <Button className="bg-red-500 py-4 px-12 text-white h-[56px]">
                            Send Message
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
