import {useState} from "react";
import {validateEmail, classNames} from "../utils";

import { CheckIcon } from '@heroicons/react/outline'

export default function Newsletter() {
  const [form, setForm] = useState({email: "", status: null});

  const handleSubscribe = async e => {
    e.preventDefault();

    if(!validateEmail(form.email)) {
      alert("Email address is not valid");
      return
    }

    setForm({...form, status: "sending"});

    fetch(`/api/subscribe?email=${form.email}`).then(async (res) => {
      const result = await res.json()
      if (result?.status === 400) {
        const parseError = JSON.parse(result.response.text)
        setForm({ ...form, status: null })
        alert(parseError.message)
        return
      }

      setForm({ ...form, status: 'sent' })
      setTimeout(() => {
        setForm({ ...form, status: null })
      }, 1500)
    })
  }

  return (
    <div className="py-8 bg-white sm:py-4">
      <div className="relative sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
          <svg
            className="absolute -ml-3 top-8 left-1/2"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
          </svg>
        </div>
        <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative px-6 py-10 overflow-hidden shadow-xl rounded-2xl bg-gradient-to-r from-purple-800 to-indigo-700 sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-indigo-500 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-indigo-700 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {process.env.prelaunch ? 'Get notified when we launch.' : 'Start your trial now'}
                </h2>
                <p className="max-w-2xl mx-auto mt-6 text-lg text-indigo-200 text-opacity-90">
                  {process.env.prelaunch
                    ? `We're currently in closed beta, but please let us know your email address if you'd
                  like us to contact you when we're publicly available.`
                    : ''}
                </p>
              </div>
              {process.env.prelaunch ? (
                <form className="mt-12 sm:mx-auto sm:max-w-lg sm:flex" onSubmit={handleSubscribe}>
                  <div className="flex-1 min-w-0">
                    <label htmlFor="cta_email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="cta_email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      onClick={handleSubscribe}
                      type="submit"
                      className={classNames(
                        'block w-full px-5 py-3 text-base font-medium rounded-md text-white focus:outline-none focus:ring-2 sm:px-10 border border-transparent',
                        form.status === 'sent'
                          ? 'pointer-events-none cursor-not-allowed bg-green-200 text-green-600'
                          : form.status === 'sending'
                          ? 'pointer-events-none cursor-not-allowed opacity-70 bg-indigo-500'
                          : 'bg-indigo-500 shadow hover:bg-indigo-400 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600'
                      )}
                    >
                      {form.status === 'sent' ? (
                        <span className="flex items-center">
                          <CheckIcon
                            className="flex-shrink-0 w-6 h-6 text-green-600"
                            aria-hidden="true"
                          />
                          Subscribed
                        </span>
                      ) : (
                        <span>{form.status === "sending" ? "Subscribing..." : "Notify me"}</span>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex w-full mx-auto mt-12 md:w-max">
                  <a
                    href="https://app.podme.io/signup"
                    className="block w-full px-5 py-3 text-base font-medium text-center text-white bg-indigo-500 border border-transparent rounded-md shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                  >
                    Get started
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
