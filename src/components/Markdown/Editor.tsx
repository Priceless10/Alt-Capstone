interface EditorProps {
  markdownText: string
  setMarkdownText: (markdownText: string) => void
}

export const Editor = ({markdownText, setMarkdownText}: EditorProps)=>{
     


  return (
    <div className=" lg:h-full h-[350px] bg-gray-950 w-full relative  ">
      <h2 className="text-white semibold text-2xl p-3 sticky top-0 bg-gray-900 w-full">Edit Post</h2>

       <textarea className="overflow-box w-full h-[92%] border-r-2 border-gray-200 resize-none outline-none p-6 bg-gray-800 text-gray-200 overscroll-y-auto overflow-y-scroll" name="" id="" value={markdownText} onChange={(e)=> setMarkdownText(e.target.value)}/>


    </div>
  )
}