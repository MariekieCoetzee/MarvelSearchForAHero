
const dataSet = (items)  =>{
    let dataArr = [];
    items.map((item, index) => {
      let randomColor =
        "rgb(" +
        Math.floor(Math.random() * 256) +
        "," +
        Math.floor(Math.random() * 256) +
        "," +
        Math.floor(Math.random() * 256) +
        ")";

      dataArr.push({
        data: [
          item.comics.available,
          item.stories.available,
          item.series.available,
          item.events.available
        ],
        color: (opacity = 1) => randomColor,
        strokeWidth: 2, // optional
      });
    });

    return dataArr;
  };

 const legendSet = (items) => {
    let legendArr = [];
    items.map((item, index) => {
      legendArr.push(item.name.substring(0, 8));
    });
    return legendArr;
  };

  export default {dataSet, legendSet}