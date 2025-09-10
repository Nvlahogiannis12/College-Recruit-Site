//this was Remy
let body = document.getElementsByTagName("BODY")[0];
function moveView() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let maxAnglePositive = 10;
  let maxAngleNegative = -10;
  let res = 50;
  let container = document.createElement("div");
  container.classList.add("box-container");
  body.insertAdjacentElement("afterbegin", container);
  for (let i = 0; i < res; i++) {
    let row = document.createElement("div");
    row.classList.add("box-row");
    row.setAttribute("style", `height: ${height / res}px`);
    container.append(row);
    for (let j = 0; j < res; j++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.setAttribute("style", `width: ${width / res}px;`);
      let hAngleSplit = maxAnglePositive - maxAngleNegative;
      let hAngle = document.createAttribute("data-h-angle");
      hAngle.value = (hAngleSplit / res) * j - maxAnglePositive;
      box.setAttributeNode(hAngle);
      let myId = `${i}_${j}`;
      box.id = myId;
      // box.textContent = `${box.getAttribute("data-h-angle")}`;
      box.setAttribute("onmouseover", `angler('${myId.toString()}')`);
      row.append(box);
    }
  }
}

moveView();
