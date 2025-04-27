import SearchBar from "@/components/SearchBar";


export default function Home() {
  return (
    <>
      <div className = "flex flex-row justify-center w-full">
        <div className = "flex flex-col justify-center items-center">
          <p className = "text-[2rem] my-[1rem]"> Project Webyte </p>
          <SearchBar/>

        </div>
      </div>
    </>
  );
}
