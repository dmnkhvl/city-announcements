import { useEffect, useState } from "react"
import { IoChevronBackOutline } from "react-icons/io5"
import { useNavigate, useParams } from "react-router-dom"
import { MultiValue } from "react-select"
import Select from "react-select"
import { getAnnouncementCategoryOptions } from "../helpers"
import { trpc } from "../trpc"
import dayjs from "dayjs"
import { useAnnouncements } from "../context/announcementContext"

type AnnouncementCategoryOption = { value: string; label: string }

const options: AnnouncementCategoryOption[] = getAnnouncementCategoryOptions()

export default function AnnouncementPage() {
  const navigate = useNavigate()
  const { announcementId } = useParams<{ announcementId: string }>()

  const id = parseInt(announcementId!, 10)

  const {
    data: announcement,
    isLoading,
    error,
  } = trpc.announcement.getById.useQuery(
    { id },
    {
      staleTime: 0, // Always fetch fresh data for the edit page
    }
  )

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [publicationDate, setPublicationDate] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<
    MultiValue<AnnouncementCategoryOption>
  >([])

  useEffect(() => {
    if (announcement) {
      setTitle(announcement.title || "")
      setContent(announcement.content || "")
      setPublicationDate(dayjs(announcement.publicationDate).format("YYYY-MM-DDTHH:mm"))

      setSelectedCategories(
        announcement.categories.map((category: string) => ({
          value: category,
          label: category.replace("_", " "),
        }))
      )
    }
  }, [announcement])

  const { invalidateAll } = useAnnouncements()

  const { mutate: updateAnnouncement } = trpc.announcement.update.useMutation({
    onSuccess: () => {
      navigate(-1)
      invalidateAll()
      console.log("Update successful")
    },
    onError: (error) => {
      console.error("Update announcement error:", error)
    },
  })

  const handleCategoryChange = (selectedOptions: MultiValue<AnnouncementCategoryOption>) => {
    setSelectedCategories(selectedOptions)
  }

  const handlePublish = () => {
    if (!title.trim()) {
      alert("Title is required.")
      return
    }

    if (!content.trim()) {
      alert("Content is required.")
      return
    }

    if (!publicationDate) {
      alert("Publication Date is required.")
      return
    }

    if (selectedCategories.length === 0) {
      alert("At least one category must be selected.")
      return
    }

    const updatedAnnouncement = {
      id,
      title,
      content,
      publicationDate: new Date(publicationDate).toISOString(),
      categories: selectedCategories.map((option) => option.value),
    }
    updateAnnouncement(updatedAnnouncement)
  }

  if (isLoading) {
    return <div></div>
  }

  if (error || !announcement) {
    return <div>Announcement not found</div>
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
