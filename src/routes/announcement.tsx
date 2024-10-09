import { useState } from "react"
import { IoChevronBackOutline } from "react-icons/io5"
import { useNavigate, useParams } from "react-router-dom"
import { MultiValue } from "react-select"
import Select from "react-select"
import { useAnnouncements } from "../context/AnnouncementsContext"
import { AnnouncementCategory } from "../types"

type OptionT = { value: string; label: string }

const options: OptionT[] = [
  { value: AnnouncementCategory.COMMUNITY_EVENTS, label: "Community Events" },
  { value: AnnouncementCategory.CULTURE, label: "Culture" },
  { value: AnnouncementCategory.CRIME_SAFETY, label: "Crime & Safety" },
  { value: AnnouncementCategory.EMERGENCIES, label: "Emergencies" },
  { value: AnnouncementCategory.DISCOUNTS_BENEFITS, label: "Discounts & Benefits" },
  { value: AnnouncementCategory.KIDS_FAMILY, label: "Kids & Family" },
]

export default function AnnouncementPage() {
  const navigate = useNavigate()

  const { announcementId } = useParams<{ announcementId: string }>()
  const { getAnnouncementById, updateAnnouncement } = useAnnouncements()

  const id = parseInt(announcementId!, 10)

  const announcement = getAnnouncementById(id)

  if (!announcement) {
    return <div>Announcement not found</div>
  }

  const [title, setTitle] = useState(announcement.title)
  const [content, setContent] = useState(announcement.content || "")
  const [publicationDate, setPublicationDate] = useState(announcement.publicationDate)

  const initialCategories = announcement.categories.map((category) => ({
    value: category,
    label: category.replace("_", " "),
  }))
  const [selectedCategories, setSelectedCategories] =
    useState<MultiValue<OptionT>>(initialCategories)

  const handleCategoryChange = (selectedOptions: MultiValue<OptionT>) => {
    setSelectedCategories(selectedOptions)
  }

  const handlePublish = () => {
    const updatedAnnouncement = {
      ...announcement,
      title,
      content,
      publicationDate,
      lastUpdate: new Date().toISOString(),
      categories: selectedCategories.map((option) => option.value as AnnouncementCategory),
    }

    updateAnnouncement(updatedAnnouncement)

    navigate(-1)
  }

  return (
    <div className="py-12 w-full flex justify-center">
      <div className="w-[800px] px-10">
        <header className="flex items-center gap-x-2 mb-6">
          <button onClick={() => navigate(-1)}>
            <IoChevronBackOutline size={24} />
          </button>
          <h1 className="pageTitle">Edit Announcement</h1>
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full h-64"
                  placeholder="Announcement content"
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
                onChange={handleCategoryChange}
                className="mb-4"
                classNamePrefix="select"
              />
            </section>
            <section>
              <h2 className="pageSubTitle mb-4">Publication Date</h2>
              <input
                type="datetime-local"
                id="publicationDate"
                name="publicationDate"
                value={publicationDate}
                onChange={(e) => setPublicationDate(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="MM/DD/YYYY HH:mm"
              />
            </section>
          </main>
          <footer className="w-full justify-end flex pt-10">
            <button
              type="button"
              className="px-4 py-2 rounded-full bg-action"
              onClick={handlePublish}
            >
              <p className="font-bold">Publish</p>
            </button>
          </footer>
        </form>
      </div>
    </div>
  )
}
