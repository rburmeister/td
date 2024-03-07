import Image from "next/image";

export default function Header() {
    
    return <header>
        <div className="wrap">
            <a href="/" title="MagnaCare Home Page">
            <Image
                src="/magnacare-logo.png"
                alt="Magnacare Logo"
                width={234}
                height={26}
                unoptimized
            />
            </a>
            <Image
                src="/menu-icon.png"
                alt="Menu Icon"
                width={28}
                height={20}
                unoptimized
            />
        </div>
    </header>;

}