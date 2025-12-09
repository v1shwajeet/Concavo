import Link from "next/link"
import Image from "next/image"
import NavItems from "./NavItems"
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className="navbar flex items-center justify-between">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="logo"
            height={44}
            width={46}
          />
        </div>
      </Link>
      <div className="flex items-center gap-8">
                <NavItems />
                <SignedOut>
                    <SignInButton>
                        <button className="btn-signin">Sign In</button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
      {/* <div className="flex gap-3 sm:gap-8 items-center">
        <NavItems />
        <p className="text-sm sm:text-base">Sign In</p>
      </div> */}
    </nav>
  )
}

export default Navbar
