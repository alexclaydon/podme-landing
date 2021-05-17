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
  CurrencyDollarIcon,
} from '@heroicons/react/outline'

const features = [
  // {
  //   name: 'Fast, stable video calls',
  //   description:
  //     'Connection is the entire point of telehealth; we prioritised the speed and stability of our video calls in our design process.',
  //   icon: VideoCameraIcon,
  // },
  {
    name: 'Private and secure',
    description:
      'Video calls on Podme are end-to-end encrypted. Our software undergoes regular third party security audits.',
    icon: ShieldCheckIcon,
  },
  // {
  //   name: 'Static, shareable room links',
  //   description:
  //     'Never again confuse your patients with constantly-changing room links. We provide a customisable room link that stays the same - session after session. Your clients will always know where to find you. Brand your room links with your full practice and practitioner name.',
  //   icon: LinkIcon,
  //   // #TODO: Alternatively, BookmarkIcon?
  // },
  {
    name: 'Waiting rooms',
    description:
      'Display custom text content to your waiting clients - either as individual practitioners or whole practice. You have complete control over which clients can enter your room and the ability to remove them.',
    icon: ClockIcon,
  },
  {
    name: 'Streamlined interface',
    description:
      'We prioritise the simplicity, stability and speed of the telehealth experience. No bloatware, no ads, no fuss.',
    icon: HeartIcon,
  },
  {
    name: 'Perfect for teams',
    description:
      'Manage and pay for a team of practitioners in one place. Freely nominate additional practice administrators to remove the burden of practice management.',
    icon: UsersIcon,
  },
  {
    name: 'Post-session survey integration',
    description:
      'Know how you and your clients are developing.  Select pre and post-session surveys from our survey bank, or link your own.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Simple, clear pricing',
    description:
      'Simple pricing for both solo practitioners and teams. One price includes all features.',
    icon: CurrencyDollarIcon,
  },
  // {
  //   name: 'Contantly improving',
  //   description:
  //     "We're always building.  Future integrations will include: Stripe billing and Medipass medicare rebate integration - all without leaving your video session; secure communications and document sharing; network building.",
  //   icon: CheckIcon,
  // },
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Podme - Welcome</title>
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
                    className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-400"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Podme</span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                    Secure, fast and reliable video calling for health practitioners.
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                        We recognise privacy and connectivity are important. Our end-to-end
                        encrypted, low latency video calling ensures conversations are as good as an
                        in-person appointment ... with the door closed.
                      </p>
                      {/* #TODO: Button to be reinstated once the full product launch happens - will take you to "Sign up" process. */}
                      {/* <div className="mt-6">
                        <a
                          href="#"
                          className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                        >
                          Get started
                        </a>
                      </div> */}
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
                        Static, shareable room links
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        Never again confuse your clients with constantly-changing room links. With
                        Podme, your customisable room link stays the same, session after session.
                        Regular clients will always know where to find you, and you’ll find it easy
                        to share your location with new clients.
                      </p>
                      {/* #TODO: Button to be reinstated once the full product launch happens - will take you to "Sign up" process. */}
                      {/* <div className="mt-6">
                        <a
                          href="#"
                          className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                        >
                          Get started
                        </a>
                      </div> */}
                    </div>
                    <div className="mt-8 border-t border-gray-200 pt-6">
                      <blockquote>
                        <div>
                          <p className="text-base text-gray-500">
                            &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit
                            orci risus aenean curabitur donec aliquet. Mi venenatis in euismod
                            ut.&rdquo;
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
                Designed by allied health practitioners with allied health practitioners and clients
                in mind. Clients are seeking new and flexible ways to connect with their clinicians.
                Podme provides the additional resources to simply and smoothly deliver - an
                integrated toolset with everything you need to manage your practice remotely.
                Simply, conveniently and reliably.
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

          {/* #TODO: Email notification section: To be used to allow people to register during the beta period to receive notification of our public launch date; following public launch, to be replaced with `Trial` component */}
          <LaunchNotify />
        </main>

        <Footer />
      </div>
    </div>
  )
}
