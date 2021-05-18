import Head from 'next/head'
import {useState} from "react";

import Footer from '../components/Footer'
import Header from '../components/Header'
import LaunchNotify from '../components/LaunchNotify'

import { MailIcon, PhoneIcon, CheckIcon } from '@heroicons/react/outline'

import { validateEmail, classNames } from '../utils'

export default function Contact() {
  const formDefaults = {first_name: "", last_name: "", email: "", phone: "", subject: "", message: "", status: null}
  const [form, setForm] = useState(formDefaults)

  const handleFormChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value, status: null })
  }
  
  const handleSubmit = async e => {
    e.preventDefault();

    const isValidForm =
      form?.first_name?.trim() === '' ||
      form?.last_name?.trim() === '' ||
      form?.email?.trim() === '' ||
      form?.subject?.trim() === '' ||
      form?.message?.trim() === '';

    if(isValidForm) {
      alert("Please fill all mandatory fields in the form")
      return 
    }

    if(!validateEmail(form.email)) {
      alert("Please enter valid email")
      return 
    }

    if(form?.message?.length > 500) {
      alert("Message cannot contain more than 500 characters")
      return 
    }

    const message = {
      to: form.email,
      subject: form.subject,
      text: form.phone ? `Phone: ${form.phone} \n\n ${form.message}` : form.message,
    }

    fetch(`/api/contact`, {
      method: 'POST',
      body: JSON.stringify(message)
    })
      .then(async () => {
        setForm({...form, status: 'sending'});
        setTimeout(() => setForm({...formDefaults, status: 'sent'}), 1500);
      })
  }

  return (
    <div>
      <Head>
        <title>Podme - Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />

        <main className="overflow-hidden">
          {/* Header */}
          <div className="bg-gray-50">
            <div className="py-6">
              <div className="relative z-10 pl-4 pr-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Get in touch
                </h1>
                <p className="max-w-3xl mt-6 text-xl text-gray-500">
                  We are working towards our launch date, and invite people to get in touch to find
                  out more. We also like hearing from industry people, clients and those with a good
                  story to share.
                </p>
              </div>
            </div>
          </div>

          {/* Contact section */}
          <section className="relative bg-white" aria-labelledby="contactHeading">
            <div>
              <div className="px-4 mx-auto max-w-7xl sm:py-8 sm:px-6 lg:px-8">
                <div className="relative bg-gray-100 shadow-xl">
                  <h2 className="sr-only">Contact us</h2>

                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Contact information */}
                    <div className="relative px-6 py-10 overflow-hidden bg-gradient-to-r from-purple-800 to-indigo-700 sm:px-10 xl:p-12">
                      <div
                        className="absolute inset-0 pointer-events-none sm:hidden"
                        aria-hidden="true"
                      >
                        <svg
                          className="absolute inset-0 w-full h-full"
                          width={343}
                          height={388}
                          viewBox="0 0 343 388"
                          fill="none"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                            fill="url(#linear1)"
                            fillOpacity=".1"
                          />
                          <defs>
                            <linearGradient
                              id="linear1"
                              x1="254.553"
                              y1="107.554"
                              x2="961.66"
                              y2="814.66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop offset={1} stopColor="#fff" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none sm:block lg:hidden"
                        aria-hidden="true"
                      >
                        <svg
                          className="absolute inset-0 w-full h-full"
                          width={359}
                          height={339}
                          viewBox="0 0 359 339"
                          fill="none"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                            fill="url(#linear2)"
                            fillOpacity=".1"
                          />
                          <defs>
                            <linearGradient
                              id="linear2"
                              x1="192.553"
                              y1="28.553"
                              x2="899.66"
                              y2="735.66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop offset={1} stopColor="#fff" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none lg:block"
                        aria-hidden="true"
                      >
                        <svg
                          className="absolute inset-0 w-full h-full"
                          width={160}
                          height={678}
                          viewBox="0 0 160 678"
                          fill="none"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                            fill="url(#linear3)"
                            fillOpacity=".1"
                          />
                          <defs>
                            <linearGradient
                              id="linear3"
                              x1="192.553"
                              y1="325.553"
                              x2="899.66"
                              y2="1032.66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop offset={1} stopColor="#fff" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-white">Contact information</h3>
                      <p className="max-w-3xl mt-6 text-base text-indigo-50">
                        If you like what you’ve seen and want to know more, drop us a message using
                        this form.
                      </p>
                      <dl className="mt-8 space-y-6">
                        <dt>
                          <span className="sr-only">Phone number</span>
                        </dt>
                        {/* <dd className="flex text-base text-indigo-50">
                          <PhoneIcon
                            className="flex-shrink-0 w-6 h-6 text-indigo-200"
                            aria-hidden="true"
                          />
                          <span className="ml-3">+1 (555) 123-4567</span>
                        </dd> */}
                        <dt>
                          <span className="sr-only">Email</span>
                        </dt>
                        {/* <dd className="flex text-base text-indigo-50">
                          <MailIcon
                            className="flex-shrink-0 w-6 h-6 text-indigo-200"
                            aria-hidden="true"
                          />
                          <span className="ml-3">support@workcation.com</span>
                        </dd> */}
                      </dl>
                    </div>

                    {/* Contact form */}
                    <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
                      <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
                      <form
                        onSubmit={handleSubmit}
                        method="POST"
                        className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                      >
                        <div>
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-gray-900"
                          >
                            First name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="first_name"
                              id="first_name"
                              value={form.first_name}
                              onChange={handleFormChange}
                              autoComplete="given-name"
                              className="block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="last_name"
                            className="block text-sm font-medium text-gray-900"
                          >
                            Last name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="last_name"
                              id="last_name"
                              value={form.last_name}
                              onChange={handleFormChange}
                              autoComplete="family-name"
                              className="block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-900"
                          >
                            Email
                          </label>
                          <div className="mt-1">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={form.email}
                              onChange={handleFormChange}
                              autoComplete="email"
                              className="block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Phone
                            </label>
                            <span id="phone-optional" className="text-sm text-gray-500">
                              Optional
                            </span>
                          </div>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              onChange={handleFormChange}
                              autoComplete="tel"
                              className="block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                              aria-describedby="phone-optional"
                              value={form.phone}
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-gray-900"
                          >
                            Subject
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="subject"
                              id="subject"
                              onChange={handleFormChange}
                              value={form.subject}
                              className="block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <div className="flex justify-between">
                            <label
                              htmlFor="message"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Message
                            </label>
                            <span id="message-max" className="text-sm text-gray-500">
                              Max. 500 characters
                            </span>
                          </div>
                          <div className="mt-1">
                            <textarea
                              id="message"
                              onChange={handleFormChange}
                              name="message"
                              rows={4}
                              className="block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                              aria-describedby="message-max"
                              value={form.message}
                            />
                          </div>
                        </div>
                        <div className="items-center mt-2 sm:flex-row-reverse sm:col-span-2 sm:flex sm:justify-between">
                          <button
                            onClick={handleSubmit}
                            type="submit"
                            className={classNames(
                              'inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm  focus:outline-none  sm:w-auto',
                              form.status === 'sending'
                                ? 'pointer-events-none cursor-not-allowed bg-gray-300 text-gray-500 opacity-50'
                                : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            )}
                          >
                            {form.status === 'sending' ? 'Sending...' : 'Submit'}
                          </button>
                          {form.status === "sent" && <div className="flex items-center justify-center mt-4 font-medium text-green-500 sm:mt-0">
                            <CheckIcon
                              className="flex-shrink-0 w-6 h-6 mr-1 text-green-500"
                              aria-hidden="true"
                            />
                            Message sent successfully
                          </div>}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* #TODO: Email notification section: To be used to allow people to register during the beta period to receive notification of our public launch date; following public launch, to be removed entirely (unlike other pages, where it will be replaced with a `Trial` component) */}
          <LaunchNotify />
        </main>

        <Footer />
      </div>
    </div>
  )
}
