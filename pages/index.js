import Head from 'next/head'

import Footer from '../components/Footer'
import Header from '../components/Header'
import LaunchNotify from '../components/LaunchNotify'

import {
  HeartIcon,
  UsersIcon,
  VideoCameraIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  // BookmarkIcon,
  ClockIcon,
  CheckIcon,
  LinkIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Fast, stable video calls',
    description:
      'Connection is the entire point of telehealth; we prioritised the speed and stability of our video calls in our design process.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Private and secure',
    description:
      'Video calls are end-to-end encrypted. and our software undergoes regular third party security audits.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Stable, shareable room links',
    description:
      'Never again confuse your patients with constantly-changing room links. We provide a customisable room link that stays the same - session after session. Your clients will always know where to find you. Brand your room links with your full practice and practitioner name.',
    icon: LinkIcon,
    // #TODO: Alternatively, BookmarkIcon?
  },
  {
    name: 'Waiting rooms',
    description:
      'Display custom text content to your waiting patients - either on a practitioner or practice-wide basis. You have complete control over who can enter your room and the ability to remove participants.',
    icon: ClockIcon,
  },
  {
    name: 'Streamlined interface',
    description:
      'We prioritise the simplicity, stability and speed of your experience as a practitioner, and that of your patients.',
    icon: HeartIcon,
  },
  {
    name: 'Perfect for teams',
    description:
      'Manage and pay for a team of practitioners in one place. Freely nominate additional practice admins to take the burden out of practice administration.',
    icon: UsersIcon,
  },
  {
    name: 'Post-session survey integration',
    description: 'Know how you and your clients are developing.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Simple, clear pricing',
    description:
      'Simple pricing for both solo practitioners and teams, that includes all of our features.',
    icon: CheckIcon,
  },
  {
    name: 'Contantly improving',
    description:
      "We're always building.  Future integrations will include: Stripe billing and Medipass medicare rebate integration - all without leaving your video session; secure communications and document sharing; network building.",
    icon: CheckIcon,
  },
]
// const metrics = [
//   {
//     id: 1,
//     stat: '>500',
//     emphasis: 'Sessions',
//     rest: 'completed in beta to optimise the platform.',
//   },
//   {
//     id: 2,
//     stat: '99%',
//     emphasis: 'Client',
//     rest: 'satisfaction.',
//   },
//   {
//     id: 3,
//     stat: '1',
//     emphasis: 'Link',
//     rest: 'stable over time.',
//   },
//   {
//     id: 4,
//     stat: '$10',
//     emphasis: 'Issues resolved',
//     rest: 'lacus nibh integer quis.',
//   },
// ]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Poddle - Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white">
        <Header />

        <main>
          {/* Hero section */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="People working on laptops"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Remote practice management</span>
                    <span className="block text-indigo-200">you can trust</span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                    Secure, fast and reliable video calling for health practitioners.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                      >
                        Get started
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                      >
                        Live demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* #TODO: Logo Cloud - Disabled for MVP but specific users to be added in time for production launch. */}
          {/* <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                Trusted by over 5 very average small businesses
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                    alt="Tuple"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                    alt="Mirage"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div> */}

          {/* Alternating Feature Sections */}
          <div className="relative pt-16 pb-32 overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
            />
            <div className="relative">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                  <div>
                    <div>
                      <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                        <VideoCameraIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Video calling you can rely on
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        Don't settle for a sub-par video calling experience. Our end-to-end
                        encrypted, low latency video calling ensures that your conversations with
                        your patients ae as good as an in-person appointment.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                        >
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <blockquote>
                      <div>
                        <p className="text-base text-gray-500">
                          &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci
                          risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;
                        </p>
                      </div>
                      <footer className="mt-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <img
                              className="h-6 w-6 rounded-full"
                              src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                              alt=""
                            />
                          </div>
                          <div className="text-base font-medium text-gray-700">
                            Marcia Hill, Digital Marketing Manager
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                    <img
                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                      alt="Inbox user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-24">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                  <div>
                    <div>
                      <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                        <LinkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Stable, shareable room links
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        You don't keep more than one physical office - why change your video call
                        link for each session? With Poddle, your customisable room link stays the
                        same, session after session. Your clients will always know where to find
                        you.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                        >
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                  <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                    <img
                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                      alt="Customer profile user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Feature Section */}
          <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                A practice management tool that meets you where you are.
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-purple-200">
                Designed by practitioners for practitioners. We provide an integrated toolset with
                everything you need to manage your practice remotely - simply, conveniently and
                reliably.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <div>
                      <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                      <p className="mt-2 text-base text-purple-200">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* #TODO: Stats section - currently hidden although may restore */}
          {/* <div className="relative bg-gray-900">
            <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
              <div className="h-full w-full xl:grid xl:grid-cols-2">
                <div className="h-full xl:relative xl:col-start-2">
                  <img
                    className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="People working on laptops"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
              <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                <h2 className="text-sm font-semibold tracking-wide uppercase">
                  <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                    Valuable Metrics
                  </span>
                </h2>
                <p className="mt-3 text-3xl font-extrabold text-white">
                  Get actionable data that will help grow your business
                </p>
                <p className="mt-5 text-lg text-gray-300">
                  Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra
                  tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et
                  vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate
                  diam sit tellus quis at.
                </p>
                <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                  {metrics.map((item) => (
                    <p key={item.id}>
                      <span className="block text-2xl font-bold text-white">{item.stat}</span>
                      <span className="mt-1 block text-base text-gray-300">
                        <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                      </span>
                    </p>
                  ))}
                </div>
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
