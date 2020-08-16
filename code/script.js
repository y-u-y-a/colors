// HTMLの読み込みが完了してから実行
window.onload = () => {
  chrome.tabs.getSelected(null, () => {
    let color_codes = [
      // [
      //   "#FBEFEF", "#FBF2EF", "#FBF5EF", "#FBF8EF", "#FBEBEF", "#F8EFEF", "#F5EFEF", "#F2EFEF", "#EFFBEF", "#EFFBF2", "#EFFBF5", "#EFFBF8", "#EFFBFB", "#EFF8FF", "#EFF5FF", "#EFF2FF", "#EFFBEF", "#EFFBEF", "#EFFBEF", "#EFFBEF", "#EFFBEF", "#EFFBEF", "#EFFBEF", "#EFFBEF", "#EFFBEF"
      // ],
      // [
      //   "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF"
      // ],
      // [
      //   "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF", "#FBEFEF"
      // ],
      // 　赤
      [
        "#FBEFEF", "#F8E0E0", "#F6CECE", "#F5A9A9", "#F78181", "#FA5858", "#FE2E2E", "#FF0000", "#DF0101", "#B40404", "#8A0808", "#610B0B", "#3B0B0B", "#2A0A0A", "#190707",
      ],
      [
        "#FBF2EF", "#F8E6E0", "#F6D8CE", "#F5BCA9", "#F79F81", "#FA8258", "#FE642E", "#FF4000", "#DF3A01", "#B43104", "#8A2908", "#61210B", "#3B170B", "#2A120A", "#190B07"
      ],
      [
        "#FBF5EF", "#F8ECE0", "#F6E3CE", "#F5D0A9", "#F7BE81", "#FAAC58", "#FE9A2E", "#FF8000", "#DF7401", "#B45F04", "#8A4B08", "#61380B", "#3B240B", "#2A1B0A", "#191007"
      ],
      [
        "#FBF8EF", "#F7F2E0", "#F5ECCE", "#F3E2A9", "#F5DA81", "#F7D358", "#FACC2E", "#FFBF00", "#DBA901", "#B18904", "#886A08", "#5F4C0B", "#3A2F0B", "#29220A", "#181407"
      ],
      // 黄
      [
        "#FBFBEF", "#F7F8E0", "#F5F6CE", "#F2F5A9", "#F3F781", "#F4FA58", "#F7FE2E", "#FFFF00", "#D7DF01", "#AEB404", "#868A08", "#5E610B", "#393B0B", "#292A0A", "#181907"
      ],
      // 緑
      [
        "#F8FBEF", "#F1F8E0", "#ECF6CE", "#E1F5A9", "#D8F781", "#D0FA58", "#C8FE2E", "#BFFF00", "#A5DF00", "#86B404", "#688A08", "#4B610B", "#2E3B0B", "#222A0A", "#141907"
      ],
      [
        "#F5FBEF", "#ECF8E0", "#E3F6CE", "#D0F5A9" ,"#BEF781", "#ACFA58", "#9AFE2E", "#80FF00", "#74DF00", "#5FB404", "#4B8A08", "#38610B", "#243B0B", "#1B2A0A", "#101907"
      ],
      [
        "#F2FBEF", "#E6F8E0", "#D8F6CE", "#BCF5A9", "#9FF781", "#82FA58", "#64FE2E", "#40FF00", "#3ADF00", "#31B404", "#298A08", "#21610B", "#173B0B", "#122A0A", "#0B1907"
      ],
      [
        "#EFFBEF", ""
      ]

    ];
    let app = document.getElementById("app");
    let table = document.createElement("table");
    app.appendChild(table);

    // tr作成
    color_codes.forEach( (colors) => {
      let tr = document.createElement("tr");
      table.appendChild(tr);
      // td作成
      colors.forEach( (color_code) => {
        let td = document.createElement("td");
        [td.textContent, td.style.backgroundColor] = [color_code, color_code];
        tr.appendChild(td);
      });
    });
  });
}


// [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
// [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
