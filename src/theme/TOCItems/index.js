import React from 'react'
import TOCItems from '@theme-original/TOCItems'

export default function TOCItemsWrapper(props) {
  return (
    <>
      <h2 className="border-l border-gray-100 my-0 mb-[-8px] pb-[12px] pl-[40px] text-gray-500 font-medium uppercase text-[16px]">
        Contents
      </h2>
      <TOCItems {...props} />
    </>
  )
}
