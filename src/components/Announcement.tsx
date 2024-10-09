import { useState } from "react"

import { MultiValue } from "react-select"
import Select from "react-select/base"

type OptionT = { value: string; label: string }

const options: OptionT[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
]

export default function Announcement() {
  const [selectedCategories, setSelectedCategories] = useState<MultiValue<OptionT>>([])

  const handleChange = (selectedOptions: MultiValue<OptionT>) => {
    setSelectedCategories(selectedOptions)
  }

  return (
    <div className="px-80 py-20 w-full">
      <h1 className="text-2xl font-bold mb-4">Edit the announcement</h1>
      <form className="w-full max-w-[80%]">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            placeholder="Enter the announcement title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full h-64"
            placeholder="Enter the announcement content"
          />
        </div>
        <section>
          <h2>Category</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="title">
              Select category so readers know what your announcement is about.
            </label>

            <Select
              id="categories"
              options={options}
              isMulti
              value={selectedCategories}
              onChange={handleChange}
              className="basic-multi-select"
              classNamePrefix="select"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              {...({} as any)}
            />
          </div>
        </section>
        <section>
          <h2>Publication Date</h2>
          <input
            type="datetime-local"
            id="title"
            name="title"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            placeholder="Enter the announcement title"
          />
        </section>
        <footer className="w-full justify-end flex py-10">
          <button className="px-4 py-2 rounded-full bg-action" onClick={() => console.log("todo")}>
            Publish
          </button>
        </footer>
      </form>
    </div>
  )
}
