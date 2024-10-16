const container = (
  <div className="container" id="container">
    <section>
      <p>The library for web and native user interfaces</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        style={{
          width: 300,
          backgroundColor: 'teal',
          borderRadius: 8,
          padding: 16,
        }}
      />
    </section>
    <section>
      <form>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input id="username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
      </form>
    </section>
  </div>
)

console.log(container);//aaplyala as vatt ki hi line console mdhe distiye
//pn ts nahi. actually console mdhe (lib->script.js.map) ya file mdhla data disto. jri script.js delete keli ani script map wali file asli tri console disto.

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(container)
