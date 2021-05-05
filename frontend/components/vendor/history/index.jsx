import React from 'react';
import {
  Table,
  Col,
  Card,
  CardTitle
} from 'reactstrap';
import PulseLoader from '../../loaders/pulse_loader';

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.fetchHistory();
  }

  render() {
    const {history} = this.props
    let history_rows;
    // if (this.state.loading) {
    //   return (
    //     <div className="loader__container">
    //       <PulseLoader />
    //     </div>
    //   );
    // }
    if(history.length > 0) {
      console.log(history)
      history_rows = history.map((h, idx) => (
        <tr key={idx}>
          <th scope="row">1</th>
          <td>{h.start_time}</td>
          <td>{h.end_time}</td>
          <td>{h.location}</td>
        </tr>
        )
      )
    } else {
      history_rows = (
        <tr>
          <td colSpan="4">No Previous Checkins</td>
        </tr>
      )
    }

    return (
      <Col md="12">
        <Card>
          <div className="p-3">
            <CardTitle><i className="mdi mdi-border-all mr-2"></i>Past Checkins</CardTitle>
          </div>
          <Table responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Start Time</th>
                <th scope="col">End Time</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            <tbody>
              {history_rows}
            </tbody>
          </Table>
        </Card>
      </Col>
    );
  }
}


export default Index;
