import * as React from "react"
import CalendarIcon from "../../svg/calendar.svg"

const Meta = ({ author, date }) => {
  return (
    <div className="flex flex-wrap items-center w-full p-6 text-dark bg-white shadown-2xl rounded-2xl">
      <div className="mb-1 w-full sm:mb-0 sm:w-auto">
        By <span className="font-display">{author}</span>
      </div>

      <div className="sm:ml-auto">
        <CalendarIcon className="inline-block -mt-1 mr-2 h-4 w-auto" />
        {date}
      </div>
    </div>
  )
}

export default Meta
