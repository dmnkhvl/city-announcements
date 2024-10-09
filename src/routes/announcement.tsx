import { useState } from "react"
import { IoChevronBackOutline } from "react-icons/io5"
import { useNavigate, useParams } from "react-router-dom"

import { MultiValue } from "react-select"
import Select from "react-select/base"
import { Announcement as AnnouncementT } from "../types/announcement"
import { announcements } from "../data/announcements"

type OptionT = { value: string; label: string }

const options: OptionT[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
]

export default function AnnouncementPage() {
  const navigate = useNavigate()
  const { announcementId } = useParams()

  const id = parseInt(announcementId!, 10)

  const announcement = announcements[id]

  if (!announcement) {
    return <div>Announcement not found</div>
  }

  const [selectedCategories, setSelectedCategories] = useState<MultiValue<OptionT>>([])

  const handleChange = (selectedOptions: MultiValue<OptionT>) => {
    setSelectedCategories(selectedOptions)
  }

  return (
    <div className="px-80 py-12 w-full">
      <header className="flex items-center gap-x-2 mb-6">
        <button onClick={() => navigate(-1)}>
          <IoChevronBackOutline size={24} />
        </button>
        <h1 className="pageTitle ">Edit </h1>
      </header>
      <form className="w-full max-w-[80%]">
        <main className="flex flex-col gap-y-6">
          <section className="flex flex-col gap-y-4">
            <div>
              <label className="formLabel" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={announcement.title}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Announcement title"
              />
            </div>
            <div>
              <label className="formLabel" htmlFor="content">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full h-64"
              />
            </div>
          </section>
          <section>
            <h2 className="pageSubTitle">Category</h2>
            <p className="formLabel pb-2">
              Select category so readers know what your announcement is about.
            </p>
            <Select
              id="categories"
              options={options}
              isMulti
              value={selectedCategories}
              onChange={handleChange}
              className="mb-4"
              classNamePrefix="select"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              {...({} as any)}
            />
          </section>
          <section>
            <h2 className="pageSubTitle mb-4">Publication Date</h2>
            <input
              type="datetime-local"
              id="title"
              name="title"
              value={announcement.publicationDate}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              placeholder="Enter the announcement title"
            />
          </section>
        </main>
        <footer className="w-full justify-end flex pt-10">
          <button className="px-4 py-2 rounded-full bg-action" onClick={() => console.log("todo")}>
            <p className="font-bold">Publish</p>
          </button>
        </footer>
      </form>
    </div>
  )
}
