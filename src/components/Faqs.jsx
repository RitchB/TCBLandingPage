import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What is the waitlist?',
      answer:
        'It is a subscription to our newsletter. We will send weekly update to inform you about development and news about theCardsBox.',
    },
    {
      question: 'What is Solana?',
      answer:
        'It is a blockchain network',
    },
    {
      question: 'How to be a theCardsBox member?',
      answer:
        'Membership will be given by detaining a theCardsBox member pass in your wallet. The pass will be sold as an NFT.',
    },
  ],
  [
    {
      question: 'Will I be able to sell my member pass NFT if I do not need it anymore?',
      answer:
        'Yes like any other NFT.',
    },
    {
      question: 'Where is theCardsBox based?',
      answer:
        'We are based in Quebec, Canada',
    },
    {
      question: 'How will I be able to trust the seller?',
      answer:
        'The security of theCardsBox will be maintained by community members who will commit themselves by guaranteeing their trust via theCardsBox stacking mechanism.',
    },
  ],
  [
    {
      question: 'What is stacking?',
      answer:
        'It is locking NFTs that serves as a proof of engagement to theCardsBox community. More details will be available on the whitepaper.',
    },
    {
      question: 'Is my address going to be public? What about my anonymity?',
      answer:
        'Buyers address will be provided to sellers only when the sale is confirmed. We will publish what we consider the best practice for doing business on theCardsBox on the whitepaper.',
    },
    {
      question: 'If I do not have a membership NFT, how will I be able to buy a monthly membership?',
      answer:
        'Monthly membership pass will be sold as NFT. The NFT will have an expiery date. The access to the theCardsBox dapp will be token gated with this NFT as access key.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32 bg-dackbackground"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-stone-100 font-Encode"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-solanagreen font-Encode">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:info_waitlist@thecardsbox.com"
              className="text-solanagreen font-Encode underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-stone-200 font-Encode">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-stone-100 font-Inter">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
