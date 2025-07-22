import Link from "next/link";

export function BlogTitleAndDes() {

    let blogsData = [
        {
            id: 1,
            fileName: "art-without-emotions-is-just-a-noise-thats-what-ai-is-doing",
            title: "Art Without Emotion Is Just Noise — And That's What AI Makes",
            imageUrl: "https://iamrv.pro/assets/images/art-emotions.png",
            description: "Everyone's talking about how AI..."
        },
        {
            id: 2,
            fileName: "how-to-use-ai-in-your-daily-life",
            title: "How to use AI in your Daily Life?",
            imageUrl: "https://iamrv.pro/assets/images/mybots.jpg",
            description: "Are you using AI too much..."
        },
        {
            id: 3,
            fileName: "when-the-student-is-ready-the-teacher-appears",
            title: "When the student is ready, the teacher appears.",
            imageUrl: "https://iamrv.pro/assets/images/sudharshan_vasanth.jpg",
            description: "On May 3, 2024, you were contemplating..."
        },
        {
            id: 4,
            fileName: "vaathiyar-ai-awarded-best-idea-idea-pattarai-workshop-ceo-suresh-sambandam-kiss-flow",
            title: `Vaathiyar.ai: Awarded "Best Idea" at Idea Pattarai Workshop by CEO Suresh Sambandam of Kiss Flow`,
            imageUrl: "https://iamrv.pro/assets/images/2X5A9424.jpg",
            description: "Vaathiyar.ai, a pioneering startup with..."
        },
        {
            id: 5,
            fileName: "impact-of-ai-in-medical-domain-priyadharshni-dental-college-and-hospital",
            title: "Impact of AI in medical domain - Priyadharshni Dental College and Hospital",
            imageUrl: "https://iamrv.pro/assets/images/thumb1Artboard.jpg",
            description: "The world of healthcare is undergoing..."
        },
        {
            id: 6,
            fileName: "ai-good-bad-funny",
            title: "AI the Good the Bad and the Funny",
            imageUrl: "https://iamrv.pro/assets/images/ai-good-bad-funny.jpg",
            description: "Discover the captivating world of..."
        },
        {
            id: 7,
            fileName: "breaking-barriers-arun-kumars-visionary-journey-visually-challenged-ml-expert",
            title: "Breaking Barriers: Arun Kumar's Visionary Journey as a Visually Challenged ML Expert",
            imageUrl: "https://iamrv.pro/assets/images/breaking-barriers-arun-kumars-visionary-journey-visually-challenged-ml-expert.jpg",
            description: "Unveiling the Extraordinary: How..."
        },
        {
            id: 8,
            fileName: "google-developers-student-club-organizes-tech-event-vit-chennai-campus",
            title: "Google Developers Student Club Organizes Tech Event in VIT Chennai Campus",
            imageUrl: "https://iamrv.pro/assets/images/google-developers-student-club-organizes-tech-event-vit-chennai-campus.jpg",
            description: "On April 8th, 2023, the Google Developers..."
        },
        {
            id: 9,
            fileName: "my-experience-with-stable-diffusion-and-how-it-transformed-my-images",
            title: "My Experience with Stable Diffusion and How it Transformed My Images",
            imageUrl: "https://iamrv.pro/assets/images/my-experience-with-stable-diffusion-and-how-it-transformed-my-images.png",
            description: "In this article, I share my experience..."
        },
        {
            id: 10,
            fileName: "two-days-workshop-in-payilagam",
            title: "Two Days Workshop in Payilagam",
            imageUrl: "https://iamrv.pro/assets/images/pailagam.jpeg",
            description: "I have recently led a successful..."
        },
        {
            id: 11,
            fileName: "old-it-dood-learning-has-no-limits",
            title: "Old IT Dood (Learning has no limits)",
            imageUrl: "https://iamrv.pro/assets/images/old-it-dood-learning-has-no-limits.jpeg",
            description: "I met an older software developer..."
        }
    ]



    return (
        blogsData.map((blog) => (

            <Link key={blog.id} href={`blog/${blog.fileName}`}>

                <div className="flex flex-col md:flex-row gap-4 py-8 md:px-4 w-full border-b border-gray-700 hover:bg-white hover:text-black duration-150 cursor-pointer">

                    <img src={blog.imageUrl} alt="image" className="md:h-38 md:w-38" />

                    <div>
                        <h2 className="font-bold text-lg md:ml-8 md:text-2xl">{blog.title}</h2>

                        <p className="text-[#6f6f6f] ml-6 md:ml-14 mt-2 text-md md:text-lg">{blog.description}</p>

                        <p className="ml-6 md:ml-14 text-md md:text-lg mt-6">Go to the last published {"->"}</p>
                    </div>

                </div>

            </Link>
        ))
    )
}