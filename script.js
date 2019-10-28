window.onload = function(){
  chrome.tabs.getSelected(null, function(tab){
    var colors_ary = [
      [
        "#ff0000", "#ff007f", "#ff00ff", "#7f00ff", "#0000ff", "#007fff", "#00ffff", "#00ff7f", "#00ff00", "#7fff00", "#ffff00", "#ff7f00"
      ],
      [
        "#ff0505", "#ff0582", "#ff05ff", "#8205ff", "#0505ff", "#0582ff", "#05ffff", "#05ff82", "#05ff05", "#82ff05", "#ffff05", "#ff8205"
      ],
      [
        "#ff0a0a", "#ff0a84", "#ff0aff", "#840aff", "#0a0aff", "#0a84ff", "#0affff", "#0aff84", "#0aff0a", "#84ff0a", "#ffff0a", "#ff840a"
      ],
      [
        "#ff0f0f", "#ff0f87", "#ff0fff", "#870fff", "#0f0fff", "#0f87ff", "#0fffff", "#0fff87", "#0fff0f", "#87ff0f", "#ffff0f", "#ff870f"
      ],
      [
        "#ff1414", "#ff1489","#ff14ff", "#8914ff", "#1414ff", "#1489ff", "#14ffff", "#14ff89", "#14ff14", "#89ff14", "#ffff14", "#ff8914"
      ],
      [
      "#ff1919", "#ff198c", "#ff19ff", "#8c19ff", "#1919ff", "#198cff", "#19ffff", "#19ff8c", "#19ff19", "#8cff19", "#ffff19", "#ff8c19",
      ],
      [
        "#ff1e1e", "#ff1e8e", "#ff1eff", "#8e1eff", "#1e1eff", "#1e8eff", "#1effff", "#1eff8e", "#1eff1e", "#8eff1e", "#ffff1e", "#ff8e1e"
      ],
      [
        "#ff2323", "#ff2391", "#ff23ff", "#9123ff", "#2323ff", "#2391ff", "#23ffff", "#23ff91", "#23ff23", "#91ff23", "#ffff23", "#ff9123"
      ],
      [
        "#ff2828", "#ff2893", "#ff28ff", "#9328ff", "#2828ff", "#2893ff", "#28ffff", "#28ff93", "#28ff28", "#93ff28", "#ffff28", "#ff9328"
      ],
      [
        "#ff2d2d", "#ff2d96", "#ff2dff", "#962dff", "#2d2dff", "#2d96ff", "#2dffff", "#2dff96", "#2dff2d", "#96ff2d", "#ffff2d", "#ff962d"
      ],
      [
        "#ff3333", "#ff3399", "#ff33ff", "#9933ff", "#3333ff", "#3399ff", "#33ffff", "#33ff99", "#33ff33", "#99ff33", "#ffff33", "#ff9933"
      ],
      [
        "#ff3838", "#ff389b", "#ff38ff", "#9b38ff", "#3838ff", "#389bff", "#38ffff", "#38ff9b", "#38ff38", "#9bff38", "#ffff38", "#ff9b38"
      ],
      [
        "#ff3d3d", "#ff3d9e", "#ff3dff", "#9e3dff", "#3d3dff", "#3d9eff", "#3dffff", "#3dff9e", "#3dff3d", "#9eff3d", "#ffff3d", "#ff9e3d"
      ],
      [
        "#ff4242", "#ff42a0", "#ff42ff", "#a042ff", "#4242ff", "#42a0ff", "#42ffff", "#42ffa0", "#42ff42", "#a0ff42", "#ffff42", "#ffa042"
      ],
      [
        "#ff4747", "#ff47a3", "#ff47ff", "#a347ff", "#4747ff", "#47a3ff", "#47ffff", "#47ffa3", "#47ff47", "#a3ff47", "#ffff47", "#ffa347"
      ],
      [
        "#ff4c4c", "#ff4ca5", "#ff4cff", "#a54cff", "#4c4cff", "#4ca5ff", "#4cffff", "#4cffa5", "#4cff4c", "#a5ff4c", "#ffff4c", "#ffa54c"
      ],
      [
        "#ff5151", "#ff51a8", "#ff51ff", "#a851ff", "#5151ff", "#51a8ff", "#51ffff", "#51ffa8", "#51ff51", "#a8ff51", "#ffff51", "#ffa851"
      ],
      [
        "#ff5656", "#ff56aa", "#ff56ff", "#aa56ff", "#5656ff", "#56aaff", "#56ffff", "#56ffaa", "#56ff56", "#aaff56", "#ffff56", "#ffaa56"
      ],
      [
        "#ff5b5b", "#ff5bad", "#ff5bff", "#ad5bff", "#5b5bff", "#5badff", "#5bffff", "#5bffad", "#5bff5b", "#adff5b", "#ffff5b", "#ffad5b"
      ],
      [
        "#ff6060", "#ff60af", "#ff60ff", "#af60ff", "#6060ff", "#60afff", "#60ffff", "#60ffaf", "#60ff60", "#afff60", "#ffff60", "#ffaf60"
      ],
      [
        "#ff6666", "#ff66b2", "#ff66ff", "#b266ff", "#6666ff", "#66b2ff", "#66ffff", "#66ffb2", "#66ff66", "#b2ff66", "#ffff66", "#ffb266"
      ],
      [
        "#ff6b6b", "#ff6bb5", "#ff6bff", "#b56bff", "#6b6bff", "#6bb5ff", "#6bffff", "#6bffb5", "#6bff6b", "#b5ff6b", "#ffff6b", "#ffb56b"
      ],
      [
        "#ff7070", "#ff70b7", "#ff70ff", "#b770ff", "#7070ff", "#70b7ff", "#70ffff", "#70ffb7", "#70ff70", "#b7ff70", "#ffff70", "#ffb770"
      ],
      [
        "#ff7575", "#ff75ba", "#ff75ff", "#ba75ff", "#7575ff", "#75baff", "#75ffff", "#75ffba", "#75ff75", "#baff75", "#ffff75", "#ffba75"
      ],
      [
        "#ff7a7a", "#ff7abc", "#ff7aff", "#bc7aff", "#7a7aff", "#7abcff", "#7affff", "#7affbc", "#7aff7a", "#bcff7a", "#ffff7a", "#ffbc7a"
      ]
    ]
    var app = document.getElementById("app")
    console.log(app)
    var table = document.createElement("table")
    var tbody = document.createElement("tbody")
    app.appendChild(table)
    table.appendChild(tbody)

    var i = 0
    colors_ary.forEach(function(colors){
      var tr = document.createElement("tr")
      tr.setAttribute("id", `colors-${i}`)
      tbody.appendChild(tr)
      i += 1
      colors.forEach(function(color){
        var td = document.createElement("td")
        td.textContent = color
        td.style.backgroundColor = color
        tr.appendChild(td)
      })
    })
  })
}

