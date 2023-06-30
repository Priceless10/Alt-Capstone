import { marked } from  "marked"
import DOMPurify from "dompurify"
import hljs from "highlight.js"
import "highlight.js/styles/github.css"
import { useCreatePost } from "../../hooks/useCreatePost"

interface PreviewProps {
    markdownText: string
}
export const Preview = ({markdownText}: PreviewProps)=> {
  marked.setOptions({
    highlight: function (code, lang) {
      return hljs.highlightAuto(code, [lang]).value
    },
  })
  const {createPost} = useCreatePost()
    const parsed = DOMPurify.sanitize(marked.parse(markdownText))
  return (
    <div className="w-full h-[350px] lg:h-full relative bg-gray-950">
        <div className="text-white semibold text-2xl p-3 bg-gray-900 sticky top-0">Preview</div>
        <div className="overflow-box bg-gray-950 block prose max-w-full prose-invert prose-headings:text-gray-200 prose-a:text-blue-500 prose-a:no-underline h-[90%] p-3 overscroll-y-auto overflow-y-scroll" dangerouslySetInnerHTML={{__html: parsed}}></div>    
    </div>
  )
}

export default Preview