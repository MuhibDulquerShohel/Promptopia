"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { Web3Context } from "@context/contextProvider";
import { useRouter } from "next/navigation";
import { useAppKitAccount } from "@reown/appkit/react";
const Nav = () => {
//   const {
//     connect,
//     disconnect,
//     currentAccount,
//     active,
//     checkIfWalletIsConnected,
    // profile
//   } = useContext(Web3Context);
const { address, isConnected, caipAddress, status, embeddedWalletInfo } = useAppKitAccount()
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const router = useRouter();
  const connectWallet = async () => {
    try {
    return <appkit-button />
    } catch (error) {}
  };

//   useEffect(() => {
    
//   }, []);

  return (
    <div className="flex-between w-full mb-16 mt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="promptopia logo"
          height={30}
          width={30}
          className="object-contain"
        />
        <p className="logo_text">CryptoPrompt</p>
      </Link>
      <div className="sm:flex hidden">
        {/* {!session?.user ? ( */}
        {isConnected ? (
          <div className="gap-3 flex md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              create post
            </Link>
            <button
              type="button"
            //   onClick={() => disconnect()}
              className="outline_btn "
            >
              Disconnect
            </button>
            <Link href="/profile">
              <Image
                src={
                //   profile.image
                //   profile
                //     ? profile.image
                //     : 
                    "/assets/images/demo-profile.jpg"
                }
                height={37}
                width={37}
                alt="profile"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => connectWallet()}
              className="black_btn"
            >
              Connect Wallet
            </button>
          </>
        )}{" "}
      </div>
      <div className="sm:hidden flex relative">
        {isConnected ? (
          <div className="flex">
            <Image
              src={
                //   profile.image
                // profile
                // ? profile.image
                //   :
                   "/assets/images/demo-profile.jpg"
              }
              height={37}
              width={37}
              alt="profile"
              className="rounded-full"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                //   onClick={() => {
                //     setToggleDropdown(false);
                //     disconnect();
                //   }}
                  className="black_btn"
                >
                  Disconnect
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => connectWallet()}
              className="black_btn"
            >
              Connect Wallet
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
