import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logomark className="h-10 w-10 flex-none fill-cyan-500" />
              <div className="ml-4">
                <p className="font-Nunito text-2xl font-bold tracking-tight text-stone-800">theCardsBox</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8 font-Encode text-stone-800">
              <NavLinks />
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              {/*<QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" />
              <Image src={qrCode} alt="" unoptimized />
              */}
            </div>
            <div className="ml-8 lg:w-64">
              {/*<p className="text-base font-semibold text-gray-900">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Download the app
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Scan the QR code to download the app from the App Store.
              </p>
              */}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
        <form
                action="https://www.getrevue.co/profile/thecardsbox/add_subscriber"
                method="post"
                id="revue-form"
                name="revue-form"
                target="_blank"
                rel="noreferrer"
                className="sm:mx-auto sm:max-w-xl lg:mx-0"
              >
                <div className="sm:flex">
                  <div className="min-w-0 flex-1">
                    <input
                      placeholder="Enter your email"
                      type="email"
                      name="member[email]"
                      className="block w-full rounded-md border-2 border-gray-400 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                    />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      value="Join now !"
                      name="member[subscribe]"
                      className="block w-full rounded-md bg-gradient-to-r from-solanapurple to-solanablue py-3 px-4 font-medium text-black shadow hover:bg-indigo-600 hover:from-solanablue hover:to-solanagreen focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                      Join waitlist
                    </button>
                  </div>
                </div>
                <p className="mt-3 font-Inter text-xs text-stone-100 sm:mt-4">
                  By subscribing, you agree with Revue’s{' '}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.getrevue.co/terms"
                  >
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.getrevue.co/privacy"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
          <p className="mt-6 text-xs text-stone-400 md:mt-0 tracking-tight font-Inter">
          theCardBox is a property of 13686205 Canada Inc &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
