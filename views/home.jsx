const React = require('react') //imports react library (allows to write HTML like elements)(put in every JSX)
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
              <div>
                <img className="pancakes" src="/images/bananapancakes.jpg" alt="banana cupcakes"/>
              <div class="credits">
                Photo by <a href="AUTHOR_LINK">Chad Montano</a> on <a href="UNSPLASH_LINK">UNSPLASH</a>
              </div>
              </div>
              <a href="./places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  



module.exports = home
