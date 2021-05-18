import Link from 'next/link'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export default function Header() {
  return (
    <header>
      <Popover className="fixed top-0 left-0 z-10 w-full bg-white bg-opacity-80 backdrop-filter backdrop-blur-md">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 md:justify-start md:space-x-10 lg:px-8">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <span className="sr-only">Workflow</span>
                <Link href="/">
                  <img
                    className="w-auto h-8 cursor-pointer sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                    alt=""
                  />
                </Link>
              </div>

              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              {/* Navigation bar */}
              <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                {/* Navigation buttons */}
                <div className="text-base font-medium text-gray-500 hover:text-gray-900">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </div>

                <div className="text-base font-medium text-gray-500 hover:text-gray-900">
                  <Link href="/pricing">
                    <a>Pricing</a>
                  </Link>
                </div>

                <div className="text-base font-medium text-gray-500 hover:text-gray-900">
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </div>

                <div className="text-base font-medium text-gray-500 hover:text-gray-900">
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </div>

                {/* <div className="text-base font-medium text-gray-500 hover:text-gray-900">
                  <Link href="/generic">
                    <a>Generic</a>
                  </Link>
                </div> */}

                {/* Sign in / Sign up buttons */}
              </Popover.Group>
              <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
                {process.env.prelaunch ? (
                  ''
                ) : (
                  <>
                    <a
                      href="https://pms-web-staging.herokuapp.com/login"
                      className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"
                    >
                      Sign in
                    </a>
                    <a
                      href="https://pms-web-staging.herokuapp.com/signup"
                      className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm whitespace-nowrap bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    >
                      Sign up
                    </a>
                  </>
                )}
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
              >
                <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                  <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="w-auto h-8"
                          src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-base font-medium text-gray-500 hover:text-gray-900">
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </div>

                      <div className="text-base font-medium text-gray-500 hover:text-gray-900">
                        <Link href="/pricing">
                          <a>Pricing</a>
                        </Link>
                      </div>

                      <div className="text-base font-medium text-gray-500 hover:text-gray-900">
                        <Link href="/contact">
                          <a>Contact</a>
                        </Link>
                      </div>

                      <div className="text-base font-medium text-gray-500 hover:text-gray-900">
                        <Link href="/about">
                          <a>About</a>
                        </Link>
                      </div>

                      {/* <div className="text-base font-medium text-gray-500 hover:text-gray-900">
                        <Link href="/generic">
                          <a>Generic</a>
                        </Link>
                      </div> */}
                    </div>
                    {process.env.prelaunch ? "" : <div className="mt-6">
                      <a
                        href="https://pms-web-staging.herokuapp.com/signup"
                        className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                      >
                        Sign up
                      </a>
                      <p className="mt-6 text-base font-medium text-center text-gray-500">
                        Existing customer?{' '}
                        <a
                          href="https://pms-web-staging.herokuapp.com/login"
                          className="text-gray-900"
                        >
                          Sign in
                        </a>
                      </p>
                    </div>}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </header>
  )
}
