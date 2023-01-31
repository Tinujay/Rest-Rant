const React = require('react')
const Def = require('../default')

function edit_form (data) {
    return (
        <Def>
          <main>
          <h1>Make Some Changes</h1>
          <br></br>
            <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" value={data.place.name} required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>
                    <div className="form-group col-sm-6">
                         <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" />
                    </div>
                    <div className="form-group col-sm-12">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <input className="btn btn-primary" type="submit" value="Save Changes" />
                    </div>
                </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form
