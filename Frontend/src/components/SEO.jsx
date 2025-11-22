import { Helmet } from "react-helmet";

export default function SEO({
    title = "Retro AI Video Generator",
    description = "Generate nostalgic AI videos using simple text prompts.",
    image = "/og-image.png",
}){
    return (
        <Helmet>
            <title>{title}</title>
             <meta name="description" content={description} />

              {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    )
}