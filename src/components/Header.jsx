import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { BsTwitter } from 'react-icons/bs'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export function Header() {
  return (
    <header className="bg-dackbackground">
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            {/*<Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            */}
            <Link
              href="/"
              className="antialised flex items-center font-Nunito text-2xl font-bold tracking-tight text-stone-100"
            >
              theCardsBox
            </Link>
            <div className="hidden lg:flex lg:gap-10">{/*<NavLinks />*/}</div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          {/*<div className="space-y-4">
                            <MobileNavLink href="#features">
                              Features
                            </MobileNavLink>
                            <MobileNavLink href="#reviews">
                              Reviews
                            </MobileNavLink>
                            <MobileNavLink href="#pricing">
                              Pricing
                            </MobileNavLink>
                            <MobileNavLink href="#faqs">FAQs</MobileNavLink>
                          </div>
                          */}
                          <div className="mt-8 flex flex-col gap-4">
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://twitter.com/thecardsbox"
                              className="text-6xl text-twitter"
                            >
                              <BsTwitter />
                            </a>
                            <button
                              type="submit"
                              value="Join now !"
                              name="member[subscribe]"
                              className="block w-full rounded-md bg-gradient-to-r from-solanapurple to-solanablue py-3 px-4 font-medium text-black shadow hover:bg-indigo-600 hover:from-solanablue hover:to-solanagreen focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                            >
                              Join waitlist
                            </button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/thecardsbox"
              className="text-4xl text-twitter"
            >
              <BsTwitter />
            </a>
            <button
              type="submit"
              value="Join now !"
              name="member[subscribe]"
              className="hidden w-full rounded-md bg-gradient-to-r from-solanapurple to-solanablue py-3 px-4 font-medium text-black shadow hover:bg-indigo-600 hover:from-solanablue hover:to-solanagreen focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900 lg:block"
            >
              Join waitlist
            </button>
          </div>
        </Container>
      </nav>
    </header>
  )
}
