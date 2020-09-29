import React, { Component } from 'react';
import './App.css';
import Table from './component/Table/Table.jsx';

class App extends Component {
  state = {
    month: '',
    year: ''
  };
  componentDidUpdate() {}
  setMonth() {
    let thisMonth;
    let selector;
    selector = document.querySelector('#month');
    //console.log(selector);
    thisMonth = selector.options[selector.selectedIndex];
    thisMonth = thisMonth.value;
    console.log(thisMonth);
    this.setState({ month: thisMonth });
  }
  render() {
    return (
      <div id='calender'>
        <div id='calender'>
          <Table data={this.state.data} />
        </div>
        <form className='form' id='form' action=''>
          <div className='form-row'>
            <div className='form-group col'>
              <label htmlFor='days'>Days</label>
              <select className='form-control' name='days' id='days'></select>
            </div>
            <div className='form-group  col'>
              <label htmlFor='month'>month</label>
              <select
                onChange={e => {
                  this.setMonth(e);
                }}
                className='form-control'
                name='month'
                id='month'
              >
                <option value={1}>January</option>
                <option value={2}>February</option>
                <option value={3}>March</option>
                <option value={4}>April</option>
                <option value={5}>May</option>
                <option value={6}>June</option>
                <option value={7}>July</option>
                <option value={8}>August</option>
                <option value={9}>September</option>
                <option value={10}>October</option>
                <option value={11}>November</option>
                <option value={12}>December</option>
              </select>
            </div>
            <div className='form-group  col'>
              <label htmlFor='years'>years</label>
              <select className='form-control' name='years' id='years'>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
                <option value={2005}>2005</option>
                <option value={2006}>2006</option>
                <option value={2007}>2007</option>
                <option value={2008}>2008</option>
                <option value={2009}>2009</option>
                <option value={2010}>2010</option>
                <option value={2011}>2011</option>
                <option value={2012}>2012</option>
                <option value={2013}>2013</option>
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020} selected>
                  2020
                </option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025}>2025</option>
                <option value={2026}>2026</option>
                <option value={2027}>2027</option>
                <option value={2028}>2028</option>
                <option value={2029}>2029</option>
                <option value={2030}>2030</option>
              </select>
            </div>
          </div>
        </form>
        <button className='form-control btn btn-success btn-' id='reserved'>
          Show Reserved Days
        </button>
        <div id='unorderdList'></div>
      </div>
    );
  }
}

export default App;
