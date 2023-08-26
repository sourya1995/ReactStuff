export default function About(){

    useEffect(()=>{
        console.log(initialData);
      })
    return(
        <div className="container">
        {initialData.catGiphys.data.map((each, index) => {
            return(
              <div key="index">
                <h3>{each.title}</h3>
                <img src={each.images.original.url} alt={each.title}/>
              </div>
            )
          })}
          </div>
    )
}


export async function getServerSideProps(context) {
    const searchTerm = context.query.searchTerm
    let giphys = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=nPJNlVceWHERWCSDBW5XMo1p90l7l9ie&limit=6`)
    giphys = await giphys.json()
    return {props: {giphys: giphys}}  
  }