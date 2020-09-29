import React from 'react';

function Table(props) {
  const daysOfMonth = ['So', 'Mo', 'Tu', 'We', 'Th', 'Fri', 'Sa'];
  const ListOfMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  let today = new Date();
  //first row //Days of Month
  const daysRow = daysOfMonth.map((val, i) => {
    return <th key={i}>{val}</th>;
  });
  const trhead1 = <tr> {daysRow}</tr>;

  let firtsDayOfMonth = new Date(
    `${today.getMonth() + 1}-1-${today.getFullYear()}`
  ).getDay();
  let firstDateOfMonth = new Date(
    `${today.getMonth() + 1}-1-${today.getFullYear()}`
  );
  let days = 0;
  while (firstDateOfMonth.getMonth() === today.getMonth()) {
    days++;
    firstDateOfMonth.setDate(firstDateOfMonth.getDate() + 1);
  }
  const daysOfMonthCount = days + firtsDayOfMonth;

  let firstoday = firtsDayOfMonth;
  let weekcount = 0;
  let dayCountOfMonth = 0;
  let days2 = days + firtsDayOfMonth;
  let tr;

  let list = [];
  for (weekcount; dayCountOfMonth < days2; ) {
    let dayCountOfWeek = 0;
    let td = [];
    tr = <tr key={weekcount}>{td}</tr>;
    for (dayCountOfWeek; dayCountOfWeek < 7; ) {
      td.push(
        <td key={dayCountOfMonth}>
          {dayCountOfMonth >= firstoday && dayCountOfMonth < daysOfMonthCount
            ? dayCountOfMonth - firstoday + 1
            : null}
        </td>
      );

      /* td.value = dayCountOfMonth - firstoday + 1;
      if (dayCountOfMonth - firstoday + 1 === today.getDate()) {
        td.className = 'bg-success';
      } else {
        td.appendChild(document.createTextNode(''));
      } */
      //tr.appendChild(td);
      dayCountOfWeek++;
      dayCountOfMonth++;
    }
    weekcount++;
    list.push(tr);
  }
  return (
    <table className='table table-bordered text-center'>
      <thead>{trhead1}</thead>
      <tbody>{list}</tbody>
    </table>
  );
}

export default Table;
