

function Home() {
  return (
    <div>
      <h1 className="title">React-Study</h1>
      <div className="list">
        <a href="/counter" style={{fontSize: '2rem'}}>- Counter</a>
        <br/>
        <a href="/toaster" style={{fontSize: '2rem'}}>- Toaster</a>
      </div>
    </div>
  );
}

export default Home;
