const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>     {/* this is passed as the children of the html prop */}
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img className="sadpug" src="/images/sadpug.jpg" alt="sadpug"/>
              <div>
                Photo by <a href="AUTHOR_LINK">Charles Deluvio</a> on <a href="UNSPLASH_LINK">UNSPLASH</a>
              </div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
