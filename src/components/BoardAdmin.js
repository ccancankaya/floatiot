/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import DateTimePicker from 'react-datetime-picker';
import UserService from "../services/user.service";

const BoardAdmin = () => {

  const [data, setData] = useState([])
  const [tableName, setTableName] = useState('')
  const [toStart, onChange] = useState(new Date());
  const [from, onFrom] = useState(new Date());
  const [pressure, onSetPressure] = useState()


  useEffect(() => {
    // onSetPressure(1)
    UserService.getAdminBoard(1, 1).then(function (response) {
      var data = JSON.stringify(response.data)
      var data2 = JSON.parse(data)

      var data3 = data2.map(item => {
        let robj = {}
        robj.value = (item.value - 4).toString() + " bar"
        robj.time = new Date(item.time).toLocaleString("tr-TR")

        return robj

      })
      setData(data3)
    })
      .catch(function (error) {
        console.log(error);
      });

  }, []);


  useEffect(() => {
    UserService.getAdminBoard(1, 1).then(function (response) {
      var data = JSON.stringify(response.data)
      var data2 = JSON.parse(data)


      var data3 = data2.map(item => {
        let robj = {}
        if (pressure === 2) {
          if ((item.value - 4) <= 2) {
            robj.value = Math.abs((item.value - 4)).toString() + " bar"
            robj.time = new Date(item.time).toLocaleString("tr-TR")
          }
        } else if (pressure === 3) {
          if ((item.value - 4) > 2) {
            robj.value = Math.abs((item.value - 4)).toString() + " bar"
            robj.time = new Date(item.time).toLocaleString("tr-TR")
          }
        } else if (pressure === 1) {
          robj.value = Math.abs((item.value - 4)).toString() + " bar"
          robj.time = new Date(item.time).toLocaleString("tr-TR")
        }


        return robj


      })
      setData(data3)
    })
      .catch(function (error) {
        console.log(error);
      });

  }, [pressure]);

  function getFromDate(){
    var time=toStart.getHours()
    var time3=from.getHours()
    var time4
    var time2
    var date1
    var date2
    if(time.toString().length===1){
        time2='0'+time.toString()
        date1=toStart.getFullYear().toString()+'-'+'0'+(toStart.getMonth()+1).toString()+'-'+
        '0'+toStart.getDate().toString()+'T'+time2+'%'+'3A'+toStart.getMinutes().toString()+'%'+'3A'+'00'+'%'+'2B00'+'%'+
        '3A00'
        console.log(date1)
        // new Date().getMinutes().toString()+'+03:00'
    }else{
         date1=toStart.getFullYear().toString()+'-'+'0'+(toStart.getMonth()+1).toString()+'-'+
        toStart.getDate().toString()+'T'+toStart.getHours().toString()+'%'+'3A'+toStart.getMinutes().toString()+'%'+'3A'+'00'+'%'+'2B00'+'%'+
        '3A00'
    }

    if(time3.toString().length===1){
      time4='0'+time.toString()
      date2=from.getFullYear().toString()+'-'+'0'+(from.getMonth()+1).toString()+'-'+
      '0'+from.getDate().toString()+'T'+time4+'%'+'3A'+from.getMinutes().toString()+'%'+'3A'+'00'+'%'+'2B00'+'%'+
      '3A00'
      console.log(date2)
      // new Date().getMinutes().toString()+'+03:00'
  }else{
       date2=from.getFullYear().toString()+'-'+'0'+(from.getMonth()+1).toString()+'-'+
      from.getDate().toString()+'T'+from.getHours().toString()+'%'+'3A'+from.getMinutes().toString()+'%'+'3A'+'00'+'%'+'2B00'+'%'+
      '3A00'
  }
    console.log(date2)
    UserService.getAdminBoard(date1, date2).then(function (response) {
      var data = JSON.stringify(response.data)
      var data2 = JSON.parse(data)

      var data3 = data2.map(item => {
        let robj = {}
        robj.value = (item.value - 4).toString() + " bar"
        robj.time = new Date(item.time).toLocaleString("tr-TR")

        return robj

      })
      setData(data3)
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  // useEffect(() => {
  //   var time=toStart.getHours()
  //   var time3=from.getHours()
  //   var time4
  //   var time2
  //   var date1
  //   var date2
  //   if(time.toString().length===1){
  //       time2='0'+time.toString()
  //       date1=toStart.getFullYear().toString()+'-'+'0'+(toStart.getMonth()+1).toString()+'-'+
  //       '0'+toStart.getDate().toString()+'T'+time2+'%'+'3A'+toStart.getMinutes().toString()+'%'+'3A'+'00'+'%'+'2B00'+'%'+
  //       '3A00'
  //       console.log(date1)
  //       // new Date().getMinutes().toString()+'+03:00'
  //   }else{
  //        date1=toStart.getFullYear().toString()+'-'+'0'+(toStart.getMonth()+1).toString()+'-'+
  //       '0'+toStart.getDate().toString()+'T'+toStart.getHours().toString()+'%'+'3A'+toStart.getMinutes().toString()+'%'+'3A'+'00'+'%'+'2B00'+'%'+
  //       '3A00'
  //   }

  //   if(time3.toString().length===1){
  //     time4='0'+time.toString()
  //     date2=from.getFullYear().toString()+'-'+'0'+(from.getMonth()+1).toString()+'-'+
  //     '0'+from.getDate().toString()+'T'+time4+'%'+'3A'+from.getMinutes().toString()+'%'+'3A'+'00'+'%'+'2B00'+'%'+
  //     '3A00'
  //     console.log(date2)
  //     // new Date().getMinutes().toString()+'+03:00'
  // }else{
  //      date2=from.getFullYear().toString()+'-'+'0'+(from.getMonth()+1).toString()+'-'+
  //     '0'+from.getDate().toString()+'T'+from.getHours().toString()+'%'+'3A'+from.getMinutes().toString()+'%'+'3A'+'00'+'%'+'2B00'+'%'+
  //     '3A00'
  // }
  //   console.log(date2)
  //   UserService.getAdminBoard(date1, date2).then(function (response) {
  //     var data = JSON.stringify(response.data)
  //     var data2 = JSON.parse(data)

  //     var data3 = data2.map(item => {
  //       let robj = {}
  //       robj.value = (item.value - 4).toString() + " bar"
  //       robj.time = new Date(item.time).toLocaleString("tr-TR")

  //       return robj

  //     })
  //     setData(data3)
  //   })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  // }, [toStart, from]);

  const columns = [
    { label: 'Değer', name: 'value' },
    { label: 'Zaman', name: 'time' }

  ];

  return (
    <div style={{ maxWidth: '100%' }}>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="tableName" className="form-label">Tabloya isim verin :</label>
            <input type="text" className="form-control" id="tableName" onChange={e => setTableName(e.target.value)} />
          </div>
        </div>
        <div className="col-md-2">
          <label htmlFor="tableName" className="form-label">Başlangıç tarihi :</label>
          <DateTimePicker
            onChange={onChange}
            value={toStart}
          />

        </div>
        <div className="col-md-2">
          <label htmlFor="tableName" className="form-label">Bitiş tarihi :</label>
          <DateTimePicker
            onChange={onFrom}
            value={from}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="tableName" className="form-label">Basınç aralığı :</label>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Basınç
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" onClick={() => onSetPressure(2)}>1 - 2 bar</a></li>
              <li><a className="dropdown-item" onClick={() => onSetPressure(3)}>3 - 5 bar</a></li>
              <li><a className="dropdown-item" onClick={() => onSetPressure(1)}>Tümü</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <button className="btn btn-success" type="button" onClick={()=>getFromDate()}>Filtrele</button>
        </div>
      </div>
      <MUIDataTable
        columns={columns}
        data={data}
        title={tableName === '' ? 'Analog Input' : tableName}
      />
    </div>
  )
};

export default BoardAdmin;
