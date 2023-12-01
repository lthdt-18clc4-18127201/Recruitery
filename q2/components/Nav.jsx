import Image from 'next/image';
import Link from 'next/link'

const Nav = () => {
  return (
    <div className="header">
        <div className="header__navbar">
            <Link href="#">
                <Image 
                    src="https://dev_home.recruitery.co/assets/img/logo-text.png" 
                    width={200}
                    height={50}
                    alt="image-logo"
                    className="navbar__logo-image"
                />
            </Link>
            <div><Link className="navbar__nav-link" href="#">Trang chủ</Link></div>
            <div><Link className="navbar__nav-link" href="#">Mẫu CV</Link></div>
            <div><Link className="navbar__nav-link" href="#">Lý lịch của tôi</Link></div>
            <div><Link className="navbar__nav-link" href="#">Hướng dẫn</Link></div>
            <div><Link className="navbar__nav-link" href="#">Mẫu PPT<span>free</span></Link></div>
        </div>
        <div>
            <Link className="header__auth-button" href="#">Đăng nhập / Đăng kí</Link>
        </div>
    </div>
  )
}

export default Nav