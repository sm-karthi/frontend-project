import { CommentsType } from "@/types"

export function Comments() {

    

    const comments: CommentsType[] = [
        {
            id: 1,
            date: "23/02/2025",
            name: "Karthikeyan",
            comment: "You have many excellent articles."
        },
         {
            id: 2,
            date: "23/02/2025",
            name: "Karthikeyan",
            comment: "And now, just a week later, the internet has already moved on to something else. Is this a healthy way to treat art and creativity? Never. Art is not just about a style or an image. It's about the story, the emotions, the effort, and the vision behind it."
        }
    ]

    return (
        <div className="mx-auto max-w-4xl mb-20">

            {
                comments.map((comment) => (

                    <div key={comment.id} className="border-b border-b-gray-700 py-4">

                        <h2 className="font-semibold text-2xl">{comment.name} <span className="text-sm font-light">{comment.date}</span></h2>

                        <p className="text-lg mt-3">{comment.comment}</p>

                    </div>
                ))
            }



        </div>
    )
}