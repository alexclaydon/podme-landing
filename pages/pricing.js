import Head from "next/head";

import Footer from "../components/Footer";
import Header from "../components/Header";

import { CheckIcon } from "@heroicons/react/outline";

const features = [
  "Vitae in pulvinar odio id utobortis in inter.",
  "Sed sed id viverra viverra augue eget massa.",
  "Urna, gravida amet, a, integer venenatis.",
  "Lobortis sed pharetra amet vitae eleifend.",
  "Ullamcorper blandit a consequat donec elit aoreet.",
  "Dolor quo assumenda.",
  "Esse rerum distinctio maiores maiores.",
  "Eos enim officiis ratione.",
  "Tempore molestiae aliquid excepturi.",
  "Perspiciatis eveniet inventore eum et aliquam.",
];
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "Why do you never see elephants hiding in trees?",
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      "Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 5,
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 6,
    question: "Why did the invisible man turn down the job offer?",
    answer:
      "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <div>
      <Head>
        <title>Poddle - Pricing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white">
        <Header />

        <div className="bg-gradient-to-b from-blue-50 via-white to-white">
          {/* Pricing section with single price and feature list */}
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="pb-16 xl:flex xl:items-center xl:justify-between">
              <div>
                <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                  <span className="text-gray-900">
                    Everything you need for{" "}
                  </span>
                  <span className="text-blue-600">$99 a month</span>
                </h1>
                <p className="mt-5 text-xl text-gray-500">
                  Includes every feature we offer plus unlimited projects and
                  unlimited users.
                </p>
              </div>
              <a
                href="#"
                className="mt-8 w-full bg-blue-600 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 sm:mt-10 sm:w-auto xl:mt-0"
              >
                Get started today
              </a>
            </div>
            <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
              <div>
                <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">
                  Everything you need
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900">
                  All-in-one platform
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  Ac euismod vel sit maecenas id pellentesque eu sed
                  consectetur. Malesuada adipiscing sagittis vel nulla nec.
                  Urna, sed a lectus elementum blandit et.
                </p>
              </div>
              <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
                <ul className="divide-y divide-gray-200">
                  {features.slice(0, 5).map((feature, featureIdx) => (
                    <li
                      key={feature}
                      className={classNames(
                        featureIdx === 0 ? "md:py-0 md:pb-4" : "",
                        "py-4 flex"
                      )}
                    >
                      <CheckIcon
                        className="flex-shrink-0 h-6 w-6 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base text-gray-500">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <ul className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
                  {features.slice(5).map((feature, featureIdx) => (
                    <li
                      key={feature}
                      className={classNames(
                        featureIdx === 0 ? "md:border-t-0 md:py-0 md:pb-4" : "",
                        "py-4 flex"
                      )}
                    >
                      <CheckIcon
                        className="flex-shrink-0 h-6 w-6 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base text-gray-500">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Branded FAQ */}
        <div className="bg-blue-900">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white">
              Frequently asked questions
            </h2>
            <div className="mt-6 border-t border-blue-400 border-opacity-25 pt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
                {faqs.map((item) => (
                  <div key={item.id}>
                    <dt className="text-lg leading-6 font-medium text-white">
                      {item.question}
                    </dt>
                    <dd className="mt-2 text-base text-blue-200">
                      {item.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-blue-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              <span className="block text-blue-600">
                Start your free trial today.
              </span>
            </h2>
            <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="bg-blue-600 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-white hover:bg-blue-700"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
