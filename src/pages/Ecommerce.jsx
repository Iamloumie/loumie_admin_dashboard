import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';

// import chart components
import { Stacked, Pie, Button, SparkLine } from '../components';

import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';

const Ecommerce = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">

        {/* the banner and earning values with the button layouts */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center dark:text-gray-200">
            <div>
              <p className="font-bold text-slate-800">Earnings</p>
              <p className="text-2xl text-slate-600">$63,448.78</p>
            </div>
          </div>

          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        {/* the section representing all the earning cards from dummy.js */}
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
              >
                <button
                  type="button"
                  style={{  color: item.iconColor, backgroundColor: item.iconBg}}
                  className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                >
                  {item.icon}
                </button>

                <p className="mt-3">
                  <span className="text-lg font-semibold">
                    {item.amount}
                  </span>
                  <span className={`text-sm text-${item.pcColor} ml-12`}>
                    {item.percentage}
                  </span>
                </p>

                <p className="text-sm text-gray-400 mt-1">{item.title}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* another section (revenue section of the layout), meaning the hero-banner and the earning cards are together */}
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780">
          
          {/* The revenue update text and the div containing expenses, budget with dots */}
          <div className="flex justify-between p-5">
            <p className="font-semibold text-xl">
              Revenue Updates
            </p>

            {/* Expenses and budgets with their dots */}
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span><GoDotFill /></span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
                <span><GoDotFill /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          {/* The Charts layout and its corresponding labels */}
          <div className="mt-10 flex gap-10 flex-wrap justify-center">

            {/* The sparkline and revenue updates */}
            <div className="border-r-1 border-color m-4 pr-10">

              {/* Budget text and its price value */}
              <div>
                <p>
                  <span className="text-3xl font-semibold">
                    $93,438
                  </span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>

              {/* expenses text and its price value */}
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">
                    $48,438
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              {/* the sparkline chart */}
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                />
              </div>
              {/* the download report button */}
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>

            {/* The stacked chart of expenses and budget */}
            <div>
              <Stacked
                width="320px"
                height="360px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce