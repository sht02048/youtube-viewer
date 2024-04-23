import { useState } from "react";
import useYoutubeKeywordStore from "../../store/videoInfo";

export default function SearchForm () {
  const [keyword, setKeyword] = useState("");
  const { setYoutubeKeyword } = useYoutubeKeywordStore();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    setYoutubeKeyword(keyword);
  }

  return (
    <div
      className="mr-32">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Youtube 검색"
          name="searchInput"
          onChange={(event) => setKeyword(event.target.value)}
          className="px-2"/>
        <button
          className="bg-white border m-1 px-2">
          검색
        </button>
      </form>
    </div>
  );
}