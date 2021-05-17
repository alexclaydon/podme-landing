import Head from 'next/head'

import Footer from '../components/Footer'
import Header from '../components/Header'
import LaunchNotify from '../components/LaunchNotify'

import { CheckIcon } from '@heroicons/react/outline'

const features = [
  'End-to-end encrypted, low-latency video calling.',
  'Connect easily with static, shareable room links.',
  'Calendar integration for managing client appointments.',
  'Medicare rebate integration.',
  'Receive client payments in-session.',
  'Unlimited client records.',
  'Customisable waiting room content.',
  'Access to psychometric testing resources.',
  'Free administrative account for managing teams.',
  'Add and manage team practitioners for a fixed fee of $10 per month per practitioner.',
]
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 4,
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 5,
    question: 'What do you call someone with no body and no nose?',
    answer:
      'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 6,
    question: 'Why did the invisible man turn down the job offer?',
    answer:
      "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  return (
    <div>
      <Head>
        <title>Podme - Pricing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white">
        <Header />

        <main>
          <div className="bg-gradient-to-b from-blue-50 via-white to-white">
            {/* Pricing section with single price and feature list */}
            <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
              <div className="pb-16 xl:flex xl:items-center xl:justify-between">
                <div>
                  <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                    <span className="text-gray-900">Everything you need for </span>
                    <span className="text-blue-600">$10 a month</span>
                    <span className="text-gray-900"> per practitioner</span>
                  </h1>
                  <p className="mt-5 text-xl text-gray-500">
                    Includes every feature we offer for one fixed monthly price.
                  </p>
                </div>
                {process.env.prelaunch ? "" : <a
                  href="https://pms-web-staging.herokuapp.com/signup"
                  className="inline-flex items-center justify-center px-5 py-3 mt-8 text-base font-medium text-white border border-transparent rounded-md whitespace-nowrap bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 sm:mt-10 sm:w-auto xl:mt-0"
                >
                  Get started today
                </a>}
              </div>
              <div className="pt-16 border-t border-gray-200 xl:grid xl:grid-cols-3 xl:gap-x-8">
                <div>
                  <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
                    Everything you need
                  </h2>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900">All-in-one platform</p>
                  <p className="mt-4 text-lg text-gray-500">
                    Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada
                    adipiscing sagittis vel nulla nec. Urna, sed a lectus elementum blandit et.
                  </p>
                </div>
                <div className="mt-4 sm:mt-8 md:mt-10 xl:mt-0 xl:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
                    {features.map((feature, featureIdx) => (
                      <li
                        key={feature}
                        className={classNames(
                          !featureIdx === 0 || !featureIdx === 5 ? 'md:py-0 md:pb-4' : '',
                          'py-4 flex border-b border-gray-200'
                        )}
                      >
                        <CheckIcon
                          className="flex-shrink-0 w-6 h-6 text-green-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* #TODO: We may reinstate the FAQ box at a later date in response to customer / beta feedback. */}
          {/* Branded FAQ */}
          {/* <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
            <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-white">Frequently asked questions</h2>
              <div className="pt-10 mt-6 border-t border-blue-400 border-opacity-25">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
                  {faqs.map((item) => (
                    <div key={item.id}>
                      <dt className="text-lg font-medium leading-6 text-white">{item.question}</dt>
                      <dd className="mt-2 text-base text-blue-200">{item.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div> */}

          {/* #TODO: Email notification section: To be used to allow people to register during the beta period to receive notification of our public launch date; following public launch, to be replaced with `Trial` component */}
          <LaunchNotify />
        </main>

        <Footer />
      </div>
    </div>
  )
}
