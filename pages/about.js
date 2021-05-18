import Head from 'next/head'
import Image from 'next/image'

import Footer from '../components/Footer'
import Header from '../components/Header'

const people = [
  {
    name: 'Remy Lindner',
    role: 'Co-Founder',
    fileName: '/remy-lindner.jpg',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Sam Weily',
    role: 'Co-Founder',
    fileName: '/sam-weily.jpg',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Alex Claydon',
    role: 'Co-Founder',
    fileName: '/alex-claydon.jpg',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function About() {
  return (
    <div>
      <Head>
        <title>Podme - About</title>
      </Head>

      <div className="bg-white">
        <Header />

        <main>
          <section aria-labelledby="ourTeam">
            <div className="bg-white">
              <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
                  <div className="space-y-5 sm:space-y-4">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                      Meet our team
                    </h2>
                    <p className="text-xl text-gray-500">
                      It’s no joke ... two psychologists and a lawyer walked into a telehealth room
                      and noticed some short comings. Patchy video, privacy concerns plus constantly
                      sending new session links formed the basis of our desire to create a simple,
                      static, stable, secure way to connect. That’s how Podme was born. Podme takes
                      the same simple approach to calendar integrations, session reminders and
                      payments, without leaving your session.
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
                      {people.map((person) => (
                        <li key={person.name}>
                          <div className="flex items-center space-x-4 lg:space-x-6">
                            {/* #TODO: Use of `next/image` with Node 16 on Apple Silicon leads to a segfault (see [here](https://github.com/vercel/next.js/issues/24564) and [here](https://github.com/vercel/next.js/issues/24565); Image component temporarily disabled but to be re-enabled later.) */}
                            {/* <Image
                              className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                              src={person.fileName}
                              alt=""
                              layout="fill"
                            /> */}
                            <div className="space-y-1 text-lg font-medium leading-6">
                              <h3>{person.name}</h3>
                              <p className="text-indigo-600">{person.role}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="getInTouch">
            <div className="bg-white">
              <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8">
                <div className="divide-y-2 divide-gray-200">
                  <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                      Get in touch
                    </h2>
                    <div className="grid grid-cols-1 gap-12 mt-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                      <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Press</h3>
                        <dl className="mt-2 text-base text-gray-500">
                          <div>
                            <dt className="sr-only">Email</dt>
                            <dd>support@example.com</dd>
                          </div>
                          {/* <div className="mt-1">
                            <dt className="sr-only">Phone number</dt>
                            <dd>+1 (555) 123-4567</dd>
                          </div> */}
                        </dl>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Join our team
                        </h3>
                        <dl className="mt-2 text-base text-gray-500">
                          <div>
                            <dt className="sr-only">Email</dt>
                            <dd>support@example.com</dd>
                          </div>
                          {/* <div className="mt-1">
                            <dt className="sr-only">Phone number</dt>
                            <dd>+1 (555) 123-4567</dd>
                          </div> */}
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
