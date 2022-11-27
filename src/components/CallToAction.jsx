import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="join"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#000" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-stone-800 sm:text-4xl font-Encode">
            Get on the waitlist now !
          </h2>
          <p className="mt-4 text-base tracking-tight text-stone-800 font-Inter">
            It takes 10 seconds to sign up. It's free ! We'll get you updated on development and share some news with you. Join us !
          </p>
          <div className="mt-8 flex justify-center">
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
                <p className="mt-3 font-Inter text-xs text-stone-800 sm:mt-4">
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
          </div>
        </div>
      </Container>
    </section>
  )
}
