"use client"

import usePaginate from "./usePaginate";

const Home = () => {
  const { data, currentPage, nextPage, prevPage, isLoading } = usePaginate()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {isLoading ? <div>Loading ...</div> : <div>
        <table className="table-auto border-collapse border border-spacing-2 border-slate-500 m-2">
          <thead>
            <tr>
              {data && Object.keys(data[0]).map((item, i) => (<th className="border border-slate-600 p-2" key={i}>{item}</th>))}
            </tr>
          </thead>
          <tbody>
            {data && data.map((user: any, i: number) => {
              return (
                <tr key={i}>
                  {Object.values(user).map((item: any, index) => (<td className="border border-slate-700 p-2" key={index}>{item}</td>))}
                </tr>
              )
            })}

          </tbody>
        </table>

        <div className="flex">
          <button className="p-2 m-2 border border-radius disabled:cursor-not-allowed disabled:text-slate-600" onClick={prevPage} disabled={currentPage === 1 ? true : false}>{`<`} Prev</button>
          <span className="m-2 p-2 border border-radius">{currentPage}</span>
          <button className="p-2 m-2 border border-radius" onClick={nextPage} >Next {`>`}</button>
        </div>
      </div>
      }
    </main>

  );
}

export default Home
