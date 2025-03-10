

const topNumbers: number[] = [1,2,3,4]
const bottomNumbers: number[] = [1,2,3,4]

export default function Home() {

    return (
      <>
      <div className="grid h-48 place-content-center text-7xl ">
        {topNumbers}  
      </div>
      <div className="grid h-48 place-content-center text-7xl">
        {bottomNumbers}
      </div>
        
    
      </>
);
 
}
