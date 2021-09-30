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

  times = times.filter(e => e.timeuntil > -3600);

  times.sort(function (a, b) {
    return a.timeuntil - b.timeuntil;
  });


  return (
    <div className="App">
      <Nav></Nav>
      <div class='row mt-2 px-3'>
      <div class='col-md-6'> 
      <Widget title='Schedule' subtitle={'Up Next: ' + times[0].item.title} trailing={arrowRight}>
        {
          times.map(item => {
            var timeuntil = item.timeuntil;
            var d = Math.abs(Math.ceil(timeuntil / (3600*24)));
            var h = Math.abs(Math.floor(timeuntil % (3600*24) / 3600));
            var m = Math.abs(Math.floor(timeuntil % 3600 / 60));
            var s = Math.abs(Math.floor(timeuntil % 60));

            var timeuntilString = '';
            if (d > 1) {
              timeuntilString = d + ' Days'
            } else if (h > 0) {
              timeuntilString = h + 'hr ' + m + 'min'
            } else {
              timeuntilString = m + 'min ' + s + 's'
            }

            timeuntilString = timeuntilString + (timeuntil < 0 ? ' Ago' : ' Away')

            var options = { weekday: 'long', hour: 'numeric', minute: 'numeric' }

            var datestr = new Date(item.item.datetime).toLocaleDateString("en-US", options);

            var finalstr = ''

            finalstr = timeuntilString
            if (d > 1) {
              finalstr = new Date(item.item.datetime).toLocaleDateString("en-US", options)
            }

            return <div>
              <div class="modal fade" id={item.item.title} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">{item.item.title}</h5>
                    </div>
                    <div class="modal-body">
                      {datestr} <br></br>
                      {timeuntilString} <br></br>
                      {item.item.location}
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
              <p data-toggle="modal" data-target={"#" + item.item.title}><b>{item.item.title}</b>{' - ' + finalstr}</p>
            </div>
          })
        }
      </Widget>
      <Widget title='Discord' subtitle='Join Now' trailing={external} onClick={() =>
        window.open('https://discord.gg/bYBzYV88tZ')
      }></Widget>
      </div>
      <div class='col-md-6 py-0'>
      <Widget title='YouTube' subtitle='Link Coming Soon' trailing={external}></Widget>
      <Widget title='Twitch' subtitle='Link Coming Soon' trailing={external}></Widget>
      </div>
      </div>
    </div>
  );
}

export default App;
