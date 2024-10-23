'use client'

import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import Reviews from './Reviews';

const Tabz = () => {
  return (
    <div>
        <Tabs>
            <TabList className={`flex flex-row justify-between cursor-pointer`}>
                <Tab className={`border-b-2 border-[#ccc] active:border-[#000] w-full text-gray-500 active:text-black text-center p-2 outline-none`}>Product Details</Tab>
                <Tab className={`border-b-2 border-[#ccc] active:border-[#000] w-full text-gray-500 active:text-black text-center p-2 outline-none`}>Rating & Review</Tab>
                <Tab className={`border-b-2 border-[#ccc] active:border-[#000] w-full text-gray-500 active:text-black text-center p-2 outline-none`}>FAQs</Tab>
            </TabList>
            <TabPanel className={`m-4`}>Product Details</TabPanel>
            <TabPanel className={`m-4`}>
                <Reviews/>
            </TabPanel>
            <TabPanel className={`m-4`}>Content for Tab 3</TabPanel>
        </Tabs>
    </div>
  )
}

export default Tabz