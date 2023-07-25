import React from 'react'

const NewsSinglePage = ({ params, searchParams }) => {

  return (
    <div>NewsSinglePage {params?.id} {searchParams?.name}</div>
  )
}

export default NewsSinglePage