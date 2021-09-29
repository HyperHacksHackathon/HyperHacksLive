import './App.css';
import Nav from './Nav';
import Widget from './Widget';
import arrowRight from './icons/arrow-right.svg';
import external from './icons/external.svg';
import schedule from './schedule.json';


function App() {
  var times = schedule.map(item => {
    var date = new Date(item.datetime);
    var timeuntil = ((date - Date.now()) / 1000).toFixed(0);
    return {
      'item': item,
      'timeuntil': timeuntil
    }
  });

  times = times.filter(e => e.timeuntil > 0);

  times.sort(function (a, b) {
    return a.timeuntil - b.timeuntil;
  });


  return (
    <div className="App">
      <Nav></Nav>
      <Widget title='Schedule' subtitle={'Up Next: ' + times[0].item.title} trailing={arrowRight}>
        {

          times.map(item => {
            var timeuntil = item.timeuntil;
            var d = Math.ceil(timeuntil / (3600*24));
            var h = Math.floor(timeuntil % (3600*24) / 3600);
            var m = Math.floor(timeuntil % 3600 / 60);
            var s = Math.floor(timeuntil % 60);

            var timeuntilString = '';
            if (d > 1) {
              timeuntilString = d + ' Days'
            } else if (h > 0) {
              timeuntilString = h + 'hr ' + m + 'min'
            } else {
              timeuntilString = m + 'min ' + s + 's'
            }

            var options = { weekday: 'long', hour: 'numeric', year: 'numeric' }
            return <p>{item.item.title + ' - ' + timeuntilString}</p>
          })
        }
      </Widget>
      <Widget title='Discord' subtitle='Join Now' trailing={external} onClick={() =>
        window.open('https://discord.gg/bYBzYV88tZ')
      }></Widget>
      {/* <Widget title='YouTube' subtitle='Livestream' trailing={external}></Widget> */}

    </div>
  );
}

export default App;
