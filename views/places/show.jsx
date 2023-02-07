const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className="row">
                    <h1>{ data.place.name }</h1>
                    <img src={data.place.pic} alt={data.place.name} />  
                    <p>
                        Located in {data.place.city}, {data.place.state}
                    </p>
                </div>
                <div className="col-sm-6">
                    <h3>Rating:</h3>
                        <p>Currently Unrated</p>
                    <h3>Comments:</h3>
                        <p>No comments yet!</p>
                    <h2>Description:</h2>
                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <h4>
                        Serving {data.place.cuisines}
                    </h4>

                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>  

                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                        <button type="submit" className="btn btn-danger">Delete</button>
                    </form>  
                </div>  
          </main>
        </Def>
    )
}

module.exports = show

