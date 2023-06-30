import { PostFeedProps } from "./PostFeed";


export const Article = ({ author, content, title, date, coverPhoto }: PostFeedProps) => {

  return (
    <>
      <div className="my-2 border shadow-md p-5">
        <div className="flex gap-3 items-center">
          {<img
            src={author.profilePhoto}
            alt=""
            className="w-[70px] h-[70px] border rounded-full"
          />}
          <div className="">
            <h3 className="font-semibold text-xl">{author.name}</h3>
          </div>
        </div>
        <div className="md:w-[90%] mt-3 mx-auto">

        
        <div className="mt-2 md:mt-4">
          <h2 className="font-semibold text-2xl">{title}</h2>
          <span className="text-gray-700 text-xs">{date}</span>
        </div>
        <div
          className="my-2 w-fulltext-sm prose prose-headings:font-normal"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <img src={coverPhoto} alt="" className={["w-[100%]  ", [coverPhoto && "min-h-[200px]" ]].join()} />
        </div>
        <ul className="mt-4 flex justify-between px-6 py-4">
          <li>comment</li>
          <li>likes</li>
          <li>views</li>
        </ul>
      </div>
    </>
  );
};
