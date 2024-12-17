import Image from "next/image";
import footerLogo from '../../../public/logos/footer logo.png';
import facebookIcon from '../../../public/icons/facebook icon.png';
import instagramIcon from '../../../public/icons/instagram icon.png';
import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full h-[fit] bg-[#6E4E37] flex flex-row">
        
            <div className="w-[60%] h-[200px] bg-transparent justify-around flex flex-row ms-40">
                
            <div className="w-[80px] h-full bg-transparent flex flex-col justify-center gap-3">

                <Link href="/" className="w-full h-auto flex flex-row gap-16 items-center">
                
                    <Image 
                        width={100} 
                        height={100} 
                        src={footerLogo} 
                        alt="Footer Logo" 
                        className="w-[40px] h-[40px]"
                    />
                </Link>

                <p className="w-full h-auto flex flex-row gap-16 items-center text-[8px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                <div className="w-full h-auto flex flex-row gap-5">
                    <Link href="https://www.facebook.com/sjhandicrafts04">
                        <Image 
                            width={500} 
                            height={500} 
                            src={facebookIcon} 
                            alt="Facebook Icon"
                            className="w-[20px] h-[20px]"
                        />
                    </Link>
                    <Link href="https://www.facebook.com/sjhandicrafts04">
                        <Image 
                            width={500} 
                            height={500} 
                            src={instagramIcon} 
                            alt="Instagram Icon"
                            className="w-[20px] h-[20px]"
                        />
                    </Link>
                </div>
            
            </div>

            <div className="w-auto h-full bg-transparent flex flex-col gap-3">

                <h1 className="w-full h-auto flex flex-row gap-16 items-center text-xl mt-12">Partners</h1>

                <Link href="https://www.snrshopping.com/" className="w-full h-auto flex flex-row gap-16 items-center text-[10px] hover:underline">S&R</Link>
                <Link href="https://www.kulturafilipino.com/" className="w-full h-auto flex flex-row gap-16 items-center text-[10px] hover:underline">Kultura</Link>

            </div>

            <div className="w-auto h-full bg-transparent flex flex-col gap-3">

                <h1 className="w-full h-auto flex flex-row gap-16 items-center text-xl mt-12">Contacts</h1>

                <p className="w-full h-auto flex flex-row gap-16 items-center text-[10px]">PH: +63 917 841 5199</p>
                <p className="w-full h-auto flex flex-row gap-16 items-center text-[10px]">Email: sjhandicrafts04@gmail.com</p>

            </div>

            <div className="w-auto h-full bg-transparent flex flex-col gap-3">

                <h1 className="w-full h-auto flex flex-row items-center text-xl mt-12">Links</h1>

                <Link href="/about-us" className="w-full h-auto flex flex-row gap-16 items-center text-[10px] hover:underline">About Us</Link>
                <Link href="/our-products" className="w-full h-auto flex flex-row gap-16 items-center text-[10px] hover:underline">Our Product</Link>
                <Link href="/contact-us" className="w-full h-auto flex flex-row gap-16 items-center text-[10px] hover:underline">Contact Us</Link>

            </div>



            </div>

        </div>
    );
  };
  
  export default Footer;
  